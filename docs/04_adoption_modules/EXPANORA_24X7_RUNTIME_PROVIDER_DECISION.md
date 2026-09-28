# EXPANORA — Décision d'hébergement du runtime 24/7

Recommandation d'architecture. Aucun compte, aucun projet cloud, aucune image et aucun déploiement ne sont créés.

```text
DELIVERABLE=EXPANORA_24X7_RUNTIME_PROVIDER_DECISION
GATE=EXPANORA-24X7-RUNTIME-PROVIDER-SELECTION
MODE=ARCHITECTURE_DECISION_ONLY
DATE=2026-09-23
PROJECT=TAGORA_EXPANORA
IMPLEMENTATION_AUTHORIZED=NO
STATUS=EXPANORA_24X7_RUNTIME_PROVIDER_VALIDATED
DECIDEUR=Martin ST-Gelais — Direction
ADR=ADR-0022
DECISION=DEC-034
VALIDATION=VALD-112
VALIDATION_STATUS=VALIDE
EXPANORA_24X7_RUNTIME_PROVIDER=GOOGLE_CLOUD_RUN_WORKER_POOLS
REGION=northamerica-northeast1
REGION_NAME=Montreal
COST_STATUS=TO_BE_MEASURED_AT_PROVISIONING
EXPANORA_24X7_RUNTIME_REQUIRED=YES
HOST_ACCOUNT_CREATED=NO
PAID_SERVICE_ACTIVATED=NO
PRODUCT_ARCHITECTURE_REOPENED=NO
ADR_0020_REOPENED=NO
ADR_0021_REOPENED=NO
```

Le runtime permanent exigé par l'amendement 24/7 reste abstrait du fournisseur. Cette décision recommande seulement où le faire tourner.

Contexte conservé :

```text
WEB_UI_API=Vercel
PREFERRED_WEB_REGION=Montreal / yul1
DATABASE=Supabase Postgres
DATABASE_REGION=ca-central-1
STAGING_AND_PRODUCTION=SEPARATE
WORKER_MAY_DIFFER_FROM_VERCEL_AND_SUPABASE=YES
QUEUE_V1=EXPANORA_DATABASE
TENANT_SECRETS=SUPABASE_VAULT_OR_EQUIVALENT
```

Les montants cités dans la comparaison du 2026-09-23 étaient des ordres de grandeur de revue. Martin ne les fige pas. `COST_STATUS=TO_BE_MEASURED_AT_PROVISIONING`. Aucun achat n'est autorisé.

---

## 1. Ce que le runtime doit faire

Un processus cloud reste LIVE 24 heures sur 24, 7 jours sur 7, même si personne n'est connecté.

Il porte le Growth Orchestrator de fond, les scouts, la Web Intelligence, l'Opportunity Engine, la file, les adapters, les jobs planifiés complémentaires, le heartbeat, les health checks, le redémarrage, les logs, les métriques, les alertes et le kill switch.

Les jobs planifiés ne remplacent pas ce processus.

Le navigateur et Vercel ne l'appellent pas directement. Vercel et le runtime lisent et écrivent la base EXPANORA. Le kill switch et l'audit métier restent dans cette base.

---

## 2. Comparaison

