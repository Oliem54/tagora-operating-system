# Paquet de transfert — Identité / bootstrap : TAGORA Pulse AI

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0009
SOURCE_DECISION=DEC-021
SOURCE_VALIDATION=VALD-100
DB_AUTHORIZED=NO
RAILWAY_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Pulse AI. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Pulse AI
DECISION_TOS: Pulse conserve ses rôles pulse:* et son modèle org/project/user. Pas d'accès automatique via le compte TAGORA central.
PULSE_ROLE_NAMESPACE=pulse:*
EMAIL_IS_CANONICAL_IDENTITY=NO

REQUIRED_CHANGE (IDENTITY-I3 READ-ONLY d'abord) :
- inventorier auth actuelle;
- inventorier org/project/user mapping;
- compatibilité TAGORA_IDENTITY_LINK;
- ne pas égaler time:direction à un rôle Pulse;
- retour Nexus;
- aucune DB/Railway write.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucune migration, aucun Railway, aucune Production, aucun Entra, aucun SSO.

## Références

- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [ADR-0009](../../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_PULSE_AI.md](PAQUET_TRANSFERT_MAPPING_PULSE_AI.md)
