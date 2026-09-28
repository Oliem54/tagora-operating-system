# EXPANORA — Architecture V1

Architecture V1 validée du moteur IA de croissance et de marketing omnicanal TAGORA.

Ce document fige l'architecture. Il ne crée aucun produit, aucun dépôt, aucun connecteur, aucun DNS, aucune page Website.

```text
DELIVERABLE=EXPANORA_ARCHITECTURE_V1
GATE=EXPANORA-ARCHITECTURE-V1-VALIDATION
PRIOR_GATE=EXPANORA-ARCHITECTURE-V1-GO
MODE=ARCHITECTURE_VALIDATION_ONLY
DATE=2026-09-22
PROJECT=TAGORA_EXPANORA
DECIDEUR=Martin ST-Gelais — Direction
IMPLEMENTATION_AUTHORIZED=NO
STATUS=EXPANORA_ARCHITECTURE_V1_VALIDATED
ADR=ADR-0020
DECISION=DEC-032
VALIDATION=VALD-110
VALIDATION_STATUS=VALIDE
TOS_SCOPE_ONLY=YES
OTHER_MODULE_WRITE_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
LOCAL_PROJECT_PATH=C:\dev\TAGORA\tagora-expanora
REPO_CREATED=NO
```

ADR-0014, le fichier du registre des modules, la nomenclature des six modules SaaS et les domaines canoniques ne sont pas réécrits par cette validation. La tuile Nexus est réservée par la décision ci-dessous. Son inscription physique dans le registre des modules attend un gate de registre, parce que le logo, la palette, le domaine et le prix ne sont pas décidés et ne doivent pas être inventés.

---

## 1. Mission

EXPANORA est un **module autonome distinct**. Il est le moteur IA de croissance et de marketing omnicanal de TAGORA.

Il prépare et recommande des actions de croissance pour plusieurs entreprises et plusieurs marques. Quand une action doit sortir d'EXPANORA, elle part comme **demande d'action auditée**. Le module propriétaire exécute. EXPANORA n'écrit pas dans la base d'un autre module.

L'optimisation porte sur les ventes, les revenus et la marge. Les clics, impressions et leads restent des mesures de diagnostic.

```text
COMMERCIAL_NAME=TAGORA EXPANORA
INTERNAL_ENGINE_NAME=Growth AI
VISIBLE_AGENT_NAME=EXPANORA Growth Orchestrator
PRODUCT_POSITIONING=AI_OMNICHANNEL_GROWTH_ENGINE
PROJECT_TYPE=AUTONOMOUS_DISTINCT_TAGORA_SAAS_MODULE
CANONICAL_MODULE_KEY=tagora_expanora
NEXUS_TILE_RESERVED=YES
NEXUS_TILE_VISIBLE_NOW=NO
COMMERCIAL_PRICING=DECIDED_LATER
ROUTE_AND_DOMAIN=DECIDED_AT_DEPLOYMENT_ARCHITECTURE
MODULE_ARCHITECTURE_VALIDATED=YES
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
```

---

## 2. Frontières

| Système | Rôle | Rapport à EXPANORA |
|---|---|---|
| TAGORA Website | Site public TAGORA (`tagora.ca`) seulement | Hors périmètre produit. EXPANORA ne gère pas `tagora.ca`. |
| Sites commerciaux des entreprises | WordPress distincts, un lien par marque | Lecture par Site Adapter. Écriture désactivée par défaut. |
| TAGORA Nexus | Portail, identité, entitlement, tuile réservée | Courtier d'accès. Pas le moteur marketing. |
| TAGORA DEPORA | Inventaire et disponibilité | Lecture. Coût opérationnel provisoire, non autoritatif. |
| TAGORA PULS | Conversations et séquences | Reçoit une demande d'action. PULS exécute. |
| TAGORA MESSOR | Courrier | Reçoit une demande de campagne autorisée. MESSOR exécute. |
| TAGORA YORVA | Sourcing | Lecture de contexte d'offre. Aucune autorité d'achat. |
| TAGORA HORORA | Temps et opérations humaines | Aucune donnée RH dans le contexte croissance. |
| TAGORA ETIOQ | Étiquettes électroniques | Lecture de prix et promo. Pas d'écriture étiquette. |
| TAGORA Voice IA | Communications vocales | Reçoit une demande d'action autorisée. Voice exécute. |
| Système comptable connecté | Marge et résultat financiers | Source autoritative de la marge, quand il est connecté. |

