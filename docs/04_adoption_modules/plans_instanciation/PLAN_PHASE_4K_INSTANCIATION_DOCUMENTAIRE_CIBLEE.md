# Plan d'instanciation documentaire ciblée — Phase 4K-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Phase 4J-TOS** | Porte de passage validée — [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) |
| **Phase 4K-TOS** | **Présent document** — plan d'instanciation ciblée |
| **Module pilote** | **TAGORA Time** — référence uniquement, **non modifié** |
| **Règle** | Aucun autre dépôt n'est ouvert ; aucun module pilote n'est modifié |

La Phase 4J a validé la porte de passage vers une future instanciation documentaire. Phase 4K **prépare un plan ciblé** — sans confondre planification TOS et action dans un dépôt module.

**Interdictions absolues de cette phase :** aucun code, migration, refonte ou outil réel.

---

## 2. Cible documentaire future

| Champ | Valeur |
|---|---|
| **Module cible** | TAGORA Time |
| **Dépôt cible référencé** | `C:\dev\tagora-time` |
| **Branche cible prévue** | `main` |
| **Statut du dépôt cible** | À vérifier plus tard, dans une phase séparée |
| **Nature de l'action future** | Instanciation documentaire seulement |
| **Action actuelle** | Documentation TOS uniquement |

> **Précision obligatoire :** le dépôt cible est nommé **à titre de planification seulement**. Il **ne doit pas être ouvert ni modifié** dans la Phase 4K-TOS.

---

## 3. Périmètre documentaire futur autorisé

Seuls les types de documents suivants pourront être instanciés **dans une phase ultérieure validée** :

| Type | Description |
|---|---|
| Documents QA minimaux | Scénarios et matrices de test |
| Scénarios QA prioritaires | Parcours critiques punch, GPS, feuille de temps |
| Matrice comptes QA | Rôles et identifiants logiques (sans secrets) |
| Matrice données QA | Données fictives ou anonymisées |
| Checklist TDS | Revue UX/UI écrans P1 |
| Fiche validation avant code | Garde-fou TES avant changement code |
| README d'application TOS | Fiche d'identité application dans le module |
| Plan documentaire d'application TOS | Lots TQF → TDS → TES |

---

## 4. Hors portée

Les éléments suivants restent **strictement interdits** :

| Interdit | Détail |
|---|---|
| Code fonctionnel | Aucune application, composant ou script métier |
| Migration | Schéma et données non touchés |
| Supabase | Infrastructure non cadrée ici |
| CRUD | Logique métier non modifiée |
| Refonte UI | Templates TDS = revue, pas refonte |
| Changement de workflow | TOF documenté uniquement |
| Automatisation réelle | Pas de Playwright, CI, tests `.spec.ts` |
| Agent IA réel | TAF documenté uniquement |
| Déploiement | TRF s'applique après validations ultérieures |
| Modification de configuration | `.env`, secrets, tokens |
| Lecture ou création de secret | Interdit dans toute phase documentaire |
| Fichier hors périmètre §3 | Tout fichier non listé au §5 |

---

## 5. Fichiers documentaires futurs proposés

> **Ces fichiers sont proposés seulement.** Ils **ne doivent pas être créés** dans la Phase 4K-TOS ni sans validation Phase 4L-TOS.

| Fichier futur proposé | Type | Pilier TOS | Source template TOS | Statut | Notes |
|---|---|---|---|---|---|
| `docs/tos/APPLICATION_TOS_README.md` | README application TOS | TOS global | [TEMPLATE_APPLICATION_PILOTE_README.md](../templates_pilotes/TEMPLATE_APPLICATION_PILOTE_README.md) | Proposé | Fiche d'identité application dans le module |
| `docs/tos/PLAN_APPLICATION_TOS_TIME.md` | Plan application | TOS global | [TEMPLATE_PILOTE_PLAN_APPLICATION.md](../templates_pilotes/TEMPLATE_PILOTE_PLAN_APPLICATION.md) | Proposé | Lots TQF → TDS → TES |
| `docs/qa/SCENARIO_QA_TIME_PUNCH_IN_OUT.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_PUNCH_GPS.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_APPROBATION_DIRECTION.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/MATRICE_COMPTES_QA_TIME.md` | Matrice comptes QA | TQF | [TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md) | Proposé | Sans secrets ni mots de passe réels |
| `docs/qa/MATRICE_DONNEES_QA_TIME.md` | Matrice données QA | TQF | [TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md) | Proposé | Données fictives ou anonymisées |
| `docs/tds/CHECKLIST_TDS_TIME_PUNCH_HORODATEUR_DASHBOARD.md` | Checklist TDS | TDS | [TEMPLATE_PILOTE_CHECKLIST_TDS.md](../templates_pilotes/TEMPLATE_PILOTE_CHECKLIST_TDS.md) | Proposé | VALD-031 — écrans P1 punch, horodateur, dashboard |
| `docs/tes/VALIDATION_AVANT_CODE_TIME_PUNCH_GPS.md` | Fiche validation avant code | TES | [TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md](../templates_pilotes/TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md) | Proposé | VALD-033 — avant changement punch/GPS |

