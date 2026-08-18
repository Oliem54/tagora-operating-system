# TAGORA Sourcing AI — Fondation du super-agent et du module

> **Historique de fondation conservé.** Depuis DEC-026 / ADR-0014 / VALD-105 (2026-08-17), le nom commercial officiel de ce métier est **TAGORA YORVA**. Les références `TAGORA Sourcing AI` ci-dessous décrivent l'état historique DEC-024 et ne doivent pas être interprétées comme le nom commercial courant. Le métier, les interdictions et l'absence d'implémentation demeurent applicables.

## Identité du gate

```text
GATE=TOS_TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION_GO
SUPERSEDES_GATE=TOS_TAGORA_SOURCING_AI_MODULE_FOUNDATION_GO
SUPERSEDED_GATE_EXECUTED=NO
MODE=DOCUMENTATION_ONLY
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
DATE=2026-08-16
DECIDEUR=Martin ST-Gelais — Direction
DECISION=DEC-024
ADR=ADR-0012
VALIDATION=VALD-103
```

L'ancien gate `TOS_TAGORA_SOURCING_AI_MODULE_FOUNDATION_GO` **n'est pas exécuté**. Il est **remplacé** par le présent gate enrichi. Aucune documentation TOS antérieure « Sourcing AI » n'existait dans ce dépôt.

Ce document est la **définition officielle** du module. Il ne crée aucun produit, aucun dépôt, aucun connecteur, aucun DNS.

---

## 1. Décision Martin — existence officielle du module

```text
COMMERCIAL_NAME=TAGORA Sourcing AI
INTERNAL_DOMAIN_NAME=Supplier Intelligence
INTERNAL_ENGINE_NAME=Supplier Intelligence
VISIBLE_AGENT_NAME=TAGORA Sourcing Agent
PRODUCT_POSITIONING=AI_SOURCING_COPILOT_FOR_IMPORTER_AND_DISTRIBUTOR
PROJECT_TYPE=AUTONOMOUS_TAGORA_SAAS_AGENTIC_MODULE
MONTHLY_SAAS_RESELLABLE=YES
MODULE_OFFICIALLY_DEFINED=YES
```

TAGORA Sourcing AI est un **nouveau module TAGORA autonome**, revendable séparément par abonnement mensuel, distinct de Mail IA, Stock Premium, Time, Pulse, Voice, Nexus et Website.

---

## 2. Positionnement Oliem Solutions — importateur / distributeur

Oliem Solutions agit notamment comme :

| Rôle | Usage cible du module |
|---|---|
| IMPORT_AGENT | Recherche, comparaison, conditions, landed cost |
| DISTRIBUTOR | Marge, potentiel de distribution, garanties, SAV |
| PRODUCT_DEVELOPMENT_PARTNER | Personnalisation, outillage, spécifications |
| SUPPLIER_SOURCING_PARTNER | Fournisseurs, risque, mémoire, shortlist |
| CLIENT_PRODUCT_RESEARCH_PARTNER | Adéquation au besoin réel du client |

Le module doit aider Martin et les équipes Oliem à trouver :

- le meilleur produit ;
- le meilleur fournisseur ;
- le meilleur rapport qualité/prix ;
- les meilleures conditions commerciales ;
- les meilleurs délais ;
- les meilleures garanties ;
- les meilleures possibilités de personnalisation ;
- le meilleur potentiel de distribution ;
- la meilleure adéquation avec le besoin réel du client.

```text
BEST_PRODUCT=NOT_LOWEST_PRICE_ONLY
OLIEM_IMPORT_DISTRIBUTOR_POSITIONING_DEFINED=YES
```

La décision d'achat humaine doit considérer au minimum :

PRICE · QUALITY · CONDITIONS · RISK · PROJECT_FIT · LANDED_COST · MARGIN_POTENTIAL · WARRANTY · CERTIFICATIONS · LEAD_TIME · MOQ · PAYMENT_TERMS · CUSTOMIZATION · SUPPLIER_HISTORY · AFTER_SALES_SUPPORT

---

## 3. Vision globale

TAGORA Sourcing AI est le système central d'intelligence, de magasinage, de recherche produit, d'analyse fournisseurs et de sourcing assisté par IA.

Il ne se limite pas à stocker des fournisseurs et des devis. Il reçoit des missions en langage naturel, clarifie, recherche, compare, normalise, score, recommande, prépare les communications, et conserve la mémoire — **sans décider l'achat**.

Exemples de missions :

- « Trouve-moi un nouveau fournisseur de batteries lithium 72 V pour X-Plod. »
- « Compare les meilleures cuisines extérieures en acier inoxydable pour Skyline Kuzin. »
- « Trouve trois fabricants capables de produire ce produit industriel pour Titan. »
- « Analyse toutes les offres reçues pour ce projet. »
- « Trouve-moi le meilleur produit pour ce client avec une marge cible de 35 %. »
- « Compare les prix à 20, 50, 100 et 500 unités. »
- « Trouve une meilleure condition de paiement. »
- « Quel fournisseur présente le moins de risque ? »
- « Qu'est-ce que je devrais négocier ? »
- « Prépare une demande de prix à envoyer à dix fournisseurs. »
- « Prépare la réponse à envoyer par Mail IA. »

---

## 4. Rôle de super-agent

```text
SUPER_AGENT_ROLE_DEFINED=YES
USER_FACING_AGENT=ONE
VISIBLE_AGENT=TAGORA Sourcing Agent
ONE_VISIBLE_CHAT_AGENT=YES
INTERNAL_SPECIALIST_AGENTS=HIDDEN_ORCHESTRATED
```

