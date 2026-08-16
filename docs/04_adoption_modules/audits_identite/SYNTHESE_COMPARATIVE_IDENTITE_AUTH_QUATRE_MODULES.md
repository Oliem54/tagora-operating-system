# Synthèse comparative — modèles identité / auth des quatre modules TAGORA

## Objectif

Comparer officiellement les modèles d'identité et d'authentification de TAGORA Time, Mail IA, Stock Premium et Pulse AI, après les audits READ-ONLY PASS.

Cette synthèse alimente le contrat technique [TAGORA_HANDOFF_V1](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md). Elle **n'autorise aucune** implémentation.

## Portée

Écosystème TAGORA. Document **comparatif**. Aucune DB, aucun Entra, aucun endpoint runtime.

Sources :

| Module | Audit | Statut |
|---|---|---|
| TAGORA Time | READ-ONLY PASS (bootstrap DEC-021) | **PASS** |
| TAGORA Mail IA | IDENTITY-I1 READ-ONLY | **PASS** |
| TAGORA Stock Premium | IDENTITY-I2 READ-ONLY | **PASS** |
| TAGORA Pulse AI | IDENTITY-I3 READ-ONLY | **PASS** |

TOS source identité : `TOS_COMMIT_IDENTITY=8a6778cbb6596c72540470e23f874c5522639313`

---

## Statut

```text
FOUR_MODULE_COMPARISON_STATUS=OFFICIAL
TIME_AUDIT_STATUS=PASS
MAIL_AUDIT_STATUS=PASS
STOCK_AUDIT_STATUS=PASS
PULSE_AUDIT_STATUS=PASS
PRODUCT_APPLICATION_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
```

Décision : **DEC-022**  
ADR : **ADR-0010**  
Validation : **VALD-101**  
Date : **2026-08-16**

---

## Invariants officiels (rappel)

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

Aucun des quatre modules n'est l'autorité d'identité centrale.

---

## Tableau canonique

