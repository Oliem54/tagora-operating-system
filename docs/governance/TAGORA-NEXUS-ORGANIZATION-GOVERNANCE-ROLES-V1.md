# TAGORA Nexus — rôles de gouvernance d'organisation V1

Contrat de gouvernance distinct. Il **ne réécrit pas** ADR-0008, ADR-0009, ADR-0010, le fournisseur d'identité Nexus, ni le registre des modules. Il **complète** ces décisions par une couche d'autorité d'organisation.

Ce fichier n'implémente aucun runtime. Il n'applique aucune migration. Le prochain gate d'implémentation Nexus est autorisé **seulement** après ce contrat.

```text
CONTRACT_ID=TAGORA-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-V1
CONTRACT_VERSION=1.0.0
CONTRACT_STATUS=ACTIVE_APPROVED
DECISION_AUTHORITY=MARTIN_AND_TOS
SOURCE_GATE=TOS-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-PREMIUM-2027-GO
APPROVAL_DATE=2026-09-06
ADR=ADR-0019
DEC=DEC-031
VALD=VALD-109
ORGANIZATION_GOVERNANCE_LAYER_APPROVED=YES
DOCUMENTATION_ONLY=yes
RUNTIME_CHANGE=no
HISTORICAL_ADR_REWRITE=no
```

---

## 1. Objet et limites

### Objet

Définir la couche officielle de **rôles de gouvernance d'organisation** exigée par le Centre de pilotage Premium 2027.

### Limites

```text
CODE_CHANGE_AUTHORIZED=no
DATABASE_CHANGE_AUTHORIZED=no
MIGRATION_AUTHORIZED=no
SEED_AUTHORIZED=no
DEPLOYMENT_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
MODULE_BUSINESS_ROLE_ASSIGNMENT_AUTHORIZED=no
READY_FOR_IMPLEMENTATION_GATE=yes
```

---

## 2. Décision liante

```text
CANONICAL_ROLES=organization_owner,organization_admin,organization_member
NEXUS_ENTRY_ROLE_REUSED=NO
GENERIC_BUSINESS_ROLE_REUSED=NO
MODULE_ROLE_REUSED=NO
NEXUS_ADMIN_LAYER_REMAINS_SEPARATE=YES
SELECTED_DATA_MODEL=A_MEMBERSHIP_COLUMN_PLUS_CLOSED_CATALOG
ONE_GOVERNANCE_ROLE_PER_ACTIVE_MEMBERSHIP=YES
EMAIL_IS_AUTHORITY=NO
FAIL_CLOSED=YES
TENANT_SCOPED=YES
ORGANIZATION_SCOPED=YES
```

Interdit de réutiliser :

| Couche existante | Pourquoi ce n'est pas la gouvernance d'organisation |
|---|---|
| `NEXUS_ENTRY_MEMBER` / `NEXUS_ENTRY_OPERATOR` | Classement d'entrée Nexus / handoff, pas l'autorité d'org |
| `nexus_admin_principals` | Administrateur plateforme Nexus, potentiellement global |
| `super_admin` `direction` `manager` `employee` `external` | Rôles métier / mocks dossiers, pas l'org SaaS |
| Rôles HORORA / DEPORA / MESSOR / PULS | Autorité module-owned |
| Entra oid / email | Identité ou contact, pas un rôle d'org |
| `ModuleSubscription` / `UserModuleAccess` | Entitlement commercial / entrée module |

---

## 3. Définitions

### organization_owner

Plus haute autorité de gouvernance **pour une organisation**.

Peut : réglages org, admins org, membres, invitations, activer/désactiver memberships, assigner/retirer/suspendre/restaurer l'accès module, audit central, état d'accès modules, politiques d'accès organisation, transfert de propriétaire.

Ne peut pas automatiquement : devenir admin métier module, contourner les permissions module, lire les boîtes MESSOR privées, modifier l'infrastructure, lire les secrets, outrepasser le RLS, contourner l'entitlement.

### organization_admin

Opérateur administratif **pour une organisation**.

Peut : inviter, gérer les membres (hors owner), assigner/révoquer/suspendre l'accès module, voir Users & Access, voir l'audit, aider à configurer l'accès module.

Ne peut pas : promouvoir un `organization_owner` sauf politique owner `delegate_owner_promotion=true` (défaut `false`) ; altérer l'infrastructure ; contourner les permissions module ; accéder aux boîtes privées ; changer les secrets.

### organization_member

Membre actif standard. Aucune administration d'organisation, sauf capacité plateforme séparée via `nexus_admin_principals` — qui **ne change pas** ce rôle.

---

## 4. Cible Martin / Guillaume — TAGORA Internal

```text
MARTIN_TARGET_ROLE=organization_owner
MARTIN_NEXUS_ADMIN=YES
GUILLAUME_TARGET_ROLE=organization_admin
GUILLAUME_NEXUS_ADMIN_BOOTSTRAP=YES
GUILLAUME_NEXUS_ADMIN_TARGET=ORG_SCOPED_ONLY
AUTO_ASSIGN_MODULE_BUSINESS_ROLES=NO
```

