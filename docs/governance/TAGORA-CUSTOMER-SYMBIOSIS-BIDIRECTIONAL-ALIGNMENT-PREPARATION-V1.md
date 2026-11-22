# Préparation — alignement bidirectionnel RELORA ↔ PULS

Ce document a préparé la correction de flux. Le contrat officiel est ensuite passé en 1.2.0, puis en 1.3.0. L'option B de writeback contrôlé est retenue dans le contrat. Ce fichier n'est pas le contrat. Aucune écriture QuickBooks réelle n'est autorisée.

```text
PREPARATION_STATUS=SUPERSEDED_BY_CONTRACT_1_3_0
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_RUNTIME=NOT_AUTHORIZED
```

```text
DOCUMENT_ID=TAGORA-CUSTOMER-SYMBIOSIS-BIDIRECTIONAL-ALIGNMENT-PREPARATION-V1
DOCUMENT_DATE=2026-11-21
DOCUMENT_AUTHORITY=MARTIN
SOURCE_GATE=TAGORA_RELORA_PULS_BIDIRECTIONAL_CUSTOMER_SYMBIOSIS_ARCHITECTURE_GO
MODE=ARCHITECTURE_ALIGNMENT_ONLY
OFFICIAL_CONTRACT=docs/governance/TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md
OFFICIAL_CONTRACT_VERSION=1.3.0
HISTORICAL_CONTRACT_VERSION=1.1.0
OFFICIAL_CONTRACT_AMENDED=YES
AMENDMENT_GATE=TOS_CUSTOMER_SYMBIOSIS_QB_INBOUND_RELORA_PULS_BIDIRECTIONAL_CONTRACT_AMENDMENT
ADR_0025=PRESERVED
DEC_037=PRESERVED
VALD_115=PRESERVED
PASS_EXISTING=PRESERVED
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGED=NO
COMMIT_CREATED=NO
QUICKBOOKS_CONNECTED_NOW=NO
DATA_TRANSFER_AUTHORIZED=NO
QB_WRITEBACK_RUNTIME=NOT_AUTHORIZED
NEXT_SINGLE_GO=TOS_CUSTOMER_SYMBIOSIS_EVENT_CATALOG_AND_FIELD_AUTHORITY_FREEZE
NEXT_SINGLE_GO_AUTHORIZED=NO
EVENT_CATALOG_FREEZE=NOT_AUTHORIZED
```

Le gate de préparation a été suivi des amendements 1.2.0 puis 1.3.0. Le contrat officiel est en version 1.3.0. L'option B est retenue. Le tableau d'écarts ci-dessous conserve l'état constaté avant ces amendements.

Le gel du catalogue d'événements vient après le choix du writeback. Il n'est pas autorisé.

---

## 1. Cible retenue

```text
ARCHITECTURE_CIBLE_RETENUE=QUICKBOOKS_INBOUND_RELORA_BIDIRECTIONAL_PULS
FLOW=QUICKBOOKS → RELORA ↔ PULS
RELORA_PULS_DIRECTION=BIDIRECTIONAL
QUICKBOOKS_INTEGRATION_OWNER=RELORA
QUICKBOOKS_NAMED_SCOPES=OLIEM,TITAN
QUICKBOOKS_COMPANY_IDS_ASSIGNED=NO
PULS_DIRECT_QUICKBOOKS_CONNECTION=FORBIDDEN
PULS_NEW_DIRECT_QUICKBOOKS_DEVELOPMENT=FORBIDDEN
FIELD_AUTHORITY=ONE_AUTHORITY_PER_FIELD
AUTOMATIC_OVERWRITE_OF_CONFLICTING_DATA=FORBIDDEN
SYNC_LOOP_PROTECTION=MANDATORY
```

RELORA centralise l'intégration QuickBooks pour Oliem et Titan. TOS n'attribue aucun identifiant de société QuickBooks et n'étend pas ce périmètre à d'autres entreprises.

RELORA transmet à PULS les informations commerciales et clients autorisées.

PULS transmet à RELORA les informations clients, les prospects, les conversations, les demandes et les suivis recueillis par ses agents IA.

## 2. Règles déjà portées par le contrat V1.1.0

Ces règles restent celles du contrat. Cette préparation ne les réécrit pas.

1. Synchronisation par événements sécurisés, avec accusé, file durable et reprise.
2. Autorité par domaine, puis par champ lorsque le catalogue sera figé.
3. Isolation des entreprises et des organisations. Un consentement ne passe pas d'une entreprise à l'autre.
4. Aucun écrasement d'une valeur conflictuelle. Le conflit est isolé.
5. Détection des doublons. Rattachement automatique seulement si l'identité est démontrée et l'opération sans risque. Revue humaine dans RELORA lorsque l'identité est incertaine.
6. Événements idempotents et traçables.
7. Validation humaine lorsque l'identité, la preuve légale ou le conflit l'exige.
8. Consentements et restrictions légales. Le GO commercial RELORA et le GO légal PULS restent tous les deux requis avant un envoi commercial.
9. Transmission limitée aux données nécessaires. Les données comptables sensibles restent chez QuickBooks.

