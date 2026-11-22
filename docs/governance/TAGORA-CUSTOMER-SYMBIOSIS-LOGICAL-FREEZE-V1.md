# Gel logique — catalogue d'événements et autorité des champs

Annexe du contrat [TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md](TAGORA-CUSTOMER-SYMBIOSIS-RELORA-PULS-QUICKBOOKS-V1.md), version 1.3.0. Cette annexe ne le remplace pas. Elle ne fige aucun nom de champ natif QuickBooks.

```text
ANNEX_ID=TAGORA-CUSTOMER-SYMBIOSIS-LOGICAL-FREEZE-V1
ANNEX_VERSION=1.0.0
ANNEX_DATE=2026-11-21
ANNEX_AUTHORITY=MARTIN
SOURCE_GATE=TOS_CUSTOMER_SYMBIOSIS_EVENT_CATALOG_AND_FIELD_AUTHORITY_FREEZE
CONTRACT_VERSION=1.3.0
HISTORICAL_CONTRACT_VERSION=1.2.0
ADR=ADR-0025
DEC=DEC-037
VALIDATION=VALD-115
DOCUMENTATION_FREEZE_STATUS=LOGICAL_FREEZE_V1_TECHNICAL_PARTIAL
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
FIELD_AUTHORITY_MATRIX=CATEGORY_FREEZE_V1
NATIVE_QB_FIELD_NAMES=TO_VERIFY
TECHNICAL_SCHEMA_FROZEN=NO
QB_WRITEBACK_TARGET=CONTROLLED_RELORA_ONLY
QB_WRITEBACK_RUNTIME=NOT_AUTHORIZED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL_REQUIRED=ALWAYS
PULS_ORIGINATED_DATA_AUTO_WRITE_TO_QB=FORBIDDEN
AI_DATA_UNTIL_VALIDATION=UNVERIFIED
HUMAN_APPROVAL_STRENGTHENING_GATE=TOS_CUSTOMER_SYMBIOSIS_LOGICAL_FREEZE_AND_QB_HUMAN_APPROVAL_UNIFIED_GO
DIRECT_PULS_QB_CONNECTION=NO
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGES_AUTHORIZED=NO
COMMIT_CREATED=NO
NEXT_SINGLE_GO=TOS_CUSTOMER_SYMBIOSIS_QUICKBOOKS_NATIVE_FIELD_AND_REALM_VERIFICATION
NEXT_SINGLE_GO_AUTHORIZED=NO
```

Le raccourci QuickBooks, RELORA et PULS dans les deux sens signifie ceci : QuickBooks entre dans RELORA ; RELORA et PULS échangent dans les deux sens ; le retour RELORA vers QuickBooks reste une proposition sur la liste positive du contrat 1.3.0. Il n'est jamais automatique. Il attend une approbation humaine explicite de la modification. Il ne devient pas une copie intégrale des champs.

---

## 1. Catalogue logique d'événements V1

Préfixe commun : `tagora.symbiosis.v1`. `EVENT_VERSION=1`. Les noms ci-dessous sont les noms logiques figés. Ils ne sont pas des noms d'API QuickBooks.

### Clients et prospects

| EVENT_TYPE | Fait |
|---|---|
| `tagora.symbiosis.v1.customer.created` | Création d'une identité commerciale |
| `tagora.symbiosis.v1.customer.updated` | Modification d'une fiche commerciale |
| `tagora.symbiosis.v1.identity.matched` | Rapprochement d'identité |
| `tagora.symbiosis.v1.prospect.converted` | Conversion prospect vers client |
| `tagora.symbiosis.v1.contact_person.changed` | Changement de personne-contact |
| `tagora.symbiosis.v1.validated_coordinates.updated` | Modification de coordonnées validées |

### Relations commerciales

| EVENT_TYPE | Fait |
|---|---|
| `tagora.symbiosis.v1.request.created` | Nouvelle demande |
| `tagora.symbiosis.v1.conversation.created` | Nouvelle conversation |
| `tagora.symbiosis.v1.opportunity.created` | Nouvelle opportunité |
| `tagora.symbiosis.v1.commercial_status.changed` | Changement de statut commercial |
| `tagora.symbiosis.v1.followup.recorded` | Suivi commercial |
| `tagora.symbiosis.v1.commercial_go.granted` | GO commercial RELORA |
| `tagora.symbiosis.v1.puls_result.reported` | Retour de résultat PULS |

