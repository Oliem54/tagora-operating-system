# Template — Matrice données QA pilote

## Objectif

Modèle pour documenter les **données de test** — valeurs fictives ou anonymisées uniquement.

## Pilier TOS

**TQF** — [DONNEES_QA_STANDARD.md](../../06_qa/DONNEES_QA_STANDARD.md)

---

## Modèle à compléter

### En-tête

| Champ | Valeur |
|---|---|
| **Module** | *Ex. TAGORA Time* |
| **Date** | *AAAA-MM-JJ* |
| **Statut** | *Brouillon / Validé / Reporté* |

### Lignes matrice

| Scénario lié | Type de donnée | Valeur fictive / anonymisée | Usage | Obligatoire | Sensible | Règle de protection | Statut | Notes |
|---|---|---|---|:---:|:---:|---|---|---|
| *QA-TIME-001* | *Employé test* | *Jean Test — ID fictif* | *Punch* | Oui | Non | *Donnée inventée* | *Actif* | *…* |
| *…* | *…* | *…* | *…* | *…* | *…* | *…* | *…* | *…* |

### Règles

1. **Interdiction** de documenter des données sensibles réelles inutilement.
2. Marquer **Sensible = Oui** si le type l'exige — sans inclure la valeur réelle.
3. Procédure de **reset** documentée séparément dans le module pilote.

---

## Statut

**Template — Phase 4G-TOS** — À valider (VALD-042).