```text
TAGORA_WEBSITE_OWNS_TAGORA_SITE_ONLY=YES
CUSTOMER_COMMERCE_SITES=SEPARATE_WORDPRESS
WORDPRESS_WRITE=DISABLED_BY_DEFAULT
EXPANORA_EDITS_TAGORA_CA=NO
DIRECT_CROSS_MODULE_DATABASE_WRITE=FORBIDDEN
```

---

## 3. Principes Evergreen

Le cœur ne connaît aucune plateforme, aucun fournisseur IA et aucun site en particulier. Il connaît des ports, un modèle marketing canonique et un registre de capacités.

```text
CORE_DEPENDS_ON_PORTS_ONLY=YES
AI_VENDOR_LOCKED_IN_CORE=NO
PLATFORM_LOCKED_IN_CORE=NO
META_ARCHITECTURAL_DEPENDENCY=NO
NEW_PLATFORM=NEW_CHANNEL_ADAPTER_PLUS_CAPABILITY_MANIFEST
NEW_AI_VENDOR=NEW_PROVIDER_ADAPTER_BEHIND_AI_PROVIDER_CONTRACT
NEW_SCOUT=NEW_SCOUT_PROFILE
MISSING_CAPABILITY=CAPABILITY_ABSENT
CAPABILITY_ABSENT_FAIL_CLOSED=YES
SIMULATED_SUCCESS=FORBIDDEN
CONTRACTS_VERSIONED=YES
```

Une capacité absente arrête l'action. Elle ne produit jamais un faux succès et elle n'est pas rejouée comme si elle pouvait réussir.

Trois couches interchangeables :

1. **Channel Adapter Layer** — plateformes externes. Toutes commencent en lecture seule.
2. **AI Provider Layer** — derrière l'AI Provider Contract. Aucun vendeur dans le cœur.
3. **Source Connector Layer** — WordPress, DEPORA, YORVA, ETIOQ, comptabilité, recherche Web, saisie humaine.

Le **Capability Registry** déclare ce que chaque adapter sait faire, pour quel tenant et quelle marque, dans quelle version de contrat.

---

## 4. Composants

| Composant | Responsabilité |
|---|---|
| Control Plane | Contexte tenant + marque, mode, session Nexus, corrélation |
| Isolation Plane | Filtre obligatoire `tenant_id` + `brand_id` |
| Business Context Graph | Graphe de marque : produits, offres, claims, sites, canaux, campagnes, expériences, résultats, preuves |
| Canonical Marketing Data Model | Objets marketing indépendants des plateformes |
| Growth Orchestrator | Agent visible. Mission, synthèse, demandes d'action. Compatible avec l'identité collègue IA si elle peut s'étendre |
| Specialist Runtime | Spécialistes cachés par défaut, instanciés par entreprise et par marque |
| Brand & Product Knowledge | Connaissance produit avec provenance. Aucune spécification inventée |
| Growth AI Engine | Plans et expériences. Objectif = revenu et marge |
| Web Intelligence Engine | Recherche Web permanente |
| Platform Scout | Benchmark permanent des plateformes et de leurs capacités publiques |
| Trend Scout | Tendances de demande et d'usage |
| Creative Scout | Angles créatifs, sans publication |
| Competitive Scout | Présences et offres concurrentes publiques |
| Tech Scout | Formats et techniques, traduits en capacités d'adapter |
| Commerce Scout | Prix, assortiments, promotions et mécaniques commerciales publiques |
| Opportunity Engine | Idées qui croisent données Web et données internes |
| Experiment Registry / Sandbox Lab | Hypothèses, variantes, statut, bac à sable sans dépense ni écriture externe |
| Performance / Learning Memory | Mémoire de performance par tenant et par marque |
| Global Non-Sensitive Learning | Apprentissage sans donnée privée d'entreprise ou de marque |
| Measurement & Value Engine | Vues d'attribution multiples, ventes, revenu, marge, dépense |
| Channel Adapter Layer | Lecture seule au départ. Écriture seulement après choix de pilote |
| AI Provider Contract | Port unique des fournisseurs. Le cœur n'en nomme aucun |
| Source Connector Layer | Faits externes en lecture |
| Action Request / Command Contract | Demande auditée vers le module propriétaire |
| Policy Plane | Budgets, approbations, pre-flight, audit, kill switch, rollback |
| Capability Registry | Manifestes versionnés |

