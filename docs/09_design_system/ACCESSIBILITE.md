# Accessibilité — TDS

## Objectif

Définir l'**accessibilité comme standard obligatoire** TAGORA — intégrée au TDS, pas en option.

## Portée

Toutes les interfaces TAGORA — desktop, mobile, tous rôles. **TAGORA Time** en priorité.

---

## Standard obligatoire

L'accessibilité n'est pas un « plus » premium. C'est une **exigence** alignée avec la Constitution :

- Public **20 à 60 ans et plus**.
- Environnements professionnels variés (bureau, terrain, mobile).
- Conformité progressive aux repères reconnus (WCAG — niveau cible à valider).

---

## Exigences documentées

| Domaine | Exigence |
|---|---|
| **Contraste** | Texte et statuts lisibles sur fond — suffisamment contrastés |
| **Tailles de texte** | Raisonnables ; pas de micro-texte pour données critiques |
| **Zones cliquables** | Boutons et actions facilement activables (touch et souris) |
| **États visibles** | Focus, hover, disabled, actif — perceptibles |
| **Erreurs** | Messages compréhensibles — pas uniquement par la couleur |
| **Mobile et desktop** | Parcours utilisables sur les deux ; pas desktop-only de facto |
| **Navigation clavier** | À exiger et documenter lors des specs composants (Phase ultérieure) |

---

## Lien TQF

- Critères accessibilité intégrables dans scénarios QA ([TQF](../06_qa/QA_FRAMEWORK_OVERVIEW.md)).
- Revue UI via [TDS_CHECKLIST_REVUE_UI.md](TDS_CHECKLIST_REVUE_UI.md) inclut questions mobile et clarté.

---

## Application progressive — TAGORA Time

Priorités a11y pilote :

- Punch in/out — boutons action principale accessibles (taille, contraste, libellé).
- Statuts (actif, retard, erreur) — pas uniquement codés par couleur.
- Messages d'erreur punch — texte explicite.
- Rapports direction — tableaux lisibles ; navigation possible (clavier à renforcer plus tard).
- Mobile employé terrain — touch targets suffisants.

---

## Règles

- Ne pas sacrifier accessibilité pour esthétique.
- Valider a11y avant release production (avec TQF).
- Documenter niveau WCAG cible lors de validation palette et typo.

---

## Éléments à documenter plus tard

- Niveau WCAG cible (AA recommandé — à confirmer)
- Checklist a11y technique (ARIA, focus, skip links)
- Outils de test recommandés
- Processus audit accessibilité

## Statut

**Enrichi — Phase 3B** — Exigences définies. WCAG niveau et tests : à valider.
