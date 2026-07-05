# Plan d'action TAGORA Time — Phase 4B — TQF / TDS / TES

## 1. Contexte

| Élément | Valeur |
|---|---|
| **TOS dépôt** | `C:\dev\tagora-operating-system` |
| **TOS branche** | `main` |
| **TOS HEAD** | `8d6667ec3c5d4ec02119e74ad5f2b6fc16aec9d4` |
| **Audit source** | [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) |
| **Time dépôt** | `C:\dev\tagora-time` |
| **Time branche** | `feature/admin-commissions-premium-header-kpi` |
| **Time HEAD** | `5d4e39780690c2a93c4bb04b8f7242a686cb8c48` |
| **Time WIP** | 5 fichiers commissions — **exclus** de l'évaluation TOS |
| **Mode Phase 4B** | Plan documentaire TOS uniquement — **aucun changement dans Time** |

### Fichiers WIP Time exclus

- `src/app/admin/commissions/AdminCommissionsPageClient.tsx`
- `src/app/admin/commissions/acces-direction/AdminCommissionBookAccessClient.tsx`
- `src/app/components/admin/AdminCommissionsMetricCard.tsx`
- `src/app/components/ui/PageHeader.tsx`
- `src/app/globals.css`

---

## 2. Objectif Phase 4B

- Transformer l'**audit Phase 4A** en **plan d'action concret** par petits lots.
- Préparer les **livrables documentaires** avant toute modification code dans Time.
- Prioriser **TQF**, **TDS**, **TES** — sans refonte massive.
- Obtenir **validation humaine** des décisions ouvertes avant Phase 4C.

---

## 3. Décisions ouvertes à valider humainement

| ID | Décision | Options | Recommandation TOS | Impact | Statut |
|---|---|---|---|---|---|
| **DEC-TIME-4B-001** | Auditer Time depuis `main` stable ou branche feature actuelle ? | A : baseline `main` @ commit stable · B : feature actuelle en excluant WIP (Phase 4A) | **A pour TQF/TDS métier critique** ; B acceptable pour commissions si WIP stabilisé | Reproductibilité audit, clarté écarts TOS | À valider |
| **DEC-TIME-4B-002** | Que faire des 5 fichiers WIP commissions avant audit TDS détaillé ? | A : commit + push feature · B : stash (équipe Time) · C : exclure écrans commissions jusqu'à merge | **A** — commit WIP pour figer l'état ; revue TDS commissions **après** | Audit TDS commissions bloqué tant que WIP flotte | À valider |
| **DEC-TIME-4B-003** | Quels écrans Time prioriser pour TDS ? | Liste proposée § Lot 4 | **Punch employé + horodateur** d'abord, puis dashboard direction, commissions après stabilisation WIP | Effort revue UI, valeur métier | À valider |
| **DEC-TIME-4B-004** | Quels scénarios QA Time deviennent obligatoires ? | QA-TIME-001 seul · +002 permissions · +003 connexion rôle · +GPS | **QA-TIME-001 obligatoire** ; GPS et permissions en lot 2 | Gate release future, couverture parcours critique | À valider |
| **DEC-TIME-4B-005** | Quand utiliser la fiche validation avant code sur Time ? | Tout changement · Changements importants seulement · Commissions + punch uniquement | **Changements importants** (métier, UX visible, sécurité, permissions) — template TOS | Discipline TES sans surcharge | À valider |

---

## 4. Lot 1 — Stabilisation Git Time avant suite

| Élément | Description |
|---|---|
| **Objectif** | Établir un **point de référence Git reproductible** pour la suite Phase 4C |
| **Pourquoi** | Working tree sale + branche feature WIP rendent l'audit TDS/QA difficile à reproduire |
| **Livrables attendus** | Décision DEC-TIME-4B-001 et DEC-TIME-4B-002 actée ; branche/commit documentés dans Time ou TOS |
| **Critères de sortie** | HEAD Time identifié et stable ; WIP commissions commité ou explicitement exclu par décision |
| **Risques** | Poursuite du travail sans baseline → écarts TOS non traçables |
| **Interdictions** | Pas de reset, clean, stash ou commande destructive imposée depuis TOS ; décision **équipe Time** |

---

## 5. Lot 2 — Documentation QA minimale Time

> **Phase 4C** créera les fichiers dans Time. Phase 4B **planifie** uniquement.

| Élément | Description |
|---|---|
| **Objectif** | Préparer structure `docs/qa/` dans Time (après validation) |
| **Scénarios à prévoir** | Voir tableau ci-dessous |
| **Comptes QA** | Matrice rôles — voir Lot 3 ; alignée [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md) |
| **Données QA** | Jeu minimal resettable — aligné [DONNEES_QA_STANDARD.md](../../06_qa/DONNEES_QA_STANDARD.md) |
| **Smoke tests prioritaires** | Punch employé ; connexion par rôle ; soumission feuille de temps — aligné [SMOKE_TEST_STANDARD.md](../../06_qa/SMOKE_TEST_STANDARD.md) |
| **Interdiction** | **Ne pas créer les tests** (Playwright, scripts) dans Phase 4B ou 4C initiale |

### Scénarios QA documentaires à prévoir

| ID suggéré | Scénario | Pilier |
|---|---|---|
| QA-TIME-001 | Punch in / punch out employé | TQF — existe dans TOS, à dupliquer/adapter dans Time |
| QA-TIME-002 | Punch avec GPS (employé terrain) | TQF |
| QA-TIME-003 | Absence GPS ou permission refusée | TQF |
| QA-TIME-004 | Feuille de temps soumise | TQF |
| QA-TIME-005 | Approbation superviseur / direction | TQF |

