# Standard — Human in the Loop

## Objectif

Définir le standard officiel d'intégration de la validation humaine dans les workflows IA et d'orchestration TAGORA.

## Portée

TAF, TOF et tout processus où une décision ou action IA nécessite approbation humaine.

## Principes

- Validation humaine obligatoire pour actions sensibles.
- Interface claire pour revue, approbation et rejet.
- Traçabilité de qui a approuvé quoi et quand.
- Délai et escalade définis pour approbations en attente.
- Pas de contournement silencieux du Human in the Loop.

## Règles

- Identifier les points Human in the Loop dans chaque workflow IA/orchestration.
- Logger approbations et rejets (audit).
- Ne pas exécuter d'action irreversible sans approbation explicite.
- Aligner avec `LIMITES_INTERVENTION_IA.md`.

## Éléments à documenter plus tard

- Catalogue des points Human in the Loop par module
- UX standard d'approbation (TDS)
- SLA approbation et escalade
- Intégration notifications (TCP)
- Modèle de données approbation (hors TOS)

## Statut

**Brouillon initial**
