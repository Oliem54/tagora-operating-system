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
| VALD-046 | 2026-07-05 | Paquet final Phase 4I-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) | Paquet final accepté comme cadre de transition documentaire |
| VALD-047 | 2026-07-05 | Porte de passage vers application documentaire | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) | Checklist §6 acceptée comme porte de passage obligatoire |
| VALD-048 | 2026-07-05 | Règle finale de transition TOS → module pilote | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) | Règle §9 — dépôt, branche, périmètre, fichiers autorisés |
| VALD-049 | 2026-07-05 | Besoin Phase 4J-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) | Phase 4J reconnue comme validation de passage sans modification module |
| VALD-050 | 2026-07-05 | Plan Phase 4K-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Plan accepté comme cadre préparatoire |
| VALD-051 | 2026-07-05 | Module cible TAGORA Time | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Module cible futur sans ouverture ni modification |
| VALD-052 | 2026-07-05 | Dépôt cible référencé C:\dev\tagora-time | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Référence planification seulement |
| VALD-053 | 2026-07-05 | Branche cible prévue main | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Historique Phase 4L — `VALD_053_OPERATIONAL_STATUS=SUPERSEDED_BY_VALD_084` (main reste baseline source via VALD-083 ; écriture future via branche documentaire dédiée VALD-084) |
| VALD-054 | 2026-07-05 | Liste fichiers documentaires futurs proposés | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | 11 fichiers futurs — périmètre sans création immédiate |
| VALD-055 | 2026-07-05 | Conditions avant instanciation réelle | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Garde-fous obligatoires §6 plan 4K |
| VALD-056 | 2026-07-05 | Besoin Phase 4L-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Validation plan 4K sans action dans TAGORA Time |
| VALD-057 | 2026-07-05 | Autorisation Phase 4M-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | Cadre autorisation accepté comme préparation documentaire |
| VALD-058 | 2026-07-05 | Dépôt cible à ouvrir en lecture Git seulement | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | Ouverture future — lecture Git limitée uniquement |
| VALD-059 | 2026-07-05 | Commandes Git futures autorisées | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | 6 commandes §4 autorisation 4M |
| VALD-060 | 2026-07-05 | Interdictions d'ouverture contrôlée | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | Garde-fous obligatoires §5 autorisation 4M |
| VALD-061 | 2026-07-05 | Rapport attendu avant STOP | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | Rapport §7 et STOP obligatoire |
| VALD-062 | 2026-07-05 | Besoin Phase 4N-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md) | Validation autorisation 4M sans ouverture dépôt cible |
| VALD-063 | 2026-07-05 | Rapport Phase 4O-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | Rapport 4O accepté comme lecture Git officielle |
| VALD-064 | 2026-07-05 | Baseline TAGORA Time non prête | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | Baseline non prête pour instanciation documentaire |
| VALD-065 | 2026-07-05 | Arbitrage WIP commissions | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | WIP à clarifier ou isoler avant toute action documentaire |
| VALD-066 | 2026-07-05 | Branche cible réelle TAGORA Time | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | Branche cible à confirmer — ≠ main observé |
| VALD-067 | 2026-07-05 | Conditions avant instanciation documentaire | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | Instanciation bloquée — baseline et WIP non clarifiés |
| VALD-068 | 2026-07-05 | Besoin Phase 4P-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) | Phase 4P reconnue comme arbitrage obligatoire |
| VALD-069 | 2026-07-05 | Protocole Phase 4Q-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Protocole accepté comme cadre documentaire conservateur |
| VALD-070 | 2026-07-05 | Stratégie WIP commissions | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Reporter instanciation tant que WIP non clarifié |
| VALD-071 | 2026-07-05 | Stratégie de branche cible | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Branche cible réelle à confirmer — main non confirmée |
| VALD-072 | 2026-07-05 | Report ou non instanciation documentaire | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Instanciation reportée et bloquée |
| VALD-073 | 2026-07-05 | Conditions avant nouvelle ouverture contrôlée | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Conditions Phase 4Q obligatoires |
| VALD-074 | 2026-07-05 | Besoin Phase 4R-TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md) | Validation protocole 4Q — suite documentaire TOS |
| VALD-075 | 2026-08-10 | ADR-0003 — Option A renforcée | Humaine | Martin ST-Gelais — Direction | Validé | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md) | Option A renforcée actée |
| VALD-076 | 2026-08-10 | Nexus = portail et control plane UX « Mon espace TAGORA » | Humaine | Martin ST-Gelais — Direction | Validé | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md) | Connexion, org, membres, catalogue, droits, abonnement |
| VALD-077 | 2026-08-10 | TAGORA Cloud = marque/offre SaaS commerciale globale | Humaine | Martin ST-Gelais — Direction | Validé | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md) | Pas automatiquement un repository ni une couche technique |
| VALD-078 | 2026-08-10 | TAGORA Platform = terme déprécié ; ancien repo intact jusqu'à GO séparé | Humaine | Martin ST-Gelais — Direction | Validé | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md) | Dépréciation sémantique seulement — aucun recycle auto |
| VALD-079 | 2026-08-10 | Frontière TOS / Nexus / TCP / Flow / modules | Humaine | Martin ST-Gelais — Direction | Validé | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md), [APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md) | Entitlement-first ; séparation logique Nexus/TCP obligatoire |
| VALD-080 | 2026-08-10 | Baseline documentaire Nexus autorisée | Humaine | Martin ST-Gelais — Direction | Validé | [APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md) | `TAGORA-NEXUS-TOS-ADOPTION-BASELINE` doc/archi only — pas de repo/code/DB |
| VALD-081 | 2026-08-10 | Lecture Git contrôlée TAGORA Time Phase 4S | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md) | main propre et synchronisé ; working tree clean ; lecture READ-ONLY complète |
| VALD-082 | 2026-08-10 | Décision finale WIP commissions Phase 4S | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md) | Option B — préserver dans `feature/admin-commissions-premium-header-kpi` ; aucun merge/rebase/delete |
| VALD-083 | 2026-08-10 | Baseline TAGORA Time pour future instanciation TOS | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md) | main confirmé comme baseline source propre |
| VALD-084 | 2026-08-10 | Stratégie branche documentaire TAGORA Time | Humaine | Martin ST-Gelais — Direction | Validé | [VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md](../04_adoption_modules/plans_instanciation/VALIDATION_PHASE_4S_DECISION_STRATEGIQUE_WIP_BRANCHE_TAGORA_TIME.md) | Option D — future branche documentaire depuis main, sous GO Martin séparé |
| VALD-085 | 2026-08-10 | Nom de branche documentaire TAGORA Time Phase 4D | Humaine | Martin ST-Gelais — Direction | Validé | [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Branche future `docs/tos-phase-4d-time`, créée depuis `main` uniquement sous GO séparé — aucune création dans ce bloc |
| VALD-086 | 2026-08-10 | Validation état branche documentaire locale TAGORA Time Phase 4D | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Locale `docs/tos-phase-4d-time` prête ; HEAD = main ; 0/0 ; clean ; non poussée ; dernier rerun HOLD car déjà existante ; aucune doc Time créée |
| VALD-087 | 2026-08-10 | Périmètre Lot 1 documentaire TAGORA Time Phase 4D | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Lot 1 = 4 fichiers fondation/QA matrices ; préparation TOS seulement ; aucun fichier Time ; Lots 2/3 non autorisés |
| VALD-088 | 2026-08-10 | Recadrage gouvernance Phase 4D — TOS reste le contexte gouvernant des actions cibles | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md), [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | TOS demeure le projet gouvernant ; Time demeure cible pilote séparée ; actions dépôt cible = externes bornées sous GO ; prérequis Git non destructif inclusible dans gate parent si autorisé/prévalidé ; retour TOS obligatoire ; aucun élargissement code/DB/production |
| VALD-089 | 2026-08-11 | Clôture documentaire Lot 1 TAGORA Time Phase 4D | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Lot 1 clôturé ; 4 documents fondation/QA ; revue contenu PASS ; branche `docs/tos-phase-4d-time` protégée ; checkpoint `f2bce3e` ; clôture `2960a73e` ; checkout Time libéré sur main ; Lots 2/3 non autorisés ; aucun code/DB/production |
| VALD-090 | 2026-08-11 | Préparation Phase 4D Lot 2 — scénarios QA TAGORA Time | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md](../04_adoption_modules/plans_instanciation/PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Périmètre Lot 2 fixé à 5 scénarios QA ; comptes/données Lot 1 comme dépendances ; aucune création compte réel ; aucun Playwright ; stratégie branche Time à décider avant exécution ; Lot 2 non exécuté ; Lot 3 non autorisé |
| VALD-091 | 2026-08-11 | Décision stratégie Git Phase 4D Lot 2 TAGORA Time | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md](../04_adoption_modules/plans_instanciation/PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) | Option A validée ; réutilisation de `docs/tos-phase-4d-time` ; base `2960a73e` ; dépendances Lot 1 présentes ; aucune collision Lot 2 ; aucun code divergent lors de l'inspection ; pas de nouvelle branche ; pas d'écriture main ; pas de merge/cherry-pick ; exécution Lot 2 toujours non autorisée ; revalidation Git obligatoire avant future instanciation |
| VALD-092 | 2026-08-12 | Clôture documentaire Lot 2 TAGORA Time Phase 4D | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md](../04_adoption_modules/plans_instanciation/PREPARATION_PHASE_4D_LOT2_QA_SCENARIOS_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md), [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md) | OPTION_1 ; Lot 2 déjà instancié ; 5 scénarios QA présents ; tip `754baaf` ; base `2960a73e` supersédée ; aucune réécriture Time ; QA terrain NOT_STARTED ; Lot 3 non autorisé ; Phase 4D IN_PROGRESS |
| VALD-094 | 2026-08-13 | Préparation gate d'exécution QA Lot 2 TAGORA Time Phase 4D | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md](../04_adoption_modules/plans_instanciation/PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md), [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](../04_adoption_modules/plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md), [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md) | OPTION_A TOS_PREPARATION_ONLY ; gate unique préflight + exécution conditionnelle ; 5 scénarios L2-001 à L2-005 ; exécution NOT_STARTED / non autorisée ; Lot 3 non autorisé ; Time non ouvert ; VALD-093 = domaines canoniques (autre piste) |
| VALD-095 | 2026-08-13 | Enregistrement audit READ-ONLY entrée publique Time + préparation Track B Website | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../04_adoption_modules/audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md), [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../04_adoption_modules/plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md) | Audit Time `main` @ `68561a3` enregistré ; REBUILD public → Website ; Auth/métier REMAIN Time ; cleanup Time NON autorisé ; gate `TOS-WEBSITE-PUBLIC-REBUILD-GO` préparé non exécuté ; Track A VALD-094 inchangée ; QA NOT_STARTED ; Lot 3 NO |
| VALD-096 | 2026-08-14 | Fermeture contrat typographique transversal Outfit + Syne | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé (historique ; supersédé pour usage actif) | [VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md), [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md) | `HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE` ; `WAITING_FOR_WEBSITE_EVIDENCE` reste CLOSED ; remplacé pour usage actif par VALD-097 |
| VALD-097 | 2026-08-15 | Adoption charte de marque centrale finale TAGORA | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md](VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md), [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md), [CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md), [PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md) | `BRAND_GUIDE_STATUS=FINAL` ; 8 couleurs + 4 gradients exclusifs ; Avenir Next + JHC Notion ; mapping rôles en attente ; assets/fonts non reçus ; aucun produit modifié |
| VALD-098 | 2026-08-16 | Contrat d'emplacement des surfaces TAGORA | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md](VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md), [ADR-0007](../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md), [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md), [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../04_adoption_modules/plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md) | Website/Nexus/SaaS rôles figés ; Time n'est plus entrée publique centrale ; 6 paquets ; aucun DNS/redirect/deploy ; Phase 4D Lot 2 inchangée |
| VALD-099 | 2026-08-16 | Mapping adresses / accès / identité cible TAGORA | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md](VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md), [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md), [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md) | Login central et `/modules/{slug}` figés ; Nexus access broker ; Entra/HANDOFF cibles ; 6 paquets ; aucun SSO/Entra/OAuth réel ; Phase 4D Lot 2 inchangée |
| VALD-100 | 2026-08-16 | Identité centrale et bootstrap utilisateurs Time | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md](VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md), [ADR-0009](../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md), [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md) | Time = source bootstrap ; TAGORA_USER_ID ; email ≠ identité ; pas de copie mot de passe ; IDENTITY_LINK conceptuel ; 5 paquets ; aucune DB/Entra ; Phase 4D Lot 2 inchangée |
| VALD-101 | 2026-08-16 | Contrat technique TAGORA_HANDOFF_V1 | Humaine / Gouvernance | Martin ST-Gelais — Direction | Validé | [VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md), [ADR-0010](../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md), [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) | Comparaison 4 modules PASS ; handoff hybride code opaque + assertion serveur ; adapters ; pilote Stock recommandé NON approuvé ; aucun endpoint/Entra ; Phase 4D Lot 2 inchangée |

