# Template — Checklist release

## Objectif

Modèle standard pour documenter une **release TAGORA** (module ou documentaire).

## Portée

Toute release planifiée — **ne déclenche pas de déploiement réel.**

Checklist complète : [RELEASE_CHECKLIST_STANDARD.md](../11_release/RELEASE_CHECKLIST_STANDARD.md)

---

## Modèle complet

Copier et remplir :

```markdown
# Release — [Nom]

## Identification

| Champ | Valeur |
|---|---|
| **Nom de release** | [Ex. Time v2.5.0 — Dashboard direction] |
| **Module** | [TAGORA Time / TOS / ...] |
| **Version** | [vX.Y.Z] |
| **Branche** | [main / release/x.y / hotfix/...] |
| **Commit / tag** | [SHA ou tag] |
| **Responsable** | [Rôle ou nom] |
| **Date prévue** | [YYYY-MM-DD] |
| **Type de release** | [Standard / Critique / Hotfix] |
| **Statut** | [Planifiée / En validation / Approuvée / Déployée / Annulée] |

## Description

[Résumé en 2–4 phrases]

## Changements inclus

- [Changement 1]
- [Changement 2]

## Changements exclus

- [Hors périmètre explicite]

## QA effectuée

| Test | Résultat | Notes |
|---|---|---|
| Smoke tests | Pass / Fail / N/A | |
| Scénarios QA | [IDs] | |

## Documentation mise à jour

- [ ] Changelog
- [ ] Release notes
- [ ] Doc utilisateur
- [ ] ADR si applicable

## Migration requise

| | |
|---|---|
| **Oui / Non** | |
| **Détail** | [Si oui — sans secret] |

## Rollback prévu

| | |
|---|---|
| **Oui / Non** | |
| **Version retour** | [vX.Y.Z ou commit] |
| **Responsable rollback** | [Rôle] |

## Approbation

| | |
|---|---|
| **Approbation requise** | Oui / Non |
| **Approbateur** | [Rôle] |
| **Date approbation** | [YYYY-MM-DD ou en attente] |

## Notes

[Compléments, risques, dépendances]
```

---

## Statut

**Créé — Phase 3G**
