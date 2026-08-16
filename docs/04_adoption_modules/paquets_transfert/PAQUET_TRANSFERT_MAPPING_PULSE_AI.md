# Paquet de transfert — Mapping accès : TAGORA Pulse AI

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
DB_AUTHORIZED=NO
RAILWAY_AUTHORIZED=NO
MIGRATION_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Pulse AI. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Pulse AI
DECISION_TOS: pulse.tagora.ca est le SaaS Pulse AI. Lancement authentifié orchestré par Nexus.
PULSE_APP=https://pulse.tagora.ca
PULSE_PORTAL_ROUTE=https://app.tagora.ca/modules/pulse

REQUIRED_CHANGE (mission future READ-ONLY d'abord) :
- confirmer pulse.tagora.ca;
- inventorier auth actuelle;
- org/project/user mapping;
- compatibilité Nexus;
- retour Nexus;
- aucune DB/Railway write.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucune migration, aucun Railway, aucune Production, aucun DNS, aucun SSO réel.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_PULSE_AI.md](PAQUET_TRANSFERT_SURFACES_PULSE_AI.md)
- Identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md](PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md)
- Widget X-Plod (preflight READ-ONLY, distinct du mapping Nexus → Pulse) : [PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md)