Aucun de ces composants n'est implémenté par ce gate.

---

## 5. Modèle canonique, graphe et mémoire

### 5.1 Canonical Marketing Data Model

Le modèle canonique est indépendant des plateformes. Le cœur stocke ces objets, pas la forme native d'un vendeur :

`Brand`, `Product`, `Offer`, `Claim`, `Audience`, `Message`, `Creative`, `Campaign`, `Placement`, `Experiment`, `Budget`, `Outcome`.

Un adapter projette les identifiants externes vers ces objets. La charge utile de la plateforme reste une preuve d'adapter. Elle ne devient pas le modèle canonique.

Meta peut être un candidat de canal au pilote. Meta n'est pas une dépendance du modèle.

### 5.2 Business Context Graph

Le graphe relie, pour une marque : produits, offres, claims autorisés, site WordPress, comptes de canal, audiences, campagnes, expériences, résultats, observations des scouts et faits internes (stock, prix magasin, offre YORVA, marge).

Chaque nœud porte `tenant_id`, `brand_id` et une provenance. Un nœud sans provenance n'entre pas dans le graphe.

### 5.3 Performance / Learning Memory

La mémoire de performance est privée, scopée `tenant_id` + `brand_id`. Elle retient ce qui a été tenté, les vues de résultat, la provenance et la décision humaine.

### 5.4 Séparation de l'apprentissage

```text
PRIVATE_MEMORY=tenant_id + brand_id
PRIVATE_MEMORY_LEAVES_TENANT=NO
GLOBAL_LEARNING=NON_SENSITIVE_ONLY
GLOBAL_LEARNING_MAY_CONTAIN=capability gaps, adapter reliability class, public platform benchmark
GLOBAL_LEARNING_FORBIDDEN=tenant identifiers, brand names, products, creatives, audiences, customer metrics, prompts, customer site URLs
PRIVATE_TO_GLOBAL_PROMOTION=FORBIDDEN_WITHOUT_EXPLICIT_VALIDATION
PROVIDER_TRAINING_ON_CUSTOMER_DATA_DEFAULT=NO
```

---

## 6. Modèle multi-entreprise et multi-marque

```text
TENANT = entreprise
BRAND  = marque appartenant à exactement un tenant
CHANNEL_ACCOUNT = compte plateforme rattaché à exactement une marque
SITE_CONNECTION = site WordPress rattaché à exactement une marque
AGENT_INSTANCE = rôle spécialiste + tenant_id + brand_id
PILOT_SHAPE=ONE_TENANT + ONE_BRAND + ONE_WORDPRESS
PILOT_BRAND_CANDIDATE=X-Plod
PILOT_BRAND_CONFIRMATION=LATER
```

X-Plod peut être le candidat pilote. Sa confirmation est ultérieure. Elle ne bloque pas cette architecture.

Alignement Nexus (ADR-0009, ADR-0010, ADR-0019) :

- `tenant_id` est le périmètre commercial.
- `organization_id` Nexus est le périmètre d'organisation du portail.
- Les rôles `organization_owner`, `organization_admin` et `organization_member` peuvent désigner qui reçoit un rôle EXPANORA. Ils ne dépensent pas et ne publient pas.

```text
CROSS_TENANT=DENY
CROSS_BRAND_DEFAULT=DENY
BRAND_SHARE_POLICY_DEFAULT=DENY
SHARED_EMBEDDINGS=NO
SHARED_AUDIENCES=NO
SHARED_PIXELS=NO
SHARED_AD_ACCOUNTS=NO
SHARED_PROMPT_MEMORY=NO
FAIL_CLOSED_IF_SCOPE_AMBIGUOUS=YES
```

