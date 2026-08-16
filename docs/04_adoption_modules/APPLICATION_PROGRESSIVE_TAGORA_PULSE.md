# Application progressive — TAGORA Pulse

## Objectif

Définir le plan d'adoption progressive des standards TOS sur **TAGORA Pulse**.

## Portée

Module TAGORA Pulse — adoption post-pilote TAGORA Time.

**Complément 2026-08-16 — widget client X-Plod :** chantier opérationnel distinct de l'adoption TOS Pulse et de l'accès Nexus (DEC-020). Site public X-Plod = `EXTERNAL_CUSTOMER_INTEGRATION_SURFACE`, pas `tagora.ca`, pas `pulse.tagora.ca`. Preflight READ-ONLY uniquement. Paquet : [PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](paquets_transfert/PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md). Gouvernance : [GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](plans_instanciation/GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md). Aucune installation, aucun write.

**Complément identité / handoff 2026-08-16 :** IDENTITY-I3 PASS. AppUser ≠ User ≠ Customer. Project ≠ tenant TAGORA. Human handoff métier ≠ TAGORA_HANDOFF_V1. Contrat conceptuel DEC-022. Paquets : [PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md](paquets_transfert/PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md), [PAQUET_TRANSFERT_HANDOFF_PULSE_AI.md](paquets_transfert/PAQUET_TRANSFERT_HANDOFF_PULSE_AI.md). Widget public hors handoff staff.

## Principes

- Convergence progressive vers l'ensemble des piliers TOS.
- Réutilisation des standards validés sur le pilote.
- Observabilité (TMF) alignée écosystème si Pulse est orienté monitoring/analytics.
- Cohérence TDS pour toute interface.

## Règles

- Documenter le périmètre Pulse vs briques TCP existantes.
- Aligner TRF et TMF avec standards écosystème.
- Règles métier Pulse restent dans l'application Pulse.

## Éléments à documenter plus tard

- Phases d'adoption par pilier
- Relation Pulse / TMF (complémentarité ou chevauchement)
- Dépendances données et modules sources
- Critères de convergence
- Calendrier indicatif

## Statut

**Brouillon initial**
