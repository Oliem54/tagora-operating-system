# Paquet de transfert — Mapping accès : TAGORA Mail IA

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
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
DECISION_TOS: mail.tagora.ca est le SaaS Mail IA. Lancement authentifié orchestré par Nexus.
MAIL_APP=https://mail.tagora.ca
MAIL_PORTAL_ROUTE=https://app.tagora.ca/modules/mail

REQUIRED_CHANGE (mission future READ-ONLY d'abord) :
- confirmer mail.tagora.ca;
- inventorier Auth / Graph séparément;
- aucun Mail.Send;
- aucun OAuth Graph modifié;
- compatibilité compte TAGORA central;
- tenant/mailbox mapping;
- retour Nexus.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun DNS, deploy, Graph, OAuth, boîte réelle, Mail.Send, Mail.ReadWrite, secret.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_MAIL_IA.md](PAQUET_TRANSFERT_SURFACES_MAIL_IA.md)
- Identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md](PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md)
