# Contrat technique TAGORA_HANDOFF_V1

## Objectif

Formaliser le **contrat technique conceptuel** du handoff d'accès TAGORA : Nexus (access broker) → module SaaS autonome, après comparaison officielle des quatre modèles identité/auth.

Cette décision **complète** DEC-020 / ADR-0008 et DEC-021 / ADR-0009. Elle **ne les remplace pas**.

Buts :

- lancer un module depuis Nexus sans second mot de passe final ;
- créer une **session locale module** après handoff ;
- conserver les rôles et permissions **locaux** ;
- ne jamais transporter mot de passe, hash, secret MFA, token Graph, token Supabase, cookie Nexus ou rôle métier universel.

```text
TAGORA_HANDOFF_V1=OFFICIAL_TECHNICAL_CONTRACT
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

## Portée

Écosystème TAGORA. Décision **normative**. Contrat **conceptuel** : aucun endpoint runtime, aucun Entra réel, aucun OAuth réel, aucune DB, aucun code produit.

Emplacement TOS : `docs/02_standards/`.

Comparaison source : [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../04_adoption_modules/audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md).

---

## Statut

```text
HANDOFF_V1_CONTRACT_STATUS=OFFICIAL
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
SECRET_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
CROSS_PROJECT_IMPACT=YES
RULE_CHANGE=YES
TOS_SCOPE_ONLY=YES
SELECTED_PILOT_MODULE=STOCK_PREMIUM
PILOT_SELECTION_APPROVED=YES
PILOT_IMPLEMENTATION_AUTHORIZED=NO
```

Décision Martin : **DEC-022** (contrat) ; **DEC-023** (sélection pilote)  
ADR : **ADR-0010** ; **ADR-0011**  
Validation : **VALD-101** ; **VALD-102**  
Date : **2026-08-16**  
Décideur : **Martin ST-Gelais — Direction**

---

## Invariants

```text
CENTRAL_IDENTITY_AUTHORITY_TARGET=Microsoft Entra External ID
CENTRAL_PORTAL_AND_ACCESS_BROKER=TAGORA Nexus
CENTRAL_LOGIN=https://app.tagora.ca/login
CENTRAL_USER_ID=TAGORA_USER_ID
CENTRAL_EXTERNAL_IDENTITY_KEY=issuer + subject
EMAIL_IS_CANONICAL_IDENTITY=NO
SHARED_PASSWORD_DATABASE=NO
GLOBAL_SHARED_COOKIE=NO
MODULE_LOCAL_SESSION=YES
MODULE_LOCAL_ROLES=YES
MODULE_LOCAL_PERMISSIONS=YES
MODULE_AUTO_GRANT_FROM_TAGORA_ACCOUNT=NO
ROLE_PROPAGATION_CROSS_MODULE=NO
PASSWORD_COPY=NO
PASSWORD_HASH_MIGRATION=NO
MFA_SECRET_MIGRATION=NO
```

---

## Acteurs

| Acteur | Rôle contractuel |
|---|---|
| **NEXUS** | `ACCESS_BROKER` — décide fail-closed, émet le handoff, audit central |
| **ENTRA** | `IDENTITY_PROVIDER` — authentifie l'humain (cible). N'est **pas** le transporteur du handoff module |
| **MODULE** | `RELYING_APPLICATION_WITH_LOCAL_SESSION` — rachète, lie, crée sa session métier |
| **USER** | `TAGORA_USER_ID` — identité centrale stable |
| **MODULE_LOCAL_USER** | référence d'identité locale du module |
| **TENANT** | contexte commercial central |
| **MODULE_SUBSCRIPTION** | entitlement commercial du tenant sur le module |
| **USER_MODULE_ACCESS** | entitlement d'accès de l'utilisateur sur le module |
| **MODULE_LOCAL_ROLE** | autorisation métier **locale** au module |

```text
NEXUS_SESSION != MODULE_SESSION
ENTRA_ID_TOKEN != HANDOFF_ASSERTION
GRAPH_MAILBOX_IDENTITY != ENTRA_EXTERNAL_ID_IDENTITY
```

---

## Protocole conceptuel (20 exigences)

Le handoff **n'est pas implémenté** ici. Le protocole cible couvre au minimum :

1. **Lancement depuis Nexus** — catalogue `/modules/{slug}` puis décision d'accès.
2. **Validation préalable** — `TAGORA_USER_ID` ; `tenant` ; `MODULE_SUBSCRIPTION` ; `USER_MODULE_ACCESS`. Tout manque = DENY.
3. **Handoff à usage unique** — une référence one-time, non réutilisable après succès, échec ou expiration.
4. **Audience module explicite** — `module_key` ∈ {`time`, `mail`, `stock`, `pulse`}. Un handoff Time ne peut pas ouvrir Mail.
5. **Expiration courte** — TTL court. Aucune durée exacte figée ici (non encore contractée TOS).
6. **Anti-replay** — la référence one-time est consommée à la rédemption. Rejeu = DENY + audit.
7. **`return_to` validé** — allowlist par module (origine canonique + chemins locaux). Hors allowlist = DENY.
8. **Création de session locale module** — après rédemption et lien d'identité réussis.
9. **Conservation des rôles locaux** — le module résout `time:*` / `mail:*` / `stock:*` / `pulse:*` chez lui.
10. **Aucun rôle central injecté comme rôle métier.**
11. **Aucun mot de passe module transmis.**
12. **Aucun secret module transmis.**
13. **Aucun cookie Nexus partagé** — `GLOBAL_SHARED_COOKIE=NO`.
14. **Aucun token durable exposé navigateur.**
15. **Fail closed si mapping ambigu.**
16. **Audit Nexus + module** — émission, rédemption, deny, replay, ambiguïté.
17. **Logout module local indépendant** de la session centrale. Logout global = **contrat futur**.
18. **Capacité de retour Nexus** — le module peut renvoyer vers `https://app.tagora.ca` (portail), sans cookie partagé.
19. **Entrée directe module URL** sans second mot de passe **final**.
20. **Migration progressive module par module.**

