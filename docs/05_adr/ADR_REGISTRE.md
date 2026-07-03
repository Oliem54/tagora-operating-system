# Registre officiel des ADR — TAGORA Operating System

## Objectif

Indexer toutes les Architecture Decision Records du dépôt TOS pour une consultation rapide et une traçabilité durable.

## Portée

ADR stockées dans `docs/05_adr/`. Complète le [README_ADR.md](README_ADR.md) et le [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md).

---

## Règles de mise à jour

1. Toute nouvelle ADR est ajoutée à ce registre **le jour de sa création**.
2. Tout changement de **statut** est répercuté ici.
3. Ne pas supprimer une ligne : marquer **Remplacé**, **Refusé** ou **Archivé**.
4. Le résumé reste court — le détail est dans le fichier ADR.
5. Aucun secret, mot de passe ou donnée sensible dans ce registre.

---

## Tableau des ADR

| ID | Titre | Statut | Date | Portée | Résumé de décision | Impact principal |
|---|---|---|---|---|---|---|
| ADR-0001 | TOS comme Constitution méthodologique, pas comme application | Accepté initialement — à valider humainement | 2026-07-02 | Écosystème TAGORA | TOS n'est pas une application métier ; c'est la référence méthodologique, documentaire, architecturale, QA, design, IA, orchestration et gouvernance | Tous modules ; Time = pilote |
| ADR-0002 | Documentation avant code | Accepté initialement — à valider humainement | 2026-07-02 | Écosystème TAGORA | Tout développement important est précédé d'une documentation minimale (besoin, périmètre, métier, UX, QA, risques, validation) | Time en premier ; tous modules ensuite |

### Liens

- [ADR-0001](ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
- [ADR-0002](ADR-0002-DOCUMENTATION_AVANT_CODE.md)

---

## Prochaines entrées

Les ADR futures seront ajoutées ici (ADR-0003, etc.) dès création.

---

## Statut du registre

**Brouillon initial**