> Chemins relatifs au **dépôt cible** `C:\dev\tagora-time` — à créer uniquement après validation Phase 4L-TOS.

---

## 6. Conditions avant toute instanciation réelle

Checklist — **toutes les conditions requises** avant toute création de fichier dans le dépôt cible :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | **Validation humaine Phase 4L-TOS** obtenue | ☐ |
| 2 | **Dépôt cible** confirmé (`C:\dev\tagora-time`) | ☐ |
| 3 | **Branche cible** confirmée (`main`) | ☐ |
| 4 | **Baseline Git cible** propre (commit, WIP clarifié) | ☐ |
| 5 | **Aucun WIP non clarifié** | ☐ |
| 6 | **Liste des fichiers autorisés** confirmée (§5) | ☐ |
| 7 | **Aucun secret à lire** — pas de `.env`, credentials, tokens | ☐ |
| 8 | **Aucun code à créer** — documentation Markdown uniquement | ☐ |
| 9 | **Aucune migration** | ☐ |
| 10 | **Rollback documentaire prévu** — procédure de retrait si erreur | ☐ |
| 11 | **Rapport attendu** défini avant toute action | ☐ |

---

## 7. Ordre recommandé pour une future phase

Séquence recommandée **après validation Phase 4L-TOS** :

| # | Étape |
|:---:|---|
| 1 | Valider le plan 4K humainement (Phase 4L-TOS) |
| 2 | Confirmer le dépôt cible et la branche cible |
| 3 | Vérifier **uniquement** l'état Git du dépôt cible (lecture seule) |
| 4 | Créer **uniquement** les dossiers documentaires autorisés |
| 5 | Instancier les templates validés (§5) |
| 6 | Ne créer **aucun code** |
| 7 | Produire un rapport |
| 8 | Arrêter **avant tout commit** dans le dépôt cible |
| 9 | Faire une sauvegarde Git séparée **si autorisée** par validation humaine |

---

## 8. Risques

| Risque | Mitigation |
|---|---|
| Ouvrir le **mauvais dépôt** | Nommer explicitement `C:\dev\tagora-time` ; vérifier chemin avant toute action |
| Confondre **planification TOS** et **action réelle** | Phase 4K = TOS uniquement ; Phase 4L requise avant dépôt cible |
| Créer des **fichiers non autorisés** | Liste §5 exhaustive ; aucun fichier hors liste |
| Créer du **code par erreur** | §4 interdictions ; templates Markdown uniquement |
| Lire un **`.env`** | Interdit ; aucune lecture de secret |
| Modifier **TAGORA Time** sans validation | Phase 4L-TOS obligatoire |
| Mélanger **QA documentaire** et **test automatisé réel** | Scénarios Markdown ≠ fichiers `.spec.ts` |
| Oublier de **vérifier la baseline Git cible** | VALD-029, VALD-030 ; étape 3 de la séquence §7 |

---

## 9. Règle de contrôle Phase 4K

> **La Phase 4K-TOS ne donne aucune permission d'action dans le dépôt cible.**
>
> Elle sert seulement à documenter le plan, les fichiers proposés et les conditions de passage.
>
> Une **Phase 4L-TOS** devra valider humainement ce plan avant toute préparation dans un autre dépôt.

---

## 10. Décision de sortie Phase 4K

| Champ | Valeur |
|---|---|
| **Plan 4K approuvé par** | *À remplir* |
| **Date** | *À remplir* |
| **Statut** | ☐ À valider · ☐ Validé · ☐ Reporté · ☐ À clarifier |
| **Notes** | *À remplir* |

