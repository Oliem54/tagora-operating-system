# VALD-115 — Symbiose clients RELORA / PULS / QuickBooks

```text
VALIDATION_ID=VALD-115
VALIDATION_DATE=2026-11-21
VALIDATED_BY=Martin ST-Gelais — Direction
VALIDATION_TYPE=Humaine / Gouvernance
STATUS=Validé
GATE=TOS_RELORA_PULS_QUICKBOOKS_UNIFIED_CUSTOMER_SYNC_ANTIBLOCKING_ARCHITECTURE_GO
ADR=ADR-0025
DECISION=DEC-037
CONTRACT=docs/governance/TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md
RELORA_PACKET=docs/04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_RELORA.md
PULS_PACKET=docs/04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_PULS.md
NEXUS_PACKET=docs/04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_SYMBIOSE_CLIENTS_NEXUS.md
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGED=NO
QUICKBOOKS_CONNECTED=NO
RELORA_OPENED=NO
SECTIONS_1_TO_10=PRESERVED
SECTIONS_11_TO_18=COMPLETED
CONTRACT_VERSION=1.3.0
HISTORICAL_CONTRACT_VERSION=1.2.0
HISTORICAL_CONTRACT_VERSION_PRIOR=1.1.0
WRITEBACK_GATE=TOS_CUSTOMER_SYMBIOSIS_QB_WRITEBACK_SCOPE_DECISION
ACTIVE_SYNC_DIRECTION=QB_TO_RELORA_BIDIRECTIONAL_PULS
DIRECT_PULS_QB_CONNECTION=NO
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_ARCHITECTURE=PROPOSAL_ONLY
QB_WRITEBACK_RUNTIME=DISABLED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
TECHNICAL_SCHEMA_FROZEN=NO
FREEZE_ANNEX=docs/governance/TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1.md
COMPLETION_GATE=TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO
COMPLETION_DATE=2026-11-21
ESCALATION_THRESHOLDS=PROPOSED_NOT_FROZEN
COMMIT_CREATED=NO
```

## Portée validée

- Architecture historique V1.1.0 : `PULS_BIDIRECTIONAL_RELORA_BIDIRECTIONAL_QUICKBOOKS`. Version 1.2.0 : flux sans writeback choisi. Lecture active 1.3.0 : QuickBooks vers RELORA, RELORA dans les deux sens avec PULS, retour contrôlé par RELORA seulement.
- Identité commerciale `TAGORA_CUSTOMER_ID`, distincte de `TAGORA_USER_ID` et du `nuser`.
- RELORA : CRM central et GO commercial. Hold de sécurité maintenu. RELORA non ouvert.
- PULS : relances, files, consentements opérationnels, contrôle légal avant chaque envoi commercial.
- QuickBooks : autorité comptable. Connexion actuelle absente. Présence client distincte d'un consentement marketing.
- Doublon certain : rattachement sans fusion destructive silencieuse. Doublon incertain : revue humaine isolée. Les autres clients continuent.
- Refus et désabonnement propagés. Un événement ancien ne réactive pas une autorisation retirée.
- Anti-blocage : file durable, idempotence, reprise, isolation des conflits, zéro échec silencieux.
- MESSOR hors dépendance. NEXUS limité à l'identité et à l'accès. Le paquet NEXUS n'est pas modifié par le complément.
- Gel logique du catalogue et des catégories d'autorité enregistré. Noms natifs QuickBooks `TO_VERIFY`. Prochain GO `TOS_CUSTOMER_SYMBIOSIS_QUICKBOOKS_NATIVE_FIELD_AND_REALM_VERIFICATION` non autorisé.

## Complément documentaire du 2026-11-21

Les sections 1 à 10 restent acceptées. Le gate `TOS_CUSTOMER_SYMBIOSIS_TRUNCATED_DIRECTIVE_DOCUMENTATION_COMPLETION_GO` complète les sections 11 à 18 dans le contrat existant. ADR-0025, DEC-037 et VALD-115 restent les mêmes références.

- Courriels et textos : file persistante, vérification légale, planification, reprise, limites fournisseurs, temporisation, détection des blocages, réconciliation des statuts inconnus, anti-doublon, accusés disponibles, alerte d'échec persistant, retour automatique à la normale, trace complète, traitement par destinataire.
- Panne courriel : file durable, reprise après rétablissement, nouvelle tentative seulement après vérification que le courriel n'a pas déjà été accepté. Panne SMS : mêmes protections, et aucun second texto lorsque la première réponse du fournisseur est incertaine.
- Portée d'un blocage de campagne identifiée. Les autres destinataires admissibles continuent.
- Fournisseur secondaire : étude seulement. Activation et dépense non autorisées.
- Statuts : `SENT`, `DELIVERED`, `PENDING`, `RETRY_SCHEDULED`, `DELIVERY_UNKNOWN`, `FAILED`, `LEGALLY_SUPPRESSED`, `HUMAN_REVIEW_REQUIRED`. `DELIVERED` exige une confirmation.
- Alerte Martin immédiate pour un blocage critique. Seuils proposés : 15 minutes au responsable, 60 minutes à Martin, confirmation après résolution. Seuils non figés.
- Alertes regroupées, canal indépendant du fournisseur commercial.
- Tableau de bord commun RELORA et PULS, indicateurs nommés dans le contrat.
- Isolation organisationnelle, consentement lié à sa portée, User Central non contournable.
- Transition progressive. Connexions existantes maintenues. Aucune double écriture comptable. Relances PULS existantes maintenues. Audits PASS non recommencés.

