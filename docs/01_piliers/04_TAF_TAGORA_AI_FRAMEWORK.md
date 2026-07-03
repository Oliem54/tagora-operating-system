# TAF — TAGORA AI Framework

## Objectif

Définir le **cadre officiel des agents IA TAGORA** : utiles, contrôlés, traçables, sécuritaires et alignés avec les standards TOS.

## Portée

Agents IA, prompts, workflows IA, limites d'intervention, validation humaine, documentation IA et collaboration humain + IA — tous modules TAGORA.

**Ce n'est pas** le développement d'agents réels dans ce dépôt. C'est la **méthode** pour les concevoir et les gouverner.

---

## Définition du TAF

Le **TAGORA AI Framework (TAF)** est le pilier TOS qui définit **comment** les agents IA interviennent dans l'écosystème :

- quel rôle ils ont ;
- jusqu'où ils peuvent aller ;
- quand un humain doit valider ;
- comment ils rapportent leurs actions.

L'IA **assiste**. Elle ne remplace pas les décisions humaines critiques.

---

## Rôle du TAF dans TOS

| Fonction | Description |
|---|---|
| **Gouvernance IA** | Règles communes pour tous les agents TAGORA |
| **Sécurité** | Interdictions absolues (secrets, production, hors périmètre) |
| **Traçabilité** | Prompts, rapports, validations documentés (TKS) |
| **Qualité** | Agents utiles, vérifiables, arrêtables |
| **Cohérence** | Même discipline sur TOS, Time, Mail IA et futurs modules |

---

## Objectif des agents IA TAGORA

Les agents IA TAGORA doivent :

- accélérer le travail **sans créer de chaos** ;
- produire des **rapports factuels et vérifiables** ;
- respecter un **périmètre explicite** ;
- **s'arrêter** quand le contexte est insuffisant ou l'action est critique ;
- collaborer avec les humains, pas les remplacer sur les décisions binding.

---

## Ce que le TAF encadre

| Domaine | Document de référence |
|---|---|
| **Agents IA** | [AI_AGENT_STANDARD.md](../07_ai/AI_AGENT_STANDARD.md), [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md) |
| **Prompts** | [PROMPT_STANDARD.md](../07_ai/PROMPT_STANDARD.md) |
| **Workflows IA** | Principes ici ; détail TOF en Phase 3F |
| **Limites d'intervention** | [LIMITES_INTERVENTION_IA.md](../07_ai/LIMITES_INTERVENTION_IA.md) |
| **Validation humaine** | [HUMAN_IN_THE_LOOP_STANDARD.md](../07_ai/HUMAN_IN_THE_LOOP_STANDARD.md) |
| **Documentation IA** | Template agent, registres TKS |
| **Collaboration humain + IA** | Human in the Loop + rapports [AI_REPORTING_STANDARD.md](../07_ai/AI_REPORTING_STANDARD.md) |

---

## Ce que le TAF ne doit pas faire

| Interdit | Raison |
|---|---|
| Remplacer les décisions humaines critiques | Responsabilité humaine finale |
| Modifier des données sensibles sans validation | Sécurité et intégrité |
| Lire des secrets | Confidentialité |
| Agir hors périmètre | Contrôle et traçabilité |
| Mélanger les modules | Séparation des projets (TES) |

---

## Liens avec les autres piliers

| Pilier | Lien TAF |
|---|---|
| **TKS** | Décisions IA, validations, leçons, registre agents |
| **TES** | Validation avant code, pas de code si mission documentaire |
| **TQF** | Agents QA documentaires ; scénarios avant automatisation |
| **TOF** | Orchestration future — TAF cadre l'IA, TOF orchestre |
| **TRF** | Commit / push / release uniquement avec autorisation humaine |
| **TMF** | Incidents et audit des actions IA (quand activé) |

---

## Application progressive — TAGORA Time

| Règle Time | Description |
|---|---|
| **Ordre** | TAF appliqué **après** TQF, TDS, TES et TKS |
| **Périmètre** | Aucun agent dans Time sans fiche / registre documenté |
| **Métier** | Décisions métier Time restent humaines |
| **Aide autorisée** | Documenter, vérifier, résumer, préparer des rapports |
| **Interdit sans validation** | Modifier données critiques, production, secrets |

Voir [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md).

---

## Principes

- Limites d'intervention claires.
- Traçabilité des prompts, actions et validations.
- Human in the Loop pour actions sensibles.
- Cohérence des patterns entre modules.
- Sécurité et confidentialité non négociables.

## Règles

- Tout agent respecte les limites TAF.
- Documenter chaque agent (template + registre).
- Valider les outputs avant action automatisée ou critique.
- Référencer `docs/07_ai/` pour le détail.

---

## Éléments à documenter plus tard

- Matrice autonomie par type d'agent et par module
- Cycle de vie agent (création, revue, retrait)
- Monitoring et métriques agents
- Bibliothèque de prompts versionnés
- Intégration TOF (n8n / LangChain) — Phase 3F

## Statut

**Enrichi — Phase 3E** — Cadre agents IA documenté. Aucun agent logiciel actif dans TOS.
