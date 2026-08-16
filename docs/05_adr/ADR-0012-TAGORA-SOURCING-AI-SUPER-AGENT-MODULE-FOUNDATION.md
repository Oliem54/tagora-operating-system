# ADR-0012 — Fondation officielle du module TAGORA Sourcing AI (super-agent)

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-103**  
Décision : **DEC-024**

Cette ADR enregistre l'**existence officielle** du module TAGORA Sourcing AI, son rôle de super-agent de sourcing, ses frontières, ses limites d'autorité et ses surfaces candidates.

Elle **complète** ADR-0004 / ADR-0007 / ADR-0008 / ADR-0009 / ADR-0010 / ADR-0011. Elle **ne les remplace pas**.  
Les domaines canoniques déjà validés (Time, Mail, Stock, Pulse) restent inchangés. Les surfaces Sourcing sont **candidates**, non adoptées DNS.

Elle **n'exécute pas** l'ancien gate `TOS_TAGORA_SOURCING_AI_MODULE_FOUNDATION_GO` (jamais exécuté ; remplacé par le présent gate enrichi).

Elle **n'autorise aucune** implémentation produit, aucun repo, aucun DNS, aucun Mail IA réel, aucun Alibaba réel, aucun scraping, aucun achat, aucune commande, aucun paiement.

---

## Contexte

Oliem Solutions agit comme importateur, distributeur, partenaire de développement produit et partenaire de sourcing — pour ses divisions (Titan, X-Plod, Skyline Kuzin, Emoby) et pour des clients externes.

Mail IA porte le courriel. Il ne doit pas devenir la base métier fournisseurs. Aucun module existant ne porte le magasinage, la comparaison d'offres, le scoring multi-domaines, le landed cost estimatif, la mémoire fournisseur ni le copilot de négociation.

Un super-agent unique, visible comme **TAGORA Sourcing Agent**, doit pouvoir recevoir une mission en langage naturel et orchestrer des spécialistes internes cachés — sans autorité d'achat.

---

## Décision

Martin confirme :

```text
MODULE_OFFICIALLY_DEFINED=YES
COMMERCIAL_NAME=TAGORA Sourcing AI
INTERNAL_ENGINE_NAME=Supplier Intelligence
VISIBLE_AGENT_NAME=TAGORA Sourcing Agent
PRODUCT_POSITIONING=AI_SOURCING_COPILOT_FOR_IMPORTER_AND_DISTRIBUTOR
PROJECT_TYPE=AUTONOMOUS_TAGORA_SAAS_AGENTIC_MODULE
MONTHLY_SAAS_RESELLABLE=YES
ONE_VISIBLE_CHAT_AGENT=YES
INTERNAL_SPECIALIST_AGENTS=HIDDEN_ORCHESTRATED
ALIBABA_FIRST_CLASS_CHANNEL=YES
OTHER_SUPPLIER_PLATFORMS_SUPPORTED_FUTURE=YES
V1_DEFAULT_AUTONOMY=LEVEL_2
AI_PURCHASE_AUTHORITY=NO
AI_ORDER_PLACEMENT_AUTHORITY=NO
AI_PAYMENT_AUTHORITY=NO
HUMAN_DECISION_REQUIRED=YES
SURFACE_STATUS=CANDIDATE
DNS_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
REAL_MAIL_AI_INTEGRATION_AUTHORIZED=NO
ALIBABA_REAL_CONNECTOR_AUTHORIZED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
```

Le détail métier, agentique, scoring, isolation, V1 / post-V1 et risques est figé dans [TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md](../04_adoption_modules/TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md).

### Surfaces candidates (non canoniques DNS)

```text
PUBLIC_COMMERCIAL_PAGE_FR=https://tagora.ca/fr/sourcing
PUBLIC_COMMERCIAL_PAGE_EN=https://tagora.ca/en/sourcing
SAAS_APPLICATION_CANDIDATE=https://sourcing.tagora.ca
NEXUS_MODULE_ROUTE_CANDIDATE=https://app.tagora.ca/modules/sourcing
NEXUS_MODULE_KEY=sourcing
```

