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

---

## Seuil de validation

- **8/8** — Prêt pour validation formelle (avec TQF si parcours critique).
- **6–7/8** — Corrections mineures avant validation.
- **< 6/8** — Retravail UX/TDS requis.

Les échecs doivent être **notés** (ticket, commentaire PR, note TKS) — pas ignorés.

---

## Compléments optionnels

- Contraste texte/fond acceptable ([ACCESSIBILITE.md](ACCESSIBILITE.md))
- Texte suffisamment grand pour données importantes ([TYPOGRAPHIE.md](TYPOGRAPHIE.md))
- Pas de surcharge — détails secondaires en vues dédiées ([DESIGN_PREMIUM_2027.md](DESIGN_PREMIUM_2027.md))

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

**Brouillon initial**