Chaque ligne, vecteur, cache, journal, nœud de graphe et contexte de prompt porte `tenant_id` et `brand_id`. Une requête sans les deux est refusée.

---

## 7. Contrats intermodules — demandes d'action

EXPANORA n'écrit dans aucune base d'un autre module.

À terme, EXPANORA émet une demande d'action auditée. Le module cible reste propriétaire de ses données, de ses permissions, de l'exécution et de ses règles métier.

```text
EXPANORA
→ ACTION REQUEST / COMMAND CONTRACT
→ APPROVAL si requise
→ MODULE PROPRIÉTAIRE exécute
→ RESULT EVENT retourne à EXPANORA
```

Contrat minimal :

```text
action_request_id
idempotency_key
tenant_id
brand_id
target_module
command_name
payload_minimal
policy_decision_id
requested_by
approval_status
```

Exemples de commandes, documentaires seulement :

| Commande | Module propriétaire | Le propriétaire conserve |
|---|---|---|
| `puls.commercial_sequence.create_or_activate` | PULS | Séquences, conversations, permissions PULS |
| `messor.authorized_campaign.execute` | MESSOR | Courrier, envoi, permissions MESSOR |
| `voice.authorized_action.execute` | Voice | Téléphonie, session vocale, permissions Voice |

Le module cible peut refuser. Le refus revient comme Result Event. EXPANORA l'audite. Elle ne contourne pas le refus par une écriture directe.

Lectures, distinctes des commandes :

| Module | Lecture autorisée par contrat | Interdit |
|---|---|---|
| Nexus | Identité, tenant, organisation, entitlement, handoff | Écrire les rôles de gouvernance |
| DEPORA | Produit, disponibilité, coût opérationnel provisoire | Écrire le stock ; traiter ce coût comme une marge autoritative |
| YORVA | Contexte d'offre déjà qualifié | Sourcer, commander, payer |
| ETIOQ | Prix ou promo déjà affichés | Pousser une étiquette |
| HORORA | Rien | Lire des données RH |
| Website | Rien | Modifier `tagora.ca` |

```text
CANONICAL_MODULE_KEY=tagora_expanora
ENTITLEMENT_GRANTS_ACCESS_NOW=NO
REGISTRATION_GRANTS_SUBSCRIPTION=NO
NEXUS_TILE_RESERVED=YES
NEXUS_TILE_VISIBLE_NOW=NO
MODULE_REGISTRY_FILE_AMENDED=NO
```

Le handoff futur suit TAGORA_HANDOFF_V1 : code opaque, assertion serveur à serveur, session locale, `tenant_id` explicite. Aucun endpoint n'est défini ici.

---

## 8. Flux de données

Aucun bus runtime n'est créé ici.

### 8.1 Entrées

| Flux | Source | Données minimales | Interdit |
|---|---|---|---|
| Session | Nexus | `tagora_user_id`, `tenant_id`, clé `tagora_expanora`, rôles EXPANORA | mot de passe, jeton brut |
| Produit | DEPORA, WordPress, saisie humaine | identifiant, marque, libellé, provenance | coût présenté comme autoritatif |
| Marge autoritative | Système comptable connecté | montant, devise, provenance, `authoritative=YES` | marge inventée |
| Coût provisoire | DEPORA | montant, `authoritative=NO`, libellé `OPERATIONAL_PROVISIONAL` | usage autopilot |
| Web | Search Adapter | URL, date, extrait, confiance, scout | contournement d'un contrôle d'accès |
| Trafic | Site Adapter WordPress | site de la marque, période, sessions, sources, pages | `tagora.ca`, secrets |
| Résultat module | Result Event du propriétaire | `action_request_id`, statut, horodatage | copie de la base du module |

### 8.2 Sorties

| Flux | Effet | Validation |
|---|---|---|
| `expanora.opportunity.proposed` | Carte d'opportunité | Avant toute demande d'action |
| `expanora.action_request.submitted` | Demande vers le module propriétaire | Approbation si requise |
| `expanora.action_request.result_received` | Enregistrement du Result Event | Non |
| `expanora.action.killed` | Arrêt | Kill switch |
| `expanora.measurement.outcome_recorded` | Vues d'attribution et valeur | Non si lecture seule |

