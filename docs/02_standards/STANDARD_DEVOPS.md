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

## Environnements recommandés

| Environnement | Rôle |
|---|---|
| **Local** | Développement individuel ; tests rapides ; aucune donnée sensible réelle |
| **Dev** | Intégration continue légère ; partage équipe ; données de test uniquement |
| **Staging** | Reproduction proche production ; validation QA complète ; smoke tests gate |
| **Production** | Utilisateurs réels ; données réelles ; accès restreint ; changements contrôlés |

---

## Rôle de chaque environnement

| Environnement | Usage principal | Données |
|---|---|---|
| **Local** | Coder, déboguer, expérimenter | Fixtures, mocks, comptes QA locaux |
| **Dev** | Intégrer branches, tests partagés | Jeux de test ; jamais production |
| **Staging** | Valider release avant prod | Données anonymisées ou QA ; pas de prod copiée sans procédure |
| **Production** | Service utilisateurs | Données réelles ; modifications via TRF |

---

## Règles de séparation des environnements

1. **Aucune donnée sensible réelle** dans les documents TOS (comptes, tokens, URLs privées).
2. **Aucun secret dans Git** — variables d'environnement, vault ou gestionnaire externe.
3. **Production protégée** — accès limité ; pas de test ad hoc direct sur prod.
4. **Staging avant production** pour tout changement important (feature, migration, permissions).
5. **Rollback prévu** avant toute release critique — documenté dans checklist TRF.
6. **Pas de confusion d'URL ou de config** — chaque environnement identifiable clairement.

---

## Principes

| Principe | Description |
|---|---|
| **Préparation avant production** | Staging validé ; smoke tests passés (TQF) |
| **Environnements séparés** | local / dev / staging / prod — pas de confusion |
| **Validation avant déploiement** | Gate QA + revue selon criticité |
| **Rollback prévu** | Procédure écrite avant release risquée |
| **Changelog prévu** | Utilisateurs et équipe savent ce qui change |
| **Pas de pipeline imposé** | Aucun pipeline CI/CD réel n'est imposé à ce stade — TRF documente la méthode |

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

**Enrichi — Phase 3G** — Environnements, séparation et principes DevOps définis. Pipelines réels : ultérieur.
