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

---

## Règles

1. Un élément « Accepté initialement » n'est pas « Validé » tant que ce registre ne le confirme pas.
2. Mettre à jour le statut dès validation humaine réelle.
3. Aucun secret ni donnée sensible.

## Statut

**Enrichi — Phase 3G**
