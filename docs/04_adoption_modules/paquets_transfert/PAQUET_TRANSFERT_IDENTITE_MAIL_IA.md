# Paquet de transfert — Identité / bootstrap : TAGORA Mail IA

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0009
SOURCE_DECISION=DEC-021
SOURCE_VALIDATION=VALD-100
GRAPH_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
MAIL_SEND_AUTHORIZED=NO
DB_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Mail IA. TOS n'implémente rien.

**Prochain transfert recommandé par VALD-100 :** analyse READ-ONLY Mail IA (IDENTITY-I1).

---

```text
PROJECT_TARGET: TAGORA Mail IA
DECISION_TOS: Mail IA conserve ses rôles mail:* et ses IDs locaux. L'identité centrale sera TAGORA_USER_ID + Entra issuer/subject.
EMAIL_IS_CANONICAL_IDENTITY=NO
MAIL_ROLE_NAMESPACE=mail:*

REQUIRED_CHANGE (IDENTITY-I1 READ-ONLY d'abord) :
- inventorier Auth Mail actuelle (séparée de Graph);
- inventorier IDs locaux user / mailbox / tenant;
- évaluer corrélation email (signal seulement, pas identité);
- compatibilité TAGORA_IDENTITY_LINK;
- retour Nexus;
- aucun Mail.Send;
- aucun OAuth Graph modifié.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun Graph, OAuth, Mail.Send, Mail.ReadWrite, DB write, Entra, secret, utilisateur réel.

## Références

- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [ADR-0009](../../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_MAIL_IA.md](PAQUET_TRANSFERT_MAPPING_MAIL_IA.md)
