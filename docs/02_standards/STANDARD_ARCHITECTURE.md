# Standard — Architecture

## Objectif

Définir le **rôle et les règles** du standard architecture TAGORA — documentée avant développement majeur, sans figer une architecture finale.

## Portée

Structure logicielle, boundaries, intégrations — tous modules : Time, Stock Premium, Voice, Mail IA, Pulse, Platform.

---

## Rôle du standard architecture

L'architecture TAGORA n'est pas un diagramme unique imposé à tous. C'est un **ensemble de règles** qui garantissent :

- Modules **autonomes** avec contexte métier propre.
- **Séparation claire** entre applications, TOS, TCP, TOF.
- **Décisions traçables** (ADR / TKS) avant changements structurants.
- **Évolutivité** sans fusion non décidée.

> **Règle :** Architecture documentée avant tout développement **majeur**.

---

## Principes architecturaux

| Principe | Description |
|---|---|
| **Séparation des modules** | Time, Stock Premium, Voice, etc. — dépôts et responsabilités distincts |
| **Autonomie métier** | Chaque application porte sa logique domaine |
| **TOS = référence** | Constitution méthodologique — pas application centrale exécutable |
| **TCP progressif** | Briques communes quand validées — pas d'imposition brutale |
| **TOF orchestre** | Ne remplace pas la logique métier |

---

## Règles

1. **Ne pas fusionner les modules** sans décision officielle (ADR + gouvernance).
2. **Chaque module conserve son contexte métier** — pas de monolithe applicatif déguisé.
3. **ADR obligatoire** pour décision architecturale significative (multi-modules, auth, API commune).
4. **Pas de sur-architecture** — documenter le nécessaire, pas l'hypothétique.
5. **Compatibilité sans fusion** — voir [REGLES_DE_COMPATIBILITE_MODULES.md](../03_gouvernance/REGLES_DE_COMPATIBILITE_MODULES.md).

---

## Application progressive par module

| Module | Focus architectural initial |
|---|---|
| **TAGORA Time** | Horodateur, permissions, multi-compagnies — pilote TES |
| **Stock Premium** | Inventaire — convergence standards, pas fusion avec Time |
| **Voice** | Temps réel / audio — spécificités documentées |
| **Mail IA** | IA + messagerie — limites TAF |
| **Pulse** | Monitoring / analytics — lien TMF |
| **Platform** | Hub transversal — frontières vs TCP à définir |

---

## Éléments à décider plus tard (ADR)

- Architecture **Core** future (TCP).
- **Librairies communes** — périmètre et dépôts.
- **Stratégie multi-app** — navigation, SSO, shell commun.
- **Stratégie API** — REST, GraphQL, événements — à valider.
- **Authentification commune** — centralisée vs par module.
- Modèle de layers, diagrammes C4, anti-patterns.

---

## Statut

**Enrichi — Phase 3C** — Règles architecture définies. Décisions techniques : via ADR.
