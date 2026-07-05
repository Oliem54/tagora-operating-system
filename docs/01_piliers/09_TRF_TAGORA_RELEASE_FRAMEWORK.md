# TRF — TAGORA Release Framework

## Objectif

Définir le **cadre officiel de release** TAGORA : branches Git, versioning, QA avant production, déploiement, rollback, hotfix et validation humaine — **sans** créer de pipeline CI/CD dans ce dépôt.

## Portée

Tous les dépôts et modules TAGORA — processus de livraison contrôlée. Le TRF documente la **méthode** ; chaque module implémente dans son dépôt.

**Ce n'est pas** un outil de déploiement. C'est la **Constitution de livraison** de l'écosystème.

---

## Définition du TRF

Le **TAGORA Release Framework (TRF)** est le pilier TOS qui définit **comment** une version d'un module TAGORA passe du développement à la production de façon :

- **traçable** — commit, branche, responsable, date ;
- **validée** — QA, documentation, validation humaine selon risque ;
- **compréhensible** — changelog et release notes ;
- **réversible** — rollback documenté avant release critique.

---

## Rôle du TRF dans TOS

| Fonction | Description |
|---|---|
| **Cadre de livraison** | Règles communes release / déploiement / rollback |
| **Gate production** | QA minimale (TQF) + checklist release |
| **Cohérence inter-modules** | Même discipline Time, Stock, Voice, etc. |
| **Traçabilité TKS** | Releases significatives → registre décisions si impact écosystème |
| **Lien DevOps** | Principes sans imposer pipeline (STANDARD_DEVOPS) |

---

## TRF comme cadre de livraison contrôlée

| TRF fait | TRF ne fait pas |
|---|---|
| Documenter le processus release | Exécuter un déploiement |
| Exiger QA avant production | Remplacer les scénarios QA (TQF) |
| Définir versioning et changelog | Choisir l'outil CI/CD obligatoire |
| Exiger rollback documenté | Improviser un retour arrière en prod |
| Encadrer hotfix urgents | Contourner validation métier |

---

## Ce que TRF encadre

| Domaine | Description |
|---|---|
| **Branches Git** | `main` stable, `feature/*`, `fix/*`, `hotfix/*`, `docs/*` |
| **Commits** | Message clair, une intention par commit |
| **Pull requests** | Revue, traçabilité, merge contrôlé |
| **Versioning** | vMAJOR.MINOR.PATCH — voir [VERSIONING_STANDARD.md](../11_release/VERSIONING_STANDARD.md) |
| **Changelog** | Added, Changed, Fixed, Security — humain-readable |
| **QA avant release** | Smoke tests TQF minimum ; checklist release |
| **Release notes** | Communication direction, équipe, utilisateurs |
| **Déploiement** | Promotion staging → production documentée |
| **Rollback** | Plan écrit avant release critique |
| **Hotfix** | Périmètre minimal, traçabilité, revue post-hotfix |
| **Validation humaine** | Obligatoire pour releases critiques |

Références : `docs/11_release/`

---

## Ce que TRF ne doit pas faire

1. **Remplacer le QA** — TQF reste le gate qualité ; TRF structure la release.
2. **Contourner la validation métier** — approbations, permissions, règles Time restent humaines.
3. **Pousser directement en production sans contrôle** — pas de bypass checklist release critique.
4. **Mélanger les modules** — une release = un dépôt / un contexte métier.
5. **Exposer des secrets** — jamais dans Git ni documentation TOS.
6. **Automatiser un déploiement critique sans validation** — HITL + approbation selon risque.

---

## Lien avec les autres piliers

| Pilier | Lien avec TRF |
|---|---|
| **TES** | Validation avant code alimente le contenu des PR ; branches et commits |
| **TQF** | Smoke tests et scénarios QA gate la release |
| **TKS** | ADR release transverses ; leçons post-release |
| **TAF** | Agents IA ne déploient pas ; rapports release documentés |
| **TOF** | Activation workflow production alignée TRF (documentation, test, approbation) |
| **TMF** | Monitoring post-release ; détection régressions |

---

## Application progressive à TAGORA Time

Le TRF sera appliqué à **TAGORA Time** après TQF, TDS, TES, TKS, TAF et TOF (voir [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)).

| Principe | Application Time |
|---|---|
| Release documentée | Checklist + release notes pour changements importants |
| QA gate | Smoke tests avant promotion production |
| Migrations identifiées | Avant release si changement schéma |
| Hotfix traçables | Périmètre minimal, post-mortem si urgent |
| Rollback pensé | Avant changements critiques punch / permissions |
| Time indépendant | Dépôt séparé ; TRF = cadre TOS |

---

## Éléments à documenter plus tard

- Choix CI/CD par module (ADR)
- Stratégie déploiement (rolling, blue/green)
- Templates PR GitHub/GitLab (hors TOS)
- Registre des releases par module
- Intégration TMF alertes post-release

---

## Références

- [README_RELEASE_FRAMEWORK.md](../11_release/README_RELEASE_FRAMEWORK.md)
- [RELEASE_CHECKLIST_STANDARD.md](../11_release/RELEASE_CHECKLIST_STANDARD.md)
- [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md)
- [STANDARD_DEVELOPPEMENT.md](../02_standards/STANDARD_DEVELOPPEMENT.md)
- [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md)

## Statut

**Enrichi — Phase 3G**
