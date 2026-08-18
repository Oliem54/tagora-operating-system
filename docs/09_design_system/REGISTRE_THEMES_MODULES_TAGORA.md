# Registre officiel des thèmes visuels des modules TAGORA

```text
STATUS=VALIDATED
DATE=2026-08-18
DECISION=DEC-029
ADR=ADR-0017
VALIDATION=VALD-108
SOURCE_ASSET_ARCHIVE=3-Modules.zip
SOURCE_PDF=modules.pdf
```

## Statut des sources

Les archives `3-Modules.zip` / `3-Modules(1).zip` sont identiques :

```text
SHA256=5ee8a24dd19b8129c78e59a132a8222e1463359ce411c50c66ad64f046d89165
```

Les PDF `modules(1).pdf` / `modules(2).pdf` sont identiques :

```text
SHA256=842837262e4b5de26d62d0f558fa85b579cb17f15644abff5a9741842816878b
```

Les couleurs sources ont été relevées dans les PNG sRGB. Les couleurs dérivées servent à l'interface ; elles ne modifient pas les fichiers graphiques.

## Convention des tokens

| Token | Rôle |
|---|---|
| `module-accent` | Couleur identitaire source, accent décoratif et graphique |
| `module-accent-hover` | Accent assombri pour hover ou interaction |
| `module-accent-soft` | Fond teinté léger |
| `module-accent-border` | Bordure ou séparation teintée |
| `module-on-accent` | Texte/icône sur l'accent lorsque le contraste le permet |
| `module-focus-ring` | Anneau de focus sur surface claire |
| `module-chart-primary` | Première série graphique |
| `module-chart-secondary` | Deuxième série graphique |
| `module-action-bg` | Fond accessible du bouton principal |
| `module-action-on` | Texte/icône du bouton principal |

## Registre des valeurs

| Identité | Accent | Hover | Soft | Border | On accent | Focus ring | Chart 1 | Chart 2 | Action bg | Action on |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| HORORA | `#1F79E0` | `#1A64BB` | `#D6E4EB` | `#95BEE7` | `#081029`* | `#154A8E` | `#1F79E0` | `#4174BA` | `#1A64BB` | `#FFFFFF` |
| PULS | `#55C558` | `#46A14F` | `#DEF0D7` | `#AEE1AA` | `#081029` | `#327443` | `#55C558` | `#3A8648` | `#55C558` | `#081029` |
| DEPORA | `#00C1D5` | `#029EB3` | `#D1EFE9` | `#87DFE2` | `#081029` | `#047188` | `#00C1D5` | `#4DBED2` | `#00C1D5` | `#081029` |
| MESSOR | `#DBDF5C` | `#B1B652` | `#F2F3D7` | `#EAECAC` | `#081029` | `#7C8245` | `#DBDF5C` | `#DADF3A` | `#DBDF5C` | `#081029` |
| YORVA | `#BAC300` | `#969F08` | `#EDEFC9` | `#DBE082` | `#081029` | `#6A7212` | `#BAC300` | `#7C840E` | `#BAC300` | `#081029` |
| ETIOQ | `#F2F890` | `#C3CA7B` | `#F5F7DF` | `#F4F7C3` | `#081029` | `#899062` | `#F2F890` | `#E3E88F` | `#F2F890` | `#081029` |
| NEXUS | `#008247` | `#026B41` | `#D1E5D4` | `#87C2A2` | `#FFFFFF` | `#044F3A` | `#008247` | `#035A3D` | `#008247` | `#FFFFFF` |

\* HORORA : `module-on-accent` sur l'accent brut atteint environ 4,36:1 contre `#081029`, insuffisant pour du petit texte AA. Le bouton utilise donc `module-action-bg=#1A64BB` et `module-action-on=#FFFFFF` (environ 5,86:1). L'accent brut reste utilisable pour les grands éléments, icônes, graphiques et décorations non textuelles.

## Méthode de dérivation

- hover : 80 % accent + 20 % `#081029` ;
- soft : 15 % accent + 85 % `#F6F7ED` ;
- border : 45 % accent + 55 % `#F6F7ED` ;
- focus : 55 % accent + 45 % `#081029` ;
- chart secondaire : variante officielle lorsqu'elle existe, sinon ton assombri documenté.

Ces valeurs sont figées dans ce registre afin d'éviter des résultats différents entre frameworks. Ne pas recalculer localement avec une autre méthode.

## Contraste et focus

- `module-action-bg` / `module-action-on` respecte au moins 4,5:1 pour le texte normal ;
- `module-focus-ring` atteint au moins 3:1 sur `#F6F7ED` ;
- sur fond sombre, ajouter un offset `#FFFFFF` ou `#F6F7ED` de 2 px ;
- les accents clairs ne servent pas de texte sur blanc ;
- les graphiques combinent couleur, libellé et forme.

## Mapping des fichiers

| Identité | Fond sombre / tuile sombre | Fond clair / tuile claire |
|---|---|---|
| HORORA | `3-Modules/horora.png` | `3-Modules/horora light.png` |
| PULS | `3-Modules/Puls.png` | `3-Modules/Puls light.png` |
| DEPORA | `3-Modules/depora.png` | `3-Modules/depora light.png` |
| MESSOR | `3-Modules/messor.png` | `3-Modules/messor light.png` |
| YORVA | `3-Modules/YORVA.png` | `3-Modules/YORVA light.png` |
| ETIOQ | `3-Modules/etioq.png` | `3-Modules/etioq light.png` |
| NEXUS | `3-Modules/Nexus.png` | `3-Modules/Nexus light.png` |

Les noms de fichiers sont sensibles à la casse. Les agents peuvent normaliser les noms uniquement au moment d'une copie autorisée dans leur repository, sans modifier les sources transférées.

## Frontière marque / fonction

- Les accents produits complètent la palette de marque centrale dans les applications de leur produit uniquement.
- Les couleurs sémantiques restent transversales.
- `#182643` reste un fond incorporé aux assets, pas un remplacement global d'Indigo spatial `#1B2641`.
- YORVA et ETIOQ : usage limité aux maquettes et surfaces futures autorisées.
- Nexus : thème de portail, pas septième module commercial.

## Références

- [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md)
- [PALETTE_COULEURS.md](PALETTE_COULEURS.md)
