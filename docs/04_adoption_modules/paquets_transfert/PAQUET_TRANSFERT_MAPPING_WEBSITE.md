# Paquet de transfert — Mapping accès : TAGORA Website

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0008
SOURCE_DECISION=DEC-020
SOURCE_VALIDATION=VALD-099
IMPLEMENTATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Website. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Website
DECISION_TOS: Reconnaître le mapping officiel. Website = DISCOVER / EXPLAIN / SELL.
WEBSITE_AUTHENTICATED_LAUNCH_OWNER=NEXUS

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître le mapping;
- Se connecter -> https://app.tagora.ca/login;
- Mon espace TAGORA -> https://app.tagora.ca;
- Découvrir un module -> page commerciale Website correspondante;
- conserver pages commerciales FR/EN;
- ne jamais décider entitlement;
- ne pas activer runtime dans ce gate;
- ne pas porter le bootstrap d'identité (DEC-021) : conserver uniquement le login central Nexus.

ACCEPTANCE_CRITERIA:
  MAPPING_ACKNOWLEDGED=YES
  CONNECT_CTA_TARGET=https://app.tagora.ca/login
  MON_ESPACE_CTA_TARGET=https://app.tagora.ca
  ENTITLEMENT_DECISION_BY_WEBSITE=NO
  RUNTIME_IN_WEBSITE=NO
  IDENTITY_BOOTSTRAP_OUT_OF_SCOPE=YES

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun DNS, deploy, entitlement, Auth, runtime métier, OAuth, secret.

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [ADR-0008](../../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Paquet surfaces (DEC-019) : [PAQUET_TRANSFERT_SURFACES_WEBSITE.md](PAQUET_TRANSFERT_SURFACES_WEBSITE.md)
- Identité (DEC-021) : hors détail Website ; login central inchangé.
