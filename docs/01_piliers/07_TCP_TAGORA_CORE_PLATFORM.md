# TCP — TAGORA Core Platform

## Objectif

Définir le cadre officiel de la plateforme commune TAGORA : bibliothèque de briques partagées utilisées progressivement par tous les modules.

## Portée

Briques transverses — authentication, companies, employees, permissions, notifications, audit, documents, GPS, maps, reports, settings, logging, QA.

## Principes

- **Réutilisation progressive** — Convergence vers les mêmes briques, sans imposition brutale.
- **Une seule source de vérité** — Éviter la duplication de briques communes.
- **Séparation claire** — TCP fournit des capacités ; les applications consomment.
- **Qualité uniforme** — Même niveau de sécurité, audit et observabilité.
- **Documentation avant implémentation** — Spécifier avant de coder.

## Règles

- Identifier les besoins communs avant de développer en silo dans un module.
- Documenter l'API et le contrat de chaque brique TCP.
- Ne pas créer de logique métier spécifique à un module dans TCP.
- Valider toute nouvelle brique via gouvernance TOS.

## Éléments à documenter plus tard

- Catalogue des briques TCP et priorités
- Contrats d'interface par brique
- Stratégie d'adoption progressive par module
- Modèle de permissions et multi-compagnies
- Politique d'audit et logging
- Roadmap d'implémentation (hors TOS — à planifier séparément)

## Statut

**Brouillon initial**