| Plateforme | Processus vraiment permanent | Région Canada | Redémarrage | File native exigée | Simplicité | Intégration Vercel + Supabase | Lock-in si on s'en tient au conteneur | Ordre de grandeur Staging + Production |
|---|---|---|---|---|---|---|---|---|
| Railway | Oui, service toujours allumé | Non. US, Amsterdam, Singapour. Canada seulement en BYOC Enterprise | Oui | Non | Élevée. Déjà connu de PULS | Bonne, mais le travail sortirait du Canada | Faible | Environ 40 à 80 USD/mois pour deux petits services Pro, selon CPU réel |
| Render | Oui, background worker | Non. Oregon, Ohio, Virginia, Francfort, Singapour | Oui | Non | Élevée | Bonne, hors Canada | Faible | Environ 50 à 100 USD/mois pour deux workers Starter ou Standard, plus le plan d'équipe |
| Fly.io | Oui, Machines | Toronto `yyz` oui. Montréal `yul` retiré | Oui | Non | Élevée | Bonne | Faible à moyenne | Environ 70 USD/mois pour deux Machines `performance-1x` à Toronto, ou beaucoup moins en CPU partagé |
| AWS ECS Fargate | Oui | Montréal `ca-central-1` | Oui, contrôle fin | Non. SQS optionnel | Faible. VPC, IAM, registre, journaux | Excellente proximité avec Supabase | Moyenne si l'on n'utilise que la tâche | Compute souvent inférieur à Cloud Run. Le coût humain d'exploitation est plus élevé |
| Azure Container Apps | Oui si `minReplicas` ≥ 1 | Canada Central et Canada East | Oui | Non | Moyenne | Correcte. Pas le chemin le plus court vers Vercel | Moyenne | Deux réplicas actifs en continu : souvent du même ordre que Fargate ou au-dessus, selon le profil |
| Google Cloud Run worker pools | Oui. Pas d'URL, pas de scale-to-zero | Montréal `northamerica-northeast1` et Toronto | Oui, géré | Non. Pub/Sub optionnel | Moyenne, plus simple qu'ECS | Très bonne : Montréal, à côté de la base | Faible si le cœur ne parle qu'à Supabase | Non figé. À mesurer au calculateur avant toute dépense |

Railway et Render sont de vrais services longs. Ils ne proposent pas de région Canada utilisable pour ce runtime. Les placer aux États-Unis ferait traiter les données de marque hors du Canada alors qu'une option montréalaise existe. Ils ne sont pas recommandés.

Fly.io est le plus simple des hébergeurs vraiment permanents, avec Toronto. Montréal y a été retiré lors d'une consolidation de régions. Cette instabilité de carte pèse contre la priorité de stabilité. Le CPU partagé à quelques dollars n'est pas retenu : un scout permanent a besoin d'un CPU dédié modeste, pas du plus petit palier.

AWS Fargate à Montréal est le plus proche de Supabase sur le plan réseau, et le plus mûr pour grandir. Il demande un socle VPC, IAM et journaux disproportionné pour un seul processus de pilote. La fiabilité est là. La simplicité ne l'est pas.

Azure sait garder un réplica allumé au Canada. Un worker qui consomme du CPU en continu est facturé au tarif actif, pas au tarif idle. L'exploitation est plus lourde que nécessaire, sans gain décisif sur Montréal.

Cloud Run en mode service HTTP, même avec un minimum d'instances, n'est pas le runtime retenu. Sans CPU toujours alloué, le travail de fond s'arrête entre les requêtes. Les Cloud Run jobs sont des tâches planifiées. Ils ne remplacent pas le processus permanent.

---

## 3. Recommandation

```text
RECOMMENDED_HOST=Google Cloud Run worker pools
RECOMMENDED_REGION=northamerica-northeast1
RECOMMENDED_REGION_NAME=Montreal
STAGING_PROJECT=SEPARATE_NOT_CREATED
PRODUCTION_PROJECT=SEPARATE_NOT_CREATED
MIN_INSTANCES=1
SCALE_TO_ZERO=FORBIDDEN
PUBLIC_INGRESS=NO
CLOUD_QUEUE_REQUIRED=NO
HOST_SELECTED=GOOGLE_CLOUD_RUN_WORKER_POOLS
HOST_LOCKED_INTO_APPLICATION_CODE=NO
RAILWAY_SELECTED=NO
```

Un worker pool Cloud Run est fait pour un conteneur qui tourne en continu, sans URL publique et sans retour à zéro. Montréal est dans le même ensemble régional que Supabase `ca-central-1` et que la préférence Vercel `yul1`.

Ce n'est pas le choix le moins cher. Fly.io coûte moins. Railway est déjà dans TAGORA. Ils cèdent devant la combinaison fiabilité d'un cloud majeur, région Canada réelle, absence d'URL à exposer, et absence d'un second bus.

