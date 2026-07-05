# Template — Matrice comptes QA pilote

## Objectif

Modèle pour documenter les **comptes QA logiques** par rôle — sans mots de passe ni secrets.

## Pilier TOS

**TQF** — [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md)

---

## Modèle à compléter

### En-tête

| Champ | Valeur |
|---|---|
| **Module** | *Ex. TAGORA Time* |
| **Environnement** | *local / dev / staging — jamais production avec secrets* |
| **Propriétaire matrice** | *Rôle responsable QA* |
| **Date** | *AAAA-MM-JJ* |
| **Statut** | *Brouillon / Validé / Reporté* |

### Lignes matrice

| Rôle | Type de compte | Identifiant logique | Usage prévu | Permissions attendues | Données associées | Statut | Notes |
|---|---|---|---|---|---|---|---|
| *Employé* | *qa-employe* | *qa-employe@example.test* | *QA-TIME-001* | *Punch, feuille temps* | *Jeu minimal reset* | *Actif* | *Fictif uniquement* |
| *…* | *…* | *…* | *…* | *…* | *…* | *…* | *…* |

### Interdictions

| Interdit | Raison |
|---|---|
| **Vrai mot de passe** | Stockage dans dépôt module ou TOS interdit |
| **Secret** | Token, clé, credential |
| **Donnée client réelle inutile** | PII non requise pour QA doc |

> Les credentials effectifs restent dans l'environnement sécurisé du module — jamais dans TOS.

---

## Statut

**Template — Phase 4G-TOS** — À valider (VALD-041).
