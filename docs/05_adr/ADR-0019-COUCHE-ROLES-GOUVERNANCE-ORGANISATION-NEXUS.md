# ADR-0019 — Couche de rôles de gouvernance d'organisation Nexus (Premium 2027)

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-09-06**

Validation : **VALD-109**  
Décision : **DEC-031**  
Gate : **TOS-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-PREMIUM-2027-GO**

Cette ADR **complète** ADR-0003, ADR-0008, ADR-0009 et ADR-0010. Elle **ne les remplace pas**.

Elle officialise une couche d'autorité distincte. Elle **n'applique aucune** migration, seed, UI runtime ni Production.

---

## Contexte

Le Centre de pilotage Premium 2027 doit montrer, sur un même profil utilisateur, des autorités séparées :

```text
Rôle Nexus
Administration Nexus
Organisation
Rôle organisation
Accès modules
Rôles modules
Permissions modules
```

Le runtime Nexus Staging a aujourd'hui :

- `nexus_memberships` : `id`, `user_id`, `organization_id`, `tenant_id`, `is_active` — **aucun** rôle d'organisation ;
- `nexus_entry_roles` : `NEXUS_ENTRY_MEMBER` | `NEXUS_ENTRY_OPERATOR` ;
- `nexus_admin_principals` : autorité administrateur plateforme Nexus, globale ;
- table de rôles métier / mocks UI : `super_admin`, `direction`, `manager`, `employee`, `external`.

Réutiliser n'importe laquelle de ces couches comme « rôle organisation » fusionnerait l'entrée Nexus, l'administration plateforme, le métier dossier et la gouvernance d'organisation. Ce mélange est interdit.

---

## Décision

```text
ORGANIZATION_GOVERNANCE_LAYER_APPROVED=YES
CANONICAL_ROLES=organization_owner,organization_admin,organization_member
NEXUS_ENTRY_ROLE_REUSED=NO
GENERIC_BUSINESS_ROLE_REUSED=NO
MODULE_ROLE_REUSED=NO
NEXUS_ADMIN_LAYER_REMAINS_SEPARATE=YES
SELECTED_DATA_MODEL=A_MEMBERSHIP_COLUMN_PLUS_CLOSED_CATALOG
SCHEMA_CHANGE_REQUIRED=YES
SCHEMA_CHANGE_APPLIED_THIS_GATE=NO
AUDIT_CONTRACT_DEFINED=YES
READY_FOR_NEXUS_ORGANIZATION_GOVERNANCE_IMPLEMENTATION=YES
```

Il existe une **couche de gouvernance d'organisation**, distincte, scoped tenant + organisation, exactement **un** rôle de gouvernance par membership active.

### Rôles canoniques

| Clé technique | Libellé UI FR | Autorité |
|---|---|---|
| `organization_owner` | Propriétaire | Plus haute autorité de gouvernance **d'une** organisation |
| `organization_admin` | Administrateur | Opérateur administratif **d'une** organisation |
| `organization_member` | Membre | Membre actif standard, **sans** administration d'organisation |

Ces rôles appartiennent uniquement à la membership / gouvernance d'organisation. Ils ne sont pas :

- des rôles d'entrée Nexus (`NEXUS_ENTRY_*`) ;
- des flags `nexus_admin_principals` ;
- des rôles métier de module ;
- des permissions de module ;
- des identités Entra ;
- des entitlements d'abonnement.

### Cible TAGORA Internal

| Personne | Rôle organisation | Administration Nexus |
|---|---|---|
| Martin | `organization_owner` | `NEXUS_ADMIN=YES` |
| Guillaume | `organization_admin` | bootstrap `NEXUS_ADMIN=YES` tant que le garde-fou org-scoped n'existe pas |

Les rôles métier HORORA / DEPORA / MESSOR / PULS / YORVA / ETIOQ **ne sont pas** assignés automatiquement depuis ces rôles de gouvernance.

---

## Options considérées

### A — Colonne `governance_role` sur `nexus_memberships` + catalogue fermé

**Retenu.**

La membership est déjà unique `(user_id, organization_id)`, déjà scoped `tenant_id` + `organization_id`, et déjà le support du multi-organisations par utilisateur (plusieurs rangées). Un rôle de gouvernance **est une propriété de cette membership**, pas une autorité parallèle.

Catalogue `nexus_organization_governance_roles` : vocabulaire fermé, analogue à `nexus_entry_roles`. Ce n'est **pas** une table d'assignation.

Cardinalité « exactement un rôle par membership active » = contrainte de colonne `NOT NULL DEFAULT organization_member`.

