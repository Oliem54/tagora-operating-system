# Standard — DevOps

## Objectif

Définir le **rôle du DevOps** dans TOS et les principes de préparation, déploiement et livraison — sans pipeline final imposé.

## Portée

Environnements, déploiement, CI/CD (à documenter), rollback — tous modules TAGORA.

---

## Rôle du DevOps dans TOS

Le DevOps TAGORA assure que chaque module peut être **livré de façon contrôlée** :

- Environnements **séparés** et reproductibles.
- **Validation** (QA, smoke tests) avant promotion production.
- **Rollback** possible et documenté.
- **Changelog** pour chaque release compréhensible.
- **Traçabilité** alignée sur TRF et observabilité TMF.

TOS documente les **principes** ; chaque dépôt module implémente les pipelines.

---

## Principes

| Principe | Description |
|---|---|
| **Préparation avant production** | Staging validé ; smoke tests passés (TQF) |
| **Environnements séparés** | dev / QA / staging / prod — pas de confusion |
| **Validation avant déploiement** | Gate QA + revue selon criticité |
| **Rollback prévu** | Procédure écrite avant release risquée |
| **Changelog prévu** | Utilisateurs et équipe savent ce qui change |
| **Pas de pipeline figé ici** | CI/CD détaillé — Phase ultérieure / TRF |

---

## Lien TRF (Release)

| TRF | DevOps |
|---|---|
| Git, branches, PR | Source du déploiement |
| Versioning | Tag release |
| Release process | Promotion environnements |
| Rollback | Retour version antérieure |
| Changelog | Communication release |

Voir [09_TRF_TAGORA_RELEASE_FRAMEWORK.md](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md).

---

## Lien TMF (Monitoring)

Post-déploiement : logs, alertes, métriques — TMF complète DevOps pour détecter régressions en production.

---

## Règles

- Aucun déploiement production sans validation QA minimale (TQF).
- Smoke tests sur staging avant promotion.
- Secrets gérés hors dépôt — jamais dans TOS ([STANDARD_SECURITE.md](STANDARD_SECURITE.md)).
- Documenter procédure rollback par module.

---

## Éléments à documenter plus tard

- Pipeline CI/CD standard (sans l'imposer maintenant).
- Stratégie déploiement (rolling, blue/green, etc.).
- Infrastructure as code — stack à valider.
- Intégration TRF dans chaque dépôt.

## Statut

**Enrichi — Phase 3C** — Principes DevOps définis. Pipelines : ultérieur.
