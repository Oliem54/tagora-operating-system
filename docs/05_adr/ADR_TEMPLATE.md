# Template — Architecture Decision Record (ADR)

## Objectif

Fournir le modèle standard pour documenter une décision architecturale ou méthodologique dans TKS.

## Portée

Toute création d'ADR dans l'écosystème TAGORA.

## Principes

- Clarté du contexte et des contraintes.
- Options considérées explicitement listées.
- Conséquences positives et négatives documentées.
- Décision traçable dans le temps.

## Règles

- Copier ce template pour chaque nouvel ADR.
- Nommer le fichier : `ADR-XXXX-titre-court-en-minuscules.md`
- Ne pas supprimer un ADR accepté — le marquer déprécié ou remplacé.

---

## Modèle ADR

```markdown
# ADR-XXXX — [Titre de la décision]

## Statut

[Proposé | Accepté | Déprécié | Remplacé par ADR-YYYY]

## Date

[AAAA-MM-JJ]

## Contexte

[Pourquoi cette décision est nécessaire. Contraintes, problème, enjeux.]

## Décision

[La décision prise, formulée clairement.]

## Options considérées

1. [Option A] — [Avantages / inconvénients]
2. [Option B] — [Avantages / inconvénients]
3. [Option C] — [Avantages / inconvénients]

## Conséquences

### Positives

- [...]

### Négatives

- [...]

## Modules impactés

- [TAGORA Time | Stock Premium | ... | TOS | Écosystème]

## Références

- [Liens vers documents, issues, discussions]
```

## Éléments à documenter plus tard

- Exemples d'ADR remplis
- Critères « décision significative »
- Workflow d'approbation

## Statut

**Brouillon initial**
