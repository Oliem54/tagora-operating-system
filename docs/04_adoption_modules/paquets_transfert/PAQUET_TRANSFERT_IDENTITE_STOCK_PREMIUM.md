# Paquet de transfert — Identité / bootstrap : TAGORA Stock Premium

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0009
SOURCE_DECISION=DEC-021
SOURCE_VALIDATION=VALD-100
DB_AUTHORIZED=NO
SUPABASE_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Stock Premium. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Stock Premium
DECISION_TOS: Stock conserve ses rôles stock:* et son modèle tenant/dealer. Pas d'accès automatique via le compte TAGORA central.
STOCK_ROLE_NAMESPACE=stock:*
EMAIL_IS_CANONICAL_IDENTITY=NO

REQUIRED_CHANGE (IDENTITY-I2 READ-ONLY d'abord) :
- inventorier auth actuelle;
- inventorier tenant/dealer / user mapping;
- compatibilité TAGORA_IDENTITY_LINK;
- ne pas égaler time:admin à stock:admin;
- retour Nexus;
- aucune DB/Supabase write.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucun Supabase write, aucun Vercel, aucune Production, aucun Entra, aucun SSO.

## Références

- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [ADR-0009](../../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_STOCK_PREMIUM.md](PAQUET_TRANSFERT_MAPPING_STOCK_PREMIUM.md)
- Handoff (DEC-022) : [PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md](PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md)
