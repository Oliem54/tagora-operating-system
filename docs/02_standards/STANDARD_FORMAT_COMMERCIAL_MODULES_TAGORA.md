# Standard — Format commercial uniforme des modules TAGORA

## Statut

```text
STATUS=VALIDATED
DATE=2026-08-17
DECISION=DEC-028
ADR=ADR-0016
VALIDATION=VALD-107
TOS_SCOPE_ONLY=YES
WEBSITE_REWRITE_AUTHORIZED=NO
```

## Objectif

Présenter chaque module de façon courte, concrète et utile à un entrepreneur. La surface principale doit faire comprendre rapidement le problème éliminé, l'action du module, le résultat recherché, le statut réel et la prochaine action possible.

Ce standard ne remplace pas les pages détaillées. Il impose une hiérarchie commerciale commune aux cartes, héros et premières sections.

## Ordre obligatoire du message

1. problème concret éliminé ;
2. action principale du module ;
3. gain de temps ou d'efficacité réellement défendable ;
4. réduction d'erreurs ou d'occasions perdues réellement défendable ;
5. statut commercial réel ;
6. CTA simple.

```text
PRIMARY_MESSAGE_ORDER=PROBLEM > ACTION > RESULT > RISK_REDUCTION > STATUS > CTA
ARCHITECTURE_JARGON_ON_PRIMARY_SURFACE=NO
GOVERNANCE_EXPLANATION_ON_PRIMARY_SURFACE=NO
UNMEASURED_NUMERIC_CLAIMS=NO
```

## Format uniforme d'une carte

| Élément | Règle | Longueur recommandée |
|---|---|---|
| Nom | Nom commercial officiel complet | Une ligne |
| Statut | Libellé réel et visible | Deux mots maximum |
| Problème | Situation concrète reconnue par l'entrepreneur | 8 mots maximum |
| Action | Ce que fait réellement le module | 18 mots maximum |
| Résultat | Effet concret confirmé, sans chiffre inventé | 12 mots maximum |
| CTA | Une seule prochaine action | 4 mots maximum |

La carte ne doit pas dépasser environ 40 mots de contenu commercial, hors nom et CTA. Les détails, limites, intégrations et explications secondaires vont dans la page détaillée.

## Langage

### Obligatoire

- direct ;
- entrepreneurial ;
- concret ;
- orienté résultats ;
- compréhensible sans connaissance technique ;
- court dans les cartes ;
- plus détaillé uniquement dans les sections secondaires.

### À éviter dans les surfaces principales

- architecture, orchestration, runtime, API, base de données, pipeline ou autre jargon technique ;
- explications de gouvernance TOS ;
- répétitions de garde-fous ;
- formulations abstraites ;
- longues phrases ;
- bénéfices vagues ;
- superlatifs non démontrés ;
- pourcentages, économies ou gains non mesurés.

Les garde-fous nécessaires restent obligatoires, mais ils doivent être exprimés par le statut, le temps verbal, le CTA et les sections secondaires plutôt que répétés dans chaque phrase commerciale.

## Taxonomie des capacités et statuts

### Bénéfice actuel

Un bénéfice actuel peut être formulé au présent uniquement si :

- la capacité est opérationnelle dans l'environnement commercial concerné ;
- son accès est réellement ouvert au public visé ;
- le résultat annoncé est soutenu par une preuve ou une conséquence directe vérifiable ;
- aucun chiffre non mesuré n'est utilisé.

```text
BENEFIT_STATUS=CURRENT_CONFIRMED
PRESENT_TENSE_ALLOWED=YES
EVIDENCE_REQUIRED=YES
```

### Capacité confirmée

Une capacité confirmée décrit une action réellement disponible et testée. Elle peut être formulée au présent, sans élargir son périmètre réel.

```text
CAPABILITY_STATUS=CURRENT_CONFIRMED
CAPABILITY_SCOPE_MUST_MATCH_EVIDENCE=YES
```

### Accès pilote

Le statut `ACCÈS PILOTE` est autorisé uniquement si un pilote réel, un périmètre, une procédure d'accès et un responsable ont été approuvés.

```text
CAPABILITY_STATUS=PILOT_ONLY
FR_PUBLIC_LABEL=ACCÈS PILOTE
EN_PUBLIC_LABEL=PILOT ACCESS
PILOT_GATE_REQUIRED=YES
GENERAL_AVAILABILITY_IMPLIED=NO
```

