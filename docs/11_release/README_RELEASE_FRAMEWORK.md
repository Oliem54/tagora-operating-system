# Release Framework — TAGORA Operating System

## Objectif

Centraliser les **standards documentaires de release** TAGORA : checklist, versioning, changelog, rollback, hotfix et release notes.

## Portée

Dossier `docs/11_release/` — cadre TRF. **Aucun pipeline, GitHub Action ni déploiement réel** dans ce dépôt.

---

## Contenu du dossier

| Document | Rôle |
|---|---|
| [RELEASE_CHECKLIST_STANDARD.md](RELEASE_CHECKLIST_STANDARD.md) | Checklist avant release |
| [CHANGELOG_STANDARD.md](CHANGELOG_STANDARD.md) | Format changelog |
| [VERSIONING_STANDARD.md](VERSIONING_STANDARD.md) | Politique de version |
| [ROLLBACK_STANDARD.md](ROLLBACK_STANDARD.md) | Retour arrière sécurisé |
| [HOTFIX_STANDARD.md](HOTFIX_STANDARD.md) | Correctifs urgents |
| [RELEASE_NOTES_STANDARD.md](RELEASE_NOTES_STANDARD.md) | Communication release |

Templates : [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md), [TEMPLATE_RELEASE_NOTES.md](../99_templates/TEMPLATE_RELEASE_NOTES.md)

---

## Différences clés

| Terme | Définition |
|---|---|
| **Release** | Livraison versionnée d'un module — code + doc + validation |
| **Déploiement** | Promotion vers un environnement (staging, production) |
| **Hotfix** | Correctif urgent, périmètre minimal, traçabilité renforcée |
| **Rollback** | Retour à une version ou état antérieur connu |
| **Changelog** | Liste technique des changements (développeurs, audit) |
| **Release notes** | Communication orientée utilisateur / direction / support |

---

## Règles

1. **Toute release importante doit être traçable** — branche, commit, responsable, date, checklist.
2. **Toute release doit avoir un statut** — planifiée / en validation / approuvée / déployée / annulée.
3. **Toute release critique doit avoir une validation humaine** — approbateur identifié.
4. **Aucun secret** dans checklist, changelog ou release notes TOS.

---

## Méthode simple de mise à jour

1. Identifier le type de release (standard, critique, hotfix).
2. Remplir [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md).
3. Mettre à jour changelog selon [CHANGELOG_STANDARD.md](CHANGELOG_STANDARD.md).
4. Rédiger release notes si impact utilisateur ([RELEASE_NOTES_STANDARD.md](RELEASE_NOTES_STANDARD.md)).
5. Vérifier rollback si release critique ([ROLLBACK_STANDARD.md](ROLLBACK_STANDARD.md)).
6. Archiver la fiche release (dépôt module ou TKS si transversal).

---

## Statut

**Créé — Phase 3G**
