# TAGORA Nexus — fournisseur d'identité humaine V1

Décision de gouvernance distincte. Elle **ne réécrit pas** ADR-0008, ADR-0009, ADR-0010, DEC-020, DEC-021, DEC-022 ni leurs contrats. Elle **supersède**, pour la V1 seulement et pour le fournisseur d'identité humaine de TAGORA Nexus, les clauses Entra External ID listées ci-dessous.

Ce document n'implémente rien. Il ne crée aucun projet, utilisateur, secret, DNS, table, callback ou runtime.

```text
DECISION_ID=TAGORA-NEXUS-IDP-PROVIDER-V1
DECISION_VERSION=1.0.0
DECISION_DATE=2026-08-21
DECISION_AUTHORITY=MARTIN_AND_TOS
SOURCE_GATE=TOS-NEXUS-IDP-PROVIDER-CONFLICT-RECONCILIATION-DECISION
MARTIN_FINAL_PROVIDER_DECISION=OPTION_B
OFFICIAL_NEXUS_IDP_PROVIDER_V1=DEDICATED_SUPABASE_AUTH_FOR_TAGORA_NEXUS
DECISION_STATUS=APPROVED_WITH_EXPLICIT_DESIGN_AND_IMPLEMENTATION_HOLDS
DOCUMENTATION_ONLY=yes
RUNTIME_CHANGE=no
HISTORICAL_ADR_REWRITE=no
HISTORICAL_DEC_REWRITE=no
MODULE_REGISTRY_V1_UNCHANGED=yes
```

---

## 1. Objet et limites

### Objet

Figer, pour TAGORA Nexus V1 :

- l'autorité d'identité humaine : TAGORA Nexus ;
- le fournisseur unique : projet Supabase Auth **dédié** à TAGORA Nexus ;
- la supersession limitée des clauses Entra External ID de ADR-0008 / DEC-020 (et des clauses dépendantes listées) ;
- les règles d'identité, de mot de passe, de MFA et de handoff qui restent normatives ;
- les preuves officielles (région, MFA TOTP / AAL2, clés de signature, SMTP, coûts) ;
- les holds explicites de conception et d'implémentation.

### Limites

```text
DOCUMENT_CHANGE_AUTHORIZED=yes
CODE_CHANGE_AUTHORIZED=no
IDP_PROJECT_CREATION_AUTHORIZED=no
AUTH_CHANGE_AUTHORIZED=no
DATABASE_CHANGE_AUTHORIZED=no
USER_MIGRATION_AUTHORIZED=no
PASSWORD_MIGRATION_AUTHORIZED=no
COMMIT_AUTHORIZED=no
PUSH_AUTHORIZED=no
DEPLOYMENT_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
SECOND_IDP_ALLOWED_V1=no
SILENT_IDP_FALLBACK_ALLOWED=no
```

Ce fichier ne conçoit pas les tables memberships, entitlements, rôles ou mappings. Il ne choisit pas Pro vs Team. Il ne crée aucun projet Supabase.

---

## 2. Décision liante

```text
NEXUS_HUMAN_IDENTITY_AUTHORITY=TAGORA_NEXUS
NEXUS_IDP_PROVIDER_V1=DEDICATED_SUPABASE_AUTH_FOR_TAGORA_NEXUS
MICROSOFT_ENTRA_EXTERNAL_ID_STATUS_V1=SUPERSEDED_AS_NEXUS_HUMAN_IDP_PROVIDER
SECOND_IDP_ALLOWED_V1=no
SILENT_IDP_FALLBACK_ALLOWED=no
FUTURE_ENTRA_RECONSIDERATION=SEPARATE_MARTIN_AND_TOS_HUMAN_GATE_REQUIRED
```

Pour la V1, un humain s'authentifie auprès de TAGORA Nexus via **un seul** fournisseur : Supabase Auth du projet dédié Nexus. Microsoft Entra External ID n'est **pas** le fournisseur d'identité humaine Nexus V1. Un second IdP, un fallback silencieux, ou une bascule Entra sans Human Gate distinct, sont interdits.

