# Standard — UX / UI

## Objectif

Définir le standard officiel d'**expérience utilisateur** et d'interface applicable à toutes les applications TAGORA.

## Portée

Conception UX, parcours, layout, navigation et cohérence visuelle — tous modules. Pilote : **TAGORA Time**.

---

## Philosophie UX globale TAGORA

TAGORA privilégie l'**utilité quotidienne** sur l'effet visuel :

- **Interface simple avant interface impressionnante** — Clarté et efficacité prime.
- **Parcours réels** — UX pensée pour ce que l'employé, le superviseur ou la direction **font vraiment** chaque jour.
- **Peu de formation** — Compréhension rapide sans manuel volumineux.
- **Cohérence écosystème** — Même logique d'interaction entre modules.

TAGORA doit toujours être : **Premium, Simple, Rapide, Intuitive, Professionnelle, Épurée, Accessible, Lisible, Moderne.**

---

## Règles UX

| Règle | Description |
|---|---|
| **Objectif clair par écran** | Chaque écran répond à une question ou une action principale identifiable. |
| **Action importante évidente** | Punch, valider, enregistrer — visible sans chercher. |
| **Réduire les choix inutiles** | Pas d'options rares au même niveau que l'action principale. |
| **Pas de formation lourde** | Parcours auto-explicatif ; aide contextuelle en second. |
| **Informations critiques visibles** | Statuts, alertes, erreurs — immédiatement perceptibles. |
| **Détails en vues secondaires** | Historique, paramètres avancés — un niveau en dessous. |
| **Aucune interface surchargée** | Densité maîtrisée ; respiration visuelle. |

---

## Lien avec TDS (Design System)

Le TDS **matérialise** la philosophie UX :

| UX (ce document) | TDS (implémentation visuelle) |
|---|---|
| Objectif écran, parcours | [NAVIGATION_STANDARD.md](../09_design_system/NAVIGATION_STANDARD.md) |
| Hiérarchie information | [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md), [DESIGN_PREMIUM_2027.md](../09_design_system/DESIGN_PREMIUM_2027.md) |
| Statuts compréhensibles | [PALETTE_COULEURS.md](../09_design_system/PALETTE_COULEURS.md), composants statuts |
| Revue écran | [TDS_CHECKLIST_REVUE_UI.md](../09_design_system/TDS_CHECKLIST_REVUE_UI.md) |
| Image de marque | [STANDARD_IMAGE_DE_MARQUE.md](STANDARD_IMAGE_DE_MARQUE.md) |

Toute interface TAGORA **applique le TDS** — pas de design local sans alignement documenté.

---

## Lien avec TQF (Quality Framework)

- Les **parcours UX critiques** sont aussi des **scénarios QA** (ex. QA-TIME-001).
- Un écran validé UX doit être **testable** — critères d'acceptation clairs.
- Smoke tests couvrent le parcours minimal UX (connexion, dashboard, action principale).
- Régression UX détectée par tests reproductibles, pas uniquement par retour utilisateur.

> UX + TDS + TQF = expérience cohérente **et** vérifiable.

---

## Public cible

Compréhensible par un public **20 à 60 ans** — langage simple, icônes avec libellés lorsque nécessaire, pas de jargon non expliqué.

---

## Éléments à documenter plus tard

- Personas transverses écosystème
- Patterns UX récurrents (listes, wizards, empty states)
- Règles densité d'information par type d'écran
- Processus validation UX formel

## Statut

**Enrichi — Phase 3B** — Philosophie et liens TDS/TQF structurés.
