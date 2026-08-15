# Palette de couleurs — TDS

## Objectif

Définir la **palette officielle exclusive** TAGORA et le cadre sémantique encore non assigné — identité visuelle commune, sans inventer de rôles absents de la charte.

## Portée

Couleurs centrales, dégradés officiels, et catégories sémantiques à confirmer plus tard — tous modules TAGORA.

Source canonique : [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md) · **DEC-018** · **ADR-0006** · **VALD-097**

---

## Statut

```text
FINAL_PALETTE_STATUS=OFFICIAL_EXCLUSIVE
FINAL_GRADIENTS_STATUS=OFFICIAL_EXCLUSIVE
PREVIOUS_MATRIX_STATUS=OBSOLETE
PREVIOUS_PALETTE_STATUS=OBSOLETE
SEMANTIC_COLOR_MAPPING=NOT_DEFINED_BY_BRAND_GUIDE
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

La charte **nomme** ces huit couleurs. Elle **ne définit pas** explicitement `PRIMARY_COLOR`, `SUCCESS_COLOR`, `DANGER_COLOR`, ni d'affectation par module. TOS n'invente pas ces mappings.

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
- **Communiquer** des statuts et états métier (succès, alerte, erreur) — mapping sémantique encore à confirmer.
- **Guider** l'attention vers l'information critique.
- **Unifier** Time, Stock Premium, Voice, Mail IA, Pulse et Nexus.

---

## Catégories sémantiques — mapping non défini par la charte

Les catégories suivantes restent un **cadre** TDS. Leur liaison aux huit couleurs officielles n'est **pas** actée.

| Catégorie | Usage prévu | Mapping hex |
|---|---|---|
| **Primaire** | Actions principales, identité TAGORA | Non défini par la charte |
| **Secondaire** | Actions secondaires, accents | Non défini par la charte |
| **Neutres** | Texte, fonds, séparateurs | Non défini par la charte |
| **Fond** | Arrière-plans page, cartes, panneaux | Non défini par la charte |
| **Texte** | Corps, titres, texte atténué | Non défini par la charte |
| **Bordures** | Contours, dividers | Non défini par la charte |
| **Succès** | Confirmation, état OK | Non défini par la charte |
| **Avertissement** | Attention, action requise bientôt | Non défini par la charte |
| **Danger** | Erreur, suppression, blocage | Non défini par la charte |
| **Information** | Message informatif neutre | Non défini par la charte |
| **Rôles** | Différenciation visuelle rôles (si applicable) | Non défini par la charte |
| **Statuts** | États métier transverses | Non défini par la charte |

> **Règle :** Ne pas inventer d'affectation sémantique détaillée. Toute liaison catégorie → hex exige une confirmation Martin ou designer distincte.

---

## Règles

1. **Compréhension avant décoration** — Une couleur doit aider à comprendre un statut ou une priorité.
2. **Cohérence sémantique** — « Succès » signifie la même chose dans Time et Stock Premium, une fois le mapping confirmé.
3. **Accessibilité** — Contrastes suffisants (voir [ACCESSIBILITE.md](ACCESSIBILITE.md)).
4. **Pas de couleurs ad hoc** — Exceptions documentées via gouvernance TOS.
5. **Palette exclusive** — Aucune couleur centrale hors des huit valeurs officielles.
6. **Application locale** uniquement après transfert Martin du paquet de charte.

---

## Application TAGORA Time — statuts métier à couvrir

Couleurs sémantiques Time : **mapping hex non défini** par la charte. Les noms de tokens restent à confirmer.

| Statut Time | Objectif visuel | Hex |
|---|---|---|
| **Punch actif** | Employé en service — visible immédiatement | Non défini par la charte |
| **Punch terminé** | Shift clos — état repos / hors service | Non défini par la charte |
| **Retard** | Alerte sans ambiguïté | Non défini par la charte |
| **Absence** | Distinct du retard et du punch normal | Non défini par la charte |
| **Attente de validation** | Superviseur doit agir | Non défini par la charte |
| **Erreur** | Blocage ou échec action | Non défini par la charte |
| **Alerte direction** | Synthèse ou KPI nécessitant attention | Non défini par la charte |

---

## Éléments à documenter plus tard

- Mapping sémantique des huit couleurs (primaire, succès, danger, modules)
- Mode sombre
- Matrice statut → couleur → contraste WCAG
- Exemples visuels de référence
- Application produit après transfert Martin

## Statut

**Enrichi — Charte centrale finale (2026-08-15)** — Huit hex et quatre dégradés exclusifs actés (DEC-018 / ADR-0006 / VALD-097). Mapping sémantique : en attente. Application produit : non autorisée.
