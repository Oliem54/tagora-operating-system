# VALD-109 — Couche de rôles de gouvernance d'organisation Nexus

**Date :** 2026-09-06

**Décideur :** Martin ST-Gelais — Direction

**Statut :** Validé

**Type :** Humaine / Gouvernance

**Gate :** `TOS-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-PREMIUM-2027-GO`

## Décision validée

```text
ORGANIZATION_GOVERNANCE_LAYER_APPROVED=YES
CANONICAL_ROLES=organization_owner,organization_admin,organization_member
MARTIN_TARGET_ROLE=organization_owner
GUILLAUME_TARGET_ROLE=organization_admin
NEXUS_ENTRY_ROLE_REUSED=NO
GENERIC_BUSINESS_ROLE_REUSED=NO
MODULE_ROLE_REUSED=NO
NEXUS_ADMIN_LAYER_REMAINS_SEPARATE=YES
SELECTED_DATA_MODEL=A_MEMBERSHIP_COLUMN_PLUS_CLOSED_CATALOG
SCHEMA_CHANGE_REQUIRED=YES
SCHEMA_CHANGE_APPLIED=NO
AUDIT_CONTRACT_DEFINED=YES
READY_FOR_NEXUS_ORGANIZATION_GOVERNANCE_IMPLEMENTATION=YES
```

Les rôles `super_admin`, `direction`, `manager`, `employee`, `external`, `NEXUS_ENTRY_*` et les rôles métier module ne sont pas la gouvernance d'organisation.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif TOS et le contrat d'architecture Nexus.

```text
NEXUS_CODE_AUTHORIZED=NO
NEXUS_MIGRATION_AUTHORIZED=NO
NEXUS_SEED_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MODULE_ROLE_AUTO_ASSIGN=NO
```

## Livrables

- DEC-031 ;
- ADR-0019 ;
- contrat `docs/governance/TAGORA-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-V1.md` ;
- contrat Nexus `docs/architecture/NEXUS_ORGANIZATION_GOVERNANCE_ROLES.md`.

## Prochain Human Gate

`TOS-NEXUS-ORGANIZATION-GOVERNANCE-IMPLEMENTATION-GO` — migration `governance_role`, garde-fou org-scoped, UI profil Premium 2027, audit, assignation Martin / Guillaume.