### QuickBooks

| EVENT_TYPE | Fait |
|---|---|
| `tagora.symbiosis.v1.qb_customer.created` | Nouveau client comptable reçu par RELORA |
| `tagora.symbiosis.v1.qb_customer.updated` | Modification de client comptable reçue par RELORA |
| `tagora.symbiosis.v1.qb_sale_or_invoice.recorded` | Vente ou facture pertinente, sans copie du document comptable dans PULS |
| `tagora.symbiosis.v1.qb_payment.recorded` | Paiement pertinent, sans copie du détail comptable dans PULS |
| `tagora.symbiosis.v1.qb_coordinates.writeback_requested` | Proposition de mise à jour de coordonnées admissibles. Elle n'écrit pas. L'exécution future exige une approbation humaine explicite |
| `tagora.symbiosis.v1.qb_writeback.refused` | Refus de writeback |
| `tagora.symbiosis.v1.qb_data.conflicted` | Conflit de donnée impliquant QuickBooks |

### Consentements et relances

| EVENT_TYPE | Fait |
|---|---|
| `tagora.symbiosis.v1.consent.granted` | Consentement accordé |
| `tagora.symbiosis.v1.consent.withdrawn` | Consentement retiré |
| `tagora.symbiosis.v1.subscription.opted_out` | Désabonnement |
| `tagora.symbiosis.v1.legal_restriction.applied` | Restriction légale |
| `tagora.symbiosis.v1.followup.authorized` | Relance autorisée après les deux GO |
| `tagora.symbiosis.v1.message.scheduled` | Message planifié |
| `tagora.symbiosis.v1.message.pending` | Message en attente |
| `tagora.symbiosis.v1.message.sent` | Message accepté par le fournisseur |
| `tagora.symbiosis.v1.message.delivered` | Livraison confirmée |
| `tagora.symbiosis.v1.message.delivery_unknown` | Statut de livraison inconnu |
| `tagora.symbiosis.v1.message.failed` | Échec |
| `tagora.symbiosis.v1.message.retry_scheduled` | Reprise planifiée |
| `tagora.symbiosis.v1.message.legally_suppressed` | Envoi retenu pour motif légal |
| `tagora.symbiosis.v1.message.human_review_required` | Intervention requise |

`message.sent` n'est pas une livraison garantie.

### Qualité et synchronisation

| EVENT_TYPE | Fait |
|---|---|
| `tagora.symbiosis.v1.duplicate.suspected` | Doublon potentiel |
| `tagora.symbiosis.v1.human_review.requested` | Vérification humaine demandée |
| `tagora.symbiosis.v1.duplicate.resolved` | Doublon résolu |
| `tagora.symbiosis.v1.conflict.detected` | Conflit détecté |
| `tagora.symbiosis.v1.sync.succeeded` | Synchronisation réussie |
| `tagora.symbiosis.v1.sync.failed` | Synchronisation échouée |
| `tagora.symbiosis.v1.sync.auto_recovered` | Reprise automatique aboutie |
| `tagora.symbiosis.v1.incident.escalated` | Incident escaladé |
| `tagora.symbiosis.v1.incident.resolved` | Incident résolu |

```text
EVENT_CATALOG_STATUS=LOGICAL_FREEZE_V1
EVENT_COUNT=43
```

## 2. Contrat commun des événements

Champs obligatoires de l'enveloppe :

