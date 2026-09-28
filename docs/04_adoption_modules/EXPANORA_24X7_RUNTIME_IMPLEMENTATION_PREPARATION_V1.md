# EXPANORA — Préparation d'implémentation du runtime 24/7

Préparation seulement. Aucun dépôt, aucun projet cloud, aucune facturation et aucun déploiement ne sont créés.

```text
DELIVERABLE=EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1
GATE=EXPANORA-24X7-RUNTIME-IMPLEMENTATION-PREPARATION
MODE=IMPLEMENTATION_PREPARATION_ONLY
DATE=2026-09-23
PROJECT=TAGORA_EXPANORA
IMPLEMENTATION_AUTHORIZED=NO
STATUS=EXPANORA_IMPLEMENTATION_PREPARATION_V1_VALIDATED
ADR=ADR-0023
DECISION=DEC-035
VALIDATION=VALD-113
VALIDATION_STATUS=VALIDE
VALIDATED_ON=2026-09-23
DECIDEUR=Martin ST-Gelais — Direction
OD_PREP_01=APPROVED_AS_PLANNING_ESTIMATE
OD_PREP_02=APPROVED
OD_PREP_03=APPROVED_FOR_V1_WITH_ABSTRACTION
OD_PREP_04=TO_BE_MEASURED_IN_STAGING
NEXT_GATE=EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO
NEXT_GATE_AUTHORIZED=NO
PROVIDER=GOOGLE_CLOUD_RUN_WORKER_POOLS
REGION=northamerica-northeast1
COST_IS_A_QUOTE=NO
SPEND_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
LOCAL_PROJECT_PATH=C:\dev\TAGORA\tagora-expanora
REPO_CREATED=NO
```

ADR-0022, DEC-034 et VALD-112 restent figées. Cette préparation ne les rouvre pas.

---

## 1. Modèle de coût

Source : page publique Cloud Run Pricing, section Worker pools, tarif Default USD, consultée le 2026-09-23.

```text
CPU_RATE=0.000011244 USD per vCPU-second
MEMORY_RATE=0.000001235 USD per GiB-second
HOURS_PER_MONTH=730
SECONDS_PER_MONTH=2628000
SIZE=1 vCPU + 1 GiB
INSTANCES=1
SCALE_TO_ZERO=FORBIDDEN
FREE_TIER_APPLIED_IN_HEADLINE=NO
MONTREAL_TIER=TIER_2_DECLARED_FOR_CLOUD_RUN
MONTREAL_SKU_CONFIRMED_BY_CALCULATOR=NO
```

Calcul par environnement, sans palier gratuit :

| Poste | Calcul | USD / mois |
|---|---|---|
| Worker pool CPU | 2 628 000 × 0,000011244 | 29,55 |
| Worker pool mémoire | 2 628 000 × 0,000001235 | 3,25 |
| Artifact Registry | Hypothèse : quelques images, proche du palier gratuit | 0,50 |
| Logs | Hypothèse : 2 Gio, sous l'allocation projet | 0,00 |
| Monitoring | Hypothèse : métriques de plateforme seulement | 0,00 |
| Egress | Hypothèse : 20 Go × 0,12 USD/Go vers Internet Amérique du Nord | 2,40 |
| Secret Manager | Hypothèse : 10 versions actives × 0,06 USD | 0,60 |
| File Google | Non retenue. File dans Postgres EXPANORA | 0,00 |
| Répartiteur de charge | Aucun. Pas d'entrée publique | 0,00 |
| Cloud NAT | Non retenu en V1 | 0,00 |

```text
MONTHLY_STAGING_ESTIMATE=36.30 USD
MONTHLY_PRODUCTION_ESTIMATE=36.30 USD
MONTHLY_TOTAL_ESTIMATE=72.60 USD
OD_PREP_01=APPROVED_AS_PLANNING_ESTIMATE
```

Martin accepte **72,60 USD/mois** uniquement comme ordre de grandeur initial : worker Staging, worker Production, 1 vCPU, 1 Gio, 1 instance permanente par environnement. Ce n'est pas un devis. Ce n'est pas une dépense autorisée. Les coûts réels sont mesurés avant toute création de Production.

Hypothèses explicites :

