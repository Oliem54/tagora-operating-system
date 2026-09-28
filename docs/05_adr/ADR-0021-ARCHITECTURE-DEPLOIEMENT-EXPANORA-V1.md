# ADR-0021 — Architecture de déploiement EXPANORA V1

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-09-22**  
**Amendé — runtime 24/7 — Martin ST-Gelais — Direction — 2026-09-22**

Validation : **VALD-111**  
Décision : **DEC-033**  
Amendement : `EXPANORA-DEPLOYMENT-ARCHITECTURE-24X7-AMENDMENT`

Cette ADR fige l'architecture de déploiement d'EXPANORA. L'amendement ci-dessous remplace uniquement la règle qui disait qu'un worker continu n'est pas obligatoire.

Elle **ne rouvre pas** ADR-0020, DEC-032 ni VALD-110.  
Elle **n'autorise** ni dépôt, ni DNS, ni base, ni secret, ni déploiement, ni service payant, ni modification de Nexus ou d'un autre module.

---

## Date

2026-09-22

## Contexte

L'architecture de déploiement proposée au gate précédent est approuvée sous réserve d'y intégrer les décisions OD-DEP-01 à OD-DEP-06, la sécurité des jobs, la résidence et le fail-closed.

---

## Décision

Martin valide :

```text
STATUS=EXPANORA_24X7_RUNTIME_ARCHITECTURE_AMENDED
PRODUCTION_RESERVED=expanora.tagora.ca
STAGING_RESERVED=expanora.staging.tagora.ca
NEXUS_ROUTE_RESERVED=/modules/expanora
NEXUS_TILE_VISIBLE=NO
DNS_CREATED=NO
WEB_API_PLATFORM=Vercel
PREFERRED_EXECUTION_REGION=Montreal / yul1
EXPANORA_WORKER_RUNTIME=LONG_LIVED_CLOUD_24X7
EXPANORA_24X7_RUNTIME_REQUIRED=YES
SCHEDULED_AND_EVENT_DRIVEN_REPLACE_PERMANENT_RUNTIME=NO
V1_PREFERRED_MODES=PERMANENT_RUNTIME_PLUS_SCHEDULED_AND_EVENTS
PERMANENT_DAEMON_REQUIRED_IN_V1=REPLACED_BY_24X7_REQUIREMENT
LONG_LIVED_WORKER_HOST_LOCKED=NO
EXPANORA_DATABASE_PLATFORM=Supabase Postgres
DATABASE_REGION=ca-central-1
STAGING_PROJECT=DEDICATED
PRODUCTION_PROJECT=DEDICATED
DATABASE_CREATED=NO
SECRET_BACKEND=SUPABASE_VAULT_OR_EQUIVALENT
VAULT_LOCK_IN=NO
TECHNICAL_LOGS=VERCEL + SUPABASE + SENTRY_OR_EQUIVALENT
BUSINESS_AUDIT_TRAIL=EXPANORA_DATABASE
FUTURE_HANDOFF_AUDIENCE=tagora_expanora
NEXUS_MODIFIED=NO
REGION_CHOICE_EQUALS_REGULATORY_COMPLIANCE=NO
PILOT_SHAPE=ONE_TENANT + ONE_BRAND + ONE_WORDPRESS
PILOT_MODE=ADVISOR
PILOT_INTEGRATIONS=READ_ONLY
X_PLOD_CONFIRMED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Le détail est dans [EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md).

Chaque job est idempotent, scopé, à retry et timeout bornés, observable, audité, budgété et soumis au kill switch. `TENANT_MISMATCH`, `BRAND_MISMATCH`, `AUTH_EXPIRED`, `CAPABILITY_ABSENT`, `APPROVAL_REQUIRED`, `BUDGET_BLOCKED`, `COMPLIANCE_BLOCKED`, `MARGIN_UNKNOWN` et `AUTOPILOT_FORBIDDEN` sont fail-closed.

### Prochaine étape

```text
NEXT_IMPLEMENTATION_GATE=NOT_AUTHORIZED
FUTURE_NEXUS_HANDOFF_GATE=NOT_AUTHORIZED
```

---

## Amendement — runtime permanent 24/7

```text
REPLACED_RULE=Un worker continu n'est pas obligatoire
NEW_RULE=EXPANORA_24X7_RUNTIME_REQUIRED=YES
CLOUD_LIVE=24_HOURS_7_DAYS
WEB_UI=CLOUD
API=CLOUD
GROWTH_ORCHESTRATOR=AVAILABLE_24X7
EXPANORA_WORKER_RUNTIME=LONG_LIVED_24X7
SCOUTS=PERMANENT
WEB_INTELLIGENCE=CONTINUOUS
SCHEDULED_JOBS=COMPLEMENTARY_ONLY
EVENT_DRIVEN_JOBS=COMPLEMENTARY_ONLY
HOST_LOCKED=NO
```

EXPANORA doit rester LIVE dans le cloud, 24 heures sur 24 et 7 jours sur 7. Le runtime permanent porte les scouts, la Web Intelligence continue, l'Opportunity Engine, la file, l'exécution des adapters et les jobs planifiés complémentaires.

Le fournisseur n'était pas choisi dans cet amendement. VALD-112 / ADR-0022 le fixe ensuite : Google Cloud Run worker pools, Montréal. Aucune ressource n'est créée par cette précision. Le coût reste à mesurer. Le code ne dépend pas d'un SDK Google.

Le runtime prévoit heartbeat, health checks, redémarrage automatique, supervision, surveillance d'uptime, logs structurés, métriques, alertes, retries bornés, santé de la file, du worker, des adapters et des fournisseurs IA, kill switch, et isolation tenant/marque fail-closed.

L'option 1 de cette ADR, qui écartait un daemon permanent, est remplacée par cet amendement. Railway reste non verrouillé. Vercel, Montréal / yul1, Supabase `ca-central-1`, la séparation Staging/Production, les secrets, l'audit, Nexus, la lecture seule, l'écriture WordPress désactivée, l'isolation et le statut candidat de X-Plod sont inchangés.

---

## Options considérées

1. **Daemon permanent non obligatoire** — décision initiale de VALD-111, **remplacée** par l'amendement 24/7.
2. **Verrouiller Railway ou un autre hôte dès maintenant** — rejetée. Le runtime 24/7 est exigé. Son fournisseur sera choisi ensuite.
3. **Une seule base Staging et Production** — rejetée. Projets Supabase dédiés et séparés.
4. **Logs techniques comme audit métier** — rejetée. L'audit métier est une table EXPANORA.
5. **Vercel + Supabase Postgres + coffre, sans créer l'infrastructure maintenant** — retenue.

---

## Conséquences

### Positives

- Les hôtes Web/API et base sont nommés, sans compte ni projet créé.
- Le Web, l'API, l'orchestrateur et le runtime de travail doivent rester LIVE 24/7. Le fournisseur du runtime n'est pas encore nommé.
- Les secrets dynamiques sont chiffrés, scopés, et absents des logs.
- L'audit métier peut reconstruire la décision, le refus et le coût.

### Négatives / contraintes

- Les domaines sont réservés dans cette ADR. Ils ne sont pas inscrits dans le DNS ni dans ADR-0004.
- Le fournisseur du runtime 24/7 reste à choisir. La rétention reste un sujet séparé.
- Le handoff Nexus n'est pas branché.

### Boundary

```text
ADR_0020_REOPENED=NO
REPO_CREATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DATABASE_CREATION_AUTHORIZED=NO
SECRET_CREATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PAID_SERVICE_ACTIVATION_AUTHORIZED=NO
NEXUS_WRITE_AUTHORIZED=NO
OTHER_MODULE_WRITE_AUTHORIZED=NO
```

---

## Modules impactés

TOS (documentation de déploiement seulement).  
EXPANORA : dépôt non créé.  
Nexus et les autres modules : **non touchés**.

---

## Références

- [EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md](../04_adoption_modules/EXPANORA_DEPLOYMENT_ARCHITECTURE_V1.md)
- [VALIDATION_VALD_111_ARCHITECTURE_DEPLOIEMENT_EXPANORA_V1.md](../10_knowledge/VALIDATION_VALD_111_ARCHITECTURE_DEPLOIEMENT_EXPANORA_V1.md)
- [ADR-0020](ADR-0020-ARCHITECTURE-EXPANORA-V1.md) — non réouverte
- [ADR-0004](ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md) — convention suivie, non amendée
- [ADR-0010](ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md) — pattern suivi, non amendé

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-111 | Architecture de déploiement EXPANORA V1, amendée sur le runtime 24/7 | **Validé — amendé** | Martin ST-Gelais — Direction | 2026-09-22 |
