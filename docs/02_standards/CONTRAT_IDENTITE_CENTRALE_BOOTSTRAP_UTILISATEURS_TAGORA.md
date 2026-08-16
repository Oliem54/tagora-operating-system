# Contrat d'identité centrale et de bootstrap des utilisateurs TAGORA

## Objectif

Formaliser le contrat officiel de **bootstrap et de rattachement** des utilisateurs existants TAGORA Time vers l'identité TAGORA centrale.

Cette décision **complète DEC-020 / ADR-0008**. Elle ne les replace pas.

Buts :

- ne pas recréer manuellement tous les employés existants ;
- ne jamais copier les mots de passe Time ni les hashes ;
- ne jamais universaliser les rôles Time ;
- créer à terme un identifiant TAGORA central indépendant des IDs Auth locaux ;
- permettre ensuite à Nexus d'attribuer les accès module par module.

```text
TIME_EXISTING_USERS=MIGRATION_BOOTSTRAP_SOURCE
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
NEXUS_ENTRA=FUTURE_CENTRAL_IDENTITY_AUTHORITY
```

## Portée

Écosystème TAGORA. Décision **normative**. Contrat **conceptuel** : aucune table DB réelle, aucun Entra, aucun SSO, aucun utilisateur réel dans ce gate.

Emplacement TOS : `docs/02_standards/`.

Source Time : rapport READ-ONLY de compatibilité identité / bootstrap (enregistré ici comme état confirmé, **sans** réouverture Time).

---

## Statut

```text
IDENTITY_BOOTSTRAP_CONTRACT_STATUS=OFFICIAL
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
```

Décision Martin : **DEC-021**  
ADR : **ADR-0009**  
Validation : **VALD-100**  
Date : **2026-08-16**  
Décideur : **Martin ST-Gelais — Direction**

---

## État Time confirmé (READ-ONLY)

```text
CURRENT_TIME_AUTH=SUPABASE_AUTH_PASSWORD_LOCAL
TIME_LOCAL_AUTH_USER_ID=auth.users.id UUID
TIME_EMPLOYEE_ID=chauffeurs.id bigint
TIME_TENANT_ID=organizations.id UUID
TIME_COMPANY_ID=organization_companies.id
TIME_EMPLOYEE_AUTH_LINK=chauffeurs.auth_user_id
TIME_EMAIL=CORRELATION_FIELD_NOT_CANONICAL_IDENTITY
TIME_ROLES=MODULE_LOCAL_ONLY
TIME_PERMISSIONS=MODULE_LOCAL_ONLY
CURRENT_TIME_SESSION=LOCAL_HOST_ONLY
CURRENT_TIME_SSO=NO
CURRENT_TIME_ENTRA=NO
CURRENT_TIME_HANDOFF=NO
```

Time est une **source de bootstrap**, pas l'autorité d'identité centrale.

---

## Risques

```text
DUPLICATE_USER_RISK=HIGH
EMAIL_COLLISION_RISK=HIGH
MULTI_TENANT_RISK=HIGH
```

Sources actuelles observées : `auth.users` ; `chauffeurs` ; `organization_memberships` ; `account_requests`.

Possibilités existantes :

- chauffeur sans Auth ;
- Auth sans chauffeur ;
- email fiche ≠ email Auth ;
- invitation orpheline ;
- plusieurs memberships ;
- rôles JWT ≠ membership ;
- actif RH ≠ accès portail actif.

**Interdit :** JOIN naïf uniquement sur email.

---

## Identité TAGORA cible

```text
TAGORA_USER_ID=IDENTIFIANT CENTRAL STABLE
ENTRA_IDENTITY_KEY=issuer + subject
EMAIL=CORRELATION_AND_CONTACT_FIELD
EMAIL_IS_CANONICAL_IDENTITY=NO
TIME_LOCAL_AUTH_USER_ID=LEGACY_LOCAL_REFERENCE
TIME_EMPLOYEE_ID=MODULE_LOCAL_EMPLOYEE_REFERENCE
IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID
CENTRAL_LOGIN_TARGET=https://app.tagora.ca/login
```

