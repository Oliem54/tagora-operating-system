# Standard — Post-Release Monitoring

## Objectif

Définir le **suivi post-release** TAGORA — surveillance après déploiement pour détecter régressions.

## Portée

Releases importantes ou critiques — tous modules. **Aucun monitoring réel n'est activé depuis TOS.**

Lien : [TRF](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md), [RELEASE_CHECKLIST_STANDARD.md](../11_release/RELEASE_CHECKLIST_STANDARD.md)

Template : [TEMPLATE_MONITORING_CHECKLIST.md](../99_templates/TEMPLATE_MONITORING_CHECKLIST.md)

---

## Rôle du suivi post-release

Compléter le **gate QA avant release** (TQF + TRF) par une **surveillance active** après promotion production — détecter erreurs, performance et retours non visibles en staging.

---

## Période de surveillance

| Type release | Période indicative |
|---|---|
| **Standard** | 24–48 h — vérification logs et erreurs |
| **Importante** | 3–7 jours — métriques, support, workflows |
| **Critique** | 7–14 jours — surveillance renforcée ; checklist complète |

Durées indicatives — à ajuster par module et risque.

---

## Éléments à surveiller

| Domaine | Signaux |
|---|---|
| **Erreurs nouvelles** | Pic taux d'erreur, types inconnus |
| **Performance** | Latence, timeouts |
| **Comportements utilisateurs** | Volume actions, échecs parcours |
| **Retours support** | Tickets, plaintes terrain |
| **Logs critiques** | Auth, permissions, punch (Time) |
| **Intégrations** | APIs externes, webhooks |
| **Workflows** | Échecs orchestration TOF |

---

## Règles

1. **Release critique non terminée** tant que surveillance minimale non complétée ([TEMPLATE_MONITORING_CHECKLIST.md](../99_templates/TEMPLATE_MONITORING_CHECKLIST.md)).
2. **Lien TRF** — checklist release inclut plan post-release ; rollback si régression majeure.
3. **Escalade** — incident si impact utilisateur → [INCIDENT_RESPONSE_STANDARD.md](INCIDENT_RESPONSE_STANDARD.md).
4. **Documentation** — résultat surveillance archivé avec release (module ou TKS).

---

## Statut

**Créé — Phase 3H**