```text
ONE_TIME_USE=YES
SHORT_TTL=YES
AUDIENCE_BOUND=YES
MODULE_KEY_BOUND=YES
TENANT_BOUND=YES
USER_BOUND=YES
RETURN_TO_ALLOWLIST=YES
REPLAY_PROTECTION=YES
FAIL_CLOSED=YES
AUDIT_REQUIRED=YES
SECRETLESS_BROWSER_PAYLOAD_TARGET=YES
NO_SHARED_COOKIE=YES
NO_PASSWORD_TRANSFER=YES
```

---

## Flux conceptuel

### A. Lancement Nexus → module

```text
USER authentifié TAGORA (cible Entra via Nexus)
  -> Nexus identifie TAGORA_USER_ID + TENANT
  -> Nexus vérifie MODULE_SUBSCRIPTION
  -> Nexus vérifie USER_MODULE_ACCESS
  -> DENY : pas de handoff, audit
  -> ALLOW : Nexus émet HANDOFF one-time audience-bound
  -> navigateur transporte UNIQUEMENT la référence opaque
  -> MODULE adapter rachète serveur-à-serveur
  -> MODULE résout TAGORA_IDENTITY_LINK (fail-closed)
  -> MODULE crée MODULE_SESSION locale
  -> MODULE ouvre return_to allowlisté
```

### B. Entrée directe module URL

Cibles : `time.tagora.ca` · `mail.tagora.ca` · `stock.tagora.ca` · `pulse.tagora.ca`

```text
SI MODULE_SESSION valide
  -> ouvrir le module
SINON
  -> module redirige vers login central Nexus
  -> https://app.tagora.ca/login
  -> (cible) Entra
  -> Nexus access broker
  -> handoff
  -> session locale module
```

