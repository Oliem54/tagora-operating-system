# TES — TAGORA Engineering System

## Objectif

Définir le **standard officiel de développement** de l'écosystème TAGORA : architecture, code, conventions, Git, DevOps, sécurité et validation.

## Portée

Tous les projets de développement TAGORA — backend, frontend, infrastructure et outillage. Pilote : **TAGORA Time**.

---

## Définition du TES

Le **TAGORA Engineering System (TES)** est le pilier TOS qui encadre **comment** les modules TAGORA sont conçus, développés, validés, sécurisés et livrés — sans imposer une stack technique finale ni une architecture unique prématurée.

Le TES traduit l'ordre méthodologique officiel en pratiques d'ingénierie :

```
Documentation → Architecture → Code → QA → Production
```

---

## Rôle du TES dans TOS

| Fonction | Description |
|---|---|
| **Cadre méthodologique** | Règles de développement communes à l'écosystème |
| **Anti-chaos** | Éviter code, refontes et dépendances non cadrées |
| **Pont entre piliers** | Relie TQF, TDS, TKS, TRF, TMF dans le cycle de vie |
| **Référence progressive** | Standards adoptés module par module, Time en premier |

TOS **documente** le TES. Les dépôts modules **appliquent**.

---

## Périmètre

| Domaine | Contenu TES |
|---|---|
| **Architecture** | Boundaries, séparation modules, ADR — [STANDARD_ARCHITECTURE.md](../02_standards/STANDARD_ARCHITECTURE.md) |
| **Code** | Principes développement, simplicité — [STANDARD_DEVELOPPEMENT.md](../02_standards/STANDARD_DEVELOPPEMENT.md) |
| **Conventions** | Nommage, structure — à définir par module |
| **Git** | Workflow, branches — via TRF |
| **DevOps** | Environnements, déploiement — [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md) |
| **Sécurité** | Secrets, rôles, audit — [STANDARD_SECURITE.md](../02_standards/STANDARD_SECURITE.md) |
| **Validation** | Avant code — [REGLES_DE_VALIDATION_AVANT_CODE.md](../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md) |

---

## Ce que le TES encadre

- Processus de validation avant développement important.
- Séparation stricte des projets et contextes métier.
- Documentation et traçabilité des décisions (TKS / ADR).
- Préparation QA et sécurité avant production.
- Principes de release et livraison (TRF).
- Compatibilité inter-modules sans fusion.

---

## Ce que le TES ne remplace pas

- **Logique métier** — reste dans les applications (Time, Stock Premium, etc.).
- **TOS** — Constitution documentaire, pas exécutable.
- **TCP** — briques communes implémentées ailleurs.
- **TOF** — orchestration, pas développement applicatif.
- **Décisions produit** — TES cadre la méthode, pas le backlog métier.

---

## Liens avec les autres piliers

| Pilier | Lien TES |
|---|---|
| **TQF** | QA avant production ; scénarios avant merge critique |
| **TDS** | Impact UX identifié avant code UI |
| **TKS** | ADR et mémoire des décisions d'ingénierie |
| **TRF** | Git, PR, release, rollback, changelog |
| **TMF** | Observabilité post-déploiement (complément DevOps) |

---

## Application progressive — TAGORA Time

| Priorité TES Time | Action |
|---|---|
| 1 | Validation avant code ([FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)) |
| 2 | Séparation projets — Time ≠ TOS |
| 3 | Sécurité secrets et environnements |
| 4 | Préparation QA avant production |
| 5 | ADR pour décisions Time impactant l'écosystème ([ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)) |

---

## Décisions à valider plus tard

- Stack technologique par module (langages, frameworks, BDD).
- Architecture Core (TCP) et librairies communes.
- Stratégie multi-app, API, authentification commune.
- Workflow Git détaillé (branches, PR).
- Pipeline CI/CD final.
- Conventions de nommage et linting.

---

## Principes

- Architecture avant code.
- Sécurité dès la conception.
- Simplicité avant suringénierie.
- Traçabilité via TKS.
- Pas de technologie sans validation documentée.

## Statut

**Enrichi — Phase 3C** — Cadre TES opérationnel. Stack et architecture détaillée : à valider.