- 730 heures, instance jamais à zéro ;
- le tarif Default de la page est appliqué tel quel à Montréal ;
- Montréal est classé Tier 2 sur cette page, et le calculateur Google doit confirmer le SKU montréalais avant toute dépense ;
- le palier gratuit worker pool (384 204 vCPU-secondes et 728 744 Gio-secondes, base us-central1) n'est pas déduit, car il est en général par compte de facturation et pas deux fois ;
- si ce palier s'applique une fois, le total baisse d'environ 5 USD ;
- les 2 Gio de logs et les 20 Go d'egress sont des hypothèses de planification. OD-PREP-04 les laisse à mesurer en Staging. Elles ne deviennent pas des volumes Production ;
- Vercel, Supabase, fournisseurs IA, recherche Web et API de canaux sont hors de ce total.

Aucune de ces lignes n'est achetée.

---

## 2. Structure Google Cloud

OD-PREP-02 est approuvée. Séparation cible : **deux projets**, un compte de facturation commun, un dossier d'organisation optionnel. Rien n'est créé.

| Objet | Nom proposé | Créé |
|---|---|---|
| Dossier | `tagora-expanora` | Non |
| Projet Staging | `tagora-expanora-staging` | Non |
| Projet Production | `tagora-expanora-production` | Non |
| Worker Staging | `expanora-staging-worker` | Non |
| Worker Production | `expanora-production-worker` | Non |
| Registry Staging | `expanora-staging` dans le projet Staging | Non |
| Registry Production | `expanora-production` dans le projet Production | Non |
| Région des deux | `northamerica-northeast1` | — |

Un seul projet avec deux pools serait moins sûr : une identité ou un secret peut fuir d'un environnement à l'autre. Deux projets rendent le refus cross-environnement structurel.

Production reste dans son projet, mais aucun gate Staging ne l'autorise.

---

## 3. Composants futurs

| Composant | Rôle | État |
|---|---|---|
| `EXPANORA_STAGING_WORKER` | Processus 24/7 Staging, 1 instance minimum | Non créé |
| `EXPANORA_PRODUCTION_WORKER` | Processus 24/7 Production, 1 instance minimum | Non créé. Gate séparé |
| Artifact Registry | Images du conteneur, un registre par projet | Non créé |
| Identités de service | Une par environnement, droits minimaux | Non créées |
| Accès aux secrets | Secrets d'infra du projet. Credentials de marque dans le coffre EXPANORA | Non créé |
| File | Postgres derrière `QUEUE_PROVIDER_CONTRACT` | Non créée |
| Heartbeat | Ligne dans EXPANORA, par environnement | Non créé |
| Monitoring et alertes | Métriques de plateforme + âge du heartbeat | Non créé |
| Kill switch | Drapeau EXPANORA, lu avant chaque mutation et chaque cycle | Non créé |

---

## 4. Files et événements

OD-PREP-03 est approuvée pour V1, avec abstraction.

```text
QUEUE_V1=DURABLE_POSTGRES
QUEUE_PROVIDER_CONTRACT=REQUIRED
CORE_DEPENDS_ON_SUPABASE_QUEUE_API=NO
PGMQ_OR_SUPABASE_QUEUES=ALLOWED_BEHIND_CONTRACT
```

Le cœur appelle uniquement `QUEUE_PROVIDER_CONTRACT`. Une implémentation PGMQ ou Supabase Queues peut se placer derrière ce contrat. Pub/Sub, SQS ou Service Bus pourront le remplacer plus tard sans réécrire le métier.

Le contrat couvre au minimum : enqueue, claim/lease, acknowledge, retry, visibility timeout, dead letter, idempotency, `tenant_id`, `brand_id`, priority, `scheduled_at`, `attempt_count`, `trace_id`.

| Usage | Mécanisme |
|---|---|
| Tâches internes, scouts, Web Intelligence, adapters, Opportunity Engine | Job porté par le contrat, scopé tenant et marque |
| Result Events | Écriture dans EXPANORA après réception. Pas une base d'un autre module |
| Retry | Borné. Même clé. Refus métier non rejoué |
| Dead letter | Visible à l'audit EXPANORA. Pas une file Google dans le cœur |

Un job sans tenant, ou avec une marque d'un autre tenant, est refusé. Il n'est pas rejoué.

---

## 5. Contrat du conteneur