| Champ | Règle |
|---|---|
| `EVENT_ID` | Identifiant unique de cette émission |
| `EVENT_TYPE` | Une valeur du catalogue V1 |
| `EVENT_VERSION` | `1` pour ce gel |
| `SOURCE_SYSTEM` | `RELORA`, `PULS` ou `QUICKBOOKS` |
| `ORGANIZATION_ID` | Organisation commerciale TAGORA. Oliem et Titan restent distincts |
| `TAGORA_CUSTOMER_ID` | Obligatoire dès que l'identité commerciale est connue. Un prospect non encore rattaché porte `PROSPECT_ID` et laisse ce champ vide |
| `SOURCE_RECORD_ID` | Identifiant de la fiche dans le système source |
| `OCCURRED_AT` | Horodatage du fait métier |
| `CORRELATION_ID` | Regroupe les événements d'une même opération |
| `CAUSATION_ID` | `EVENT_ID` qui a causé celui-ci. Vide pour un fait d'origine |
| `IDEMPOTENCY_KEY` | Identifie l'opération logique. Un rejeu répète la même clé |
| `ORIGIN_SYSTEM` | Système qui a observé le fait la première fois |
| `SYNC_STATUS` | `PENDING`, `ACKNOWLEDGED`, `APPLIED`, `REJECTED`, `CONFLICT`, `RETRY_SCHEDULED`, `HELD_FOR_HUMAN` |
| `RETRY_COUNT` | Nombre de tentatives déjà faites |
| `LAST_ERROR` | Dernière erreur connue, sans secret |
| `AUTHORIZED_OPERATION` | Opération permise par la matrice. Une opération absente de la matrice est refusée |

Règles :

1. Le destinataire accuse réception. L'absence d'accusé laisse l'opération ouverte et visible.
2. Un même `EVENT_ID` est appliqué une seule fois par destinataire.
3. Un rejeu réutilise `IDEMPOTENCY_KEY`. Il ne crée ni un second client, ni un second message, ni une seconde écriture.
4. Une correction se propage par un nouvel événement dont `CAUSATION_ID` désigne l'événement corrigé.
5. Un système ne réémet pas un fait seulement parce qu'il a reçu l'écho de sa propre émission. La chaîne `ORIGIN_SYSTEM` et `CAUSATION_ID` sert à reconnaître cet écho.
6. L'expiration ne détruit pas la charge. Tant qu'aucune durée n'est figée, l'événement non appliqué passe en `HELD_FOR_HUMAN`. La durée numérique reste `TO_VERIFY`.
7. `RETRY_COUNT` maximal et la temporisation chiffrée restent `TO_VERIFY`. La temporisation est progressive.
8. Le runtime d'écriture QuickBooks reste fermé. `qb_coordinates.writeback_requested` enregistre une proposition. Même après un futur GO de runtime, l'écriture attend une approbation humaine explicite de cette modification. Une donnée issue d'un agent IA reste non vérifiée jusqu'à cette validation. Le dossier doit être inchangé entre la lecture et l'écriture.

## 3. Matrice d'autorité des champs V1

Autorités de domaine, déjà retenues : RELORA pour l'identité commerciale et le CRM ; PULS pour les consentements et les relances ; QuickBooks pour les données comptables.

Une valeur périmée n'écrase pas une valeur plus récente et validée. Un conflit isole le champ. Les autres dossiers continuent.