Capacités du super-agent :

UNDERSTAND_REQUEST · ASK_CLARIFYING_QUESTIONS · CREATE_SOURCING_MISSION · DEFINE_REQUIREMENTS · SEARCH_PRODUCTS · SEARCH_SUPPLIERS · ANALYZE_LISTINGS · ANALYZE_DOCUMENTS · COMPARE_PRODUCTS · COMPARE_SUPPLIERS · COMPARE_OFFERS · NORMALIZE_DATA · CALCULATE_ESTIMATED_LANDED_COST · ANALYZE_MARGIN_POTENTIAL · IDENTIFY_MISSING_INFORMATION · IDENTIFY_RISKS · CREATE_SHORTLIST · RECOMMEND_BEST_OPTIONS · PREPARE_RFQ · PREPARE_SUPPLIER_QUESTIONS · PREPARE_NEGOTIATION_STRATEGY · PREPARE_EMAIL_REPLY · PREPARE_PLATFORM_REPLY · CREATE_DECISION_REPORT · TRACK_FOLLOW_UPS · MAINTAIN_SUPPLIER_MEMORY

L'utilisateur parle **toujours** à TAGORA Sourcing Agent. Il n'a pas à sélectionner des agents techniques.

Spécialistes internes **cachés / orchestrés** :

| Spécialiste | Rôle | Visible utilisateur |
|---|---|---|
| PRODUCT_SCOUT_AGENT | Recherche produits / listings / candidats | Non |
| SUPPLIER_ANALYST_AGENT | Analyse et mémoire fournisseur | Non |
| OFFER_COMPARATOR_AGENT | Comparaison d'offres et versions | Non |
| DOMAIN_EXPERT_AGENT | Critères du domaine de compétence | Non |
| RISK_ANALYST_AGENT | Risques techniques, commerciaux, qualité, livraison | Non |
| LANDED_COST_ANALYST_AGENT | Scénarios de coût rendu estimatif | Non |
| NEGOTIATION_COPILOT_AGENT | Points, stratégie, contre-offre | Non |
| DOCUMENT_EXTRACTION_AGENT | Extraction structurée documents / messages | Non |

```text
PRODUCT_SCOUT_DEFINED=YES
SUPPLIER_ANALYST_DEFINED=YES
NEGOTIATION_COPILOT_DEFINED=YES
```

---

## 5. Chat IA intégré

```text
GLOBAL_SOURCING_CHAT=YES
PROJECT_SOURCING_CHAT=YES
SUPPLIER_CHAT_CONTEXT=YES
OFFER_CHAT_CONTEXT=YES
DOCUMENT_CHAT_CONTEXT=YES
GLOBAL_CHAT_DEFINED=YES
PROJECT_CHAT_DEFINED=YES
```

**Chat global :** démarrer une mission ; chercher un produit ; rechercher des fournisseurs ; retrouver un ancien projet ; demander une comparaison globale ; demander une synthèse ; suivre les actions en attente.

**Chat de projet :** discuter des offres ; comparer les fournisseurs ; analyser les écarts ; comprendre les notes ; identifier les risques ; préparer une négociation ; créer une shortlist ; recommander une prochaine action ; préparer une réponse Mail IA.

Le chat de projet conserve le contexte du projet. Il **ne mélange pas** les autres projets, clients ou domaines.

---

## 6. Entité centrale — SOURCING_MISSION

```text
SOURCING_MISSION_MODEL_DEFINED=YES
```

Une mission représente une demande de magasinage, de recherche ou de sourcing. Origines possibles :

chat · courriel · demande client · besoin interne · lien Alibaba · offre reçue · document · RFQ existant · besoin de remplacement fournisseur

Champs conceptuels :

MISSION_TITLE · ORGANIZATION · CLIENT_ACCOUNT · BRAND_OR_BUSINESS_UNIT · COMPETENCY_DOMAIN · PRODUCT_CATEGORY · PRODUCT_DESCRIPTION · TECHNICAL_REQUIREMENTS · TARGET_QUANTITY · QUANTITY_SCENARIOS · TARGET_UNIT_COST · TARGET_LANDED_COST · TARGET_RESALE_PRICE · TARGET_MARGIN · BUDGET · CURRENCY · TARGET_COUNTRY · DELIVERY_LOCATION · REQUIRED_DELIVERY_DATE · MOQ_MAXIMUM · INCOTERM_PREFERENCE · PAYMENT_TERM_PREFERENCE · CERTIFICATION_REQUIREMENTS · WARRANTY_REQUIREMENTS · PACKAGING_REQUIREMENTS · CUSTOMIZATION_REQUIREMENTS · TOOLING_REQUIREMENTS · EXCLUSIVITY_REQUIREMENTS · TERRITORY_REQUIREMENTS · SAMPLE_REQUIREMENTS · QUALITY_REQUIREMENTS · COMPLIANCE_REQUIREMENTS · PRIORITY · STATUS · ASSIGNED_USER

### Cycle de vie

REQUEST_RECEIVED → NEEDS_CLARIFICATION → REQUIREMENTS_DEFINED → RESEARCH_IN_PROGRESS → SUPPLIERS_IDENTIFIED → OFFERS_REQUESTED → OFFERS_RECEIVED → COMPARISON_IN_PROGRESS → SHORTLIST_READY → NEGOTIATION_IN_PROGRESS → SAMPLE_REQUESTED → SAMPLE_EVALUATION → DECISION_PENDING → SUPPLIER_SELECTED

