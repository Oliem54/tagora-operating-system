# Contrat fonctionnel RELORA–PULS — Coordination des leads

```text
DOCUMENT_STATUS=DRAFT_FOR_MARTIN_REVIEW
SCOPE=TOS_FUNCTIONAL_ARCHITECTURE_ONLY
IMPLEMENTATION_AUTHORIZED=NO
OUTBOUND_COMMUNICATION_AUTHORIZED=NO
DATA_IMPORT_AUTHORIZED=NO
DATABASE_CHANGE_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
```

## 1. Objectif

Définir comment TAGORA RELORA et TAGORA PULS se partagent les leads afin que
les relances virtuelles et le suivi humain travaillent sur le même dossier,
sans créer de doublons, de communications contradictoires ni de fuite entre
entreprises.

Ce document définit la cible fonctionnelle. Il ne configure ni n'active
l'échange de données ou l'envoi de communications.

## 2. Principe central

Tout lead admissible créé ou reçu dans l'un des deux modules doit être
automatiquement créé ou relié dans l'autre module. RELORA est la référence du
dossier CRM. PULS est la référence de la qualification IA et du suivi virtuel.
Les deux modules peuvent travailler en parallèle sur le même lead, selon leurs
responsabilités respectives et les règles de coordination ci-dessous.

```text
RELORA_LEAD_RECORD=CRM_SOURCE_OF_TRUTH
PULS_VIRTUAL_FOLLOWUP_STATE=PULS_SOURCE_OF_TRUTH
BIDIRECTIONAL_LEAD_SYNC=REQUIRED
SHARED_LEAD_ID=REQUIRED
DIRECT_CROSS_MODULE_DATABASE_WRITES=PROHIBITED
```

## 3. Responsabilités

### RELORA

RELORA est responsable du dossier CRM de référence, notamment :

- l'identité du lead comme dossier commercial, son entreprise et sa marque;
- l'étape commerciale et l'historique CRM;
- le responsable humain principal et, s'il y a lieu, le deuxième humain en
  soutien;
- la prochaine action humaine;
- les préférences, permissions de contact et demandes d'arrêt enregistrées
  dans le CRM;
- la visibilité des activités de PULS dans la chronologie du lead.

### PULS

PULS est responsable de ses activités de suivi virtuel, notamment :

- la qualification IA et ses recommandations;
- l'état de ses séquences et tentatives de relance;
- les réponses ou résultats observés par PULS;
- la demande de prise en charge humaine lorsque la conversation ou une règle
  le justifie;
- le blocage immédiat de toute nouvelle relance lorsqu'un lead demande
  l'arrêt, puis la transmission durable de cette demande à RELORA.

PULS ne modifie pas de lui-même le propriétaire humain, l'étape commerciale,
les préférences de contact ou les droits CRM faisant autorité dans RELORA.
PULS peut proposer un changement; RELORA l'enregistre selon les droits et
règles CRM. Une demande d'arrêt observée dans PULS ne reste pas une simple
proposition : le blocage local est immédiat, et RELORA doit persister la
suppression ou la préférence canonique selon la section 6. PULS n'écrit pas
cette préférence directement.

## 4. Leads et sources à synchroniser

Le contrat cible couvre les leads provenant de :

- la saisie humaine dans RELORA ou PULS;
- QuickBooks, après classification selon des critères à confirmer;
- les formulaires Web de Titan et de X-Plod;
- toute autre entrée directement reçue par RELORA ou PULS, une fois sa source
  autorisée et identifiée.

Pour chaque lead admissible :

1. le module qui reçoit le lead crée ou retrouve son dossier de référence;
2. le lead est automatiquement créé ou relié dans l'autre module;
3. les deux enregistrements utilisent le même identifiant de lead RELORA et
   conservent la provenance, l'entreprise et la marque;
4. PULS peut qualifier le lead et préparer son suivi virtuel selon les règles
   de contact approuvées;
5. RELORA affiche les résultats de PULS dans la chronologie du dossier.

Un lead reçu directement par PULS doit donc aussi obtenir un dossier RELORA
créé ou relié avant que le suivi humain puisse être coordonné. Un lead créé
dans RELORA doit être transmis à PULS sans saisie manuelle répétée.

## 5. Attribution humaine dans RELORA

À l'entrée d'un lead admissible dans RELORA, le système attribue :

- un responsable humain principal;
- facultativement, un deuxième humain en soutien lorsque les règles
  d'attribution le prévoient.

Le responsable principal demeure clairement identifié même quand un deuxième
humain participe. Les deux affectations, leur rôle et leurs changements sont
inscrits dans l'historique RELORA et communiqués à PULS.

Les critères d'affectation restent à définir, par exemple l'entreprise, la
marque, le produit, le territoire, l'équipe, les compétences ou la charge de
travail. Si aucun responsable admissible ne peut être choisi, RELORA place le
lead dans une file d'attribution visible et signale qu'il attend un humain.
PULS ne doit pas interpréter une absence de responsable comme une permission
d'envoyer une relance.

## 6. Coordination des relances

