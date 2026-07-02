# Standard — n8n

## Objectif

Définir le standard officiel d'utilisation de n8n pour l'orchestration et l'automatisation dans l'écosystème TAGORA (TOF).

## Portée

Workflows n8n transverses — sous réserve que la logique métier critique reste dans les applications.

## Principes

- **Le TOF orchestre ; il ne remplace jamais la logique métier.**
- Workflows documentés, versionnés et traçables.
- Human in the Loop pour étapes sensibles.
- Reprise et gestion d'erreurs explicites.
- Logs d'exécution conservés.

## Règles

- Nommer et documenter chaque workflow n8n.
- Ne pas implémenter de règles métier critiques uniquement dans n8n.
- Prévoir timeouts et retry selon criticité.
- Aligner avec `WORKFLOW_ENGINE_STANDARD.md` et `EVENT_BUS_STANDARD.md`.

## Éléments à documenter plus tard

- Conventions de nommage workflows n8n
- Structure des dossiers / export JSON
- Environnements n8n (dev, staging, prod)
- Catalogue workflows transverses autorisés
- Intégration credentials (hors TOS)
- Monitoring exécutions n8n

## Statut

**Brouillon initial**
