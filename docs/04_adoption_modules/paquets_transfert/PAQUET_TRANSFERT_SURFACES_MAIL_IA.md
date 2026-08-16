# Paquet de transfert — Contrat de surfaces : TAGORA Mail IA

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0007
SOURCE_DECISION=DEC-019
SOURCE_VALIDATION=VALD-098
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
GRAPH_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
MAIL_SEND_AUTHORIZED=NO
MAIL_READWRITE_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Mail IA. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Mail IA
DECISION_TOS: mail.tagora.ca est la surface applicative SaaS autonome TAGORA Mail IA.
MAIL = MAIL AI APPLICATION
Website vend/explique Mail IA.
Nexus fournit le portail client central et peut pointer vers Mail IA.

REQUIRED_CHANGE:
acknowledgement + impact analysis seulement.

Pas de DNS.
Pas de deploy.
Pas de Graph/OAuth.
Pas de vraie boîte.
Pas de Mail.Send.
Pas de Mail.ReadWrite.

ACCEPTANCE_CRITERIA:
  MAIL_SUBDOMAIN_ACKNOWLEDGED=YES
  AUTONOMOUS_SAAS_PRESERVED=YES
  WEBSITE_COMMERCIAL_PAGE_RECOGNIZED=YES
  NEXUS_PORTAL_LINK_RECOGNIZED=YES
  NO_MAIL_GRAPH_CHANGE=YES

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun DNS, hébergement, deploy, Production, Graph, OAuth, boîte réelle, Mail.Send, Mail.ReadWrite.

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