---

## Règles

1. Un élément « Accepté initialement » n'est pas « Validé » tant que ce registre ne le confirme pas.
2. Mettre à jour le statut dès validation humaine réelle.
3. Aucun secret ni donnée sensible.
4. VALD-080 autorise uniquement la baseline documentaire Nexus — jamais la création de repository, le code, la DB, le staging ou la production.
5. VALD-081 à 084 ferment Phase 4S ; elles n'autorisent aucune écriture Time ni création de branche documentaire sans GO séparé.
6. **Cohérence VALD-053 / Phase 4S :** VALD-053 reste une validation **historique** (branche cible prévue au moment de Phase 4L, statut **Validé** inchangé). Depuis Phase 4S : VALD-083 confirme `main` comme baseline source propre ; VALD-084 valide une future branche documentaire dédiée depuis `main`. Donc `VALD_053_OPERATIONAL_STATUS=SUPERSEDED_BY_VALD_084` pour l'exécution future uniquement.
7. VALD-092 clôture uniquement l'instanciation **documentaire** Lot 2 ; elle n'autorise ni exécution QA terrain, ni Playwright, ni Lot 3, ni écriture Time supplémentaire.
8. VALD-094 prépare uniquement le **gate TOS** d'exécution QA Lot 2 ; elle n'autorise ni ouverture Time, ni QA terrain, ni Lot 3. VALD-093 (domaines canoniques) reste une piste distincte.
9. VALD-095 enregistre l'audit READ-ONLY d'entrée publique Time et prépare Track B (Website rebuild). Elle n'autorise ni écriture Website/Time/Nexus, ni cleanup Time, ni DNS, ni production, et **ne modifie pas** Track A / VALD-094.
10. VALD-096 ferme historiquement le **contrat typographique** transversal (Outfit + Syne) à partir de la preuve Website `6415cdd`. `WAITING_FOR_WEBSITE_EVIDENCE` reste CLOSED. Pour l'usage actif, VALD-096 est `HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE`.
11. VALD-097 enregistre uniquement l'adoption TOS de la **charte de marque centrale finale** (PDF 2026-08-14). Elle n'autorise aucune application produit, aucun autre repository, aucune reconstruction d'assets depuis le PDF, ni installation de police.
12. VALD-098 fige uniquement le **contrat d'emplacement des surfaces**. Elle n'autorise ni DNS, ni redirect, ni hébergement, ni déploiement, ni SSO, ni migration de contenu, ni écriture hors TOS. Phase 4D Lot 2 reste inchangée.
13. VALD-099 fige uniquement le **mapping d'adresses, le parcours d'accès et les cibles d'identité**. Elle n'autorise ni Entra, ni OAuth, ni handoff réel, ni SSO, ni DNS, ni Production. Phase 4D Lot 2 reste inchangée.
14. VALD-100 fige uniquement le **bootstrap d'identité et le rattachement conceptuel Time**. Elle n'autorise ni DB, ni copie de mot de passe/hash, ni Entra, ni SSO, ni utilisateur réel. Phase 4D Lot 2 reste inchangée. Audits I1–I3 **PASS**.
15. VALD-101 fige uniquement le **contrat technique conceptuel TAGORA_HANDOFF_V1**. Elle n'autorise ni endpoint runtime, ni Entra, ni OAuth, ni handoff réel, ni pilote, ni I5–I9. Phase 4D Lot 2 reste inchangée. Prochain Human Gate : validation du contrat et choix explicite du module pilote.

