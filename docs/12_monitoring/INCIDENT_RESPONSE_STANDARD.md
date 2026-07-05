# Standard — Incident Response

## Objectif

Définir le **cycle de vie et les règles de gestion d'incidents** TAGORA.

## Portée

Tous les modules TAGORA. **Aucun incident réel n'est inventé ou traité dans TOS.**

Template : [TEMPLATE_INCIDENT_REPORT.md](../99_templates/TEMPLATE_INCIDENT_REPORT.md)

---

## Définition d'un incident

Un **incident** est un événement qui **impacte le service, les données ou les utilisateurs** au-delà d'une erreur isolée — nécessite qualification, assignation et résolution documentée.

---

## Cycle de vie

```
Détecté → Qualifié → Assigné → En cours → Mitigé → Résolu → Documenté → [Post-mortem si nécessaire]
```

| Statut | Description |
|---|---|
| **Détecté** | Signal reçu (alerte, support, monitoring) |
| **Qualifié** | Gravité et périmètre établis |
| **Assigné** | Responsable désigné |
| **En cours** | Investigation ou correction active |
| **Mitigé** | Impact réduit ; solution temporaire possible |
| **Résolu** | Cause traitée ; service restauré |
| **Documenté** | Rapport incident complété |
| **Post-mortem** | Si critique — cause, impact, prévention (TKS) |

---

## Rôles possibles

| Rôle | Responsabilité |
|---|---|
| **Responsable technique** | Investigation, correction, communication équipe |
| **Responsable métier** | Impact utilisateur, décisions métier |
| **Support** | Interface utilisateurs, remontée signaux |
| **Direction** | Si critique — décisions, communication externe |

---

## Règles

1. **Incident critique = communication claire** — équipe, support, direction selon impact.
2. **Documenter cause, impact, correction et prévention** — template incident obligatoire si significatif.
3. **Lien TKS** — leçons apprises généralisables → registre problèmes/solutions ou ADR.
4. **Aucun secret** dans rapport incident TOS.

---

## Statut

**Créé — Phase 3H**
