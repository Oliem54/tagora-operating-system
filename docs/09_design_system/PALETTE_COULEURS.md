# Palette de couleurs — TDS

## Objectif

Définir la **palette officielle exclusive** TAGORA, les accents produits scellés et les couleurs fonctionnelles communes de l'interface.

## Portée

Couleurs centrales, dégradés officiels, accents des produits et états fonctionnels — tous modules TAGORA.

Source canonique : [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md) · **DEC-018** · **ADR-0006** · **VALD-097**

---

## Statut

```text
FINAL_PALETTE_STATUS=OFFICIAL_EXCLUSIVE
FINAL_GRADIENTS_STATUS=OFFICIAL_EXCLUSIVE
PREVIOUS_MATRIX_STATUS=OBSOLETE
PREVIOUS_PALETTE_STATUS=OBSOLETE
SEMANTIC_COLOR_MAPPING_NOT_DEFINED_BY_BRAND_GUIDE=YES
UI_FUNCTIONAL_MAPPING=DEFINED_BY_DEC_029
PRODUCT_ACCENT_MAPPING=DEFINED_BY_DEC_029
PRODUCT_APPLICATION_AUTHORIZED=NO
```

Cette palette remplace, pour l'usage actif :

- la matrice Trello provisoire ;
- la palette Website provisoire ;
- le contrat couleurs TOS précédent / incomplet ;
- toute valeur hex centrale contradictoire antérieure.

TOS n'ouvre pas Website et n'applique aucune palette produit.

---

## Palette finale exclusive

Aucune autre couleur centrale TAGORA n'est autorisée.

| Nom | Hex |
|---|---|
| Indigo spatial | `#1B2641` |
| Vert citron | `#DBDF5B` |
| Bleu de Prusse | `#081029` |
| Ivoire | `#F6F7ED` |
| Citron vert | `#BCC320` |
| Vert mer | `#00804C` |
| Vert mousse | `#74C365` |
| Acier Azure | `#1E488F` |

La charte **nomme** ces huit couleurs. Elle ne définit pas de mapping sémantique. DEC-029 ajoute séparément une couche UI fonctionnelle et une couche d'accents produits sans modifier la palette de marque centrale.

## Accents produits scellés

| Produit | Accent source | Accent secondaire source |
|---|---:|---:|
| HORORA | `#1F79E0` | `#4174BA` |
| PULS | `#55C558` | — |
| DEPORA | `#00C1D5` | `#4DBED2` |
| MESSOR | `#DBDF5C` | `#DADF3A` |
| YORVA | `#BAC300` | — |
| ETIOQ | `#F2F890` | `#E3E88F` |
| NEXUS | `#008247` | — |

Ces couleurs sont autorisées uniquement dans le thème du produit correspondant. Les valeurs dérivées sont figées dans [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md).

---

## Dégradés officiels exclusifs

Aucun autre dégradé central TAGORA n'est déclaré officiel.

| Dégradé |
|---|
| `#F6F7ED` → `#BCC320` |
| `#74C365` → `#BCC320` |
| `#00804C` → `#74C365` |
| `#081029` → `#1E488F` |

---

## Rôle de la palette TAGORA

La palette n'est pas décorative seule. Elle sert à :

- **Identifier** l'univers TAGORA d'un coup d'œil.
- **Communiquer** des statuts et états métier par la couche fonctionnelle commune.
- **Guider** l'attention vers l'information critique.
- **Unifier** HORORA, PULS, DEPORA, MESSOR, YORVA, ETIOQ et Nexus.

---

## Couleurs sémantiques fonctionnelles

Ces couleurs sont des outils d'interface, pas des couleurs de marque. Elles restent identiques dans tous les modules.

| État | Foreground | Background | Border |
|---|---:|---:|---:|
| Succès | `#067647` | `#ECFDF3` | `#ABEFC6` |
| Avertissement | `#B54708` | `#FFFAEB` | `#FEDF89` |
| Danger | `#B42318` | `#FEF3F2` | `#FECDCA` |
| Information | `#175CD3` | `#EFF8FF` | `#B2DDFF` |

Chaque état comporte un libellé ou une icône. L'accent produit ne remplace jamais automatiquement ces couleurs.

---

## Règles

1. **Compréhension avant décoration** — Une couleur doit aider à comprendre un statut ou une priorité.
2. **Cohérence sémantique** — « Succès » signifie la même chose dans HORORA et DEPORA.
3. **Accessibilité** — Contrastes suffisants (voir [ACCESSIBILITE.md](ACCESSIBILITE.md)).
4. **Pas de couleurs ad hoc** — Exceptions documentées via gouvernance TOS.
5. **Palette exclusive** — Aucune couleur centrale hors des huit valeurs officielles.
6. **Application locale** uniquement après transfert Martin du paquet de charte.

---

## Mapping métier local

Chaque module associe ses statuts métier aux quatre états fonctionnels dans sa propre documentation. Un statut métier n'est pas automatiquement un succès parce qu'il est positif, ni une erreur parce qu'il utilise une couleur vive.

---

## Éléments à documenter plus tard

- Mode sombre
- Matrice statut → couleur → contraste WCAG
- Exemples visuels de référence
- Application produit après transfert Martin

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — Palette centrale DEC-018 inchangée ; accents produits et couleurs fonctionnelles UI ajoutés par DEC-029 / ADR-0017 / VALD-108. Application produit : non autorisée.