### 8.3 Parcours nominal

1. Nexus ouvre une session scopée tenant. La marque unique est résolue, sinon refus.
2. Le mode est Advisor, Copilot ou Supervised Autopilot.
3. Les scouts et les connecteurs internes alimentent le Business Context Graph, avec provenance.
4. L'Opportunity Engine croise le Web et les données internes.
5. Une idée devient une expérience dans le Sandbox Lab, sans écriture externe.
6. Le pre-flight brand/compliance bloque ou laisse passer.
7. Advisor s'arrête à la recommandation.
8. Copilot prépare la demande d'action et attend l'approbation.
9. Après approbation, le module propriétaire exécute et renvoie un Result Event.
10. La mémoire de performance de la marque enregistre le résultat. Rien de privé ne passe dans l'apprentissage global.

Si la Policy Plane est indisponible, toute demande d'action est refusée.

---

## 9. Agents

Rôles documentaires (TAF). Aucun agent n'est déployé. Les spécialistes sont instanciés par `(tenant_id, brand_id)`.

L'utilisateur voit principalement le **Growth Orchestrator**. Les spécialistes restent cachés par défaut. Ils peuvent apparaître dans les diagnostics, les explications avancées et l'audit.

L'orchestrateur visible est prévu pour être compatible avec `TAGORA_AI_COLLEAGUE_V1` (ADR-0018). Cette validation ne réécrit pas ADR-0018 et n'invente pas une seconde persona.

| ID | Rôle | Mission | Effet externe |
|---|---|---|---|
| AI-EXPANORA-001 | Growth Orchestrator | Mission, synthèse, demande d'action | Seulement via Command Contract après politique |
| AI-EXPANORA-002 | Product Knowledge Agent | Produits et claims, trous explicites | Non |
| AI-EXPANORA-003 | Web Search Agent | Recherche Web permanente | Non |
| AI-EXPANORA-004 | Trend Scout | Tendances | Non |
| AI-EXPANORA-005 | Platform Scout | Benchmark des plateformes | Non |
| AI-EXPANORA-006 | Creative Scout | Angles créatifs | Non |
| AI-EXPANORA-007 | Tech Scout | Techniques nouvelles, traduites en capacités | Non |
| AI-EXPANORA-008 | Competitive Scout | Concurrence publique | Non |
| AI-EXPANORA-009 | Commerce Scout | Prix, assortiments, promotions publics | Non |
| AI-EXPANORA-010 | Opportunity Agent | Cartes croisant Web et données internes | Non |
| AI-EXPANORA-011 | Acquisition Agent | Plans dans les capacités déclarées | Demande d'action après politique |
| AI-EXPANORA-012 | WordPress Traffic Analyst | Lecture analytics du site de marque | Non |
| AI-EXPANORA-013 | Value & Margin Agent | Vues de valeur, marge fiable ou inconnue | Non |
| AI-EXPANORA-014 | Brand Compliance Agent | Pre-flight voix, claims, interdits | Peut bloquer |

Un fait sans provenance n'entre pas. Un claim hors liste est refusé. Aucun agent ne lit un secret.

---

## 10. Advisor, Copilot, Supervised Autopilot

Le mode de départ d'une marque est **Advisor**.

| Action | Advisor | Copilot | Supervised Autopilot |
|---|---|---|---|
| Recommander | Oui | Oui | Oui |
| Sandbox | Oui | Oui | Oui |
| Demande d'action vers un module | Non | Après approbation humaine | Dans l'enveloppe signée |
| Écriture canal ou WordPress | Non | Non tant que le canal est en lecture seule | Non tant que l'écriture n'est pas ouverte pour ce canal |
| Dépenser | Non | Après approbation, et seulement si l'écriture du canal est ouverte | Plafond de l'enveloppe |

