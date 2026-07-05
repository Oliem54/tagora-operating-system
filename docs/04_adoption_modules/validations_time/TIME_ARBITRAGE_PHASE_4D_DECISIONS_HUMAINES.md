# Arbitrage des validations humaines — Module pilote — Phase 4D-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Module pilote** | **TAGORA Time** — référence uniquement, **non modifié** |
| **Phase 4A** | Audit initial — [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) |
| **Phase 4B** | Plan d'action — [TIME_PLAN_PHASE_4B_TQF_TDS_TES.md](../plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md) |
| **Phase 4C-TOS** | Cadre validation — [TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md](TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md) |
| **Phase 4D-TOS** | **Arbitrage humain documentaire** — présent document |
| **Règle** | **Aucun changement dans TAGORA Time** |

---

## 2. Objectif

- Transformer les validations ouvertes **VALD-029 à VALD-033** en **décisions humaines claires**.
- Éviter toute application sans arbitrage explicite.
- Préparer une **future Phase 4E-TOS** (paquet d'application pilote) ou **Phase 4D réelle** (documentation dans Time) **uniquement** si validations approuvées.
- Maintenir la **séparation TOS / module pilote**.

---

## 3. Décisions à arbitrer

| Validation | Décision liée | Sujet | Options possibles | Recommandation TOS | Décision humaine | Décideur | Date | Statut | Notes |
|---|---|---|---|---|---|---|---|---|---|
| **VALD-029** | DEC-TIME-4B-001 | Baseline Git du module pilote | A. `main` stable · B. Branche feature actuelle · C. Autre branche dédiée | Ne pas appliquer sur un état **WIP non clarifié** ; préférer **`main` stable** pour TQF/TDS métier | Validé — aucune application TOS future ne doit se faire sur un état WIP non clarifié. Le point de départ devra être propre, identifié et documenté. | Martin ST-Gelais — Direction | 2026-07-05 | **Validé** | Branche actuelle : `feature/admin-commissions-premium-header-kpi` |
| **VALD-030** | DEC-TIME-4B-002 | Traitement du WIP commissions (5 fichiers) | A. Commit + push avant suite · B. Isoler branche dédiée · C. Reporter écrans commissions · D. Annuler WIP si non désiré | **Stabiliser ou isoler** avant toute application | Validé — tout WIP du module pilote devra être stabilisé, isolé ou explicitement reporté avant une application réelle. | Martin ST-Gelais — Direction | 2026-07-05 | **Validé** | WIP exclu audit 4A |
| **VALD-031** | DEC-TIME-4B-003 | Écrans prioritaires TDS | A. Punch employé + horodateur · B. Dashboards employé/direction · C. Admin commissions · D. Navigation globale | Commencer par **punch employé, horodateur et dashboard employé** | Validé — les premiers écrans prioritaires pour une future revue TDS seront punch employé, horodateur et dashboard employé. Les écrans commissions viendront seulement après clarification du WIP. | Martin ST-Gelais — Direction | 2026-07-05 | **Validé** | Commissions après DEC-002 |
| **VALD-032** | DEC-TIME-4B-004 | Scénarios QA obligatoires | A. Punch in/out · B. Punch GPS · C. GPS refusé · D. Feuille de temps soumise · E. Approbation superviseur/direction | **A à E obligatoires** pour pilote minimal | Validé — les scénarios QA minimaux obligatoires seront punch in/out, punch avec GPS, GPS refusé ou absent, feuille de temps soumise, approbation superviseur/direction. | Martin ST-Gelais — Direction | 2026-07-05 | **Validé** | QA-TIME-001 dans TOS |
| **VALD-033** | DEC-TIME-4B-005 | Fiche validation avant code | A. Prochain changement punch/GPS · B. Prochain changement commissions · C. Tout changement critique · D. Seulement avant release | Fiche sur **tout changement critique** + **prochain changement punch/GPS** | Validé — la fiche de validation avant code sera obligatoire pour tout changement critique et pour le prochain changement punch/GPS. | Martin ST-Gelais — Direction | 2026-07-05 | **Validé** | Template TOS FICHE_VALIDATION |

---

## 4. Statuts possibles

| Statut | Signification |
|---|---|
| **À valider** | Décision en attente — statut par défaut |
| **Validé** | Décision humaine actée — autorise la suite documentaire |
| **Refusé** | Option rejetée — raison courte obligatoire |
| **Reporté** | Décision différée — prochaine étape documentée |
| **Remplacé** | Remplacé par une décision ultérieure — lien vers nouvelle entrée |
| **À clarifier** | Informations insuffisantes — question ouverte |

---

## 5. Règles d'arbitrage

1. **Aucune décision implicite** — silence ≠ validation.
2. **Décision validée** = décideur + date + option choisie.
3. **Décision refusée** = raison courte dans Notes.
4. **Décision reportée** = prochaine étape et date cible dans Notes.
5. **Aucune action dans le module pilote** sans statut **Validé** sur les VALD concernées.
6. **TOS documente la méthode** ; le module conserve sa logique métier et son dépôt.

---

## 6. Critères pour autoriser une future application réelle

Checklist — **toutes les conditions requises** :

| # | Critère | ☐ |
|---|---|:---:|
| 1 | **VALD-029** statut **Validé** | ☑ |
| 2 | **VALD-030** statut **Validé** ou **Reporté** avec justification | ☑ |
| 3 | **VALD-031** statut **Validé** | ☑ |
| 4 | **VALD-032** statut **Validé** | ☑ |
| 5 | **VALD-033** statut **Validé** | ☑ |
| 6 | **Périmètre future phase** approuvé (4E-TOS ou doc Time) | ☑ |
| 7 | **Interdictions confirmées** : aucun secret, migration, code non validé | ☑ |

---

## 7. Décision globale Phase 4D-TOS

| Champ | Valeur |
|---|---|
| **Phase 4D-TOS arbitrée par** | Martin ST-Gelais — Direction |
| **Date** | 2026-07-05 |
| **Résultat global** | ☑ Autorisé à préparer une application future · ☐ Non autorisé · ☐ Autorisé partiellement · ☐ À clarifier |
| **Notes direction** | Les 5 recommandations TOS sont validées. Aucune application réelle ne doit commencer sans rester dans le cadre approuvé. |

---

## 8. Ce qui reste interdit

- Modifier **TAGORA Time**
- Créer du **code** ou des **migrations**
- Lire ou committer des **secrets** / `.env`
- **Corriger** des écrans ou lancer des tests réels non demandés
- **Commit** dans un autre dépôt sans validation
- **Mélanger** TOS et module pilote dans une action non cadrée

---

## 9. Conclusion

- TOS dispose d'un **mécanisme d'arbitrage** centralisé pour le module pilote.
- Les **cinq validations VALD-029 à VALD-033** sont actées au statut **Validé** (Phase 4D.1-TOS, 2026-07-05).
- Cette validation **autorise la préparation documentaire** d'une future application — **pas** le code, les migrations ni la refonte du module pilote.
- La **prochaine étape** : Phase 4E-TOS — paquet d'application pilote conditionnel.

---

## Références

- [Validation Phase 4C-TOS](TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Complété — Phase 4D.1-TOS** — Validations VALD-029 à 033 **Validé** (Martin ST-Gelais — Direction, 2026-07-05).
