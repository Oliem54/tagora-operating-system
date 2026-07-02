# Règles de validation avant code — Gouvernance TOS

## Objectif

Formaliser un **processus léger** avant tout développement important — éviter le chaos, pas ralentir l'équipe.

## Portée

Développement **important** dans tout module TAGORA — pilote : **TAGORA Time**.

Les correctifs mineurs (typo, fix isolé sans impact métier/UX/sécurité) **ne nécessitent pas** ce processus complet.

---

## Ordre méthodologique officiel

```
Documentation → Architecture → Code → QA → Production
```

Ce document = **porte d'entrée** avant code important. Référence ADR : [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md).

---

## Processus léger en 3 étapes

1. **Remplir** les 7 prérequis (ou fiche template).
2. **Valider** — note ou ADR selon ampleur.
3. **Coder** — avec impact QA et UX déjà identifiés.

Pas de comité obligatoire. Une fiche de 15 minutes suffit souvent.

---

## Les 7 prérequis

| # | Prérequis | Question |
|---|---|---|
| 1 | **Besoin documenté** | Quoi et pourquoi ? |
| 2 | **Règle métier clarifiée** | Quelles règles ? Cas limites ? |
| 3 | **Impact UX identifié** | Utilisateur voit/fait quoi ? TDS ? |
| 4 | **Impact QA identifié** | Comment tester ? Comptes QA ? |
| 5 | **Risques connus** | Sécurité, données, régression ? |
| 6 | **Décision ou note de validation** | Qui approuve le démarrage ? |
| 7 | **Périmètre confirmé** | Inclus / exclu ? |

Point inconnu → marquer **« à clarifier »** — pas ignorer.

---

## Format minimal — fiche de validation

Utiliser [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md) ou un ticket avec les mêmes sections.

**ID suggéré :** `VAL-{MODULE}-{NNN}` (ex. `VAL-TIME-001`).

---

## Exemples par type de changement

| Cas | Niveau | Validation attendue |
|---|---|---|
| **Petit correctif** | Mineur | Description dans PR suffit ; pas de fiche si zéro impact métier/UX |
| **Changement UI** | Standard | 7 prérequis ; fiche ou ticket ; checklist TDS si écran visible |
| **Changement métier** | Standard | 7 prérequis ; règle métier explicite ; scénario QA si parcours critique |
| **Changement sécurité** | Significatif | 7 prérequis + **ADR** si permissions, auth, données sensibles |
| **Changement architecture** | Significatif | 7 prérequis + **ADR** obligatoire |

---

## Quand une ADR est nécessaire

**ADR obligatoire** si :

- Impact sur **plusieurs modules**.
- Décision **architecture** (API commune, auth, TCP, intégration).
- Changement **sécurité** structurant.
- Décision **irréversible** ou coûteuse à changer.

Voir [README_ADR.md](../05_adr/README_ADR.md).

---

## Quand une simple note suffit

**Note ou ticket suffit** si :

- Périmètre **un seul module**.
- Feature ou correctif **cadré** sans impact écosystème.
- Risques **maîtrisés** et documentés dans la fiche.
- Pas de précédent transversal à poser.

En cas de doute → **ADR** (coût faible, mémoire TKS précieuse).

---

## Ce que ce processus n'est pas

- Pas un cahier des charges de 20 pages.
- Pas une validation centralisée par TOS.
- Pas un blocage pour chaque ligne de code.
- Pas un substitut à la revue de code (PR / TRF).

---

## Lien piliers

| Pilier | Lien |
|---|---|
| **TES** | Expression opérationnelle « documentation avant code » |
| **TQF** | Impact QA → scénarios avant merge |
| **TDS** | Impact UX → checklist revue UI |
| **TKS** | ADR pour décisions significatives |

---

## Règles

- Ne pas coder important avec points flous non marqués.
- Prévoir QA en parallèle ou avant merge — pas après production.
- Ne pas déployer sans validation QA conforme TQF.

## Statut

**Enrichi — Phase 3C** — Processus, exemples et lien ADR-0002.

## Références

- [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [ADR-0002 — Documentation avant code](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