```text
DEFAULT_BRAND_MODE=ADVISOR
CHANNEL_INITIAL_MODE=READ_ONLY
WORDPRESS_WRITE=DISABLED_BY_DEFAULT
AI_SPEND_AUTHORITY_DEFAULT=NO
AI_PAYMENT_AUTHORITY=NO
AUTOPILOT_WITHOUT_RELIABLE_MARGIN=FORBIDDEN
AUTOPILOT_ON_SINGLE_OPAQUE_ATTRIBUTION=FORBIDDEN
AUTOPILOT_WITHOUT_KILL_SWITCH=FORBIDDEN
```

L'enveloppe nomme marques, commandes autorisées, capacités, plafond, période, claims et approbateur. Elle expire.

---

## 11. Opportunity Engine, expériences et pre-flight

L'Opportunity Engine croise les observations Web et les données internes de la marque : produit, stock, prix magasin, offre, trafic WordPress, résultats passés, marge si elle est fiable.

Une carte porte une hypothèse, des preuves, une fourchette de revenu, une fourchette de marge ou `MARGIN_UNKNOWN`, et le mode requis.

### Experiment Registry / Sandbox Lab

Chaque expérience a un identifiant, une hypothèse, des variantes, les vues de succès attendues et un statut : `DRAFT`, `SANDBOX`, `AWAITING_APPROVAL`, `LIVE`, `STOPPED`, `ROLLED_BACK`.

```text
SANDBOX_EXTERNAL_WRITE=NO
SANDBOX_SPEND=NO
LIVE_REQUIRES=PREFLIGHT_PASS AND (APPROVAL OR VALID_ENVELOPE) AND CAPABILITY_PRESENT
```

### Pre-flight brand/compliance

Avant qu'une demande quitte le bac à sable, le pre-flight vérifie : marque résolue, claims autorisés, capacité présente, budget, mode, kill switch inactif, provenance des faits, approbation si requise, marge fiable si le mode est l'autopilot. Un échec est fail-closed.

---

## 12. Web Intelligence et scouts

Recherche Web permanente, cadencée par marque, via Search Adapter seulement.

Scouts obligatoires : **Platform Scout**, **Trend Scout**, **Creative Scout**, **Competitive Scout**, **Tech Scout**, **Commerce Scout**.

Chaque observation porte provenance, date, confiance et portée de marque. Le Platform Scout compare des capacités publiques au Capability Registry. Il ne copie pas un produit tiers et ne rend aucune plateforme obligatoire.

```text
UNAUTHORIZED_SCRAPING=FORBIDDEN
SEARCH_VIA_ADAPTER_ONLY=YES
AI_VENDOR_FOR_SEARCH_LOCKED_IN_CORE=NO
```

---

## 13. Mesure, attribution et marge

```text
NORTH_STAR=net_revenue AND contribution_margin
DIAGNOSTIC=clicks, impressions, leads, ctr, cpc
ATTRIBUTION_V1=MULTI_VIEW
SINGLE_OPAQUE_ATTRIBUTION_DRIVES_AUTOPILOT=NO
```

Quand la donnée existe, EXPANORA conserve en parallèle :

- attribution déterministe ;
- UTM ;
- click IDs ;
- formulaires ;
- CRM ;
- first-touch ;
- last-touch ;
- attribution plateforme ;
- blended attribution.

Une vue absente reste absente. Elle n'est pas fabriquée. Si les vues disponibles se contredisent, l'autopilot est refusé et le conflit est montré. Un humain peut encore décider en Copilot.

```text
AUTHORITATIVE_FINANCIAL_SOURCE=CONNECTED_ACCOUNTING_SYSTEM
QUICKBOOKS=FUTURE_SOURCE_WHEN_OFFICIALLY_INTEGRATED
QUICKBOOKS_CONNECTED_NOW=NO
DEPORA_COST=OPERATIONAL_PROVISIONAL
DEPORA_COST_AUTHORITATIVE=NO
AUTOPILOT_WITHOUT_RELIABLE_MARGIN=FORBIDDEN
```

QuickBooks pourra devenir le système comptable connecté lorsqu'il sera officiellement intégré. Cette architecture ne le connecte pas et n'en fait pas une dépendance du cœur. Sans marge fiable, `AUTOPILOT=FORBIDDEN`.

---

## 14. Adapters, idempotence et retry

### 14.1 Canaux