États latéraux : REJECTED · ON_HOLD · CLOSED · ARCHIVED

---

## 7. Architecture métier conceptuelle

```text
MULTI_COMPANY_MODEL_DEFINED=YES
MULTI_CLIENT_MODEL_DEFINED=YES
SUPPLIER_MODEL_DEFINED=YES
PRODUCT_CANDIDATE_MODEL_DEFINED=YES
SOURCING_PROJECT_MODEL_DEFINED=YES
RFQ_MODEL_DEFINED=YES
OFFER_MODEL_DEFINED=YES
```

Graphe conceptuel :

```text
ORGANIZATION
  CLIENT_ACCOUNT
    BRAND_OR_BUSINESS_UNIT
      COMPETENCY_DOMAIN
        SOURCING_MISSION
          SOURCING_PROJECT
            SUPPLIER
            SUPPLIER_CONTACT
            PRODUCT_CANDIDATE
            PLATFORM_LISTING
            RFQ
            OFFER
              OFFER_VERSION
            DOCUMENT
            EVALUATION
            NEGOTIATION_ROUND
            SHORTLIST
            DECISION
```

Exemples internes : OLIEM_SOLUTIONS · TITAN_PRODUITS_INDUSTRIELS · XPLOD · SKYLINE_KUZIN · EMOBY  
Également : EXTERNAL_CLIENT_ACCOUNT

Oliem Solutions peut sourcer pour ses propres divisions **et** pour des clients externes.

### Distinctions de données

Le produit distingue obligatoirement :

PRODUCT_CANDIDATE · SUPPLIER_CANDIDATE · PLATFORM_LISTING · OFFICIAL_OFFER · VERIFIED_SUPPLIER_DATA · UNVERIFIED_MARKETING_CLAIM

Sources analysables à terme :

SUPPLIER_PLATFORM · PRODUCT_MARKETPLACE · MANUFACTURER_WEBSITE · CATALOG · PRODUCT_LISTING · EMAIL_OFFER · PDF_QUOTE · EXCEL_QUOTE · PRODUCT_SPECIFICATION · IMAGE · TECHNICAL_DRAWING · CERTIFICATE · TEST_REPORT · QUALITY_REPORT · USER_PROVIDED_LINK

Un document peut être associé à : supplier · product candidate · mission · project · RFQ · offer · offer version · evaluation · negotiation · shortlist · decision.

Types de documents : EMAIL_SOURCE_REFERENCE · PLATFORM_MESSAGE_REFERENCE · PLATFORM_LISTING_REFERENCE · PDF · EXCEL · CSV · IMAGE · TECHNICAL_DRAWING · CERTIFICATE · QUOTATION · RFQ · SPECIFICATION · SAMPLE_RESULT · QUALITY_REPORT · INSPECTION_REPORT · NEGOTIATION_NOTE · PURCHASE_HISTORY_REFERENCE · DELIVERY_HISTORY_REFERENCE

---

## 8. Isolation des clients

```text
TENANT_ISOLATION=YES
CLIENT_PROJECT_ISOLATION=YES
CONFIDENTIAL_REQUIREMENTS=YES
CONFIDENTIAL_TARGET_PRICE=YES
CONFIDENTIAL_MARGIN=YES
CONFIDENTIAL_SUPPLIER_TERMS=YES
CLIENT_DATA_ISOLATION_DEFINED=YES
```

Les données d'un client **ne sont pas** automatiquement visibles dans un autre mandat.

Un fournisseur peut être commun à plusieurs projets, mais restent contextualisés :

PROJECT_DATA · CLIENT_PRICING · NEGOTIATION_HISTORY · MARGIN · DECISION

---

## 9. Domaines de compétence et experts internes

```text
ONE_GLOBAL_SCORING_MODEL=NO
COMPETENCY_DOMAIN_MODEL_DEFINED=YES
DOMAIN_EXPERT_MODEL_DEFINED=YES
```

Chaque domaine peut avoir ses champs, critères, pondérations, exigences, certifications, seuils, règles de risque, experts IA, modèles de comparaison et modèles RFQ.

| Organisation / marque | Exemples de domaines |
|---|---|
| X-Plod | batteries lithium, chargeurs, voiturettes, contrôleurs, moteurs, pièces, accessoires |
| Titan | produits industriels, fabrication sur mesure, métaux, plastiques, grand volume B2B, outillage, tolérances |
| Skyline Kuzin | cuisines extérieures, acier inoxydable, aluminium, réfrigération, BBQ, finition, packaging |
| Emoby | mobilité, batteries, moteurs, contrôleurs, composants |
| Oliem Solutions | nouveaux produits, mandats clients, développement produit, recherche de lignes, distribution, importation |

L'utilisateur parle toujours au même TAGORA Sourcing Agent. Le système peut sélectionner un profil expert interne selon ORGANIZATION · CLIENT · COMPETENCY_DOMAIN · PRODUCT_CATEGORY · PROJECT.

Exemples : LITHIUM_BATTERY_EXPERT · INDUSTRIAL_PRODUCT_EXPERT · OUTDOOR_KITCHEN_EXPERT · MOBILITY_PRODUCT_EXPERT · PACKAGING_EXPERT · IMPORT_CONDITIONS_EXPERT

