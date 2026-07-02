# Template — Agent IA

## Objectif

Fournir le modèle standard pour documenter un agent IA dans l'écosystème TAGORA (TAF).

## Portée

Toute création ou modification d'agent IA — tous modules.

## Principes

- Périmètre et limites explicites.
- Alignement avec `LIMITES_INTERVENTION_IA.md`.
- Human in the Loop documenté si applicable.
- Pas de secrets dans la documentation.

---

## Modèle

```markdown
# Agent IA — [Nom]

## Métadonnées

| Champ | Valeur |
|---|---|
| Module | [TAGORA Mail IA / ...] |
| Type | [Assistant / Automate / Analyse / ...] |
| Statut | [Brouillon / Actif / Retiré] |
| Propriétaire | [Équipe / rôle] |

## Objectif

[Rôle de l'agent et valeur apportée.]

## Périmètre

### Autorisé

- [Action ou domaine autorisé]

### Interdit

- [Action ou domaine interdit]

## Entrées et sorties

- **Entrées :** [...]
- **Sorties :** [...]
- **Format :** [...]

## Prompts associés

- [Référence prompt versionné]

## Human in the Loop

- **Requis :** [Oui / Non]
- **Points de validation :** [...]

## Limites d'intervention

[Alignement explicite avec TAF — niveau d'autonomie.]

## Monitoring et audit

[Ce qui est loggé et comment.]

## Éléments à documenter plus tard

- [Tests, métriques, déploiement]
```

## Éléments à documenter plus tard

- Registre central des agents IA
- Processus validation pré-production agent

## Statut

**Brouillon initial**
