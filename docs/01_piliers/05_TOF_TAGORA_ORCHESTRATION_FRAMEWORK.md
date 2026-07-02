# TOF — TAGORA Orchestration Framework

## Objectif

Définir le framework officiel d'orchestration, d'automatisation et de workflows transverses de l'écosystème TAGORA.

## Portée

n8n, LangChain, workflow engine, event bus, automatisation, approbations et reprise — tous modules TAGORA.

## Principes

- **Le TOF orchestre ; il ne remplace jamais la logique métier.**
- Les règles métier critiques restent dans les applications.
- Human in the Loop pour les décisions sensibles.
- Traçabilité complète : logs, reprise, approbations.
- Découplage via event bus et workflows explicites.

## Règles

- Ne jamais implémenter de logique métier critique uniquement dans le TOF.
- Documenter chaque workflow et son périmètre d'intervention.
- Prévoir la reprise et la gestion d'erreurs pour tout workflow automatisé.
- Référencer `docs/08_orchestration/` pour les standards détaillés.

## Éléments à documenter plus tard

- Standard n8n (workflows, conventions)
- Standard LangChain (chaînes, agents)
- Architecture du workflow engine
- Spécification event bus
- Modèle de logs et reprise
- Processus d'approbation
- Cartographie workflows transverses vs métier

## Statut

**Brouillon initial**
