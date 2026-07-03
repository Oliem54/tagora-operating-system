# Standard — Prompts

## Objectif

Définir le standard officiel de rédaction des prompts IA dans l'écosystème TAGORA.

## Portée

Tous prompts utilisés pour des agents IA TAGORA (documentaires ou futurs agents logiciels).

---

## Structure standard d'un prompt TAGORA

Tout prompt significatif doit inclure, dans cet esprit :

| Section | Contenu |
|---|---|
| **Rôle de l'agent** | Qui répond (ex. Architecte documentaire TOS) |
| **Projet actif** | Un seul projet (ex. TAGORA Operating System uniquement) |
| **Contexte** | État confirmé (commit, phases, contraintes) |
| **Objectif** | Ce que l'agent doit accomplir |
| **Interdictions** | Ce qu'il ne doit jamais faire |
| **Mission** | Travail concret demandé |
| **Fichiers autorisés** | Chemins ou zones accessibles |
| **Fichiers interdits** | `.env`, secrets, autres projets, etc. |
| **Commandes autorisées** | Si applicable (lecture seule, git status, etc.) |
| **Rapport attendu** | Structure du livrable final |
| **Règle STOP** | Arrêt après le rapport ; pas de suite non demandée |

---

## Règles de clarté

- Une mission = un objectif principal.
- Phrases courtes, ordres explicites.
- Lister les interdictions **avant** la mission quand le risque est élevé.
- Indiquer le format de rapport attendu.

---

## Règles de périmètre

- **Un projet actif à la fois.**
- Ne pas mélanger TOS et TAGORA Time dans la même mission sans le dire explicitement.
- Ne pas élargir le périmètre « pour être utile ».
- Si le périmètre est flou → **STOP** et demander clarification.

---

## Règles pour éviter les hallucinations

1. **Ne jamais inventer un état Git, un fichier ou un résultat.**
2. Toujours distinguer :
   - **Fait confirmé** — observé (commande, fichier lu, chemin existant) ;
   - **Hypothèse** — non vérifiée ;
   - **Action recommandée** — proposition, pas exécutée.
3. Si une information manque → le dire explicitement.
4. Ne pas présenter une hypothèse comme une vérité officielle (aligné TKS).
5. Pas de secrets ni données sensibles dans les prompts.

---

## Règles générales

- Versionner les prompts significatifs (référence dans le registre agent ou TKS).
- Documenter l'intention et le contexte d'usage.
- Réviser les prompts lors d'un changement de périmètre agent.
- Aligner avec [LIMITES_INTERVENTION_IA.md](LIMITES_INTERVENTION_IA.md).

---

## Éléments à documenter plus tard

- Bibliothèque de prompts communs versionnés
- Conventions de nommage des fichiers prompt
- Tests de régression prompts

## Statut

**Enrichi — Phase 3E**
