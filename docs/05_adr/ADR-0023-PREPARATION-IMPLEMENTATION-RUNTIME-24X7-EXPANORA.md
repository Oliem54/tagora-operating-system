# ADR-0023 — Préparation d'implémentation du runtime 24/7 EXPANORA

## Statut

**Validé — EXPANORA_IMPLEMENTATION_PREPARATION_V1_VALIDATED — 2026-09-23**

Validation : **VALD-113**  
Décision : **DEC-035**  
Décideur : Martin ST-Gelais — Direction

Cette ADR prépare l'implémentation du runtime validé par ADR-0022. Elle **ne le remplace pas**. Elle **n'autorise aucune** création de ressource, aucun dépôt et aucune dépense.

---

## Date

2026-09-23

## Contexte

L'hôte est figé : Cloud Run worker pools, Montréal, au moins une instance par environnement. Le coût ne l'était pas. Martin doit pouvoir revoir un ordre de grandeur, la structure des projets, la file, le contrat du conteneur et l'ordre Staging-first avant tout compte Google.

---

## Décision

```text
STATUS=EXPANORA_IMPLEMENTATION_PREPARATION_V1_VALIDATED
OD_PREP_01=APPROVED_AS_PLANNING_ESTIMATE
MONTHLY_STAGING_ESTIMATE=36.30 USD
MONTHLY_PRODUCTION_ESTIMATE=36.30 USD
MONTHLY_TOTAL_ESTIMATE=72.60 USD
COST_IS_A_QUOTE=NO
SPEND_AUTHORIZED=NO
REAL_COST_BEFORE_PRODUCTION_CREATION=REQUIRED
OD_PREP_02=APPROVED
GCP_STAGING_PROJECT=tagora-expanora-staging
GCP_PRODUCTION_PROJECT=tagora-expanora-production
PROJECTS_CREATED=NO
OD_PREP_03=APPROVED_FOR_V1_WITH_ABSTRACTION
QUEUE_V1=DURABLE_POSTGRES
QUEUE_PROVIDER_CONTRACT=REQUIRED
CORE_DEPENDS_ON_SUPABASE_QUEUE_API=NO
OD_PREP_04=TO_BE_MEASURED_IN_STAGING
GOOGLE_SDK_IN_CORE=NOT_REQUIRED
PRODUCTION_AUTHORIZED=NO
REPO_CREATED=NO
NEXT_GATE=EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO
NEXT_GATE_AUTHORIZED=NO
```

Le détail est dans [EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md](../04_adoption_modules/EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md).

72,60 USD/mois est l'ordre de grandeur initial pour deux workers de 1 vCPU, 1 Gio et 1 instance permanente. Les volumes de logs et d'egress restent à mesurer en Staging. Ils ne sont pas des volumes Production.

`QUEUE_PROVIDER_CONTRACT` couvre enqueue, claim/lease, acknowledge, retry, visibility timeout, dead letter, idempotency, `tenant_id`, `brand_id`, priority, `scheduled_at`, `attempt_count` et `trace_id`. PGMQ ou Supabase Queues peut implémenter le contrat. Le cœur n'appelle pas cette API.

### Prochaine étape

```text
NEXT_GATE=EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO
NEXT_GATE_MODE=LOCAL_REPOSITORY_BOOTSTRAP_ONLY
NEXT_GATE_AUTHORIZED=NO
PRODUCTION_STILL_BLOCKED=YES
```

Ce gate pourra autoriser seulement le dépôt local : Git, monorepo, TypeScript, gestionnaire de paquets, lint, tests, structure `apps/` et `packages/`, contrats initiaux, documentation technique. Il n'autorise pas Supabase, Google Cloud, Vercel, DNS, secrets, credentials, un autre module TAGORA, WordPress, une IA externe, une dépense, ni Production.

---

## Options considérées

1. **Un seul projet GCP pour Staging et Production** — rejetée : un secret ou une identité peut traverser les environnements.
2. **Pub/Sub comme file du cœur** — rejetée : verrouillage Google inutile. Postgres EXPANORA suffit au pilote.
3. **Cloud NAT et VPC dès le pilote** — rejetée : coût et complexité sans entrée publique à protéger.
4. **Deux projets, file Postgres derrière contrat, conteneur portable, Production sur un GO distinct** — retenue et validée.

---

## Conséquences

### Positives

- Martin peut juger un total d'environ 73 USD par mois avant d'ouvrir un compte.
- Staging ne peut pas autoriser Production par implication.
- Le worker reste déplaçable.

### Négatives / contraintes

- Le tarif montréalais exact n'est pas confirmé par le calculateur.
- Les 20 Go d'egress et les 2 Gio de logs restent des hypothèses de planification. OD-PREP-04 les mesure en Staging avant le budget Production.
- Aucun dépôt n'existe encore au chemin `C:\dev\TAGORA\tagora-expanora`.

### Boundary

```text
SPEND_AUTHORIZED=NO
PROJECT_CREATION_AUTHORIZED=NO
REPO_CREATION_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
ADR_0022_REOPENED=NO
```

---

## Modules impactés

TOS (documentation seulement).  
EXPANORA, Google Cloud, Supabase, Vercel, Nexus : **non touchés**.

---

## Références

- [EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md](../04_adoption_modules/EXPANORA_24X7_RUNTIME_IMPLEMENTATION_PREPARATION_V1.md)
- [ADR-0022](ADR-0022-HEBERGEMENT-RUNTIME-24X7-EXPANORA.md) — hôte figé, non rouvert
- [Cloud Run pricing](https://cloud.google.com/run/pricing) — consulté le 2026-09-23

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-113 | Préparation d'implémentation du runtime 24/7 | **Validé** | Martin ST-Gelais — Direction | 2026-09-23 |
