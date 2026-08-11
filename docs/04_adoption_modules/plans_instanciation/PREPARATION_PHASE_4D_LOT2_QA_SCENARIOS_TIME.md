# Préparation Phase 4D Lot 2 — Scénarios QA TAGORA Time

**Date :** 2026-08-11
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-090
**Règle :** « TOS gouverne ; les modules appliquent. »

```text
STATUS=PREPARATION_COMPLETE_EXECUTION_NOT_AUTHORIZED
PHASE_4D=IN_PROGRESS
LOT_1_STATUS=COMPLETE
LOT_2_PREPARATION_STATUS=COMPLETE
LOT_2_SCOPE=QA_SCENARIOS
LOT_2_FILE_COUNT=5
LOT_2_EXECUTION_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
```

## 1. Objectif

Préparer dans TOS uniquement le **Lot 2 documentaire** Phase 4D pour TAGORA Time : cinq scénarios QA Markdown futurs, sans aucune création dans le dépôt Time.

Ce document fixe le périmètre, les dépendances Lot 1, les garde-fous et les inconnues. Il **n'autorise pas** l'exécution / instanciation dans TAGORA Time.

## 2. Gouvernance

| Champ | Valeur |
|---|---|
| **ACTIVE_PROJECT** | TAGORA_OPERATING_SYSTEM |
| **GOVERNING_PROJECT** | TAGORA_OPERATING_SYSTEM |
| **PILOT_TARGET** | TAGORA_TIME |
| **Modèle** | TOS_GOVERNED_BOUNDED_EXTERNAL_ACTION |
| **Écriture Time** | NON — préparation TOS seulement |

## 3. Dépendances Lot 1

Seules identités QA **logiques** préparées (fictives) :

| Rôle | Compte logique | Statut |
|---|---|---|
| `employe` | `qa-time-employe@example.test` | PLANNED — Lot 1 |
| `direction` | `qa-time-direction@example.test` | PLANNED — Lot 1 |
| `admin` | `qa-time-admin@example.test` | PLANNED — Lot 1 |

```text
qa-superviseur=NOT_AUTHORIZED_AS_CONFIRMED_ROLE
REAL_ACCOUNT_CREATION=NO
```

Données Lot 1 référencées (toutes synthétiques) :

| ID | Valeur | Statut |
|---|---|---|
| QA-TIME-DATA-001 | Employé QA Alpha | PLANNED / SYNTHETIC_ONLY |
| QA-TIME-DATA-002 | Direction QA Alpha | PLANNED / SYNTHETIC_ONLY |
| QA-TIME-DATA-003 | Quart QA fictif | PLANNED / SYNTHETIC_ONLY |
| QA-TIME-DATA-004 | Coordonnée GPS fictive | PLANNED / SYNTHETIC_ONLY / valeur précise TO_CONFIRM |

```text
NO_PRODUCTION_DATA=YES
```

## 4. Fichiers futurs exacts (dépôt Time — non créés ici)

Chemins relatifs au dépôt `Oliem54/tagora-time` :

1. `docs/qa/SCENARIO_QA_TIME_PUNCH_IN_OUT.md`
2. `docs/qa/SCENARIO_QA_TIME_PUNCH_GPS.md`
3. `docs/qa/SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md`
4. `docs/qa/SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md`
5. `docs/qa/SCENARIO_QA_TIME_APPROBATION_DIRECTION.md`

Aucun autre scénario Lot 2.

## 5. Identifiants documentaires Lot 2

| ID | Titre |
|---|---|
| QA-TIME-L2-001 | Punch in / punch out employé |
| QA-TIME-L2-002 | Punch avec GPS |
| QA-TIME-L2-003 | GPS refusé ou absent |
| QA-TIME-L2-004 | Feuille de temps soumise |
| QA-TIME-L2-005 | Approbation direction |

Ces IDs sont propres au Lot 2 Phase 4D. Le scénario historique TOS `QA-TIME-001` reste inchangé (référence de structure / risques uniquement).

## 6. Mapping des 5 scénarios