Un expert interne **ne réutilise pas aveuglément** les critères d'un autre domaine.

---

## 10. Scoring

```text
ONE_GLOBAL_SCORING_MODEL=NO
SCORING_MODEL_DEFINED=YES
SUPPLIER_SCORE_DEFINED=YES
OFFER_SCORE_DEFINED=YES
PROJECT_FIT_SCORE_DEFINED=YES
RISK_SCORE_DEFINED=YES
COMMERCIAL_VALUE_SCORE_DEFINED=YES
```

Séparation obligatoire :

| Score | Objet |
|---|---|
| SUPPLIER_SCORE | Historique global **et** contextualisé du fournisseur |
| OFFER_SCORE | Qualité de l'offre spécifique |
| PROJECT_FIT_SCORE | Adéquation exacte offre ↔ mission |
| RISK_SCORE | Risque technique, commercial, qualité, livraison, fournisseur |
| COMMERCIAL_VALUE_SCORE | Valeur globale — pas le seul prix unitaire |

Ne jamais réduire l'évaluation complète à une note universelle unique.

SUPPLIER_GLOBAL_SCORE et PROJECT_SPECIFIC_SCORE restent distincts.

---

## 11. Landed cost et marge

```text
LANDED_COST_MODEL_DEFINED=YES
MARGIN_MODEL_DEFINED=YES
```

Composantes conceptuelles :

PRODUCT_UNIT_COST · TOOLING_COST · SAMPLE_COST · PACKAGING_COST · INSPECTION_COST · FREIGHT_ESTIMATE · INSURANCE_ESTIMATE · DUTY_ESTIMATE · BROKERAGE_ESTIMATE · LOCAL_DELIVERY_ESTIMATE · CURRENCY_CONVERSION · LANDED_COST_ESTIMATE · TARGET_RESALE_PRICE · TARGET_WHOLESALE_PRICE · TARGET_RETAIL_PRICE · TARGET_MARGIN · ESTIMATED_MARGIN

Règle : une donnée estimée **doit** être identifiée comme telle. Un coût estimatif **n'est jamais** présenté comme un coût confirmé.

---

## 12. Normalisation

Normaliser : CURRENCY · UNITS · DIMENSIONS · WEIGHT · QUANTITIES · MOQ · LEAD_TIME · INCOTERM · PAYMENT_TERMS · WARRANTY · CERTIFICATIONS · PRODUCT_VARIANTS · PACKAGING · PRICE_BREAKS

L'IA conserve **la valeur source originale** et **la valeur normalisée**.

---

## 13. Traçabilité et preuves

```text
SOURCE_TRACEABILITY_DEFINED=YES
AI_MUST_NOT_INVENT_SUPPLIER_FACTS=YES
AI_MUST_FLAG_UNCERTAINTY=YES
CRITICAL_CLAIM_HUMAN_VERIFICATION=YES
```

Chaque donnée importante peut conserver :

SOURCE_TYPE · SOURCE_PLATFORM · SOURCE_URL · SOURCE_DOCUMENT_ID · SOURCE_MESSAGE_ID · SOURCE_CAPTURED_AT · SOURCE_TEXT_REFERENCE · EXTRACTION_CONFIDENCE · VERIFICATION_STATUS · VERIFIED_BY · VERIFIED_AT

Classification :

FACT_VERIFIED · FACT_UNVERIFIED · EXTRACTED · CALCULATED · INFERRED · MISSING · CONFLICTING · UNKNOWN

---

## 14. Comparaison, shortlist, recommandation

Matrices : PRODUCT_COMPARISON_MATRIX · SUPPLIER_COMPARISON_MATRIX · OFFER_COMPARISON_MATRIX · PRICE_BREAK_COMPARISON · CONDITION_COMPARISON · CERTIFICATION_COMPARISON · WARRANTY_COMPARISON · LEAD_TIME_COMPARISON · MOQ_COMPARISON · RISK_COMPARISON · LANDED_COST_COMPARISON · MARGIN_SCENARIO_COMPARISON

Listes : LONG_LIST · SHORTLIST · RECOMMENDED_SUPPLIER · ALTERNATIVE_SUPPLIER · BACKUP_SUPPLIER · REJECTED_SUPPLIER

Chaque recommandation inclut : RATIONALE · EVIDENCE · TRADE_OFFS · RISKS · MISSING_INFORMATION · NEXT_ACTION · NEGOTIATION_POINTS · CONFIDENCE_LEVEL

---

## 15. Mémoire fournisseur

```text
SUPPLIER_MEMORY_DEFINED=YES
```

Mémoire historique structurée : commandes antérieures ; retards ; qualité ; non-conformités ; problèmes packaging ; remplacements ; SAV ; communications ; échantillons ; tests ; garanties ; certifications ; négociations ; engagements ; performance réelle ; incidents ; décisions internes ; résultats d'inspection ; écarts promesse/livraison ; comportement lors de problèmes ; flexibilité commerciale.

Les faits historiques peuvent influencer les analyses futures, sans fusionner SUPPLIER_GLOBAL_SCORE et PROJECT_SPECIFIC_SCORE.

---

## 16. Livrables du super-agent

EXECUTIVE_SUMMARY · SOURCING_REPORT · SUPPLIER_SHORTLIST · PRODUCT_SHORTLIST · COMPARISON_MATRIX · RISK_REPORT · MISSING_DATA_REPORT · LANDED_COST_SCENARIO · MARGIN_SCENARIO · NEGOTIATION_PLAN · RFQ_DRAFT · EMAIL_REPLY_DRAFT · PLATFORM_REPLY_DRAFT · SAMPLE_REQUEST_DRAFT · SUPPLIER_QUESTION_LIST · DECISION_MEMO · CLIENT_PRESENTATION_REPORT

