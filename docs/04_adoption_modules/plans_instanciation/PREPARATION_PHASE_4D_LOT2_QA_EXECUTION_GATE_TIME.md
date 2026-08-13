# Préparation Phase 4D Lot 2 — Gate d'exécution QA TAGORA Time

**Date :** 2026-08-13
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-094
**Décision :** `NEXT_LOGICAL_PATH=OPTION_A` — `OPTION_A_SCOPE=TOS_PREPARATION_ONLY`
**Règle :** « TOS gouverne ; les modules appliquent. »

```text
STATUS=LOT_2_QA_GATE_PREPARATION_COMPLETE
PHASE_4D=IN_PROGRESS
LOT_1_STATUS=COMPLETE
LOT_2_DOCUMENT_INSTANTIATION=COMPLETE
LOT_2_REMOTE_TIP_LAST_KNOWN=754baaf23f27a3629eb1e1f36567fd3b032cd6cd
LOT_2_QA_GATE_PREPARATION=COMPLETE
LOT_2_QA_EXECUTION=NOT_STARTED
LOT_2_QA_EXECUTION_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
TIME_REPOSITORY_ACCESS=NO
```

Ce document prépare le **futur gate contrôlé** d'exécution QA Lot 2. Il **n'exécute pas** la QA Time et **n'ouvre pas** le dépôt Time.

## 1. Objectif du futur gate

Permettre à l'agent TAGORA Time, sous un **seul** GO Martin futur, de :

1. revalider le dépôt Time ;
2. vérifier branche / tip ;
3. inspecter les 5 scénarios Lot 2 déjà instanciés ;
4. valider les préconditions QA (préflight) ;
5. exécuter les 5 scénarios **seulement si** le préflight est PASS ;
6. s'arrêter automatiquement si une précondition est inconnue ou dangereuse ;
7. produire un rapport final complet ;
8. revenir à TOS.

```text
GATE_ID=TOS-PHASE-4D-LOT2-QA-EXECUTION-GO
GATE_MODE=SINGLE_CONTROLLED_GATE_PREFLIGHT_THEN_CONDITIONAL_EXECUTION
SECURITY_BEFORE_CONVENIENCE=YES
PLAYWRIGHT=NO
```

`COMPLETE` ici = préparation TOS du gate. Exécution QA = **NOT_STARTED**.

## 2. Périmètre exact

Exactement les 5 scénarios VALD-032 / VALD-090, déjà instanciés (VALD-092) :

| ID | Titre | Fichier Time | Rôle logique | Compte logique |
|---|---|---|---|---|
| QA-TIME-L2-001 | Punch in / punch out employé | `docs/qa/SCENARIO_QA_TIME_PUNCH_IN_OUT.md` | `employe` | `qa-time-employe@example.test` |
| QA-TIME-L2-002 | Punch avec GPS | `docs/qa/SCENARIO_QA_TIME_PUNCH_GPS.md` | `employe` | `qa-time-employe@example.test` |
| QA-TIME-L2-003 | GPS refusé ou absent | `docs/qa/SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md` | `employe` | `qa-time-employe@example.test` |
| QA-TIME-L2-004 | Feuille de temps soumise | `docs/qa/SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md` | `employe` | `qa-time-employe@example.test` |
| QA-TIME-L2-005 | Approbation direction | `docs/qa/SCENARIO_QA_TIME_APPROBATION_DIRECTION.md` | `direction` | `qa-time-direction@example.test` |

Aucun autre scénario. Pas de Lot 3. Pas de Playwright. Pas de code applicatif.

Dépôt cible référencé (planification) : `Oliem54/tagora-time`. Chemin local historique TOS : `C:\dev\tagora-time` (VALD-052) ; chemin observé lors des gates 4D ultérieurs : `C:\dev\TAGORA\tagora-time`. Le futur agent Time doit confirmer le chemin réel au préflight, sans ouvrir un autre module.

## 3. Préconditions Git Time

À revalider **au moment du gate** — ne pas supposer que le tip connu est encore courant.