CTA autorisé seulement après approbation du pilote : `Demander un accès pilote`.

### Capacité future

Une capacité future doit être formulée avec `prévu pour`, `permettra de` ou une formulation équivalente. Elle ne doit pas être présentée comme active.

```text
CAPABILITY_STATUS=PLANNED_FUTURE
PRESENT_TENSE_OPERATIONAL_CLAIM_ALLOWED=NO
FUTURE_TENSE_REQUIRED=YES
```

### Statut BIENTÔT

`COMING_SOON` demeure le code commercial TOS. Son libellé public est :

```text
INTERNAL_STATUS=COMING_SOON
FR_PUBLIC_LABEL=BIENTÔT
EN_PUBLIC_LABEL=COMING SOON
```

CTA autorisés :

- `Découvrir la vision` ;
- `Être informé du lancement` ;
- `Parler à notre équipe`.

CTA interdits pour un module `BIENTÔT` : commencer, créer un compte, se connecter au module, essayer gratuitement, demander une démonstration opérationnelle ou déclencher une automatisation.

## Règles des CTA

| Statut prouvé | CTA possible | Condition |
|---|---|---|
| Capacité actuelle | `Découvrir le module` | Page commerciale réelle |
| Accès réel ouvert | `Accéder au module` | Destination active et autorisée |
| Accès pilote | `Demander un accès pilote` | Pilote approuvé et procédure réelle |
| Bientôt | `Découvrir la vision` | Présentation conceptuelle |
| Bientôt | `Être informé du lancement` | Mécanisme réel d'inscription disponible |
| Bientôt | `Parler à notre équipe` | Canal de contact réel |

Ne jamais afficher un CTA dont l'action réelle n'existe pas.

## Axes commerciaux des six modules

Ces axes structurent la rédaction future. Ils ne constituent pas une réécriture Website ni une déclaration automatique de disponibilité.

| Module | Problème à mettre en premier | Action à expliquer | Résultat à démontrer | Statut |
|---|---|---|---|---|
| TAGORA HORORA | Heures et horaires difficiles à suivre | Planifier et suivre le temps | Moins de suivi manuel et d'erreurs, si confirmé | À confirmer avant publication |
| TAGORA PULS | Leads et occasions qui manquent de suivi | Qualifier et suivre les conversations commerciales | Moins d'occasions oubliées, si confirmé | À confirmer avant publication |
| TAGORA DEPORA | Stocks et disponibilités difficiles à voir | Centraliser l'inventaire et les arrivages | Décisions plus rapides et moins d'erreurs, si confirmé | À confirmer avant publication |
| TAGORA MESSOR | Courriels nombreux et tri manuel | Trier, analyser et préparer des réponses | Moins de tri manuel, sans prétendre à l'envoi automatique | À confirmer avant publication |
| TAGORA YORVA | Documents et offres fournisseurs dispersés | Répertorier, cataloguer, analyser et soutenir le sourcing | Comparaisons et décisions d'approvisionnement facilitées | `BIENTÔT` — futur uniquement |
| TAGORA ETIOQ | Changements d'étiquettes et de prix manuels | Gérer les étiquettes électroniques et les informations affichées | Mise à jour et supervision simplifiées | `BIENTÔT` — futur uniquement |

## Critères d'acceptation futurs

```text
SIX_MODULES_USE_SAME_CARD_STRUCTURE=YES
PROBLEM_VISIBLE_BEFORE_TECHNICAL_DETAIL=YES
ONE_PRIMARY_ACTION_PER_MODULE=YES
RESULT_CLAIM_EVIDENCE_CHECKED=YES
STATUS_VISIBLE=YES
ONE_SIMPLE_CTA=YES
CURRENT_PILOT_FUTURE_DISTINCTION_CLEAR=YES
YORVA_FUTURE_ONLY=YES
ETIOQ_FUTURE_ONLY=YES
NEXUS_EXCLUDED_FROM_SIX_MODULE_CARDS=YES
```

## Boundary

```text
TOS_DOCUMENTATION_ONLY=YES
WEBSITE_REPOSITORY_TOUCHED=NO
WEBSITE_COPY_REWRITE_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
COMMIT_OUTSIDE_TOS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```
