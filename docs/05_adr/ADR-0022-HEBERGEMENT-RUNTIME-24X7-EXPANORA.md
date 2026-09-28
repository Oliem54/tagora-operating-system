# ADR-0022 — Hébergement du runtime 24/7 EXPANORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-09-23**

Validation : **VALD-112**  
Décision : **DEC-034**

Cette ADR fige l'hôte cible du runtime permanent exigé par l'amendement 24/7 d'ADR-0021. Elle **ne remplace pas** ADR-0021. Elle **ne rouvre pas** ADR-0020.

Elle **n'autorise** ni compte Google, ni worker pool, ni facturation, ni registre d'images, ni build, ni compte de service, ni secret, ni file, ni déploiement, ni DNS, ni changement de base, de Vercel, de Supabase ou de Nexus.

---

## Date

2026-09-23

## Contexte

EXPANORA doit rester LIVE 24/7. Le fournisseur du runtime long-lived n'était pas verrouillé. Vercel porte le Web et l'API. Supabase Postgres `ca-central-1` porte les données. Le worker peut être ailleurs, à condition de privilégier la fiabilité, la sécurité, la simplicité, TAGORA, le Canada lorsque possible, l'observabilité, l'échelle, puis un coût raisonnable.

---

## Décision

Martin valide :

```text
STATUS=EXPANORA_24X7_RUNTIME_PROVIDER_VALIDATED
EXPANORA_24X7_RUNTIME_PROVIDER=GOOGLE_CLOUD_RUN_WORKER_POOLS
REGION=northamerica-northeast1
REGION_NAME=Montreal
WEB_UI_API=Vercel
WEB_REGION_PREFERRED=yul1
DATABASE=Supabase Postgres
DATABASE_REGION=ca-central-1
STAGING_WORKER=EXPANORA_STAGING_WORKER
PRODUCTION_WORKER=EXPANORA_PRODUCTION_WORKER
ENVIRONMENT_STATE_SHARED=NO
MIN_INSTANCES_PER_ENVIRONMENT=1
SCALE_TO_ZERO=FORBIDDEN
GOOGLE_SDK_IN_CORE=NOT_REQUIRED
ABSTRACTIONS=queue, secret access, logging, metrics, runtime lifecycle
COST_STATUS=TO_BE_MEASURED_AT_PROVISIONING
MONTHLY_COST_FROZEN=NO
SIZE_HYPOTHESIS=1 vCPU / 1 GiB / 1 instance
SIZE_HYPOTHESIS_AUTHORIZES_RESOURCES=NO
ACCOUNT_CREATED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Le détail comparé est dans [EXPANORA_24X7_RUNTIME_PROVIDER_DECISION.md](../04_adoption_modules/EXPANORA_24X7_RUNTIME_PROVIDER_DECISION.md).

### Prochaine étape

```text
NEXT_GATE=EXPANORA-24X7-RUNTIME-IMPLEMENTATION-PREPARATION
NEXT_GATE_AUTHORIZED=NO
NEXT_GATE_DEPLOYS_PRODUCTION=NO
HUMAN_GATE=YES
```

Ce prochain gate prépare l'implémentation : calculateur Google avec les dimensions retenues, coût Staging, coût Production, journaux, réseau et services annexes, puis validation Martin avant toute dépense. Il ne crée pas de projet et ne déploie pas Production.

La préparation est validée dans [EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md](../04_adoption_modules/EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md) (ADR-0023, DEC-035, VALD-113). Elle ne modifie pas cette décision. Le prochain gate `EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO` n'est pas autorisé.

---

## Options considérées

1. **Railway** — rejetée comme hôte de ce runtime : pas de région Canada hors BYOC Enterprise. La familiarité PULS ne compense pas.
2. **Render** — rejetée pour la même raison de région. Le worker permanent y existe.
3. **Fly.io Toronto** — sérieuse. Plus simple et moins chère. Montréal y a été retiré. Classée repli, pas choix principal.
4. **AWS ECS Fargate Montréal** — la plus mûre et la plus proche de Supabase. Trop lourde pour un seul processus de pilote. Classée repli d'échelle.
5. **Azure Container Apps Canada** — capable de rester allumée. Exploitation plus lourde, sans avantage décisif.
6. **Cloud Run service HTTP ou jobs** — rejetée. Le CPU entre les requêtes et les jobs planifiés ne satisfont pas le runtime permanent.
7. **Cloud Run worker pools à Montréal** — retenue comme recommandation : processus continu, sans URL, région Montréal, cœur portable.

---

## Conséquences

### Positives

- Le runtime 24/7 a un hôte recommandé dans la même ville que la base.
- Le cœur du worker ne dépend pas d'un SDK Google.
- Staging et Production restent des projets séparés.
- Aucune dépense n'est engagée.

### Négatives / contraintes

- Deux projets Google seraient à créer plus tard, hors de ce gate.
- Le coût estimé des deux pools dépasse Fly.io.
- L'autoscaling des pools n'est pas automatique.
- Railway, déjà utilisé ailleurs dans TAGORA, n'héberge pas ce runtime.

### Boundary

```text
ACCOUNT_CREATION_AUTHORIZED=NO
CLOUD_RESOURCE_CREATION_AUTHORIZED=NO
PAID_SERVICE_ACTIVATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
ADR_0020_REOPENED=NO
ADR_0021_AMENDED_BY_THIS_ADR=NO
```

---

## Modules impactés

TOS (documentation seulement).  
EXPANORA : dépôt non créé.  
Nexus, Vercel et Supabase : **non modifiés**.

---

## Références

- [EXPANORA_24X7_RUNTIME_PROVIDER_DECISION.md](../04_adoption_modules/EXPANORA_24X7_RUNTIME_PROVIDER_DECISION.md)
- [ADR-0021](ADR-0021-ARCHITECTURE-DEPLOIEMENT-EXPANORA-V1.md) — exigence 24/7, hôte non verrouillé jusqu'à validation de la présente ADR
- [EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-112 | Hôte du runtime 24/7 EXPANORA | **Validé** | Martin ST-Gelais — Direction | 2026-09-23 |
