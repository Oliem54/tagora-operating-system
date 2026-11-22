# Symbiose clients RELORA / PULS / QuickBooks — V1

Décision de gouvernance. Elle enregistre l'architecture commerciale Premium 2027 approuvée par Martin le 2026-11-21. Elle ne réécrit pas ADR-0009, ADR-0014, ADR-0020 ni ADR-0024.

Ce document n'implémente rien. Il ne connecte pas QuickBooks. Il n'ouvre pas RELORA. Il n'écrit dans aucun dépôt produit.

```text
DECISION_ID=TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1
DECISION_VERSION=1.3.0
HISTORICAL_CONTRACT_VERSION=1.2.0
HISTORICAL_CONTRACT_VERSION_PRIOR=1.1.0
HISTORICAL_ARCHITECTURE_V1_1_0=PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS
DECISION_DATE=2026-11-21
DECISION_AUTHORITY=MARTIN
SOURCE_GATE=TOS_RELORA_PULS_QUICKBOOKS_UNIFIED_CUSTOMER_SYNC_ANTIBLOCKING_ARCHITECTURE_GO
COMPLETION_GATE=TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO
COMPLETION_DATE=2026-11-21
AMENDMENT_GATE=TOS_CUSTOMER_SYMBIOSIS_QB_INBOUND_RELORA_PULS_BIDIRECTIONAL_CONTRACT_AMENDMENT
AMENDMENT_DATE=2026-11-21
WRITEBACK_GATE=TOS_CUSTOMER_SYMBIOSIS_QB_WRITEBACK_SCOPE_DECISION
WRITEBACK_DECISION_DATE=2026-11-21
ACTIVE_SYNC_DIRECTION=QB_TO_RELORA_BIDIRECTIONAL_PULS
DIRECT_PULS_QB_CONNECTION=NO
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_SCOPE=VALIDATED_CUSTOMER_FIELDS_ALLOWLIST
QB_WRITEBACK_ARCHITECTURE=PROPOSAL_ONLY
QB_WRITEBACK_RUNTIME=DISABLED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
AI_DATA_UNTIL_VALIDATION=UNVERIFIED
HUMAN_APPROVAL_STRENGTHENING_GATE=TOS_CUSTOMER_SYMBIOSIS_LOGICAL_FREEZE_AND_QB_HUMAN_APPROVAL_UNIFIED_GO
ADR=ADR-0025
DEC=DEC-037
VALIDATION=VALD-115
MODE=DOCUMENTATION_COMPLETION_ONLY
DOCUMENTATION_ONLY=yes
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGES_AUTHORIZED=NO
RUNTIME_CHANGE=no
QUICKBOOKS_CONNECTED_NOW=NO
RELORA_SECURITY_HOLD=true
RELORA_OPENABLE=false
RELORA_HOLD_LIFTED_BY_THIS_DECISION=NO
TECHNICAL_RENAME_AUTHORIZED=NO
SCHEMA_FROZEN=NO
LOGICAL_EVENT_CATALOG=FROZEN_V1
NATIVE_QB_FIELD_NAMES=TO_VERIFY
TECHNICAL_SCHEMA_FROZEN=NO
THRESHOLD_VALUES_FROZEN=NO
ESCALATION_THRESHOLDS=PROPOSED_NOT_FROZEN
MESSOR_DEPENDENCY_FOR_THIS_SYMBIOSIS=FORBIDDEN
NEXUS_ROLE=IDENTITY_AND_ACCESS_ONLY
SECTIONS_1_TO_10=PRESERVED
SECTIONS_11_TO_18=COMPLETED
SECONDARY_SEND_PROVIDER=STUDY_ONLY
SECONDARY_SEND_PROVIDER_ACTIVATION_AUTHORIZED=NO
```

Le gate `TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO` complète les sections 11 à 18 dans ce même contrat. Les sections 1 à 10 restent celles déjà acceptées. ADR-0025, DEC-037 et VALD-115 restent les références. Aucune décision approuvée n'est rouverte.

L'amendement 1.2.0 aligne les flux. La version 1.1.0 et sa formule `PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS` restent l'historique. La version 1.2.0 reste l'historique du flux sans writeback choisi.

L'amendement 1.3.0, gate `TOS_CUSTOMER_SYMBIOSIS_QB_WRITEBACK_SCOPE_DECISION`, retient l'option B. Le flux actif est QuickBooks vers RELORA, puis RELORA dans les deux sens avec PULS. La liste positive reste le seul périmètre de retour. Le gate `TOS_CUSTOMER_SYMBIOSIS_LOGICAL_FREEZE_AND_QB_HUMAN_APPROVAL_UNIFIED_GO` renforce ce retour : aucune écriture automatique, approbation humaine explicite à chaque modification, donnée issue d'un agent IA non vérifiée tant qu'elle n'est pas validée. Aucune écriture réelle n'est autorisée.

---

## 1. Décision

