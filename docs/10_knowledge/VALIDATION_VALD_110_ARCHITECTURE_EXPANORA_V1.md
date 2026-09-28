# VALD-110 — Architecture V1 EXPANORA

**Date :** 2026-09-22

**Décideur :** Martin ST-Gelais — Direction

**Statut :** Validé

**Type :** Humaine / Gouvernance

**Gate :** `EXPANORA-ARCHITECTURE-V1-VALIDATION`

## Décision validée

```text
EXPANORA_ARCHITECTURE_V1_VALIDATED=YES
AUTONOMOUS_DISTINCT_MODULE=YES
CANONICAL_MODULE_KEY=tagora_expanora
NEXUS_TILE_RESERVED=YES
NEXUS_TILE_VISIBLE_NOW=NO
COMMERCIAL_PRICING=DECIDED_LATER
DIRECT_CROSS_MODULE_DATABASE_WRITE=FORBIDDEN
ACTION_REQUEST_COMMAND_CONTRACT=YES
AI_VENDOR_LOCKED_IN_CORE=NO
CHANNEL_INITIAL_MODE=READ_ONLY
ATTRIBUTION_V1=MULTI_VIEW
AUTHORITATIVE_FINANCIAL_SOURCE=CONNECTED_ACCOUNTING_SYSTEM
WORDPRESS_WRITE=DISABLED_BY_DEFAULT
SPECIALISTS_HIDDEN_BY_DEFAULT=YES
LOCAL_PROJECT_PATH=C:\dev\TAGORA\tagora-expanora
REPO_CREATED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

OD-EXP-01 à OD-EXP-11 sont tranchées dans l'architecture. Les suites de prix, route, domaine, fournisseur pilote, canal d'écriture, comptabilité, confirmation X-Plod, ligne de registre et complément ADR-0018 ne bloquent pas cette validation.

## Autorisations

Cette validation enregistre l'architecture TOS. Elle n'autorise aucun code.

```text
CODE_AUTHORIZED=NO
STAGING_CHANGE_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
OTHER_MODULE_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
```

## Livrables

- DEC-032 ;
- ADR-0020 ;
- [EXPANORA_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_ARCHITECTURE_V1.md).

## Prochain Human Gate

`EXPANORA-DEPLOYMENT-ARCHITECTURE` — route, domaine et inscription de la tuile réservée. Non autorisé.
