# Standard d'identité visuelle cohérente des modules TAGORA

```text
STATUS=VALIDATED
DATE=2026-08-18
DECISION=DEC-029
ADR=ADR-0017
VALIDATION=VALD-108
TOS_SCOPE_ONLY=YES
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
```

## Objectif

Donner aux six modules SaaS et à TAGORA Nexus une apparence de famille immédiatement reconnaissable, tout en laissant chaque produit exprimer son métier par son logo, son accent et son contenu.

Le principe `80 % commun / 20 % propre au module` est une règle de conception, pas une mesure pixel par pixel.

## Identités couvertes

1. TAGORA HORORA
2. TAGORA PULS
3. TAGORA DEPORA
4. TAGORA MESSOR
5. TAGORA YORVA — `COMING_SOON`
6. TAGORA ETIOQ — `COMING_SOON`
7. TAGORA NEXUS — portail client central, hors catalogue des six modules

## Architecture visuelle 80 / 20

### Couche commune TAGORA — 80 %

- structure des pages et ordre de lecture ;
- header, navigation principale, navigation secondaire et repères de contexte ;
- titres, sous-titres, actions, cartes, formulaires, tableaux et filtres ;
- espacements, rayons, ombres, dimensions de contrôle et densité ;
- états vide, chargement, succès, avertissement, erreur et désactivation ;
- comportements clavier, focus, responsive et accessibilité ;
- langage d'interaction : une action principale, libellés courts, détails en second.

### Couche propre au produit — 20 %

- logo et symbole officiellement fournis ;
- accent principal et accent secondaire ;
- illustrations et graphiques ;
- contenu, indicateurs et navigation métier ;
- densité justifiée par le travail réel du rôle utilisateur.

Un module peut avoir des menus différents sans inventer un nouveau style de menu. Il peut avoir des indicateurs différents sans inventer une nouvelle anatomie de carte.

## Structure commune d'une page applicative

L'ordre de référence est :

1. **Identité et contexte** — marque du module, organisation active et accès à Nexus lorsqu'il est disponible.
2. **Navigation** — position courante, sections majeures et parcours adaptés au rôle.
3. **En-tête de page** — titre métier, contexte court, statut et action principale.
4. **Indicateurs prioritaires** — seulement les informations qui influencent la décision immédiate.
5. **Contenu principal** — liste, tableau, formulaire, calendrier, boîte de réception ou autre surface métier.
6. **Actions secondaires** — filtres, export, préférences et aide contextuelle.
7. **États système** — chargement, vide, erreur, succès et accès refusé.

### Gabarit de référence

```text
APP SHELL
├── header commun + identité du module
├── navigation principale adaptée au rôle
└── contenu
    ├── fil d'Ariane ou contexte
    ├── titre + statut + action principale
    ├── indicateurs prioritaires
    ├── contenu métier principal
    ├── actions et détails secondaires
    └── aide / état système
```

## Fondations communes

### Couleurs de structure

| Token | Valeur | Usage |
|---|---:|---|
| `--tagora-shell` | `#1B2641` | Shell, header ou navigation sombre |
| `--tagora-shell-deep` | `#081029` | Texte très foncé, fond profond |
| `--tagora-surface` | `#FFFFFF` | Surface fonctionnelle neutre |
| `--tagora-surface-soft` | `#F6F7ED` | Fond de page ou panneau doux |
| `--tagora-text` | `#081029` | Texte principal sur fond clair |
| `--tagora-text-inverse` | `#FFFFFF` | Texte sur fond sombre conforme |
| `--tagora-link` | `#1E488F` | Lien transversal hors thème produit |

`#182643` est la couleur de fond raster observée dans les PNG produits. Elle ne remplace pas `#1B2641` comme couleur centrale de structure. Les fichiers fournis ne doivent pas être recolorés.

### Couleurs sémantiques fonctionnelles

Ces couleurs sont réservées au sens système. Elles ne constituent pas de nouvelles couleurs de marque et ne changent jamais selon le module.

| État | Foreground | Background | Border |
|---|---:|---:|---:|
| Succès | `#067647` | `#ECFDF3` | `#ABEFC6` |
| Avertissement | `#B54708` | `#FFFAEB` | `#FEDF89` |
| Danger / erreur | `#B42318` | `#FEF3F2` | `#FECDCA` |
| Information | `#175CD3` | `#EFF8FF` | `#B2DDFF` |