La protection contre les boucles de synchronisation est la précision ajoutée par ce gate. Un événement déjà appliqué, ou l'écho d'un événement émis par le système qui le reçoit, ne crée pas une nouvelle écriture. Le mécanisme exact reste hors schéma figé.

## 3. Écarts qui exigent l'amendement

| Sujet | Contrat V1.1.0 encore en vigueur | Cible retenue, non appliquée |
|---|---|---|
| Pairs | `BIDIRECTIONAL_PEERS=PULS,RELORA,QUICKBOOKS` | Pair bidirectionnel : RELORA et PULS. QuickBooks entre par RELORA. |
| Formule | `PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS` | `QUICKBOOKS → RELORA ↔ PULS` |
| Connexion PULS | Copie comptable limitée au suivi nécessaire | PULS ne développe plus de connexion QuickBooks directe |
| Cas C | Les changements admissibles sont transmis à QuickBooks | Transmission RELORA → QuickBooks absente du schéma retenu |
| Cas E | PULS → RELORA → QuickBooks lorsque pertinent et autorisé | PULS → RELORA. La suite vers QuickBooks n'est pas retenue par ce gate |
| Périmètre nommé | Non nommé | Oliem et Titan |
| Boucles | Idempotence et anti-doublon d'envoi | Protection explicite contre les boucles de synchronisation |
| Contenu PULS → RELORA | Faits commerciaux admissibles | Clients, prospects, conversations, demandes et suivis recueillis par les agents IA |

L'autorité comptable de QuickBooks, l'absence de consentement marketing déduit d'une fiche QuickBooks, et l'interdiction de créer un client comptable depuis un simple prospect PULS restent compatibles avec la cible. Elles ne sont pas retirées.

```text
RELORA_TO_QUICKBOOKS_WRITEBACK_IN_V1_1_0=PRESENT
RELORA_TO_QUICKBOOKS_WRITEBACK_RECONFIRMED_BY_THIS_GATE=NO
WRITEBACK_REMOVED_FROM_OFFICIAL_CONTRACT=NO
WRITEBACK_DECISION_REQUIRED_AT_AMENDMENT=KEEP_NARROW_OR_REMOVE
```

## 4. Responsabilités retenues

RELORA : référentiel commercial clients, intégration QuickBooks pour Oliem et Titan, rapprochement et consolidation, approbation commerciale.

PULS : agents IA et conversations, qualification et création de prospects, suivis et communications, contrôle légal des envois, transmission des nouvelles informations vers RELORA.

NEXUS : aucun changement identifié. Identité et accès général seulement.

MESSOR : aucune dépendance ajoutée.

## 5. Texte prêt pour l'amendement

Le flux de ce texte est appliqué. L'option B de writeback contrôlé est ensuite retenue dans le contrat 1.3.0. Le runtime d'écriture reste non autorisé.

```text
ARCHITECTURE_CIBLE=QUICKBOOKS_INBOUND_RELORA_BIDIRECTIONAL_PULS
BIDIRECTIONAL_PEERS=RELORA,PULS
QUICKBOOKS_FLOW=INBOUND_TO_RELORA
QUICKBOOKS_INTEGRATION_OWNER=RELORA
QUICKBOOKS_NAMED_SCOPES=OLIEM,TITAN
PULS_DIRECT_QUICKBOOKS_CONNECTION=FORBIDDEN
SYNC_LOOP_PROTECTION=MANDATORY
AUTOMATIC_OVERWRITE_OF_CONFLICTING_DATA=FORBIDDEN
PULS_TO_RELORA=CUSTOMERS,PROSPECTS,CONVERSATIONS,REQUESTS,AI_AGENT_FOLLOWUPS
RELORA_TO_PULS=AUTHORIZED_COMMERCIAL_AND_CUSTOMER_INFORMATION
RELORA_TO_QUICKBOOKS_WRITEBACK=DECISION_REQUIRED
```

Les paquets RELORA et PULS restent ceux du contrat V1.1.0. Ils seront alignés dans le même amendement, pas avant.

## 6. Hors préparation

Aucun développement, commit, migration, déploiement, connexion QuickBooks, transfert de données, envoi, campagne, ouverture de RELORA, ni modification de production.

Les PASS existants restent des PASS. ADR-0025, DEC-037 et VALD-115 ne sont pas rouverts.
