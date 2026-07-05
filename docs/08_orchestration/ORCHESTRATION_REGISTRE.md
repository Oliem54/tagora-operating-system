# Registre d'orchestration — TAGORA Operating System

## Objectif

Centraliser les **workflows et événements d'orchestration** documentés dans l'écosystème TAGORA — statut, périmètre, validation humaine et lien vers la documentation.

## Portée

Registre TOS (TOF). **Aucune entrée ci-dessous n'est active** — toutes sont au statut **brouillon documentaire**.

---

## Colonnes

| Colonne | Description |
|---|---|
| **ID** | Identifiant `ORCH-[MODULE]-XXX` |
| **Nom** | Intitulé lisible |
| **Type** | workflow / événement / tâche planifiée |
| **Module source** | Module émetteur ou propriétaire |
| **Module destination** | Module ou consommateur cible |
| **Statut** | draft / documented / tested / approved / active / paused / retired |
| **Validation humaine requise** | Oui / Non / Partielle |
| **Document lié** | Chemin fiche ou template |
| **Notes** | Complément court |

---

## Entrées documentaires (brouillon — non actives)

| ID | Nom | Type | Module source | Module destination | Statut | Validation humaine | Document lié | Notes |
|---|---|---|---|---|---|---|---|---|
| ORCH-TIME-001 | Notification oubli punch | workflow | TAGORA Time | Notification (employé / superviseur) | draft | Non | [TEMPLATE_WORKFLOW_ORCHESTRATION.md](../99_templates/TEMPLATE_WORKFLOW_ORCHESTRATION.md) | Rappel si punch manquant — **non implémenté** |
| ORCH-TIME-002 | Validation feuille de temps | workflow | TAGORA Time | TAGORA Time (approbation) | draft | Oui | [TEMPLATE_WORKFLOW_ORCHESTRATION.md](../99_templates/TEMPLATE_WORKFLOW_ORCHESTRATION.md) | Préparer contexte approbation — décision humaine obligatoire — **non implémenté** |
| ORCH-TOS-001 | Rapport QA documentaire | workflow | TOS | Rapport / équipe QA | draft | Non | [ORCHESTRATION_REPORTING_STANDARD.md](ORCHESTRATION_REPORTING_STANDARD.md) | Synthèse statut scénarios QA — **non implémenté** |

---

## Règles

1. Toute nouvelle orchestration → ligne dans ce registre **avant** implémentation.
2. Passage à `active` interdit sans documentation, test et approbation (voir [WORKFLOW_ENGINE_STANDARD.md](WORKFLOW_ENGINE_STANDARD.md)).
3. Aucun secret dans ce registre.
4. Les workflows **ne remplacent pas** la logique métier des modules.

---

## Éléments à documenter plus tard

- Entrées événements domaine (catalogue Event Bus)
- Workflows Stock Premium, Mail IA, Pulse
- Propriétaires nominatifs par workflow
- Dates d'activation réelle (hors TOS)

## Statut

**Créé — Phase 3F** — entrées brouillon uniquement
