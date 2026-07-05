# Template — Scénario QA pilote

## Objectif

Modèle pour documenter un **scénario QA reproductible** avant toute automatisation (Playwright) ou test dans le module pilote.

## Pilier TOS

**TQF** — [QA_FRAMEWORK_OVERVIEW.md](../../06_qa/QA_FRAMEWORK_OVERVIEW.md)

---

## Modèle à compléter

| Champ | Valeur |
|---|---|
| **ID scénario** | *Ex. QA-TIME-001* |
| **Module** | *Ex. TAGORA Time* |
| **Pilier TOS lié** | TQF |
| **Titre** | *Ex. Punch in / punch out employé* |
| **Objectif** | *Résultat métier attendu du parcours* |
| **Préconditions** | *Compte QA, environnement, données* |
| **Rôle utilisateur** | *Ex. qa-employe* |
| **Données nécessaires** | *Références matrice données — valeurs fictives uniquement* |
| **Priorité** | *Critique / Haute / Normale / Basse* |
| **Statut** | *Brouillon / Validé / Refusé / Obsolète* |

### Étapes

| # | Action | Résultat attendu |
|:---:|---|---|
| 1 | *…* | *…* |
| 2 | *…* | *…* |

### Exécution (terrain)

| Champ | Valeur |
|---|---|
| **Résultat observé** | *À remplir lors de l'exécution* |
| **Date exécution** | *AAAA-MM-JJ* |
| **Exécuté par** | *Rôle* |

### Analyse

| Champ | Valeur |
|---|---|
| **Risques** | *Régression, permissions, données* |
| **Notes** | *Écarts, dépendances* |
| **Validation humaine** | *Validé par / Date / Statut* |

### Interdictions

- **Aucun vrai mot de passe** dans ce document.
- **Aucun secret** (token, clé API, `.env`).
- **Aucune donnée client réelle** inutile.

---

## Statut

**Template — Phase 4G-TOS** — À valider (VALD-040).
