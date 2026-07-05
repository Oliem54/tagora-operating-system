# Templates d'application pilote — Phase 4G-TOS

## Objectif du dossier

Ce dossier contient des **modèles réutilisables** pour appliquer progressivement les standards TOS (TQF, TDS, TES) à un **module pilote** — **sans modifier le module** depuis TOS.

Premier module visé : **TAGORA Time**. Les templates sont **génériques** et réutilisables pour d'autres modules TAGORA (Stock Premium, Voice, Mail IA, Pulse, Platform).

---

## Liste des templates

| Fichier | Pilier | Usage |
|---|---|---|
| [TEMPLATE_APPLICATION_PILOTE_README.md](TEMPLATE_APPLICATION_PILOTE_README.md) | Transversal | Fiche d'identité du projet d'application |
| [TEMPLATE_PILOTE_SCENARIO_QA.md](TEMPLATE_PILOTE_SCENARIO_QA.md) | TQF | Scénario QA reproductible |
| [TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md](TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md) | TQF | Comptes QA par rôle (sans secrets) |
| [TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md](TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md) | TQF | Données de test fictives |
| [TEMPLATE_PILOTE_CHECKLIST_TDS.md](TEMPLATE_PILOTE_CHECKLIST_TDS.md) | TDS | Revue UX/UI écran ou parcours |
| [TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md](TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md) | TES | Validation avant changement code |
| [TEMPLATE_PILOTE_PLAN_APPLICATION.md](TEMPLATE_PILOTE_PLAN_APPLICATION.md) | Transversal | Plan d'application par lots |

---

## Quand utiliser chaque template

| Situation | Template |
|---|---|
| Démarrer une application sur un module | README + Plan application |
| Documenter un parcours QA | Scénario QA |
| Définir les comptes de test | Matrice comptes QA |
| Définir les jeux de données | Matrice données QA |
| Revue d'un écran prioritaire | Checklist TDS |
| Avant un changement code important | Validation avant code |

---

## Ordre recommandé d'utilisation

1. **README application pilote** — cadrer le projet.
2. **Plan application** — lots, prérequis, critères de sortie.
3. **Matrice comptes QA** + **Matrice données QA** — avant scénarios détaillés.
4. **Scénarios QA** — un par parcours critique.
5. **Checklist TDS** — par écran P1.
6. **Validation avant code** — avant tout changement dans le module pilote.

---

## Règles

| Règle | Description |
|---|---|
| **TOS reste le cadre** | Templates dans TOS ; instances dans module pilote après validation |
| **Module pilote autonome** | Dépôt séparé, logique métier intacte |
| **Aucune donnée sensible** | Pas de mot de passe, secret, PII réelle inutile |
| **Aucun code sans validation** | Fiche TES + décision humaine |
| **Aucune migration sans validation** | Hors portée par défaut |
| **Aucun outil réel** | Les templates ne créent pas Playwright, CI, Supabase |

---

## Références

- [Paquet Phase 4E](../paquets_pilotes/PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md)
- [Validation Phase 4F](../paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [Stratégie adoption modules](../STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md)

## Statut

**Créé — Phase 4G-TOS** — Templates à valider humainement (VALD-039 à VALD-045).
