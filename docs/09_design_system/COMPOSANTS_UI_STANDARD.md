# Standard — Composants UI

## Objectif

Définir le **cadre** des composants UI TAGORA à standardiser — specification documentaire uniquement. **Aucun composant réel n'est créé dans TOS.**

## Portée

Patterns UI réutilisables entre HORORA, PULS, DEPORA, MESSOR, YORVA, ETIOQ et Nexus.

---

## Catégories à standardiser plus tard

| Catégorie | Usage typique |
|---|---|
| **Boutons** | Actions primaires, secondaires, destructives |
| **Cartes** | Regroupement d'information, résumés dashboard |
| **Tableaux** | Listes employés, punchs, rapports |
| **Badges** | Compteurs, étiquettes courtes |
| **Statuts** | Punch actif, validation, retard, absence |
| **Alertes** | Erreurs, avertissements, informations |
| **Formulaires** | Saisie, validation, champs obligatoires |
| **Filtres** | Période, rôle, statut, recherche |
| **Modales** | Confirmation, détail rapide |
| **Menus** | Navigation, actions contextuelles |
| **Dashboards** | Layout synthèse + actions + listes |
| **Timeline / historique** | Punchs, événements, audit visuel |

L'anatomie, les dimensions, les rayons, les ombres, les états et les règles de thème sont définis dans [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md). Une librairie de composants reste hors TOS et exige une décision distincte.

---

## Règles

1. **Usage clair** — Chaque composant répond à un besoin identifié ; pas de variantes « au cas où ».
2. **Éviter les variations inutiles** — Limiter les styles de boutons, badges et alertes à un ensemble maîtrisé.
3. **Cohérence inter-modules** — Un « statut succès » dans Time ressemble et se comporte comme dans Voice.
4. **TOS documente ; ailleurs on implémente** — Pas de React, CSS ou Tailwind dans ce dépôt.
5. **Accessibilité by default** — Chaque spec composant inclura critères a11y (voir [ACCESSIBILITE.md](ACCESSIBILITE.md)).
6. **Validation avant code** — Spec TDS validée → puis bibliothèque composants (TCP ou package dédié — à décider).
7. **Typographie composants** — familles officielles Avenir Next et JHC Notion uniquement ; **aucun mapping body/display inventé** tant que `TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION` (voir [TYPOGRAPHIE.md](TYPOGRAPHIE.md), [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md)). Outfit et Syne sont LEGACY.
8. **Thème produit borné** — logo et accents changent ; anatomie, comportement et états sémantiques restent communs.

---

## Relation avec les autres documents TDS

- Couleurs composants → [PALETTE_COULEURS.md](PALETTE_COULEURS.md), [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md)
- Textes dans composants → [TYPOGRAPHIE.md](TYPOGRAPHIE.md)
- Revue écran → [TDS_CHECKLIST_REVUE_UI.md](TDS_CHECKLIST_REVUE_UI.md)
- Structure, dimensions et thèmes → [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md), [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md)

---

## Éléments à documenter plus tard

- Exemples visuels et code de référence par composant
- Patterns composition (form + table + filters)
- Storybook ou équivalent (hors TOS)
- Roadmap implémentation bibliothèque

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — Fondations communes documentées par DEC-029 ; code de bibliothèque ultérieur ; typographie finale toujours en attente d'autorisation.
