# ADR-0025 — Symbiose clients RELORA / PULS / QuickBooks

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-11-21**

Validation : **VALD-115**  
Décision : **DEC-037**  
Gate : **TOS_RELORA_PULS_QUICKBOOKS_UNIFIED_CUSTOMER_SYNC_ANTIBLOCKING_ARCHITECTURE_GO**

Cette ADR enregistre l'architecture cible de la symbiose commerciale Premium 2027. Elle ne remplace pas ADR-0009, ADR-0014, ADR-0020 ni ADR-0024.

Elle n'autorise aucune implémentation, aucune connexion QuickBooks, aucune ouverture de RELORA et aucune modification de production.

Contrat : [TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md](../governance/TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md)  
Annexe de gel logique : [TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1.md](../governance/TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1.md)  
Paquet RELORA : [PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_RELORA.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_RELORA.md)  
Paquet PULS : [PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_PULS.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_PULS.md)  
Paquet NEXUS : [PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_NEXUS.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_NEXUS.md)

---

## Contexte

Martin demande un client, une identité commerciale uniforme, et trois systèmes synchronisés. RELORA centralise l'identité commerciale et le GO commercial. PULS exécute l'intelligence de relance, les envois et le contrôle légal. QuickBooks conserve l'autorité comptable.

Les sections 1 à 10 sont acceptées et conservées. Le 2026-11-21, le gate `TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO` intègre les sections 11 à 18 dans le même contrat. Cette ADR n'est pas rouverte : le complément documente l'anti-blocage des envois, les alertes, le tableau de bord, la protection des données et la transition progressive.

Le même jour, le gate `TOS_CUSTOMER_SYMBIOSIS_QB_INBOUND_RELORA_PULS_BIDIRECTIONAL_CONTRACT_AMENDMENT` amende les flux. Le contrat passe en version 1.2.0. La version 1.1.0 reste l'historique. ADR-0025, DEC-037 et VALD-115 restent les mêmes références. Les PASS existants restent des PASS.

Le gate `TOS_CUSTOMER_SYMBIOSIS_QB_WRITEBACK_SCOPE_DECISION` retient l'option B. Le contrat passe en version 1.3.0. La version 1.2.0 reste l'historique du flux avant ce choix. Le gate `TOS_CUSTOMER_SYMBIOSIS_LOGICAL_FREEZE_AND_QB_HUMAN_APPROVAL_UNIFIED_GO` renforce ce retour : proposition seulement, écriture automatique interdite, approbation humaine explicite à chaque modification. Aucune écriture QuickBooks réelle n'est autorisée.

---

## Décision

```text
ARCHITECTURE_CIBLE=QUICKBOOKS_INBOUND_RELORA_BIDIRECTIONAL_PULS
HISTORICAL_ARCHITECTURE_V1_1_0=PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS
CONTRACT_VERSION=1.3.0
HISTORICAL_CONTRACT_VERSION=1.2.0
ACTIVE_SYNC_DIRECTION=QB_TO_RELORA_BIDIRECTIONAL_PULS
DIRECT_PULS_QB_CONNECTION=NO
QUICKBOOKS_INTEGRATION_OWNER=RELORA
QUICKBOOKS_NAMED_SCOPES=OLIEM,TITAN
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_ARCHITECTURE=PROPOSAL_ONLY
QB_WRITEBACK_RUNTIME=DISABLED
QUICKBOOKS_TECHNICAL_OWNER=GPT_RELORA
TOS_ROLE=GOVERNANCE_ONLY
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
SYNC_LOOP_PROTECTION=MANDATORY
COMMERCIAL_IDENTITY=TAGORA_CUSTOMER_ID
TAGORA_CUSTOMER_ID_EQUALS_TAGORA_USER_ID=NO
CRM_AND_COMMERCIAL_GO=RELORA
COMMERCIAL_INTELLIGENCE_AND_FOLLOWUP=PULS
ACCOUNTING_AUTHORITY=QUICKBOOKS
CUSTOMER_RECORD_SYNC_REQUIRES_COMMERCIAL_GO=NO
CONSENT_AND_OPTOUT_PROPAGATION=MANDATORY
QUICKBOOKS_CUSTOMER_IMPLIES_MARKETING_CONSENT=NO
DUPLICATE_SILENT_DESTRUCTIVE_MERGE=FORBIDDEN
OTHER_CUSTOMERS_CONTINUE=YES
ZERO_SILENT_FAILURE=YES
DURABLE_SYNC_QUEUE=MANDATORY
AUTO_RETRY=MANDATORY
CONFLICT_ISOLATION=MANDATORY
MESSOR_DEPENDENCY_FOR_THIS_SYMBIOSIS=FORBIDDEN
NEXUS_ROLE=IDENTITY_AND_ACCESS_ONLY
RELORA_SECURITY_HOLD=true
RELORA_OPENABLE=false
QUICKBOOKS_CONNECTED_NOW=NO
SCHEMA_FROZEN=NO
SECTIONS_1_TO_10=PRESERVED
SECTIONS_11_TO_18=COMPLETED
COMPLETION_GATE=TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO
ESCALATION_THRESHOLDS=PROPOSED_NOT_FROZEN
SECONDARY_SEND_PROVIDER=STUDY_ONLY
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGES_AUTHORIZED=NO
NEXT_SINGLE_GO=RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO
NEXT_SINGLE_GO_ADDRESSEE=GPT_RELORA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
TECHNICAL_SCHEMA_FROZEN=NO
```

