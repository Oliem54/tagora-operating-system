# TMF — TAGORA Monitoring Framework

## Objectif

Définir le **cadre officiel de monitoring, observabilité, logs, alertes, métriques, incidents et suivi post-release** TAGORA — **sans** créer d'outil, dashboard ou alerte réelle dans ce dépôt.

## Portée

Tous les modules TAGORA — santé technique, détection d'erreurs, suivi après déploiement. Le TMF documente la **méthode** ; chaque module implémente dans son dépôt.

**Ce n'est pas** une application métier. C'est la **Constitution d'observabilité** de l'écosystème.

---

## Définition du TMF

Le **TAGORA Monitoring Framework (TMF)** est le pilier TOS qui définit **comment** un module TAGORA reste **observable, traçable et réactif** en production de façon :

- **sécurisée** — aucun secret dans logs, alertes ou rapports ;
- **actionnable** — alertes utiles, incidents qualifiés, métriques décisionnelles ;
- **progressive** — observabilité minimale d'abord, dashboards et SLI/SLO ensuite ;
- **connectée** — suivi post-release (TRF), workflows (TOF), leçons apprises (TKS).

---

## Rôle du TMF dans TOS

| Fonction | Description |
|---|---|
| **Cadre d'observabilité** | Logs, erreurs, alertes, métriques, incidents |
| **Suivi post-release** | Surveillance après déploiement (lien TRF) |
| **Santé des modules** | Visibilité disponibilité, performance, erreurs |
| **Traçabilité TKS** | Incidents significatifs → leçons apprises |
| **Lien DevOps** | Complète livraison (TRF) par observation en production |

---

## TMF comme cadre d'observabilité, de suivi et d'incidents

| TMF fait | TMF ne fait pas |
|---|---|
| Documenter standards logs et alertes | Implémenter Sentry, Datadog ou autre outil |
| Exiger détection erreurs critiques | Remplacer le QA (TQF) |
| Définir cycle de vie incident | Remplacer décisions humaines |
| Encadrer suivi post-release | Stocker données sensibles inutilement |
| Préparer dashboards futurs | Devenir une application métier |
| Lier métriques à décisions | Exposer secrets ou contourner permissions |

---

## Ce que TMF encadre

| Domaine | Description |
|---|---|
| **Logs** | Technique, sécurité, métier, audit, orchestration, release |
| **Erreurs** | Classification, reporting, propriétaire, action recommandée |
| **Alertes** | Niveaux info / warning / urgent / critique — actionnables |
| **Métriques** | Disponibilité, performance, erreurs, usage, qualité, release |
| **Incidents** | Cycle détecté → résolu → documenté ; post-mortem si nécessaire |
| **Performance** | Temps de réponse, dégradations détectables |
| **Suivi post-release** | Surveillance après déploiement critique |
| **Santé des modules** | Signaux minimum par module critique |
| **Audit technique** | Traces sans données personnelles inutiles |
| **Tableaux de bord futurs** | Opérationnel, direction, technique — non implémentés |

Références : `docs/12_monitoring/`

---

## Ce que TMF ne doit pas faire

1. **Remplacer le QA** — TQF valide avant release ; TMF observe après.
2. **Exposer des secrets** — mots de passe, tokens, clés API interdits dans logs et rapports.
3. **Stocker des données sensibles inutilement** — minimiser PII dans télémétrie.
4. **Remplacer les décisions humaines** — escalade humaine pour alertes critiques.
5. **Contourner les permissions** — observabilité ≠ accès métier non autorisé.
6. **Devenir une application métier** — TOS documente ; modules implémentent.

---

## Lien avec les autres piliers

| Pilier | Lien avec TMF |
|---|---|
| **TES** | Instrumentation prévue dès conception ; logs sans secret |
| **TQF** | QA avant prod ; TMF détecte régressions post-release |
| **TKS** | Incidents documentés ; leçons apprises ; post-mortem |
| **TAF** | Agents IA ne modifient pas prod ; rapports observabilité documentés |
| **TOF** | Workflows en échec détectables ; logs orchestration |
| **TRF** | Suivi post-release obligatoire pour releases critiques |

---

## Application progressive à TAGORA Time

Le TMF sera appliqué à **TAGORA Time** après TQF, TDS, TES, TKS, TAF, TOF et TRF (voir [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)).

| Principe | Application Time |
|---|---|
| Logs sans secret | Stratégie logs punch, auth, permissions |
| Erreurs détectables | Punch, GPS, feuilles de temps, permissions |
| Suivi post-release | Après releases Time importantes |
| Incidents documentés | TKS si incident validé |
| Time indépendant | Dépôt séparé ; TMF = cadre TOS |

---

## Éléments à documenter plus tard

- Choix stack observabilité par module (ADR)
- SLI/SLO par type de service
- Politique rétention logs et conformité
- Intégration alertes avec outils externes (sans imposer)
- Registre incidents par module
- Dashboards opérationnels réels

---

## Références

- [README_MONITORING_FRAMEWORK.md](../12_monitoring/README_MONITORING_FRAMEWORK.md)
- [LOGGING_STANDARD.md](../12_monitoring/LOGGING_STANDARD.md)
- [POST_RELEASE_MONITORING_STANDARD.md](../12_monitoring/POST_RELEASE_MONITORING_STANDARD.md)
- [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md)
- [TRF](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)

## Statut

**Enrichi — Phase 3H**
