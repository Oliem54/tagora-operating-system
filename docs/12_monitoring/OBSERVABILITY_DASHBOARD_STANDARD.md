# Standard — Observability Dashboard

## Objectif

Définir le **rôle futur des dashboards d'observabilité** TAGORA — sans en créer un réel.

## Portée

Vision documentaire pour tous les modules. **Aucun dashboard n'est implémenté dans TOS.**

---

## Rôle futur des dashboards

Centraliser les **signaux importants** pour décision rapide : santé module, incidents, erreurs, releases, workflows — sans surcharge ni exposition de données sensibles.

---

## Types de dashboards

| Type | Public | Contenu privilégié |
|---|---|---|
| **Opérationnel** | Équipe technique | Erreurs, alertes, santé services, workflows |
| **Direction** | Management | Disponibilité, incidents majeurs, tendances usage |
| **Technique** | DevOps / SRE | Métriques détaillées, logs agrégés, releases |

---

## Règles

1. **Ne pas surcharger** — widgets essentiels ; drill-down si besoin.
2. **Signaux importants** — ce qui déclenche action, pas tout.
3. **Statuts clairs** — vert / orange / rouge ou équivalent lisible.
4. **Distinguer temps réel, quotidien et historique** — pas tout en temps réel.
5. **Ne pas exposer de données sensibles** — agrégats, pas PII ni secrets.

---

## Exemples de widgets futurs (non implémentés)

| Widget | Dashboard | Signal |
|---|---|---|
| Santé module | Opérationnel | Up/down, dernière erreur |
| Incidents ouverts | Opérationnel / Direction | Nombre, gravité |
| Erreurs critiques (24h) | Opérationnel | Tendance |
| Releases récentes | Technique | Version, date, statut post-release |
| Workflows en échec | Opérationnel | TOF |
| Temps moyen résolution incident | Direction | Qualité ops |

> **Aucun dashboard réel n'est créé** — cadre documentaire uniquement.

---

## Statut

**Créé — Phase 3H**