```text
TIME_REMOTE=origin
TIME_DOCUMENTATION_BRANCH=docs/tos-phase-4d-time
LOT_2_REMOTE_TIP_LAST_KNOWN=754baaf23f27a3629eb1e1f36567fd3b032cd6cd
EXPECTED_BASE_2960A73E=SUPERSEDED_BY_OBSERVED_REMOTE_HISTORY
DIRECT_MAIN_WRITE=NO
NEW_BRANCH_REQUIRED=NO
MERGE_REQUIRED=NO
REBASE_REQUIRED=NO
CHERRY_PICK_REQUIRED=NO
CODE_WRITE=NO
```

Contrôles obligatoires avant toute exécution QA :

1. `git fetch origin`
2. Branche distante `origin/docs/tos-phase-4d-time` existe
3. Working tree local propre
4. Les 5 fichiers scénarios sont présents sur cette branche
4. Aucune divergence code hors `docs/` par rapport au tip inspecté (HOLD si code applicatif divergent non expliqué)
5. Tip actuel documenté dans le rapport (SHA exact)

Règle tip :

- Si tip = `754baaf` : préflight Git **aligné** sur la clôture VALD-092.
- Si tip **descendant** de `754baaf` et les 5 fichiers restent présents sans collision : documenter le nouveau SHA ; continuer le préflight.
- Si tip **n'est pas** descendant, ou si un scénario manque / a été remplacé : **HOLD** — pas d'exécution.
- `2960a73e` n'est **plus** une précondition active.

Après le gate Time : checkout Time libéré sur `main` (comme Lot 1). Synchronisation `main` Time = propriétaire Time, pas TOS.

## 4. Préconditions environnement QA

| Sujet | Classification | Source TOS |
|---|---|---|
| Convention prod `https://time.tagora.ca` | DEFINED_IN_TOS | VALD-093 / ADR-0004 / DEC-015 |
| Convention staging `https://time.staging.tagora.ca` | DEFINED_IN_TOS (motif URL seulement) | VALD-093 / ADR-0004 |
| DNS / déploiement réels de ces URL | NON_DEFINI — **interdit** d'assumer qu'ils existent | VALD-093 n'autorise ni DNS ni déploiement |
| Environnement QA réellement utilisable | A_CONFIRMER_BEFORE_TIME_QA / BLOCKING_FOR_TIME_EXECUTION | — |
| Interdiction d'utiliser la production | DEFINED_IN_TOS | COMPTES_QA_STANDARD, DONNEES_QA_STANDARD |

```text
QA_ENV_MUST_NOT_BE_PRODUCTION=YES
TIME_TAGORA_CA_FORBIDDEN_FOR_THIS_QA_GATE=YES
LOGIN_PATH_CONVENTION=/login
LOGIN_PATH_AVAILABLE_ON_QA_ENV=A_CONFIRMER
```

Si l'URL QA n'est pas confirmée non-production : **HOLD**. Ne pas tester sur `time.tagora.ca`.

## 5. Préconditions comptes QA

Identités **logiques** Lot 1 / Lot 2 (VALD-090) :

| Rôle | Compte logique | Usage gate |
|---|---|---|
| `employe` | `qa-time-employe@example.test` | L2-001 à L2-004 |
| `direction` | `qa-time-direction@example.test` | L2-005 |
| `admin` | `qa-time-admin@example.test` | hors périmètre d'exécution Lot 2 |

```text
REAL_ACCOUNT_CREATION=NO
qa-superviseur=NOT_AUTHORIZED_AS_CONFIRMED_ROLE
PASSWORDS_IN_TOS=FORBIDDEN
ACCOUNT_EXISTENCE_IN_TIME_ENV=BLOCKING_FOR_TIME_EXECUTION
```

Si un compte logique requis n'existe pas dans l'environnement QA : **HOLD**. Ce gate **ne crée pas** de compte réel, n'écrit pas dans Supabase Auth, et ne documente aucun mot de passe.

## 6. Données synthétiques

| ID | Libellé | Classification |
|---|---|---|
| QA-TIME-DATA-001 | Employé QA Alpha | DEFINED_IN_TOS (identité logique) ; existence Time = BLOCKING |
| QA-TIME-DATA-002 | Direction QA Alpha | DEFINED_IN_TOS (identité logique) ; existence Time = BLOCKING |
| QA-TIME-DATA-003 | Quart QA fictif | DEFINED_IN_TOS (identité logique) ; détail produit = A_CONFIRMER |
| QA-TIME-DATA-004 | Coordonnée GPS fictive | DEFINED_IN_TOS (ID seulement) ; valeur précise = BLOCKING_FOR_TIME_EXECUTION |

