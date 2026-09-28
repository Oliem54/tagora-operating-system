# ADR-0020 — Architecture V1 d'EXPANORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-09-22**

Validation : **VALD-110**  
Décision : **DEC-032**

Cette ADR fige l'architecture V1 de TAGORA EXPANORA, moteur IA de croissance et de marketing omnicanal, après intégration des précisions du gate `EXPANORA-ARCHITECTURE-V1-VALIDATION`.

Elle **complète** ADR-0003, ADR-0004, ADR-0007, ADR-0008, ADR-0009, ADR-0010, ADR-0014, ADR-0018 et ADR-0019. Elle **ne les remplace pas**.  
Elle **n'amende pas** la nomenclature des six modules, le fichier du registre des modules, ni les domaines canoniques.  
Elle **réserve** une tuile Nexus non visible et fixe la clé `tagora_expanora`.

Elle **n'autorise aucune** implémentation, aucun dépôt, aucun DNS, aucun connecteur, aucune dépense, aucune modification Staging ou Production, aucune modification d'un autre module.

---

## Date

2026-09-22

## Contexte

Le gate `EXPANORA-ARCHITECTURE-V1-GO` a produit une architecture proposée. Martin l'approuve globalement et exige, avant de la figer, le contrat de demandes d'action vers les modules propriétaires, les composants explicites de contexte, de mesure et de fiabilité, et la clôture des décisions OD-EXP-01 à OD-EXP-11.

---

## Décision

Martin valide :

```text
STATUS=EXPANORA_ARCHITECTURE_V1_VALIDATED
COMMERCIAL_NAME=TAGORA EXPANORA
PROJECT_TYPE=AUTONOMOUS_DISTINCT_TAGORA_SAAS_MODULE
CANONICAL_MODULE_KEY=tagora_expanora
NEXUS_TILE_RESERVED=YES
NEXUS_TILE_VISIBLE_NOW=NO
COMMERCIAL_PRICING=DECIDED_LATER
ROUTE_AND_DOMAIN=DECIDED_AT_DEPLOYMENT_ARCHITECTURE
LOCAL_PROJECT_PATH=C:\dev\TAGORA\tagora-expanora
REPO_CREATED=NO
DIRECT_CROSS_MODULE_DATABASE_WRITE=FORBIDDEN
ACTION_REQUEST_COMMAND_CONTRACT=YES
OWNER_MODULE_EXECUTES=YES
RESULT_EVENT_RETURNS_TO_EXPANORA=YES
AI_VENDOR_LOCKED_IN_CORE=NO
AI_PROVIDER_CONTRACT_FIRST=YES
CHANNEL_INITIAL_MODE=READ_ONLY
META_ARCHITECTURAL_DEPENDENCY=NO
ATTRIBUTION_V1=MULTI_VIEW
SINGLE_OPAQUE_ATTRIBUTION_DRIVES_AUTOPILOT=NO
AUTHORITATIVE_FINANCIAL_SOURCE=CONNECTED_ACCOUNTING_SYSTEM
DEPORA_COST_AUTHORITATIVE=NO
AUTOPILOT_WITHOUT_RELIABLE_MARGIN=FORBIDDEN
WORDPRESS_WRITE=DISABLED_BY_DEFAULT
VISIBLE_AGENT=EXPANORA Growth Orchestrator
SPECIALISTS_HIDDEN_BY_DEFAULT=YES
PILOT_SHAPE=ONE_TENANT + ONE_BRAND + ONE_WORDPRESS
PILOT_BRAND_CANDIDATE=X-Plod
PILOT_BRAND_CONFIRMATION=LATER
IMPLEMENTATION_AUTHORIZED=NO
```

Le détail est dans [EXPANORA_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_ARCHITECTURE_V1.md).

### Contrat intermodule

```text
EXPANORA
→ ACTION REQUEST / COMMAND CONTRACT
→ APPROVAL si requise
→ MODULE PROPRIÉTAIRE exécute
→ RESULT EVENT retourne à EXPANORA
```