```text
ARCHITECTURE_CIBLE=QUICKBOOKS_INBOUND_RELORA_BIDIRECTIONAL_PULS
HISTORICAL_ARCHITECTURE_V1_1_0=PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS
ACTIVE_SYNC_DIRECTION=QB_TO_RELORA_BIDIRECTIONAL_PULS
DIRECT_PULS_QB_CONNECTION=NO
QUICKBOOKS_INTEGRATION_OWNER=RELORA
QUICKBOOKS_NAMED_SCOPES=OLIEM,TITAN
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_SCOPE=VALIDATED_CUSTOMER_FIELDS_ALLOWLIST
QB_WRITEBACK_ARCHITECTURE=PROPOSAL_ONLY
QB_WRITEBACK_RUNTIME=DISABLED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
AUTOMATIC_ACCOUNTING_WRITE=FORBIDDEN
OLIEM_TITAN_CROSS_CONTAMINATION=FORBIDDEN
SYNC_LOOP_PROTECTION=MANDATORY
OBJECTIVE=ONE_CUSTOMER_ONE_COMMERCIAL_IDENTITY_THREE_SYNCHRONIZED_SYSTEMS
COMMERCIAL_IDENTITY=TAGORA_CUSTOMER_ID
CRM_AND_COMMERCIAL_GO=RELORA
COMMERCIAL_INTELLIGENCE_AND_FOLLOWUP=PULS
ACCOUNTING_AUTHORITY=QUICKBOOKS
CUSTOMER_RECORD_SYNC_REQUIRES_COMMERCIAL_GO=NO
CONSENT_AND_OPTOUT_PROPAGATION=MANDATORY
ZERO_SILENT_FAILURE=YES
ZERO_BLOCAGE_SILENCIEUX=OBLIGATOIRE
AUCUNE_RELANCE_LEGALEMENT_AUTORISEE_PERDUE=OBLIGATOIRE
AUTO_RECOVERY=OBLIGATOIRE
HUMAN_REVIEW_WHEN_REQUIRED=OBLIGATOIRE
DUPLICATE_DETECTION=AUTOMATIC
DUPLICATE_HUMAN_REVIEW=WHEN_REQUIRED
DUPLICATE_SILENT_DESTRUCTIVE_MERGE=FORBIDDEN
OTHER_CUSTOMERS_CONTINUE=YES
DURABLE_SYNC_QUEUE=MANDATORY
AUTO_RETRY=MANDATORY
CONFLICT_ISOLATION=MANDATORY
LEGAL_FRAME=CANADA_LCAP_AND_QUEBEC_PERSONAL_INFORMATION_OBLIGATIONS
TOS_CERTIFIES_LEGAL_COMPLIANCE=NO
NEXT_SINGLE_GO=RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO
NEXT_SINGLE_GO_ADDRESSEE=GPT_RELORA
NEXT_SINGLE_GO_FUTURE_EXECUTOR=CURSOR_RELORA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
SEQUENCE_CONSTRAINT=AFTER_NEXUS_V1_FINALIZATION
QB_TECHNICAL_OWNER=GPT_RELORA
TOS_ROLE=GOVERNANCE_CONTRACTS_AND_CROSS_CUTTING_DECISIONS
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
TECHNICAL_SCHEMA_FROZEN=NO
```

Un client. Une identité commerciale uniforme. Le flux actif est QuickBooks vers RELORA, puis RELORA dans les deux sens avec PULS. Le retour vers QuickBooks est une proposition sur la liste positive, après approbation humaine explicite, et passe seulement par RELORA. Aucune écriture automatique ni écriture réelle n'est autorisée.

La synchronisation d'une fiche circule sans GO commercial. L'envoi d'un courriel ou d'un texto commercial exige les deux GO décrits à la section 7.

## 2. Responsabilités

### 2.1 RELORA — CRM central et GO commercial

RELORA est le référentiel central des identités commerciales.

RELORA centralise les clients, les prospects et les leads. RELORA importe et synchronise les clients QuickBooks, intègre les clients et prospects WordPress, et intègre les listes clients autorisées. RELORA conserve l'historique commercial consolidé, détecte et prépare le rapprochement des doublons, et gère les entreprises, les contacts, les opportunités et les relations.

RELORA détermine les segments, autorise les campagnes et les mandats de relance, et applique les approbations automatiques déjà autorisées par une règle préalable. RELORA reçoit les résultats et les événements de PULS. RELORA affiche les dossiers qui exigent une intervention humaine.

RELORA reste hors du moteur d'envoi des courriels et des textos.

```text
RELORA_IS_SEND_ENGINE=NO
RELORA_SECURITY_HOLD=true
RELORA_OPENABLE=false
```

Ce contrat attribue à RELORA sa responsabilité cible. Il laisse le hold de sécurité d'ADR-0024 en place.

### 2.2 PULS — intelligence commerciale et relances

PULS assure la prospection, l'intelligence de relance, les séquences automatiques, les campagnes par courriel, les campagnes par texto et le suivi des leads. PULS relance les clients existants lorsque la stratégie est déjà approuvée et que le contrôle légal passe.

PULS tient le registre opérationnel des consentements et des oppositions commerciales. PULS vérifie la légalité avant chaque envoi, gère les files d'envoi, récupère les erreurs, prévient les doubles messages, émet les alertes opérationnelles et transmet à RELORA les informations commerciales admissibles.

PULS peut recommander une campagne et déclencher une séquence déjà approuvée. PULS applique une interdiction légale et un refus du client. PULS ne les contourne pas.

PULS transmet à RELORA les clients, les prospects, les conversations, les demandes et les suivis admissibles recueillis par ses agents IA. PULS n'établit aucune connexion directe avec QuickBooks.