```text
NO_PRODUCTION_DATA=YES
NO_REAL_PII=YES
NO_REAL_GPS_COORDINATE=YES
DATABASE_RESET=NO
REMOTE_DB_WRITE=NO
```

Valeur GPS : n'inventer aucune coordonnée réelle. Si Time documente déjà une valeur **explicitement fictive** dans `MATRICE_DONNEES_QA_TIME.md` ou le scénario L2-002, l'utiliser. Sinon **HOLD** pour L2-002 / L2-003 (L2-001 / L2-004 / L2-005 peuvent continuer seulement si le préflight le permet **et** si l'absence GPS n'est pas requise pour ces trois — voir ordre).

État initial recommandé L2-001 : employé QA **sans punch ouvert** (DONNEES_QA_STANDARD). Si un punch est déjà ouvert : le clôturer avec le **même** compte QA, ou HOLD si la clôture n'est pas sûre.

## 7. Ordre recommandé d'exécution

Exécuter **seulement après préflight PASS**. Ordre :

1. **QA-TIME-L2-001** — punch in / out (critique ; sans GPS)
2. **QA-TIME-L2-004** — soumission feuille (dépend d'un cycle de punch documenté)
3. **QA-TIME-L2-005** — approbation direction (dépend d'une feuille soumise)
4. **QA-TIME-L2-002** — punch avec GPS disponible
5. **QA-TIME-L2-003** — GPS refusé ou absent (état GPS **différent** de L2-002)

L2-002 et L2-003 ne doivent pas partager le même état GPS. Après L2-002 : revenir à un état sans punch ouvert avant L2-003.

Si L2-002 / L2-003 sont BLOCKING (GPS non confirmé) mais L2-001 / 004 / 005 sont PASS : rapport **HOLD partiel** — ne pas marquer Lot 2 QA COMPLETE.

## 8. Résultat attendu par scénario

Les libellés UI exacts restent `A_CONFIRMER`. Attentes **métier** seulement :

| ID | Attente métier (sans inventer l'UI) |
|---|---|
| L2-001 | Cycle punch in → état pointé/actif observable → punch out → état clôturé ; visible dans une vue d'historique/rapport **A_CONFIRMER** |
| L2-002 | Punch avec GPS **disponible** enregistre une preuve de localisation **selon politique Time A_CONFIRMER** — ne pas assumer le format |
| L2-003 | GPS refusé **ou** absent : comportement **observé et documenté** ; **interdire** de présumer blocage, fallback ou succès silencieux (VALD-090) |
| L2-004 | Feuille de temps **soumise** ; nom de statut **A_CONFIRMER** |
| L2-005 | Direction peut approuver une feuille **soumise** ; permission exacte **A_CONFIRMER** |

Référence de structure seulement (non recopier comme faits Time) : `docs/06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md`.

## 9. Preuves à conserver

Sans secret, sans PII réel, sans mot de passe :

- SHA Time `HEAD` / `origin/docs/tos-phase-4d-time` au préflight et en fin de gate
- URL d'environnement utilisée (doit être non-production)
- Pour chaque scénario : PASS / HOLD / FAIL + une phrase d'observation
- Écarts `A_CONFIRMER` résolus ou restants
- Capture d'écran **optionnelle** si aucun PII réel n'y figure
- **Interdit** : dump DB, `.env`, token, cookie de session, coordonnée GPS réelle

Les preuves vivent dans le **rapport Time → TOS**. Ce gate n'autorise pas de modifier les 5 fichiers scénarios Time sauf si Martin l'ajoute explicitement plus tard.

## 10. Critères PASS (préflight)

Tous obligatoires :

- [ ] Dépôt = TAGORA Time uniquement
- [ ] Branche documentaire `docs/tos-phase-4d-time` confirmée
- [ ] 5 fichiers scénarios présents
- [ ] Working tree propre
- [ ] Tip documenté ; règle tip de §3 respectée
- [ ] Aucune écriture code / DB / production
- [ ] Environnement QA identifié **et** non-production
- [ ] Comptes logiques employé + direction **disponibles** dans cet environnement (sans créer de compte)
- [ ] Données 001/002/003 utilisables ; 004 résolue **ou** L2-002/003 mis en HOLD sans forcer
- [ ] Aucun secret dans les notes d'exécution

## 11. Critères HOLD

Arrêt **sans** exécution (ou arrêt avant le scénario bloqué) si :

- tip Git incompatible (§3)
- environnement QA inconnu ou production
- compte QA manquant
- `A_CONFIRMER` classé BLOCKING non résolu pour le scénario visé
- GPS : tentation d'assumer block vs fallback
- working tree sale / code hors docs inattendu
- besoin de créer un compte, écrire la DB, ou déployer

HOLD n'est pas un FAIL produit. Rapport obligatoire. Retour TOS. Lot 3 reste NO.

## 12. Critères FAIL

FAIL seulement si l'exécution **a eu lieu** et le parcours métier obligatoire échoue de façon reproductible (punch in/out impossible, soumission impossible, approbation impossible, erreur bloquante, succès silencieux contraire à L2-003).

Ne pas FAIL un scénario non exécuté. Ne pas FAIL un HOLD de préflight.

## 13. Rollback / retour état initial

```text
DATABASE_RESET=NO
REMOTE_DB_WRITE=NO
PRODUCTION_ROLLBACK=NOT_APPLICABLE
```

Autorisé : punch out du compte QA si un punch de test est resté ouvert ; ne pas approuver/soumettre d'autres feuilles que celles du jeu QA.

Interdit : reset DB distant, script de seed production, suppression de données hors jeu QA.

Checkout Time : revenir sur `main` en fin de gate, working tree propre, **sans** commit Time sauf si Martin l'a explicitement demandé pour consigner l'exécution (non demandé dans cette préparation).

## 14. Interdictions absolues

```text
NO_REAL_ACCOUNT_CREATION
NO_REAL_PASSWORD
NO_SECRET
NO_TOKEN
NO_ENV_FILE
NO_REAL_PII
NO_REAL_GPS_COORDINATE
NO_PRODUCTION_DATA
NO_PRODUCTION_URL_TESTING
NO_DATABASE_RESET
NO_REMOTE_DB_WRITE
NO_SUPABASE_AUTH_WRITE
NO_DEPLOYMENT
NO_OAUTH_CHANGE
NO_PLAYWRIGHT
NO_SPEC_TS
NO_APPLICATION_CODE
NO_LOT_3
```

## 15. Séparation documentaire vs exécutée

| État | Signification |
|---|---|
| `LOT_2_DOCUMENT_INSTANTIATION=COMPLETE` | 5 Markdown Time existent (VALD-092) |
| `LOT_2_QA_GATE_PREPARATION=COMPLETE` | Ce document TOS existe (VALD-094) |
| `LOT_2_QA_EXECUTION=NOT_STARTED` | Aucun punch / feuille / approbation de test n'a été fait sous ce gate |
| `LOT_2_QA_EXECUTION=COMPLETE` | **Interdit** de l'écrire avant un rapport Time PASS sur les 5 scénarios |

Un scénario Markdown « DRAFT » n'est pas une exécution. `DOCUMENT_STATUS=DRAFT_TOS_CONTENT_REVIEW_PASS` ≠ QA terrain.

## 16. Retour du rapport Time vers TOS

Après le gate Time, l'agent Time s'arrête et Martin (ou l'agent TOS sous GO) consigne dans TOS :

- STATUS préflight : PASS / HOLD / FAIL
- STATUS exécution par scénario
- SHA Time
- URL QA utilisée (non-prod)
- HOLD/FAIL reasons
- `LOT_2_QA_EXECUTION` mis à jour **seulement** selon les faits
- `LOT_3_AUTHORIZED` reste **NO** même si QA PASS

Pas de clôture TOS improvisée depuis Time.

## 17. Conditions de clôture Lot 2 QA

Clôture `LOT_2_QA_EXECUTION=COMPLETE` **uniquement si** :

- préflight PASS
- L2-001 à L2-005 exécutés
- aucun FAIL
- preuves §9 fournies
- validation humaine Martin du rapport

Un HOLD partiel (ex. GPS) **empêche** la clôture QA Lot 2.

## 18. Conditions empêchant Lot 3 prématuré

```text
LOT_3_AUTHORIZED=NO
LOT_3_PREPARATION=NO
QA_PASS_DOES_NOT_AUTHORIZE_LOT_3=YES
```

Même après QA Lot 2 COMPLETE, Lot 3 (TDS/TES) exige un **GO Martin distinct**. Ce gate ne prépare pas Lot 3.

## 19. Classification des A_CONFIRMER

| Sujet | Classification | Décision TOS officielle |
|---|---|---|
| 5 scénarios obligatoires | DEFINED_IN_TOS | VALD-032 |
| IDs L2-001…005 + fichiers | DEFINED_IN_TOS | VALD-090 / VALD-092 |
| Comptes / données logiques | DEFINED_IN_TOS | VALD-090 |
| Branche `docs/tos-phase-4d-time` | DEFINED_IN_TOS | VALD-085 / VALD-091 |
| Tip `754baaf` | DEFINED_IN_TOS comme last-known | VALD-092 ; revalidation obligatoire |
| `2960a73e` | DEFINED_IN_TOS comme historique supersédé | VALD-092 |
| Domaine canonique Time / staging / `/login` | DEFINED_IN_TOS (convention) | VALD-093 / ADR-0004 / DEC-015 |
| Disponibilité réelle staging/QA | BLOCKING_FOR_TIME_EXECUTION | — |
| Existence des comptes QA dans Time | BLOCKING_FOR_TIME_EXECUTION | — |
| Libellés UI exacts | NON_BLOCKING_FOR_GATE_PREPARATION ; BLOCKING_FOR_TIME_EXECUTION si le test force un libellé inventé | Observer, ne pas inventer |
| Politique GPS exacte | BLOCKING_FOR_TIME_EXECUTION (L2-002) | — |
| GPS refusé vs absent (block/fallback) | BLOCKING_FOR_TIME_EXECUTION (L2-003) | VALD-090 : ne pas assumer |
| Statuts feuille de temps | BLOCKING_FOR_TIME_EXECUTION (L2-004/005) | — |
| Permissions Direction exactes | BLOCKING_FOR_TIME_EXECUTION (L2-005) | — |
| Valeur GPS synthétique précise | BLOCKING_FOR_TIME_EXECUTION (L2-002/003) | NO_REAL_GPS_COORDINATE |
| Priorités L2-002…005 | NON_BLOCKING_FOR_GATE_PREPARATION | ordre §7 suffit |

Le préflight Time **peut** lire les 5 scénarios et les matrices Lot 1 Time pour **relever** une valeur déjà écrite. Il **ne peut pas** en inventer une.

## 20. Gouvernance du futur GO unique

Un seul GO Martin futur couvre préflight **et** exécution conditionnelle.

```text
NEXT_GATE=TOS-PHASE-4D-LOT2-QA-EXECUTION-GO
NEXT_GATE_AUTHORIZED=NO
PREFLIGHT_MANDATORY=YES
CONDITIONAL_EXECUTION=YES
SEPARATE_PREFLIGHT_GO_NOT_REQUIRED=YES
EXECUTION_WITHOUT_PREFLIGHT_PASS=FORBIDDEN
```

Si le préflight découvre un BLOCKING non résolvable sans décision produit Martin : HOLD, retour TOS — **ne pas** enchaîner l'exécution pour « finir le gate ».

## 21. Hors portée de cette préparation TOS

- Ouvrir / inspecter / écrire TAGORA Time
- Exécuter un punch, une feuille ou une approbation
- Créer des comptes
- Playwright
- Lot 3
- Nouvelle règle transversale
- DNS, déploiement, OAuth, production

## 22. Statut

```text
STATUS=LOT_2_QA_GATE_PREPARATION_COMPLETE
PHASE_4D=IN_PROGRESS
LOT_2_DOCUMENT_INSTANTIATION=COMPLETE
LOT_2_QA_GATE_PREPARATION=COMPLETE
LOT_2_QA_EXECUTION=NOT_STARTED
LOT_2_QA_EXECUTION_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
NEXT_GATE=TOS-PHASE-4D-LOT2-QA-EXECUTION-GO
NEXT_GATE_AUTHORIZED=NO
```

## Références

- [PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md](PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md)
- [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md)
- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)
- [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md)
- [DONNEES_QA_STANDARD.md](../../06_qa/DONNEES_QA_STANDARD.md)
- [ADR-0004](../../05_adr/ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md)
