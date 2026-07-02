# Constitution officielle — TAGORA Operating System

## Objectif

Établir le texte fondateur du TAGORA Operating System comme référence absolue et durable pour tous les développements de l'écosystème TAGORA.

## Portée

Tous les projets TAGORA — actuels et futurs — sans exception.

---

## Nature du projet

Le TAGORA Operating System (TOS) est le **projet fondateur** de l'écosystème logiciel TAGORA. Il n'a pas de utilisateurs finaux, pas d'interface applicative et pas de logique métier propre.

TOS est un **corpus documentaire officiel** : standards, méthodes, règles de gouvernance et cadres de référence que les applications TAGORA adopteront progressivement.

Ce dépôt est la **Constitution** de l'écosystème — la source de vérité méthodologique, pas un produit livrable.

---

## Ce que TOS est

- La **Constitution méthodologique** de l'écosystème TAGORA.
- La **référence officielle** pour l'architecture, le développement, l'UX/UI, la QA, l'IA, l'orchestration, le design, la gouvernance et la documentation.
- Un **système d'exploitation méthodologique** : il définit comment construire, pas ce que les applications font métier.
- La **mémoire structurante** de l'écosystème, complétée par le TKS (décisions, ADR, historique).
- Le **cadre de convergence** vers lequel tous les modules TAGORA tendent progressivement.
- Un corpus **générique et durable** — conçu pour rester valable sur plusieurs années.

---

## Ce que TOS n'est pas

- **Pas une application métier** — pas d'horodateur, pas de stock, pas de CRM dans ce dépôt.
- **Pas un framework exécutable** — pas de code applicatif, pas de librairie installable.
- **Pas une librairie Core (TCP)** — TCP sera documenté ici, mais implémenté ailleurs.
- **Pas un remplacement des logiques métier** — les règles critiques restent dans chaque application.
- **Pas un outil d'orchestration (TOF)** — le TOF orchestre ; TOS documente ses règles.
- **Pas un dépôt de secrets, de configuration ou de données** — aucun `.env`, aucun credential.
- **Pas un substitut aux équipes produit** — TOS guide ; les modules décident de leur périmètre métier.

---

## Vision 2030

Construire un écosystème logiciel **unifié, cohérent, moderne et évolutif** où chaque application TAGORA donne l'impression d'appartenir à une seule grande plateforme.

L'utilisateur doit **reconnaître immédiatement la signature TAGORA** — visuelle, fonctionnelle et qualitative — comparable à l'expérience Google Workspace ou Microsoft 365.

L'objectif n'est pas seulement de partager du code, mais de partager une vision, une architecture, une image de marque, une expérience utilisateur, une qualité constante, une sécurité uniforme et des méthodes communes de développement, QA, IA, DevOps et documentation.

Voir le document détaillé : [01_VISION_2030.md](01_VISION_2030.md).

---

## Rôle de TOS dans l'écosystème

| Rôle | Description |
|---|---|
| **Référence** | Tous les modules consultent TOS avant de créer leurs propres standards locaux. |
| **Convergence** | TOS définit la direction ; chaque module y converge à son rythme. |
| **Gouvernance** | TOS fixe les règles de décision, validation et compatibilité inter-modules. |
| **Mémoire** | Via TKS et les ADR, TOS préserve les décisions et évite de réinventer. |
| **Pilote** | TAGORA Time valide les standards en conditions réelles avant généralisation. |

TOS ne **remplace** aucun module. Il les **aligne**.

---

## Ordre méthodologique officiel

Tout développement significatif dans l'écosystème TAGORA suit cet ordre, sans exception :

```
Documentation → Architecture → Code → QA → Production
```

| Étape | Signification |
|---|---|
| **Documentation** | Besoin, périmètre, règles métier et critères d'acceptation écrits avant tout code. |
| **Architecture** | Structure, boundaries et décisions significatives documentées (ADR si applicable). |
| **Code** | Implémentation alignée avec les standards TOS applicables. |
| **QA** | Scénarios reproductibles, comptes QA, tests (dont Playwright) validés. |
| **Production** | Déploiement uniquement après validation QA conforme au TQF. |

Contourner une étape sans justification documentée est une dérogation, pas une pratique normale.

---

## Règle de convergence progressive des modules

- Tous les modules TAGORA **convergent vers TOS**, sans calendrier unique imposé à tous.
- La convergence est **progressive** : pas de big bang, pas de refonte forcée.
- Chaque module documente son **état d'adoption** et ses **écarts temporaires** acceptés.
- Les standards validés sur **TAGORA Time** (pilote) servent de référence pour les autres modules.
- Un module peut avancer sur un pilier (ex. TDS) avant un autre (ex. TOF) — la convergence est par pilier, pas tout-ou-rien.

---

## Règle de non-remplacement des logiques métier

- Les **règles métier critiques** restent **toujours** dans les applications métier concernées.
- Le **TOF** orchestre des workflows transverses ; il ne porte pas la logique métier critique seul.
- Le **TCP** fournit des briques communes ; il n'embarque pas la spécificité métier d'un module.
- Le **TBF** documente les règles métier transverses ; chaque application les implémente.
- **TOS** documente et gouverne ; il n'exécute rien.

> *Le TOF orchestre. Il ne remplace jamais la logique métier.*

---

## Les dix piliers

| Sigle | Nom | Rôle synthétique |
|---|---|---|
| TES | TAGORA Engineering System | Développement, architecture, Git, DevOps, sécurité |
| TDS | TAGORA Design System | Image de marque, UX/UI, composants, accessibilité |
| TQF | TAGORA Quality Framework | QA, Playwright, comptes QA, scénarios reproductibles |
| TAF | TAGORA AI Framework | Agents IA, prompts, limites d'intervention |
| TOF | TAGORA Orchestration Framework | n8n, LangChain, workflows — orchestration uniquement |
| TKS | TAGORA Knowledge System | ADR, décisions, mémoire permanente |
| TCP | TAGORA Core Platform | Briques communes (auth, permissions, audit, etc.) |
| TBF | TAGORA Business Framework | Règles métier transverses |
| TRF | TAGORA Release Framework | Git, CI/CD, versioning, release |
| TMF | TAGORA Monitoring Framework | Logs, observabilité, alertes, incidents |

---

## Décisions non encore validées

Les points suivants sont **reconnus comme ouverts** — aucune décision finale n'est imposée à ce stade :

- Stack technologique par module (langages, frameworks, bases de données).
- Architecture technique détaillée du TCP et calendrier d'implémentation.
- Choix des outils d'orchestration (n8n, LangChain) — standards documentés, outillage à valider.
- Palette couleurs, typographie et bibliothèque de composants UI définitifs (TDS).
- Processus formel d'amendement constitutionnel et autorités de validation.
- Niveaux de conformité obligatoire vs recommandée par pilier.
- Calendrier de convergence détaillé par module (hors pilote Time).
- Politique de versioning de la documentation TOS elle-même.

Ces sujets seront tranchés via ADR (TKS) ou validation humaine explicite — jamais par supposition dans ce document.

---

## Statut du document

**Enrichi — Phase 2** — Base constitutionnelle structurée. Validation humaine formelle à confirmer.

Référence ADR associée : [ADR-0001 — TOS comme Constitution méthodologique](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md).

---

## Éléments à documenter plus tard

- Processus d'amendement constitutionnel
- Autorités de validation et gouvernance
- Niveaux de conformité obligatoire vs recommandée
- Calendrier de convergence par module
- Mécanisme de dérogation temporaire
