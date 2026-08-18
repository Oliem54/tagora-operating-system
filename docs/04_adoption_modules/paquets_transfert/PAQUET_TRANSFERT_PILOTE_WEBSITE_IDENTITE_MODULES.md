# Paquet de transfert — Pilote Website local de l'identité des modules

```text
PROJECT_TARGET=TAGORA Website
SOURCE_DECISION=DEC-027
SOURCE_ADR=ADR-0015
SOURCE_VALIDATION=VALD-106
SOURCE_VISUAL_DECISION=DEC-029
SOURCE_VISUAL_ADR=ADR-0017
SOURCE_VISUAL_VALIDATION=VALD-108
SOURCE_NOMENCLATURE_DECISION=DEC-026
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
PUBLICATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
```

## Objet du paquet

Préparer un pilote Website local permettant de vérifier les logos, la nomenclature, les contrastes et la séparation de Nexus avant toute intégration réelle.

Ce paquet est prêt pour transfert par Martin, mais son existence ne constitue pas le GO d'exécution Website.

Le paquet visuel Website plus récent [PAQUET_TRANSFERT_IDENTITE_VISUELLE_WEBSITE.md](PAQUET_TRANSFERT_IDENTITE_VISUELLE_WEBSITE.md) complète cette préparation avec les tokens, le standard 80/20 et WCAG 2.2 AA.

> **Exigence commerciale DEC-028 / ADR-0016 / VALD-107 :** une future passe de contenu devra appliquer le format `problème → action → résultat → réduction du risque → statut → CTA`. Cette passe n'est pas autorisée par le présent paquet et exige un gate Website distinct.

## Actifs déclarés reçus

### Marque centrale TAGORA

- archive de logos centraux ;
- PNG et SVG ;
- variantes horizontales et verticales ;
- variantes sombre, claire, verte et noir/blanc ;
- icônes et zone d'exclusion.

### Identités des produits

- 14 PNG opaques de 1080 × 1080 pixels ;
- une version normale et une version `light` pour HORORA, PULS, DEPORA, MESSOR, YORVA, ETIOQ et NEXUS ;
- deux fichiers sources PSD ;
- un guide PDF d'une page ;
- aucun SVG produit déclaré dans l'archive inspectée.

### Typographie

- JHC Notion ;
- Avenir Next ;
- fichiers OTF et WOFF2 ;
- PDF de licence.

```text
FONT_WEB_LICENSE_VALIDATED=NO
PRODUCT_SVG_AVAILABLE=NO
PNG_OPACITY=OPAQUE
NORMAL_VARIANT_BACKGROUND=#182643
LIGHT_VARIANT_BACKGROUND=#FFFFFF
LIGHT_DARK_MAPPING_VALIDATED=YES_BY_VALD_108
CONTRAST_TOKEN_MAPPING_VALIDATED=YES_BY_VALD_108
```

## Anomalies à corriger avant publication

1. Le guide PDF place NEXUS dans la même séquence visuelle que les six modules, ce qui peut faire croire à un septième module.
2. Le texte du PDF attribue à NEXUS une fonction de gestion documentaire et de sourcing. Ce positionnement est interdit : cette fonction appartient à YORVA, tandis que Nexus demeure le portail client central.
3. Les descriptions ETIOQ et YORVA doivent être formulées comme capacités futures.
4. Les noms de fichiers utilisent une casse technique hétérogène. Cette casse ne doit pas modifier les noms commerciaux affichés en majuscules.
5. Aucun export SVG produit n'est présent ; un export vectoriel officiel est recommandé avant la publication finale.

## Convention obligatoire

```text
CANONICAL_NAMES=
TAGORA HORORA
TAGORA PULS
TAGORA DEPORA
TAGORA MESSOR
TAGORA YORVA
TAGORA ETIOQ

NEXUS_POSITION=CENTRAL_CLIENT_PORTAL
NEXUS_IS_COMMERCIAL_MODULE=NO
YORVA_COMMERCIAL_STATUS=COMING_SOON
ETIOQ_COMMERCIAL_STATUS=COMING_SOON
```

`NOM par TAGORA` peut uniquement être testé comme signature graphique secondaire. Les textes, métadonnées, menus et attributs accessibles doivent conserver `TAGORA + NOM DU MODULE`.

## Séquence demandée au futur agent Website

Après un GO Martin Website distinct :

1. confirmer le dossier, la branche, le HEAD et l'état Git ;
2. fail-closed si le dépôt contient des changements non liés ;
3. inventorier les actifs sans les modifier ;
4. lire et confirmer la licence avant toute installation de police ;
5. vérifier opacité, dimensions et contraste des variantes ;
6. proposer un mapping fond clair / fond sombre ;
7. préparer un pilote local réversible ;
8. séparer Nexus de la grille des six modules ;
9. conserver toutes les routes actuelles ;
10. arrêter avant commit, push ou déploiement.

## Interdictions

- aucune publication ;
- aucun commit ni push sans gate distinct ;
- aucun déploiement staging ou Production ;
- aucune nouvelle route ou redirection ;
- aucun domaine ou DNS ;
- aucune installation de police sans validation de licence ;
- aucun remplacement massif du BrandMark ;
- aucune modification Nexus ou application ;
- aucune capacité YORVA ou ETIOQ annoncée comme disponible ;
- aucune intégration fonctionnelle avec DEPORA, caisse ou ERP.
- aucune réécriture commerciale complète sans gate Website distinct.

## Rapport futur attendu

```text
STATUS=PASS|HOLD|FAIL
ASSET_INVENTORY_COMPLETE=YES|NO
FONT_WEB_LICENSE_VALIDATED=YES|NO
NORMAL_VARIANTS_FOUND=YES|NO
LIGHT_VARIANTS_FOUND=YES|NO
TRANSPARENCY_VALIDATED=YES|NO
CONTRAST_VALIDATED=YES|NO
PRODUCT_PNG_OPAQUE=YES|NO
PRODUCT_SVG_MISSING=YES|NO
NEXUS_SEPARATED_FROM_MODULE_CATALOG=YES|NO
FUTURE_ONLY_COPY_VALIDATED=YES|NO
CURRENT_ROUTES_PRESERVED=YES|NO
FILES_MODIFIED=
COMMIT_CREATED=NO
PUSH_PERFORMED=NO
DEPLOYMENT_PERFORMED=NO
PRODUCTION_TOUCHED=NO
NEXT=Retourner le rapport à Martin
HUMAN_GATE=YES
STOP=YES
```

STOP.