## Statut

```text
PHASE_4D_DOCUMENTATION_BRANCH_NAME=VALIDATED_BY_VALD_085
PHASE_4D_LOCAL_BRANCH_STATE=VALIDATED_BY_VALD_086
PHASE_4D_LOT_1_SCOPE=VALIDATED_BY_VALD_087
PHASE_4D_GOVERNANCE_MODEL=VALIDATED_BY_VALD_088
PHASE_4D_LOT_1_CLOSURE=VALIDATED_BY_VALD_089
PHASE_4D_LOT_2_PREPARATION=VALIDATED_BY_VALD_090
PHASE_4D_LOT_2_BRANCH_STRATEGY=VALIDATED_BY_VALD_091
PHASE_4D_LOT_2_DOCUMENT_CLOSURE=VALIDATED_BY_VALD_092
PHASE_4D_LOT_2_QA_GATE_PREPARATION=VALIDATED_BY_VALD_094
TRACK_B_PUBLIC_ENTRY_TO_WEBSITE=VALIDATED_BY_VALD_095
DOCUMENTATION_BRANCH=docs/tos-phase-4d-time
REMOTE_BRANCH_CREATED=YES
TIME_DOCUMENTATION_STARTED=YES
LOT_1_EXECUTION_STATUS=COMPLETE
LOT_1_CONTENT_REVIEW=PASS
LOT_1_WORK_SAFELY_SAVED=YES
LOT_1_INITIAL_CHECKPOINT=f2bce3e896f5f7bdb981c39bcd27afc76fb8c9c1
LOT_1_CLOSURE_COMMIT=2960a73e1bcefd35dce81969157af213c83fafd2
TIME_CHECKOUT_RELEASED_TO_MAIN=YES
LOT_2_PREPARATION_STATUS=COMPLETE
LOT_2_FILE_COUNT=5
LOT_2_BRANCH_INSPECTION_STATUS=PASS
LOT_2_TARGET_BRANCH_STRATEGY=OPTION_A_REUSE_EXISTING_PHASE4D_DOCUMENTATION_BRANCH
LOT_2_TARGET_BRANCH=docs/tos-phase-4d-time
LOT_2_TARGET_BASE_SHA=2960a73e1bcefd35dce81969157af213c83fafd2
EXPECTED_BASE_2960A73E=SUPERSEDED_BY_OBSERVED_REMOTE_HISTORY
LOT_2_BRANCH_STRATEGY_DECIDED=YES
LOT_2_DOCUMENT_INSTANTIATION=COMPLETE
LOT_2_REMOTE_TIP=754baaf23f27a3629eb1e1f36567fd3b032cd6cd
LOT_2_INSTANTIATION_COMMIT=ab227dac252d5a89e08f4f58a0262386bf400b8d
ACKNOWLEDGE_LOT2_ALREADY_INSTANTIATED=YES
LOT_2_QA_GATE_PREPARATION=COMPLETE
NEW_BRANCH_REQUIRED=NO
DIRECT_MAIN_WRITE=NO
TIME_WRITE_REQUIRED=NO
LOT_2_QA_EXECUTION=NOT_STARTED
LOT_2_QA_EXECUTION_AUTHORIZED=NO
LOT_3_AUTHORIZED=NO
PHASE_4D_STATUS=IN_PROGRESS
TRACK_A_NEXT_GATE=TOS-PHASE-4D-LOT2-QA-EXECUTION-GO
TRACK_A_NEXT_GATE_AUTHORIZED=NO
TRACK_B_PREPARATION=COMPLETE
TRACK_B_EXECUTION_AUTHORIZED=NO
TRACK_B_NEXT_GATE=TOS-WEBSITE-PUBLIC-REBUILD-GO
TRACK_B_NEXT_GATE_AUTHORIZED=NO
TIME_PUBLIC_CLEANUP_AUTHORIZED=NO
```