```text
SECOND_PASSWORD_FINAL_TARGET=NO
MODULE_SPECIFIC_PASSWORDS_FINAL_TARGET=NO
```

Aujourd'hui, les quatre modules exigent encore un mot de passe local. C'est un **état courant**, pas la cible.

### C. Sessions

```text
NEXUS_SESSION != MODULE_SESSION
MODULE_SESSION_LOCAL=YES
GLOBAL_SHARED_COOKIE=NO
MODULE_SESSION_ISSUED_AFTER_HANDOFF=YES
MODULE_SESSION_SCOPE=MODULE_ONLY
```

Le logout module détruit `MODULE_SESSION` seulement. Il ne détruit pas `NEXUS_SESSION`. La stratégie de logout global n'est **pas** ce contrat.

---

## Claims conceptuels minimums

Claims du handoff (assertion côté serveur après rédemption). **Conceptuels.** Aucun encodage JWT/JWE imposé ici.

| Claim | Obligatoire | Rôle |
|---|---|---|
| `handoff_version` | OUI | version du contrat (`v1`) |
| `handoff_id` | OUI | identifiant unique d'émission |
| `issuer` | OUI | Nexus en tant qu'access broker |
| `audience` | OUI | module cible (égal à `module_key`) |
| `tagora_user_id` | OUI | identité centrale |
| `tenant_id` | OUI | tenant commercial central |
| `module_key` | OUI | `time` \| `mail` \| `stock` \| `pulse` |
| `grant_id` | OUI | référence `USER_MODULE_ACCESS` / souscription |
| `issued_at` | OUI | émission |
| `expires_at` | OUI | expiration courte |
| `nonce_or_one_time_reference` | OUI | anti-replay / rédemption |
| `return_to` | OUI | cible allowlistée |
| `user_module_access` | OUI | `ALLOW` seulement — pas un rôle métier |
| `identity_assurance_level` | NON | utile plus tard si Entra l'expose |

Le navigateur **ne porte pas** ces claims. Il porte seulement la référence opaque one-time.

### Interdit dans le payload

```text
password
password_hash
MFA_secret
Graph token
Supabase token
module cookie
Nexus cookie
provider credentials
local role universel
secret
refresh token
access token durable
Mail.Send
Mail.ReadWrite
```

---

## Règle des rôles

Le handoff **ne transporte pas** de rôle métier universel.

Il peut seulement transporter l'autorisation centrale :

```text
USER_MODULE_ACCESS=ALLOW
```

Le module résout ensuite ses rôles/permissions locales.

| Module | Exemples locaux — restent dans le module |
|---|---|
| Time | `time:direction` `time:employe` `time:admin` |
| Mail | `mail:owner` `mail:admin` `mail:reviewer` |
| Stock | `stock:admin` `stock:direction` `stock:revendeur_b2b` |
| Pulse | `pulse:owner` `pulse:admin` `pulse:operator` |

```text
time:direction != stock:admin
mail:owner != pulse:owner
stock:admin != time:admin
pulse:owner != owner TAGORA
```

`MODULE_AUTO_GRANT_FROM_TAGORA_ACCOUNT=NO` — un compte TAGORA sans `MODULE_SUBSCRIPTION` + `USER_MODULE_ACCESS` n'ouvre aucun SaaS.

---

## TAGORA_IDENTITY_LINK

Le module **doit** pouvoir résoudre :

```text
TAGORA_USER_ID  ->  MODULE_LOCAL_USER_ID
```

Champs conceptuels minimums du lien (aucune table créée ici) :

| Champ | Rôle |
|---|---|
| `tagora_user_id` | identité centrale |
| `source_system` | système source du lien |
| `module_key` | `time` \| `mail` \| `stock` \| `pulse` |
| `link_status` | état du rattachement |
| `link_method` | méthode de rattachement |
| `verified_at` | vérification |
| références métier locales | selon adapter (voir ci-dessous) |