Tous les canaux commencent en **READ-ONLY**. Le premier canal autorisé à écrire sera choisi pendant le pilote. Meta peut être candidat. Meta ne devient pas une dépendance architecturale.

```text
CHANNEL_INITIAL_MODE=READ_ONLY
FIRST_WRITE_CHANNEL=CHOSEN_DURING_PILOT
META_CANDIDATE=YES
META_ARCHITECTURAL_DEPENDENCY=NO
CAPABILITY_ABSENT_FAIL_CLOSED=YES
```

### 14.2 AI Provider Contract

Le contrat est créé avant tout choix de fournisseur. Le cœur ne nomme aucun vendeur.

Le fournisseur pilote sera sélectionné ensuite selon : capacités, qualité, coût, résidence, rétention, politique d'entraînement, disponibilité.

Exigences :

```text
CUSTOMER_DATA_TRAINING_DEFAULT=NO
RETENTION=MINIMAL
TENANT_SEPARATION=REQUIRED
RESIDENCE=CANADA_WHEN_SUPPORTED
EXCEPTION_REQUIRES_EXPLICIT_VALIDATION=YES
```

### 14.3 WordPress

```text
WORDPRESS_WRITE=DISABLED_BY_DEFAULT
INITIAL_USE=READ + ANALYTICS + RECOMMENDATIONS
TAGORA_WEBSITE_CONNECTION=FORBIDDEN
PILOT_SITE_COUNT=1
```

### 14.4 Idempotence, retry, audit

```text
IDEMPOTENCY_KEY_REQUIRED_ON_ACTION_REQUEST=YES
SAME_KEY_RETURNS_SAME_REQUEST=YES
RETRY_TRANSIENT_FAILURES_ONLY=YES
RETRY_BOUNDED=YES
BUSINESS_REFUSAL_NOT_RETRIED=YES
CAPABILITY_ABSENT_NOT_RETRIED_AS_SUCCESS=YES
AUDIT=APPEND_ONLY
AUDIT_COVERS=requests, approvals, owner results, adapter reads, kill switch, rollback, preflight denials
AUDIT_SECRETS=FORBIDDEN
```

Le rollback et le kill switch de l'architecture initiale restent en vigueur. Le kill switch est lu avant chaque demande d'action. S'il est actif, ou si son magasin ne répond pas, la demande est refusée.

---

## 15. Sécurité et permissions

| Rôle | Peut |
|---|---|
| `expanora.tenant.admin` | Marques, plafonds tenant, nomination des rôles de marque |
| `expanora.brand.admin` | Connexions en lecture, voix, claims |
| `expanora.brand.approver` | Approuver une demande d'action, une dépense future, une enveloppe |
| `expanora.brand.operator` | Préparer en Copilot |
| `expanora.brand.analyst` | Lire mesure, graphe et audit |
| `expanora.brand.autopilot_supervisor` | Armer ou suspendre l'autopilot dans l'enveloppe |

L'auteur d'une demande ne s'approuve pas lui-même. Un rôle ne traverse pas une marque.

Les jetons restent dans un magasin de secrets. Ils n'entrent ni dans les prompts, ni dans les journaux, ni dans les Result Events.

---

## 16. Phases d'implémentation

Chaque phase est un gate séparé. **Aucune n'est autorisée.**

| Phase | Objet | Autorisée |
|---|---|---|
| 0 | Validation de cette architecture | Close par VALD-110 |
| 1 | Architecture de déploiement : route, domaine, inscription de la tuile réservée | Non |
| 2 | Bootstrap du dépôt `C:\dev\TAGORA\tagora-expanora` | Non |
| 3 | Control Plane, isolation, audit, kill switch, sans IO externe | Non |
| 4 | Modèle canonique, Business Context Graph, provenance | Non |
| 5 | AI Provider Contract, sans fournisseur verrouillé | Non |
| 6 | Scouts et Web Intelligence, mode Advisor | Non |
| 7 | Opportunity Engine Web + données internes, Sandbox Lab | Non |
| 8 | WordPress en lecture, un site, une marque, une entreprise | Non |
| 9 | Attribution multi-vues ; marge autoritative seulement si la comptabilité est connectée | Non |
| 10 | Canaux en lecture seule | Non |
| 11 | Copilot : demandes d'action approuvées vers le module propriétaire | Non |
| 12 | Supervised Autopilot : marge fiable, vues non contradictoires, enveloppe, kill switch | Non |

