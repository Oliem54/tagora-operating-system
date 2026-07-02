# TRF — TAGORA Release Framework

## Objectif

Définir le framework officiel de **release** : Git, pull requests, versioning, release, rollback et changelog.

## Portée

Tous les dépôts et modules TAGORA — processus de livraison et gestion des versions.

---

## Rôle du TRF

Le TRF garantit que chaque livraison TAGORA est :

- **Traçable** — qui, quoi, quand, pourquoi.
- **Validée** — QA minimale avant production (TQF).
- **Compréhensible** — changelog lisible.
- **Réversible** — rollback documenté.
- **Cohérente** — conventions communes entre modules.

---

## Périmètre TRF

| Domaine | Rôle |
|---|---|
| **Git** | Versionnement source, historique |
| **Pull requests** | Revue, validation, traçabilité |
| **Versioning** | Numéros de version — politique à définir |
| **Release** | Processus de livraison staging → prod |
| **Rollback** | Retour arrière sécurisé |
| **Changelog** | Communication des changements |

---

## Règles

1. **Aucune livraison critique sans validation QA minimale** — smoke tests TQF au minimum.
2. **Toute release doit être compréhensible et traçable** — changelog + tag ou note release.
3. **PR pour changements significatifs** — pas de push direct production sans processus.
4. **Alignement DevOps** — [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md).
5. **Décisions release transverses** → ADR si impact écosystème.

---

## Éléments à définir plus tard

- Stratégie de branches (main, develop, release/*, etc.)
- Règles de PR (revue obligatoire, taille, templates)
- Politique versioning (semver, calendrier)
- Format changelog officiel
- Processus rollback détaillé par module
- Intégration CI/CD (pipelines)

---

## Lien TES / TQF

- **TES** — validation avant code alimente le contenu des PR.
- **TQF** — smoke tests gate la release TRF.

---

## Statut

**Enrichi — Phase 3C** — Cadre release défini. Workflow Git détaillé : ultérieur.