Complète le modèle DEC-021 (`issuer`, `subject`, `correlation_email`, IDs locaux). L'email reste **corrélation**, jamais clé finale.

```text
EMAIL=correlation / contact / login-local-legacy
EMAIL_IS_CANONICAL_IDENTITY=NO
HANDOFF_EMAIL_JOIN_FORBIDDEN=YES
```

Aucun handoff ne doit conclure un rattachement **uniquement** par email.

### Fail closed

```text
FAIL_CLOSED_IF=
  UNMATCHED
  DUPLICATE
  CONFLICT
  ORPHAN
  INACTIVE
  AMBIGUOUS_TENANT
  AMBIGUOUS_LOCAL_ACCOUNT
```

Ambiguïté tenant, compte local multiple, AppUser vs User non réconciliés, Auth sans fiche, fiche sans Auth : **DENY**. Pas de « meilleur effort ».

---

## Transport / crypto — options

Les contrats TOS antérieurs **ne figent pas** d'algorithme, de chemin HTTP, de magasin de nonce ni de durée exacte. Ce contrat compare seulement les familles.

| Option | Description | Navigateur | Anti-replay | Quatre modules |
|---|---|---|---|---|
| **A** | Assertion signée courte dans le navigateur | Claims visibles côté client | Possible seulement avec registre `jti`/nonce | Chaque module doit vérifier une signature |
| **B** | Code opaque one-time, racheté serveur-à-serveur | Code seulement | Naturel (consommation unique) | Un redeem Nexus ; pas de clé crypto partagée obligatoire dans le navigateur |
| **C** | Hybride : code opaque navigateur + assertion signée **uniquement** serveur-à-serveur après redeem | Code seulement | Code consommé + assertion audience-bound non navigateur | Redeem commun + assertion interne pour lier la session locale |

```text
RECOMMENDED_HANDOFF_PATTERN=C_HYBRID_ONE_TIME_OPAQUE_CODE_PLUS_SERVER_SIDE_SIGNED_ASSERTION
```

**Justification :**

- `SECRETLESS_BROWSER_PAYLOAD_TARGET=YES` — le navigateur ne reçoit pas l'assertion ni de token durable.
- Anti-replay — le code opaque est one-time.
- Sessions locales — l'assertion serveur-à-serveur lie `tagora_user_id` + `tenant_id` + `module_key` le temps de créer `MODULE_SESSION`, puis n'est pas exposée.
- Compatibilité quatre stacks (Supabase Time/Mail/Stock, Pulse cookie opaque) — tous ont un backend capable d'un redeem. Aucune clé de signature n'a à vivre dans le navigateur.
- L'option A expose des claims. L'option B est le cœur obligatoire ; C ajoute l'assertion **hors navigateur** pour audience/TTL sans inventer un JWT public.

