# VALD-105 — Nomenclature commerciale officielle et carte des six modules SaaS

**Date :** 2026-08-17

**Décideur :** Martin ST-Gelais — Direction

**Statut :** Validé

**Type :** Humaine / Gouvernance

**Gate :** `TOS_OFFICIAL_NOMENCLATURE_SIX_MONTHLY_SAAS_MODULES_GO`

## Décision validée

Martin officialise la nomenclature commerciale suivante :

```text
TAGORA_TIME_BECOMES=TAGORA HORORA
TAGORA_STOCK_PREMIUM_BECOMES=TAGORA DEPORA
TAGORA_SOURCING_AI_BECOMES=TAGORA YORVA
TAGORA_TAG_BECOMES=TAGORA ETIOQ
TAGORA_PULSE_AI_BECOMES=TAGORA PULS
TAGORA_MAIL_IA_BECOMES=TAGORA MESSOR
COMMERCIAL_SAAS_MODULE_COUNT=6
MONTHLY_RESALE_MODEL=YES
NEXUS_IS_COMMERCIAL_MODULE=NO
MODULE_NAME_TYPOGRAPHIC_PARITY_REQUIRED=YES
MODULE_NAME_CASE=UPPERCASE
```

Carte validée : HORORA, PULS, DEPORA, MESSOR, YORVA et ETIOQ.

Les six noms doivent respecter une parité typographique stricte lorsqu'ils sont présentés ensemble : même taille, même poids, même hauteur de ligne, même espacement et même hiérarchie visuelle. Aucun ajustement de taille fondé sur la longueur du nom n'est autorisé.

YORVA et ETIOQ sont `COMING_SOON`, leurs domaines applicatifs sont `TBD`, leurs capacités sont planifiées seulement et aucune disponibilité opérationnelle ne peut être annoncée.

## Portée de la validation

Cette validation autorise uniquement :

- DEC-026 ;
- ADR-0014 ;
- la documentation centrale de nomenclature ;
- les paquets distincts Website, Nexus, HORORA, PULS, DEPORA, MESSOR, YORVA et ETIOQ ;
- les mises à jour de registres et références internes TOS.

```text
TOS_SCOPE_ONLY=YES
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
REPOSITORY_RENAME_AUTHORIZED=NO
PACKAGE_RENAME_AUTHORIZED=NO
ROUTE_RENAME_AUTHORIZED=NO
DOMAIN_RENAME_AUTHORIZED=NO
DB_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
PACKETS_EXECUTED=NO
PACKET_COUNT=8
MARTIN_TRANSFER_REQUIRED=YES
HUMAN_GATE=YES
```

## Réconciliation historique

DEC-024 / ADR-0012 / VALD-103 conservent la fondation métier de Sourcing AI, désormais portée commercialement par YORVA.

DEC-025 / ADR-0013 / VALD-104 conservent l'historique Coming Soon, domaine TBD et communication future. La présente validation remplace le nom commercial `TAGORA Sourcing AI` par `TAGORA YORVA`, ajoute `TAGORA ETIOQ` et remplace le compte de cinq modules par six.

DEC-019 à DEC-023 restent compatibles et inchangées dans leur portée technique.

## Références

- [ADR-0014](../05_adr/ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md)
- [NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md](../04_adoption_modules/NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-026