Entra External ID demeure un CIAM valide. Il n'est pas retenu pour la V1. Toute réouverture future exige un Human Gate Martin et TOS séparé.

---

## 3. Isolation du projet Supabase Nexus

```text
NEXUS_SUPABASE_PROJECT=EXCLUSIVE_TO_TAGORA_NEXUS
REUSE_HORORA_SUPABASE_PROJECT=no
REUSE_DEPORA_SUPABASE_PROJECT=no
REUSE_ANY_MODULE_SUPABASE_PROJECT=no
PRODUCTION_AND_STAGING_SAME_PROJECT=no
SHARED_SECRETS_KEYS_SMTP_SESSIONS_USERS=no
TARGET_REGION=Canada Central (ca-central-1)
ACTUAL_REGION_BEFORE_PROJECT_CREATION=MUST_BE_CONFIRMED
```

- projet exclusivement réservé à TAGORA Nexus ;
- aucune réutilisation du projet HORORA ;
- aucune réutilisation du projet DEPORA ;
- aucune réutilisation d'un projet module ;
- production et staging dans des projets distincts ;
- secrets, clés, SMTP, sessions et utilisateurs séparés ;
- région cible Canada Central `ca-central-1` ;
- région réelle à confirmer **avant** toute création de projet.

Aucun projet n'est créé par cette décision.

---

## 4. Règles d'identité

```text
DURABLE_IDENTITY=nexus_user_id
NEXUS_USER_ID_TYPE=UUID_FROM_NEXUS_IDP
PRIMARY_LOGIN=VERIFIED_EMAIL
EMAIL_NORMALIZATION=TRIM_AND_LOWER_FOR_MATCHING_ONLY
ORIGINAL_EMAIL_PRESERVED=yes
EMAIL_IS_DURABLE_AUTHORITY=no
PHONE_IS_DURABLE_AUTHORITY=no
NAME_IS_DURABLE_AUTHORITY=no
CLIENT_IDENTIFIER_IS_DURABLE_AUTHORITY=no
ORGANIZATIONAL_MEMBERSHIPS=EXPLICIT
MODULE_ENTITLEMENTS=EXPLICIT
MODULE_ROLES=NAMESPACED
EXPLICIT_DENY_HAS_PRIORITY=yes
DEFAULT_ORGANIZATION_SELECTION=no
AUTOMATIC_CROSS_TENANT_LINK=no
AMBIGUOUS_IDENTITY_OR_MATCH=DENY_AND_MANUAL_REVIEW
```

- identité durable : `nexus_user_id` ;
- type : UUID provenant de l'IdP Nexus ;
- connexion primaire : courriel vérifié ;
- normalisation TRIM et LOWER pour rapprochement seulement ;
- courriel original conservé ;
- courriel, téléphone, nom et identifiant client ne sont jamais l'autorité durable ;
- memberships organisationnels explicites ;
- entitlements modules explicites ;
- rôles modules namespacés ;
- explicit deny prioritaire ;
- aucune organisation choisie par défaut ;
- aucun lien cross-tenant automatique ;
- toute identité ou correspondance ambiguë produit DENY et revue manuelle.

Le concept `TAGORA_USER_ID` (identifiant central stable, ADR-0009 / DEC-021) **demeure** : ce n'est pas une réécriture de l'ADR. Pour la V1, l'identifiant durable émis par l'IdP Nexus est `nexus_user_id`. L'email n'est toujours pas l'identité canonique.

---

## 5. Règles de mot de passe

```text
MODULE_PASSWORD_COPY=FORBIDDEN
PASSWORD_HASH_READ_EXPORT_TRANSFER_COMPARE=FORBIDDEN
MODULE_PASSWORD_STORED_IN_NEXUS=FORBIDDEN
NEXUS_PASSWORD=NEW_PASSWORD_CREATED_BY_USER
ACCOUNT_CREATION=SECURE_INVITATION_OR_CENTRAL_RECOVERY
INVITE_OR_RECOVERY_LINK=ONE_TIME
TTL=SHORT
EMAIL_VERIFIED_REQUIRED=yes
AUDIT_REQUIRED=yes
MODULE_LOCAL_LOGINS_DURING_PILOT=TEMPORARILY_RETAINED
PROGRESSIVE_DISABLE_AFTER_VALIDATION_ONLY=yes
AUTOMATIC_OLD_PASSWORD_DELETION=no
```