Non figé ici (Human Gate / contrat d'implémentation ultérieur) : algorithme de signature, format exact du code, TTL chiffré, chemins HTTP, magasin anti-replay.

Entra reste l'IdP de l'humain. Le handoff n'est **pas** un OAuth commun inventé entre modules.

---

## Adapters module

Un adapter **par** module. Aucun adapter ne copie le modèle d'un autre.

```text
TIME_HANDOFF_ADAPTER
MAIL_HANDOFF_ADAPTER
STOCK_HANDOFF_ADAPTER
PULSE_HANDOFF_ADAPTER
```

Chaque adapter résout : `TAGORA_USER_ID` → user local, tenant/org local, account local, source de rôles locaux, création de session locale.

### TIME_HANDOFF_ADAPTER

```text
MODULE_KEY=time
MODULE_LOCAL_USER=auth.users.id UUID
MODULE_LOCAL_EMPLOYEE=chauffeurs.id bigint
LOCAL_TENANT=organizations.id UUID
LOCAL_COMPANY=organization_companies.id
LOCAL_ROLE_SOURCE=membership H4 + JWT Time  -> time:*
SESSION=Supabase locale / cookie host-only Time
```

Fail-closed si membership ambiguë, orphelin Auth/chauffeur, statut inactif non unifié, ou JOIN email seul.  
Ne pas copier password/hash/MFA.  
Ne pas traiter Time comme IdP.  
Phase 4D Lot 2 **inchangée**.

### MAIL_HANDOFF_ADAPTER

```text
MODULE_KEY=mail
MODULE_LOCAL_USER=profiles.id UUID
LOCAL_TENANT=organizations.id UUID
LOCAL_COMPANY=operating_companies.id
LOCAL_BRAND=brands.id (optionnel)
LOCAL_MAILBOX=mailboxes.id  (référence métier, pas identité)
LOCAL_ROLE_SOURCE=organization_members.org_role  -> mail:*
APP_AUTH != GRAPH_AUTH
```

Fail-closed si Graph `provider_object_id` est proposé comme Entra subject, si mailbox partagée ambiguë, ou si email seul.  
Aucun `Mail.Send` / `Mail.ReadWrite` dans l'identité centrale.  
Aucun token Graph dans le handoff.  
Session app Mail **≠** session Graph mailbox.

### STOCK_HANDOFF_ADAPTER

```text
MODULE_KEY=stock
MODULE_LOCAL_USER=auth.users.id UUID
MODULE_LOCAL_ACCOUNT=stock_premium_accounts.id UUID
LOCAL_TENANT=stock_premium_organizations.id UUID
LOCAL_DEALER=stock_premium_dealer_accounts.id (si revendeur)
LOCAL_ROLE_SOURCE=accounts.primary_role  -> stock:*
RLS=locale Stock
```

```text
auth user != account != dealer != tenant
organization_id TEXT slug != TENANT_ID
```

Fail-closed si 0 ou >1 account pour l'auth user (`AMBIGUOUS_LOCAL_ACCOUNT`), si tenant TEXT/UUID non résolu, si account non `active`.  
`time:admin` ≠ `stock:admin`.  
RLS reste locale. Compte TAGORA n'auto-accorde pas Stock.

### PULSE_HANDOFF_ADAPTER

```text
MODULE_KEY=pulse
MODULE_LOCAL_USER=AppUser.id
LEGACY_OPERATOR_USER=User.id  (réconciliation locale séparée, jamais seul match)
LOCAL_PROJECT=Project.id     (≠ tenant TAGORA)
LOCAL_ORG_PULSE=Organization.id  (≠ org TAGORA par défaut)
LOCAL_AGENT=Agent.id         (scope, ≠ Brand)
LOCAL_ROLE_SOURCE=AppUser.role  -> pulse:*
```

Fail-closed si AppUser/User non réconciliés (`AMBIGUOUS_LOCAL_ACCOUNT`), si `Project.id` est collé comme `tenant_id` central, si owner Pulse est promu owner TAGORA.  
Human handoff conversation **≠** TAGORA_HANDOFF_V1.  
Widget public X-Plod **hors** handoff staff.  
Customer **n'est pas** l'identité staff.

---

## Email

```text
EMAIL_IS_CANONICAL_IDENTITY=NO
HANDOFF_EMAIL_JOIN_FORBIDDEN=YES
```

L'email peut figurer comme `correlation_email` dans le lien d'identité. Il ne peut pas être la preuve unique de rédemption.

---

## Audit

Minimum conceptuel (Nexus **et** module) :

- `handoff_id`
- `tagora_user_id` (pas d'email comme clé d'audit finale)
- `tenant_id`
- `module_key`
- résultat : ALLOW / DENY / REPLAY / EXPIRED / AMBIGUOUS / UNMATCHED / …
- horodatage

Aucun secret, token, mot de passe, hash dans les logs.

---

## Module pilote

Comparaison : Time = source bootstrap I5 et chantier Lot 2 distinct ; Mail = dual APP/GRAPH ; Pulse = tenant absent + dual AppUser/User ; Stock = rôles déjà `stock:*`, tenant UUID identifié, fail-closed account, déjà candidat mapping DEC-020.

DEC-022 a **recommandé** Stock Premium sans l'approuver. DEC-023 **sélectionne** officiellement Stock Premium. L'implémentation reste interdite.

```text
RECOMMENDED_PILOT_MODULE=STOCK_PREMIUM
SELECTED_PILOT_MODULE=STOCK_PREMIUM
PILOT_SELECTION_APPROVED=YES
PILOT_IMPLEMENTATION_AUTHORIZED=NO
RATIONALE=rôles déjà namespacés ; tenant UUID canonique identifié ; isolation Time I5 / Mail Graph / Pulse dual-user ; session locale autonome ; pas de Graph
HUMAN_GATE_REQUIRED=YES
IDENTITY_I7_STARTED=NO
```

La sélection officielle n'autorise **pas** IDENTITY-I7. Le paquet Stock reste en attente de I5, puis I6, puis un nouveau Human Gate Martin avant I7. Aucun transfert d'implémentation maintenant.

---

## Séquence (rappel)

| Phase | Objet | Ce gate |
|---|---|---|
| IDENTITY-I0 | Contrat bootstrap / IDENTITY_LINK | fait (DEC-021) |
| IDENTITY-I1 | READ-ONLY Mail IA | **PASS** |
| IDENTITY-I2 | READ-ONLY Stock Premium | **PASS** |
| IDENTITY-I3 | READ-ONLY Pulse AI | **PASS** |
| **IDENTITY-I4** | Contrat technique TAGORA_HANDOFF_V1 | **CLOSED** — ce document (DEC-022) |
| IDENTITY-I5 | Migration / reconciliation Time | **NON** |
| IDENTITY-I6 | Entra External ID staging | **NON** — Human Gate |
| IDENTITY-I7 | Un module pilote | **NON** — Stock **sélectionné** (DEC-023) ; implémentation non autorisée ; non commencé |
| IDENTITY-I8 | QA | **NON** |
| IDENTITY-I9 | Modules suivants un par un | **NON** |

Ne pas commencer I5–I9 ici.

---

## Interdictions de ce gate

Aucun code produit ; aucun repo Time/Mail/Stock/Pulse/Nexus modifié hors paquets documentaires TOS ; aucune DB ; aucune migration ; aucun Supabase write ; aucun Prisma migrate ; aucun Railway ; aucun Vercel ; aucun Entra réel ; aucune app registration ; aucun OAuth ; aucun SSO ; aucun endpoint runtime ; aucun token réel ; aucun secret ; aucun utilisateur réel ; aucun mot de passe ; aucun MFA ; aucun DNS ; aucun deploy ; aucune Production.

---

## Décisions liées

| ID | Relation |
|---|---|
| ADR-0008 / DEC-020 / VALD-099 | Mapping accès — **complété**, non remplacé |
| ADR-0009 / DEC-021 / VALD-100 | Bootstrap identité Time — **complété**, non remplacé |
| ADR-0011 / DEC-023 / VALD-102 | Sélection officielle du pilote Stock Premium — **complété**, non remplacé |
| ADR-0007 / DEC-019 | Surfaces — inchangé |
| VALD-094 | Phase 4D Lot 2 — **inchangée** |

---

## Références

- [ADR-0010](../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- [ADR-0011](../05_adr/ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md)
- [VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../10_knowledge/VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [VALIDATION_VALD_102_SELECTION_MODULE_PILOTE_IDENTITE.md](../10_knowledge/VALIDATION_VALD_102_SELECTION_MODULE_PILOTE_IDENTITE.md)
- [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../04_adoption_modules/audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
