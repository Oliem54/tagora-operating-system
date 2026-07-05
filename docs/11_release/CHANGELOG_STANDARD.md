# Standard — Changelog

## Objectif

Définir le **format recommandé** du changelog TAGORA — historique des changements par version, lisible par humains et auditable.

## Portée

Tous les modules TAGORA. Le changelog vit dans le **dépôt du module** ; ce standard TOS fixe la convention.

---

## Rôle du changelog

- Tracer **ce qui a changé** entre versions.
- Aider développeurs, QA et support à comprendre l'impact.
- Alimenter release notes (version simplifiée pour utilisateurs).
- Supporter audit et rollback (savoir quoi a été livré).

---

## Format recommandé

Organiser par version (plus récent en haut), avec sections :

```markdown
# Changelog — [Module]

## [vX.Y.Z] — YYYY-MM-DD

### Added
- Nouvelle fonctionnalité ou document

### Changed
- Modification comportement ou interface

### Fixed
- Correction de bug

### Removed
- Fonctionnalité ou option retirée

### Security
- Correctif ou renforcement sécurité (sans détail secret)

### Known issues
- Problème connu non résolu dans cette version
```

---

## Règles

1. **Compréhensible par un humain** — phrases courtes, pas de jargon opaque.
2. **Ne pas documenter de secret** — pas de tokens, credentials, URLs internes sensibles.
3. **Une entrée par changement significatif** — regrouper les micro-fix internes si pertinent.
4. **Lier à ticket ou PR** si utile (référence, pas contenu secret).
5. **Known issues** — transparence sur limites connues.

---

## Lien release notes

| Changelog | Release notes |
|---|---|
| Détail technique | Résumé orienté utilisateur |
| Développeurs, QA | Direction, support, clients |
| Toutes les catégories | Nouveautés, corrections, impact, actions requises |

Voir [RELEASE_NOTES_STANDARD.md](RELEASE_NOTES_STANDARD.md).

---

## Statut

**Créé — Phase 3G**