| Champ | TIME | MAIL IA | STOCK PREMIUM | PULSE AI |
|---|---|---|---|---|
| **CURRENT_AUTHORITY** | Supabase Auth Time, password local + MFA direction/admin. Pas Entra. Pas Nexus. | App : Supabase Auth Mail staging, password grant. Graph mailbox : Microsoft Identity `/common` OAuth PKCE **séparé**. Pas Entra External ID. | Dual : Supabase JWT + `signInWithPassword` (staging/prod) ; header_mock local only. Pas SSO. Pas Entra. | Email + mot de passe scrypt + cookie `tagora_session`. Pas OAuth. Pas Entra. Pas NextAuth. |
| **CURRENT_USER_ID** | `auth.users.id` UUID = login Time local. **≠** `TAGORA_USER_ID`. | `auth.users.id` = `profiles.id` UUID. **≠** `TAGORA_USER_ID`. Graph `provider_object_id` = autre plan, **interdit** comme Entra subject. | `auth.users.id` UUID = `MODULE_LOCAL_USER_ID`. **≠** `TAGORA_USER_ID`. **≠** `account.id`. | `AppUser.id` (cuid) = session staff. `User.id` (cuid) = opérateur inbox legacy. **Ni l'un ni l'autre** n'est `TAGORA_USER_ID`. |
| **CURRENT_LOCAL_ACCOUNT_ID** | `chauffeurs.id` bigint = fiche employé. Lien optionnel `chauffeurs.auth_user_id`. | Pas de table « account » distincte. Profil = user. Mailbox = `mailboxes.id` (métier, pas compte user). | `stock_premium_accounts.id` UUID. 1 auth → au plus 1 account (UNIQUE, fail-closed). | Pas de table account. Membership = 1 `AppUser` ∈ 1 `Project`. `Customer` = visiteur, pas staff. |
| **CURRENT_TENANT_MODEL** | `organizations.id` UUID. `tenantKey` / slug **≠** UUID. Pas de colonne `tenant_id`. | `organizations.id` UUID = racine SaaS Mail. **≠** tenant Microsoft Graph. Pas de table `tenants`. | **Canonique** = `stock_premium_organizations.id` UUID. Legacy = `organization_id` TEXT slug. Cutover UUID **non fait**. | **Absent.** `Project` utilisé comme frontière (`cross_tenant_deny` = mismatch `projectId`). **Project ≠ tenant TAGORA.** |
| **CURRENT_ORG_MODEL** | Une org = un tenant commercial Time. Memberships `(organization_id, user_id)`. Org active : `is_default` sinon unique, sinon fail-closed. | `organizations` = tenant Mail. Membership `organization_members`. | Org = tenant Stock. Admin org **≠** platform admin (`crossTenantAdmin=false`). | `Organization` (slug `oliem-group`) = org métier Pulse/Oliem, **pas** org TAGORA. Runtime mono-org. |
| **CURRENT_COMPANY_MODEL** | `organization_companies.id` = compagnie opérante **dans** un tenant. `company_code` ≠ tenant. | `operating_companies` sous org. Accès `operating_company_user_access`. | **Pas** de company Time. Dealer ≠ company. | **Absent** comme entité. `companyScope` / `OdooSubmission.companyId` = texte / Odoo. |
| **CURRENT_BRAND_MODEL** | N/A identité. | `brands` sous company ; `mailboxes.brand_id` nullable. Conflit `brand_code` snapshot ≠ `brands.id`. | Brand = champ unité inventaire, **pas** identité. | **Absent** comme entité. `brandScope` / `brandKey` texte. **Agent ≠ Brand.** |
| **CURRENT_ROLE_MODEL** | JWT `employe` / `direction` / `admin` + membership H4 + `platform_*`. Cible : `time:*`. Non namespacé aujourd'hui. | DB : `org_role` owner/admin/reviewer/operator/viewer + `platform_owner`. Preview : vocabulaires démo. Cible : `mail:*`. | Déjà namespacé `stock:*` : admin, direction, representant, technicien, revendeur_b2b. Pas `stock:owner`. | Live `AppUserRole` : owner/admin/manager/sales/service/operator/viewer. Trois catalogues RBAC. Cible : `pulse:*`. **Owner Pulse ≠ owner TAGORA.** |
| **CURRENT_PERMISSION_MODEL** | JWT permissions Time (`documents`, `dossiers`, `terrain`, …). Membership H4 obligatoire. `admin_finance` = JWT admin only. | Preview 13 + assignment 11 — enforcement réel **OFF**. RLS helpers org. Scopes Graph **≠** rôles Mail. | Matrice ACC-B + capabilities runtime + dealer_permissions + helpers RLS JWT. | 28 `AppAction` + AccessPermission + Team Permission. Deny-by-default. Production execute = owner Pulse local. |
| **CURRENT_SESSION_MODEL** | Session Supabase locale + cookie hôte-seulement `tagora_app_session` (TTL 1 h). Pas de cookie `.tagora.ca`. | Cookies HttpOnly `mail_ia_sb_*` (app) **et** `mail_ia_graph_*` (mailbox). Logout app ≠ disconnect Graph. | Session Supabase locale + cookies ACL `sp-*` non autoritaires. Host-only. | Cookie `tagora_session` opaque, TTL 7 j, lié `AppUser.id` + `projectId`. Middleware vérifie présence, pas validité DB. |
| **CURRENT_EMAIL_ROLE** | Login local + contact RH + invitation. Pas d'unicité `chauffeurs.courriel`. **Pas** identité canonique. | Login local + corrélation + adresse mailbox + invite. **Pas** identité canonique. Login traite encore email comme unique Auth. | Login local + `email_normalized` UNIQUE **global** + invitation. **Pas** identité TAGORA. | Login AppUser unique par projet + jointure AppUser→User par email + Customer contact. **Pas** identité canonique. |
| **CURRENT_MULTI_TENANT_SUPPORT** | Schéma oui ; V1 centré un tenant + 2 compagnies. Multi-membership sans défaut = fail-closed. Pas d'org switcher. | Schéma multi-org oui. Tenant Mail ≠ tenant Microsoft ≠ tenant TAGORA. | **Contraint.** 1 auth = 1 account. 1 email = 1 account global. Flags tenant optionnels. | Schéma multi-org/projet oui. Runtime **mono-projet** (`xplod-ai-agent`). Opérationnel : **NO**. |
| **CURRENT_DIRECT_LOGIN** | Oui : `/connexion`, `/employe/login`, `/direction/login`. Sans session → login Time, **pas** Nexus. | Oui : `/login`, `/staging-qa-login` + OAuth Graph mailbox. | Oui : `/login`. Middleware → `/login?next=`. | Oui : `/login`, `pulse.tagora.ca/login`. Widget public **sans** auth staff. |
| **CURRENT_RETURN_PATH** | `?next=` interne MFA seulement. Retour Nexus : lien marketing public, pas session. | `returnTo` OAuth Graph = path local seulement. Retour Nexus : **NO**. | `next=` path relatif local. Retour Nexus : **NO**. | `/login?redirect=` path Pulse relatif. Retour Nexus : **NO**. |
| **CURRENT_RLS_OR_ACCESS_CONTROL_DEPENDENCY** | Membership H4 + JWT. AuthGate surtout client. | RLS org helpers + `auth.uid()`. Previews souvent sans middleware. | RLS collée à `auth.uid()` / JWT role / `dealer_account_id`. Accounts via service_role. Tenant RLS dures **non** activées. | Cookie → AppUser actif → RBAC live × AppAction → scopes project/org/agent. Client claims `tenantId` rejetés. |
| **IDENTITY_LINK_COMPATIBILITY** | **PARTIAL.** IDs locaux réutilisables. Lien TAGORA/Entra **absent**. Email = corrélation seulement. | **PARTIAL.** `profiles.id`, org, company, mailbox OK comme refs. **Ne pas** réutiliser Graph oid comme Entra subject. | **PARTIAL.** Account + auth + org UUID + dealer OK. Issuer/subject JWT = Supabase, **pas** Entra. | **PARTIAL.** `AppUser.id` + `Project.id` + `Agent.id` OK. Tenant TAGORA **absent**. Dual AppUser/User. |
| **HANDOFF_COMPATIBILITY** | **PARTIAL** (architecture). Aucun récepteur. Cookie host-only aligné « pas de cookie partagé », insuffisant sans protocole. | **PARTIAL** (architecture). Aucun authorize/redeem. Second password app **et** Graph aujourd'hui. | **PARTIAL** (architecture). Session locale + `next=` path. Aucun redeem. Second password local oui. | **PARTIAL** (module autonome). Incompatible comme RP aujourd'hui. Human handoff métier **≠** TAGORA_HANDOFF_V1. |
| **MAIN_BLOCKERS** | Dedup/orphelins (I5) ; double login employé/direction ; MFA locale ; membership ambiguë ; DEC-015 vs login central ; Phase 4D Lot 2 à isoler. | APP_AUTH ≠ GRAPH_AUTH ; email encore clé login ; rôles non `mail:*` ; ACL user↔mailbox absente ; `brand_code` vs `brands.id`. | Dual JWT vs account ; TEXT vs UUID tenant ; email unique global ; 1 auth = 1 account ; RLS JWT ; pont invitation Auth no-op. | Dual AppUser/User ; Project ≠ tenant ; org Oliem ≠ org TAGORA ; rôles non `pulse:*` ; owner production local ; widget hors handoff. |