```text
PULS_DIRECT_QUICKBOOKS_CONNECTION=FORBIDDEN
PULS_TO_RELORA=CUSTOMERS,PROSPECTS,CONVERSATIONS,REQUESTS,ADMISSIBLE_FOLLOWUPS
```

### 2.3 QuickBooks — référentiel comptable

QuickBooks conserve l'autorité sur les fiches comptables clients, les factures, les paiements, les achats, les soldes, les informations fiscales et de facturation, et les événements comptables pertinents.

Les informations commerciales nécessaires vont vers RELORA, puis vers PULS lorsqu'elles servent le suivi commercial. Les données comptables sensibles restent chez QuickBooks. Leur copie dans PULS est limitée au minimum utile au suivi commercial admissible. RELORA est le responsable technique exclusif des connexions QuickBooks Oliem et Titan. TOS conserve la gouvernance et n'ajoute aucun connecteur. TOS n'attribue aucun identifiant de société QuickBooks. PULS n'a aucune connexion directe.

```text
QUICKBOOKS_CUSTOMER_IMPLIES_MARKETING_CONSENT=NO
QUICKBOOKS_CONNECTED_NOW=NO
QUICKBOOKS_INTEGRATION_OWNER=RELORA
QUICKBOOKS_NAMED_SCOPES=OLIEM,TITAN
QUICKBOOKS_COMPANY_IDS_ASSIGNED=NO
EXPANORA_ADR_0020_AMENDED_BY_THIS_CONTRACT=NO
```

ADR-0020 conserve QuickBooks comme source financière future d'EXPANORA, non connectée. Le présent contrat décrit la symbiose commerciale cible. Il ne branche aucun connecteur et ne transfère pas l'autorité comptable à RELORA ni à PULS.

### 2.4 Sources entrantes

WordPress et les listes clients autorisées alimentent RELORA. Elles conservent leur provenance. Une liste et une fiche WordPress sont des sources. Elles sont des preuves de consentement seulement lorsque cette preuve est elle-même documentée.

```text
BIDIRECTIONAL_PEERS=RELORA,PULS
QUICKBOOKS_FLOW=INBOUND_TO_RELORA
WORDPRESS=AUTHORIZED_INBOUND_SOURCE_TO_RELORA
AUTHORIZED_CUSTOMER_LIST=INBOUND_SOURCE_TO_RELORA
WORDPRESS_WRITEBACK_IN_THIS_CONTRACT=NO
```

### 2.5 MESSOR

Les relances commerciales déjà prises en charge par PULS restent dans PULS. Ce contrat n'ajoute aucune dépendance à MESSOR.

PULS distingue une communication transactionnelle ou de service d'une sollicitation commerciale, et détermine le traitement légal de chaque message. Ce classement ne déplace pas l'envoi vers MESSOR.

### 2.6 NEXUS

NEXUS reste l'autorité de l'identité humaine, de l'accès, des organisations centrales, des abonnements et des échanges signés avec les modules, selon ADR-0009, ADR-0010 et ADR-0024.

```text
TAGORA_CUSTOMER_ID_EQUALS_TAGORA_USER_ID=NO
TAGORA_CUSTOMER_ID_EQUALS_NUSER=NO
NEXUS_STORES_CRM=NO
NEXUS_STORES_COMMERCIAL_CONSENT=NO
NEXUS_STORES_QUICKBOOKS_ACCOUNTING=NO
NEXUS_IN_CUSTOMER_SYNC_PATH=NO
```

## 3. Symbiose bidirectionnelle

QuickBooks entre dans RELORA. RELORA et PULS échangent automatiquement, dans les deux sens, les clients, prospects, conversations, demandes et suivis admissibles. La synchronisation d'une fiche ne nécessite aucun GO de campagne. Chaque réception est confirmée. Un écart reste visible jusqu'à résolution. Un événement déjà appliqué, ou l'écho d'un événement émis par le système qui le reçoit, ne crée pas une nouvelle écriture.

### Cas A — Nouveau prospect dans PULS

1. PULS reçoit le prospect.
2. RELORA est informé automatiquement.
3. RELORA vérifie si ce prospect existe déjà.
4. RELORA crée ou rattache la fiche à l'identité commerciale appropriée.
5. PULS reçoit `TAGORA_CUSTOMER_ID`.
6. Le prospect poursuit son parcours commercial.
7. QuickBooks ne reçoit pas de création automatique d'un client comptable.

### Cas B — Nouveau client dans QuickBooks

1. Une fiche client ou une vente est enregistrée dans QuickBooks.
2. RELORA reçoit l'événement.
3. RELORA rapproche la fiche avec les clients et prospects existants.
4. RELORA met à jour l'historique.
5. PULS reçoit les informations nécessaires au suivi commercial.
6. Si une stratégie de suivi est déjà approuvée, PULS vérifie la conformité et programme les relances admissibles.

### Cas C — Modification dans RELORA

1. RELORA reçoit une correction ou une information nouvelle.
2. Les changements admissibles sont transmis à PULS.
3. PULS confirme la réception.
4. Les écarts restent surveillés jusqu'à résolution.
5. Si le changement appartient à la liste positive, concerne le bon client QuickBooks et a une provenance connue, RELORA prépare une proposition. L'écriture attend une approbation humaine explicite de cette modification. Voir la section 3.1. Aucune écriture automatique et aucune écriture réelle ne sont exécutées.

