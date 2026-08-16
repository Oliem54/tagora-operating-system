# Contrat de mapping et d'intégration des modules TAGORA

## Objectif

Formaliser le contrat officiel de **mappage des surfaces, des modules, de leurs adresses et de leur parcours d'accès**.

Cette décision **complète DEC-019 / ADR-0007**. Elle ne les remplace pas.

```text
ONE_TAGORA_UNIVERSE=YES
ONE_PRIMARY_LOGIN=YES
ONE_CUSTOMER_PORTAL=YES
AUTONOMOUS_SAAS_MODULES=YES
```

## Portée

Écosystème TAGORA. Décision **normative**. Les agents produits ne rediscutent pas ce contrat. Ils peuvent signaler des bloqueurs et proposer un plan d'implémentation.

Emplacement TOS : `docs/02_standards/` (même dossier que [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)).

---

## Statut

```text
MODULE_MAPPING_CONTRACT_STATUS=OFFICIAL
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
SSO_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
DB_AUTHORIZED=NO
SECRET_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
CROSS_PROJECT_IMPACT=YES
RULE_CHANGE=YES
TOS_SCOPE_ONLY=YES
```

Décision Martin : **DEC-020**  
ADR : **ADR-0008**  
Validation : **VALD-099**  
Date : **2026-08-16**  
Décideur : **Martin ST-Gelais — Direction**

---

## Principes de parcours

```text
COMMERCIAL_DISCOVERY=Website
AUTHENTICATED_LAUNCH=Nexus
APPLICATION_RUNTIME=SaaS module
WEBSITE_AUTHENTICATED_LAUNCH_OWNER=NEXUS
```

Website explique et vend.  
Nexus orchestre l'accès authentifié.  
Le SaaS exécute le métier.

Website **ne décide pas** des droits d'accès au SaaS.

---

## Mappage public — Website

```text
PUBLIC_WEBSITE=https://tagora.ca
WEBSITE=DISCOVER / EXPLAIN / SELL
```

Pages commerciales :

| Locale | URL |
|---|---|
| FR | `https://tagora.ca/fr/modules` |
| FR | `https://tagora.ca/fr/time` |
| FR | `https://tagora.ca/fr/mail` |
| FR | `https://tagora.ca/fr/stock` |
| FR | `https://tagora.ca/fr/pulse` |
| EN | `https://tagora.ca/en/modules` |
| EN | `https://tagora.ca/en/time` |
| EN | `https://tagora.ca/en/mail` |
| EN | `https://tagora.ca/en/stock` |
| EN | `https://tagora.ca/en/pulse` |

Website n'héberge aucune application métier.

### Règle CTA Website (ambiguïté résolue)

| CTA | Cible canonique |
|---|---|
| **Se connecter** | `https://app.tagora.ca/login` |
| **Mon espace TAGORA** | `https://app.tagora.ca` |
| **Découvrir un module** | page commerciale Website correspondante |

Le lancement authentifié d'un SaaS doit normalement être orchestré par Nexus.

---

## Mappage Nexus — portail et access broker

```text
CENTRAL_PORTAL=https://app.tagora.ca
CENTRAL_LOGIN=https://app.tagora.ca/login
PORTAL_MODULE_CATALOG=https://app.tagora.ca/modules
NEXUS=AUTHENTICATED CUSTOMER PORTAL
NEXUS_ACCESS_BROKER=YES
```

Routes portail **réservées** comme contrat canonique :

| Module | Slug | Route portail |
|---|---|---|
| TAGORA Time | `time` | `https://app.tagora.ca/modules/time` |
| TAGORA Mail IA | `mail` | `https://app.tagora.ca/modules/mail` |
| TAGORA Stock Premium | `stock` | `https://app.tagora.ca/modules/stock` |
| TAGORA Pulse AI | `pulse` | `https://app.tagora.ca/modules/pulse` |

```text
CANONICAL_SLUGS=time ; mail ; stock ; pulse
TIME_PORTAL_ROUTE=https://app.tagora.ca/modules/time
MAIL_PORTAL_ROUTE=https://app.tagora.ca/modules/mail
STOCK_PORTAL_ROUTE=https://app.tagora.ca/modules/stock
PULSE_PORTAL_ROUTE=https://app.tagora.ca/modules/pulse
```

Nexus orchestre l'accès. Nexus **n'absorbe pas** les SaaS.

---

## Mappage applications SaaS

| Application | Domaine canonique |
|---|---|
| TAGORA Time | `https://time.tagora.ca` |
| TAGORA Mail IA | `https://mail.tagora.ca` |
| TAGORA Stock Premium | `https://stock.tagora.ca` |
| TAGORA Pulse AI | `https://pulse.tagora.ca` |
| Administration future | `https://admin.tagora.ca` |

Les applications restent autonomes.

```text
AUTONOMOUS_SAAS=YES
```

---

## Règle Nexus → module

Pour ouvrir un module :

1. utilisateur authentifié TAGORA ;
2. Nexus identifie : user ; tenant ; organization si pertinente ; membership ; abonnement module ; user-module-access ;
3. Nexus exécute une décision d'accès **fail-closed** ;
4. si **DENY** : ne pas lancer le SaaS ;
5. si **ALLOW** : Nexus génère un handoff sécurisé ;
6. l'utilisateur est envoyé vers le domaine canonique du SaaS ;
7. le SaaS valide le handoff ;
8. le SaaS crée sa propre session métier ;
9. le SaaS conserve ses propres rôles et permissions métier.

