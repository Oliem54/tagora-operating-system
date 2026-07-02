# ADR-0001 — TOS comme Constitution méthodologique, pas comme application

## Statut

**Accepté initialement — à valider humainement**

Cette décision est inscrite comme fondation officielle du projet. Une validation humaine explicite confirmera son statut définitif.

## Date

2026-07-02

---

## Contexte

L'écosystème TAGORA regroupe plusieurs applications métier (Time, Stock Premium, Voice, Mail IA, Pulse, Platform, etc.) développées ou à développer de manière relativement indépendante.

Sans cadre commun, les risques sont :

- Interfaces disparates, qualité inégale, méthodes de travail différentes.
- Duplication de standards, de briques et de décisions.
- Perte de mémoire organisationnelle (décisions non documentées).
- Confusion entre « construire une app plateforme » et « définir comment construire ».

Le projet **TAGORA Operating System** a été créé pour répondre à ce besoin. Il fallait trancher sa nature exacte avant tout développement ultérieur.

---

## Décision

**Le TAGORA Operating System ne sera pas développé comme une application métier.**

Il servira de **référence méthodologique, documentaire, architecturale, QA, design, IA, orchestration et gouvernance** pour tous les projets TAGORA.

Concrètement :

- TOS est un **dépôt documentaire** (Constitution + standards + gouvernance + ADR).
- TOS **ne contient pas** de logique métier, de framework exécutable, de librairie Core ni de composants UI implémentés.
- Chaque application TAGORA **converge progressivement** vers les standards TOS, à son rythme.
- **TAGORA Time** est le premier projet pilote de cette convergence.

---

## Raisons

1. **Clarté de mission** — Séparer « définir les règles » de « construire les produits » évite un monolithe hybride ingérable.
2. **Durabilité** — Une Constitution documentaire survit aux changements technologiques ; une app plateforme vieillit avec sa stack.
3. **Autonomie des modules** — Time, Stock Premium et les autres gardent leur métier et leur équipe ; TOS les aligne sans les absorber.
4. **Mémoire permanente** — TKS et les ADR centralisent les décisions ; elles ne disparaissent pas avec un départ ou un refactoring.
5. **Convergence progressive** — Imposer une plateforme unique d'un coup est irréaliste ; documenter d'abord permet d'adopter par étapes.

---

## Conséquences positives

- Chaque développeur, agent IA ou gestionnaire sait **où chercher** la référence officielle.
- TAGORA Time peut valider les standards en conditions réelles **sans attendre** une plateforme technique complète.
- Les futurs modules héritent d'une base documentaire prête — pas d'invention ad hoc.
- Réduction du risque de mélanger orchestration (TOF), briques communes (TCP) et Constitution (TOS).
- Alignement avec la vision 2030 : écosystème unifié, modules autonomes.

---

## Risques

| Risque | Description |
|---|---|
| **TOS ignoré** | Les équipes continuent sans consulter la Constitution. |
| **TOS sur-documenté** | Trop de standards avant validation terrain — paperasse sans effet. |
| **Confusion TOS / TCP** | Attente d'une librairie Core dans le dépôt TOS. |
| **Fusion implicite** | Tentative de faire de TOS une application ou un monolithe. |
| **Validation différée** | ADR acceptés initialement mais jamais confirmés humainement. |

---

## Garde-fous

1. **Interdiction explicite** — TOS ne contient pas de code applicatif, framework, composants React, librairie Core ni logique métier.
2. **Séparation des dépôts** — TOS documente ; TCP, TOF et les apps implémentent ailleurs.
3. **Pilote Time** — Toute généralisation passe par validation sur TAGORA Time.
4. **ADR obligatoires** — Décisions significatives tracées dans TKS ; pas de décision implicite.
5. **Décisions ouvertes listées** — Technologies et détails non validés restent explicitement « à décider ».
6. **Validation humaine** — Cet ADR reste « à valider humainement » jusqu'à confirmation formelle.

---

## Impact sur TAGORA Time

- Time est le **premier module** à appliquer progressivement les standards TOS.
- Time **reste une application métier indépendante** — horodateur, règles métier Time, dépôt Time.
- Time adopte en priorité : **TQF** (QA), **TDS** (design), **TES** (validation avant code), **TKS** (ADR et mémoire).
- Les écarts temporaires de Time sont documentés, pas cachés.
- Les retours d'expérience Time **alimentent** TOS avant généralisation aux autres modules.

---

## Impact sur les futurs modules

- Stock Premium, Voice, Mail IA, Pulse, Platform et tout futur module **consultent TOS** avant de créer des standards locaux.
- Ils **réutilisent** les standards validés sur Time plutôt que de réinventer.
- Ils documentent leur **plan d'adoption progressive** dans `docs/04_adoption_modules/`.
- Ils **ne fusionnent pas** avec TOS — même règle que Time.
- Les décisions impactant plusieurs modules produisent un **ADR** dans TKS.

---

## Modules impactés

- **TOS** — Nature et périmètre du dépôt définitivement orientés documentation.
- **TAGORA Time** — Projet pilote désigné.
- **Écosystème** — Tous les modules actuels et futurs.

## Références

- [Constitution officielle](../00_constitution/00_CONSTITUTION_OFFICIELLE_TAGORA_OPERATING_SYSTEM.md)
- [Vision 2030](../00_constitution/01_VISION_2030.md)
- [Application progressive TAGORA Time](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [Règles de séparation des projets](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