---

## 17. Alibaba — canal prioritaire

```text
ALIBABA_FIRST_CLASS_CHANNEL=YES
ALIBABA_FIRST_CLASS_CHANNEL_DEFINED=YES
ALIBABA_REAL_CONNECTOR_AUTHORIZED=NO
ALIBABA_LOGIN_AUTHORIZED=NO
ALIBABA_MESSAGE_SEND_AUTHORIZED=NO
ALIBABA_AUTOMATION_AUTHORIZED=NO
```

Cible produit seulement. À terme, le module pourra : analyser les liens, fiches et profils ; classer les fournisseurs ; importer captures, messages, offres, PDF, Excel ; comparer listings ; préparer questions, RFQ, réponses ; suivre les négociations ; rattacher les échanges au bon projet ; mettre à jour l'offre ; conserver l'historique.

Une ALIBABA_REQUEST peut devenir : SOURCING_MISSION · SUPPLIER · PRODUCT_CANDIDATE · RFQ · OFFER · NEGOTIATION_THREAD

**Aucun** connecteur réel, login, envoi de message, scraping ou automatisation n'est autorisé par ce gate.

---

## 18. Autres plateformes

```text
OTHER_SUPPLIER_PLATFORMS_SUPPORTED_FUTURE=YES
OTHER_PLATFORM_MODEL_DEFINED=YES
```

Le produit **n'est pas** architecturé uniquement autour d'Alibaba.

Modèle conceptuel : PLATFORM_ADAPTER · PLATFORM_ACCOUNT · PLATFORM_SUPPLIER_ID · PLATFORM_PRODUCT_ID · PLATFORM_LISTING_ID · PLATFORM_CONVERSATION_ID · PLATFORM_MESSAGE_ID · PLATFORM_RFQ_ID · PLATFORM_SOURCE_URL · SOURCE_CAPTURED_AT · SOURCE_VERIFICATION_STATUS

Toute nouvelle plateforme utilise un adapter distinct. **Aucune** plateforme externe ne devient l'identité canonique du fournisseur.

### V1 — ingestion assistée, sans connecteur authentifié

Ajout d'un lien ; import manuel de fiche ; import de texte ; import de capture ; import de PDF ; import d'Excel ; import de messages copiés ; import d'offres ; extraction structurée ; classement dans un projet ; préparation de réponses et de questions ; export ou copie de la réponse.

Le connecteur direct authentifié reste **post-V1**.

---

## 19. Frontière Mail IA

```text
MAIL_AI_BOUNDARY_DEFINED=YES
MAIL_AI_OUTBOUND_WORKFLOW_DEFINED=YES
MAIL_AI_RESPONSE_CAPABILITY_TARGET=YES
REAL_MAIL_AI_INTEGRATION_AUTHORIZED=NO
HUMAN_APPROVAL_BEFORE_EXTERNAL_SEND=YES
AUTO_SEND_DEFAULT=NO
```

| TAGORA Mail IA reste responsable de | TAGORA Sourcing AI devient responsable de |
|---|---|
| RECEIVE · READ · CLASSIFY · EXTRACT_EMAIL · ROUTE · DRAFT_REPLY · SEND_EMAIL_UNDER_AUTHORIZED_POLICY · FOLLOW_UP · EMAIL_THREAD · EMAIL_CONVERSATION | SOURCING_MISSIONS · PRODUCT_RESEARCH · PRODUCT_CANDIDATES · SUPPLIER_RESEARCH · SUPPLIERS · SUPPLIER_CONTACTS · CLIENT_SOURCING_PROJECTS · RFQ · OFFERS · OFFER_VERSIONS · COMPARISONS · SCORING · COMPETENCY_DOMAINS · SUPPLIER_MEMORY · QUALITY_HISTORY · DELIVERY_HISTORY · NEGOTIATION_HISTORY · DECISIONS · DOCUMENTS · PERFORMANCE · LANDED_COST_ANALYSIS · MARGIN_ANALYSIS · SHORTLISTS · SUPPLIER_AI_ANALYST · NEGOTIATION_COPILOT |

Mail IA **n'est pas** la base métier fournisseurs.  
Sourcing AI **n'est pas** une boîte courriel généraliste.

### Flux entrant cible (futur)

```text
SUPPLIER_EMAIL
  -> MAIL_AI
  -> CLASSIFICATION
  -> EMAIL_DATA_EXTRACTION
  -> SOURCING_AI
  -> ORGANIZATION
  -> CLIENT / BRAND
  -> COMPETENCY_DOMAIN
  -> SOURCING_MISSION
  -> PROJECT
  -> SUPPLIER
  -> OFFER
  -> COMPARISON
  -> SCORE
  -> AI_ANALYSIS
```

### Flux sortant cible (futur)

Depuis le chat Sourcing : préparer RFQ, questions techniques, demande d'échantillon, demande de certificat, relance, contre-offre, négociation, meilleure condition, réponse complète.

```text
SOURCING_AI
  -> COMMUNICATION_INTENT
  -> NEGOTIATION_STRATEGY
  -> DRAFT_CONTENT
  -> MAIL_AI
  -> EMAIL_DRAFT
  -> HUMAN_REVIEW
  -> AUTHORIZED_SEND
```