Le cœur métier ne importe pas le SDK Google.

```text
START=processus long, lit la config, ouvre la file, écrit un heartbeat
SHUTDOWN=SIGTERM, cesse de prendre des jobs, termine ou checkpoint, sort
HEARTBEAT=horodatage par environnement, worker et version
HEALTH=alive si heartbeat récent et kill switch lisible
CONFIG=variables d'environnement, pas de fichier secret dans l'image
TENANT_ISOLATION=chaque job revérifie tenant_id
BRAND_ISOLATION=revérifie brand_id quand le travail est de marque
QUEUE=QUEUE_PROVIDER_CONTRACT
RETRY=borné
IDEMPOTENCE=même clé, même effet
KILL_SWITCH=lu avant prise de job et avant effet externe. Illisible = arrêt des effets
LOGGING=structuré, sans secret, sans contenu client
METRICS=compteurs du contrat d'observabilité
PROVIDER_HEALTH=dernier échec fournisseur IA, sans payload
ADAPTER_HEALTH=dernier code adapter, sans jeton
```

Abstractions obligatoires : file, accès secrets, journaux, métriques, cycle de vie. Changer d'hôte ne réécrit pas les scouts ni l'Opportunity Engine.

---

## 6. Arborescence du dépôt

Chemin futur : `C:\dev\TAGORA\tagora-expanora`. Ce gate ne crée pas le dépôt. Le prochain gate nommé, non autorisé ici, est `EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO`.

```text
apps/
  web/
  worker/
packages/
  core/
  db/
  contracts/
  adapters/
  providers/
  agents/
  web-intelligence/
  opportunities/
  queue/
  observability/
  config/
docs/
```

`packages/queue` porte `QUEUE_PROVIDER_CONTRACT`. `packages/core` ne dépend ni du SDK Google, ni de l'API Supabase Queues, ni du SQL des adapters. Un ajustement de cette arborescence pendant le bootstrap exige une justification technique documentée.

Le dépôt pourra plus tard contenir de la structure ou de la configuration Production non secrète. Aucune ressource Production n'en découle.

---

## 7. Ordre Staging-first

Chaque ligne est un gate futur. **Aucune n'est autorisée.** Une ligne Staging n'ouvre pas la suivante et n'ouvre jamais Production.

| # | Gate futur | Production |
|---|---|---|
| 1 | `EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO` — dépôt local seulement | Non |
| 2 | Architecture locale, fixtures, sans secret réel | Non |
| 3 | Préparation du schéma EXPANORA, sans l'appliquer | Non |
| 4 | Projet Supabase Staging | Non |
| 5 | Conteneur worker, build local seulement | Non |
| 6 | Runtime Google Staging, après validation du coût calculé | Non |
| 7 | Vercel Staging, vers Supabase Staging | Non |
| 8 | Health checks et alerte heartbeat | Non |
| 9 | Tests d'isolation : un tenant, une marque | Non |
| 10 | Boucle Web Intelligence minimale, Advisor | Non |
| 11 | Adapter WordPress en lecture seule, un site | Non |
| 12 | Essai humain du pilote Staging | Non |
| 13 | Dossier de préparation Production, sans ressource Production | Non |
| 14 | `EXPANORA-PRODUCTION-RUNTIME-GO`, GO Martin explicite et distinct | Seul gate qui pourra, plus tard, autoriser Production |

```text
PRODUCTION_IMPLIED_BY_STAGING_GATE=FORBIDDEN
PRODUCTION_GATE=EXPANORA-PRODUCTION-RUNTIME-GO
PRODUCTION_GATE_AUTHORIZED=NO
```

---

## 8. Préparation IAM

Aucune identité n'est créée.

| Identité future | Projet | Droits proposés | Interdit |
|---|---|---|---|
| Déployeur Staging | Staging | Écrire le registre Staging. Déployer le pool Staging | Production, facturation, `roles/owner` |
| Runtime Staging | Staging | Lire les secrets d'infra Staging | Secrets Production, données hors EXPANORA, rôle propriétaire |
| Déployeur Production | Production | Écrire le registre Production. Déployer le pool Production | Staging, et toute création avant le gate Production |
| Runtime Production | Production | Lire les secrets d'infra Production | Secrets Staging |

