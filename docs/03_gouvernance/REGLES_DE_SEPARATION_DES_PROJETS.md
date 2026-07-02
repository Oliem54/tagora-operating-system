# Règles de séparation des projets — Gouvernance TOS

## Objectif

Définir la **séparation stricte** des projets TAGORA — dépôts, responsabilités et contextes métier.

## Portée

TOS, applications métier, TCP, TOF — tout l'écosystème TAGORA.

---

## Règle fondamentale

**Les standards sont communs. Les contextes métier restent séparés.**

TOS unifie la **méthode** ; chaque module garde son **métier**, son **dépôt** et son **cycle de vie**.

---

## Séparation par entité

| Entité | Mission | Indépendance |
|---|---|---|
| **TOS** | Constitution documentaire | Ne absorbe aucun module métier |
| **TAGORA Time** | Horodateur, gestion du temps | Dépôt et équipe produit propres |
| **Stock Premium** | Inventaire | Idem |
| **Voice** | Voix / temps réel | Idem |
| **Mail IA** | Messagerie IA | Idem |
| **Pulse** | Monitoring / analytics | Idem |
| **Platform** | Hub plateforme (à préciser) | Idem |
| **TCP** (futur) | Briques communes code | Hors TOS ; pas de métier spécifique module |
| **TOF** (futur) | Orchestration | Pas de logique métier critique seule |

---

## Règles

1. **TOS ne doit pas absorber les modules métier** — pas de code Time dans TOS.
2. **Chaque module reste indépendant** — release, backlog, ADR locaux possibles.
3. **Interdiction de mélanger les décisions** d'un module dans un autre **sans validation** (ADR ou gouvernance si transverse).
4. **Traçabilité des décisions communes** — standards écosystème dans TOS/TKS ; décisions locales dans le dépôt module.
5. **Ne pas dupliquer TCP** dans un module sans ADR.
6. **Ne pas placer logique métier critique** dans TOF ou TOS.

---

## Anti-patterns interdits

- Fusionner Time et TOS en un seul dépôt.
- Implémenter règles horodateur dans TOS ou TOF seul.
- Copier une décision Stock Premium dans Time sans analyse d'impact.
- Créer un « monolithe TAGORA » applicatif sans décision ADR.

---

## Lien TES

Le TES **opérationnalise** cette séparation via validation avant code et architecture documentée.

Voir [STANDARD_ARCHITECTURE.md](../02_standards/STANDARD_ARCHITECTURE.md).

---

## Éléments à documenter plus tard

- Cartographie dépôts officielle (URLs, propriétaires)
- Règles contribution cross-repo
- Processus extraction vers TCP

## Statut

**Enrichi — Phase 3C** — Séparation stricte formalisée.