### Cas D — Modification dans QuickBooks

Le flux est QuickBooks, puis RELORA, puis PULS. Les données comptables restent sous l'autorité de QuickBooks.

### Cas E — Modification dans PULS

Le flux actif est PULS, puis RELORA. PULS transmet les clients, les prospects, les conversations, les demandes et les suivis admissibles. RELORA détermine si l'information concerne un client QuickBooks existant et si une mise à jour est admissible. PULS n'écrit pas dans QuickBooks. Voir la section 3.1.

### Cas F — Désabonnement ou refus

1. Le refus est enregistré immédiatement dans PULS.
2. RELORA reçoit l'information.
3. Les campagnes concernées sont réévaluées.
4. Un événement de synchronisation antérieur laisse le refus en vigueur.

```text
STALE_SYNC_CAN_RESTORE_WITHDRAWN_AUTHORIZATION=NO
CONSENT_AND_OPTOUT_PROPAGATION=MANDATORY
SYNC_LOOP_PROTECTION=MANDATORY
```

### 3.1 Écriture vers QuickBooks — option B retenue

Martin retient l'option B, renforcée. QuickBooks entre dans RELORA. RELORA et PULS échangent dans les deux sens. RELORA est le seul système qui peut préparer une écriture QuickBooks, et seulement pour la liste positive. Cette écriture n'est jamais automatique. Elle exige une approbation humaine explicite de la modification, lorsque le runtime sera autorisé par un GO distinct. PULS n'a aucune connexion QuickBooks directe. Une donnée recueillie par un agent IA reste non vérifiée jusqu'à sa validation. Oliem et Titan restent isolés.

```text
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_ARCHITECTURE=PROPOSAL_ONLY
QB_WRITEBACK_RUNTIME=DISABLED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
GLOBAL_IMPLICIT_APPROVAL=FORBIDDEN
ALLOWLIST_EXTENSION_REQUIRES_DISTINCT_GOVERNANCE=YES
PULS_DIRECT_QUICKBOOKS_CONNECTION=FORBIDDEN
NEW_PULS_LEAD_CREATES_QUICKBOOKS_CUSTOMER=FORBIDDEN
AUTOMATIC_ACCOUNTING_WRITE=FORBIDDEN
OLIEM_TITAN_CROSS_CONTAMINATION=FORBIDDEN
FIELD_NAMES_FROZEN=NO
```

Une information reçue dans PULS rejoint RELORA automatiquement. RELORA détermine si elle concerne un client QuickBooks existant et si la mise à jour est admissible. Un conflit n'est pas écrasé. Les trois systèmes restent cohérents dans la limite de l'autorité de chaque champ.

Catégories admissibles à une proposition, jamais à une écriture automatique :

- Téléphone de contact.
- Coordonnées commerciales vérifiées.
- Personne-contact associée.
- Courriel de contact, seulement lorsque la modification ne redirige pas les factures ni les communications sensibles.

Avant toute exécution future, RELORA vérifie l'identité certaine du client QuickBooks, la provenance, la donnée proposée, l'ancienne et la nouvelle valeur, les doublons et les conflits, l'approbation humaine explicite de cette modification, et le fait que le dossier n'a pas changé entre la lecture et l'écriture. L'approbation et la modification sont journalisées. Il n'existe pas d'approbation globale implicite.

Les coordonnées de facturation, le courriel qui peut rediriger des factures ou des communications sensibles, et tout champ de facturation ou à risque ne deviennent pas admissibles parce qu'un humain les approuve. Étendre la liste positive exige une décision de gouvernance distincte.

Catégories jamais modifiées automatiquement dans QuickBooks :

- Factures.
- Paiements.
- Soldes.
- Informations bancaires.
- Taxes.
- Prix.
- Identité juridique et informations fiscales sensibles.
- Coordonnées de facturation sans la validation requise.
- Historique comptable.

Les consentements marketing, les conversations et les notes commerciales restent dans RELORA et PULS. Ils ne sont pas copiés dans QuickBooks sans nécessité. Un nouveau lead PULS ne crée pas un client comptable QuickBooks.

Le gel du catalogue d'événements et de la matrice champ par champ est le prochain GO. Il n'est pas autorisé. Cette section fixe les catégories. Elle ne fige pas les noms de champs.

## 4. Identité commerciale centrale

`TAGORA_CUSTOMER_ID` est l'identifiant stable de l'identité commerciale. Il est distinct de `TAGORA_USER_ID` et du `nuser`.

Chaque identité peut être reliée aux identifiants de RELORA, de PULS, de QuickBooks, de WordPress et des autres sources autorisées.

L'organisation légale est une entité propre. Un même contact peut être associé à plusieurs entreprises ou organisations. Les données, les autorisations commerciales et les historiques de ces organisations restent séparés.

```text
LEGAL_ORGANIZATION_IS_FIRST_CLASS=YES
SAME_CONTACT_MULTIPLE_ORGANIZATIONS=ALLOWED
CROSS_ORGANIZATION_DATA_MERGE=FORBIDDEN
CROSS_ORGANIZATION_CONSENT_MERGE=FORBIDDEN
CROSS_ORGANIZATION_HISTORY_MERGE=FORBIDDEN
NAME_ALONE_IS_DEFINITIVE_IDENTITY_PROOF=NO
PHONE_ALONE_IS_DEFINITIVE_IDENTITY_PROOF=NO
EMAIL_ALONE_IS_DEFINITIVE_IDENTITY_PROOF=NO
```