| Nom logique | Responsable | Source autorisée | Destination autorisée | Sens | Validation | Humain | Conflit | Protection | Statut |
|---|---|---|---|---|---|---|---|---|---|
| `tagora_customer_id` | RELORA | RELORA | PULS, lien QuickBooks | RELORA vers les autres | Attribué une fois, stable | Non, sauf rattachement incertain | Pas de second identifiant | Distinct de `TAGORA_USER_ID` et du `nuser` | Confirmé logique |
| `prospect_id` | RELORA | PULS, RELORA | PULS | Bidirectionnel RELORA et PULS | Conservé après conversion | Si identité incertaine | Pas de fusion silencieuse | Par organisation | Confirmé logique |
| `contact_id` | RELORA | RELORA, PULS | PULS | Bidirectionnel RELORA et PULS | Personne distincte de l'entreprise | Si rattachement incertain | Pas d'écrasement | Par organisation | Confirmé logique |
| `company_id` | RELORA | RELORA | PULS | RELORA vers PULS | Entreprise légale | Si rapprochement incertain | Pas de fusion interentreprises | Par organisation | Confirmé logique |
| `organization_id` | RELORA pour le cloisonnement commercial | RELORA | PULS, périmètre QuickBooks | Porté par chaque événement | Oliem et Titan séparés | Oui si le rattachement d'organisation est ambigu | Aucune fusion implicite | Isolation stricte | Confirmé logique. Lien avec l'organisation NEXUS : `TO_VERIFY` |
| `qb_customer_local_id` | QuickBooks | QuickBooks vers RELORA | RELORA | Entrant | Un identifiant par société QuickBooks | Non pour la lecture | Pas d'écrasement d'un lien déjà confirmé | Pas copié comme consentement | Format natif `TO_VERIFY` |
| `relora_record_id` | RELORA | RELORA | PULS | RELORA vers PULS | Stable dans RELORA | Non | — | Minimum nécessaire | Confirmé logique |
| `puls_record_id` | PULS | PULS | RELORA | PULS vers RELORA | Stable dans PULS | Non | — | Minimum nécessaire | Confirmé logique |
| `contact_phone` | RELORA pour la vue consolidée | RELORA, proposition PULS, entrée QuickBooks | PULS ; QuickBooks seulement en proposition sur la liste positive | Bidirectionnel RELORA et PULS ; entrée QuickBooks ; retour jamais automatique | Identité certaine, provenance, ancienne et nouvelle valeur | Oui, approbation explicite de cette modification | La plus récente validée l'emporte dans RELORA. QuickBooks n'est pas écrasé | Minimum nécessaire. Donnée IA non vérifiée jusqu'à validation | Catégorie confirmée. Champ natif `TO_VERIFY` |
| `verified_commercial_coordinates` | RELORA | RELORA, PULS | PULS ; QuickBooks seulement en proposition sur la liste positive | Comme le téléphone | Vérifiées, comparées, dossier inchangé | Oui, approbation explicite de cette modification | Pas d'écrasement silencieux de QuickBooks | Adresse commerciale distincte de l'adresse de facturation | Catégorie confirmée. Découpage natif `TO_VERIFY` |
| `associated_contact_person` | RELORA | RELORA, PULS | PULS ; QuickBooks seulement en proposition sur la liste positive | Comme le téléphone | Personne associée à la bonne entreprise | Oui, approbation explicite de cette modification | Pas de fusion de personnes | Par entreprise. Donnée IA non vérifiée jusqu'à validation | Catégorie confirmée. Champ natif `TO_VERIFY` |
| `contact_email` | RELORA pour la vue commerciale | RELORA, PULS, entrée QuickBooks | PULS ; QuickBooks seulement si aucun risque de redirection, et seulement en proposition | Retour conditionnel, jamais automatique | Preuve que factures et communications sensibles ne sont pas redirigées | Oui, même sans risque de redirection | Un risque de redirection sort le champ de la liste positive. L'approbation humaine ne l'y fait pas entrer | Courriel de contact distinct du courriel de facturation | Catégorie confirmée. Champ natif `TO_VERIFY` |
| `billing_coordinates` | QuickBooks | QuickBooks | RELORA pour affichage consolidé | Entrant seulement | Aucune écriture, même après approbation humaine | L'approbation n'ouvre pas l'écriture | QuickBooks conserve l'autorité | Pas de remplacement par une adresse commerciale | Catégorie protégée. Extension de liste : GO distinct. Champ natif `TO_VERIFY` |
| `legal_identity` | QuickBooks | QuickBooks | RELORA, minimum | Entrant | Aucune écriture, même après approbation humaine | L'approbation n'ouvre pas l'écriture | QuickBooks | Fiscale et juridique | Protégé. Extension de liste : GO distinct. Champ natif `TO_VERIFY` |
| `sensitive_tax_info` | QuickBooks | QuickBooks | RELORA si nécessaire au dossier | Entrant | Aucune écriture, même après approbation humaine | L'approbation n'ouvre pas l'écriture | QuickBooks | Minimum nécessaire | Protégé |
| `invoices` | QuickBooks | QuickBooks | RELORA : fait pertinent seulement. PULS : minimum de suivi | Entrant | Aucune écriture | — | QuickBooks | Pas de copie du document dans PULS | Protégé |
| `payments` | QuickBooks | QuickBooks | Comme les factures | Entrant | Aucune écriture | — | QuickBooks | Minimum de suivi | Protégé |
| `balances` | QuickBooks | QuickBooks | RELORA | Entrant | Aucune écriture | — | QuickBooks | Pas de copie inutile dans PULS | Protégé |
| `bank_details` | QuickBooks | QuickBooks | Aucune copie commerciale | Aucun flux commercial | Aucune écriture | — | QuickBooks | Interdit hors QuickBooks | Protégé |
| `taxes` | QuickBooks | QuickBooks | Aucune copie commerciale | Aucun flux commercial | Aucune écriture | — | QuickBooks | Interdit hors QuickBooks | Protégé |
| `prices` | QuickBooks | QuickBooks | Aucune copie comme donnée CRM | Aucun flux commercial | Aucune écriture | — | QuickBooks | Interdit hors QuickBooks | Protégé |
| `accounting_history` | QuickBooks | QuickBooks | RELORA : référence d'événement | Entrant | Aucune réécriture | — | QuickBooks | Pas réécrit par une synchro | Protégé |
| `express_consent` | PULS | PULS | RELORA | PULS vers RELORA | Preuve, date, portée, canal, entreprise expéditrice | Si preuve contradictoire | Le retrait l'emporte sur un fait plus ancien | Pas copié dans QuickBooks | Confirmé logique |
| `tacit_consent_basis` | PULS | PULS | RELORA | PULS vers RELORA | Fondement documenté lorsqu'il est applicable | Si le fondement manque | Pas d'envoi | Pas copié dans QuickBooks | Confirmé comme exigence. Qualification juridique d'un cas : `TO_VERIFY` avec conseil |
| `opt_out` | PULS | PULS | RELORA | Immédiat vers RELORA | Appliqué avant toute reprise | Non pour enregistrer le refus | Un ancien événement ne le réactive pas | Par entreprise et par canal | Confirmé logique |
| `legal_restriction` | PULS | PULS | RELORA | PULS vers RELORA | Bloque l'envoi concerné | Si le dossier est incomplet | Le dossier seul est isolé | Par portée | Confirmé logique |
| `conversation` | PULS | PULS | RELORA | PULS vers RELORA | Fait commercial admissible | Non | — | Pas copié dans QuickBooks | Confirmé logique |
| `commercial_note` | RELORA ou PULS selon l'auteur | Système auteur | L'autre système commercial | Bidirectionnel RELORA et PULS | Minimum nécessaire | Non | Pas d'écrasement | Pas copié dans QuickBooks | Confirmé logique |
| `commercial_go` | RELORA | RELORA | PULS | RELORA vers PULS | Responsable ou règle déjà approuvée | Selon la règle | — | Ne remplace pas le GO légal | Confirmé logique |
| `message_status` | PULS | PULS | RELORA pour le résultat | PULS vers RELORA | Statut explicite du contrat 1.1.0 | Si `HUMAN_REVIEW_REQUIRED` | — | `SENT` n'est pas `DELIVERED` | Confirmé logique |