Guillaume est `organization_admin`, pas owner. Le `NEXUS_ADMIN=YES` de Guillaume est un **bootstrap** parce que `requireNexusAdmin()` est encore global. Cible Premium 2027 : gouvernance scoped par organisation, sans super-admin global obligatoire.

---

## 5. Modèle de données

### Choix

**A** — colonne sur `nexus_memberships` + catalogue fermé.

**B** — table d'assignation membership ↔ rôle : **rejetée** (1:1, trou fail-open, dérive tenant).

### Schéma canonique (prochain gate)

```sql
-- Catalogue fermé (vocabulaire, pas d'assignation)
CREATE TABLE public.nexus_organization_governance_roles (
  role_key   TEXT PRIMARY KEY,
  is_active  BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT nexus_org_gov_roles_key_chk
    CHECK (role_key IN (
      'organization_owner',
      'organization_admin',
      'organization_member'
    ))
);

ALTER TABLE public.nexus_memberships
  ADD COLUMN governance_role TEXT NOT NULL DEFAULT 'organization_member'
  REFERENCES public.nexus_organization_governance_roles(role_key);

CREATE UNIQUE INDEX nexus_memberships_one_active_owner
  ON public.nexus_memberships (organization_id)
  WHERE governance_role = 'organization_owner' AND is_active = TRUE;
```

Backfill : toute membership existante reçoit `organization_member`. Martin et Guillaume sont ensuite assignés explicitement, avec audit.

---

## 6. Sécurité

```text
TENANT_SCOPED=YES
ORGANIZATION_SCOPED=YES
FAIL_CLOSED=YES
EMAIL_AUTHORITY=NO
CANONICAL_USER_IDENTITY_ONLY=YES
CROSS_TENANT_ROLE_ASSIGNMENT=NO
ORGANIZATION_MEMBER_ESCALATION=NO
OWNER_CHANGES_AUDITED=YES
ADMINISTRATOR_CHANGES_AUDITED=YES
COOKIE_AUTHORITY=NO
JSON_BODY_ACTOR_AUTHORITY=NO
```

Règles :

1. Identité = `nexus_users.id` (issuer + subject). Email jamais unique, jamais clé.
2. Actor et target : même `tenant_id` et même `organization_id`.
3. `organization_member` ne peut assigner aucun rôle de gouvernance.
4. Rôle inconnu / NULL (défense) = `organization_member` sans capacité admin.
5. Membership inactive = aucune capacité, le rôle est conservé pour restauration.
6. Dernier owner actif : rétrogradation interdite hors transfert transactionnel.
7. Server-only, RLS fail closed.

---

## 7. Audit

Événements :

```text
ORGANIZATION_ROLE_ASSIGNED
ORGANIZATION_ROLE_CHANGED
ORGANIZATION_OWNER_ASSIGNED
ORGANIZATION_ADMIN_ASSIGNED
ORGANIZATION_MEMBER_ASSIGNED
```

Payload obligatoire : actor, target user, tenant, organization, before (`old_role_key`), after (`new_role_key`), timestamp (`at`), result (`APPLIED` | `DENIED`).

Store : `nexus_access_audit` existant. Pas de nouveau journal parallèle.

---

## 8. UI Premium 2027

Champs distincts obligatoires :

```text
Rôle Nexus
Administration Nexus
Organisation
Rôle organisation
Accès modules
Rôles modules
Permissions modules
```

Exemple Martin :

```text
Rôle Nexus:           Employé
Administration Nexus: Administrateur
Organisation:         TAGORA Internal — Actif
Rôle organisation:    Propriétaire
```

Libellés FR :

| Clé | UI |
|---|---|
| `organization_owner` | Propriétaire |
| `organization_admin` | Administrateur |
| `organization_member` | Membre |

Ne pas afficher le rôle d'entrée Nexus comme rôle d'organisation.

---

## 9. Nexus Admin vs gouvernance d'organisation

```text
LAYER_A=NEXUS_ENTRY_ROLE
LAYER_B=NEXUS_ADMIN_PRINCIPAL
LAYER_C=ORGANIZATION_GOVERNANCE_ROLE
LAYER_D=USER_MODULE_ACCESS
LAYER_E=MODULE_BUSINESS_ROLE
LAYER_F=MODULE_PERMISSIONS
```

Ces six couches restent orthogonales. Aucune n'implique les autres.

Cible : LAYER_C scoped org remplace le besoin de LAYER_B pour l'administration quotidienne d'une organisation.

---

## 10. Frontière

```text
TOS_SCOPE_CONTRACT=YES
NEXUS_IMPLEMENTATION_THIS_GATE=NO
HORORA_CHANGED=NO
DEPORA_CHANGED=NO
MESSOR_CHANGED=NO
PULS_CHANGED=NO
YORVA_CHANGED=NO
ETIOQ_CHANGED=NO
```

## Références

- [ADR-0019](../05_adr/ADR-0019-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md)
- [DEC-031](../10_knowledge/DEC-031-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md)
- [VALD-109](../10_knowledge/VALIDATION_VALD_109_COUCHE_ROLES_GOUVERNANCE_ORGANISATION_NEXUS.md)