### QA-TIME-L2-001

```text
FILE=SCENARIO_QA_TIME_PUNCH_IN_OUT.md
ROLE=employe
ACCOUNT=qa-time-employe@example.test
DATA=QA-TIME-DATA-001,QA-TIME-DATA-003
PRIORITY=CRITICAL_REFERENCE_FROM_EXISTING_QA_TIME_001
PURPOSE=cycle punch in -> punch out
EXACT_UI_LABELS=TO_CONFIRM
```

### QA-TIME-L2-002

```text
FILE=SCENARIO_QA_TIME_PUNCH_GPS.md
ROLE=employe
ACCOUNT=qa-time-employe@example.test
DATA=QA-TIME-DATA-001,QA-TIME-DATA-003,QA-TIME-DATA-004
PRIORITY=TO_CONFIRM
GPS_VALUE=SYNTHETIC_ONLY_TO_DEFINE_DURING_INSTANTIATION
PURPOSE=punch avec GPS disponible
EXACT_GPS_POLICY=TO_CONFIRM
```

### QA-TIME-L2-003

```text
FILE=SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md
ROLE=employe
ACCOUNT=qa-time-employe@example.test
DATA=QA-TIME-DATA-001,QA-TIME-DATA-003,QA-TIME-DATA-004
PRIORITY=TO_CONFIRM
PURPOSE=GPS refusé/indisponible
EXPECTED_POLICY=TO_CONFIRM_FROM_TIME
RULE=DO_NOT_ASSUME_BLOCK_OR_FALLBACK
RULE=NO_SILENT_SUCCESS_EXPECTATION
```

### QA-TIME-L2-004

```text
FILE=SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md
ROLE=employe
ACCOUNT=qa-time-employe@example.test
DATA=QA-TIME-DATA-001,QA-TIME-DATA-003
PRIORITY=TO_CONFIRM
PURPOSE=soumission feuille de temps
WORKFLOW_STATUS_NAMES=TO_CONFIRM
```

### QA-TIME-L2-005

```text
FILE=SCENARIO_QA_TIME_APPROBATION_DIRECTION.md
ROLE=direction
ACCOUNT=qa-time-direction@example.test
DATA=QA-TIME-DATA-002,QA-TIME-DATA-003
PRIORITY=TO_CONFIRM
PURPOSE=approbation d'une feuille soumise
EXACT_PERMISSION=TO_CONFIRM
EXACT_UI_LABELS=TO_CONFIRM
```

## 7. Structure obligatoire des futurs scénarios

Template source TOS : `docs/04_adoption_modules/templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md`

Chaque futur scénario Time devra contenir :

- objectif ;
- rôle logique ;
- compte logique ;
- données QA ;
- préconditions ;
- étapes ;
- résultats attendus ;
- risques ;
- critères d'acceptation ;
- points à confirmer ;
- validation humaine future.

Tout détail produit non confirmé : `A_CONFIRMER` ou `NON_DEFINI_DANS_CE_LOT`.

## 8. Garde-fous

```text
NO_REAL_PASSWORD
NO_SECRET
NO_TOKEN
NO_ENV_FILE
NO_REAL_PII
NO_REAL_GPS_COORDINATE
NO_PRODUCTION_DATA
NO_REAL_ACCOUNT_CREATION
NO_SUPABASE_AUTH_WRITE
NO_DATABASE_RESET
NO_PLAYWRIGHT
NO_SPEC_TS
NO_APPLICATION_CODE
NO_DEPLOYMENT
```

## 9. Inconnues à confirmer avant / pendant instanciation

| Sujet | Statut |
|---|---|
| Libellés UI exacts | TO_CONFIRM |
| Politique GPS exacte | TO_CONFIRM |
| Comportement GPS refusé / absent (block vs fallback) | TO_CONFIRM — ne pas assumer |
| Noms de statuts workflow feuille de temps | TO_CONFIRM |
| Permissions exactes direction | TO_CONFIRM |
| Priorités L2-002 à L2-005 | TO_CONFIRM |
| Valeur GPS synthétique précise | TO_CONFIRM à l'instanciation |
| Stratégie de branche Git Time pour Lot 2 | DÉCIDÉE — Option A (VALD-091) |