## 4. Matrice des flux autorisés

| Flux | Autorisé | Limite |
|---|---|---|
| QuickBooks vers RELORA | Oui, pour les faits clients, ventes, factures et paiements pertinents | Les données sensibles restent chez QuickBooks |
| RELORA vers PULS | Oui | Informations clients et commerciales autorisées, minimum nécessaire |
| PULS vers RELORA | Oui | Clients, prospects, conversations, demandes, suivis, résultats, consentements et refus |
| RELORA vers QuickBooks | Proposition seulement | Liste positive, approbation humaine explicite par modification, runtime fermé. Une approbation ne rend pas admissible un champ protégé |
| PULS vers QuickBooks | Non | Aucune connexion directe |
| QuickBooks vers PULS | Seulement après RELORA | Minimum de suivi commercial |
| WordPress et listes autorisées vers RELORA | Oui | Provenance conservée. Une liste n'est pas un consentement |
| RELORA ou PULS vers MESSOR | Non pour cette symbiose | MESSOR n'intervient pas |
| Symbiose vers NEXUS | Non | NEXUS garde l'identité humaine et l'accès général |
| Oliem vers Titan, ou l'inverse | Non | Aucune contamination |

La synchronisation d'une fiche ne demande pas de GO de campagne. Un envoi commercial demande le GO commercial RELORA et le GO légal PULS.

