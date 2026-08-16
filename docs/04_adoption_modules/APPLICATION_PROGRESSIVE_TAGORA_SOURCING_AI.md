# Application progressive — TAGORA Sourcing AI

## Objectif

Définir le plan d'adoption progressive des standards TOS sur **TAGORA Sourcing AI** — module autonome agentique de sourcing — **sans plan de code** et **sans création de repository**.

## Portée

Module TAGORA Sourcing AI (nom commercial) / Supplier Intelligence (moteur interne) / TAGORA Sourcing Agent (agent visible).

**Fondation 2026-08-16 :** DEC-024 / ADR-0012 / VALD-103. Gate `TOS_TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION_GO`. L'ancien gate `TOS_TAGORA_SOURCING_AI_MODULE_FOUNDATION_GO` n'est pas exécuté.

Document maître : [TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md](TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md).

## Principes

- Documentation avant code (ADR-0002).
- Un seul agent visible ; spécialistes internes cachés (TAF).
- Human in the Loop avant toute communication externe et tout engagement.
- Aucune autorité d'achat, de commande, de paiement, de contrat.
- Alibaba = canal prioritaire, sans connecteur réel maintenant.
- Mail IA = canal email ; Sourcing AI = métier fournisseurs.
- Surfaces candidates ; DNS interdit.
- SaaS mensuel revendable ; multi-tenant conceptuel.

## Règles

- Ne pas fusionner Sourcing AI dans Mail IA, Stock, Nexus ou Website.
- Ne pas réutiliser un modèle de scoring unique pour tous les domaines.
- Distinguer FACT_VERIFIED / FACT_UNVERIFIED / ESTIMATE.
- Isolation tenant / client / projet obligatoire.
- Toute plateforme externe passe par un PLATFORM_ADAPTER ; l'identité canonique du fournisseur reste interne.

## État de convergence par pilier

| Pilier | Statut | Notes |
|---|---|---|
| TES | Non démarré (produit) | Fondation documentaire seulement |
| TDS | Non démarré | UI future du chat / matrices |
| TQF | Non démarré | Scénarios V1 après bootstrap |
| TAF | Cadré | Super-agent + spécialistes inscrits au registre |
| TOF | Cadré | Flux Mail IA / plateforme documentés, non actifs |
| TKS | En cours | DEC-024 / ADR-0012 / VALD-103 |
| TCP | Non démarré | Identité / handoff futurs |
| TBF | Non démarré | Billing futur |
| TRF | Non démarré | Aucune release |
| TMF | Non démarré | Aucun runtime |

## Interdictions

```text
REPO_CREATION_AUTHORIZED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
ALIBABA_REAL_CONNECTOR_AUTHORIZED=NO
REAL_MAIL_AI_INTEGRATION_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
STOCK_INTEGRATION_AUTHORIZED=NO
ODOO_INTEGRATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Human Gates futurs (non exécutés)

A. `TAGORA_SOURCING_AI_REPOSITORY_BOOTSTRAP_GO`  
B. `TAGORA_SOURCING_AI_V0_ARCHITECTURE_GO`  
C. `TAGORA_SOURCING_AI_V1_DATA_MODEL_GO`  
D. `TAGORA_SOURCING_AI_V1_AGENT_CHAT_GO`  
E. `TAGORA_SOURCING_AI_ALIBABA_ASSISTED_INTAKE_GO`  
F. `TAGORA_SOURCING_AI_MAIL_AI_CONTRACT_GO`  
G. `TAGORA_SOURCING_AI_PLATFORM_CONNECTOR_DESIGN_GO`

Prochaine étape recommandée après PASS : **A**, sous nouveau GO Martin.

## Paquets de transfert

Préparés, **non exécutés**. `MARTIN_TRANSFER_REQUIRED=YES`.

- [PAQUET_TRANSFERT_SOURCING_AI_PROJET.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_PROJET.md)
- [PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md)
- [PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md)
- [PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md)
- [PAQUET_TRANSFERT_SOURCING_AI_STOCK_PREMIUM.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_STOCK_PREMIUM.md)

## Statut

**Fondation validée — 2026-08-16** — DEC-024 / ADR-0012 / VALD-103. Repository HOLD. Aucune implémentation.