```text
TAGORA_HANDOFF_V1=OFFICIAL_TECHNICAL_CONTRACT
HANDOFF_REAL_AUTHORIZED=NO
```

Le mécanisme conceptuel (code opaque one-time, rédemption serveur-à-serveur, assertion hors navigateur, `return_to` allowlisté) est figé par [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) (DEC-022 / ADR-0010). Ce document n'invente aucun endpoint OAuth commun. Aucun handoff réel n'est autorisé.

---

## Identité TAGORA — cible

```text
ONE_TAGORA_ACCOUNT=YES
ONE_PRIMARY_LOGIN=YES
ONE_PASSWORD=YES
ONE_MFA=YES
CENTRAL_LOGIN=https://app.tagora.ca/login
CENTRAL_PORTAL=TAGORA Nexus
IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID
AUTH_PROTOCOL_TARGET=OIDC + PKCE S256
NEXUS_ACCESS_BROKER=YES
SHARED_PASSWORD_DATABASE_BETWEEN_APPS=NO
MODULE_SPECIFIC_PASSWORDS_FINAL_TARGET=NO
MODULE_LOCAL_BUSINESS_ROLES=YES
MODULE_LOCAL_SESSIONS=YES
CENTRAL_TENANT_SUBSCRIPTION_ACCESS=YES
```

Cibles d'architecture. **Aucune** app registration, Entra, OAuth, secret, token, utilisateur réel ou mot de passe n'est créé ici.

---

## Accès direct à un sous-domaine

Les URL SaaS canoniques restent valides pour accès direct ou favori :

`time.tagora.ca` · `mail.tagora.ca` · `stock.tagora.ca` · `pulse.tagora.ca`

À terme :

- si session module valide : ouvrir normalement ;
- si aucune session valide : le module **ne doit pas** demander un deuxième mot de passe TAGORA ; il déclenche le parcours d'identité central prévu, puis revient vers le module après validation.

---

## Tenant / organization

Nexus possède le contexte d'accès central.

Le handoff doit au minimum pouvoir transporter ou référencer de façon sécurisée :

- `user_id`
- `tenant_id`
- `module_id`
- `grant_id`
- organization context si nécessaire

Chaque module garde son propre modèle interne.

Interdit :

- base SQL partagée obligatoire entre Nexus et tous les modules ;
- copier les rôles métier dans Nexus comme autorité finale.

---

## Logout

```text
NEXUS_SESSION != MODULE_SESSION
GLOBAL_SHARED_COOKIE=NO
```

La stratégie finale de logout global sera définie séparément.  
Ne pas supposer qu'un cookie `.tagora.ca` sera partagé entre toutes les apps.

---

## Séquence d'intégration (documentaire)

Après adoption documentaire par tous les projets :

| Phase | Objet | Autorisé maintenant |
|---|---|---|
| **I0** | Contrat TOS mapping/adresses | **OUI** — ce document |
| **I1** | Nexus portail / catalogue en local/mock | NON — Human Gate séparé |
| **I2** | READ-ONLY compatibility review Time/Mail/Stock/Pulse | **PASS** (Time + IDENTITY-I1/I2/I3) |
| **I3** | Contrat technique TAGORA_HANDOFF_V1 et mapping identité/tenant | **OUI** — [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) |
| **I4** | Microsoft Entra External ID sur **STAGING uniquement** | NON — Human Gate Martin obligatoire |
| **I5** | Connecter **UN SEUL** module pilote en non-production | NON — Stock Premium recommandé, **non approuvé** |
| **I6** | QA identité + tenant + entitlement | NON |
| **I7** | Ajouter les autres modules un par un | NON |
| **I8** | Website CTA / Mon espace selon readiness | NON |
| **I9** | DNS / Production en dernier | NON |

Ne pas connecter quatre modules en même temps.

---

## Interdictions de ce gate

Aucun code produit ; aucun autre repository ; aucun DNS ; aucun Vercel ; aucun Railway ; aucun Supabase write ; aucune DB ; aucune migration ; aucun Entra ; aucune app registration ; aucun OAuth ; aucun secret ; aucun token ; aucun vrai utilisateur ; aucun mot de passe ; aucun SSO réel ; aucun handoff réel ; aucun deploy ; aucune Production.

---

## Human Gates futurs

Un nouveau GO Martin est obligatoire avant : implémentation cross-project ; Entra ; OAuth ; handoff réel ; DNS ; Production ; SSO réel.

---

## Décisions liées

| ID | Relation |
|---|---|
| ADR-0004 / DEC-015 | Domaines canoniques — inchangés |
| ADR-0007 / DEC-019 / VALD-098 | Emplacement des surfaces — **complété**, non remplacé |
| ADR-0009 / DEC-021 / VALD-100 | Identité centrale / bootstrap Time — **complété**, non remplacé |
| ADR-0010 / DEC-022 / VALD-101 | Contrat technique TAGORA_HANDOFF_V1 — **complété**, non remplacé |
| VALD-094 | Phase 4D Lot 2 — **inchangée** |

---

## Références

- [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- [VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md](../10_knowledge/VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md)
- Complément identité : [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- Complément handoff : [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