Règles : libellé ou icône obligatoire ; jamais la couleur seule ; accent produit interdit pour signifier automatiquement succès ou erreur.

### Espacement

Échelle commune : `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64` px.

- gouttière mobile : 16 px ;
- gouttière desktop : 24 px minimum ;
- carte : 16 px mobile, 24 px desktop ;
- séparation de sections : 32 à 48 px ;
- largeur de contenu recommandée : 1440 px maximum, sauf table métier documentée.

### Rayons

| Token | Valeur | Usage |
|---|---:|---|
| `--radius-control` | `8px` | Champs, boutons, filtres |
| `--radius-card` | `12px` | Cartes et panneaux |
| `--radius-dialog` | `16px` | Modales, grands panneaux |
| `--radius-pill` | `9999px` | Badges courts seulement |

### Ombres

| Token | Valeur |
|---|---|
| `--shadow-sm` | `0 1px 2px rgb(8 16 41 / 0.08)` |
| `--shadow-md` | `0 8px 24px rgb(8 16 41 / 0.12)` |
| `--shadow-lg` | `0 20px 48px rgb(8 16 41 / 0.16)` |

Une bordure sobre est préférée à une ombre forte. `--shadow-lg` est réservé aux modales et surfaces temporaires.

## Composants communs

### Boutons

- hauteur cible principale : 44 px minimum ;
- un seul bouton dominant par zone ;
- primaire : token d'action accessible du module ;
- secondaire : surface neutre avec bordure ;
- destructif : couleur sémantique danger, jamais accent produit ;
- hover, focus, loading et disabled obligatoires ;
- icône seule seulement avec nom accessible et infobulle lorsque nécessaire.

### Cartes

- même anatomie : titre, contexte, valeur ou contenu, état, action ;
- bordure neutre ; accent produit limité à une ligne, une icône, un indicateur ou un état actif ;
- pas de carte entière saturée d'accent sans justification de contraste ;
- cartes comparables de même niveau avec padding et hauteur cohérents.

### Tableaux et listes

- hauteur de ligne cible : 48 px minimum ;
- en-tête distinct, tri et filtres explicites ;
- sélection et focus visibles ;
- actions de ligne secondaires ;
- adaptation mobile documentée : cartes, colonnes prioritaires ou défilement contrôlé.

### Formulaires

- label persistant ;
- aide et erreur reliées au champ ;
- état obligatoire explicite ;
- validation compréhensible ;
- ordre clavier logique ;
- action d'enregistrement visible sans multiplier les CTA.

### Navigation

- header recommandé : 64 px minimum ;
- sidebar desktop recommandée : 256 px ; variante réduite : 72 px ;
- actif signalé par libellé, forme et accent, pas uniquement par la couleur ;
- mêmes emplacements logiques pour identité, profil, aide et sortie ;
- menus métier différents autorisés ; anatomie et comportement communs obligatoires.

## Règles des accents produits

La couleur d'accent sert à reconnaître le module. Elle doit rester minoritaire : navigation active, action principale, lien important, focus, progression, accent de carte et graphique.

- la couleur source n'est pas automatiquement une couleur de bouton ;
- utiliser `module-action-bg` et `module-action-on` pour les boutons ;
- conserver les couleurs sémantiques globales pour les états ;
- sur fond clair, utiliser une variante assez foncée pour les liens et le focus ;
- sur fond sombre, utiliser l'accent avec un contour ou un offset inverse si nécessaire ;
- graphiques : ajouter libellés, motifs ou formes ; ne jamais dépendre uniquement de la couleur.

Les valeurs officielles sont dans [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md).

## Règles des logos produits

### Inventaire vérifié

- 14 PNG, deux par identité ;
- 1080 × 1080 px ;
- sRGB ;
- fichiers opaques, sans transparence exploitable ;
- version normale : fond intégré `#182643` ;
- version `light` : fond blanc intégré ;
- aucun SVG produit livré ;
- deux PSD présents comme sources designer, non destinés au runtime Web.

### Usage

