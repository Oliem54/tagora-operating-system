# Validation avant application pilote — TAGORA Time — Phase 4C-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** — Constitution méthodologique |
| **Module pilote** | **TAGORA Time** — référence uniquement, **module autonome** |
| **Phase 4A** | Audit initial TQF / TDS / TES — [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) |
| **Phase 4B** | Plan d'action — [TIME_PLAN_PHASE_4B_TQF_TDS_TES.md](../plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md) |
| **Phase 4C-TOS** | **Validation humaine** avant toute application réelle sur Time |
| **Règle absolue** | **Aucun changement dans TAGORA Time** tant que cette phase n'est pas validée |

TOS guide ; Time implémente — **deux dépôts, deux responsabilités**.

---

## 2. Objectif

- Transformer les **décisions ouvertes Phase 4B** en **validations humaines** traçables.
- Éviter de toucher au module pilote **sans périmètre clair**.
- Confirmer l'**ordre d'application** TQF → TDS → TES.
- Préserver l'**autonomie** de TAGORA Time (logique métier, Git, déploiement).

---

## 3. Décisions à valider avant application

| ID | Décision | Recommandation TOS | Validation requise | Impact si non validé | Statut | Notes |
|---|---|---|---|---|---|---|
| **DEC-TIME-4B-001** | Baseline Git Time : `main` stable ou branche feature actuelle ? | **`main` stable** pour TQF/TDS métier critique ; feature acceptable si WIP exclu documenté | Humaine — responsable Time ou TOS | Audit non reproductible ; écarts TOS flous | À faire | Branche actuelle : `feature/admin-commissions-premium-header-kpi` @ `5d4e397` |
| **DEC-TIME-4B-002** | Traitement du **WIP commissions** (5 fichiers) avant Phase 4D | **Commit + push feature** recommandé pour figer l'état ; revue TDS commissions **après** | Humaine — équipe Time | Revue TDS commissions bloquée ; baseline instable | À faire | WIP exclu audit 4A — voir plan 4B |
| **DEC-TIME-4B-003** | **Écrans prioritaires** pour revue TDS | **P1** : punch employé + horodateur · **P2** : dashboards · **P3** : commissions après DEC-002 | Humaine — PO / design / métier | Effort TDS mal ciblé | À faire | Checklist [TDS_CHECKLIST_REVUE_UI.md](../../09_design_system/TDS_CHECKLIST_REVUE_UI.md) |
| **DEC-TIME-4B-004** | **Scénarios QA obligatoires** pour Time | **QA-TIME-001 obligatoire** ; GPS, permissions, feuille de temps en lot 2 | Humaine — QA / métier | Gate qualité insuffisant | À faire | QA-TIME-001 existe dans TOS, pas dans Time |
| **DEC-TIME-4B-005** | **Moment d'utilisation** fiche validation avant code | **Changements importants** : UI visible, punch/GPS, permissions, migrations | Humaine — responsable engineering | Changements non cadrés (TES) | À faire | Template [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md) |

---

## 4. Recommandations TOS proposées

1. **Ne pas modifier Time** tant que le WIP commissions n'est pas clarifié (DEC-TIME-4B-002).
2. **Conserver Time comme module autonome** — pas de fusion TOS/Time, pas de logique métier dans TOS.
3. **Commencer par documentation QA minimale** (Phase 4D) — scénarios, comptes logiques, smoke manuels.
4. **Appliquer TDS** uniquement après validation des écrans prioritaires (DEC-TIME-4B-003).
5. **Appliquer TES** via fiche validation sur un **vrai changement futur** — pas sur l'audit passé.
6. **Ne pas ouvrir TCP / TBF** maintenant — maturité partielle TOS.
7. **Ne pas ouvrir TKS / TAF / TOF / TRF / TMF opérationnels** maintenant — hors périmètre Phase 4D initial.

---

## 5. Critères de passage vers Phase 4D

Checklist — **toutes les cases doivent être cochées** avant ouverture Phase 4D :

| # | Critère | ☐ |
|---|---|:---:|
| 1 | **Baseline Git Time validée** (DEC-TIME-4B-001) | ☐ |
| 2 | **WIP commissions clarifié** (DEC-TIME-4B-002) | ☐ |
| 3 | **Écrans TDS prioritaires validés** (DEC-TIME-4B-003) | ☐ |
| 4 | **Scénarios QA obligatoires validés** (DEC-TIME-4B-004) | ☐ |
| 5 | **Fiche validation TES prête à utiliser** (DEC-TIME-4B-005) | ☐ |
| 6 | **Périmètre Phase 4D approuvé** — documentation uniquement dans Time | ☐ |
| 7 | **Interdictions confirmées** : aucun code, secret, migration dans Phase 4D | ☐ |

---

## 6. Phase 4D proposée

**Phase 4D — Création de documentation minimale dans TAGORA Time** (après validation humaine Phase 4C-TOS).

| Livrable Time (futur) | Pilier | Condition |
|---|---|---|
| `docs/qa/` minimal — scénarios, smoke manuels | TQF | DEC-004 validé |
| Matrice comptes QA (logiques, sans secrets) | TQF | DEC-004 validé |
| Matrice données QA + reset | TQF | DEC-004 validé |
| Première checklist TDS remplie (écran P1) | TDS | DEC-003 validé |
| Première fiche VAL-TIME-001 (si changement planifié) | TES | DEC-005 validé |

**Toujours sans code fonctionnel** — Markdown et checklists uniquement.

---

## 7. Ce qui reste interdit

- Correction ou refonte **code** Time
- Refonte **UI** non planifiée
- **Migration** Supabase ou schéma
- Lecture ou commit de **secrets** / `.env`
- **Commit ou push Time** sans validation Phase 4C-TOS
- **Mélange** dépôts TOS / Time dans une même action non cadrée

---

## 8. Conclusion

- **TOS est prêt à guider** TAGORA Time — audit 4A, plan 4B, cadre validation 4C-TOS en place.
- **Time ne doit pas encore être modifié** — en attente validations DEC-TIME-4B-001 à 005.
- **Prochaine étape** : validation humaine (registre VALD-029 à VALD-033).
- **Phase 4D** démarre **seulement** après critères §5 satisfaits et approbation explicite.

---

## Références

- [Plan Phase 4B](../plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md)
- [Audit Phase 4A](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Créé — Phase 4C-TOS** — Cadre validation. Aucune modification Time.
