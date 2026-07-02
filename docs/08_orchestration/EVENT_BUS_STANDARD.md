# Standard — Event Bus

## Objectif

Définir le standard officiel de l'event bus pour le découplage et la communication asynchrone entre modules TAGORA (TOF).

## Portée

Événements domaine, intégrations inter-modules et déclenchement de workflows.

## Principes

- Découplage entre émetteurs et consommateurs.
- Contrats d'événements documentés et versionnés.
- Traçabilité des événements significatifs.
- Idempotence des consommateurs lorsque applicable.
- Pas de logique métier critique cachée uniquement dans le bus.

## Règles

- Documenter schéma et sémantique de chaque type d'événement.
- Versionner les contrats d'événements (compatibilité modules).
- Logger émissions et échecs de traitement.
- Aligner avec gouvernance compatibilité inter-modules.

## Éléments à documenter plus tard

- Catalogue des événements transverses
- Convention de nommage (ex. `module.action.v1`)
- Choix technologique event bus (ADR)
- Politique retry et dead letter
- Sécurité et authentification des messages

## Statut

**Brouillon initial**