Exemples documentaires : PULS crée ou active une séquence commerciale ; MESSOR exécute une campagne autorisée ; Voice exécute une action autorisée. Le module cible garde ses données, ses permissions, son exécution et ses règles métier.

### Composants exigés et confirmés

Business Context Graph. Canonical Marketing Data Model indépendant des plateformes. Platform Scout, Trend Scout, Creative Scout, Competitive Scout, Tech Scout, Commerce Scout. Opportunity Engine croisant Web et données internes. Experiment Registry / Sandbox Lab. Performance / Learning Memory par tenant et marque. Pre-flight brand/compliance. Provenance. Idempotence. Retry borné. Audit complet. `CAPABILITY_ABSENT` fail-closed. Séparation stricte entre apprentissage global non sensible et données privées entreprise/marque.

### Prochaine étape

```text
NEXT_GATE=EXPANORA-DEPLOYMENT-ARCHITECTURE
NEXT_GATE_AUTHORIZED=NO
HUMAN_GATE=YES
```

---

## Options considérées

1. **Étendre PULS** — rejetée : PULS reste propriétaire de ses séquences. EXPANORA lui envoie une demande.
2. **Étendre Website** — rejetée : Website gère `tagora.ca` seulement.
3. **Étendre MESSOR** — rejetée : MESSOR exécute le courrier autorisé. Il n'est pas le moteur de croissance.
4. **Module autonome, cœur sans vendeur, demandes d'action vers les propriétaires** — retenue.
5. **Réécrire maintenant la carte des six modules et le registre des tuiles** — rejetée dans ce gate : la tuile est réservée et non visible ; le prix, le logo, la palette et le domaine ne sont pas inventés.

---

## Conséquences

### Positives

- L'architecture V1 est validée, avec les précisions Martin intégrées.
- Aucun module tiers n'est écrit directement par EXPANORA.
- Le cœur peut changer de fournisseur IA et de canal sans réécriture.
- L'autopilot ne peut pas s'appuyer sur une marge provisoire ni sur une attribution opaque unique.
- Les spécialistes restent cachés. L'orchestrateur est l'interface principale.

### Négatives / contraintes

- Le dépôt n'existe pas. Le chemin local officiel est réservé : `C:\dev\TAGORA\tagora-expanora`.
- La tuile n'est pas encore inscrite dans le fichier du registre des modules.
- Le prix, la route, le domaine, le fournisseur pilote, le premier canal d'écriture, l'intégration comptable et la confirmation X-Plod restent des suites. Ils ne rouvrent pas l'architecture.

### Boundary

```text
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
STAGING_CHANGE_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
DIRECT_CROSS_MODULE_DATABASE_WRITE=FORBIDDEN
MODULE_REGISTRY_FILE_AMENDED=NO
ADR_0014_AMENDED=NO
ADR_0018_AMENDED=NO
SPEND_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
```

---

## Modules impactés

TOS (documentation d'architecture seulement).  
Cible future : TAGORA EXPANORA — dépôt non créé.  
Nexus, Website, DEPORA, PULS, MESSOR, YORVA, HORORA, ETIOQ, Voice : **non touchés**.

---

## Références

- [EXPANORA_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_ARCHITECTURE_V1.md)
- [VALIDATION_VALD_110_ARCHITECTURE_EXPANORA_V1.md](../10_knowledge/VALIDATION_VALD_110_ARCHITECTURE_EXPANORA_V1.md)
- [ADR-0014](ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md) — non remplacée
- [ADR-0018](ADR-0018-IDENTITE-VISUELLE-COLLEGUE-IA-TAGORA-V1.md) — non remplacée ; orchestrateur compatible si l'extension est possible
- [ADR-0019](ADR-0019-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md) — rôles de gouvernance distincts des rôles EXPANORA

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-110 | Architecture V1 EXPANORA | **Validé** | Martin ST-Gelais — Direction | 2026-09-22 |