---

## Points déjà connus à préserver

### TIME

```text
TIME_EXISTING_USERS=MIGRATION_BOOTSTRAP_SOURCE
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
PASSWORD_COPY=NO
PASSWORD_HASH_MIGRATION=NO
TIME_ROLE_NAMESPACE=time:*
PHASE4D_LOT2_UNCHANGED=YES
```

Time n'est pas l'autorité d'identité. Les utilisateurs existants sont une source de bootstrap. Les rôles Time restent locaux. Le Lot 2 Phase 4D est **indépendant** du chantier identité.

### MAIL IA

```text
APP_AUTH != GRAPH_AUTH
GRAPH_MAILBOX_IDENTITY != ENTRA_EXTERNAL_ID_IDENTITY
MAILBOX_ID=LOCAL_BUSINESS_REFERENCE
MAIL_ROLE_NAMESPACE=mail:*
MAIL_SEND_IN_CENTRAL_IDENTITY=NO
MAIL_READWRITE_IN_CENTRAL_IDENTITY=NO
```

L'identité Graph mailbox n'est pas l'identité Entra External ID. `mailbox_id` reste une référence métier locale.

### STOCK PREMIUM

```text
AUTH_USER != ACCOUNT != DEALER != TENANT
CANONICAL_TENANT_TARGET_LOCAL=stock_premium_organizations.id UUID
STOCK_ROLE_NAMESPACE=stock:*
STOCK_RLS_REMAINS_LOCAL=YES
time:admin != stock:admin
TAGORA_ACCOUNT_AUTO_GRANTS_STOCK=NO
```

### PULSE AI

```text
AppUser != legacy User != Customer
Project != TAGORA_TENANT
Agent != Brand
owner Pulse != owner TAGORA
human_handoff métier != TAGORA_HANDOFF_V1
PULSE_ROLE_NAMESPACE=pulse:*
TAGORA_ACCOUNT_AUTO_GRANTS_PULSE=NO
WIDGET_PUBLIC_OUT_OF_HANDOFF=YES
```

---

## Lecture transversale

Tous les quatre modules :

- authentifient **localement** aujourd'hui (password) ;
- n'ont **pas** de récepteur TAGORA_HANDOFF_V1 ;
- n'ont **pas** de `TAGORA_USER_ID` ;
- n'ont **pas** d'Entra External ID `issuer`+`subject` ;
- traitent l'email comme identifiant de **login local** / corrélation, pas comme identité TOS ;
- exigent encore un **second mot de passe module** aujourd'hui ;
- peuvent se rattacher plus tard **si** le lien d'identité est explicite et fail-closed.

Aucun module ne peut être intégré par JOIN email. Aucun rôle métier ne peut être transporté comme rôle universel.

---

## Module pilote — comparaison (non approuvé)

| Critère | TIME | MAIL | STOCK | PULSE |
|---|---|---|---|---|
| Rôles déjà namespacés | NON (`time:*` cible) | NON (`mail:*` cible) | **OUI** `stock:*` | NON (`pulse:*` cible) |
| Tenant local canonique | UUID org Time | UUID org Mail | UUID org Stock **identifié** | **Absent** (Project surchargé) |
| Dual identité interne | Auth vs chauffeur | App vs Graph | Auth vs account vs dealer | AppUser vs User vs Customer |
| Collision avec autre chantier | Phase 4D Lot 2 + bootstrap I5 | Graph mailbox live staging | Account writes OFF | Widget X-Plod + providers |
| Reco mapping DEC-020 I5 | — | — | **À évaluer** | — |

```text
RECOMMENDED_PILOT_MODULE=STOCK_PREMIUM
PILOT_APPROVED=NO
HUMAN_GATE_REQUIRED=YES
```

Rationale : voir [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) § Module pilote.

---

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- [VALD-101](../../10_knowledge/VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
