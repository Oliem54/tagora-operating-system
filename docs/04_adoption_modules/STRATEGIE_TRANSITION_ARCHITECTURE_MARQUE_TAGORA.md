# Stratégie de transition de l'architecture de marque TAGORA

```text
STATUS=VALIDATED
DATE=2026-08-17
DECISION=DEC-027
ADR=ADR-0015
VALIDATION=VALD-106
TOS_SCOPE_ONLY=YES
EXECUTION_AUTHORIZED=NO
```

## Résultat

La transition doit être progressive, réversible et séparée des changements fonctionnels.

La convention canonique demeure :

1. TAGORA HORORA
2. TAGORA PULS
3. TAGORA DEPORA
4. TAGORA MESSOR
5. TAGORA YORVA — `COMING_SOON`
6. TAGORA ETIOQ — `COMING_SOON`

`NOM par TAGORA` est une signature graphique secondaire possible, jamais le remplacement du nom officiel.

## Exigence commerciale des surfaces principales

DEC-028 / ADR-0016 / VALD-107 imposent un format court et uniforme :

```text
PROBLÈME → ACTION → RÉSULTAT → RÉDUCTION DU RISQUE → STATUT → CTA
```

Les cartes doivent être directes, entrepreneuriales et compréhensibles sans connaissance technique. Le jargon, les explications de gouvernance, les longues phrases et les promesses non mesurées sont exclus des surfaces principales.

La distinction entre capacité actuelle, capacité confirmée, accès pilote et capacité future doit être visible par le statut, le temps verbal et le CTA. `COMING_SOON` s'affiche `BIENTÔT` en français et `COMING SOON` en anglais.

Référence : [STANDARD_FORMAT_COMMERCIAL_MODULES_TAGORA.md](../02_standards/STANDARD_FORMAT_COMMERCIAL_MODULES_TAGORA.md).

## Système visuel commun

DEC-029 / ADR-0017 / VALD-108 ajoutent le principe `80 % structure commune / 20 % identité produit` :

- gabarit, composants, navigation, espacements, états et accessibilité communs ;
- logo et accent propres à chaque produit ;
- couleurs succès, avertissement, danger et information identiques partout ;
- DEPORA comme premier pilote sur `/admin/stock/comptes` ;
- aucune implémentation autorisée par la documentation TOS.

Références : [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md), [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md), [PLAN_MIGRATION_IDENTITE_VISUELLE_MODULES_TAGORA.md](PLAN_MIGRATION_IDENTITE_VISUELLE_MODULES_TAGORA.md).

## Parcours de transition

### Phase 1 — Actifs et licences

- inventorier les logos centraux et produits ;
- contrôler la licence Web des polices ;
- confirmer les versions normale et claire ;
- tester la lisibilité et le contraste ;
- demander les exports SVG officiels manquants ;
- définir un symbole autonome pour favicon et icônes.

État 2026-08-18 : les PNG produits sont opaques ; normal = fond intégré `#182643`, `light` = fond blanc ; mapping et tokens validés par VALD-108. Les SVG produits et symboles autonomes restent manquants.

### Phase 2 — Pilote Website local

- ne toucher qu'au repository Website après transfert Martin ;
- tester la grille des six modules ;
- séparer visuellement Nexus du catalogue commercial ;
- présenter YORVA et ETIOQ au futur uniquement ;
- tester les fonds clairs et sombres ;
- conserver les routes existantes ;
- ne déployer ni staging ni Production.

### Phase 3 — Validation humaine

- vérifier les noms, la casse et la parité typographique ;
- vérifier les contrastes, textes alternatifs et dimensions ;
- valider les descriptions métier ;
- enregistrer, pour chaque module, la date éventuelle de première publication et le début de la période « anciennement ».

### Phase 4 — Applications existantes

Les applications sont traitées une à une avec leurs propres gates. DEPORA / Stock Premium demeure le pilote identité sélectionné par DEC-023. Les repositories, packages, routes techniques, DB et domaines restent inchangés.

### Phase 5 — Nexus

Nexus reçoit les noms et liens approuvés. Il demeure le portail client central, pas un module de gestion documentaire ou de sourcing.

### Phase 6 — Routes et domaines

Les routes et domaines sont des migrations distinctes. Elles exigent un inventaire SEO, Auth, callbacks, cookies, CORS, APIs, liens et rollback avant tout changement.

## Frontière DEPORA / ETIOQ

| Sujet | TAGORA DEPORA | TAGORA ETIOQ |
|---|---|---|
| Responsabilité | Stocks et inventaires | Affichage électronique en magasin |
| Données principales | Quantités, disponibilités, arrivages | Prix affichés, promotions, associations produit-étiquette |
| Appareils | Aucun parc d'étiquettes | État, connexion et supervision future des étiquettes |
| Système d'inventaire de référence | Oui, selon le périmètre DEPORA | Non |
| Statut | Module existant | `COMING_SOON` |

## Rollback minimal

- conserver les anciens actifs jusqu'à validation finale ;
- isoler logos, typographie, routes et domaines dans des blocs distincts ;
- conserver les routes et domaines historiques pendant la transition ;
- documenter chaque redirection et sa restauration ;
- permettre le retour au déploiement précédent ;
- ne jamais combiner changement de marque, fonctionnalité et infrastructure dans une même livraison.

## Interdictions

```text
OTHER_REPOSITORY_TOUCHED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
ROUTE_CHANGE_AUTHORIZED=NO
DOMAIN_CHANGE_AUTHORIZED=NO
DNS_CHANGE_AUTHORIZED=NO
DB_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```