```text
NEXT_GATE=EXPANORA-DEPLOYMENT-ARCHITECTURE
NEXT_GATE_AUTHORIZED=NO
LOCAL_PROJECT_PATH=C:\dev\TAGORA\tagora-expanora
REPO_CREATED=NO
DNS_AUTHORIZED=NO
```

---

## 17. Décisions de validation

| ID | Décision Martin | Statut dans l'architecture |
|---|---|---|
| OD-EXP-01 | Module autonome distinct. Tuile Nexus réservée. Prix plus tard. | Tranché. Tuile non visible. Registre des modules non réécrit ici. |
| OD-EXP-02 | Clé canonique `tagora_expanora`. Route et domaine à l'architecture de déploiement. | Tranché. |
| OD-EXP-03 | Aucun fournisseur dans le cœur. AI Provider Contract d'abord. Pilote choisi ensuite sur critères. | Tranché. |
| OD-EXP-04 | Tous les canaux en lecture seule. Premier canal d'écriture choisi au pilote. Meta candidat, pas une dépendance. | Tranché. |
| OD-EXP-05 | Attribution V1 multi-vues. Aucune attribution opaque unique ne pilote seule l'autopilot. | Tranché. |
| OD-EXP-06 | Source autoritative = système comptable connecté. QuickBooks plus tard, s'il est officiellement intégré. DEPORA = coût provisoire non autoritatif. Sans marge fiable, autopilot interdit. | Tranché. |
| OD-EXP-07 | `WORDPRESS_WRITE=DISABLED_BY_DEFAULT`. Lecture, analytics, recommandations. | Tranché. |
| OD-EXP-08 | Growth Orchestrator visible, compatible avec ADR-0018 si possible. | Tranché. ADR-0018 non réécrite. |
| OD-EXP-09 | Pas d'entraînement sur les données clients par défaut, rétention minimale, séparation tenant, résidence Canada lorsqu'elle est supportée, exception par validation explicite. | Tranché. |
| OD-EXP-10 | Pilote : une entreprise, une marque, un WordPress. X-Plod candidat, à confirmer plus tard. | Forme tranchée. Confirmation du nom plus tard. |
| OD-EXP-11 | Spécialistes cachés par défaut. Visibles dans diagnostics, explications avancées et audit. | Tranché. |

Suites explicites, non bloquantes pour cette validation :

- prix commercial ;
- route et domaine exacts ;
- choix du fournisseur pilote après le contrat ;
- choix du premier canal d'écriture pendant le pilote ;
- intégration officielle du système comptable, QuickBooks compris ;
- confirmation que le pilote est X-Plod ;
- ligne physique dans le registre des modules ;
- complément éventuel de la liste des modules d'ADR-0018.

---

## 18. Boundary

```text
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
STAGING_CHANGE_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
WEBSITE_WRITE_AUTHORIZED=NO
NEXUS_WRITE_AUTHORIZED=NO
DEPORA_WRITE_AUTHORIZED=NO
PULS_WRITE_AUTHORIZED=NO
MESSOR_WRITE_AUTHORIZED=NO
YORVA_WRITE_AUTHORIZED=NO
HORORA_WRITE_AUTHORIZED=NO
ETIOQ_WRITE_AUTHORIZED=NO
VOICE_WRITE_AUTHORIZED=NO
DIRECT_CROSS_MODULE_DATABASE_WRITE=FORBIDDEN
MODULE_REGISTRY_FILE_AMENDED=NO
ADR_0014_AMENDED=NO
ADR_0018_AMENDED=NO
CONNECTOR_IMPLEMENTATION_AUTHORIZED=NO
SPEND_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
```

---

## Statut

**EXPANORA_ARCHITECTURE_V1_VALIDATED** — Martin ST-Gelais, 2026-09-22, VALD-110. Les précisions de contrats, de composants et d'OD sont intégrées. L'implémentation reste interdite.
