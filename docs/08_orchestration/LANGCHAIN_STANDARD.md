# Standard — LangChain

## Objectif

Définir le standard officiel d'utilisation **future** de LangChain pour les chaînes IA et l'orchestration intelligente dans l'écosystème TAGORA (TOF / TAF).

## Portée

Chaînes LangChain, pipelines IA et outils — sous gouvernance TAF et TOF. **Aucune chaîne LangChain réelle n'est créée dans ce dépôt.**

---

## Rôle futur de LangChain dans TAGORA

LangChain est un **outil possible** pour :

- enchaîner des étapes IA (résumé, classification, extraction structurée) ;
- connecter des sources documentaires vérifiables ;
- produire des sorties structurées pour revue humaine.

LangChain **n'est pas obligatoire**. Il complète éventuellement n8n ou un workflow engine pour des étapes « intelligence » — sans décider du métier.

---

## LangChain comme outil possible, non obligatoire

| Statut | Description |
|---|---|
| **Documenté** | Ce standard décrit les règles si LangChain est retenu |
| **Non imposé** | Autres approches IA restent possibles sous TAF |
| **Sous TAF** | Toute chaîne respecte limites d'intervention IA |
| **Hors TOS** | Code et clés API LangChain hors dépôt TOS |

---

## Distinction : agent IA vs orchestration IA

| Concept | Rôle | Pilier |
|---|---|---|
| **Agent IA** | Rôle documenté avec périmètre, mission, rapport (ex. AI-TOS-DOC-001) | TAF |
| **Orchestration IA** | Enchaînement technique de prompts, outils, modèles dans un pipeline | TOF + TAF |
| **Décision métier** | Humain ou module métier — jamais LangChain seul | Module |

Une chaîne LangChain peut **aider** (résumer, structurer) ; elle ne **remplace** pas un agent TAF documenté ni une validation humaine.

---

## Règles pour chaînes IA

| Règle | Description |
|---|---|
| **Contexte limité** | Entrées explicites ; pas d'accès illimité aux dépôts ou bases |
| **Sources vérifiables** | Documents, registres, sorties traçables — pas d'invention |
| **Sortie structurée** | Format défini (JSON, markdown template) pour reprise et audit |
| **Arrêt si contexte insuffisant** | Ne pas compléter avec des suppositions ; signaler lacune |
| **Validation humaine pour actions critiques** | Avant modification données, production, push, approbation |

---

## Lien avec TAF

- Toute chaîne LangChain respecte [LIMITES_INTERVENTION_IA.md](../07_ai/LIMITES_INTERVENTION_IA.md).
- Prompts alignés sur [PROMPT_STANDARD.md](../07_ai/PROMPT_STANDARD.md).
- Rapports alignés sur [AI_REPORTING_STANDARD.md](../07_ai/AI_REPORTING_STANDARD.md).
- Agents documentés via [TEMPLATE_AGENT_IA.md](../99_templates/TEMPLATE_AGENT_IA.md) si rôle récurrent.

---

## Interdiction

**Il est interdit d'automatiser une décision métier critique sans approbation humaine.**

Exemples interdits sans HITL :

- approuver une feuille de temps ;
- modifier des heures de punch ;
- déclencher une paie ;
- supprimer des données utilisateur ;
- publier en production.

LangChain peut préparer un **brouillon** ou une **recommandation** — l'humain ou le module métier **décide**.

---

## Principes

- Alignement strict avec limites d'intervention IA (TAF).
- Chaînes documentées et testables.
- Human in the Loop aux points sensibles.
- Pas de logique métier critique isolée dans LangChain seul.
- Traçabilité des exécutions.

---

## Éléments à documenter plus tard

- Patterns LangChain autorisés (chains, agents, tools)
- Conventions de structure de projet (hors TOS)
- Intégration avec n8n et event bus
- Tests et évaluation des chaînes
- Versionnement et déploiement

## Statut

**Enrichi — Phase 3F**