- aucun mot de passe module copié ;
- aucun hash de mot de passe lu, exporté, transféré ou comparé ;
- aucun mot de passe module stocké dans Nexus ;
- chaque utilisateur crée un nouveau mot de passe Nexus ;
- création par invitation sécurisée ou recovery central ;
- lien à usage unique ;
- TTL court ;
- courriel vérifié ;
- journalisation obligatoire ;
- logins locaux conservés temporairement pendant le pilote ;
- désactivation progressive seulement après validation ;
- aucune suppression automatique des anciens mots de passe.

---

## 6. Règles MFA

```text
NEXUS_TOTP_MFA_FOR_SENSITIVE_ROLES=REQUIRED
PROTECTED_OPERATIONS_AAL=AAL2
SERVER_SIDE_ENFORCEMENT=REQUIRED
STEP_UP_REQUIRED_FOR=ORGANIZATION_ADMIN,MEMBERSHIPS,ENTITLEMENTS,ROLES,AUDITS,OTHER_USER_RESETS
PULS_EXISTING_MFA=REMAINS_ACTIVE_UNTIL_NEXUS_MFA_VALIDATED
AAL1_SESSION_MUST_NOT_ACCESS_AAL2_OPERATION=yes
```

- MFA TOTP Nexus requis pour les rôles sensibles ;
- niveau AAL2 exigé pour les opérations protégées ;
- enforcement côté serveur obligatoire ;
- step-up requis pour administration des organisations, memberships, entitlements, rôles, audits et resets d'autres utilisateurs ;
- le MFA PULS existant demeure actif jusqu'à validation du MFA Nexus ;
- une session AAL1 ne doit jamais accéder à une opération exigeant AAL2.

Supabase Auth fournit TOTP et AAL2. L'application et les contrôles serveur doivent **imposer** ce niveau. La présence de l'API MFA ne suffit pas.

---

## 7. Règles de handoff

Le protocole `TAGORA_HANDOFF_V1` (ADR-0010 / DEC-022) **demeure**. Cette décision ne le remplace pas. Elle précise, pour la V1, que l'humain est authentifié par Supabase Auth dédié Nexus **avant** le handoff, et que le JWT Supabase Nexus n'est pas le transporteur d'accès module.

```text
CANONICAL_MODULE_CALLBACK=/auth/nexus/callback
HANDOFF_CODE=OPAQUE
HANDOFF_CODE_USE=ONE_TIME
HANDOFF_TTL_MAX_SECONDS=60
STATE=REQUIRED
NONCE=REQUIRED
PKCE_OR_EQUIVALENT=REQUIRED
ISSUER_VALIDATED=yes
AUDIENCE=EXACT_CANONICAL_MODULE_KEY
EXCHANGE=SERVER_TO_SERVER
REPLAY_PROTECTION=REQUIRED
AUDIT=REQUIRED
PASSWORD_IN_URL=FORBIDDEN
NEXUS_USER_JWT_IN_URL=FORBIDDEN
ACCESS_TOKEN_IN_URL=FORBIDDEN
NEXUS_SUPABASE_JWT_TO_MODULES=FORBIDDEN
MODULE_LOCAL_SESSION_ONLY_AFTER_HANDOFF_VALIDATION=yes
```

- route callback canonique module : `/auth/nexus/callback` ;
- code opaque ;
- usage unique ;
- TTL maximal 60 secondes ;
- state obligatoire ;
- nonce obligatoire ;
- PKCE ou protection équivalente obligatoire ;
- issuer validé ;
- audience égale à la clé module canonique exacte ;
- échange serveur-à-serveur ;
- protection contre le rejeu ;
- audit obligatoire ;
- aucune transmission de mot de passe dans l'URL ;
- aucun JWT utilisateur Nexus dans l'URL ;
- aucun access token dans l'URL ;
- les modules ne doivent pas recevoir directement le JWT Supabase Nexus ;
- la session locale module est créée seulement après validation du handoff.

