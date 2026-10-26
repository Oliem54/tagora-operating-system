# Contrat fonctionnel RELORA–PULS — Coordination des leads

```text
DOCUMENT_STATUS=DRAFT_FOR_MARTIN_REVIEW
LOT_1_STOP_DECISIONS=CONFIRMED_BY_MARTIN_2026-10-25
CONTRACT_REMAINDER=PROPOSAL
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

Le premier lot porte uniquement sur la coordination d'un arrêt. Martin a
confirmé ses règles le 2026-10-25. Elles sont inscrites dans ce document.
Le reste du contrat reste une proposition. L'échange automatique
bidirectionnel de tous les leads est l'objectif du lot suivant, pas de ce
premier lot.

Ce document définit la cible fonctionnelle. Il ne configure ni n'active
l'échange de données ou l'envoi de communications. Le document entier n'est
pas adopté.

## 2. Principe central

RELORA est la référence du dossier CRM et de la préférence canonique
« ne pas contacter ». PULS est la référence de la qualification IA et du
suivi virtuel. PULS ne peut pas lever cette préférence. Les deux modules ne
s'écrivent pas directement dans la base de l'autre.

Pour le lot 1, seul l'arrêt est couvert par des décisions confirmées. Le
rattachement d'un arrêt exige un identifiant RELORA partagé déjà disponible.
L'échange automatique bidirectionnel de tous les leads admissibles reste
l'objectif du lot suivant. Il n'est pas une règle de ce premier lot.

```text
RELORA_LEAD_RECORD=CRM_SOURCE_OF_TRUTH
RELORA_CANONICAL_PREFERENCE=DO_NOT_CONTACT
PULS_VIRTUAL_FOLLOWUP_STATE=PULS_SOURCE_OF_TRUTH
PULS_MAY_LIFT_DO_NOT_CONTACT=NO
BIDIRECTIONAL_LEAD_SYNC=NEXT_LOT_OBJECTIVE
SHARED_LEAD_ID=REQUIRED_FOR_ATTACHMENT
LOT_1_ATTACHMENT=EXISTING_SHARED_RELORA_ID_ONLY
EMAIL_OR_PHONE_AUTOMATIC_MATCH=PROHIBITED
LOT_1_CREATE_LEAD_IF_RELORA_RECORD_MISSING=PROHIBITED
DIRECT_CROSS_MODULE_DATABASE_WRITES=PROHIBITED
LOT_1_CONTACT_RESUMPTION=PROHIBITED
```

## 3. Responsabilités

### RELORA

RELORA est responsable du dossier CRM de référence, notamment :

- l'identité du lead comme dossier commercial, son entreprise et sa marque
  lorsqu'elle est connue;
- l'étape commerciale et l'historique CRM;
- le responsable humain principal et, s'il y a lieu, le deuxième humain en
  soutien;
- la prochaine action humaine;
- la préférence canonique « ne pas contacter », son historique, et les
  demandes d'arrêt enregistrées dans le CRM;
- la visibilité des activités de PULS dans la chronologie du lead.

Un humain peut enregistrer « ne pas contacter » dans RELORA. Cette
préférence fait alors autorité pour l'entreprise et le canal connus. PULS
ne peut pas la lever.

### PULS

PULS est responsable de ses activités de suivi virtuel, notamment :

- la qualification IA et ses recommandations;
- l'état de ses séquences et tentatives de relance;
- les réponses ou résultats observés par PULS;
- la demande de prise en charge humaine lorsque la conversation ou une règle
  le justifie;
- le blocage immédiat de toute nouvelle relance lorsqu'un arrêt du lot 1 est
  déclenché, puis la transmission durable de cette demande à RELORA.

PULS ne modifie pas de lui-même le propriétaire humain, l'étape commerciale,
les préférences de contact ou les droits CRM faisant autorité dans RELORA.
PULS peut proposer un autre changement; RELORA l'enregistre selon les droits
et règles CRM. PULS n'écrit pas la préférence canonique directement, et il
ne peut pas la lever.

Une réponse ordinaire ou une prise en charge humaine ne déclenche pas
l'arrêt. Le blocage immédiat vaut pour les seuls déclencheurs confirmés à
la section 6.

## 4. Leads et sources à synchroniser

L'échange automatique bidirectionnel de tous les leads est l'objectif du
lot suivant. Il n'est pas confirmé pour le lot 1, et ce document ne l'adopte
pas.

Le contrat cible de ce lot suivant couvre les leads provenant de :

- la saisie humaine dans RELORA ou PULS;
- QuickBooks, après classification selon des critères à confirmer;
- les formulaires Web de Titan et de X-Plod;
- toute autre entrée directement reçue par RELORA ou PULS, une fois sa source
  autorisée et identifiée.

Pour ce lot suivant, encore proposé, chaque lead admissible serait :

1. créé ou retrouvé dans le module qui le reçoit;
2. automatiquement créé ou relié dans l'autre module;
3. porté par le même identifiant de lead RELORA, avec sa provenance, son
   entreprise et sa marque si elle est connue;
4. qualifiable par PULS selon les règles de contact qui resteront à
   confirmer;
5. visible dans la chronologie RELORA pour les résultats de PULS.

Ces cinq points ne s'appliquent pas au lot 1. En particulier, un arrêt sans
dossier RELORA correspondant ne crée pas de lead.

## 5. Attribution humaine dans RELORA

À l'entrée d'un lead admissible dans RELORA, le système attribue :

- un responsable humain principal;
- facultativement, un deuxième humain en soutien lorsque les règles
  d'attribution le prévoient.

Le responsable principal demeure clairement identifié même quand un deuxième
humain participe. Les deux affectations, leur rôle et leurs changements sont
inscrits dans l'historique RELORA et communiqués à PULS. Cette attribution
reste une proposition : ses critères ne sont pas confirmés.

Les critères d'affectation restent à définir, par exemple l'entreprise, la
marque, le produit, le territoire, l'équipe, les compétences ou la charge de
travail. Si aucun responsable admissible ne peut être choisi, RELORA place le
lead dans une file d'attribution visible et signale qu'il attend un humain.
PULS ne doit pas interpréter une absence de responsable comme une permission
d'envoyer une relance.

Une réattribution humaine n'est pas un déclencheur d'arrêt. Elle ne lève pas
non plus une préférence « ne pas contacter ».

## 6. Coordination des relances

PULS peut effectuer des relances virtuelles uniquement si les règles de
contact applicables sont établies et satisfaites. La synchronisation
automatique des dossiers n'est pas, à elle seule, une autorisation d'envoyer
un message. Aucune reprise du contact n'est permise dans le premier lot, et
ce document n'autorise aucun envoi.

Avant une relance, PULS doit utiliser l'état le plus récent connu du lead,
notamment l'entreprise, l'admissibilité, les préférences, les restrictions de
contact, la prise en charge humaine et les arrêts demandés. Si cet état est
absent, contradictoire ou trop ancien pour garantir une action sûre, PULS
suspend la relance et demande une vérification.

Une réponse ordinaire ou une prise en charge humaine ne suffit pas à
déclencher l'arrêt. RELORA peut inscrire cette activité et sa prochaine
action. Cela ne crée pas la préférence canonique « ne pas contacter » et ne
la lève pas. Les tâches humaines et virtuelles doivent rester visibles afin
d'éviter les contacts contradictoires. Les canaux et les plages de contact
compatibles restent à définir hors de ce premier lot.

### Demande d'arrêt — règles confirmées du lot 1

Martin a confirmé ces règles le 2026-10-25. Les noms d'événements utilisés
pour les décrire restent des propositions de contrat. Aucun n'est
implémenté.

L'arrêt est déclenché uniquement par :

- une demande explicite;
- une désinscription;
- un « ne pas contacter » enregistré par un humain.

Lorsqu'un de ces déclencheurs est observé dans PULS, PULS bloque
immédiatement toute nouvelle relance sur la portée connue. Ce blocage est
local et précède la réponse de RELORA.

PULS transmet ensuite à RELORA un événement durable. Il indique la demande,
son heure, sa source et sa portée. L'entreprise est obligatoire. Le canal
connu fait partie de la portée. La marque est conservée si elle est connue,
sans être inventée; elle est absente si elle est inconnue. L'événement
proposé `puls.lead.reply_received.v1` peut inscrire une réponse, mais il ne
tient pas lieu de cette demande d'arrêt.

L'arrêt est limité à l'entreprise et au canal connus. Il ne s'étend pas à
une autre entreprise. Il ne s'étend pas non plus à un autre canal, sauf
élargissement selon la règle ci-dessous.

Le rattachement exige un identifiant RELORA partagé déjà disponible. Il n'y
a pas de rapprochement automatique par courriel ou par téléphone. Sans
dossier RELORA correspondant, l'événement ne crée pas de lead : il est placé
dans une file visible, et le blocage PULS est maintenu.

Lorsque le dossier existe, RELORA conserve la préférence canonique
« ne pas contacter » et l'historique, pour l'entreprise et le canal connus.
RELORA transmet ensuite la politique à jour à PULS. PULS ne peut pas lever
cette préférence.

Si la transmission, la portée ou la confirmation est incertaine, PULS reste
bloqué. Aucun humain et aucune séquence future ne peuvent reprendre le
contact. RELORA ne doit pas traiter une demande absente, partielle ou non
confirmée comme une autorisation de contact. Une entreprise manquante ou un
canal inconnu rendent la portée incertaine : ni l'un ni l'autre n'est
inventé.

Un événement rejoué ne crée pas une seconde préférence. Une nouvelle demande
explicite sur un autre canal peut élargir le blocage dans la même entreprise.
Elle ne le réduit jamais et ne le propage pas à une autre entreprise. Une
désinscription ou un « ne pas contacter » humain reste un déclencheur pour
l'entreprise et le canal connus; cela n'étend pas l'arrêt au-delà de cette
portée et ne le réduit pas.

Aucune reprise du contact n'est permise dans le premier lot. Ni l'IA, ni
PULS, ni une réattribution humaine ne peuvent lever l'arrêt. Aucun délai de
reprise n'est défini.

La file visible, y compris la file d'erreurs, relève d'un rôle de révision
RELORA encore à confirmer.

Les noms d'événements ci-dessous sont des propositions de contrat, pas des
événements implémentés :

| Lot | Sens | Événement proposé | Effet fonctionnel |
|---|---|---|---|
| 1 | PULS → RELORA | `puls.lead.stop_requested.v1` | Après le blocage immédiat, transmettre la demande d'arrêt durable : heure, source, entreprise obligatoire et canal connu. Conserver la marque seulement si elle est connue. Ne pas créer de lead si l'identifiant RELORA partagé manque |
| 1 | RELORA → PULS | `relora.lead.contact_policy_changed.v1` | Conserver la préférence canonique « ne pas contacter » et l'historique, puis transmettre la politique à jour. Ne lève pas l'arrêt et n'autorise aucune reprise dans le lot 1 |
| suivant | RELORA → PULS | `relora.lead.created_or_linked.v1` | Objectif du lot suivant : créer ou relier le contexte de suivi PULS |
| suivant | PULS → RELORA | `puls.lead.captured.v1` | Objectif du lot suivant : créer ou relier le dossier CRM RELORA. Hors lot 1 |
| suivant | RELORA → PULS | `relora.lead.assignment_changed.v1` | Transmettre le responsable principal et le soutien, sans déclencher ni lever un arrêt |
| suivant | RELORA → PULS | `relora.lead.human_takeover.v1` | Signaler une prise en charge humaine. Elle ne déclenche pas l'arrêt et ne le lève pas |
| suivant | PULS → RELORA | `puls.lead.qualification_completed.v1` | Inscrire le résultat de qualification dans l'historique |
| suivant | PULS → RELORA | `puls.followup.outcome_recorded.v1` | Inscrire le résultat d'une tentative ou d'une séquence |
| suivant | PULS → RELORA | `puls.lead.reply_received.v1` | Inscrire une réponse ordinaire ou son résumé autorisé. Ne déclenche pas l'arrêt et ne persiste pas la préférence « ne pas contacter » |
| suivant | PULS → RELORA | `puls.lead.human_followup_requested.v1` | Créer ou mettre à jour une tâche de suivi humain, sans déclencher ni lever un arrêt |

Pour une demande d'arrêt du lot 1, l'aller proposé est
`puls.lead.stop_requested.v1` et le retour proposé est
`relora.lead.contact_policy_changed.v1`. Le retour confirme que RELORA a
conservé la préférence canonique. Il n'autorise aucune reprise du contact
dans ce premier lot. L'échange automatique de tous les leads, porté par les
événements du lot suivant, n'est pas confirmé ici.

Le transport des événements (webhook, bus ou autre) n'est pas choisi par ce
contrat et nécessite une décision distincte.

## 7. États séparés

RELORA et PULS ne doivent pas essayer de fusionner leurs états métier dans un
champ partagé.

| Domaine | Propriétaire | Exemples d'état |
|---|---|---|
| Cycle CRM et préférence de contact | RELORA | nouveau, actif, converti, fermé, en attente humaine, « ne pas contacter » pour l'entreprise et le canal connus |
| Qualification et séquence virtuelle | PULS | à qualifier, admissible, planifiée, en cours, réponse reçue, suspendue, bloquée par un arrêt du lot 1, terminée, erreur |

RELORA garde la préférence canonique « ne pas contacter » et son historique.
PULS garde l'état détaillé de ses séquences, bloque immédiatement les
déclencheurs confirmés, et ne peut pas lever cette préférence. La décision
finale sur l'étape CRM et le responsable humain reste une responsabilité
RELORA; les critères d'attribution demeurent ouverts.

## 8. Déduplication et fiabilité

Pour le lot 1 :

- le rattachement exige un identifiant RELORA partagé déjà disponible;
- le courriel ou le téléphone ne sert pas de rapprochement automatique;
- sans dossier RELORA correspondant, aucun lead n'est créé;
- un événement rejoué ne crée pas une seconde préférence et ne lève pas le
  blocage;
- une nouvelle demande explicite sur un autre canal peut élargir le blocage
  dans la même entreprise;
- cet élargissement ne réduit jamais le blocage et ne le propage pas à une
  autre entreprise;
- tant que la persistance RELORA n'est pas confirmée, et aussi après cette
  confirmation, aucune reprise du contact n'est permise dans le lot 1;
- en cas d'échec, de portée incertaine ou de dossier absent, l'événement va
  dans une file visible. Cette file relève d'un rôle de révision RELORA à
  confirmer. Aucun délai de reprise n'est défini.

Pour le lot suivant, encore proposé :

- chaque lead RELORA disposerait d'un identifiant stable utilisé par les deux
  modules;
- les identifiants de dossiers sources (par exemple QuickBooks ou formulaire
  Web) seraient conservés avec leur système source et leur entreprise;
- un identifiant source déjà traité dans la même entreprise ne devrait pas
  créer un second lead;
- aucun rapprochement automatique ne devrait traverser les périmètres
  d'entreprise;
- les événements et les actions de relance devraient être idempotents : un
  rejeu ne crée ni doublon CRM ni deuxième envoi.

## 9. Entreprises, permissions et données

L'échange des leads ne rend pas les données accessibles à tous les employés.
Chaque dossier conserve son entreprise, sa marque si elle est connue, sa
provenance et ses droits d'accès. Les utilisateurs de RELORA et PULS ne voient
que les dossiers autorisés pour leur périmètre.

L'entreprise est obligatoire pour chaque événement d'arrêt. La marque est
facultative lorsqu'elle est inconnue. Un arrêt confirmé ne sort pas de
l'entreprise et du canal connus.

Les messages intermodules transmettent les références et données minimales
nécessaires. Ils ne transportent aucun secret, jeton d'accès ou donnée
personnelle sans nécessité et autorisation. Les accès de service, la durée de
rétention et la suppression ou correction synchronisée des données restent à
définir avant l'implémentation.

Le partage d'un lead commercial et sa prise en charge par un humain sont des
opérations métier. Ils ne constituent pas le `TAGORA_HANDOFF_V1` de Nexus et
ne créent pas d'identité, de rôle ou d'accès utilisateur.

## 10. Décisions

### Confirmées pour le lot 1

Martin a confirmé les règles suivantes le 2026-10-25. Elles ne rendent pas
le reste du contrat exécutable et n'autorisent ni implémentation, ni envoi,
ni import, ni migration, ni déploiement.

1. L'arrêt est déclenché par une demande explicite, une désinscription ou un
   « ne pas contacter » enregistré par un humain. Une réponse ordinaire ou
   une prise en charge ne suffit pas.
2. L'arrêt est limité à l'entreprise et au canal connus. La marque est
   conservée si elle est connue, sans être inventée.
3. RELORA conserve la préférence canonique « ne pas contacter » et
   l'historique. PULS ne peut pas lever cette préférence.
4. Sans dossier RELORA correspondant, aucun lead n'est créé. L'événement est
   placé dans une file visible et le blocage PULS est maintenu.
5. Un événement rejoué ne crée pas une seconde préférence. Une nouvelle
   demande explicite sur un autre canal peut élargir le blocage dans la même
   entreprise. Elle ne le réduit jamais et ne le propage pas à une autre
   entreprise.
6. Aucune reprise du contact n'est permise dans le premier lot. Aucun délai
   de reprise n'est défini.
7. L'entreprise est obligatoire pour chaque événement. La marque est
   facultative si elle est inconnue.
8. Le rattachement exige un identifiant RELORA partagé déjà disponible. Il
   n'y a pas de rapprochement automatique par courriel ou par téléphone.

La file d'erreurs relève d'un rôle de révision RELORA encore à confirmer.
Ce rôle n'a pas été nommé le 2026-10-25.

### Encore ouvertes

Avant de rendre le reste du contrat exécutable, Martin ou les responsables
désignés doivent encore confirmer :

1. les types d'enregistrements QuickBooks à classer comme prospects ou leads,
   et le traitement des clients existants;
2. les canaux de relance permis et la source de vérité du consentement en
   dehors de la préférence d'arrêt déjà confirmée;
3. les horaires, la cadence et les plafonds de relance;
4. les situations où l'envoi PULS est automatique et celles qui exigent une
   approbation humaine;
5. les critères d'attribution du responsable principal et du deuxième humain;
6. les règles de déduplication du lot suivant et le traitement des dossiers
   ambigus, au-delà de l'interdiction déjà confirmée de rapprocher
   automatiquement par courriel ou téléphone;
7. les périmètres d'accès par entreprise et par marque;
8. la technologie d'échange, sa sécurité, sa rétention, ses reprises et sa
   surveillance;
9. le rôle de révision RELORA responsable de la file d'erreurs. Aucun délai
   de reprise n'est à inventer.

L'échange automatique bidirectionnel de tous les leads reste l'objectif du
lot suivant. Il n'est pas confirmé par les décisions du lot 1.

## 11. Portée et critères fonctionnels futurs

Rien dans cette section n'est implémenté. L'implémentation ultérieure devra
démontrer, avant toute activation réelle, que les points suivants sont
respectés. Cette activation n'est pas autorisée par le présent document.

Critères du lot 1 :

- une demande explicite, une désinscription ou un « ne pas contacter »
  enregistré par un humain bloque immédiatement toute nouvelle relance PULS
  sur la portée connue;
- une réponse ordinaire ou une prise en charge humaine ne déclenche pas cet
  arrêt et ne lève pas la préférence canonique;
- PULS transmet à RELORA un événement durable indiquant la demande, son
  heure, sa source, l'entreprise obligatoire et le canal connu, ainsi que la
  marque seulement si elle est déjà connue;
- le rattachement utilise un identifiant RELORA partagé déjà disponible, sans
  rapprochement automatique par courriel ou téléphone;
- RELORA conserve la préférence canonique « ne pas contacter » et
  l'historique, puis transmet la politique à jour à PULS;
- PULS ne peut pas lever cette préférence;
- sans dossier RELORA correspondant, aucun lead n'est créé, l'événement va
  dans une file visible et le blocage PULS est maintenu;
- si la transmission, la portée ou la confirmation est incertaine, PULS
  reste bloqué, et ni un humain ni une séquence future ne reprend le contact;
- un événement rejoué ne crée pas une seconde préférence;
- une nouvelle demande explicite sur un autre canal peut élargir le blocage
  dans la même entreprise, sans le réduire et sans l'étendre à une autre
  entreprise;
- aucune reprise du contact n'a lieu dans le lot 1, et aucun délai de reprise
  n'est appliqué;
- les entreprises et les canaux restent isolés selon la portée confirmée.

Objectif du lot suivant, non confirmé par ce document :

- un lead admissible créé dans chacun des deux modules est relié à l'autre
  sans ressaisie;
- les sources QuickBooks, saisie humaine et formulaires Titan/X-Plod restent
  identifiables;
- l'attribution principale et le soutien éventuel sont visibles dans RELORA
  et transmis à PULS;
- les activités virtuelles de PULS apparaissent dans l'historique RELORA.

Dans tous les cas, aucun message réel ne part avant une autorisation
distincte. Ce document n'accorde pas cette autorisation.

## 12. Statut

Les décisions d'arrêt du lot 1 ont été confirmées par Martin le 2026-10-25.
Le reste du contrat reste une proposition, y compris l'échange automatique
bidirectionnel de tous les leads, qui est l'objectif du lot suivant et non
de ce premier lot.

`DOCUMENT_STATUS` demeure `DRAFT_FOR_MARTIN_REVIEW`. Le document entier n'est
pas adopté. Les noms d'événements restent des propositions : aucun n'est
implémenté.

`IMPLEMENTATION_AUTHORIZED=NO`. Ce document n'autorise ni intégration réelle,
ni import QuickBooks, ni accès à des données clients, ni envoi, ni migration,
ni déploiement.