> Validation humaine requise : VALD-050 à VALD-056.

---

## 11. Conclusion

- Le **plan d'instanciation ciblée** est préparé dans TOS.
- **TAGORA Time reste intact** — dépôt non ouvert, non modifié.
- **Nexus reste intact** — hors périmètre.
- La **prochaine étape** est une **validation humaine du plan 4K** (Phase 4L-TOS).
- **Aucune instanciation réelle** ne commence encore.

---

## Addendum post Phase 4S — stratégie de branche actualisée

**Date addendum :** 2026-08-10
**Source de décision :** Phase 4S — VALD-083 / VALD-084
**Document :** [VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md](VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md)

```text
ORIGINAL_4K_PLANNED_BRANCH=main
CURRENT_BASELINE_SOURCE=main
CURRENT_DOCUMENTATION_BRANCH_STRATEGY=DEDICATED_BRANCH_FROM_MAIN
DOCUMENTATION_BRANCH_NAME=docs/tos-phase-4d-time
SOURCE_DECISION=PHASE_4S_VALD_083_VALD_084

PHASE_4D_DOCUMENTATION_BRANCH_DECISION=VALIDATED
DOCUMENTATION_BRANCH_SOURCE=main
DOCUMENTATION_BRANCH_PURPOSE=PHASE_4D_DOCUMENTATION_ONLY
COMMISSIONS_FEATURE_EXCLUDED=feature/admin-commissions-premium-header-kpi
DIRECT_WRITE_TO_MAIN=NO
TIME_BRANCH_CREATION_AUTHORIZED_IN_THIS_BLOCK=NO
TIME_WRITE_AUTHORIZED_IN_THIS_BLOCK=NO

DOCUMENTATION_BRANCH_NAME_DECISION_DATE=2026-08-10
DOCUMENTATION_BRANCH_NAME_DECIDED_BY=Martin ST-Gelais — Direction
DOCUMENTATION_BRANCH_CREATION_STATUS=LOCAL_CREATED_NOT_PUSHED
DOCUMENTATION_BRANCH_VALIDATION_STATUS=VALIDATED
DOCUMENTATION_BRANCH_LOCAL_HEAD=815ac4d49302ae597bbdcd4a15b76163063d4b56
DOCUMENTATION_BRANCH_MAIN_HEAD=815ac4d49302ae597bbdcd4a15b76163063d4b56
DOCUMENTATION_BRANCH_DIVERGENCE=0_0
DOCUMENTATION_BRANCH_WORKING_TREE_CLEAN=YES
DOCUMENTATION_BRANCH_FILES_DIFFERENT_FROM_MAIN=0
DOCUMENTATION_BRANCH_REMOTE_STATUS=NOT_CREATED
DOCUMENTATION_BRANCH_PUSH_STATUS=NOT_EXECUTED
DOCUMENTATION_INSTANTIATION_STATUS=NOT_STARTED
BRANCH_CREATION_OBJECTIVE=SATISFIED
SEPARATE_GO_REQUIRED=YES

LAST_BRANCH_CREATION_RERUN_VERDICT=HOLD
LAST_BRANCH_CREATION_RERUN_HOLD_REASON=DOCUMENTATION_BRANCH_ALREADY_EXISTS_LOCAL
LOCAL_BRANCH_STATUS=CREATED_PREVIOUSLY_AND_VALIDATED
LOCAL_BRANCH_CREATED_DURING_LAST_RERUN=NO
LOCAL_BRANCH_VALIDATED=YES
```

| Précision | Contenu |
|---|---|
| Historique 4K | La mention de `main` comme **branche cible prévue** (§2, checklist §6) reste dans le texte historique ci-dessus. |
| Baseline source | `main` reste la **baseline SOURCE** propre confirmée (VALD-083). |
| Exécution future | La future instanciation documentaire **ne doit plus écrire directement dans `main`**. |
| Stratégie actuelle | Branche documentaire dédiée créée **depuis `main`** (VALD-084 / Option D). |
| Nom validé | `docs/tos-phase-4d-time` (VALD-085) |
| Création locale | **LOCAL_CREATED_NOT_PUSHED** — validée VALD-086 |
| Instanciation docs | **NOT_STARTED** |

### Note — historique exact du dernier rerun de création

Le dernier rerun de création a retourné **HOLD** parce que la branche locale existait déjà (`DOCUMENTATION_BRANCH_ALREADY_EXISTS_LOCAL`).