Aucun callback n'est créé ici. Aucune durée plus courte que 60 secondes n'est imposée ; 60 secondes est le **maximum** V1.

---

## 8. Supersession limitée (V1, fournisseur seulement)

Les documents historiques **restent** dans leur texte d'origine. Leur statut historique n'est pas réécrit. Pour la **V1 Nexus human IdP**, les clauses suivantes sont **supersédées** par le présent document :

| Clause historique | Où elle apparaît | Statut V1 |
|---|---|---|
| `IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID` | ADR-0008 ; DEC-020 ; [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md) | SUPERSEDED_AS_NEXUS_HUMAN_IDP_PROVIDER |
| Entra External ID comme IdP humain Nexus V1 | ADR-0008 ; ADR-0009 (`NEXUS_ENTRA=FUTURE_CENTRAL_IDENTITY_AUTHORITY`) ; ADR-0010 (`ENTRA=IDENTITY_PROVIDER`) ; contrats mapping, identité, handoff | SUPERSEDED_AS_NEXUS_HUMAN_IDP_PROVIDER |
| `issuer + subject` Entra comme identifiant primaire global | ADR-0009 (`ENTRA_IDENTITY_KEY=issuer + subject`) ; DEC-021 ; contrat identité ; contrat handoff (`CENTRAL_EXTERNAL_IDENTITY_KEY`) | SUPERSEDED_AS_V1_PRIMARY_GLOBAL_IDENTIFIER |
| Toute exigence imposant Entra comme protocole de connexion humaine V1 | ADR-0008 `AUTH_PROTOCOL_TARGET=OIDC + PKCE S256` **en tant que protocole de login humain Entra** | SUPERSEDED_AS_V1_HUMAN_LOGIN_PROTOCOL |
| Toute qualification de Supabase Auth dédié Nexus comme solution legacy ou interdite | formulations historiques qui réservent Entra comme cible unique et traitent l'auth module actuelle comme non cible | SUPERSEDED_FOR_DEDICATED_NEXUS_SUPABASE_AUTH |

Portée de la supersession :

- **V1 seulement** ;
- **fournisseur d'identité humaine Nexus seulement** ;
- **pas** une invalidation globale d'Entra comme produit CIAM ;
- **pas** une réécriture des ADR / DEC ;
- **pas** une autorisation d'implémentation.

`AUTH_PROTOCOL_TARGET=OIDC + PKCE S256` n'est supersédé **que** comme protocole de connexion humaine Entra V1. PKCE ou équivalent **reste obligatoire** pour le handoff (section 7).

---

## 9. Décisions antérieures conservées

Les éléments suivants **demeurent valides**. Cette décision ne les ouvre pas.

| Élément | Source | Statut |
|---|---|---|
| Nexus comme portail central | ADR-0003 / DEC-014 ; ADR-0007 / DEC-019 ; registre V1 | PRESERVED |
| Un compte TAGORA | ADR-0008 / DEC-020 | PRESERVED |
| Un login humain central | ADR-0008 / DEC-020 | PRESERVED |
| Nexus comme courtier d'accès | ADR-0008 / DEC-020 | PRESERVED |
| Autonomie métier des modules | ADR-0007 / DEC-019 ; ADR-0008 / DEC-020 | PRESERVED |
| Aucune base de mots de passe partagée | ADR-0008 / DEC-020 ; ADR-0009 / DEC-021 | PRESERVED |
| Aucun cookie partagé `.tagora.ca` | ADR-0008 / DEC-020 ; ADR-0010 / DEC-022 | PRESERVED |
| Aucune extension d'accès par clé legacy | registre V1 ; DENY par défaut | PRESERVED |
| unknown identity = DENY | ADR-0009 ; contrats identité / handoff | PRESERVED |
| unknown module key = DENY | registre V1 | PRESERVED |
| default module access = DENY | registre V1 | PRESERVED |
| cross-tenant access = DENY | registre V1 ; ADR-0009 | PRESERVED |
| Login Nexus cible `https://app.tagora.ca/login` | ADR-0004 / DEC-015 ; ADR-0008 / DEC-020 | PRESERVED |
| Protocole `TAGORA_HANDOFF_V1` | ADR-0010 / DEC-022 | PRESERVED |
| Aucune authentification humaine par Microsoft Graph | ADR-0010 ; contrat handoff Mail (`APP_AUTH != GRAPH_AUTH`) | PRESERVED |
| Microsoft Graph limité à la connexion mailbox MESSOR | ADR-0010 / DEC-022 ; paquets Mail | PRESERVED |

