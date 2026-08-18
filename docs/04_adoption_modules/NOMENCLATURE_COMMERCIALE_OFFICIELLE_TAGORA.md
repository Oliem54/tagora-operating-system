# Nomenclature commerciale officielle TAGORA — six modules SaaS

```text
GATE=TOS_OFFICIAL_NOMENCLATURE_SIX_MONTHLY_SAAS_MODULES_GO
MODE=DOCUMENTATION_ONLY
DATE=2026-08-17
DECIDEUR=Martin ST-Gelais — Direction
DECISION=DEC-026
ADR=ADR-0014
VALIDATION=VALD-105
TOS_SCOPE_ONLY=YES
PACKETS_EXECUTED=NO
PACKET_COUNT=8
```

> **Politique de transition — DEC-027 / ADR-0015 / VALD-106 :** la convention canonique demeure `TAGORA + NOM DU MODULE`. `NOM par TAGORA` est réservé à une signature graphique secondaire. La mention « anciennement » est limitée à six mois après une date de première publication enregistrée. Les routes et domaines suivent une stratégie progressive option C, sans changement autorisé par la documentation TOS.

## Carte commerciale officielle

| N° | Nom officiel | Correspondance | Statut commercial |
|---|---|---|---|
| 1 | TAGORA HORORA | Ancien nom commercial : TAGORA Time | Existant ; transition non exécutée |
| 2 | TAGORA PULS | Ancien nom : TAGORA Pulse AI | Existant ; transition non exécutée |
| 3 | TAGORA DEPORA | Anciens noms : TAGORA Stock Premium / Stock Inventaire | Existant ; transition non exécutée |
| 4 | TAGORA MESSOR | Ancien nom : TAGORA Mail IA | Existant ; transition non exécutée |
| 5 | TAGORA YORVA | Ancien nom commercial : TAGORA Sourcing AI | `COMING_SOON` |
| 6 | TAGORA ETIOQ | Nom de travail antérieur : TAGORA TAG | `COMING_SOON` |

Tous les modules sont destinés à être commercialisables séparément par abonnement mensuel.

TAGORA Nexus demeure le portail client central donnant accès aux modules souscrits. Nexus n'est pas un septième module mensuel.

## Uniformité typographique

Les six noms officiels doivent être affichés avec la même taille de caractère, le même poids, la même hauteur de ligne, le même espacement et la même hiérarchie visuelle lorsqu'ils apparaissent ensemble.

```text
TYPOGRAPHIC_PARITY_REQUIRED=YES
EQUAL_FONT_SIZE_REQUIRED=YES
EQUAL_FONT_WEIGHT_REQUIRED=YES
EQUAL_LINE_HEIGHT_REQUIRED=YES
EQUAL_VISUAL_HIERARCHY_REQUIRED=YES
MODULE_NAME_CASE=UPPERCASE
LENGTH_BASED_SCALING_ALLOWED=NO
```

La longueur d'un nom ne justifie jamais une taille différente. Le traitement du préfixe `TAGORA` doit aussi être identique sur les six modules.

Référence normative : [CONTRAT_PARITE_TYPOGRAPHIQUE_NOMS_MODULES.md](../09_design_system/CONTRAT_PARITE_TYPOGRAPHIQUE_NOMS_MODULES.md).

## Règle de transition

La nomenclature est officielle dans TOS, mais son application dans un produit n'est pas automatique.

```text
COMMERCIAL_NAMES_OFFICIAL_IN_TOS=YES
PRODUCT_APPLICATION_AUTHORIZED=NO
TECHNICAL_IDENTIFIERS_UNCHANGED=YES
REPOSITORY_NAMES_UNCHANGED=YES
DOMAINS_UNCHANGED=YES
```

Dans les documents de transition, utiliser : `TAGORA HORORA (anciennement TAGORA Time)`, `TAGORA PULS (anciennement TAGORA Pulse AI)`, `TAGORA DEPORA (anciennement TAGORA Stock Premium)`, `TAGORA MESSOR (anciennement TAGORA Mail IA)` et `TAGORA YORVA (anciennement TAGORA Sourcing AI)` lorsque la compréhension technique l'exige.

## YORVA

YORVA conserve le métier défini par la fondation Sourcing AI : répertorier les documents reçus, les cataloguer proprement, les analyser et soutenir le processus de sourcing. Le module est prévu pour aider à qualifier les fournisseurs, comparer les produits, prix et conditions, préparer les demandes de soumissions et gérer le suivi du sourcing.

```text
COMMERCIAL_STATUS=COMING_SOON
APPLICATION_DOMAIN=TBD
NEXUS_ROUTE=TBD
WEBSITE_FR_ROUTE_PROPOSED=/fr/sourcing
WEBSITE_EN_ROUTE_PROPOSED=/en/sourcing
PLANNED_CAPABILITIES_ONLY=YES
```

## ETIOQ

ETIOQ est le module SaaS futur prévu pour centraliser, synchroniser et superviser les étiquettes électroniques dans les commerces : informations affichées, prix, promotions, association produit-étiquette et état du parc.

```text
COMMERCIAL_STATUS=COMING_SOON
APPLICATION_DOMAIN=TBD
NEXUS_ROUTE=TBD
WEBSITE_ROUTE=TBD
PLANNED_CAPABILITIES_ONLY=YES
```

## Communication

YORVA et ETIOQ ne doivent jamais être présentés comme disponibles, opérationnels, automatisés, intégrés à Nexus, connectés à des fournisseurs ou déployés.

Formulations autorisées : `prévu pour`, `conçu pour`, `vise à`, `Coming Soon`, `découvrir la vision`, `être informé du lancement`.

## Paquets préparés

- [Website](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_WEBSITE.md)
- [Nexus](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_NEXUS.md)
- [HORORA](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_HORORA.md)
- [PULS](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_PULS.md)
- [DEPORA](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_DEPORA.md)
- [MESSOR](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_MESSOR.md)
- [YORVA](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_YORVA.md)
- [ETIOQ](paquets_transfert/PAQUET_TRANSFERT_NOMENCLATURE_ETIOQ.md)
- [Pilote Website — identité des modules](paquets_transfert/PAQUET_TRANSFERT_PILOTE_WEBSITE_IDENTITE_MODULES.md) — préparé par DEC-027, exécution non autorisée

Ces paquets sont préparés, non exécutés, et doivent être transférés par Martin.
