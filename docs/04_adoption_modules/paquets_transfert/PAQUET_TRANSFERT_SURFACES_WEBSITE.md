# Paquet de transfert — Contrat de surfaces : TAGORA Website

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0007
SOURCE_DECISION=DEC-019
SOURCE_VALIDATION=VALD-098
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Website. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Website
DECISION_TOS: tagora.ca est l'entrée publique officielle TAGORA.
WEBSITE = DISCOVER / EXPLAIN / SELL

REQUIRED_CHANGE:
- Website devient surface publique centrale;
- pages modules FR/EN;
- pages commerciales Time/Mail/Stock/Pulse;
- CTA connexion orienté vers app.tagora.ca lorsque pertinent;
- CTA produits vers leurs sous-domaines lorsque pertinent;
- ne pas héberger l'application métier des modules dans Website.

PAGES_COMMERCIALES:
FR:
  https://tagora.ca/fr/modules
  https://tagora.ca/fr/time
  https://tagora.ca/fr/mail
  https://tagora.ca/fr/stock
  https://tagora.ca/fr/pulse
EN:
  https://tagora.ca/en/modules
  https://tagora.ca/en/time
  https://tagora.ca/en/mail
  https://tagora.ca/en/stock
  https://tagora.ca/en/pulse

ACCEPTANCE_CRITERIA:
  WEBSITE_PUBLIC_ENTRY=YES
  COMMERCIAL_MODULE_PAGES_PLANNED=YES
  NEXUS_LOGIN_ENTRY_RECOGNIZED=YES
  SAAS_SUBDOMAINS_RECOGNIZED=YES

RISK: migration de contenu actuellement présent dans Time.
REBUILD_NOT_COPY=YES
MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun DNS, hébergement, deploy, Production, copie de code Time, Auth Time, DB Time.

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md)
