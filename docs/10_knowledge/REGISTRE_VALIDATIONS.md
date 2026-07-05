# Registre des validations — TAGORA Operating System

## Objectif

Suivre les éléments qui doivent être (ou ont été) **validés humainement** avant d'être considérés comme officiels.

## Portée

Validations liées aux ADR, scénarios QA, checklists design, fiches de validation et standards prioritaires.

---

## Colonnes

| Colonne | Description |
|---|---|
| ID | Identifiant séquentiel `VALD-XXX` |
| Date | Date d'inscription ou de validation |
| Élément validé | Nom de l'élément |
| Type de validation | Humaine / Terrain / QA / Revue UI |
| Validé par | Rôle ou personne (sans secret) |
| Statut | À faire / En cours / Validé / Refusé |
| Document lié | Chemin ou lien |
| Notes | Complément |

---

## Validations à faire plus tard

| ID | Date | Élément validé | Type de validation | Validé par | Statut | Document lié | Notes |
|---|---|---|---|---|---|---|---|
| VALD-001 | 2026-07-02 | ADR-0001 — TOS comme Constitution méthodologique | Humaine | À désigner | À faire | [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md) | Passer de « Accepté initialement » à « Validé » |
| VALD-002 | 2026-07-02 | ADR-0002 — Documentation avant code | Humaine | À désigner | À faire | [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md) | Idem |
| VALD-003 | 2026-07-02 | QA-TIME-001 — Punch in / punch out employé | Terrain / QA | À désigner | À faire | [QA-TIME-001](../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md) | Valider sur interface réelle TAGORA Time |
| VALD-004 | 2026-07-02 | TDS_CHECKLIST_REVUE_UI | Revue UI | À désigner | À faire | [TDS_CHECKLIST_REVUE_UI.md](../09_design_system/TDS_CHECKLIST_REVUE_UI.md) | Tester sur écrans Time |
| VALD-005 | 2026-07-02 | FICHE_VALIDATION_AVANT_CODE_TEMPLATE | Terrain | À désigner | À faire | [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md) | Utiliser sur un vrai changement Time |
| VALD-006 | 2026-07-03 | Standard TAF (pilier + docs/07_ai) | Humaine | À désigner | À faire | [04_TAF_TAGORA_AI_FRAMEWORK.md](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md) | Valider le cadre agents IA |
| VALD-007 | 2026-07-03 | TEMPLATE_AGENT_IA | Humaine | À désigner | À faire | [TEMPLATE_AGENT_IA.md](../99_templates/TEMPLATE_AGENT_IA.md) | Valider le template agent |
| VALD-008 | 2026-07-03 | Human in the Loop standard | Humaine | À désigner | À faire | [HUMAN_IN_THE_LOOP_STANDARD.md](../07_ai/HUMAN_IN_THE_LOOP_STANDARD.md) | Valider les points HITL |
| VALD-009 | 2026-07-03 | Registre des agents IA | Humaine | À désigner | À faire | [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md) | Valider les rôles documentés |
| VALD-010 | 2026-07-05 | Standard TOF (pilier + docs/08_orchestration) | Humaine | À désigner | À faire | [05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md) | Valider le cadre orchestration |
| VALD-011 | 2026-07-05 | Standard Event Bus | Humaine | À désigner | À faire | [EVENT_BUS_STANDARD.md](../08_orchestration/EVENT_BUS_STANDARD.md) | Valider contrats événements documentaires |
| VALD-012 | 2026-07-05 | Template workflow orchestration | Humaine | À désigner | À faire | [TEMPLATE_WORKFLOW_ORCHESTRATION.md](../99_templates/TEMPLATE_WORKFLOW_ORCHESTRATION.md) | Valider le template workflow |
| VALD-013 | 2026-07-05 | ORCH-TIME-001 et ORCH-TIME-002 | Humaine | À désigner | À faire | [ORCHESTRATION_REGISTRE.md](../08_orchestration/ORCHESTRATION_REGISTRE.md) | Valider avant toute implémentation réelle |
| VALD-014 | 2026-07-05 | Standard TRF (pilier + docs/11_release) | Humaine | À désigner | À faire | [09_TRF_TAGORA_RELEASE_FRAMEWORK.md](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md) | Valider le cadre release |
| VALD-015 | 2026-07-05 | Checklist release standard | Humaine | À désigner | À faire | [RELEASE_CHECKLIST_STANDARD.md](../11_release/RELEASE_CHECKLIST_STANDARD.md) | Valider la checklist release |
| VALD-016 | 2026-07-05 | Standard rollback | Humaine | À désigner | À faire | [ROLLBACK_STANDARD.md](../11_release/ROLLBACK_STANDARD.md) | Valider le standard rollback |
| VALD-017 | 2026-07-05 | Standard hotfix | Humaine | À désigner | À faire | [HOTFIX_STANDARD.md](../11_release/HOTFIX_STANDARD.md) | Valider le standard hotfix |
| VALD-018 | 2026-07-05 | Checklist release sur changement Time | Terrain / QA | À désigner | À faire | [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md) | Tester la checklist sur un vrai changement TAGORA Time |
| VALD-019 | 2026-07-05 | Standard TMF (pilier + docs/12_monitoring) | Humaine | À désigner | À faire | [10_TMF_TAGORA_MONITORING_FRAMEWORK.md](../01_piliers/10_TMF_TAGORA_MONITORING_FRAMEWORK.md) | Valider le cadre monitoring |
| VALD-020 | 2026-07-05 | Standard logging | Humaine | À désigner | À faire | [LOGGING_STANDARD.md](../12_monitoring/LOGGING_STANDARD.md) | Valider le standard logs |
| VALD-021 | 2026-07-05 | Template incident report | Humaine | À désigner | À faire | [TEMPLATE_INCIDENT_REPORT.md](../99_templates/TEMPLATE_INCIDENT_REPORT.md) | Valider le template incident |
| VALD-022 | 2026-07-05 | Checklist monitoring | Humaine | À désigner | À faire | [TEMPLATE_MONITORING_CHECKLIST.md](../99_templates/TEMPLATE_MONITORING_CHECKLIST.md) | Valider la checklist monitoring |
| VALD-023 | 2026-07-05 | Suivi post-release sur changement Time | Terrain / QA | À désigner | À faire | [POST_RELEASE_MONITORING_STANDARD.md](../12_monitoring/POST_RELEASE_MONITORING_STANDARD.md) | Tester le suivi post-release sur un vrai changement TAGORA Time |
| VALD-024 | 2026-07-05 | Carte des 10 piliers TOS | Humaine | À désigner | À faire | [CARTE_DES_10_PILIERS_TOS.md](../00_constitution/CARTE_DES_10_PILIERS_TOS.md) | Valider la carte officielle |
| VALD-025 | 2026-07-05 | Matrice d'interdépendance piliers | Humaine | À désigner | À faire | [MATRICE_INTERDEPENDANCE_PILIERS.md](../00_constitution/MATRICE_INTERDEPENDANCE_PILIERS.md) | Valider les liens entre piliers |
| VALD-026 | 2026-07-05 | État de maturité TOS | Humaine | À désigner | À faire | [ETAT_MATURITE_TOS.md](../00_constitution/ETAT_MATURITE_TOS.md) | Valider l'état de maturité documentaire |
| VALD-027 | 2026-07-05 | Ordre d'application piliers sur TAGORA Time | Humaine | À désigner | À faire | [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md) | Valider l'ordre consolidé Time |
| VALD-028 | 2026-07-05 | Stratégie adoption progressive modules | Humaine | À désigner | À faire | [STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md](../04_adoption_modules/STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md) | Valider la stratégie écosystème |
| VALD-029 | 2026-07-05 | DEC-TIME-4B-001 — baseline Git Time | Humaine | Martin ST-Gelais — Direction | Validé | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) | Point de départ propre, identifié et documenté — aucune application sur WIP non clarifié |
| VALD-030 | 2026-07-05 | DEC-TIME-4B-002 — WIP commissions | Humaine | Martin ST-Gelais — Direction | Validé | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) | WIP stabilisé, isolé ou explicitement reporté avant application réelle |
| VALD-031 | 2026-07-05 | DEC-TIME-4B-003 — écrans TDS prioritaires | Humaine | Martin ST-Gelais — Direction | Validé | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) | Priorité : punch employé, horodateur, dashboard employé — commissions après clarification WIP |
| VALD-032 | 2026-07-05 | DEC-TIME-4B-004 — scénarios QA obligatoires | Humaine | Martin ST-Gelais — Direction | Validé | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) | Scénarios obligatoires : punch in/out, punch GPS, GPS refusé/absent, feuille soumise, approbation superviseur/direction |
| VALD-033 | 2026-07-05 | DEC-TIME-4B-005 — fiche validation avant code | Humaine | Martin ST-Gelais — Direction | Validé | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) | Fiche obligatoire pour tout changement critique et prochain changement punch/GPS |
| VALD-034 | 2026-07-05 | Paquet documentaire Phase 4E-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) | Paquet accepté comme cadre préparatoire |
| VALD-035 | 2026-07-05 | Lot TQF du paquet pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) | Lot QA minimale accepté comme préparation documentaire |
| VALD-036 | 2026-07-05 | Lot TDS du paquet pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) | Lot revue UX/UI minimale accepté comme préparation documentaire |
| VALD-037 | 2026-07-05 | Lot TES du paquet pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) | Lot validation avant code accepté comme préparation documentaire |
| VALD-038 | 2026-07-05 | Conditions avant application réelle | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) | Conditions acceptées comme garde-fous obligatoires |
| VALD-039 | 2026-07-05 | README templates application pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | README et règles du dossier templates acceptés |
| VALD-040 | 2026-07-05 | Template scénario QA pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Modèle scénario TQF accepté |
| VALD-041 | 2026-07-05 | Template matrice comptes QA | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Modèle comptes QA sans secrets accepté |
| VALD-042 | 2026-07-05 | Template matrice données QA | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Modèle données fictives/anonymisées accepté |
| VALD-043 | 2026-07-05 | Template checklist TDS pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Modèle revue UX/UI accepté |
| VALD-044 | 2026-07-05 | Template validation avant code pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Garde-fou TES accepté |
| VALD-045 | 2026-07-05 | Template plan application pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](../04_adoption_modules/templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) | Cadre plan d'application par lots accepté |

---

## Règles

1. Un élément « Accepté initialement » n'est pas « Validé » tant que ce registre ne le confirme pas.
2. Mettre à jour le statut dès validation humaine réelle.
3. Aucun secret ni donnée sensible.

## Statut

**Enrichi — Phase 4H-TOS** — VALD-039 à 045 **Validé** (Martin ST-Gelais — Direction, 2026-07-05).