## 5. Contrat d'identité et de rapprochement

```text
TAGORA_CUSTOMER_ID=IDENTITE_COMMERCIALE_STABLE
TAGORA_CUSTOMER_ID_EQUALS_TAGORA_USER_ID=NO
TAGORA_CUSTOMER_ID_EQUALS_NUSER=NO
PROSPECT_ID=IDENTIFIANT_AVANT_OU_PENDANT_RATTACHEMENT
CONTACT_ID=PERSONNE
COMPANY_ID=ENTREPRISE_LEGALE
ORGANIZATION_ID=CLOISONNEMENT_COMMERCIAL
QB_CUSTOMER_LOCAL_ID=PAR_SOCIETE_QUICKBOOKS
QB_ID_FORMAT=TO_VERIFY
RELORA_RECORD_ID=FICHE_RELORA
PULS_RECORD_ID=FICHE_PULS
OLIEM_TITAN_CROSS_CONTAMINATION=FORBIDDEN
IMPLICIT_CROSS_ORGANIZATION_MERGE=FORBIDDEN
```

Une personne peut être liée à plusieurs entreprises. Chaque lien conserve ses données, ses consentements et son historique.

Conversion prospect vers client :

1. PULS transmet le prospect. RELORA cherche une identité existante dans la même organisation.
2. Correspondance certaine et sans risque : rattachement au `TAGORA_CUSTOMER_ID` existant. Aucune fusion destructive.
3. Aucune correspondance : RELORA attribue un `TAGORA_CUSTOMER_ID`. Le `PROSPECT_ID` reste l'historique.
4. Correspondance incertaine : tâche humaine. Pas de second envoi commercial risqué. Les autres clients continuent.
5. La conversion n'émet pas `qb_customer.created` et ne crée pas de fiche comptable.
6. Un même `TAGORA_CUSTOMER_ID` n'est pas attribué une seconde fois pour la même personne dans la même organisation.

Détection des doublons : noms, entreprises, courriels, téléphones, identifiants QuickBooks, identifiants TAGORA, relations d'organisation. Le nom seul, le téléphone seul et le courriel seul ne prouvent pas l'identité.

Rapprochement automatique : identité démontrée et opération sans risque, par lien seulement.

Incertitude : tâche RELORA avec les deux fiches, les données communes, les divergences, l'historique, les entreprises, les consentements connus et une recommandation. L'humain peut fusionner, garder distinct, rattacher, corriger ou reporter avec motif. Les fiches et les historiques sont conservés jusqu'à cette décision. Aucun doublon dangereux ne reste silencieux.

```text
DUPLICATE_HUMAN_REVIEW=PRESERVED
AUCUN_DOUBLON_DANGEREUX_SILENCIEUX=YES
OTHER_CUSTOMERS_CONTINUE=YES
DUPLICATE_SILENT_DESTRUCTIVE_MERGE=FORBIDDEN
```

## 6. Contrat d'idempotence et anti-boucles

```text
SYNC_LOOP_PREVENTION=MANDATORY
IDEMPOTENT_PROCESSING=MANDATORY
ECHO_REEMISSION=FORBIDDEN
SILENT_STALE_OVERWRITE=FORBIDDEN
```

1. La clé d'idempotence identifie l'opération, pas la tentative.
2. Le même message, le même client et la même écriture de champ ne sont pas produits deux fois par un rejeu.
3. Une réponse fournisseur incertaine ne provoque pas un second texto. Un courriel déjà accepté n'est pas renvoyé.
4. L'écho d'une écriture revient au plus comme accusé. Il ne redevient pas un nouveau fait métier.
5. Oliem et Titan ne se voient pas dans la même chaîne de causalité.
6. Le nombre maximal de sauts et de tentatives reste `TO_VERIFY`.

## 7. Contrat anti-blocage et récupération

```text
ANTI_BLOCKING_CONTRACT=DOCUMENTED
DURABLE_QUEUE=MANDATORY
AUTO_RECOVERY=MANDATORY
PROGRESSIVE_BACKOFF=MANDATORY
UNPROCESSED_EVENTS_RETAINED=YES
ZERO_SILENT_LOSS=YES
NUMERIC_RETRY_LIMIT=TO_VERIFY
```

