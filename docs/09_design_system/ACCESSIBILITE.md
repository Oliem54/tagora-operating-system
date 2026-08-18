# Accessibilité — TDS

## Objectif

Définir l'**accessibilité comme standard obligatoire** TAGORA — intégrée au TDS, pas en option.

## Portée

Toutes les interfaces TAGORA — desktop, mobile, tous rôles. **TAGORA DEPORA** est le premier pilote du système visuel commun.

---

## Standard obligatoire

L'accessibilité n'est pas un « plus » premium. C'est une **exigence** alignée avec la Constitution :

- Public **20 à 60 ans et plus**.
- Environnements professionnels variés (bureau, terrain, mobile).
- Conformité cible : **WCAG 2.2 niveau AA** pour les nouvelles surfaces et refontes significatives.

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

## Seuils minimaux

| Élément | Seuil |
|---|---:|
| Texte normal | 4,5:1 |
| Grand texte | 3:1 |
| Composant, bordure active et focus | 3:1 |
| Zone interactive cible | 44 × 44 px |
| Anneau de focus | 2 px minimum + offset contrasté au besoin |

Les tokens de thème sont vérifiés dans [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md). Un accent produit n'est pas automatiquement une couleur de texte ou de bouton.

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
- Vérifier WCAG 2.2 AA lors de la validation palette, typo et composants.

---

## Éléments à documenter plus tard

- Checklist a11y technique (ARIA, focus, skip links)
- Outils de test recommandés
- Processus audit accessibilité

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — WCAG 2.2 AA, seuils de contraste, cible tactile et focus documentés. Application produit sous gate distinct.
