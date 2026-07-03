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

---

## Règles

1. Un élément « Accepté initialement » n'est pas « Validé » tant que ce registre ne le confirme pas.
2. Mettre à jour le statut dès validation humaine réelle.
3. Aucun secret ni donnée sensible.

## Statut

**Brouillon initial — Phase 3D**