PULS peut effectuer des relances virtuelles uniquement si les règles de
contact applicables sont établies et satisfaites. La synchronisation
automatique des dossiers n'est pas, à elle seule, une autorisation d'envoyer
un message.

Avant une relance, PULS doit utiliser l'état le plus récent connu du lead,
notamment l'entreprise, l'admissibilité, les préférences, les restrictions de
contact, la prise en charge humaine et les arrêts demandés. Si cet état est
absent, contradictoire ou trop ancien pour garantir une action sûre, PULS
suspend la relance et demande une vérification.

Une réponse du lead, un changement de préférence ou une prise en charge
humaine doit entraîner l'arrêt ou la révision de la séquence PULS concernée.
RELORA inscrit l'activité et sa prochaine action. Les tâches humaines et
virtuelles doivent être visibles et coordonnées afin d'éviter les contacts
contradictoires. Une politique pourra autoriser certains suivis parallèles,
mais elle devra définir les canaux et les plages de contact compatibles.
Une demande d'arrêt n'est pas couverte par cette seule inscription : elle
suit le flux ci-dessous.

### Demande d'arrêt reçue dans PULS

Ce flux est une proposition de contrat. Il n'est pas implémenté.

Lorsqu'un lead demande l'arrêt dans PULS, PULS bloque immédiatement toute
nouvelle relance. Ce blocage est local et précède la réponse de RELORA.

PULS transmet ensuite à RELORA un événement durable indiquant la demande,
son heure, sa source et sa portée connue (canal, entreprise ou marque).
L'événement proposé `puls.lead.reply_received.v1` peut inscrire une réponse,
mais il ne tient pas lieu de cette demande d'arrêt.

RELORA enregistre la suppression ou la préférence canonique, puis transmet
la politique de contact à jour à PULS.

Si la transmission, la portée ou la confirmation est incertaine, PULS reste
bloqué. Aucun humain et aucune séquence future ne peuvent reprendre le
contact avant la réconciliation de la politique. RELORA ne doit pas non plus
traiter une demande absente, partielle ou non confirmée comme une
autorisation de contact.

Une demande d'arrêt ne peut être annulée par l'IA ou par une simple
réattribution humaine. Toute reprise exige une nouvelle autorisation
conforme à une règle encore à définir (section 10).

Les noms d'événements ci-dessous sont des propositions de contrat, pas des
événements implémentés :

| Sens | Événement proposé | Effet fonctionnel |
|---|---|---|
| RELORA → PULS | `relora.lead.created_or_linked.v1` | Créer ou relier le contexte de suivi PULS |
| PULS → RELORA | `puls.lead.captured.v1` | Créer ou relier le dossier CRM RELORA |
| RELORA → PULS | `relora.lead.assignment_changed.v1` | Transmettre le responsable principal et le soutien |
| PULS → RELORA | `puls.lead.stop_requested.v1` | Après le blocage immédiat, transmettre la demande d'arrêt durable : heure, source et portée connue (canal, entreprise ou marque) |
| RELORA → PULS | `relora.lead.contact_policy_changed.v1` | Après enregistrement de la suppression ou de la préférence canonique, transmettre la politique de contact à jour, y compris un arrêt |
| RELORA → PULS | `relora.lead.human_takeover.v1` | Suspendre ou réviser les relances virtuelles, sans annuler une demande d'arrêt |
| PULS → RELORA | `puls.lead.qualification_completed.v1` | Inscrire le résultat de qualification dans l'historique |
| PULS → RELORA | `puls.followup.outcome_recorded.v1` | Inscrire le résultat d'une tentative ou d'une séquence |
| PULS → RELORA | `puls.lead.reply_received.v1` | Inscrire la réponse ou son résumé autorisé et arrêter ou réviser la séquence concernée; ne persiste pas à lui seul une demande d'arrêt |
| PULS → RELORA | `puls.lead.human_followup_requested.v1` | Créer ou mettre à jour une tâche de suivi humain, sans lever une demande d'arrêt |

Pour une demande d'arrêt, l'aller proposé est `puls.lead.stop_requested.v1`
et le retour proposé est `relora.lead.contact_policy_changed.v1`. Le retour
confirme la politique réconciliée. Il n'autorise une reprise que si cette
politique et la règle encore à définir en section 10 le permettent.

Le transport des événements (webhook, bus ou autre) n'est pas choisi par ce
contrat et nécessite une décision distincte.

## 7. États séparés

RELORA et PULS ne doivent pas essayer de fusionner leurs états métier dans un
champ partagé.

| Domaine | Propriétaire | Exemples d'état |
|---|---|---|
| Cycle CRM et prochaine action | RELORA | nouveau, actif, converti, fermé, en attente humaine, ne pas contacter |
| Qualification et séquence virtuelle | PULS | à qualifier, admissible, planifiée, en cours, réponse reçue, suspendue, bloquée en attente de réconciliation d'arrêt, terminée, erreur |

RELORA garde la décision finale pour l'étape CRM et le responsable humain.
PULS garde l'état détaillé de ses séquences et communique les changements
pertinents à RELORA.

## 8. Déduplication et fiabilité

- Chaque lead RELORA dispose d'un identifiant stable utilisé par les deux
  modules.
