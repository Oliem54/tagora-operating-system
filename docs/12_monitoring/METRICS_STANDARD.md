# Standard — Metrics

## Objectif

Définir le **rôle et les types de métriques** TAGORA — aider à décider, pas seulement décorer.

## Portée

Tous les modules TAGORA. **Aucun système de métriques réel n'est créé dans TOS.**

---

## Rôle des métriques

Mesurer l'**état et la tendance** du système : disponibilité, performance, qualité, usage. Complète logs (détail) et alertes (seuils).

---

## Types de métriques

| Type | Description |
|---|---|
| **Disponibilité** | Uptime, health checks, taux de succès |
| **Performance** | Latence, temps de réponse, throughput |
| **Erreurs** | Taux d'erreur, erreurs par type |
| **Usage** | Volume actions, utilisateurs actifs (agrégé, sans PII) |
| **Qualité** | Taux échec parcours, régressions post-release |
| **Release** | Déploiements, rollbacks, durée stabilisation |
| **Orchestration** | Workflows réussis/échoués, durée moyenne |

---

## Exemples documentaires

| Métrique | Module | Usage |
|---|---|---|
| Taux d'erreur (%) | Tous | Détecter régression |
| Temps de réponse p95 | Tous | Performance |
| Incidents ouverts | TKS / ops | Charge support |
| Échecs workflow | TOF | Santé orchestration |
| Releases avec rollback | TRF | Qualité livraison |
| Punchs réussis / échoués | TAGORA Time | Santé métier critique |

> Exemples illustratifs — **non collectés dans TOS.**

---

## Règles

1. **Aider à décider** — chaque métrique doit répondre à une question opérationnelle.
2. **Pas de métrique orpheline** — propriétaire et seuil d'attention définis.
3. **Agrégation** — éviter métriques identifiant individuellement des personnes sans justification.
4. **Lien alertes** — métriques alimentent seuils ([ALERTING_STANDARD.md](ALERTING_STANDARD.md)).

---

## Statut

**Créé — Phase 3H**
