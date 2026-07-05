# Standard — Logging

## Objectif

Définir le **rôle et les règles des logs** TAGORA — utiles, lisibles, sans secret.

## Portée

Tous les modules TAGORA. **Aucun système de logs réel n'est créé dans TOS.**

---

## Rôle des logs

Les logs permettent de **comprendre ce qui s'est passé** : diagnostic, audit, traçabilité release, débogage orchestration. Ils complètent le QA (TQF) en production.

---

## Types de logs

| Type | Usage |
|---|---|
| **Technique** | Erreurs applicatives, stack traces (sans secret), requêtes |
| **Sécurité** | Tentatives auth, changements permissions, accès refusés |
| **Métier** | Actions utilisateur significatives (punch, approbation — sans PII excessive) |
| **Audit** | Qui a fait quoi, quand — conformité et traçabilité |
| **Orchestration** | Exécution workflows TOF — statut, durée, échec |
| **Release** | Déploiement, rollback, hotfix — version, environnement |

---

## Informations recommandées

| Champ | Description |
|---|---|
| **Horodatage** | UTC ou timezone documentée |
| **Module** | TAGORA Time, Stock, etc. |
| **Action** | Verbe clair (ex. `punch.create`, `auth.login.failed`) |
| **Statut** | success / failure / warning |
| **Acteur** | Système ou rôle utilisateur si pertinent (pas de PII inutile) |
| **Correlation ID** | Identifiant futur pour lier requêtes (à implémenter par module) |
| **Message** | Clair, humain-readable |

---

## Informations interdites

- Mots de passe
- Tokens (JWT, session, API)
- Clés API
- Secrets et credentials
- Données clients sensibles non nécessaires au diagnostic

---

## Règles

1. **Logs utiles** — pas de bruit excessif ; niveau adapté (debug, info, warn, error).
2. **Lisibles** — format structuré recommandé (JSON ou key=value) — choix module.
3. **Limités au nécessaire** — rétention et volume à définir par module (ultérieur).
4. **Aucun secret** — jamais dans logs ni documentation TOS.

---

## Statut

**Créé — Phase 3H**
