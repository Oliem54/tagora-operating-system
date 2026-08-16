# Paquet de transfert — Mapping accès : TAGORA Nexus

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
SSO_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Nexus. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Nexus
DECISION_TOS: app.tagora.ca est le portail client et l'access broker.
CENTRAL_LOGIN=https://app.tagora.ca/login
PORTAL_MODULE_CATALOG=https://app.tagora.ca/modules
NEXUS_ACCESS_BROKER=YES
TAGORA_HANDOFF_V1=TARGET_STANDARD

REQUIRED_CHANGE (mission future, pas ce gate) :
- réserver /modules;
- étudier /modules/{slug} (time, mail, stock, pulse);
- portail client;
- catalogue;
- entitlement fail-closed;
- access broker;
- TAGORA_HANDOFF_V1 (contrat technique ultérieur);
- identité commune cible (Entra External ID / OIDC+PKCE);
- aucun SSO réel sans Human Gate.

ACCEPTANCE_CRITERIA:
  PORTAL_ROLE_ACKNOWLEDGED=YES
  MODULE_ROUTES_RESERVED=YES
  ACCESS_BROKER_ROLE_ACKNOWLEDGED=YES
  AUTONOMOUS_APPS_PRESERVED=YES
  SSO_REAL=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun Entra, app registration, OAuth, secret, token, handoff réel, DNS, deploy, fusion d'applications.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_NEXUS.md](PAQUET_TRANSFERT_SURFACES_NEXUS.md)
- Identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_NEXUS.md](PAQUET_TRANSFERT_IDENTITE_NEXUS.md)
