# Paquet de transfert — TAGORA_HANDOFF_V1 : TAGORA Mail IA

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0010
SOURCE_DECISION=DEC-022
SOURCE_VALIDATION=VALD-101
GRAPH_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
MAIL_SEND_AUTHORIZED=NO
MAIL_READWRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Mail IA. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Mail IA
DECISION_TOS: Mail implémentera MAIL_HANDOFF_ADAPTER. APP_AUTH != GRAPH_AUTH. mailbox_id reste référence métier locale.
MAIL_HANDOFF_ADAPTER=CONCEPTUAL
MODULE_KEY=mail
MAIL_ROLE_NAMESPACE=mail:*
APP_AUTH != GRAPH_AUTH
GRAPH_MAILBOX_IDENTITY != ENTRA_EXTERNAL_ID_IDENTITY
MODULE_LOCAL_USER=profiles.id
LOCAL_TENANT=organizations.id
LOCAL_MAILBOX=mailboxes.id
EMAIL_IS_CANONICAL_IDENTITY=NO

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître TAGORA_HANDOFF_V1 ;
- préparer MAIL_HANDOFF_ADAPTER (TAGORA_USER_ID -> profiles.id + org + company + mailbox métier) ;
- ne jamais mapper Graph provider_object_id vers Entra subject ;
- aucun token Graph / Mail.Send / Mail.ReadWrite dans le handoff ;
- rôles mail:* locaux seulement ;
- session app Mail != session Graph ;
- fail-closed si mapping ambigu / email-only join / mailbox partagée ambiguë ;
- entrée directe mail.tagora.ca sans second mot de passe FINAL ;
- retour Nexus ;
- aucun OAuth Graph modifié dans ce paquet.

ACCEPTANCE_CRITERIA:
  MAIL_ADAPTER_ACKNOWLEDGED=YES
  APP_AUTH_GRAPH_AUTH_SEPARATED=YES
  MAIL_SEND=NO
  HANDOFF_REAL=NO
  IMPLEMENTATION_AUTHORIZED=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun Graph, OAuth, Mail.Send, Mail.ReadWrite, DB write, Entra, secret, utilisateur réel, handoff réel.

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Synthèse : [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- Paquet identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md](PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_MAIL_IA.md](PAQUET_TRANSFERT_MAPPING_MAIL_IA.md)
