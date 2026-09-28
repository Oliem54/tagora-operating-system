# DEC-031 — Couche de rôles de gouvernance d'organisation Nexus

```text
STATUS=VALIDATED
DATE=2026-09-06
DECISION_AUTHORITY=Martin ST-Gelais
SCOPE=TAGORA_NEXUS + TOS
GATE=TOS-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-PREMIUM-2027-GO
ORGANIZATION_GOVERNANCE_LAYER_APPROVED=YES
```

## Décision

TAGORA Nexus reçoit une couche distincte de **gouvernance d'organisation**, indépendante des rôles d'entrée Nexus, des principals admin Nexus, des rôles métier génériques et des rôles / permissions de modules.

Rôles canoniques :

- `organization_owner`
- `organization_admin`
- `organization_member`

Cible TAGORA Internal : Martin = `organization_owner` ; Guillaume = `organization_admin`. Aucun rôle métier module n'est assigné automatiquement.

Persistance retenue : colonne `governance_role` sur `nexus_memberships` + catalogue fermé. Table d'assignation 1:1 rejetée.

`nexus_admin_principals` reste une couche séparée. Cible Premium 2027 : permissions d'organisation scoped par organisation.

Ce gate documente seulement. L'implémentation Nexus exige un gate distinct.

## Références

- `docs/05_adr/ADR-0019-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md`
- `docs/governance/TAGORA-NEXUS-ORGANIZATION-GOVERNANCE-ROLES-V1.md`
- `docs/10_knowledge/VALIDATION_VALD_109_COUCHE_ROLES_GOUVERNANCE_ORGANISATION_NEXUS.md`