L'adoption officielle de ces adresses dans ADR-0004 / ADR-0007 / ADR-0008 exige un Human Gate Martin distinct.

### Repo recommandé (non créé)

```text
RECOMMENDED_REPO_NAME=tagora-sourcing-ai
RECOMMENDED_LOCAL_PATH=C:\Dev\TAGORA\tagora-sourcing-ai
RECOMMENDED_GITHUB=Oliem54/tagora-sourcing-ai
REPO_CREATED=NO
```

### Prochaine étape

```text
NEXT_RECOMMENDED_GATE=TAGORA_SOURCING_AI_REPOSITORY_BOOTSTRAP_GO
NEXT_GATE_AUTHORIZED=NO
HUMAN_GATE=YES
```

---

## Options considérées

1. **Étendre Mail IA** pour porter le sourcing — rejeté : Mail IA resterait une boîte courriel ; le métier fournisseurs serait mélangé au canal email.
2. **Étendre Stock Premium** — rejeté : Stock porte l'inventaire et l'après-décision ; le sourcing précède l'achat.
3. **Module autonome TAGORA Sourcing AI (super-agent)** — retenu : SaaS revendable, un agent visible, spécialistes internes cachés, Alibaba canal prioritaire, autres plateformes par adapters, HITL avant tout engagement.
4. **Exécuter l'ancien gate fondation non enrichi** — rejeté : remplacé par le présent gate super-agent.

Non retenu : créer le repo maintenant ; connecter Alibaba ; intégrer Mail IA réellement ; adopter DNS ; donner une autorité d'achat à l'IA.

---

## Conséquences

### Positives

- Le module existe officiellement dans TOS, avec nom commercial, moteur interne et agent visible.
- Frontières Mail IA / Nexus / Website / Stock-ERP sont traçables.
- L'autorité d'achat, de commande et de paiement est enregistrée à **NO**.
- Alibaba est canal prioritaire sans connecteur réel.
- Les surfaces restent candidates ; ADR-0004 n'est pas réécrit.

### Négatives / contraintes

- Aucun produit n'existe encore.
- Les surfaces candidates ne sont pas des domaines canoniques.
- Les paquets de transfert doivent être transmis par Martin ; ils ne sont pas exécutés.
- Un nouveau Human Gate est obligatoire avant bootstrap du dépôt.

### Boundary

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
ALIBABA_REAL_CONNECTOR_AUTHORIZED=NO
ALIBABA_LOGIN_AUTHORIZED=NO
ALIBABA_MESSAGE_SEND_AUTHORIZED=NO
ALIBABA_AUTOMATION_AUTHORIZED=NO
REAL_MAIL_AI_INTEGRATION_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
HANDOFF_IMPLEMENTATION_AUTHORIZED=NO
SSO_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
STOCK_INTEGRATION_AUTHORIZED=NO
ODOO_INTEGRATION_AUTHORIZED=NO
PURCHASE_ORDER_CREATION_AUTHORIZED=NO
PAYMENT_IMPLEMENTATION_NOW=NO
SCRAPING_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Modules impactés

TOS (documentation seulement).  
Cible future : TAGORA Sourcing AI — **repo non créé**.  
Mail IA, Nexus, Website, Stock Premium : **non touchés** ; paquets préparés, non exécutés.  
Time, Pulse, Voice, Platform : **non touchés**.

---

## Références

- [TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md](../04_adoption_modules/TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md)
- [APPLICATION_PROGRESSIVE_TAGORA_SOURCING_AI.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_SOURCING_AI.md)
- [VALIDATION_VALD_103_TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md](../10_knowledge/VALIDATION_VALD_103_TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md)
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-024
- [ADR-0004](ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md) — non remplacé
- [ADR-0007](ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md) — non remplacé
- [ADR-0008](ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md) — non remplacé

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-103 | Fondation officielle TAGORA Sourcing AI (super-agent) | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