Aucune intégration Mail IA réelle n'est autorisée maintenant.

---

## 20. Réponses sur plateformes

```text
PLATFORM_REPLY_WORKFLOW_DEFINED=YES
```

Deux canaux :

| Canal fournisseur | Flux |
|---|---|
| EMAIL_CHANNEL | SOURCING_AI → MAIL_AI → EMAIL_DRAFT |
| PLATFORM_MESSAGE_CHANNEL | SOURCING_AI → PLATFORM_RESPONSE_DRAFT |

Tant qu'aucun adapter réel n'existe : COPY_PASTE_BY_HUMAN, ou EMAIL_IF_SUPPLIER_EMAIL_AVAILABLE.

Plus tard : SOURCING_AI → AUTHORIZED_PLATFORM_ADAPTER → PLATFORM_MESSAGE — uniquement sous Human Gate futur.

---

## 21. Autonomie et limites d'autorité

```text
AUTONOMY_LEVEL_0=READ_AND_ANALYZE_ONLY
AUTONOMY_LEVEL_1=RESEARCH_COMPARE_AND_RECOMMEND
AUTONOMY_LEVEL_2=PREPARE_RFQ_REPLY_AND_NEGOTIATION
AUTONOMY_LEVEL_3=SUPERVISED_EXTERNAL_COMMUNICATION
AUTONOMY_LEVEL_4=FUTURE_POLICY_CONTROLLED_AUTOMATION
V1_DEFAULT_AUTONOMY=LEVEL_2
HUMAN_APPROVAL_MODEL_DEFINED=YES
```

Les communications externes restent supervisées.

```text
AI_RECOMMENDS=YES
AI_RESEARCHES=YES
AI_COMPARES=YES
AI_PREPARES_NEGOTIATION=YES
AI_PREPARES_COMMUNICATION=YES
AI_FINAL_PURCHASE_DECISION=NO
AI_PURCHASE_AUTHORITY=NO
AI_ORDER_PLACEMENT_AUTHORITY=NO
AI_PAYMENT_AUTHORITY=NO
AI_CONTRACT_ACCEPTANCE_AUTHORITY=NO
AI_SUPPLIER_COMMITMENT_AUTHORITY=NO
AI_FINAL_PRICE_ACCEPTANCE_AUTHORITY=NO
HUMAN_DECISION_REQUIRED=YES
HUMAN_APPROVAL_BEFORE_EXTERNAL_COMMITMENT=YES
PURCHASE_AUTHORITY_RECORDED_AS_NO=YES
ORDER_AUTHORITY_RECORDED_AS_NO=YES
PAYMENT_AUTHORITY_RECORDED_AS_NO=YES
```

---

## 22. Nexus, Website, Stock / ERP, SaaS

### Nexus

```text
NEXUS_BOUNDARY_DEFINED=YES
NEXUS_MODULE_KEY=sourcing
NEXUS_CATALOG_ENTRY=TAGORA Sourcing AI
TARGET_HANDOFF=TAGORA_HANDOFF_V1
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
HANDOFF_IMPLEMENTATION_AUTHORIZED=NO
SSO_IMPLEMENTATION_AUTHORIZED=NO
```

Nexus sera à terme ACCESS_BROKER pour Sourcing AI. Aucune implémentation Nexus / handoff / SSO maintenant.

### Website

```text
WEBSITE_BOUNDARY_DEFINED=YES
PUBLIC_COMMERCIAL_PAGE_FR=https://tagora.ca/fr/sourcing
PUBLIC_COMMERCIAL_PAGE_EN=https://tagora.ca/en/sourcing
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
```

Website DISCOVER / EXPLAIN / SELL. Pages **candidates**. Aucune implémentation Website maintenant.

### Surfaces SaaS candidates

```text
SAAS_APPLICATION_CANDIDATE=https://sourcing.tagora.ca
NEXUS_MODULE_ROUTE_CANDIDATE=https://app.tagora.ca/modules/sourcing
SURFACE_STATUS=CANDIDATE_UNTIL_OFFICIAL_TOS_ADOPTION
DNS_AUTHORIZED=NO
```

Ces adresses sont des **propositions** jusqu'à adoption TOS officielle (complément futur d'ADR-0004 / ADR-0007 / ADR-0008). Ce gate ne les rend pas canoniques DNS.

Staging candidat, si adopté plus tard : `https://sourcing.staging.tagora.ca`.

### Stock / ERP

```text
STOCK_ERP_BOUNDARY_DEFINED=YES
STOCK_INTEGRATION_AUTHORIZED=NO
ODOO_INTEGRATION_AUTHORIZED=NO
PURCHASE_ORDER_CREATION_AUTHORIZED=NO
```

