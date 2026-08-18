# Checklist — Revue UI TAGORA

## Objectif

Fournir une **checklist simple** de revue UI avant validation d'un écran dans l'écosystème TAGORA (TDS).

## Portée

Toute nouvelle interface ou refonte significative — modules TAGORA, pilote **TAGORA Time**.

## Principes

- Questions binaires ou courtes — pas de processus lourd.
- Utilisable par designer, développeur, QA, gestionnaire ou agent IA.
- Alignée sur [DESIGN_PREMIUM_2027.md](DESIGN_PREMIUM_2027.md) et [STANDARD_UX_UI.md](../02_standards/STANDARD_UX_UI.md).

---

## Checklist de revue UI

Avant de valider un écran, répondre honnêtement :

| # | Question | ☐ OK |
|---|---|:---:|
| 1 | **L'écran est-il clair ?** — Objectif identifiable en quelques secondes | ☐ |
| 2 | **L'action principale est-elle évidente ?** — Un seul CTA dominant si applicable | ☐ |
| 3 | **Les statuts sont-ils compréhensibles ?** — Libellés + couleur sémantique, pas couleur seule | ☐ |
| 4 | **Les erreurs sont-elles visibles ?** — Message explicite, pas silencieux | ☐ |
| 5 | **Les informations critiques sont-elles prioritaires ?** — Hiérarchie visuelle respectée | ☐ |
| 6 | **La navigation est-elle cohérente ?** — Où suis-je ? Que faire ensuite ? | ☐ |
| 7 | **L'écran fonctionne-t-il en mobile et desktop ?** — Ou limitation documentée | ☐ |
| 8 | **L'écran semble-t-il appartenir à l'univers TAGORA ?** — Cohérence TDS / marque | ☐ |
| 9 | **Le bon thème produit est-il appliqué ?** — Tokens officiels, sans couleur locale inventée | ☐ |
| 10 | **Le logo est-il correct pour le fond ?** — Canvas complet, sans crop, déformation ou recoloration | ☐ |
| 11 | **Le nom canonique est-il accessible ?** — `TAGORA + NOM`, métadonnées et nom accessible cohérents | ☐ |
| 12 | **Les seuils WCAG 2.2 AA passent-ils ?** — Contraste, clavier, focus et cibles tactiles vérifiés | ☐ |

---

## Seuil de validation

- **12/12** — Prêt pour validation formelle (avec TQF si parcours critique).
- **10–11/12** — Corrections mineures avant validation.
- **< 10/12** — Retravail UX/TDS requis.

Les échecs doivent être **notés** (ticket, commentaire PR, note TKS) — pas ignorés.

---

## Compléments optionnels

- Contraste texte/fond acceptable ([ACCESSIBILITE.md](ACCESSIBILITE.md))
- Texte suffisamment grand pour données importantes ([TYPOGRAPHIE.md](TYPOGRAPHIE.md))
- Familles Avenir Next + JHC Notion uniquement ; Outfit/Syne LEGACY ; aucun mapping body/display inventé ([ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md), [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md))
- Couleurs centrales limitées à la palette exclusive ; gradients officiels uniquement
- Pas de surcharge — détails secondaires en vues dédiées ([DESIGN_PREMIUM_2027.md](DESIGN_PREMIUM_2027.md))
- Thème et structure communs ([STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md), [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md))

---

## Usage recommandé

1. Designer / PO remplit la checklist sur maquette ou prototype.
2. Développeur revérifie sur implémentation staging.
3. QA référence scénario TQF si parcours critique.
4. Écarts documentés jusqu'à convergence TDS.

---

## Éléments à documenter plus tard

- Version PDF / formulaire partagé
- Intégration obligatoire dans workflow PR (TRF)
- Exemples remplis par type d'écran Time

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — Checklist portée à 12 points avec thème, logo, nom accessible et WCAG 2.2 AA. Application produit non autorisée.