Le flux actif est QuickBooks vers RELORA, puis RELORA dans les deux sens avec PULS. RELORA est le seul point d'intégration QuickBooks pour Oliem et Titan. PULS n'a pas de connexion QuickBooks directe. WordPress et les listes autorisées entrent dans RELORA avec leur provenance. Un nouveau prospect PULS ne crée pas de client comptable QuickBooks. Un refus enregistré dans PULS se propage à RELORA et reste en vigueur face à un événement de synchronisation plus ancien.

Un doublon certain peut être rattaché automatiquement si l'identité est démontrée et l'opération sans risque. Un doublon incertain devient une tâche humaine dans RELORA. Le nom seul et le téléphone seul ne prouvent pas l'identité. Un contact peut appartenir à plusieurs organisations légales sans fusion de leurs données, consentements ou historiques.

Avant chaque courriel ou texto commercial, le GO commercial de RELORA et le GO légal et technique de PULS sont tous les deux requis. Le cadre visé est la LCAP et les obligations québécoises pertinentes en matière de renseignements personnels. TOS ne certifie pas cette conformité.

## Conséquences

- RELORA est le responsable technique exclusif des connexions QuickBooks Oliem et Titan. TOS conserve la gouvernance. PULS n'a aucune connexion directe. Le hold d'ADR-0024 reste. RELORA n'est pas ouvert. Aucun connecteur n'est ajouté.
- PULS reçoit la responsabilité cible des relances, des files d'envoi, des consentements opérationnels et du contrôle avant envoi.
- QuickBooks reste l'autorité comptable. La connexion actuelle reste absente. ADR-0020 n'est pas amendée.
- NEXUS reste hors du chemin de synchronisation client. `TAGORA_CUSTOMER_ID` ne devient ni `TAGORA_USER_ID` ni `nuser`.
- MESSOR n'est pas ajouté à cette symbiose.
- L'option B est retenue, puis renforcée. RELORA peut préparer une proposition vers QuickBooks pour un téléphone de contact, des coordonnées commerciales vérifiées, une personne-contact associée, ou un courriel de contact qui ne redirige pas les factures ni les communications sensibles. L'écriture automatique est interdite. Chaque modification exige une approbation humaine explicite. Une donnée d'agent IA reste non vérifiée jusqu'à validation. Les champs de facturation et à risque ne deviennent pas admissibles par cette approbation. Les factures, paiements, soldes, informations bancaires, taxes, prix, identité juridique, informations fiscales sensibles et l'historique comptable ne sont jamais modifiés. Les consentements, conversations et notes commerciales ne sont pas copiés dans QuickBooks. Aucun lead PULS ne crée automatiquement un client comptable.
- Le catalogue logique et les catégories d'autorité sont figés dans l'annexe V1. Le relevé de vérification reste en HOLD et n'est pas recommencé. Le prochain GO QuickBooks est adressé à GPT RELORA : `RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO`. Il attend la finalisation NEXUS V1 et n'est pas autorisé.
- Le complément du 2026-11-21 fixe les statuts d'envoi, la réconciliation d'un statut fournisseur inconnu, l'alerte immédiate à Martin pour un blocage critique, et les seuils opérationnels proposés de 15 et 60 minutes. Ces seuils restent à valider avant toute implémentation.
- Un fournisseur secondaire d'envoi peut être étudié. Son activation et toute dépense restent non autorisées.
- La transition reste progressive : connexions existantes maintenues, aucune double écriture comptable, relances PULS existantes maintenues, audits déjà PASS non recommencés.

## Hors décision

Le catalogue logique est figé dans l'annexe. Cette ADR ne fige aucun nom natif QuickBooks, aucun seuil chiffré, aucun fournisseur d'envoi, aucun connecteur et aucun avis juridique. Elle n'autorise aucun envoi, aucune campagne, aucune dépense et aucune écriture produit.