Cet HOLD **n'indique pas** un échec de l'objectif.

L'état factuel validé est :

- branche locale présente ;
- branche active correcte (`docs/tos-phase-4d-time`) ;
- même SHA que `main` (`815ac4d49302ae597bbdcd4a15b76163063d4b56`) ;
- divergence `0/0` ;
- working tree propre ;
- aucun fichier différent de `main` ;
- aucune branche distante ;
- aucun push ;
- aucun document Phase 4D créé.

```text
BRANCH_CREATION_OBJECTIVE=SATISFIED
LOCAL_BRANCH_STATUS=CREATED_PREVIOUSLY_AND_VALIDATED
```

### Règles de la branche future `docs/tos-phase-4d-time`

1. Créée uniquement depuis le `main` propre confirmé.
2. Dédiée à la documentation Phase 4D.
3. Ne doit contenir aucun travail commissions.
4. Ne doit **pas** être créée depuis `feature/admin-commissions-premium-header-kpi`.
5. Aucun merge / rebase de la feature commissions n'est autorisé.
6. Aucun code fonctionnel n'est autorisé dans la branche documentaire.
7. Aucune DB / migration / Supabase n'est autorisée.
8. Seuls les fichiers documentaires déjà validés par TOS pourront être instanciés.
9. Création de la branche = **GO Martin séparé**.
10. Commit / push des documents Time = autorisation séparée selon le gate défini.

Le corps historique du plan 4K n'est **pas** réécrit. Cet addendum gouverne l'usage opérationnel futur.

---

## Phase 4D — Préparation Lot 1 documentaire

**Date :** 2026-08-10
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-087

```text
PHASE_4S=COMPLETE
PHASE_4D_DOCUMENTATION_BRANCH_NAME=docs/tos-phase-4d-time
PHASE_4D_BRANCH_NAME_VALIDATION=VALD_085
PHASE_4D_LOCAL_BRANCH_VALIDATION=VALD_086
DOCUMENTATION_BRANCH_STATUS=LOCAL_CREATED_NOT_PUSHED
TIME_BASELINE_SHA=815ac4d49302ae597bbdcd4a15b76163063d4b56
LOCAL_BRANCH_READY=YES
REMOTE_BRANCH_CREATED=NO
TIME_DOCUMENTATION_STARTED=NO

PHASE_4D_LOT_1_PREPARATION=COMPLETE
PHASE_4D_DOCUMENTATION_LOT_1=FOUNDATION_AND_QA_MATRICES
LOT_1_FILE_COUNT=4
LOT_1_EXECUTION_STATUS=NOT_STARTED
TIME_ACCESSED_DURING_PREPARATION=NO
TIME_MODIFIED_DURING_PREPARATION=NO
```

### Lot 1 — fichiers (préparation TOS seulement)

| # | Fichier futur (dépôt Time) | Template source TOS |
|---|---|---|
| 1 | `docs/tos/APPLICATION_TOS_README.md` | [TEMPLATE_APPLICATION_PILOTE_README.md](../templates_pilotes/TEMPLATE_APPLICATION_PILOTE_README.md) |
| 2 | `docs/tos/PLAN_APPLICATION_TOS_TIME.md` | [TEMPLATE_PILOTE_PLAN_APPLICATION.md](../templates_pilotes/TEMPLATE_PILOTE_PLAN_APPLICATION.md) |
| 3 | `docs/qa/MATRICE_COMPTES_QA_TIME.md` | [TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md) |
| 4 | `docs/qa/MATRICE_DONNEES_QA_TIME.md` | [TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md) |

```text
LOT_1_FILE_1=docs/tos/APPLICATION_TOS_README.md
LOT_1_FILE_2=docs/tos/PLAN_APPLICATION_TOS_TIME.md
LOT_1_FILE_3=docs/qa/MATRICE_COMPTES_QA_TIME.md
LOT_1_FILE_4=docs/qa/MATRICE_DONNEES_QA_TIME.md
```

### Raison du découpage

Le premier lot est volontairement limité afin de :

- établir l'identité documentaire TOS du module Time ;
- établir le plan d'application TOS propre à Time ;
- établir la matrice des comptes QA ;
- établir la matrice des données QA ;
- préparer les bases avant les scénarios QA détaillés ;
- éviter d'instancier les 11 documents en une seule opération.

