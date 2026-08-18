# Application progressive — TAGORA MESSOR (projet technique TAGORA Mail IA)

> **Nomenclature 2026-08-17 — DEC-026 / ADR-0014 / VALD-105 :** le nom commercial officiel est désormais **TAGORA MESSOR**. Le repository, les routes, domaines, DB, OAuth, permissions Graph et identifiants techniques Mail IA ne sont pas renommés par cette décision. `NO_AUTO_SEND` demeure inchangé.

## Objectif

Définir le plan d'adoption progressive des standards TOS sur **TAGORA MESSOR**, projet technique historiquement nommé TAGORA Mail IA.

## Portée

Module TAGORA Mail IA — adoption post-pilote, avec attention particulière à TAF (IA).

**Complément identité / handoff 2026-08-16 :** IDENTITY-I1 PASS. `APP_AUTH != GRAPH_AUTH`. Contrat TAGORA_HANDOFF_V1 conceptuel (DEC-022). Paquets : [PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md](paquets_transfert/PAQUET_TRANSFERT_IDENTITE_MAIL_IA.md), [PAQUET_TRANSFERT_HANDOFF_MAIL_IA.md](paquets_transfert/PAQUET_TRANSFERT_HANDOFF_MAIL_IA.md). Aucun Graph / Mail.Send.

**Complément frontière Sourcing AI 2026-08-16 :** DEC-024 / ADR-0012 / VALD-103. Le projet technique Mail IA, désormais nommé commercialement MESSOR, reste le canal courriel. Le métier Sourcing AI, désormais nommé commercialement YORVA, devient la base métier fournisseurs / missions / offres. Paquet historique préparé, non exécuté : [PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md). `REAL_MAIL_AI_INTEGRATION_AUTHORIZED=NO`. Aucune modification Mail IA.

## Principes

- Convergence vers TOS incluant standards IA (TAF).
- Limites d'intervention IA documentées et respectées.
- Human in the Loop pour actions sensibles.
- Cohérence visuelle et UX via TDS.

## Règles

- Appliquer TAF et standards `docs/07_ai/` en priorité.
- Ne pas contourner les limites d'intervention IA définies.
- Documenter agents et workflows IA spécifiques Mail IA.
- Règles métier Mail IA restent dans l'application.

## Éléments à documenter plus tard

- Phases d'adoption TAF / TOF / TDS
- Cartographie agents IA Mail IA
- Critères validation Human in the Loop
- Intégration avec modules voisins
- Calendrier indicatif

## Statut

**Brouillon initial**