L'email n'est **pas** l'identité canonique. Il sert de signal de corrélation et de contact.

---

## Contrat conceptuel TAGORA_IDENTITY_LINK

Registre de liens d'identité — **conceptuel uniquement**. Aucune table DB dans ce gate.

Il doit pouvoir représenter :

| Champ conceptuel | Rôle |
|---|---|
| `tagora_user_id` | identifiant central stable |
| `identity_provider` | fournisseur (cible : Entra External ID) |
| `issuer` | issuer Entra |
| `subject` | subject Entra |
| `module` | slug module (`time`, `mail`, `stock`, `pulse`, `nexus`) |
| `module_local_user_id` | ID Auth local du module |
| `module_local_employee_id` | ID employé local si pertinent |
| `tenant_id` | tenant commercial |
| `organization_id` | si distinct du tenant |
| `company_id` | compagnie opérante si pertinent |
| `correlation_email` | email de corrélation, non canonique |
| `link_status` | état du lien |
| `link_method` | méthode de rattachement |
| `linked_at` | horodatage de lien |
| `verified_at` | horodatage de vérification |
| `source_system` | système source (ex. Time) |

```text
IDENTITY_LINK_MODEL_DEFINED=YES
IDENTITY_LINK_TABLE_CREATED=NO
```

---

## Bootstrap Time — flux cible

1. Inventorier les employés Time.
2. Classifier :

```text
MATCHED
UNMATCHED
DUPLICATE
CONFLICT
ORPHAN
INACTIVE
```

3. Utiliser comme **signaux** de corrélation (non comme preuve unique) : nom ; email normalisé ; téléphone ; statut ; tenant ; company ; membership.
4. Ne jamais considérer l'email seul comme preuve définitive d'identité.
5. Créer / rattacher un `TAGORA_USER_ID` central.
6. Associer ensuite Entra `issuer` + `subject`.
7. Conserver les IDs Time comme références locales historiques.
8. Attribuer **séparément** les accès aux modules.
9. Ne jamais propager automatiquement un rôle Time vers un autre module.

```text
DUPLICATE_CLASSIFICATION_DEFINED=YES
PASSWORD_COPY_FROM_TIME=NO
PASSWORD_HASH_MIGRATION=NO
TIME_MFA_SECRET_MIGRATION=NO
TIME_ROLE_PROPAGATION=NO
```

---

## Espaces de noms de rôles

Aucun rôle module n'est un rôle TAGORA universel.

```text
TIME_ROLE_NAMESPACE=time:*
MAIL_ROLE_NAMESPACE=mail:*
STOCK_ROLE_NAMESPACE=stock:*
PULSE_ROLE_NAMESPACE=pulse:*
NEXUS_ROLE_NAMESPACE=nexus:*
```

Exemples :

- `time:direction` ≠ `stock:admin`
- `time:employe` ≠ `mail:approver`
- `time:admin` ≠ `platform_admin`

```text
MODULE_ROLE_NAMESPACES_DEFINED=YES
```

---

## Accès modules

Le compte TAGORA central **ne donne pas** automatiquement accès à tous les modules.

Séparer :

```text
IDENTITY
TENANT_MEMBERSHIP
MODULE_SUBSCRIPTION
USER_MODULE_ACCESS
MODULE_LOCAL_ROLE
MODULE_LOCAL_PERMISSION
```

Flux cible :

```text
TAGORA USER
-> TENANT
-> MODULE SUBSCRIPTION
-> USER MODULE ACCESS
-> MODULE LOCAL SESSION
-> MODULE LOCAL ROLES/PERMISSIONS
```

---

## Mots de passe / MFA

```text
PASSWORD_COPY_FROM_TIME=NO
PASSWORD_HASH_MIGRATION=NO
TIME_MFA_SECRET_MIGRATION=NO
SHARED_PASSWORD_DATABASE=NO
MODULE_SPECIFIC_PASSWORDS_FINAL_TARGET=NO
ONE_PRIMARY_PASSWORD_TARGET=YES
ONE_MFA_TARGET=YES
IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID
```

---

## Login Time futur

