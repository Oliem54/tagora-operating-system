# VALD-098 — Contrat d'emplacement des surfaces TAGORA

**Date :** 2026-08-16  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé  
**Type :** Humaine / Gouvernance

## Décision validée

Martin fixe officiellement le contrat d'emplacement des surfaces TAGORA. Cette décision est normative. Les agents produits ne la rediscutent pas.

```text
DOMAIN_CONTRACT_STATUS=OFFICIAL
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
WEBSITE_ENTRY=https://tagora.ca
NEXUS_POSITION=https://app.tagora.ca
TIME_POSITION=https://time.tagora.ca
MAIL_POSITION=https://mail.tagora.ca
STOCK_POSITION=https://stock.tagora.ca
PULSE_POSITION=https://pulse.tagora.ca
FUTURE_ADMIN_POSITION=https://admin.tagora.ca
STANDARD_LOGIN_ROUTE=/login
LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION
PHASE4D_LOT2_UNCHANGED=YES
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES
```

Website = discover / explain / sell.  
Nexus = authenticated customer portal.  
Time / Mail / Stock / Pulse = SaaS autonomes.  
Admin = futur.

TAGORA Time n'est plus l'entrée publique centrale TAGORA.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif dans TAGORA Operating System et la préparation des paquets de transfert.

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
HOSTING_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
REDIRECT_AUTHORIZED=NO
SSO_AUTHORIZED=NO
CONTENT_MIGRATION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

## Décisions liées

ADR-0004 / DEC-015 / VALD-093 restent **Validé** (domaines).  
DEC-016 / VALD-095 restent **Validé** (Track B) ; le rôle d'entrée publique Time est clos ici ; redirect / cleanup restent interdits.  
VALD-094 / Phase 4D Lot 2 restent **inchangés**.

## Référence

- [ADR-0007](../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../04_adoption_modules/plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-019
