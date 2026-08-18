# VALD-106 — Politique de transition de l'architecture de marque TAGORA

**Date :** 2026-08-17

**Décideur :** Martin ST-Gelais — Direction

**Statut :** Validé

**Type :** Humaine / Gouvernance

**Gate :** `TOS_TAGORA_BRAND_ARCHITECTURE_TRANSITION_DECISION_GO`

## Décision validée

Martin confirme :

```text
CANONICAL_BRAND_CONVENTION=TAGORA + MODULE_NAME
SECONDARY_GRAPHIC_SIGNATURE=NOM par TAGORA
SECONDARY_SIGNATURE_IS_CANONICAL_NAME=NO
LEGACY_NAME_TRANSITION_MAX_DURATION=6_MONTHS
WEBSITE_ROUTE_STRATEGY=OPTION_C_PROGRESSIVE_TRANSITION
DOMAIN_STRATEGY=OPTION_C_CONTROLLED_TRANSITION
NEXUS_IS_COMMERCIAL_MODULE=NO
ETIOQ_COMMERCIAL_STATUS=COMING_SOON
ETIOQ_PLANNED_CAPABILITIES_ONLY=YES
LOGO_MIGRATION_AND_TYPOGRAPHY_MIGRATION_SEPARATE=YES
```

Les six noms officiels de DEC-026 / ADR-0014 / VALD-105 restent inchangés : TAGORA HORORA, TAGORA PULS, TAGORA DEPORA, TAGORA MESSOR, TAGORA YORVA et TAGORA ETIOQ.

## Portée de la validation

Cette validation autorise uniquement :

- DEC-027 ;
- ADR-0015 ;
- la stratégie documentaire de transition ;
- le paquet de transfert préparatoire du pilote Website ;
- la mise à jour des registres TOS.

```text
TOS_SCOPE_ONLY=YES
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
ROUTE_CHANGE_AUTHORIZED=NO
DOMAIN_CHANGE_AUTHORIZED=NO
DNS_CHANGE_AUTHORIZED=NO
DB_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
PACKET_EXECUTED=NO
MARTIN_TRANSFER_REQUIRED=YES
HUMAN_GATE=YES
```

## Compatibilité

DEC-027 complète DEC-026 sans la remplacer. DEC-015 demeure la convention active des domaines. DEC-018 demeure la source de la charte et de la typographie. DEC-019 conserve les rôles de Website et Nexus. DEC-023 conserve DEPORA / Stock Premium comme pilote identité sélectionné, sans autoriser son implémentation.

La période maximale de six mois ne commence pas automatiquement avec cette validation : le gate de première publication de chaque module devra enregistrer sa date de départ.

## Références

- [ADR-0015](../05_adr/ADR-0015-POLITIQUE-TRANSITION-ARCHITECTURE-MARQUE-TAGORA.md)
- [ADR-0014](../05_adr/ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md)
- [STRATEGIE_TRANSITION_ARCHITECTURE_MARQUE_TAGORA.md](../04_adoption_modules/STRATEGIE_TRANSITION_ARCHITECTURE_MARQUE_TAGORA.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-027