Interdictions communes : pas de clé JSON dans Git, pas d'identité partagée entre Staging et Production, pas d'invocateur public, pas d'accès aux bases des autres modules TAGORA.

Les credentials Meta, Google Ads, WordPress et fournisseurs IA ne sont pas des rôles IAM. Ils restent dans le coffre EXPANORA, scopés tenant et marque.

---

## 9. Observabilité

Métriques minimum :

| Métrique | Lecture |
|---|---|
| Worker alive | Instance du pool ≥ 1 |
| Heartbeat age | Secondes depuis le dernier heartbeat de cet environnement |
| Queue backlog | Jobs `PENDING` de cet environnement |
| Failed jobs | Compteur `FAILED_TERMINAL` |
| Retry count | Somme des attempts |
| Adapter failures | Par adapter, sans jeton |
| Provider failures | Par fournisseur IA, sans prompt |
| AI usage | Jetons ou unités, par tenant |
| Estimated cost | Compteur EXPANORA, pas la facture Google |
| Tenant failures | `TENANT_MISMATCH` et `BRAND_MISMATCH` |
| Kill switch state | Niveau armé, lisible |

Alertes critiques :

- âge du heartbeat au-dessus de 2 minutes ;
- nombre d'instances à 0 ;
- kill switch illisible ;
- `TENANT_MISMATCH` ou `BRAND_MISMATCH` ;
- `AUTH_EXPIRED` sur un adapter ;
- backlog qui dépasse le seuil de l'environnement.

L'audit métier reste dans EXPANORA. Il n'est pas remplacé par les logs Google.

---

## 10. Décisions tranchées

| ID | Statut | Décision |
|---|---|---|
| OD-PREP-01 | `APPROVED_AS_PLANNING_ESTIMATE` | 72,60 USD/mois = ordre de grandeur initial, 1 vCPU / 1 Gio / 1 instance par environnement. Pas un devis. Coûts réels avant création de Production |
| OD-PREP-02 | `APPROVED` | `tagora-expanora-staging` et `tagora-expanora-production`. Aucun projet créé |
| OD-PREP-03 | `APPROVED_FOR_V1_WITH_ABSTRACTION` | File Postgres durable. `QUEUE_PROVIDER_CONTRACT`. `CORE_DEPENDS_ON_SUPABASE_QUEUE_API=NO` |
| OD-PREP-04 | `TO_BE_MEASURED_IN_STAGING` | Logs, egress, débit de file, trafic Web Intelligence, IA, adapters et base. Ces mesures font le budget Production. Volumes Production non inventés |

---

## 11. Boundary

```text
CODE_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
GOOGLE_CLOUD_PROJECT_AUTHORIZED=NO
BILLING_ACTIVATION_AUTHORIZED=NO
ARTIFACT_REGISTRY_AUTHORIZED=NO
WORKER_POOL_AUTHORIZED=NO
SERVICE_ACCOUNT_AUTHORIZED=NO
QUEUE_CREATION_AUTHORIZED=NO
SECRET_CREATION_AUTHORIZED=NO
SUPABASE_PROJECT_AUTHORIZED=NO
VERCEL_PROJECT_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
OTHER_MODULE_CHANGE_AUTHORIZED=NO
```

---

## Prochain gate

```text
NEXT_GATE=EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO
NEXT_GATE_MODE=LOCAL_REPOSITORY_BOOTSTRAP_ONLY
NEXT_GATE_AUTHORIZED=NO
```

Ce gate pourra, lorsqu'il sera émis, autoriser seulement le dépôt local `C:\dev\TAGORA\tagora-expanora` : Git, monorepo, TypeScript, gestionnaire de paquets, lint, tests, packages et apps, contrats initiaux, documentation technique. Il n'autorisera ni Supabase, ni Google Cloud, ni Vercel, ni DNS, ni secret, ni credential, ni module TAGORA, ni WordPress, ni IA externe, ni dépense, ni Production.

---

## Statut

**EXPANORA_IMPLEMENTATION_PREPARATION_V1_VALIDATED** — ADR-0023, DEC-035 et VALD-113 validées le 2026-09-23. Ordre de grandeur 72,60 USD/mois. Deux projets nommés, non créés. File Postgres derrière contrat. Production bloquée. Dépôt non créé.
