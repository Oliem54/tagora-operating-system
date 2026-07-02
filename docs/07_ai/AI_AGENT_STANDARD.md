# Standard — Agents IA

## Objectif

Définir le standard officiel de conception, documentation et déploiement des agents IA dans l'écosystème TAGORA.

## Portée

Tous agents IA intégrés aux modules TAGORA — sous gouvernance TAF.

## Principes

- Rôle et périmètre de chaque agent explicitement définis.
- Limites d'intervention respectées — pas de décisions métier critiques autonomes.
- Traçabilité des interactions et outputs.
- Validation humaine pour actions sensibles.
- Cohérence des patterns entre modules.

## Règles

- Documenter chaque agent via template `TEMPLATE_AGENT_IA.md`.
- Respecter `LIMITES_INTERVENTION_IA.md` et `HUMAN_IN_THE_LOOP_STANDARD.md`.
- Ne pas exposer secrets ou PII aux modèles sans politique validée.
- Référencer TAF et `PROMPT_STANDARD.md`.

## Éléments à documenter plus tard

- Taxonomie des types d'agents (assistant, automate, analyse, etc.)
- Architecture de référence agent
- Cycle de vie (création, déploiement, retrait)
- Monitoring et métriques agents
- Processus de validation pré-production

## Statut

**Brouillon initial**
