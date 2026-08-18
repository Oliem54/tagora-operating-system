# Paquet de transfert — Identité visuelle des modules sur TAGORA Website

```text
PROJECT_TARGET=TAGORA Website
TECHNICAL_REPOSITORY=C:\Dev\TAGORA\tagora-website
SOURCE_DECISION=DEC-029
SOURCE_ADR=ADR-0017
SOURCE_VALIDATION=VALD-108
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
```

## Objectif futur

Présenter les six modules avec une structure commerciale commune et leur accent propre, puis présenter Nexus séparément comme portail client central.

## Règles

- même grille, même hiérarchie, même espace et même poids visuel pour les six modules ;
- logo normal sur tuile sombre, logo `light` sur tuile claire ;
- les PNG sont opaques : ne pas les traiter comme des wordmarks transparents ;
- éviter le doublon visuel entre lockup et titre ; conserver le nom canonique dans l'accessibilité et les métadonnées ;
- YORVA et ETIOQ : `BIENTÔT` en français, `COMING SOON` en anglais ;
- Nexus hors de la grille commerciale ;
- format commercial DEC-028 : problème, action, résultat, risque, statut, CTA ;
- aucune promesse non mesurée.

## Thèmes

| Module | Accent |
|---|---:|
| HORORA | `#1F79E0` |
| PULS | `#55C558` |
| DEPORA | `#00C1D5` |
| MESSOR | `#DBDF5C` |
| YORVA | `#BAC300` |
| ETIOQ | `#F2F890` |

## Inspection requise avant toute future modification

Le repository Website peut déjà contenir un pilote local non commité. Le futur agent doit confirmer Git et arrêter si l'état observé ne correspond pas au pilote déclaré. Il ne doit ni écraser ni recommencer les changements existants.

## Validation future

- captures FR accueil et modules ;
- desktop et mobile ;
- six modules complets et Nexus séparé ;
- contraste, clavier et focus ;
- routes actuelles conservées ;
- tests, typecheck et build ;
- aucun badge de diagnostic visible dans la capture finale.

## Interdictions

```text
ROUTE_CHANGE_AUTHORIZED=NO
FONT_INSTALLATION_AUTHORIZED=NO
COMMIT_AUTHORIZED=NO
PUSH_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Références

- [Standard visuel](../../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [Registre des thèmes](../../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [Format commercial](../../02_standards/STANDARD_FORMAT_COMMERCIAL_MODULES_TAGORA.md)

STOP.