Le registre publié [TAGORA-MODULE-REGISTRY-V1.md](TAGORA-MODULE-REGISTRY-V1.md) n'est **pas** modifié par cette décision.

---

## 10. Preuves officielles

Date de consultation de toutes les sources de cette section : **2026-08-21**.

Aucune capacité absente n'est inventée. Si une page officielle n'affiche pas un chiffre, le chiffre n'est pas estimé.

### 10.1 Supabase — régions

Source : [Available regions](https://supabase.com/docs/guides/platform/regions)

Consulté : 2026-08-21

Supabase permet de choisir une région AWS précise. La liste officielle des régions spécifiques inclut **Canada (Central), `ca-central-1`**.

La région cible TOS est donc **sélectionnable**. La région **réelle** du futur projet Nexus n'est pas créée ici et doit être confirmée avant création.

### 10.2 Supabase — MFA TOTP et AAL2

Sources :

- [Multi-Factor Authentication (TOTP)](https://supabase.com/docs/guides/auth/auth-mfa/totp) — consulté 2026-08-21
- [Multi-Factor Authentication](https://supabase.com/docs/guides/auth/auth-mfa) — consulté 2026-08-21

Faits documentés :

- Supabase Auth fournit l'API MFA TOTP (App Authenticator) ;
- l'API TOTP MFA est indiquée comme gratuite et activée par défaut sur les projets ;
- après enrolment + challenge + verify, la session peut passer à **AAL2** ;
- `aal1` = login conventionnel ; `aal2` = au moins un second facteur vérifié (TOTP ou OTP téléphone selon le facteur) ;
- **l'application doit imposer** les règles : enrollment, challenge, et contrôles serveur / RLS / API ;
- une session AAL1 ne doit pas accéder à une opération AAL2.

### 10.3 Supabase — clés de signature

Source : [JWT Signing Keys](https://supabase.com/docs/guides/auth/signing-keys)

Consulté : 2026-08-21

Faits documentés :

- nouveau système de **signing keys** (clés asymétriques RSA / courbes elliptiques, JWKS) ;
- l'ancien système **Legacy JWT secret** (`anon` / `service_role` couplés au secret JWT) est **no longer recommended** ;
- les nouveaux projets doivent employer les clés de signature asymétriques et JWKS ;
- les publishable / secret API keys sont distinctes des signing keys ;
- les secrets Supabase ne doivent jamais être exposés au client ;
- ne pas concevoir la V1 autour des anciennes clés `anon` ou `service_role`.

### 10.4 Supabase — courriels, SMTP, Free vs Pro

Sources :

- [Send emails with custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp) — consulté 2026-08-21
- [Changes to Email Template Customisation on Free Tier](https://supabase.com/changelog/46599-changes-to-email-template-customisation-on-free-tier) — publié 2026-06-03, consulté 2026-08-21
- [Supabase Pricing](https://supabase.com/pricing) — consulté 2026-08-21

Faits documentés :

- le SMTP par défaut n'est **pas** destiné à la production (adresses d'équipe seulement, rate-limit, pas de SLA) ;
- les courriels de production doivent utiliser une **configuration SMTP approuvée** (custom SMTP) ;
- à compter du 2026-06-03, les **nouveaux** projets Free utilisant le SMTP par défaut ne peuvent plus personnaliser les templates d'auth ;
- Pro et plans payants conservent la personnalisation des templates ;
- custom SMTP débloque aussi la personnalisation sur Free ;
- le choix exact du fournisseur SMTP de production n'est **pas** décidé ici.

### 10.5 Microsoft Entra External ID — tarification et résidence

Sources :

- [External ID Pricing](https://learn.microsoft.com/en-us/entra/external-id/external-identities-pricing) — consulté 2026-08-21 (`ms.date` document 2026-06-22)
- [External ID FAQ](https://learn.microsoft.com/en-us/entra/external-id/customers/faq-customers) — consulté 2026-08-21 (`ms.date` document 2026-05-20)
- [Microsoft Entra External ID pricing](https://www.microsoft.com/en-us/security/pricing/microsoft-entra-external-id) — consulté 2026-08-21
- [Azure — Microsoft Entra External ID pricing](https://azure.microsoft.com/pricing/details/microsoft-entra-external-id/) — consulté 2026-08-21 (montant unitaire au-delà de 50 000 MAU affiché comme placeholder, non chiffré)

Faits documentés :

- l'offre principale (core / Basic) est **sans frais pour les premiers 50 000 MAU** ;
- les add-ons n'ont **pas** de palier gratuit ;
- SMS, gouvernance, M2M, Azure et autres services sont **exclus** du coût MAU de base ;
- le add-on **Go-Local** (résidence dans un pays choisi) est **actuellement limité à l'Australie et au Japon** ;
- le prix MAU au-delà de 50 000 **n'est pas inventé** : les pages consultées ne publient pas un tarif unitaire exploitable (renvoi vers calculateur / `$-`).

### 10.6 Microsoft Entra External ID — MFA tenants externes

Source : [MFA in external tenants](https://learn.microsoft.com/en-us/entra/external-id/customers/concept-multifactor-authentication-customers)

Consulté : 2026-08-21 (`ms.date` document 2026-05-21)

Seconds facteurs listés pour les tenants externes :

- email one-time passcode ;
- SMS (add-on, coût supplémentaire) ;
- passkey (FIDO2).

La documentation actuelle des tenants externes **ne liste pas** le TOTP par application (authenticator app) comme second facteur. Cette absence n'est pas transformée en affirmation d'impossibilité définitive hors documentation ; elle est un **écart documenté** par rapport au contrat Nexus V1 (TOTP AAL2).

---

## 11. Synthèse des preuves

```text
CANADA_REGION_EVIDENCE=YES
TOTP_AAL2_EVIDENCE=YES
TOTP_MUST_BE_APP_AND_SERVER_ENFORCED=yes
NEW_PROJECTS_ASYMMETRIC_SIGNING_KEYS_AND_JWKS=yes
DO_NOT_DESIGN_V1_AROUND_LEGACY_ANON_OR_SERVICE_ROLE=yes
SUPABASE_SECRETS_NEVER_ON_CLIENT=yes
PRODUCTION_EMAILS_REQUIRE_APPROVED_SMTP=yes
ENTRA_CORE_FIRST_50000_MAU_FREE=yes
ENTRA_GO_LOCAL_CURRENTLY_AUSTRALIA_AND_JAPAN_ONLY=yes
ENTRA_EXTERNAL_TENANT_TOTP_APP_AS_SECOND_FACTOR_NOT_LISTED=yes
NO_MISSING_CAPABILITY_INVENTED=yes
```

---

## 12. Comparaison de coûts (MAU)

Périmètre : **100 / 1 000 / 10 000 / 50 000 MAU**. Add-ons et services hors offre de base exclus du chiffre MAU.

### 12.1 Microsoft Entra External ID — Basic / core

| MAU | Coût MAU principal documenté | Hors périmètre (non chiffré ici) |
|---|---|---|
| 100 | 0 | SMS, gouvernance, M2M, Azure, Go-Local, autres add-ons |
| 1 000 | 0 | idem |
| 10 000 | 0 | idem |
| 50 000 | 0 | plafond gratuit de l'offre principale |

Au-delà de 50 000 MAU : **tarif officiel non affiché** sur les pages consultées le 2026-08-21. **Non inventé.**

### 12.2 Supabase Pro

Faits officiels ([pricing](https://supabase.com/pricing), 2026-08-21) :

- abonnement Pro **à partir de 25 USD / mois** ;
- 100 000 MAU inclus (puis 0,00325 USD / MAU au-delà — non applicable aux volumes 100 à 50 000) ;
- premier projet : les plans Pro et Team incluent **10 USD / mois de crédits compute**, ce qui couvre **une** instance Micro ;
- projet additionnel : compute Micro **à partir de 10 USD / mois** ;
- staging et production exigent **deux projets distincts**.

Exemple officiel de la page tarifaire (citation, pas une invention) :

> a Pro org with 2 projects on Micro compute costs: $25 (plan) + $10 (project 1) + $10 (project 2) - $10 (credits) = $35/month.

| MAU | Dépassement MAU Pro | Abonnement Pro (faits officiels) | Base approximative 2 projets Micro |
|---|---|---|---|
| 100 | aucun | 100 000 MAU inclus | voir inférence ci-dessous |
| 1 000 | aucun | 100 000 MAU inclus | idem |
| 10 000 | aucun | 100 000 MAU inclus | idem |
| 50 000 | aucun | 100 000 MAU inclus | idem |

**Inférence clairement identifiée** — calcul de base 2 projets (staging + production) sur compute Micro, crédits Pro inclus, d'après l'exemple officiel : **35 USD / mois**. Ce n'est **pas** un devis. Ce n'est **pas** un choix de plan.

Présentés **séparément** (non inclus dans le 35 USD) :

| Poste | Statut dans cette décision |
|---|---|
| SMTP / fournisseur d'email | à décider ; coût du fournisseur externe non chiffré ici |
| Domaine personnalisé | add-on officiel 10 USD / domaine / mois / projet — **non décidé** |
| Logs / Log Drains | 7 jours inclus Pro ; drains add-on |
| Support | email inclus Pro ; SLA = Team (599 USD / mois) — **Pro vs Team non choisi** |
| Compute au-delà de Micro | non choisi |
| MFA Phone avancée | add-on distinct ; **non** le TOTP de base |
| Audit, rétention, conformité | Team / Enterprise selon la grille ; **à confirmer** |

Aucune estimation non prouvée (taxes, devise CAD, volume email, PITR, etc.).

### 12.3 Lecture

Jusqu'à 50 000 MAU, l'offre principale Entra External ID est **moins coûteuse** sur le seul axe MAU (0 vs abonnement Supabase Pro). Ce n'est **pas** le critère unique de la V1 (section 13).

---

## 13. Pourquoi Supabase Auth dédié pour la V1

Retenu : **OPTION_B** — Supabase Auth dédié TAGORA Nexus.

Raisons, toutes bornées aux preuves et à l'architecture déjà visée :

- la région Canada Central est explicitement disponible ;
- le MFA TOTP AAL2 correspond directement au contrat Nexus ;
- l'équipe et plusieurs modules utilisent déjà l'écosystème Supabase ;
- un projet dédié maintient l'isolation de Nexus ;
- l'intégration Next.js et les mécanismes de session sont compatibles avec l'architecture visée ;
- les clés asymétriques, JWKS et rotations sont disponibles ;
- le coût MAU demeure inclus jusqu'à 100 000 MAU sur Pro ;
- la migration et le rollback peuvent être contrôlés pendant le pilote (logins locaux temporaires, pas de copie de mot de passe, désactivation progressive).

Entra External ID demeure une solution CIAM valide et **potentiellement moins coûteuse jusqu'à 50 000 MAU**. Elle n'est **pas** retenue pour la V1 en raison de l'écart actuel concernant :

- la résidence canadienne explicite (Go-Local documenté pour l'Australie et le Japon seulement) ;
- le MFA TOTP par application demandé (non listé comme second facteur des tenants externes dans la documentation consultée).

---

## 14. Holds explicites

```text
NO_SUPABASE_PROJECT_CREATED=yes
PRO_VS_TEAM=UNDECIDED
AUDIT_RETENTION_SLA_COMPLIANCE=TO_CONFIRM
PRODUCTION_SMTP=UNDECIDED
CUSTOM_DOMAIN=UNDECIDED
RPO=UNDECIDED
RTO=UNDECIDED
BACKUP_STRATEGY=UNDECIDED
GLOBAL_REVOCATION_STRATEGY=TO_DETAIL
MEMBERSHIP_ENTITLEMENT_ROLE_MAPPING_DESIGN=NOT_AUTHORIZED_HERE
NO_USER_DATA_CREATED=yes
NO_USER_MIGRATION=yes
NO_PASSWORD_MIGRATION=yes
NO_CALLBACK_CREATED=yes
NO_SECRET_CREATED=yes
NO_DNS=yes
NO_STAGING_ACTIVATION=yes
NO_PRODUCTION_ACTIVATION=yes
```

Toute création de projet, secret, DNS, utilisateur, callback, table ou runtime exige un gate distinct.

---

## 15. Ce que ce document ne fait pas

- ne modifie aucun ADR historique ;
- ne modifie aucun DEC historique ;
- ne met pas à jour le registre des décisions ni le registre ADR (fichiers distincts, hors chemin autorisé) ;
- ne modifie pas le registre des modules V1 ;
- n'autorise pas un second IdP V1 ;
- n'autorise pas un fallback silencieux vers Entra ;
- n'autorise pas Microsoft Graph comme authentification humaine ;
- n'autorise pas la copie de mots de passe ou de hashes ;
- n'expose pas le JWT Supabase Nexus aux modules.

Les contrats et ADR historiques restent la trace de ce qui a été décidé le 2026-08-16. Ce fichier est la **décision distincte** du 2026-08-21 pour le fournisseur V1.

---

## 16. Interdictions d'exécution

```text
CODE_CHANGE_AUTHORIZED=no
TYPE_CHANGE_AUTHORIZED=no
NEXUS_REPOSITORY_CHANGE_AUTHORIZED=no
WEBSITE_REPOSITORY_CHANGE_AUTHORIZED=no
MODULE_REPOSITORY_CHANGE_AUTHORIZED=no
SUPABASE_PROJECT_CREATION_AUTHORIZED=no
AUTH_RUNTIME_AUTHORIZED=no
DATABASE_AUTHORIZED=no
TABLE_DESIGN_AUTHORIZED=no
MIGRATION_AUTHORIZED=no
USER_CREATION_AUTHORIZED=no
PASSWORD_COPY_AUTHORIZED=no
INVITATION_SEND_AUTHORIZED=no
CALLBACK_IMPLEMENTATION_AUTHORIZED=no
SECRET_CREATION_AUTHORIZED=no
DNS_AUTHORIZED=no
STAGING_ACTIVATION_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
COMMIT_AUTHORIZED=no
PUSH_AUTHORIZED=no
```

---

## 17. Prochaine recommandation

```text
NEXT_RECOMMENDATION=TOS_NEXUS_IDP_PROVIDER_V1_DOCUMENTATION_PRECOMMIT_QA_READ_ONLY
PROPOSED_COMMIT_MESSAGE=docs(governance): record dedicated Supabase Auth as Nexus V1 identity provider
```

Aucune QA précommit, aucun commit, aucun push n'est exécuté ici.

---

## Références internes (non réécrites)

- [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md) — DEC-020 / VALD-099
- [ADR-0009](../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md) — DEC-021 / VALD-100
- [ADR-0010](../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md) — DEC-022 / VALD-101
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [TAGORA-MODULE-REGISTRY-V1.md](TAGORA-MODULE-REGISTRY-V1.md) — inchangé
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-020 à DEC-022 inchangés dans ce gate