Chaque événement entre dans une file durable. Une erreur individuelle est isolée avec sa charge. Les autres dossiers continuent. La réconciliation périodique compare les identités liées et les champs admissibles. Un écart reste visible.

| Interruption | Comportement |
|---|---|
| QuickBooks | Conserver les faits entrants et les retours admissibles non transmis. Reprendre à la disponibilité. Les relances PULS légalement autorisées continuent lorsque les données de contrôle légal sont fiables. Aucune écriture réelle |
| RELORA | Conserver les événements PULS. Tentatives idempotentes. Consentements inchangés. Pas d'envoi commercial si le contrôle légal n'est plus fiable |
| PULS | Conserver les faits RELORA à lui transmettre. Pas de double message à la reprise |
| Fournisseur de courriel | File durable. Reprise après vérification qu'il n'a pas déjà accepté le message. Alerte visible |
| Fournisseur de texto | Mêmes protections. Réponse incertaine : pas de second texto |

La résolution humaine s'ouvre lorsque la reprise automatique n'est plus sûre, lorsque la preuve légale manque, ou lorsque le conflit demeure.

## 8. Contrat de consentements et de désabonnements

```text
CONSENT_CONTRACT=DOCUMENTED
CONSENT_OWNER=PULS
CONSENT_PROPAGATION_TARGET=RELORA
STALE_SYNC_CAN_RESTORE_WITHDRAWN_AUTHORIZATION=NO
QUICKBOOKS_COPY_OF_CONSENT=FORBIDDEN
```