Le code du worker ne doit connaître que le contrat `EXPANORA_WORKER_RUNTIME` : variables d'environnement, base EXPANORA, coffre, heartbeat, kill switch. Aucun SDK Google dans le cœur. Le jour où l'hôte change, on déplace l'image.

### Pourquoi cet ordre de priorités

1. Fiabilité : instances permanentes, redémarrage géré, région à plusieurs zones.
2. Sécurité : pas d'entrée publique. Secrets d'infra hors Git. Credentials de marque dans le coffre déjà décidé. Isolation tenant/marque inchangée, fail-closed.
3. Simplicité : un conteneur, une instance au départ, la file déjà prévue dans Postgres.
4. Compatibilité TAGORA : Vercel et Supabase restent en place. Le worker est le seul ajout.
5. Canada : Montréal, lorsque le fournisseur le permet. Ce choix ne constitue pas à lui seul une conformité réglementaire.
6. Observabilité : journaux et métriques du pool, plus heartbeat dans EXPANORA, plus audit métier séparé.
7. Évolution : passer de 1 à N instances sans réécrire le cœur. L'autoscaling natif des pools n'est pas automatique. V1 n'en a pas besoin.
8. Coût : raisonnable pour deux petits processus permanents. Pas optimisé au minimum.

---

## 4. Staging et Production

| | Staging | Production |
|---|---|---|
| Projet cloud | Dédié, non créé | Dédié, distinct, non créé |
| Projet Supabase | Staging déjà prévu, non créé | Production déjà prévu, non créé |
| Instances | 1, jamais zéro | 1 minimum, jamais zéro |
| Données | Jeu QA ou anonymisé | Données réelles plus tard |
| Secrets | Espace distinct | Espace distinct |
| Kill switch | Propre à Staging | Propre à Production |
| Nom | `EXPANORA_STAGING_WORKER` | `EXPANORA_PRODUCTION_WORKER` |
| Hypothèse de taille | 1 vCPU / 1 Gio / 1 instance. Non autorisée | 1 vCPU / 1 Gio / 1 instance. Non autorisée |

Les deux pools exécutent la même image et le même contrat. Ils ne partagent ni base, ni secret, ni kill switch.

Vercel Staging parle à Supabase Staging. Vercel Production parle à Supabase Production. Le worker fait de même. Aucun appel direct Vercel vers le pool.

---

## 5. Coût

```text
COST_STATUS=TO_BE_MEASURED_AT_PROVISIONING
MONTHLY_COST_FROZEN=NO
STAGING_SIZE_HYPOTHESIS=1 vCPU / 1 GiB / 1 instance
PRODUCTION_SIZE_HYPOTHESIS=1 vCPU / 1 GiB / 1 instance
SIZE_HYPOTHESIS_AUTHORIZES_RESOURCES=NO
```

L'estimation de revue 120 à 180 USD par mois n'est pas un coût cible. Au prochain gate, le prix se calcule avec le Google Cloud Pricing Calculator, sur les dimensions réellement retenues : Staging, Production, journaux, réseau et services annexes. Martin valide ce chiffre avant toute dépense.

Toute hausse au-delà d'une instance par environnement se justifie par la charge, l'uptime requis, le backlog, la performance, la continuité et le coût. EXPANORA alerte si son worker n'est plus sain.

---

## 6. Avantages, risques, limites

### Avantages

- Le processus existe quand personne n'est connecté.
- Montréal aligne l'exécution du worker et le stockage Supabase.
- Le cœur reste portable.
- La file et l'audit ne déménagent pas dans le cloud du worker.

### Risques

- Tarif de région Montréal supérieur à une région américaine de palier 1.
- Les worker pools ne scalent pas seuls. Oublier de monter d'une instance sous charge ferme la capacité au lieu de l'étendre.
- Un compte Google est un fournisseur de plus.
- Des logs verbeux peuvent dépasser le compute.
- La carte des régions d'un fournisseur peut changer. Le contrat d'image limite ce risque.