Un courriel seul, y compris une adresse de rôle ou une boîte partagée, est un signal fort. Il reste insuffisant comme preuve définitive.

## 5. Doublons

La détection est automatique. La revue humaine intervient dès que l'identité est incertaine. Les autres clients continuent.

Signaux comparés :

1. Noms.
2. Entreprises.
3. Courriels.
4. Téléphones.
5. Identifiants QuickBooks.
6. Identifiants TAGORA.
7. Relations organisationnelles.
8. Correspondance certaine ou incertaine.

### Doublon certain

Le rattachement automatique est permis lorsque l'identité est démontrée et que l'opération est sans risque. Le rattachement relie les identifiants à l'identité existante. Il ne fusionne pas destructivement les champs, les consentements ni les historiques.

Une correspondance d'identifiant stable déjà lié, ou un lien déjà confirmé par un humain, peut démontrer l'identité. Un faisceau de signaux indépendants peut la démontrer seulement si aucun consentement, aucune organisation et aucun historique financier ne seraient fusionnés par l'opération.

### Doublon incertain

RELORA crée une tâche humaine. La tâche montre la fiche A, la fiche B, les données correspondantes, les données divergentes, l'historique, les entreprises, les consentements connus et une recommandation de rapprochement.

L'humain peut fusionner, conserver les fiches distinctes, rattacher, corriger, ou reporter avec une justification.

Le dossier ambigu est isolé. Il ne stoppe pas la synchronisation des autres clients. Tant que l'identité est ambiguë, une seconde sollicitation du même destinataire ambigu est empêchée. Le reste de la campagne admissible continue.

```text
DUPLICATE_SILENT_DESTRUCTIVE_MERGE=FORBIDDEN
AUTOMATIC_ACTION_WHEN_CERTAIN=LINK_ONLY
AMBIGUOUS_RECIPIENT_EXTRA_SOLICITATION=PREVENTED
AMBIGUOUS_CASE_STOPS_OTHER_CUSTOMERS=NO
AMBIGUOUS_CASE_STOPS_WHOLE_CAMPAIGN=NO
SYNC_LOOP_PROTECTION=MANDATORY
AUTOMATIC_OVERWRITE_OF_CONFLICTING_DATA=FORBIDDEN
FIELD_AUTHORITY=ONE_AUTHORITY_PER_FIELD
OTHER_CASES_CONTINUE_WHEN_ONE_CONFLICTS=YES
```

## 6. Autorité des informations

| Domaine | Autorité | Circulation admissible |
|---|---|---|
| Identité CRM consolidée, associations, rapprochements, segments, mandats, GO commercial | RELORA | Vers PULS pour l'exécution et l'échange admissible. Vers QuickBooks seulement comme proposition sur la liste positive, après approbation humaine explicite de la modification, sans écriture automatique ni écriture réelle. |
| Consentements et désabonnements opérationnels, résultats de relance, historique des communications commerciales, statuts de campagne | PULS | Vers RELORA immédiatement. Un ancien événement ne réactive pas une autorisation retirée. |
| Factures, paiements, achats, soldes, fiscalité, facturation comptable | QuickBooks | Vers RELORA pour l'historique commercial. Vers PULS pour le seul suivi commercial nécessaire. |

### Coordonnées communes

Pour un champ de coordonnée partagé, chaque proposition porte sa provenance, sa date d'observation et son état de validation humaine.

Ordre de résolution de la vue commerciale consolidée dans RELORA :

1. La valeur validée par un humain la plus récente l'emporte sur une valeur automatique plus ancienne.
2. Entre valeurs non validées, la plus récente l'emporte, dans le respect de l'autorité du type d'information.
3. L'adresse de facturation et les références fiscales restent sous l'autorité de QuickBooks. Une adresse commerciale ne les remplace pas.
4. Le statut opérationnel de canal dans PULS (opposition, désabonnement, préférence) gouverne l'envoi. Une coordonnée peut être mise à jour. L'autorisation retirée reste retirée.
5. Deux valeurs contradictoires dans la même fenêtre, sans ordre fiable, isolent le conflit de champ. Les autres clients et les champs non conflictuels continuent lorsque la suite est sûre.
6. L'historique complet des modifications est conservé. Une mise à jour périmée est journalisée. Elle ne remplace pas une information plus récente et validée.

```text
STALE_UPDATE_OVERWRITES_NEWER_VALIDATED_VALUE=NO
FULL_CHANGE_HISTORY=MANDATORY
```

Le catalogue champ par champ et les noms d'événements restent à figer dans un GO documentaire ultérieur. Ce contrat fixe les domaines et la règle de résolution. Il ne fige pas un schéma.

## 7. Double GO

### GO commercial — RELORA

RELORA définit qui cibler, pourquoi relancer, l'entreprise expéditrice, la marque, l'objectif, la campagne ou la séquence, le responsable et la stratégie approuvée.

Le GO commercial est donné par un responsable autorisé ou par une règle automatisée déjà approuvée.