Après décision fournisseur **humaine**, Sourcing AI pourra à terme transmettre un produit approuvé vers TAGORA Stock Premium ou ERP / Odoo (onboarding produit, préparation d'achat, inventaire, référence fournisseur, données produit approuvées). Aucune intégration réelle maintenant.

### SaaS revendable

```text
MULTI_TENANT=YES
MODULE_SUBSCRIPTION=YES
USER_MODULE_ACCESS=YES
PLAN_LIMITS_FUTURE=YES
BILLING_FUTURE=YES
WHITE_LABEL_FUTURE=POSSIBLE
CLIENT_REPORT_BRANDING_FUTURE=YES
MAIL_AI_BUNDLE_FUTURE=YES
PAYMENT_IMPLEMENTATION_NOW=NO
BILLING_IMPLEMENTATION_NOW=NO
```

---

## 23. V1 produit

```text
V1_SCOPE_DEFINED=YES
V1_DEFAULT_AUTONOMY=LEVEL_2
```

La V1 priorise :

1. organisations, clients, marques et divisions  
2. domaines de compétence  
3. chat IA global  
4. chat IA par projet  
5. création d'une mission en langage naturel  
6. questionnaire dynamique pour clarifier la mission  
7. fournisseurs  
8. contacts fournisseurs  
9. candidats produits  
10. projets de sourcing  
11. RFQ  
12. offres et versions  
13. documents  
14. ingestion de liens Alibaba et autres plateformes  
15. import de messages, PDF, Excel, images et devis  
16. extraction structurée  
17. normalisation devises, unités, MOQ, délais et Incoterms  
18. comparaison produits, fournisseurs et offres  
19. scoring configurable  
20. Supplier Score  
21. Offer Score  
22. Project Fit Score  
23. Risk Score  
24. Commercial Value Score  
25. scénarios de coût rendu estimatif  
26. scénarios de marge  
27. Supplier Memory  
28. shortlist  
29. recommandation expliquée  
30. Negotiation Copilot  
31. préparation RFQ  
32. préparation de réponse pour Mail IA  
33. préparation de réponse pour plateforme  
34. traçabilité des sources  
35. validation humaine avant toute communication externe  

---

## 24. Post-V1

```text
POST_V1_SCOPE_DEFINED=YES
```

Reporté : connecteur Alibaba authentifié ; synchronisation automatique des messages Alibaba ; autres connecteurs marketplaces ; recherche automatisée continue ; veille prix / disponibilité / certification ; suivi automatique des réponses ; envoi courriel automatique ; négociation automatisée ; portail fournisseur ; intégration ERP réelle ; Odoo réel ; commandes automatiques ; bons de commande automatiques ; paiement ; scoring financier externe ; inspection tierce ; logistique complète ; Entra réel ; Nexus handoff réel ; production commerciale.

---

## 25. Risques à documenter

| ID | Risque | Garde-fou conceptuel |
|---|---|---|
| PLATFORM_TERMS_RISK | Conditions d'usage des plateformes | Pas de scraping ; pas de connecteur réel maintenant |
| DATA_QUALITY_RISK | Données incomplètes ou incohérentes | Classification MISSING / CONFLICTING ; normalisation duale |
| SUPPLIER_FRAUD_RISK | Fournisseur frauduleux | RISK_SCORE ; FACT_UNVERIFIED ; vérification humaine |
| UNVERIFIED_CLAIM_RISK | Claim marketing non vérifié | Distinguer UNVERIFIED_MARKETING_CLAIM |
| CURRENCY_RISK | Conversion et devises | Valeur source + normalisée ; estimé ≠ confirmé |
| FREIGHT_ESTIMATE_RISK | Fret estimatif | Marquage ESTIMATE obligatoire |
| DUTY_ESTIMATE_RISK | Droits estimatifs | Marquage ESTIMATE obligatoire |
| CERTIFICATION_VALIDITY_RISK | Certificats périmés ou faux | CRITICAL_CLAIM_HUMAN_VERIFICATION |
| DUPLICATE_SUPPLIER_RISK | Doublons multi-plateformes | Identité canonique interne ≠ ID plateforme |
| MULTI_CLIENT_DATA_LEAK_RISK | Fuite inter-mandats | TENANT_ISOLATION ; CLIENT_PROJECT_ISOLATION |
| AI_HALLUCINATION_RISK | Invention de faits | AI_MUST_NOT_INVENT_SUPPLIER_FACTS |
| AUTOMATED_COMMITMENT_RISK | Engagement automatique | Aucune autorité d'achat / commande / contrat |
| EMAIL_AUTO_SEND_RISK | Envoi courriel automatique | AUTO_SEND_DEFAULT=NO ; HUMAN_APPROVAL |
| PLATFORM_CREDENTIAL_RISK | Identifiants plateforme | ALIBABA_LOGIN_AUTHORIZED=NO |
| SCRAPING_POLICY_RISK | Scraping non autorisé | ALIBABA_AUTOMATION_AUTHORIZED=NO |

---

## 26. Nom / repo — préparation seulement

```text
RECOMMENDED_REPO_NAME=tagora-sourcing-ai
RECOMMENDED_LOCAL_PATH=C:\Dev\TAGORA\tagora-sourcing-ai
RECOMMENDED_GITHUB=Oliem54/tagora-sourcing-ai
REPO_CREATION_AUTHORIZED=NO
REPO_CREATED=NO
```

Une vérification préalable n'a trouvé aucun repo existant dans Oliem54 correspondant à « tagora sourcing » ou « supplier intelligence ». Ce gate **ne crée pas** le repo.

---

## 27. Human Gates futurs (non exécutés)

```text
A=TAGORA_SOURCING_AI_REPOSITORY_BOOTSTRAP_GO
B=TAGORA_SOURCING_AI_V0_ARCHITECTURE_GO
C=TAGORA_SOURCING_AI_V1_DATA_MODEL_GO
D=TAGORA_SOURCING_AI_V1_AGENT_CHAT_GO
E=TAGORA_SOURCING_AI_ALIBABA_ASSISTED_INTAKE_GO
F=TAGORA_SOURCING_AI_MAIL_AI_CONTRACT_GO
G=TAGORA_SOURCING_AI_PLATFORM_CONNECTOR_DESIGN_GO
GATES_EXECUTED_NOW=NO
```

Après PASS de ce gate, prochaine étape recommandée : **TAGORA_SOURCING_AI_REPOSITORY_BOOTSTRAP_GO**, sous nouveau Human Gate Martin.

---

## 28. Interdictions de ce gate

Aucun repo produit créé. Aucun autre repo modifié. Aucun Mail IA / Nexus / Website / Time / Stock / Pulse modifié. Aucune DB. Aucun Supabase. Aucun Vercel. Aucun Railway. Aucun DNS. Aucun domaine créé. Aucun deploy. Aucune Production. Aucun secret. Aucun OAuth. Aucun Entra. Aucun OpenAI runtime. Aucun Graph runtime. Aucun Odoo. Aucun Alibaba réel. Aucun login Alibaba. Aucun scraping. Aucun marketplace connector. Aucun courriel réel. Aucun message plateforme réel. Aucun achat. Aucune commande. Aucun paiement. Aucun engagement fournisseur.

---

## 29. Paquets de transfert

```text
PACKETS_PREPARED=YES
PACKETS_EXECUTED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

- [PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_MAIL_IA.md)
- [PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md)
- [PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md)
- [PAQUET_TRANSFERT_SOURCING_AI_STOCK_PREMIUM.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_STOCK_PREMIUM.md)
- [PAQUET_TRANSFERT_SOURCING_AI_PROJET.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_PROJET.md)

---

## Références

- [ADR-0012](../05_adr/ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md)
- [VALD-103](../10_knowledge/VALIDATION_VALD_103_TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md)
- [APPLICATION_PROGRESSIVE_TAGORA_SOURCING_AI.md](APPLICATION_PROGRESSIVE_TAGORA_SOURCING_AI.md)
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-024
- Frontière Mail IA : [APPLICATION_PROGRESSIVE_TAGORA_MAIL_IA.md](APPLICATION_PROGRESSIVE_TAGORA_MAIL_IA.md)
- Surfaces : [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- Mapping : [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- TAF : [04_TAF_TAGORA_AI_FRAMEWORK.md](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- HITL : [HUMAN_IN_THE_LOOP_STANDARD.md](../07_ai/HUMAN_IN_THE_LOOP_STANDARD.md)

## Statut

**Validé — fondation documentaire officielle — 2026-08-16** — Martin ST-Gelais — Direction. Aucune implémentation produit.

---

## 30. Complément postérieur — classification commerciale Coming Soon (DEC-025)

Ce complément **n'est pas** une réécriture de DEC-024 / ADR-0012 / VALD-103.  
La fondation ci-dessus **reste** la définition officielle du module.

Source : gate `TOS_TAGORA_SOURCING_AI_COMMERCIAL_MODULE_MAP_COMING_SOON_GO`.  
Décision : **DEC-025**. ADR : **ADR-0013**. Validation : **VALD-104**.

```text
COMMERCIAL_MODULE_NUMBER=5
MODULE_CLASSIFICATION=MONTHLY_SAAS_MODULE
COMMERCIAL_STATUS=COMING_SOON
COMMERCIAL_PRESENTATION_AUTHORIZED=YES
PRODUCT_AVAILABILITY=NOT_AVAILABLE
OPERATIONAL_STATUS=NOT_OPERATIONAL
APPLICATION_DOMAIN=TBD
DOMAIN_DECISION_DEFERRED=YES
COMMERCIAL_SAAS_MODULE_COUNT=5
NEXUS_IS_COMMERCIAL_MODULE=NO
SOURCING_IN_NEXUS_AVAILABLE=NO
SOURCING_HANDOFF_AVAILABLE=NO
SOURCING_PORTAL_ACCESS_AVAILABLE=NO
SOURCING_NEXUS_ROUTE=TBD
PLANNED_CAPABILITIES_ONLY=YES
CURRENT_OPERATIONAL_CAPABILITIES=NONE_CLAIMED
DEC024_COMPLETED_NOT_REPLACED=YES
```

Les surfaces candidates de la section 22 **restent dans l'historique DEC-024**. Statut courant :

```text
PREVIOUS_SAAS_DOMAIN_CANDIDATE=https://sourcing.tagora.ca
PREVIOUS_SAAS_DOMAIN_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_ADOPTED
CURRENT_APPLICATION_DOMAIN=TBD
PREVIOUS_NEXUS_ROUTE_CANDIDATE=https://app.tagora.ca/modules/sourcing
PREVIOUS_NEXUS_ROUTE_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_IMPLEMENTED
CURRENT_NEXUS_MODULE_ROUTE=TBD
WEBSITE_FR_ROUTE=https://tagora.ca/fr/sourcing
WEBSITE_EN_ROUTE=https://tagora.ca/en/sourcing
WEBSITE_ROUTES_STATUS=PROPOSED_COMMERCIAL_ROUTES
WEBSITE_ROUTE_IMPLEMENTATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
```

Ne pas présenter `sourcing.tagora.ca` comme domaine officiel, actif, réservé, configuré, publié ou approuvé.  
Ne pas présenter `/modules/sourcing` comme route disponible.

Document de positionnement : [TAGORA_SOURCING_AI_COMMERCIAL_POSITIONING_COMING_SOON.md](TAGORA_SOURCING_AI_COMMERCIAL_POSITIONING_COMING_SOON.md).
