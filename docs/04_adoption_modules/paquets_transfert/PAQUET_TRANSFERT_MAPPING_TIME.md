# Paquet de transfert — Mapping accès : TAGORA Time

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
PHASE4D_LOT2_UNCHANGED=YES
TIME_WRITE_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Time. TOS n'ouvre pas Time.

---

```text
PROJECT_TARGET: TAGORA Time
DECISION_TOS: time.tagora.ca est l'application SaaS Time. Lancement authentifié orchestré par Nexus.
TIME_APP=https://time.tagora.ca
TIME_PORTAL_ROUTE=https://app.tagora.ca/modules/time

REQUIRED_CHANGE (mission future READ-ONLY d'abord) :
- confirmer time.tagora.ca;
- inventorier auth actuelle;
- inventorier /login actuel;
- tenant mapping;
- compatibilité handoff;
- comportement accès direct (pas de second mot de passe TAGORA à terme);
- retour Nexus;
- ne pas mélanger avec Phase 4D Lot 2.

PHASE4D_LOT2_UNCHANGED=YES
Aucune modification Time dans ce paquet.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune écriture Time. Aucun DNS, SSO, Entra, handoff réel, mélange avec VALD-094.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_TIME.md](PAQUET_TRANSFERT_SURFACES_TIME.md)
- Identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_TIME.md](PAQUET_TRANSFERT_IDENTITE_TIME.md)
