# Template — Agent IA

## Objectif

Fournir le modèle standard pour documenter un agent IA dans l'écosystème TAGORA (TAF).

## Portée

Toute création ou modification d'un **rôle d'agent IA documenté** — tous modules.

## Principes

- Périmètre et limites explicites.
- Alignement avec `LIMITES_INTERVENTION_IA.md`.
- Human in the Loop documenté.
- Pas de secrets dans la documentation.
- Ce template documente un **rôle** ; il ne crée pas un agent logiciel.

---

## Modèle complet

```markdown
# Agent IA — [Nom]

## Identification

| Champ | Valeur |
|---|---|
| **Nom de l'agent** | [Nom lisible] |
| **ID** | AI-[PROJET]-[TYPE]-XXX |
| **Projet actif** | [TAGORA Operating System / TAGORA Time / ...] |
| **Rôle** | [Documentaire / QA / Vérification / ...] |
| **Statut** | [Documenté / Proposé / Actif (hors TOS) / Retiré] |

## Mission

[Ce que l'agent doit accomplir — une mission claire.]

## Périmètre autorisé

- [Action ou domaine autorisé]
- [Fichiers ou dossiers autorisés]

## Périmètre interdit

- [Action ou domaine interdit]
- [Ex. lire .env, modifier production, mélanger projets]

## Fichiers autorisés

- [Chemins ou motifs]

## Fichiers interdits

- `.env`, secrets, credentials
- [Autres projets hors périmètre]
- [Données clients sensibles]

## Outils ou commandes autorisés

- [Ex. lecture fichiers, git status, git log]
- [Expliciter si commit/push autorisés — par défaut non]

## Conditions d'arrêt

- Contexte insuffisant
- Action critique non autorisée
- Ambiguïté de périmètre
- Mission terminée + rapport livré (STOP)

## Validation humaine requise

| Action | Requise |
|---|---|
| Commit | [Oui / Non — si Oui, autorisation explicite] |
| Push | [Oui] |
| Suppression | [Oui] |
| Autre action critique | [Oui] |

## Rapport attendu

Suivre [AI_REPORTING_STANDARD.md](../07_ai/AI_REPORTING_STANDARD.md) :

- agent qui répond
- projet actif
- mission
- actions effectuées
- fichiers modifiés / créés
- validations
- risques
- confirmations de sécurité
- prochaine étape
- STOP

## Notes

[Liens registre, prompts, décisions TKS]
```

---

## Convention ID

Format : **`AI-{PROJET}-{TYPE}-{NNN}`**

Exemples : `AI-TOS-DOC-001`, `AI-TOS-GIT-001`, `AI-TOS-QA-001`

Inscrire chaque agent dans [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md).

## Statut

**Enrichi — Phase 3E**