## 10. Stratégie Git Time

```text
LOT_2_TARGET_BRANCH_STRATEGY=OPTION_A_REUSE_EXISTING_PHASE4D_DOCUMENTATION_BRANCH
TIME_REPOSITORY_INSPECTION_REQUIRED_BEFORE_LOT2=YES
TIME_WRITE_AUTHORIZED=NO
```

Historique : la préparation initiale laissait la stratégie `TO_DECIDE_BEFORE_EXECUTION`. L'inspection read-only et la décision humaine Martin (VALD-091) sont enregistrées ci-dessous.

## 10bis. Décision stratégie Git Lot 2

**Date :** 2026-08-11
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-091
**Inspection read-only :** PASS

```text
INSPECTION_READONLY_STATUS=PASS

LOT_2_BRANCH_STRATEGY=OPTION_A_REUSE_EXISTING_PHASE4D_DOCUMENTATION_BRANCH
LOT_2_TARGET_BRANCH=docs/tos-phase-4d-time
LOT_2_TARGET_BASE_SHA=2960a73e1bcefd35dce81969157af213c83fafd2

NEW_BRANCH_REQUIRED=NO
DIRECT_MAIN_WRITE=NO
MERGE_REQUIRED=NO
REBASE_REQUIRED=NO
CHERRY_PICK_REQUIRED=NO

LOT1_DEPENDENCIES_ALREADY_PRESENT=YES
LOT2_PATH_COLLISION=NO

STRATEGY_DECIDED=YES
STRATEGY_VALIDATION=VALD-091

LOT_2_EXECUTION_STATUS=NOT_STARTED
LOT_2_EXECUTION_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
```

### Garde-fous de future exécution

```text
PRE_EXECUTION_REMOTE_REVALIDATION_REQUIRED=YES
PRE_EXECUTION_CODE_DIVERGENCE_REVALIDATION_REQUIRED=YES
LOCAL_DOC_BRANCH_RECONCILIATION_MAY_BE_INCLUDED_IN_PARENT_GATE=YES_IF_EXACT_PRECONDITIONS_PASS
STANDALONE_BRANCH_SWITCH_GATE_REQUIRED=NO
```

Le futur gate parent d'instanciation pourra, sous GO Martin séparé, effectuer les prérequis Git minimaux nécessaires (fetch ciblé, switch branche documentaire et fast-forward strict si requis), seulement si les SHA et l'état propre attendus sont confirmés.

Aucune de ces actions n'est exécutée ici.

## 11. Hors portée

- Création de fichiers dans TAGORA Time
- Création de comptes QA réels
- Playwright / `.spec.ts`
- Code, DB, migration, Supabase
- Staging / production
- Lot 3 (TDS / TES)
- Modification du scénario historique `QA-TIME-001`

## 12. Statut

```text
STATUS=PREPARATION_COMPLETE_EXECUTION_NOT_AUTHORIZED
PHASE_4D=IN_PROGRESS
LOT_1_STATUS=COMPLETE
LOT_2_PREPARATION_STATUS=COMPLETE
LOT_2_SCOPE=QA_SCENARIOS
LOT_2_FILE_COUNT=5
LOT_2_BRANCH_STRATEGY_DECIDED=YES
LOT_2_TARGET_BRANCH=docs/tos-phase-4d-time
LOT_2_TARGET_BASE_SHA=2960a73e1bcefd35dce81969157af213c83fafd2
LOT_2_EXECUTION_STATUS=NOT_STARTED
LOT_2_EXECUTION_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
NEXT_GATE=TOS-PHASE-4D-LOT2-QA-SCENARIOS-INSTANTIATION-GO
NEXT_GATE_AUTHORIZED=NO
```

## Références

- [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md)
- [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md)
- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)
- Référence structure historique (non recopié comme faits confirmés) : [QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md](../../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md)