## Amendement documentaire 1.2.0

Le gate `TOS_CUSTOMER_SYMBIOSIS_QB_INBOUND_RELORA_PULS_BIDIRECTIONAL_CONTRACT_AMENDMENT` aligne les flux dans le même contrat. La version 1.1.0 reste l'historique. ADR-0025, DEC-037 et VALD-115 restent les références. Les PASS existants restent des PASS.

- Flux actif : QuickBooks vers RELORA, puis RELORA dans les deux sens avec PULS.
- RELORA est le seul point d'intégration QuickBooks pour Oliem et Titan.
- PULS n'a aucune connexion QuickBooks directe.
- L'échange RELORA et PULS couvre les clients, prospects, conversations, demandes et suivis admissibles. La synchronisation d'une fiche ne demande aucun GO de campagne.
- À la version 1.2.0, l'écriture de retour était encore en attente entre le scénario A et le scénario B. La version 1.3.0 retient le scénario B. Cette section 1.2.0 reste l'historique.
- Doublons, autorité par champ, absence d'écrasement, protection contre les boucles et continuité des autres dossiers restent en vigueur.
- Double GO, files d'envoi, reprises, anti-doublon d'envoi, statuts inconnus, alertes et arrêts légaux restent en vigueur.

## Décision de writeback 1.3.0

Le gate `TOS_CUSTOMER_SYMBIOSIS_QB_WRITEBACK_SCOPE_DECISION` retient l'option B. ADR-0025, DEC-037 et VALD-115 restent les références. Les PASS existants restent des PASS. Aucune écriture QuickBooks réelle n'est autorisée.

- Retour cible : RELORA seulement, pour des champs clients validés.
- Liste positive candidate : téléphone de contact, coordonnées commerciales vérifiées, personne-contact associée, courriel de contact s'il ne redirige pas les factures ni les communications sensibles.
- Validation humaine spécifique, lecture historique de la version 1.3.0 : coordonnées de facturation, courriel à risque de redirection, tout champ de facturation ou à risque. Cette lecture est fermée : une approbation humaine ne rend pas ces champs admissibles.
- Jamais en écriture automatique : factures, paiements, soldes, informations bancaires, taxes, prix, identité juridique, informations fiscales sensibles, historique comptable.
- Consentements, conversations et notes commerciales : pas de copie inutile dans QuickBooks.
- Aucun client comptable créé automatiquement pour un lead PULS.
- PULS sans connexion QuickBooks directe. Oliem et Titan restent isolés.
- Doublons, boucles, reprise, alertes et double GO restent en vigueur. Une panne QuickBooks laisse continuer les relances PULS légalement autorisées.

## Gel logique V1

Le gate `TOS_CUSTOMER_SYMBIOSIS_EVENT_CATALOG_AND_FIELD_AUTHORITY_FREEZE` fige le catalogue logique, l'enveloppe d'événement, les catégories d'autorité, les flux, l'identité, l'idempotence, l'anti-blocage, les consentements, les envois et les alertes. Le contrat 1.3.0 reste la décision d'architecture. Les noms natifs QuickBooks, les realms Oliem et Titan, les limites chiffrées et les fournisseurs restent `TO_VERIFY`. Le gel technique complet n'est pas déclaré. Aucune implémentation.

## Protection humaine QuickBooks

Le gate `TOS_CUSTOMER_SYMBIOSIS_LOGICAL_FREEZE_AND_QB_HUMAN_APPROVAL_UNIFIED_GO` renforce l'option B sans changer le contrat de version. L'écriture automatique vers QuickBooks est interdite. Toute modification de la liste positive est une proposition et exige une approbation humaine explicite. Une approbation ne rend pas admissible un champ protégé. Les 43 événements restent inchangés. Les noms techniques restent en attente.

Contradiction relevée et fermée : la matrice 1.3.0 pouvait se lire comme autorisant l'écriture d'un champ de liste positive déjà validé sans nouvelle approbation, et comme ouvrant les coordonnées de facturation dès qu'un humain les approuvait. Ces deux lectures ne sont plus actives.

## Vérification des champs et des realms

Le gate `TOS_CUSTOMER_SYMBIOSIS_QUICKBOOKS_NATIVE_FIELD_AND_REALM_VERIFICATION` a consulté le schéma public Intuit et les documents TAGORA déjà présents. Aucune société QuickBooks n'a été lue. Les champs natifs, le format réel d'identifiant, les realms Oliem et Titan et la correspondance NEXUS restent en HOLD. Le relevé est `docs/governance/TAGORA-CUSTOMER-SYMBIOSIS-QB-NATIVE-FIELD-VERIFICATION-V1.md`. Le gel technique complet n'est pas déclaré.

## Transfert de responsabilité QuickBooks

Le gate `TAGORA_QUICKBOOKS_RELORA_TECHNICAL_OWNERSHIP_TRANSFER_GO` confie à GPT RELORA la responsabilité technique exclusive des connexions QuickBooks Oliem et Titan. L'exécutant futur est Cursor RELORA. TOS conserve la gouvernance. PULS reste sans connexion directe. Le paquet existant est transmis. Les audits et le relevé de vérification ne sont pas recommencés. Le runtime reste fermé. Le prochain GO n'est pas autorisé.

## Hors validation

Aucun développement, commit, push, migration, base de données, connexion QuickBooks, Staging, Production, permission, changement NEXUS, envoi, campagne, suppression de connexion, dépense, ni audit général supplémentaire. RELORA reste non ouvert. Le hold reste.