Les cinq scénarios QA détaillés restent pour un lot ultérieur.
La checklist TDS et la validation TES restent également dans un lot ultérieur.
Aucun fichier déjà prévu par le plan 4K (§5) n'est supprimé.

### Garde-fous contenu futur (gate d'instanciation)

| Fichier | Garde-fous |
|---|---|
| `APPLICATION_TOS_README` | Identité, rôle, gouvernance TOS, périmètre, références — **aucune donnée sensible** |
| `PLAN_APPLICATION_TOS_TIME` | Ordre TQF → TDS → TES ; lots ; gates ; dépendances — **aucun changement fonctionnel** |
| `MATRICE_COMPTES_QA_TIME` | Rôles logiques uniquement — **aucun** vrai mot de passe, secret, credential ou donnée d'auth sensible |
| `MATRICE_DONNEES_QA_TIME` | Données fictives ou anonymisées seulement — **aucun** PII réel non nécessaire, secret, ni copie production |

### Lots futurs — planification seulement

```text
LOT_2_PLANNED=QA_SCENARIOS
LOT_2_FILES_PLANNED=5
LOT_2_AUTHORIZED=NO
```

- `docs/qa/SCENARIO_QA_TIME_PUNCH_IN_OUT.md`
- `docs/qa/SCENARIO_QA_TIME_PUNCH_GPS.md`
- `docs/qa/SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md`
- `docs/qa/SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md`
- `docs/qa/SCENARIO_QA_TIME_APPROBATION_DIRECTION.md`

```text
LOT_3_PLANNED=TDS_AND_TES
LOT_3_FILES_PLANNED=2
LOT_3_AUTHORIZED=NO
```

- `docs/tds/CHECKLIST_TDS_TIME_PUNCH_HORODATEUR_DASHBOARD.md`
- `docs/tes/VALIDATION_AVANT_CODE_TIME_PUNCH_GPS.md`

**Aucun fichier Time n'est créé dans ce bloc.**
Prochain gate d'exécution : `TOS-PHASE-4D-FIRST-DOCUMENTATION-LOT-INSTANTIATION-GO` (GO Martin séparé).

---

## Phase 4D — Recadrage gouvernance TOS

**Date :** 2026-08-10
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-088

Ce recadrage formalise que TOS reste toujours le projet gouvernant ; TAGORA Time reste uniquement la cible pilote séparée. Il **ne** crée **aucun** fichier Time et **n'autorise** aucune exécution Lot 1.

```text
PHASE_4D_GOVERNANCE_RECENTERING=COMPLETE
ACTIVE_PROJECT=TAGORA_OPERATING_SYSTEM
GOVERNING_PROJECT=TAGORA_OPERATING_SYSTEM
PILOT_TARGET=TAGORA_TIME
TARGET_ACTION_MODEL=TOS_GOVERNED_BOUNDED_EXTERNAL_ACTION
PROJECT_SWITCH_REQUIRED=NO
RETURN_TO_TOS_AFTER_TARGET_ACTION=MANDATORY

STANDALONE_BRANCH_SWITCH_GATE_REQUIRED=NO
LOT_1_PARENT_GATE_MAY_SWITCH_TARGET_BRANCH=YES_IF_PRECONDITIONS_PASS

TIME_BASELINE_SHA=815ac4d49302ae597bbdcd4a15b76163063d4b56
DOCUMENTATION_BRANCH=docs/tos-phase-4d-time
VALD_085=VALIDATED
VALD_086=VALIDATED
VALD_087=VALIDATED

LOT_1_SCOPE=FOUNDATION_AND_QA_MATRICES
LOT_1_FILE_COUNT=4
LOT_1_EXECUTION_STATUS=NOT_STARTED
TIME_DOCUMENTATION_STARTED=NO

LAST_LOT_1_INSTANTIATION_ATTEMPT=HOLD
LAST_LOT_1_HOLD_REASON=ACTIVE_BRANCH_IS_MAIN_NOT_DOCUMENTATION_BRANCH
LAST_LOT_1_FILES_CREATED=0

NEXT_GATE=TOS-PHASE-4D-FIRST-DOCUMENTATION-LOT-INSTANTIATION-GO
NEXT_GATE_PROMPT_VERSION=RECENTERED_V2
PREVIOUS_LOT_1_INSTANTIATION_PROMPT_REUSE=NO
TARGET_BRANCH_PRECONDITION_HANDLED_INSIDE_GATE=YES

LOT_2_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
```