Fail closed : valeur manquante, inconnue ou membership inactive ⇒ aucune capacité d'administration d'organisation.

Auditabilité : mutations via `nexus_access_audit` (acteur, cible, tenant, organisation, before, after, timestamp, résultat). L'historique n'appartient pas à la rangée live.

### B — Table d'assignation `nexus_organization_governance_role_assignments`

**Rejeté.**

Une table 1:1 avec `nexus_memberships` duplique la membership, crée un trou fail-open (membership sans rangée d'assignation), et augmente le risque de dérive tenant/organisation. L'audit append-only existe déjà. Les politiques futures (délégation de promotion owner) sont des objets de politique, pas une deuxième table de rôle.

### C — Réutiliser `nexus_entry_roles`, `nexus_admin_principals` ou `super_admin` / `direction` / `manager` / `employee` / `external`

**Interdit.**

Ces autorités ont d'autres frontières. Les fusionner casserait le profil Premium 2027 et le fail closed module.

---

## Modèle de persistance canonique (à implémenter au prochain gate)

```text
CATALOG=nexus_organization_governance_roles
CATALOG_KEYS=organization_owner|organization_admin|organization_member
MEMBERSHIP_COLUMN=nexus_memberships.governance_role
MEMBERSHIP_COLUMN_NULLABLE=NO
MEMBERSHIP_COLUMN_DEFAULT=organization_member
ONE_ROLE_PER_ACTIVE_MEMBERSHIP=YES
ACTIVE_OWNER_PER_ORGANIZATION=EXACTLY_ONE
ASSIGNMENT_JUNCTION_TABLE=NO
GENERIC_ROLES_TABLE=NOT_USED
```

Invariants d'implémentation :

1. `governance_role` référence le catalogue fermé (FK ou `CHECK`).
2. Index unique partiel : au plus / exactement un `organization_owner` **actif** par `organization_id`.
3. Transfert de propriétaire = une transaction : rétrograder l'owner actuel, promouvoir le nouvel owner, deux événements d'audit.
4. `organization_owner` n'est **jamais** accordé par invitation. L'invitation peut viser `organization_member` (défaut) ou `organization_admin`.
5. Isolation : l'acteur et la cible doivent partager tenant **et** organisation ; sinon `CROSS_TENANT_DENIED` / `CROSS_ORGANIZATION_DENIED`.
6. Identité canonique seulement (`nexus_users.id` = issuer + subject). Email = attribut de contact, jamais clé d'autorité.
7. Écritures server-only / `service_role`. RLS fail closed. Pas d'autorité cookie, body JSON, ou email.

---

## Matrice d'autorité (gouvernance d'organisation seulement)

### `organization_owner` — peut

- administrer les réglages de l'organisation ;
- gérer les administrateurs d'organisation ;
- gérer les membres ;
- inviter des utilisateurs ;
- activer / désactiver des memberships ;
- assigner / retirer l'accès module (UMA) ;
- suspendre / restaurer l'accès module ;
- voir l'audit central de l'organisation ;
- voir l'état d'accès modules ;
- gérer les politiques d'accès **au niveau organisation** ;
- assigner `organization_member`, `organization_admin`, `organization_owner` (transfert).

### `organization_owner` — ne peut pas automatiquement

- devenir admin métier d'un module ;
- contourner les permissions module ;
- accéder aux boîtes MESSOR privées ;
- altérer l'infrastructure Supabase / Vercel / Entra ;
- lire les secrets ;
- outrepasser le RLS ;
- contourner les règles d'entitlement / abonnement.

### `organization_admin` — peut

- inviter des utilisateurs ;
- gérer les membres (hors propriétaire, hors promotion owner) ;
- assigner / révoquer / suspendre l'accès module ;
- voir Users & Access **de son organisation** ;
- voir l'audit **de son organisation** ;
- aider à configurer l'accès module.

### `organization_admin` — ne peut pas

- promouvoir un utilisateur en `organization_owner`, sauf politique owner explicite `delegate_owner_promotion=true` (défaut `false`) ;
- altérer l'infrastructure ;
- contourner les permissions module ;
- accéder aux données de boîtes privées ;
- changer les secrets de sécurité.

### `organization_member` — peut

- aucune administration d'organisation.

Une capacité d'administration Nexus plateforme peut exister **séparément** via `nexus_admin_principals`. Elle ne transforme pas le membre en `organization_admin` ou `organization_owner`.

---

## Couche Nexus Admin (séparée)

```text
NEXUS_ADMIN_PRINCIPALS_REMAINS=YES
NEXUS_ADMIN_EQUALS_ORGANIZATION_OWNER=NO
ORG_SCOPED_GOVERNANCE_IS_PREMIUM_2027_TARGET=YES
ORG_SCOPED_ADMIN_GUARD_EXISTS_TODAY=NO
```

`nexus_admin_principals` reste l'autorité **plateforme** (console Nexus, opérations transverses). Ce n'est pas un rôle d'organisation.

Cible Premium 2027 : les permissions de gouvernance d'organisation sont **scoped par organisation**. Un `organization_admin` / `organization_owner` administre **son** organisation sans devoir être super-admin global.

Aujourd'hui, `requireNexusAdmin()` est global. Tant que le garde-fou org-scoped n'est pas livré, Martin et Guillaume peuvent rester `NEXUS_ADMIN=YES` **en bootstrap TAGORA Internal seulement**. Ce bootstrap n'est pas le modèle cible.

Le libellé conceptuel « Super Admin TAGORA » / « Admin client » du contrat M1 unifié est **renommé** :

- Administration Nexus = `nexus_admin_principals` ;
- Rôle organisation = cette couche ;
- `super_admin` de la table métier / mocks UI **n'est pas** cette autorité.

---

## Contrat d'audit

Événements canoniques (écrits dans `nexus_access_audit`) :

| `event_type` | Usage |
|---|---|
| `ORGANIZATION_ROLE_ASSIGNED` | Première assignation (y compris défaut explicite tracé) |
| `ORGANIZATION_ROLE_CHANGED` | Changement member ↔ admin, ou autre mutation hors owner |
| `ORGANIZATION_OWNER_ASSIGNED` | Promotion / transfert vers owner |
| `ORGANIZATION_ADMIN_ASSIGNED` | Promotion vers admin |
| `ORGANIZATION_MEMBER_ASSIGNED` | Assignation ou rétrogradation vers member |

Champs obligatoires :

```text
actor        = actor_user_id     (canonical nexus_users.id)
target user  = target_user_id
tenant       = tenant_id
organization = organization_id
before       = old_role_key
after        = new_role_key
timestamp    = at
result       = APPLIED | DENIED
```

Compléments autorisés dans `metadata` : `membership_id`, `reason_code`, `correlation_id`, politique owner appliquée. Interdits : email comme autorité, secrets, jetons, permissions métier module.

Toute tentative d'escalade par un `organization_member` est `DENIED` + audit.

---

## Contrat UI Premium 2027

Le profil utilisateur **doit** afficher ces champs comme des autorités distinctes. Exemple Martin (TAGORA Internal) :

```text
Rôle Nexus:              Employé          (NEXUS_ENTRY_MEMBER si l'entrée reste ce classement)
Administration Nexus:    Administrateur   (nexus_admin_principals)
Organisation:            TAGORA Internal
Statut organisation:     Actif
Rôle organisation:       Propriétaire     (organization_owner)
Accès modules:           UserModuleAccess
Rôles modules:           assignations module-owned
Permissions modules:     autorité du module, jamais un grant Nexus universel
```

L'UI actuelle qui réaffiche le rôle d'entrée Nexus sur la rangée organisation est **non conforme** à ce contrat. Correction au gate d'implémentation.

---

## Conséquences

### Positives

- Le Centre de pilotage peut gouverner une organisation sans contaminer les modules.
- Un utilisateur peut être owner d'une org et member d'une autre.
- Fail closed par défaut (`organization_member`).
- Audit owner / admin traçable.

### Contraintes

- Migration `nexus_memberships.governance_role` requise au prochain gate.
- Garde-fou org-scoped à construire ; le principal Nexus global n'est qu'un bootstrap.
- Backfill : memberships existantes → `organization_member`, puis assignation explicite Martin / Guillaume.

## Frontière de ce gate

```text
TOS_DOCUMENTATION=YES
NEXUS_DOCUMENTATION=YES
NEXUS_CODE_CHANGED=NO
NEXUS_MIGRATION_APPLIED=NO
DATABASE_CHANGED=NO
ENV_CHANGED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MODULE_REPOS_CHANGED=NO
IMPLEMENTATION_GATE_REQUIRED=YES
```

## Références

- `docs/governance/TAGORA-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-V1.md`
- `docs/10_knowledge/DEC-031-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md`
- `docs/10_knowledge/VALIDATION_VALD_109_COUCHE_ROLES_GOUVERNANCE_ORGANISATION_NEXUS.md`
- tagora-nexus `docs/architecture/NEXUS_ORGANIZATION_GOVERNANCE_ROLES.md`
- ADR-0009 — rôles namespacés, email ≠ identité
- ADR-0010 — pas de rôle métier universel via handoff
