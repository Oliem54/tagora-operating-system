# Standard — Composants UI

## Objectif

Définir le **cadre** des composants UI TAGORA à standardiser — specification documentaire uniquement. **Aucun composant réel n'est créé dans TOS.**

## Portée

Patterns UI réutilisables across modules — Time, Stock Premium, Voice, Mail IA, Pulse, Platform.

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

Chaque catégorie fera l'objet d'une **spécification détaillée** avant implémentation dans une librairie (hors TOS).

---

## Règles

1. **Usage clair** — Chaque composant répond à un besoin identifié ; pas de variantes « au cas où ».
2. **Éviter les variations inutiles** — Limiter les styles de boutons, badges et alertes à un ensemble maîtrisé.
3. **Cohérence inter-modules** — Un « statut succès » dans Time ressemble et se comporte comme dans Voice.
4. **TOS documente ; ailleurs on implémente** — Pas de React, CSS ou Tailwind dans ce dépôt.
5. **Accessibilité by default** — Chaque spec composant inclura critères a11y (voir [ACCESSIBILITE.md](ACCESSIBILITE.md)).
6. **Validation avant code** — Spec TDS validée → puis bibliothèque composants (TCP ou package dédié — à décider).

---

## Relation avec les autres documents TDS

- Couleurs composants → [PALETTE_COULEURS.md](PALETTE_COULEURS.md)
- Textes dans composants → [TYPOGRAPHIE.md](TYPOGRAPHIE.md)
- Revue écran → [TDS_CHECKLIST_REVUE_UI.md](TDS_CHECKLIST_REVUE_UI.md)

---

## Éléments à documenter plus tard

- Spec par composant (variants, états, anatomy)
- Patterns composition (form + table + filters)
- Storybook ou équivalent (hors TOS)
- Roadmap implémentation bibliothèque

## Statut

**Enrichi — Phase 3B** — Catégories définies. Specs et code : ultérieur.
