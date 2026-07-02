# Standard — Workflow Engine

## Objectif

Définir le standard officiel du moteur de workflows transverses de l'écosystème TAGORA au sein du TOF.

## Portée

Conception, exécution, monitoring et reprise des workflows — n8n, LangChain et futurs moteurs (à valider).

## Principes

- Workflows explicites, documentés et observables.
- Séparation orchestration vs logique métier.
- Idempotence et reprise lorsque applicable.
- Approbations tracées pour étapes sensibles.
- Cohérence des patterns across modules.

## Règles

- Chaque workflow a un propriétaire, une documentation et un périmètre défini.
- Définir déclencheurs, étapes, conditions d'échec et rollback.
- Logger début, fin et erreurs de chaque exécution significative.
- Référencer standards n8n et LangChain selon implémentation.

## Éléments à documenter plus tard

- Modèle de données workflow (états, transitions)
- Choix technologique du workflow engine (ADR)
- SLA par catégorie de workflow
- Dashboard monitoring workflows
- Patterns retry, compensation, saga

## Statut

**Brouillon initial**