### GO légal et technique — PULS

Avant chaque courriel ou texto commercial, PULS vérifie le type de communication, le consentement applicable ou l'exception légale documentée, la validité du consentement tacite ou exprès selon les circonstances, la provenance de la permission, la date pertinente, les désabonnements, les préférences, l'entreprise expéditrice, le canal autorisé, les exigences d'identification et de désabonnement, et les restrictions applicables.

Le cadre à couvrir est celui du Canada, notamment la LCAP, et les obligations québécoises pertinentes en matière de renseignements personnels. TOS enregistre l'exigence. TOS ne certifie pas la conformité et ne remplace pas un avis juridique.

```text
CAMPAIGN_APPROVAL_BYPASSES_LAW=NO
QUICKBOOKS_PRESENCE_IS_MARKETING_CONSENT=NO
UNPROVEN_AUTHORIZATION_SEND=ISOLATED
MISSING_PROOF_ACTION=SEARCH_AUTHORIZED_EVIDENCE_AND_PROPOSE_LAWFUL_REGULARIZATION
AUTOMATIC_COMMERCIAL_MESSAGE_TO_REQUEST_CONSENT=FORBIDDEN
```

Si l'autorisation n'est pas démontrable, PULS isole l'envoi concerné, recherche les preuves autorisées et propose une démarche de régularisation légalement admissible.

## 8. Clients existants et leads

Les sources de suivi comprennent QuickBooks, RELORA, WordPress, les listes clients autorisées, l'historique des ventes, les relations avec les revendeurs et les clients directs.

Vocabulaire de segments exigé :

- Clients actifs.
- Clients inactifs.
- Clients récents.
- Clients récurrents.
- Revendeurs.
- Clients ayant demandé une soumission.
- Anciens clients.
- Clients avec suivi après-vente.
- Clients dont le consentement est confirmé.
- Clients dont le statut légal nécessite une vérification.

Un lead est un contact ou une opportunité commerciale. Il n'est pas nécessairement un client comptable. Les leads sont synchronisés avec RELORA. PULS assure les relances prévues. La conversion en client se propage par rattachement à l'identité existante.

Les consentements et les bases légales sont conservés avec leurs preuves et leur historique. Un lead perdu, inactif ou non admissible reste hors sollicitation tant qu'un fondement légal valable est absent.

## 9. Anti-blocage des synchronisations

Chaque événement entre dans une file durable. Chaque opération a un identifiant unique. Le destinataire accuse réception. Le traitement est idempotent. Une tentative répétée ne crée pas un second client ni un second message.

La reprise est automatique, avec temporisation progressive, y compris après interruption. Une réconciliation périodique compare les identités liées et les champs admissibles. Un écart reste ouvert et visible.

Le journal des erreurs, la surveillance des délais, la gestion des conflits et l'escalade automatique sont obligatoires. Les seuils numériques de délai et de tentative ne sont pas figés ici.

Un incident individuel est isolé avec sa charge utile. Les autres dossiers continuent.

Si QuickBooks est indisponible :

- les événements entrants attendus de QuickBooks sont conservés jusqu'à reprise ;
- les opérations admissibles continuent dans RELORA et PULS ;
- les essais de lecture reprennent automatiquement ;
- les résultats sont vérifiés après rétablissement ;
- le responsable est averti si le problème persiste ;
- les relances PULS légalement autorisées continuent ;
- les retours admissibles non encore transmis sont conservés jusqu'à reprise ;
- aucune mise à jour admissible ne se perd ;
- le runtime d'écriture vers QuickBooks reste non autorisé.

Si RELORA est indisponible :

- les événements PULS sont conservés ;
- les tentatives répétées restent idempotentes ;
- la synchronisation reprend dès que RELORA répond ;
- les protections de consentement restent en vigueur ;
- un envoi commercial attend lorsque les données nécessaires au contrôle légal ne sont pas assez fiables.

```text
ZERO_SILENT_FAILURE=YES
DURABLE_SYNC_QUEUE=MANDATORY
IDEMPOTENT_PROCESSING=MANDATORY
ACK_REQUIRED=YES
AUTO_RETRY=MANDATORY
PROGRESSIVE_BACKOFF=MANDATORY
PERIODIC_RECONCILIATION=MANDATORY
ERROR_JOURNAL=MANDATORY
SYNC_DELAY_MONITORING=MANDATORY
CONFLICT_ISOLATION=MANDATORY
AUTOMATIC_ESCALATION=MANDATORY
QUEUE_TECHNOLOGY_SELECTED_BY_THIS_CONTRACT=NO
```

Enveloppe conceptuelle minimale, schéma non figé : identifiant d'opération, type d'événement, système source, horodatage, `TAGORA_CUSTOMER_ID` lorsqu'il est connu, identifiant de la fiche source, charge admissible, clé d'idempotence, accusé attendu, nombre de tentatives.

## 10. Anti-blocage prioritaire des courriels et des textos

Les courriels et textos commerciaux légalement autorisés sont pris en charge. Une relance ne reste pas bloquée sans qu'un responsable le sache. PULS tient le système d'envoi.