- variante normale sur contexte sombre ou comme tuile sombre autonome ;
- variante `light` sur contexte clair ou comme tuile claire autonome ;
- afficher le canvas complet ; aucun crop pour simuler un symbole autonome ;
- aucune déformation, recoloration, reconstruction ou extraction depuis le PDF/PSD ;
- taille minimale du carré complet : 120 × 120 px ; recommandée : 144 à 192 px ;
- espace externe minimal : 25 % de la hauteur visible du symbole ;
- pour un header compact, demander un export officiel horizontal ou un symbole autonome ; ne pas miniaturiser le carré jusqu'à rendre le wordmark illisible.

### Nom et répétition

Le lockup `NOM par TAGORA` est une signature graphique secondaire. Le nom canonique demeure `TAGORA + NOM` dans le texte, les métadonnées et l'accessibilité.

Éviter d'afficher simultanément le lockup complet et un second grand titre identique. Si le lockup sert de titre visuel, fournir le nom canonique dans le DOM accessible, le titre de page et les métadonnées.

## Accessibilité

Objectif : WCAG 2.2 niveau AA.

- texte normal : contraste minimal 4,5:1 ;
- grand texte : 3:1 ;
- composants, bordures actives et focus : 3:1 ;
- focus visible : anneau 2 px minimum avec offset contrasté ;
- zone interactive : 44 × 44 px cible ;
- navigation clavier complète ;
- états non communiqués par couleur seule ;
- zoom et reflow jusqu'à 200 % sans perte de fonction ;
- mouvement non essentiel réductible ;
- logo : nom accessible canonique.

Le token `module-focus-ring` est optimisé pour les surfaces claires. Sur surface sombre, ajouter un offset blanc ou ivoire de 2 px.

## Responsive

- mobile : une colonne principale, actions secondaires regroupées ;
- tablette : deux colonnes seulement lorsque le contenu reste lisible ;
- desktop : grille métier flexible, sans étirer les lignes au-delà de la lisibilité ;
- tableaux larges : priorisation des colonnes ou défilement explicite ;
- aucune fonction critique réservée au hover.

## Typographie

La migration des logos et celle de la typographie restent séparées.

```text
AVENIR_NEXT_STATUS=APPROVED_FAMILY_NOT_AUTHORIZED_FOR_IMPLEMENTATION
JHC_NOTION_STATUS=APPROVED_FAMILY_NOT_AUTHORIZED_FOR_IMPLEMENTATION
FONT_WEB_LICENSE_VALIDATED=NO
TYPOGRAPHY_ROLE_MAPPING_VALIDATED=NO
OUTFIT_SYNE_STATUS=LEGACY_TEMPORARY_FALLBACK_ALLOWED
FONT_INSTALLATION_AUTHORIZED=NO
```

## Validation d'un écran

Un écran ne peut être déclaré conforme que si :

1. le gabarit commun est reconnaissable ;
2. le bon thème est appliqué sans changer la sémantique des états ;
3. le logo correct est utilisé selon le fond ;
4. le nom canonique est accessible ;
5. le contraste passe les seuils ;
6. clavier, mobile, chargement, vide et erreur sont vérifiés ;
7. les écarts métier sont documentés ;
8. captures desktop et mobile sont fournies.

## Migration progressive

1. TOS documente et fournit le paquet du projet.
2. Martin transfère le paquet et les assets à l'agent cible.
3. L'agent inspecte son design existant et propose un mapping sans code.
4. Un gate local autorise un pilote réversible sur une surface bornée.
5. Tests, build, captures et revue humaine.
6. Commit/push/déploiement uniquement sous gates distincts.
7. Généralisation au module après validation du pilote.

DEPORA est le premier pilote, sur `/admin/stock/comptes`. YORVA et ETIOQ restent limités au Website, aux maquettes et à la présentation future.

## Frontière

```text
TOS_SCOPE_ONLY=YES
OTHER_REPOSITORY_TOUCHED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
FONT_INSTALLATION_AUTHORIZED=NO
ROUTE_CHANGE_AUTHORIZED=NO
DOMAIN_CHANGE_AUTHORIZED=NO
DB_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

## Références

- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md)
- [VALD-108](../10_knowledge/VALIDATION_VALD_108_SYSTEME_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md)
- [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md)
- [ACCESSIBILITE.md](ACCESSIBILITE.md)
