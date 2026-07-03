# Standard — Agents IA

## Objectif

Définir le standard officiel de conception et de **documentation** des agents IA dans l'écosystème TAGORA.

## Portée

Tous agents IA (rôles documentés ou futurs agents logiciels) — sous gouvernance TAF.

**Aucun agent réel n'est créé dans cette phase.** Ce document définit comment les agents **doivent** être pensés.

---

## Définition d'un agent IA TAGORA

Un **agent IA TAGORA** est un rôle d'assistance intelligent avec :

- un **nom** et un **ID** ;
- un **projet actif** unique ;
- un **rôle clair** ;
- un **périmètre limité** ;
- des **interdictions explicites** ;
- un **rapport vérifiable** ;
- des **conditions d'arrêt** ;
- une **validation humaine** pour les actions critiques.

Ce n'est pas un agent autonome libre. C'est un **collaborateur encadré**.

---

## Types d'agents possibles

| Type | Usage typique |
|---|---|
| **Agent documentaire** | Rédiger, structurer, enrichir la documentation TOS |
| **Agent QA** | Scénarios, checklists, revue de conformité TQF |
| **Agent support** | Aider à diagnostiquer ou guider (sans action critique) |
| **Agent résumé** | Synthétiser documents, commits, décisions |
| **Agent analyse** | Analyser écarts, risques, cohérence standards |
| **Agent orchestration** | Préparer / documenter workflows (TOF) — pas exécuter hors périmètre |
| **Agent rédaction** | Rédiger textes, rapports, templates |
| **Agent vérification** | Vérifier présence de fichiers, sync Git, absence de secrets suivis |

Un agent peut combiner des types proches, mais le **rôle principal** doit rester unique et clair.

---

## Règles

1. **Chaque agent doit avoir un rôle clair.**
2. **Chaque agent doit avoir un périmètre limité.**
3. **Chaque agent doit produire un rapport vérifiable** — voir [AI_REPORTING_STANDARD.md](AI_REPORTING_STANDARD.md).
4. **Chaque agent doit savoir quand arrêter** — contexte insuffisant, action critique, ambiguïté.
5. **Aucun agent ne doit faire d'action critique sans validation humaine** — voir [HUMAN_IN_THE_LOOP_STANDARD.md](HUMAN_IN_THE_LOOP_STANDARD.md).
6. Documenter chaque agent via [TEMPLATE_AGENT_IA.md](../99_templates/TEMPLATE_AGENT_IA.md).
7. Inscrire chaque agent documenté dans [AGENTS_IA_REGISTRE.md](AGENTS_IA_REGISTRE.md).
8. Respecter [LIMITES_INTERVENTION_IA.md](LIMITES_INTERVENTION_IA.md) et [PROMPT_STANDARD.md](PROMPT_STANDARD.md).
9. Ne pas exposer secrets ou données sensibles.
10. **Ne pas créer d'agent réel maintenant** dans le dépôt TOS.

---

## Cycle de vie documentaire (léger)

```
Rôle défini → Template rempli → Registre mis à jour → Utilisation encadrée → Rapport → Validation humaine si critique
```

## Éléments à documenter plus tard

- Architecture technique de déploiement (hors TOS)
- Monitoring et métriques
- Processus de retrait d'un agent

## Statut

**Enrichi — Phase 3E**
