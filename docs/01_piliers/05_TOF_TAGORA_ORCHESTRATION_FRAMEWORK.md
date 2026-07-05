# TOF — TAGORA Orchestration Framework

## Objectif

Définir le **cadre officiel d'orchestration** de l'écosystème TAGORA : workflows, événements, tâches planifiées, reprise, logs et validation humaine — **sans** remplacer la logique métier des modules.

## Portée

Orchestration transverses — tous modules TAGORA. Le TOF documente **comment** coordonner ; il n'implémente pas n8n, LangChain ni un event bus dans ce dépôt.

**Ce n'est pas** une application métier. C'est la **méthode** pour structurer les automatisations futures de façon traçable et sécuritaire.

---

## Définition du TOF

Le **TAGORA Orchestration Framework (TOF)** est le pilier TOS qui définit :

- comment les workflows automatisés sont conçus, documentés et validés ;
- comment les événements inter-modules sont définis comme **contrats** ;
- comment la reprise, les erreurs et les logs d'orchestration sont gérés ;
- quand une **validation humaine** est obligatoire avant ou après une action.

Le TOF **orchestre** la coordination entre systèmes. Il ne **décide** pas du métier (punch, paie, permissions, facturation, etc.).

---

## Rôle du TOF dans TOS

| Fonction | Description |
|---|---|
| **Cadre d'orchestration** | Standards communs pour workflows, événements et tâches planifiées |
| **Séparation des responsabilités** | Orchestration ≠ logique métier des modules |
| **Traçabilité** | Logs, rapports et registre des workflows documentés (TKS) |
| **Sécurité** | Pas de secrets dans la doc ; permissions limitées ; validation humaine pour actions critiques |
| **Interopérabilité** | Contrats d'événements compatibles avec la gouvernance inter-modules |
| **Préparation future** | n8n, LangChain et workflow engine comme **outils possibles**, non obligatoires |

---

## TOF comme cadre d'orchestration, pas comme logique métier

| TOF fait | TOF ne fait pas |
|---|---|
| Documenter un workflow de notification | Calculer les heures travaillées |
| Définir un contrat d'événement `Timesheet Submitted` | Approuver une feuille de temps |
| Encadrer retry et reprise d'une tâche | Modifier des données de paie |
| Exiger validation humaine avant escalade | Contourner les permissions d'un module |
| Tracer une exécution d'orchestration | Remplacer l'application TAGORA Time |

**Règle fondamentale :** le TOF orchestre ; il ne remplace jamais la logique métier.

---

## Ce que TOF encadre

| Domaine | Description |
|---|---|
| **Workflows automatisés** | Enchaînements documentés (notification, rappel, rapport, escalade) |
| **Enchaînement d'événements** | Réaction à un événement domaine selon contrat documenté |
| **Tâches planifiées** | Exécutions récurrentes (rappels, synthèses) — documentées et désactivables |
| **Intégrations futures** | Points d'entrée/sortie entre modules — sans implémentation imposée |
| **Retry / reprise** | Règles de nouvelle tentative, idempotence, compensation documentée |
| **Logs d'orchestration** | Trace factuelle : qui, quoi, quand, résultat (sans secret) |
| **Erreurs** | Classification, escalade, arrêt sécurisé, notification responsable |
| **Validation humaine** | Points obligatoires avant action critique (aligné TAF / HITL) |
| **Contrats d'événements** | Schéma documentaire : nom, source, données minimales, interdites |

Références détaillées : `docs/08_orchestration/`

---

## Ce que TOF ne doit pas faire

1. **Remplacer les règles métier des modules** — punch, congés, stock, facturation restent dans chaque application.
2. **Modifier des données critiques sans validation** — approbation, paie, suppression, correction de temps = humain.
3. **Lire des secrets** — credentials, `.env`, clés API hors périmètre documentaire TOS.
4. **Mélanger les responsabilités entre modules** — un workflow Time ne modifie pas Stock Premium sans contrat explicite.
5. **Contourner les permissions** — l'orchestration respecte les rôles et accès de chaque module.
6. **Devenir une application métier** — le TOF ne devient pas un horodateur, un ERP ou un CRM.

---

## Lien avec les autres piliers

| Pilier | Lien avec TOF |
|---|---|
| **TAF** (IA) | Chaînes IA et agents sous gouvernance TAF ; orchestration IA ≠ décision métier ; validation humaine partagée |
| **TKS** (Knowledge) | Workflows, événements et décisions d'orchestration tracés ; registres et ADR si impact écosystème |
| **TES** (Engineering) | Validation avant code pour implémentation workflow ; séparation projets ; sécurité |
| **TQF** (Quality) | Tests et smoke tests avant activation workflow en production |
| **TRF** (Release) | Déploiement et activation de workflows alignés sur le cycle release |
| **TMF** (Monitoring) | Observabilité des exécutions, alertes, métriques d'orchestration |

---

## Application progressive à TAGORA Time

Le TOF sera appliqué à **TAGORA Time** après TQF, TDS, TES, TKS et TAF (voir [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)).

| Principe | Application Time |
|---|---|
| Workflows séparés du métier | Notification oubli punch ≠ logique punch |
| Documentation avant implémentation | ORCH-TIME-XXX documenté avant n8n ou code |
| Événements comme contrats | `Employee Punched In` documenté, non implémenté dans TOS |
| Validation humaine | Approbation feuille de temps, paie, suppression = humain |
| Time indépendant | Application métier séparée ; TOF = cadre TOS |

---

## Éléments à documenter plus tard

- Choix technologique workflow engine (ADR)
- Choix technologique event bus (ADR)
- Catalogue complet des événements transverses
- Environnements n8n (dev, staging, prod) — hors TOS
- SLA par catégorie de workflow
- Dashboard monitoring orchestration (TMF)
- Patterns saga, compensation avancée
- Intégration credentials (hors TOS, jamais dans la documentation)

---

## Références

- [N8N_STANDARD.md](../08_orchestration/N8N_STANDARD.md)
- [LANGCHAIN_STANDARD.md](../08_orchestration/LANGCHAIN_STANDARD.md)
- [WORKFLOW_ENGINE_STANDARD.md](../08_orchestration/WORKFLOW_ENGINE_STANDARD.md)
- [EVENT_BUS_STANDARD.md](../08_orchestration/EVENT_BUS_STANDARD.md)
- [ORCHESTRATION_REGISTRE.md](../08_orchestration/ORCHESTRATION_REGISTRE.md)
- [ORCHESTRATION_REPORTING_STANDARD.md](../08_orchestration/ORCHESTRATION_REPORTING_STANDARD.md)
- [TAF](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- [STANDARD_ORCHESTRATION.md](../02_standards/STANDARD_ORCHESTRATION.md)

## Statut

**Enrichi — Phase 3F**
