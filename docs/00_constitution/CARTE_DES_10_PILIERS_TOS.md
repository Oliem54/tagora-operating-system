# Carte officielle des 10 piliers — TAGORA Operating System

## Objectif

Présenter la **carte de référence** des dix piliers constitutionnels du TAGORA Operating System — rôle, maturité, dépendances et application progressive.

## Portée

Écosystème TAGORA entier. Ce document est une **vue synthèse** ; le détail de chaque pilier se trouve dans `docs/01_piliers/`.

---

## Nature de TOS

Le **TAGORA Operating System (TOS)** est une **Constitution méthodologique** — corpus documentaire de standards, règles et cadres. **TOS n'est pas une application.** Il ne remplace aucun module métier.

Les **modules restent indépendants** : dépôt séparé, logique métier propre, équipe produit propre. TOS **coordonne et aligne** ; il ne **fusionne** pas.

---

## Tableau des 10 piliers

| # | Acronyme | Nom complet | Rôle principal | Maturité documentaire | Dépendances principales | Application progressive Time | Éléments à compléter plus tard |
|---|---|---|---|---|---|---|---|
| 1 | **TES** | TAGORA Engineering System | Méthode de développement, validation avant code, architecture, sécurité, DevOps | **Exploitable** — Phase 3C | TKS, TQF, TRF | Priorité 3 — validation avant code, séparation projets | Conventions par langage, stack validée |
| 2 | **TDS** | TAGORA Design System | UX/UI, image de marque, composants, accessibilité | **Exploitable** — Phase 3B | TQF, TKS | Priorité 2 — cohérence visuelle | Palette/typo finales, lib composants |
| 3 | **TQF** | TAGORA Quality Framework | QA, scénarios, smoke tests, comptes QA | **Exploitable** — Phase 3A | TES, TKS, TRF | Priorité 1 — QA minimale gate release | Automatisation Playwright Time |
| 4 | **TAF** | TAGORA AI Framework | Agents IA encadrés, prompts, limites, HITL | **Exploitable** — Phase 3E | TKS, TES, TQF, TOF | Priorité 5 — agents documentés, pas réels | Premier agent Time validé |
| 5 | **TOF** | TAGORA Orchestration Framework | Workflows, event bus, orchestration sans métier | **Exploitable** — Phase 3F | TAF, TKS, TES, TMF | Priorité 6 — ORCH-TIME brouillon | Implémentation n8n/LangChain |
| 6 | **TKS** | TAGORA Knowledge System | ADR, décisions, mémoire, leçons apprises | **Exploitable** — Phase 3D | — (supporte tous) | Priorité 4 — traçabilité décisions | Validations humaines ADR |
| 7 | **TCP** | TAGORA Core Platform | Briques communes (auth, permissions, audit) | **Partiel** — squelette | TES, TBF, TQF, TRF, TMF | **Plus tard** — après piliers opérationnels | Architecture TCP, calendrier implémentation |
| 8 | **TBF** | TAGORA Business Framework | Règles métier transverses documentées | **Partiel** — squelette | TKS, TES, TQF, TCP | **Plus tard** — sans refonte Time | Règles transverses par domaine |
| 9 | **TRF** | TAGORA Release Framework | Release, versioning, rollback, hotfix | **Exploitable** — Phase 3G | TES, TQF, TKS, TMF | Priorité 7 — checklist release | Pipeline CI/CD par module |
| 10 | **TMF** | TAGORA Monitoring Framework | Logs, alertes, métriques, incidents, post-release | **Exploitable** — Phase 3H | TES, TRF, TOF, TKS | Priorité 8 — observabilité minimale | Stack observabilité, dashboards |

---

## Légende maturité

| Niveau | Signification |
|---|---|
| **Exploitable** | Standards documentés, templates, registres — prêt pour pilote contrôlé |
| **Partiel** | Pilier reconnu, squelette ou principes — à approfondir avant application |

---

## Règles transverses

1. **TOS = constitution** — pas de code métier, pas de déploiement depuis TOS.
2. **Modules indépendants** — Time, Stock, Voice, Mail IA, Pulse, Platform restent séparés.
3. **Adoption progressive** — pilier par pilier, jamais big-bang.
4. **Ordre officiel** : Documentation → Architecture → Code → QA → Production.

---

## Références

- [MATRICE_INTERDEPENDANCE_PILIERS.md](MATRICE_INTERDEPENDANCE_PILIERS.md)
- [ETAT_MATURITE_TOS.md](ETAT_MATURITE_TOS.md)
- [Constitution officielle](00_CONSTITUTION_OFFICIELLE_TAGORA_OPERATING_SYSTEM.md)
- [Application progressive TAGORA Time](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)

## Statut

**Créé — Phase 3I**
