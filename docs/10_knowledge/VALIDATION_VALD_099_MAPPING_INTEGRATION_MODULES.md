# VALD-099 — Mapping et intégration des modules TAGORA

**Date :** 2026-08-16  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé  
**Type :** Humaine / Gouvernance

## Décision validée

Martin formalise le contrat de mappage des surfaces, modules, adresses et parcours d'accès. Cette décision complète DEC-019.

```text
MODULE_MAPPING_CONTRACT_STATUS=OFFICIAL
ONE_TAGORA_UNIVERSE=YES
ONE_PRIMARY_LOGIN=YES
ONE_CUSTOMER_PORTAL=YES
AUTONOMOUS_SAAS_MODULES=YES
PUBLIC_WEBSITE=https://tagora.ca
CENTRAL_PORTAL=https://app.tagora.ca
CENTRAL_LOGIN=https://app.tagora.ca/login
PORTAL_MODULE_CATALOG=https://app.tagora.ca/modules
WEBSITE_AUTHENTICATED_LAUNCH_OWNER=NEXUS
NEXUS_ACCESS_BROKER=YES
IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID
AUTH_PROTOCOL_TARGET=OIDC + PKCE S256
TAGORA_HANDOFF_V1=TARGET_STANDARD
SHARED_PASSWORD_DATABASE_BETWEEN_APPS=NO
GLOBAL_SHARED_COOKIE=NO
PHASE4D_LOT2_UNCHANGED=YES
```

CTA Website : « Se connecter » → `app.tagora.ca/login` ; « Mon espace TAGORA » → `app.tagora.ca` ; découvrir un module → page commerciale Website.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif TOS et la préparation des paquets de transfert.

```text
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
MARTIN_TRANSFER_REQUIRED=YES
```

## Décisions liées

ADR-0007 / DEC-019 / VALD-098 restent **Validé**.  
VALD-094 / Phase 4D Lot 2 restent **inchangés**.

## Référence

- [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-020
