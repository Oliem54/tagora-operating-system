# Paquet de transfert — Contrat de surfaces : TAGORA Nexus

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0007
SOURCE_DECISION=DEC-019
SOURCE_VALIDATION=VALD-098
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES
DNS_AUTHORIZED=NO
SSO_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Nexus. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Nexus
DECISION_TOS: app.tagora.ca est le portail client authentifié central TAGORA.
NEXUS = AUTHENTICATED CUSTOMER PORTAL

REQUIRED_CHANGE:
Nexus doit analyser, sans implémentation dans ce paquet :
- positionnement comme portail client;
- navigation vers modules;
- tenant/org context;
- liens vers Time/Mail/Stock/Pulse;
- stratégie future SSO / sessions;
- retour vers Website;
- rôle éventuel de /login;
- conséquences abonnement SaaS;
- aucune fusion obligatoire des applications.

IMPORTANT:
Nexus doit être CONSULTÉ sur les impacts techniques.
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES

ACCEPTANCE_CRITERIA:
  NEXUS_PORTAL_ROLE_ACKNOWLEDGED=YES
  APP_TAGORA_CA_ACKNOWLEDGED=YES
  AUTONOMOUS_APPS_PRESERVED=YES
  CROSS_APP_NAVIGATION_IMPACT_REVIEWED=YES

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun DNS, hébergement, deploy, Production, SSO réel, fédération de login, fusion d'applications.

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [ADR-0003](../../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
