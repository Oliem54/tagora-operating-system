# Standard — Release notes

## Objectif

Définir le **format des release notes** TAGORA — communication claire des changements livrés aux parties prenantes.

## Portée

Releases avec impact visible ou significatif — tous modules. Distinct du **changelog** (plus technique).

Template : [TEMPLATE_RELEASE_NOTES.md](../99_templates/TEMPLATE_RELEASE_NOTES.md)

---

## Rôle des release notes

- Informer **direction**, **équipe**, **support** et parfois **clients/revendeurs**.
- Expliquer **impact utilisateur** sans jargon excessif.
- Indiquer **actions requises** (formation, config, communication terrain).
- Signaler **risques connus** et contact support.

---

## Public cible

| Public | Contenu privilégié |
|---|---|
| **Direction** | Résumé, impact business, risques |
| **Équipe interne** | Changements principaux, déploiement, rollback |
| **Support** | Problèmes connus, FAQ, escalade |
| **Clients / revendeurs** | Langage simple, bénéfices, actions requises |

---

## Format recommandé

```markdown
# Release notes — [Module] vX.Y.Z

**Date :** YYYY-MM-DD

## Résumé
[2–3 phrases — quoi et pourquoi]

## Nouveautés
- [Point utilisateur]

## Corrections
- [Point utilisateur]

## Changements importants
- [Comportement modifié — attention]

## Impact utilisateur
[Qui est touché, comment]

## Actions requises
[Formation, refresh, rien — explicite]

## Problèmes connus
[Limites connues]

## Support
[Contact ou procédure — sans secret]

---
*Notes internes : [optionnel — équipe technique]*
```

---

## Règles

1. **Simple et clair** pour public non technique.
2. **Pas de secret** — pas de détails infra sensibles.
3. **Aligné changelog** — cohérence des faits, niveau de détail adapté.
4. **Actions requises explicites** — « Aucune action requise » si vrai.

---

## Statut

**Créé — Phase 3G**