**Enrichi — TAGORA_HANDOFF_V1** — VALD-101 **Validé** (contrat handoff conceptuel ; comparaison 4 modules PASS ; pilote non approuvé ; aucun endpoint/Entra). VALD-100 **Validé** (bootstrap identité). VALD-099 **Validé** (mapping). VALD-098 **Validé** (surfaces). VALD-097 **Validé** (charte). VALD-096 **Validé historique**. Track B VALD-095 **Validé**. VALD-094 **Validé** (gate QA Lot 2 préparé ; exécution NOT_STARTED). VALD-092 **Validé**. VALD-091 **Validé**. VALD-090 **Validé**. VALD-089 **Validé**. VALD-088 **Validé**. VALD-087 **Validé**. VALD-086 **Validé**. VALD-085 **Validé**. VALD-053 historique **Validé** ; usage opérationnel supersédé par VALD-084. VALD-093 **Validé** hors table historique Phase 4D. Phase 4S-TOS : VALD-081 à 084 **Validé**. Track Nexus : VALD-075 à 080 **Validé**. Phase 4R-TOS : VALD-069 à 074 **Validé**. VALD-063 à 068 **Validé**. VALD-057 à 062 **Validé**. VALD-050 à 056 **Validé**. VALD-046 à 049 **Validé**. VALD-029 à 045 **Validé**.
