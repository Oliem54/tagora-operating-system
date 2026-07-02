# Standard — LangChain

## Objectif

Définir le standard officiel d'utilisation de LangChain pour les chaînes IA et l'orchestration intelligente dans l'écosystème TAGORA (TOF / TAF).

## Portée

Chaînes LangChain, agents et pipelines IA — sous gouvernance TAF et TOF.

## Principes

- Alignement strict avec limites d'intervention IA (TAF).
- Chaînes documentées et testables.
- Human in the Loop aux points sensibles.
- Pas de logique métier critique isolée dans LangChain seul.
- Traçabilité des exécutions.

## Règles

- Documenter chaque chaîne : entrées, sorties, outils, limites.
- Respecter `PROMPT_STANDARD.md` et `AI_AGENT_STANDARD.md`.
- Valider outputs avant action sur systèmes externes.
- Ne pas contourner les règles de sécurité.

## Éléments à documenter plus tard

- Patterns LangChain autorisés (chains, agents, tools)
- Conventions de structure de projet
- Intégration avec n8n et event bus
- Tests et évaluation des chaînes
- Versionnement et déploiement

## Statut

**Brouillon initial**