### Limites

- Pas de bascule multi-région active.
- Pas de GPU.
- Le heartbeat applicatif reste obligatoire. La santé de la plateforme ne suffit pas à prouver qu'un scout tourne.
- Le kill switch applicatif prime sur le fait que le processus soit allumé.

---

## 7. Migration si le fournisseur doit changer

Le contrat d'hôte est :

```text
IMAGE=expanora-worker
CONTAINER=standard
GOOGLE_SDK_IN_CORE=NOT_REQUIRED
ABSTRACTIONS=queue, secret access, logging, metrics, runtime lifecycle
STAGING_WORKER=EXPANORA_STAGING_WORKER
PRODUCTION_WORKER=EXPANORA_PRODUCTION_WORKER
SHARED_STATE_BETWEEN_ENVIRONMENTS=FORBIDDEN
ENV=environment name, Supabase URL, secret refs, log level
START=long-lived process
STOP=SIGTERM, finish or checkpoint, then exit
HEALTH=heartbeat row in EXPANORA, scoped by environment
SCALE_TO_ZERO=FORBIDDEN
MIN_INSTANCES_PER_ENVIRONMENT=1
PUBLIC_PORT=NONE
```

Chaque environnement a sa configuration, ses secrets, ses files, ses logs, son kill switch, ses limites, ses accès base et ses credentials d'adapters. Rien de tout cela n'est partagé implicitement entre Staging et Production.

Le worker reste un conteneur standard. File, secrets, journaux, métriques et cycle de vie passent par des abstractions. Le cœur métier peut plus tard partir vers AWS, Azure, Fly.io ou une autre plateforme de conteneurs sans être réécrit.

Pour quitter Google :

1. Construire la même image.
2. La lancer chez l'hôte de repli avec les secrets de cet environnement seulement.
3. Vérifier le heartbeat et l'isolation.
4. Arrêter l'ancien pool.
5. Ne pas déplacer la base ni le coffre.

Replis déjà classés, non choisis :

| Repli | Quand |
|---|---|
| AWS ECS Fargate `ca-central-1` | Le besoin de réseau privé, de quotas fins ou d'échelle dépasse un pool simple |
| Fly.io Machines `yyz` | La simplicité prime et Toronto est accepté à la place de Montréal |
| Railway ou Render | Seulement si Martin écarte explicitement la préférence Canada |

---

## 8. Décisions encore ouvertes

Elles ne bloquent pas la revue de cette recommandation.

| ID | Sujet | État |
|---|---|---|
| OD-RUN-01 | Adopter Cloud Run worker pools à Montréal | Tranché par VALD-112. Aucune ressource créée |
| OD-RUN-02 | Taille réelle | Hypothèse 1 vCPU / 1 Gio / 1 instance. Non autorisée. À mesurer |
| OD-RUN-03 | Coût Staging, Production, journaux et réseau | `TO_BE_MEASURED_AT_PROVISIONING`. Validation Martin avant dépense |

---

## 9. Boundary

```text
CODE_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
CLOUD_RESOURCE_CREATION_AUTHORIZED=NO
ACCOUNT_CREATION_AUTHORIZED=NO
PAID_SERVICE_ACTIVATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
DATABASE_CHANGE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
SECRET_CREATION_AUTHORIZED=NO
NEXUS_CHANGE_AUTHORIZED=NO
OTHER_MODULE_CHANGE_AUTHORIZED=NO
```

---

## Statut

**EXPANORA_24X7_RUNTIME_PROVIDER_VALIDATED** — Martin ST-Gelais, 2026-09-23, VALD-112. Hôte cible : Google Cloud Run worker pools, Montréal. Coût non figé. Aucune infrastructure créée.

Prochain gate, non autorisé : `EXPANORA-24X7-RUNTIME-IMPLEMENTATION-PREPARATION`. Il prépare le calcul de coût et le plan d'implémentation. Il ne déploie pas Production.