Chaque enregistrement porte le type (exprès, ou fondement de consentement tacite lorsqu'il est applicable), la date, la preuve, l'entreprise expéditrice, le canal et la portée. Le retrait, le désabonnement et la restriction sont des faits immédiats.

Une synchronisation plus ancienne ne réactive pas une opposition. Une donnée de consentement manquante ou contradictoire ouvre la vérification de ce dossier. Les autres contacts admissibles continuent. TOS ne certifie pas la qualification juridique d'un cas particulier.

## 9. Contrat d'envoi des courriels et des textos

```text
EMAIL_SMS_DELIVERY_CONTRACT=DOCUMENTED
SEND_OWNER=PULS
COMMERCIAL_GO_OWNER=RELORA
LEGAL_CHECK_AT_SEND_TIME=MANDATORY
SENT_MEANS_PROVIDER_ACCEPTED=YES
SENT_MEANS_DELIVERED=NO
GUARANTEED_DELIVERY_PROMISE=FORBIDDEN
```

Avant chaque envoi, PULS revérifie la conformité. Les files sont persistantes. La reprise est automatique. Les statuts fournisseur inconnus deviennent `DELIVERY_UNKNOWN` et sont réconciliés. Un destinataire bloqué n'arrête pas le reste d'une campagne admissible. Une campagne entièrement arrêtée est une alerte immédiate. Le responsable est alerté. Martin est alerté immédiatement pour un blocage critique. Les seuils de 15 et 60 minutes restent proposés, non figés.

Statuts de message : `SENT`, `DELIVERED`, `PENDING`, `RETRY_SCHEDULED`, `DELIVERY_UNKNOWN`, `FAILED`, `LEGALLY_SUPPRESSED`, `HUMAN_REVIEW_REQUIRED`.

## 10. Matrice des erreurs et des alertes

```text
ALERTING_AND_ESCALATION=DOCUMENTED
CRITICAL_ALERT_MARTIN=IMMEDIATE
OPERATIONAL_THRESHOLDS=PROPOSED_NOT_FROZEN
REPEATED_IDENTICAL_ALERTS=GROUPED
NOTIFICATION_CHANNEL_INDEPENDENT_OF_COMMERCIAL_PROVIDER=REQUIRED
NOTIFICATION_CHANNEL_PROVIDER=TO_VERIFY
```

| Situation | Événement | Destination | Suite |
|---|---|---|---|
| Campagne entière arrêtée, panne générale, risque de perte, doublons anormaux, aucun envoi admissible | `incident.escalated` | Martin, immédiat | Les dossiers non touchés continuent lorsque c'est sûr |
| Incident non résolu | `incident.escalated` | Responsable, puis Martin selon les seuils proposés de 15 puis 60 minutes | Seuils non figés |
| Doublon incertain | `duplicate.suspected` puis `human_review.requested` | Tâche RELORA et responsable désigné | Pas de double sollicitation risquée |
| Writeback hors liste, non vérifié, ou sans approbation explicite de cette modification | `qb_writeback.refused` | RELORA, visible | Aucune écriture |
| Conflit de champ | `conflict.detected` | RELORA | Champ isolé |
| Consentement contradictoire | `human_review.requested` | PULS et RELORA | Ce dossier attend |
| Retour à la normale | `incident.resolved` et `sync.auto_recovered` lorsque la reprise a réussi | Responsable, confirmation | — |

Les alertes semblables sont regroupées. Le canal d'alerte ne dépend pas du fournisseur de courriel ou de texto en panne. Le fournisseur de ce canal n'est pas choisi.

## 11. Dépendances encore à vérifier

```text
UNVERIFIED_TECHNICAL_FIELDS=LISTED
EXACT_REMAINING_BLOCKERS=LISTED
TECHNICAL_FREEZE_COMPLETE=NO
VERIFICATION_RECORD=docs/governance/TAGORA-CUSTOMER-SYMBIOSIS-QB-NATIVE-FIELD-VERIFICATION-V1.md
```

1. Noms natifs QuickBooks : candidats publics relevés, correspondance société en HOLD. Voir le relevé de vérification.
2. Format de l'identifiant client QuickBooks : nom publié `Id` avec `SyncToken`. Format lexical et valeur réelle en HOLD.
3. Identifiants de société ou de realm QuickBooks pour Oliem et pour Titan : HOLD. Aucun identifiant observé. Titan reste peut-être une division, selon ADR-0012.
4. Correspondance entre `ORGANIZATION_ID` commercial et l'organisation NEXUS : HOLD. Les compagnies fictives NEXUS ne sont pas une correspondance.
5. Technologie de file. Elle n'est pas choisie.
6. Limites chiffrées de reprise, de sauts et d'expiration.
7. Approbation ou remplacement des seuils proposés de 15 et 60 minutes.
8. Fournisseur de courriel, fournisseur de texto, et canal d'alerte indépendant.
9. Schéma de preuve du consentement tacite pour un cas réel. TOS ne le certifie pas.
10. QuickBooks n'est pas connecté. RELORA reste sous hold et n'est pas ouvert. Le runtime de writeback n'est pas autorisé.

## 12. Plan de validation Staging avant implémentation

Ce plan est documenté. Son exécution n'est pas autorisée. Aucun environnement Staging n'est modifié par ce gel.

Ordre prévu, chaque étape sous un GO distinct encore non donné :

1. Le relevé de vérification a consulté le schéma public. Les realms Oliem et Titan et les correspondances natives restent en HOLD. Aucune société n'a été lue.
2. Rejouer le catalogue V1 sur des jeux fictifs, sans client réel.
3. Prouver l'idempotence et le rejet d'un écho.
4. Prouver qu'un refus n'est pas réactivé par un événement plus ancien.
5. Prouver qu'un doublon incertain n'arrête pas les autres fiches et ne produit pas une seconde sollicitation.
6. Prouver qu'une panne QuickBooks simulée laisse une relance déjà légalement autorisée continuer, et retient un envoi dont le contrôle légal n'est plus fiable.
7. Prouver qu'un `writeback_requested` reste une proposition : il n'écrit rien sans runtime autorisé, et il n'écrit rien sans approbation humaine explicite de cette modification. Une donnée d'agent IA non validée est refusée.
8. Seulement ensuite, un GO d'implémentation pourrait être demandé. Il n'existe pas et il n'est pas autorisé.

```text
STAGING_VALIDATION_EXECUTION=NOT_AUTHORIZED
STAGING_CHANGED=NO
IMPLEMENTATION_AUTHORIZED=NO
```