- Les identifiants de dossiers sources (par exemple QuickBooks ou formulaire
  Web) sont conservés avec leur système source et leur entreprise.
- Un identifiant source déjà traité dans la même entreprise ne doit pas
  créer un second lead.
- Le courriel ou le téléphone peut signaler une correspondance potentielle,
  mais ne suffit pas à fusionner automatiquement deux dossiers.
- Une correspondance ambiguë est envoyée à une vérification humaine. Aucun
  rapprochement automatique ne doit traverser les périmètres d'entreprise.
- Les événements et les actions de relance doivent être idempotents : un
  rejeu ne crée ni doublon CRM ni deuxième envoi.
- Le rejeu d'une demande d'arrêt ne lève pas le blocage et ne crée pas une
  seconde préférence contradictoire. Tant que RELORA n'a pas confirmé sa
  persistance, aucune relance humaine ou virtuelle ne reprend.
- Les reprises après panne doivent être traçables. En cas d'échec durable,
  l'événement va dans une file d'erreur visible; aucun envoi ne doit être
  répété sans confirmer son résultat antérieur.

## 9. Entreprises, permissions et données

L'échange des leads ne rend pas les données accessibles à tous les employés.
Chaque dossier conserve son entreprise, sa marque, sa provenance et ses
droits d'accès. Les utilisateurs de RELORA et PULS ne voient que les dossiers
autorisés pour leur périmètre.

Les messages intermodules transmettent les références et données minimales
nécessaires. Ils ne transportent aucun secret, jeton d'accès ou donnée
personnelle sans nécessité et autorisation. Les accès de service, la durée de
rétention et la suppression ou correction synchronisée des données restent à
définir avant l'implémentation.

Le partage d'un lead commercial et sa prise en charge par un humain sont des
opérations métier. Ils ne constituent pas le `TAGORA_HANDOFF_V1` de Nexus et
ne créent pas d'identité, de rôle ou d'accès utilisateur.

## 10. Décisions restant à confirmer

Avant de rendre ce contrat exécutable, Martin ou les responsables désignés
doivent confirmer :

1. les types d'enregistrements QuickBooks à classer comme prospects ou leads,
   et le traitement des clients existants;
2. les canaux de relance permis et la source de vérité du consentement par
   canal;
3. les horaires, la cadence, les plafonds de relance et les règles d'arrêt;
4. les situations où l'envoi PULS est automatique et celles qui exigent une
   approbation humaine;
5. les critères d'attribution du responsable principal et du deuxième humain;
6. les règles de déduplication et le traitement des dossiers ambigus;
7. les périmètres d'accès par entreprise et par marque;
8. la technologie d'échange, sa sécurité, sa rétention, ses reprises et sa
   surveillance;
9. les délais attendus de synchronisation et la personne responsable des
   files d'erreurs;
10. la règle qui pourra autoriser une reprise après une demande d'arrêt.
    Cette règle n'est pas définie. Une demande d'arrêt ne peut être annulée
    par l'IA ou par une simple réattribution humaine. Toute reprise exigera
    une nouvelle autorisation conforme à cette règle, encore à confirmer.

## 11. Portée et critères fonctionnels futurs

L'implémentation ultérieure devra démontrer, avant toute activation réelle,
que :

- un lead admissible créé dans chacun des deux modules est relié à l'autre
  sans ressaisie;
- les sources QuickBooks, saisie humaine et formulaires Titan/X-Plod restent
  identifiables;
- l'attribution principale et le soutien éventuel sont visibles dans RELORA
  et transmis à PULS;
- les activités virtuelles de PULS apparaissent dans l'historique RELORA;
- une réponse ou une prise en charge humaine suspend ou révise les relances
  concernées, sans annuler une demande d'arrêt;
- lorsqu'un lead demande l'arrêt dans PULS, PULS bloque immédiatement toute
  nouvelle relance;
- PULS transmet à RELORA un événement durable indiquant la demande, son
  heure, sa source et sa portée connue (canal, entreprise ou marque);
- RELORA enregistre la suppression ou la préférence canonique, puis transmet
  la politique à jour à PULS;
- si la transmission, la portée ou la confirmation est incertaine, PULS
  reste bloqué, et ni un humain ni une séquence future ne reprend le contact
  avant la réconciliation de la politique;
- une demande d'arrêt n'est annulée ni par l'IA ni par une simple
  réattribution humaine; toute reprise exige une nouvelle autorisation
  conforme à la règle encore à définir en section 10;
- les doublons, les événements rejoués et les défaillances ne provoquent pas
  de double envoi;
- les entreprises et droits d'accès restent isolés;
- aucun message réel ne part avant autorisation distincte et vérification
  des règles de consentement et de contact.

## 12. Statut

Ce document est un contrat fonctionnel proposé pour revue. Les décisions de
la section 10 ne sont pas encore prises, y compris la règle de reprise après
une demande d'arrêt. Le flux PULS → RELORA → PULS décrit à la section 6 est
une proposition de contrat, pas un comportement implémenté. Ce document
n'autorise ni intégration réelle, ni import QuickBooks, ni accès à des données
clients, ni envoi, ni migration, ni déploiement.