### Interprétation du HOLD Lot 1

Le HOLD `ACTIVE_BRANCH_IS_MAIN_NOT_DOCUMENTATION_BRANCH` **n'est pas** un échec de la Phase 4D. Il indique seulement que le futur gate parent (prompt `RECENTERED_V2`) doit gérer lui-même le prérequis de branche documentaire déjà validée, sans gate administratif autonome de simple `git switch`.

Le futur gate V2 pourra, sous GO Martin distinct : vérifier Time ; si nécessaire switcher de `main` vers `docs/tos-phase-4d-time` (préconditions passées) ; créer exactement les 4 fichiers Lot 1 ; STOP avant commit/push.

**Inchangé par ce recadrage :** périmètre Lot 1 (4 fichiers) ; baseline Time ; branche documentaire validée ; exclusion commissions `feature/admin-commissions-premium-header-kpi`.

---

## Addendum — clôture effective Phase 4D Lot 1

**Date :** 2026-08-11
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-089

Cet addendum enregistre la **clôture effective** du Lot 1 documentaire dans le dépôt cible TAGORA Time. Il ne remplace pas la baseline Phase 4D d'origine et n'autorise ni Lot 2 ni Lot 3.

```text
TIME_ORIGINAL_BASELINE=815ac4d49302ae597bbdcd4a15b76163063d4b56

LOT_1_SCOPE=FOUNDATION_AND_QA_MATRICES
LOT_1_FILE_COUNT=4
LOT_1_EXECUTION_STATUS=COMPLETE
LOT_1_CONTENT_REVIEW=PASS
LOT_1_INITIAL_CHECKPOINT=f2bce3e896f5f7bdb981c39bcd27afc76fb8c9c1
LOT_1_CLOSURE_COMMIT=2960a73e1bcefd35dce81969157af213c83fafd2
LOT_1_REMOTE_BRANCH=docs/tos-phase-4d-time
REMOTE_BRANCH_CREATED=YES
TIME_DOCUMENTATION_STARTED=YES
LOT_1_WORK_COMMITTED=YES
LOT_1_WORK_PUSHED=YES
LOT_1_WORK_SAFELY_SAVED=YES
TIME_CHECKOUT_RELEASED_TO_MAIN=YES

LOT_2_EXECUTION_STATUS=NOT_STARTED
LOT_2_AUTHORIZED=NO
LOT_3_EXECUTION_STATUS=NOT_STARTED
LOT_3_AUTHORIZED=NO

PHASE_4D=IN_PROGRESS
CODE_MODIFIED_BY_PHASE_4D_LOT1=NO
DATABASE_MODIFIED=NO
COMMISSIONS_FEATURE_MODIFIED=NO
R2_TIME_MODIFIED=NO
```

**Précision obligatoire :** `TIME_ORIGINAL_BASELINE` reste `815ac4d49302ae597bbdcd4a15b76163063d4b56`. Elle n'est **pas** remplacée par le `main` Time plus récent (`93e99cb…` à la libération du checkout).

---

## Références

- [Validation Phase 4J](../paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md)
- [Paquet final Phase 4I](../paquets_pilotes/PAQUET_FINAL_PHASE_4I_TRANSITION_APPLICATION_DOCUMENTAIRE.md)
- [Templates application pilote](../templates_pilotes/README_TEMPLATES_APPLICATION_PILOTE.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [Validation Phase 4S](VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Créé — Phase 4K-TOS** — Plan d'instanciation ciblée. Validations VALD-050 à 056 **À faire**.
**Addendum 2026-08-10** — stratégie de branche alignée Phase 4S (VALD-083 / VALD-084).
**Nom de branche Phase 4D** — `docs/tos-phase-4d-time` validé (VALD-085).
**État local** — **LOCAL_CREATED_NOT_PUSHED** ; validé VALD-086.
**Lot 1** — préparation **COMPLETE** (VALD-087) ; exécution **COMPLETE** (VALD-089) ; Lots 2/3 non autorisés.
**Recadrage gouvernance Phase 4D** — **COMPLETE** (VALD-088).
**Clôture Lot 1** — **COMPLETE** (VALD-089) ; branche distante `docs/tos-phase-4d-time` @ `2960a73e` ; Phase 4D globale **IN_PROGRESS**.
