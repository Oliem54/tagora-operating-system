# Template — Incident Report

## Objectif

Modèle standard pour documenter un **incident TAGORA** (module ou transversal).

## Portée

Incidents significatifs — **ne déclenche aucune action réelle.**

Standard : [INCIDENT_RESPONSE_STANDARD.md](../12_monitoring/INCIDENT_RESPONSE_STANDARD.md)

---

## Modèle complet

Copier et remplir :

```markdown
# Incident — [ID]

## Identification

| Champ | Valeur |
|---|---|
| **ID incident** | [INC-MODULE-NNN] |
| **Date / heure** | [YYYY-MM-DD HH:MM — timezone] |
| **Module** | [TAGORA Time / ...] |
| **Environnement** | [production / staging / dev] |
| **Gravité** | [Mineure / Moyenne / Majeure / Critique] |
| **Statut** | [Détecté / Qualifié / En cours / Mitigé / Résolu / Documenté] |
| **Détecté par** | [Alerte / Support / Équipe / Monitoring] |

## Description

[Ce qui s'est passé — factuel, sans secret]

## Impact

[Utilisateurs, données, durée, périmètre]

## Cause

[Connue / Inconnue / En investigation — sans secret]

## Actions immédiates

- [Action 1 — mitigation]
- [Action 2]

## Correction

[Fix appliqué ou planifié]

## Prévention

[Mesures pour éviter récurrence]

## Responsable

[Rôle ou équipe]

## Communication requise

[ ] Équipe interne
[ ] Support
[ ] Direction
[ ] Utilisateurs — [si oui, comment]

## Documents liés

- [Release, ADR, ticket — liens]

## Notes

[Compléments, post-mortem planifié]
```

---

## Statut

**Créé — Phase 3H**
