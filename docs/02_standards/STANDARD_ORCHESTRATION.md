# Standard — Orchestration

## Objectif

Définir le standard officiel d'orchestration et d'automatisation transverse de l'écosystème TAGORA.

## Portée

Workflows, n8n, LangChain, event bus, automatisation, approbations et reprise.

## Principes

- **Le TOF orchestre ; il ne remplace jamais la logique métier.**
- Workflows documentés et traçables.
- Human in the Loop pour décisions sensibles.
- Reprise et gestion d'erreurs obligatoires.
- Découplage via event bus.

## Règles

- Ne pas implémenter de règles métier critiques uniquement dans l'orchestration.
- Documenter chaque workflow : déclencheur, étapes, rollback.
- Logger toutes les exécutions significatives.
- Référencer `docs/08_orchestration/` pour les spécifications.

## Éléments à documenter plus tard

- Catalogue des workflows transverses
- Conventions de nommage workflows
- SLA et timeouts par type de workflow
- Modèle d'approbation
- Stratégie event bus

## Statut

**Brouillon initial**