```text
EMAIL_ANTI_BLOCKING=DOCUMENTED
SMS_ANTI_BLOCKING=DOCUMENTED
SEND_IDEMPOTENCY=DOCUMENTED
PROVIDER_STATUS_RECONCILIATION=DOCUMENTED
LEGAL_HARD_STOPS=DOCUMENTED
PER_RECIPIENT_PROCESSING=MANDATORY
DELIVERED_WITHOUT_CONFIRMATION=FORBIDDEN
GUARANTEED_DELIVERY_PROMISE_WITHOUT_PROVIDER_GUARANTEE=FORBIDDEN
PROVIDER_NAMES_IN_THIS_CONTRACT=NONE
RETRY_COUNTS_FROZEN=NO
QUIET_HOURS_FROZEN=NO
```

Fonctions obligatoires de PULS :

1. File d'envoi persistante.
2. Vérification légale avant chaque envoi.
3. Planification des communications.
4. Reprises automatiques.
5. Gestion des limitations des fournisseurs.
6. Temporisation progressive.
7. Détection des messages bloqués.
8. Réconciliation des statuts inconnus.
9. Protection contre les doubles envois.
10. Suivi des accusés de réception disponibles.
11. Alertes en cas d'échec persistant.
12. Retour à la normale automatique.
13. Conservation de la trace complète.
14. Traitement indépendant de chaque destinataire admissible.

En cas de panne courriel, PULS conserve les courriels admissibles dans une file durable, reprend après rétablissement, et vérifie qu'un courriel n'a pas déjà été accepté avant une nouvelle tentative.

En cas de panne SMS, les mêmes protections s'appliquent. Une première réponse incertaine du fournisseur ne déclenche pas un second texto.

En cas de blocage d'une campagne, PULS identifie la portée : un seul destinataire, un segment, un fournisseur, une autorisation commerciale, un service technique, ou la campagne entière. Les envois des autres destinataires admissibles continuent. Une panne individuelle ne provoque pas une interruption générale évitable.

Un fournisseur secondaire de courriel ou de SMS peut être étudié. Son activation et toute dépense attendent une autorisation distincte de Martin.

```text
SECONDARY_SEND_PROVIDER=STUDY_ONLY
SECONDARY_SEND_PROVIDER_ACTIVATION_AUTHORIZED=NO
SECONDARY_SEND_PROVIDER_SPEND_AUTHORIZED=NO
```

Chaque message aboutit à un statut explicite :

- `SENT`
- `DELIVERED`, lorsque la livraison est confirmée
- `PENDING`
- `RETRY_SCHEDULED`
- `DELIVERY_UNKNOWN`
- `FAILED`
- `LEGALLY_SUPPRESSED`
- `HUMAN_REVIEW_REQUIRED`

`DELIVERED` exige une confirmation appropriée. Si le fournisseur ne garantit pas la livraison, le produit ne promet pas une livraison garantie.

La vérification légale de la section 7 reste un arrêt dur. Une opposition enregistrée est appliquée avant toute reprise. Le message en file dont l'autorisation a été retirée reçoit `LEGALLY_SUPPRESSED` et ne part pas. Une preuve absente isole l'envoi en `HUMAN_REVIEW_REQUIRED`.

## 11. Alertes et escalades

Toute anomalie produit un événement traçable. Un blocage silencieux est exclu.

```text
ALERTING_AND_ESCALATION=DOCUMENTED
MARTIN_NOTIFICATION_STRATEGY=DOCUMENTED
SILENT_BLOCK=FORBIDDEN
```

Blocage critique : campagne entière arrêtée, panne générale de synchronisation, risque de perte de données, multiplication anormale des doublons, ou défaillance qui empêche tous les envois admissibles.

```text
ALERTE_MARTIN=IMMEDIATE
```

Incident opérationnel, seuils proposés et non figés :

- après 15 minutes non résolues, alerte au responsable ;
- après 60 minutes non résolues, escalade à Martin ;
- après résolution, confirmation automatique.

```text
ESCALATION_THRESHOLDS=PROPOSED_NOT_FROZEN
THRESHOLD_15_MINUTES_OWNER_ALERT=PROPOSED
THRESHOLD_60_MINUTES_MARTIN_ESCALATION=PROPOSED
RESOLUTION_CONFIRMATION=AUTOMATIC_WHEN_IMPLEMENTED
THRESHOLD_VALIDATION_REQUIRED_BEFORE_IMPLEMENTATION=YES
```

Un doublon incertain crée une tâche de révision dans RELORA et avertit le responsable désigné. Les autres clients continuent.

Les problèmes similaires sont regroupés. Une même cause ne produit pas des centaines de notifications identiques.

Chaque alerte affiche le système concerné, le client ou la campagne, la nature de l'erreur, la cause connue ou probable, le nombre de dossiers touchés, les tentatives de correction, le responsable, la prochaine action, le statut, ainsi que la date et l'heure.

Le canal de notification est indépendant du fournisseur commercial potentiellement défaillant.

## 12. Tableau de bord commun

RELORA et PULS peuvent afficher l'état de l'écosystème commercial. Le tableau distingue les opérations normales, les corrections automatiques, les blocages légaux et les interventions humaines nécessaires.

```text
MONITORING_DASHBOARD=DOCUMENTED
DASHBOARD_IMPLEMENTATION_AUTHORIZED=NO
```

