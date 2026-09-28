# VALD-113 — Préparation d'implémentation du runtime 24/7 EXPANORA

**Date :** 2026-09-23

**Décideur :** Martin ST-Gelais — Direction

**Statut :** Validé

**Type :** Humaine / Gouvernance

**Gate :** `EXPANORA-24X7-RUNTIME-IMPLEMENTATION-PREPARATION-VALIDATION`

## Décision validée

```text
STATUS=EXPANORA_IMPLEMENTATION_PREPARATION_V1_VALIDATED
OD_PREP_01=APPROVED_AS_PLANNING_ESTIMATE
MONTHLY_TOTAL_ESTIMATE=72.60 USD
COST_IS_A_QUOTE=NO
OD_PREP_02=APPROVED
GCP_STAGING_PROJECT=tagora-expanora-staging
GCP_PRODUCTION_PROJECT=tagora-expanora-production
OD_PREP_03=APPROVED_FOR_V1_WITH_ABSTRACTION
QUEUE_PROVIDER_CONTRACT=REQUIRED
CORE_DEPENDS_ON_SUPABASE_QUEUE_API=NO
OD_PREP_04=TO_BE_MEASURED_IN_STAGING
PRODUCTION_AUTHORIZED=NO
REPO_CREATED=NO
NEXT_GATE=EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO
NEXT_GATE_AUTHORIZED=NO
```

72,60 USD/mois est un ordre de grandeur pour deux workers de 1 vCPU, 1 Gio et 1 instance permanente. Les coûts réels sont mesurés avant création de Production. Logs, egress et trafics se mesurent en Staging.

## Autorisations

Cette validation fige la préparation. Elle ne crée ni dépôt, ni cloud, ni base, ni secret.

```text
CODE_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
GOOGLE_CLOUD_PROJECT_AUTHORIZED=NO
BILLING_ACTIVATION_AUTHORIZED=NO
DATABASE_AUTHORIZED=NO
SECRET_AUTHORIZED=NO
EXTERNAL_INTEGRATION_AUTHORIZED=NO
NEXUS_CHANGE_AUTHORIZED=NO
OTHER_MODULE_CHANGE_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Prochain gate

`EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO` — non autorisé par cette fiche. Lorsqu'il sera émis, il pourra couvrir seulement le dépôt local.