---

## 6. Lot 3 — Matrice comptes / données QA

> Document à créer dans Time Phase 4C — **aucun vrai mot de passe** dans TOS.

### Rôles à documenter

| Identifiant logique | Rôle | Scénarios associés |
|---|---|---|
| `qa-employe` | Employé standard | QA-TIME-001, 004 |
| `qa-employe-terrain` | Employé terrain / GPS | QA-TIME-002, 003 |
| `qa-employe-batisse` | Employé bâtisse / site fixe | QA-TIME-001 variante |
| `qa-superviseur` | Superviseur | QA-TIME-005 |
| `qa-direction` | Direction | QA-TIME-005, dashboards |
| `qa-admin` | Administrateur | Config, commissions (post-WIP) |

### Données minimales à documenter

- Compagnie QA dédiée (fictive)
- Employés liés aux comptes QA
- États de temps : punch actif, terminé, en attente validation, retard
- Horaires / quarts de test reproductibles

### Données interdites dans la documentation

- Mots de passe, tokens, clés API
- Données employés réels
- Copies production non anonymisées

---

## 7. Lot 4 — Revue TDS écrans prioritaires

> Utiliser [TDS_CHECKLIST_REVUE_UI.md](../../09_design_system/TDS_CHECKLIST_REVUE_UI.md) — **revue humaine**, pas refonte.

### Écrans candidats

| Priorité | Écran / zone | Notes |
|---|---|---|
| **P1** | Employé punch | Parcours métier critique |
| **P1** | Horodateur | Pointage sur site |
| **P2** | Dashboard employé | Action principale visible |
| **P2** | Dashboard direction | Synthèse puis détails |
| **P3** | Admin commissions | **Après stabilisation WIP** (DEC-TIME-4B-002) |
| **P3** | Livre commissions / accès direction | Idem |
| **P3** | Navigation globale | Cohérence par rôle |

**Règle :** les écrans WIP commissions ne sont évalués qu'**après** Lot 1 et décision sur le WIP.

---

## 8. Lot 5 — Fiche validation avant code Time

| Élément | Description |
|---|---|
| **Template** | [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md) |
| **ID suggéré** | `VAL-TIME-001`, `VAL-TIME-002`, … |
| **Premier cas recommandé** | **Option A** : prochain changement punch / GPS · **Option B** : prochain changement admin commissions **après** stabilisation WIP |
| **Critères** | Besoin documenté · impact UX · impact QA · risques · rollback si pertinent · validation humaine |

### Seuil d'utilisation (DEC-TIME-4B-005)

| Type changement | Fiche requise |
|---|---|
| Correctif typo isolé | Non |
| Changement UI visible | Oui |
| Changement punch / permissions / GPS | Oui |
| Changement commissions admin | Oui |
| Migration schéma | Oui + ADR si écosystème |

---

## 9. Lot 6 — Préparation Phase 4C

| Élément | Description |
|---|---|
| **Objectif Phase 4C** | Créer les **premiers documents** dans le dépôt TAGORA Time |
| **Contenu prévu** | `docs/qa/` minimal · fiche revue TDS remplie · première fiche VAL-TIME (si changement planifié) |
| **Interdictions Phase 4C** | Pas de code · pas de logique métier modifiée · pas de Playwright · pas de migration Supabase |
| **Prérequis** | Décisions DEC-TIME-4B-001 à 005 validées · Lot 1 complété |

---

## 10. Matrice priorisation

| Lot | Pilier | Priorité | Effort estimé | Risque réduit | Dépendance | Statut |
|---|---|---|---|---|---|---|
| **Lot 1** | TES | **Critique** | Faible (décision) | Baseline floue | — | À faire |
| **Lot 2** | TQF | **Haute** | Moyen | Régressions punch | Lot 1 | Planifié |
| **Lot 3** | TQF | **Haute** | Moyen | Données test incohérentes | Lot 2 | Planifié |
| **Lot 4** | TDS | **Moyenne** | Moyen | Incohérence UI | Lot 1 ; DEC-002 pour commissions | Planifié |
| **Lot 5** | TES | **Moyenne** | Faible | Changements non cadrés | Lot 1 | Planifié |
| **Lot 6** | TQF/TDS/TES | **Haute** | Moyen | Retard application TOS | Lots 1–5 validés | Phase 4C |

---

## 11. Ce qui reste hors scope

- Code, correctifs, refonte Time
- Playwright réel ou tests E2E
- Correction UI ou CSS
- Migrations Supabase
- TKS, TAF, TOF, TRF, TMF opérationnels
- TCP, TBF en profondeur
- Secrets, `.env`, credentials

---

## 12. Recommandation finale

1. **Valider humainement** DEC-TIME-4B-001 à DEC-TIME-4B-005 (registre validations ou réunion courte).
2. **Stabiliser ou isoler** le WIP commissions (commit recommandé) avant revue TDS commissions.
3. **Commencer par QA minimale** — scénarios + comptes + smoke manuels (plan Lot 2–3).
4. **Ensuite TDS** sur écrans P1 (punch, horodateur) avec checklist 8 points.
5. **Ensuite TES** — première fiche VAL-TIME sur prochain changement important.
6. **Phase 4C** — création documentation dans Time, toujours sans code.

---

## Références

- [Audit Phase 4A](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md)
- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [QA-TIME-001](../../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md)
- [REGLES_DE_VALIDATION_AVANT_CODE.md](../../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md)

## Statut

**Créé — Phase 4B** — Plan documentaire. Aucune modification Time.
