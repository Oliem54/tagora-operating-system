# Paquet de transfert — Mapping accès : TAGORA Stock Premium

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
DB_AUTHORIZED=NO
SUPABASE_AUTHORIZED=NO
VERCEL_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Stock Premium. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Stock Premium
DECISION_TOS: stock.tagora.ca est le SaaS Stock Premium. Lancement authentifié orchestré par Nexus.
STOCK_APP=https://stock.tagora.ca
STOCK_PORTAL_ROUTE=https://app.tagora.ca/modules/stock
PILOT_CANDIDATE_I5=EVALUATE (recommandé à évaluer, non autorisé ici)

REQUIRED_CHANGE (mission future READ-ONLY d'abord) :
- confirmer stock.tagora.ca;
- inventorier auth actuelle;
- tenant/dealer mapping;
- compatibilité handoff Nexus;
- retour Nexus;
- aucune DB/Supabase write.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucun Supabase write, aucun Vercel, aucune Production, aucun DNS, aucun SSO réel.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_STOCK_PREMIUM.md](PAQUET_TRANSFERT_SURFACES_STOCK_PREMIUM.md)
