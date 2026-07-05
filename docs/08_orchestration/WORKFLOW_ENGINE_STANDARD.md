# Standard — Workflow Engine

## Objectif

Définir le standard officiel du **moteur de workflows** transverses de l'écosystème TAGORA au sein du TOF.

## Portée

Conception, exécution, monitoring et reprise des workflows — n8n, LangChain et futurs moteurs (**à valider par ADR**). **Aucun moteur n'est implémenté dans ce dépôt.**

---

## Définition d'un Workflow Engine TAGORA

Un **Workflow Engine TAGORA** est le composant (ou ensemble d'outils) qui **exécute** des workflows documentés : déclenchement, enchaînement d'étapes, gestion d'erreurs, logs et arrêt.

| Le moteur fait | Le moteur ne fait pas |
|---|---|
| Exécuter des étapes documentées | Contenir les règles métier Time, Stock, etc. |
| Respecter contrats d'entrée/sortie | Décider d'une approbation de paie |
| Logger et rapporter | Stocker des secrets en clair |
| Retry selon règle documentée | Contourner les permissions module |

Le choix technologique (n8n seul, custom, autre) fera l'objet d'un **ADR futur**.

---

## Différences : workflow, tâche, événement, approbation, automatisation

| Concept | Définition | Exemple documentaire |
|---|---|---|
| **Workflow** | Enchaînement documenté d'étapes avec objectif, propriétaire et cycle de vie | ORCH-TIME-001 |
| **Tâche** | Unité d'exécution unique (une étape ou job planifié) | Envoyer un email de rappel |
| **Événement** | Fait domaine émis selon contrat (découplage) | `Employee Punched In` |
| **Approbation** | Décision humaine explicite avant suite | Validation feuille de temps |
| **Automatisation** | Exécution sans intervention humaine à chaque étape | Notification oubli punch |

Un workflow peut **contenir** des tâches, **réagir** à des événements et **s'arrêter** en attente d'approbation.

---

## Cycle de vie d'un workflow

```
draft → documented → tested → approved → active → paused → retired
```

| Statut | Description |
|---|---|
| **draft** | Idée ou brouillon — non exécutable |
| **documented** | Fiche/template complété, registre à jour |
| **tested** | Exécution validée en environnement non production |
| **approved** | Validation humaine propriétaire (+ module si critique) |
| **active** | Autorisé en production selon TRF |
| **paused** | Désactivé temporairement — pas de nouvelles exécutions |
| **retired** | Archivé — conservé pour traçabilité TKS |

**Règle :** aucun passage à `active` sans `documented`, `tested` et `approved`.

---

## Règles obligatoires

1. **Propriétaire** — rôle ou personne responsable du workflow.
2. **Objectif clair** — une phrase : pourquoi ce workflow existe.
3. **Entrées et sorties définies** — données attendues en entrée ; effet en sortie.
4. **Conditions d'arrêt** — succès, échec, timeout, annulation humaine.
5. **Règles d'erreur** — retry, escalade, dead letter documentés.
6. **Désactivable** — tout workflow `active` peut passer à `paused` sans suppression.

---

## Règle fondamentale

**Les workflows ne remplacent pas les modules métier.**

TAGORA Time reste l'application qui gère punch, permissions et feuilles de temps. Un workflow peut **notifier**, **rappeler** ou **préparer** — pas **remplacer** Time.

---

## Principes

- Workflows explicites, documentés et observables.
- Séparation orchestration vs logique métier.
- Idempotence et reprise lorsque applicable.
- Approbations tracées pour étapes sensibles.
- Cohérence des patterns across modules.

---

## Références

- [N8N_STANDARD.md](N8N_STANDARD.md)
- [LANGCHAIN_STANDARD.md](LANGCHAIN_STANDARD.md)
- [ORCHESTRATION_REGISTRE.md](ORCHESTRATION_REGISTRE.md)
- [TEMPLATE_WORKFLOW_ORCHESTRATION.md](../99_templates/TEMPLATE_WORKFLOW_ORCHESTRATION.md)

## Éléments à documenter plus tard

- Modèle de données workflow (états, transitions)
- Choix technologique du workflow engine (ADR)
- SLA par catégorie de workflow
- Dashboard monitoring workflows (TMF)
- Patterns retry, compensation, saga

## Statut

**Enrichi — Phase 3F**