Indicateurs attendus : `SYNC_STATUS`, `LAST_SUCCESSFUL_SYNC`, `PENDING_EVENTS`, `FAILED_EVENTS`, `AUTO_RECOVERED_EVENTS`, `CUSTOMERS_OUT_OF_SYNC`, `DUPLICATE_CANDIDATES`, `HUMAN_REVIEW_PENDING`, `DATA_CONFLICTS`, `COMMERCIAL_GO_APPROVED`, `CAMPAIGNS_RUNNING`, `EMAIL_QUEUE_PENDING`, `SMS_QUEUE_PENDING`, `SENT_MESSAGES`, `DELIVERED_MESSAGES`, `DELIVERY_UNKNOWN`, `FAILED_MESSAGES`, `LEGAL_SUPPRESSIONS`, `CONSENT_STATUS`, `ALERTS_ACTIVE`, `ALERTS_RESOLVED`, `RESPONSIBLE_OWNER`, `NEXT_ACTION`.

## 13. Protection des données et organisations

L'isolation organisationnelle TAGORA s'applique. Une même personne peut être cliente de plusieurs entreprises. Une autorisation commerciale reste attachée à sa portée réelle et ne se transfère pas d'une entreprise à l'autre.

```text
DATA_PROTECTION=DOCUMENTED
ORGANIZATION_ISOLATION=MANDATORY
CONSENT_SCOPE_BOUND=YES
CROSS_ORGANIZATION_CONSENT_TRANSFER=FORBIDDEN
SHARED_DATA_LIMIT=NECESSARY_ONLY
USER_CENTRAL_PERMISSION_BYPASS=FORBIDDEN
NEXUS_BUSINESS_PERMISSIONS=NO
```

Sont conservés : la provenance des données, l'historique des corrections, les preuves de consentement, les retraits, les événements de synchronisation et les événements d'envoi.

Aucun système ne contourne les permissions de son propre User Central. NEXUS reste responsable de l'identité et de l'accès général. Les permissions métier restent dans les modules.

## 14. Transition sans interruption

Les connexions déjà fonctionnelles restent en service. Les clients et les historiques ne sont pas déplacés brutalement. Les relances PULS existantes continuent, sauf nécessité démontrée et décision autorisée. Les audits déjà PASS ne sont pas recommencés. Aucune double écriture comptable n'est introduite.

Ordre progressif :

1. Identifier les intégrations actuelles.
2. Réutiliser les capacités existantes.
3. Définir les contrats de données.
4. Prévoir l'identifiant central.
5. Définir la détection des doublons.
6. Préparer les files de synchronisation.
7. Préparer les mécanismes anti-blocage.
8. Préparer les vérifications légales.
9. Prévoir les tests de panne et de récupération.
10. Prévoir une comparaison parallèle contrôlée.
11. Planifier le basculement progressif.
12. Conserver le retour arrière.

```text
TRANSITION_MODE=PROGRESSIVE
WORKING_CONNECTIONS_CUT_BY_THIS_CONTRACT=NO
BRUTAL_CUSTOMER_OR_HISTORY_MOVE=FORBIDDEN
DOUBLE_ACCOUNTING_WRITE=FORBIDDEN
EXISTING_PULS_FOLLOWUPS_INTERRUPTED=NO
AUDITS_ALREADY_PASS_RESTARTED=NO
ROLLBACK_PRESERVED=YES
```

## 15. Hors contrat

Ce complément documentaire n'autorise aucun développement, commit, push, migration, changement de base, connexion QuickBooks, modification Staging ou Production, changement de permissions, changement NEXUS, envoi réel, campagne activée, suppression de connexion existante, dépense, ni audit général supplémentaire.

Le catalogue logique des événements et les catégories d'autorité sont figés dans l'annexe V1. Les noms natifs QuickBooks, les seuils chiffrés et le fournisseur d'envoi restent non figés. TOS ne certifie pas la conformité juridique.

Annexe : [TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1.md](TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1.md)

## 16. Suite

```text
NEXT_SINGLE_GO=RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO
NEXT_SINGLE_GO_ADDRESSEE=GPT_RELORA
NEXT_SINGLE_GO_FUTURE_EXECUTOR=CURSOR_RELORA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
SEQUENCE_CONSTRAINT=AFTER_NEXUS_V1_FINALIZATION
QB_TECHNICAL_OWNER=GPT_RELORA
TOS_ROLE=GOVERNANCE_CONTRACTS_AND_CROSS_CUTTING_DECISIONS
QB_WRITEBACK_RUNTIME=DISABLED
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
TECHNICAL_SCHEMA_FROZEN=NO
IMPLEMENTATION_GATE=NOT_NAMED
IMPLEMENTATION_AUTHORIZED=NO
COMMIT_CREATED=NO
PRODUCTION_CHANGED=NO
PACKETS=RELORA,PULS,NEXUS
NEXUS_PACKET_CHANGED_BY_THIS_COMPLETION=NO
MARTIN_TRANSFER_REQUIRED=YES
OBJECTIVE_FINAL=ZERO_BLOCAGE_SILENCIEUX_ZERO_INFORMATION_PERDUE_ZERO_DOUBLON_DANGEREUX_AUCUNE_RELANCE_AUTORISEE_OUBLIEE
```

Paquets :

- [RELORA](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_RELORA.md)
- [PULS](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_PULS.md)
- [NEXUS](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_NEXUS.md)