`time.tagora.ca` reste une URL valide.

- Si session Time valide : ouvrir Time.
- Si aucune session Time valide : **ne pas** demander un deuxième mot de passe TAGORA.

Parcours cible (non implémenté) :

```text
time.tagora.ca
-> app.tagora.ca/login
-> Entra
-> handoff sécurisé
-> retour Time
```

```text
TAGORA_HANDOFF_V1=OFFICIAL_TECHNICAL_CONTRACT
HANDOFF_REAL_AUTHORIZED=NO
```

Le protocole conceptuel est figé par [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) (DEC-022 / ADR-0010 / VALD-101). Aucun endpoint runtime n'est autorisé ici.

---

## Multi-tenant / company

```text
TIME_TENANT_ID=organizations.id
TIME_COMPANY_ID=organization_companies.id
TENANT_COMPANY_SEPARATION_RECORDED=YES
MULTI_ORG_USER_TARGET=SUPPORTED_FUTURE
ACTIVE_ORG_SELECTION=FUTURE_REQUIRED
FAIL_CLOSED_IF_AMBIGUOUS=YES
```

`organizations.id` = tenant commercial Time.  
`organization_companies.id` = compagnie opérante interne.

Ne jamais transformer `company_id` en `tenant_id`.  
Ne pas supposer qu'un utilisateur n'appartient qu'à une seule organisation.  
Si le rattachement est ambigu : **fail-closed**.

---

## Website

Website n'a **pas** besoin des détails métier de migration identité.  
Website conserve uniquement le login central Nexus : `https://app.tagora.ca/login`.

---

## Séquence recommandée

| Phase | Objet | Autorisé maintenant |
|---|---|---|
| **IDENTITY-I0** | Contrat TOS identité / bootstrap | **OUI** — ce document |
| **IDENTITY-I1** | READ-ONLY compatibility Mail IA | **PASS** |
| **IDENTITY-I2** | READ-ONLY compatibility Stock Premium | **PASS** |
| **IDENTITY-I3** | READ-ONLY compatibility Pulse AI | **PASS** |
| **IDENTITY-I4** | Contrat technique TAGORA_HANDOFF_V1 après comparaison des quatre modules | **CLOSED** — [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) |
| **IDENTITY-I5** | Modèle de migration / dedup Time | NON |
| **IDENTITY-I6** | Entra External ID STAGING | NON — Human Gate séparé |
| **IDENTITY-I7** | Un seul module pilote | NON — Stock **sélectionné** (DEC-023) ; implémentation non autorisée ; non commencé |
| **IDENTITY-I8** | QA | NON |
| **IDENTITY-I9** | Modules suivants un par un | NON |

Prochain Human Gate : IDENTITY-I5 — modèle de migration / reconciliation des utilisateurs Time existants (documentation / design only). I5–I9 non commencés.

---

## Interdictions de ce gate

Aucun code produit ; aucun repo Time/Nexus/Mail/Stock/Pulse ; aucune DB ; aucune migration ; aucun Supabase write ; aucun Entra réel ; aucune app registration ; aucun OAuth ; aucun secret ; aucun token ; aucun utilisateur réel ; aucune invitation ; aucun mot de passe ; aucun hash ; aucun MFA réel ; aucun SSO ; aucun DNS ; aucun deploy ; aucune Production.

---

## Décisions liées

| ID | Relation |
|---|---|
| ADR-0008 / DEC-020 / VALD-099 | Mapping accès / identité cible — **complété**, non remplacé |
| ADR-0010 / DEC-022 / VALD-101 | Contrat technique TAGORA_HANDOFF_V1 — **complété**, non remplacé |
| ADR-0011 / DEC-023 / VALD-102 | Sélection officielle du pilote Stock Premium — **complété**, non remplacé |
| ADR-0007 / DEC-019 | Surfaces — inchangé |
| VALD-094 | Phase 4D Lot 2 — **inchangée** |

---

## Références

- [ADR-0009](../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- [VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md](../10_knowledge/VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md)
- Complément handoff : [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- Complément sélection pilote : [ADR-0011](../05_adr/ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
