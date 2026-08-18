# Standard — Navigation

## Objectif

Définir le standard officiel de **navigation** et d'architecture de l'information pour toutes les applications TAGORA.

## Portée

Menus, actions rapides, filtres, vues détaillées, dashboards et wayfinding — tous modules. **TAGORA DEPORA** est le premier pilote du système visuel commun.

---

## Principes de navigation TAGORA

1. **Claire** — L'utilisateur comprend où il est et ce qu'il peut faire.
2. **Constante** — Mêmes patterns entre HORORA, PULS, DEPORA, MESSOR, YORVA, ETIOQ et Nexus.
3. **Prévisible** — Même type d'action au même endroit logique (ex. action principale en évidence).
4. **Adaptée au rôle** — Employé, superviseur, direction et admin ne voient pas la même navigation.

> **Règle :** L'utilisateur doit comprendre **où il est** et **quoi faire ensuite** — sans formation lourde.

---

## Distinction des zones de navigation

| Zone | Rôle | Exemples conceptuels |
|---|---|---|
| **Navigation principale** | Accès aux sections majeures du module | Menu latéral, barre principale, onglets de module |
| **Actions rapides** | Tâches fréquentes et critiques | Punch in/out, créer, valider |
| **Filtres et recherche** | Affiner une liste ou un rapport | Période, employé, statut |
| **Détails secondaires** | Information ou action non critique immédiate | Historique, paramètres avancés, métadonnées |

Ne pas mélanger action principale et filtres avancés sur le même niveau visuel sans hiérarchie.

---

## Recommandations — Dashboards

- **Une action principale** par écran — la plus fréquente pour le rôle.
- **Résumé en haut** — statuts, alertes, KPIs critiques.
- **Listes et détails en dessous** — drill-down vers vues secondaires.
- **Cohérence de layout** — structure similaire entre modules TAGORA (sans copier à l'identique).
- **Thème borné** — l'accent identifie le module ; la position des repères et le comportement restent communs.

---

## Recommandations — Modules par profil

| Profil | Priorité navigation | Principe |
|---|---|---|
| **Employé** | Action immédiate (ex. pointage), statut personnel | Minimum de clics ; pas de bruit direction |
| **Superviseur** | Équipe, validations en attente, alertes | Vue d'ensemble + accès rapide aux cas à traiter |
| **Direction** | Synthèse, rapports, tendances | Agrégats d'abord ; détails en second |
| **Administrateur** | Configuration, utilisateurs, paramètres | Séparé des parcours opérationnels quotidiens |

Les **menus finaux de TAGORA Time ne sont pas inventés ici** — à documenter dans le dépôt Time lors de l'alignement réel.

---

## Application progressive — TAGORA Time

| Rôle Time | Focus navigation (à confirmer dans Time) |
|---|---|
| **Employé** | Accès rapide au pointage et au statut actuel |
| **Superviseur** | Validations, vue équipe, alertes |
| **Direction** | Rapports, synthèses, indicateurs |
| **Administrateur** | Configuration — hors parcours employé quotidien |

**Règle :** Documenter la structure de navigation Time existante avant refonte ; aligner progressivement sur ces principes TDS.

---

## Règles

- Appliquer les patterns TDS sur toute nouvelle interface ou refonte majeure.
- Documenter la navigation par module et par rôle.
- Valider navigation via [TDS_CHECKLIST_REVUE_UI.md](TDS_CHECKLIST_REVUE_UI.md) avant release.
- Ne pas inventer libellés de menu ou structure finale dans TOS.

---

## Gabarit commun

Le header recommandé mesure au moins 64 px ; une sidebar desktop mesure 256 px et sa variante réduite 72 px. Le module conserve ses libellés métier, mais place de façon cohérente l'identité, le contexte, l'action principale, le profil, l'aide et la sortie.

Référence normative : [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md).

## Éléments à documenter plus tard

- Matrice de navigation réelle par module et par rôle
- Navigation inter-applications via Nexus
- Exceptions justifiées aux dimensions de référence

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — Principes et dimensions de référence communs ; menus métier à mapper dans chaque produit ; aucune application autorisée.
