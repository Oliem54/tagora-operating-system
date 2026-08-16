# Application progressive — TAGORA Stock Premium

## Objectif

Définir le plan d'adoption progressive des standards TOS sur **TAGORA Stock Premium**, après validation sur le projet pilote Time.

## Portée

Module TAGORA Stock Premium — adoption post-pilote.

**Complément identité / handoff 2026-08-16 :** IDENTITY-I2 PASS. Tenant local canonique = `stock_premium_organizations.id` UUID. Contrat TAGORA_HANDOFF_V1 conceptuel (DEC-022). Module pilote identité **sélectionné** (DEC-023 / ADR-0011 / VALD-102). `PILOT_IMPLEMENTATION_AUTHORIZED=NO`. IDENTITY-I7 non commencé. Paquets : [PAQUET_TRANSFERT_IDENTITE_STOCK_PREMIUM.md](paquets_transfert/PAQUET_TRANSFERT_IDENTITE_STOCK_PREMIUM.md), [PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md](paquets_transfert/PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md). Aucune DB. Aucun accès dépôt Stock.

## Principes

- Convergence vers TOS après validation sur TAGORA Time.
- Réutiliser les standards et retours du pilote.
- Adapter le rythme à la maturité et aux contraintes Stock Premium.
- Signature visuelle TDS obligatoire dès adoption UI.

## Règles

- Ne pas réinventer — réutiliser standards validés sur Time.
- Documenter spécificités Stock Premium vs standards communs.
- Appliquer gouvernance compatibilité inter-modules.
- Règles métier Stock Premium restent dans l'application.

## Éléments à documenter plus tard

- Séquence d'adoption par pilier
- Dépendances avec TAGORA Time et TCP
- Écarts initiaux et plan de convergence
- Critères de passage pilote → généralisation
- Calendrier indicatif

## Statut

**Brouillon initial**
