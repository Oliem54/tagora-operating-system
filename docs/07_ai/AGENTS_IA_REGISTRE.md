# Registre des agents IA — TAGORA Operating System

## Objectif

Indexer les **rôles d'agents IA documentés** pour l'écosystème TAGORA.

## Portée

Rôles définis dans TOS sous gouvernance TAF.

> **Important :** les entrées de ce registre sont des **rôles documentaires**, pas des agents logiciels actifs déployés dans ce dépôt. Aucun agent réel n'est créé par l'inscription au registre.

---

## Colonnes

| Colonne | Description |
|---|---|
| ID | Identifiant `AI-...` |
| Nom agent | Nom lisible |
| Projet / module | Projet actif |
| Rôle | Type principal |
| Statut | Documenté / Proposé / Actif (hors TOS) / Retiré |
| Périmètre | Zone d'intervention |
| Validation humaine requise | Oui / Partielle / Selon mission |
| Document lié | Template, standard, prompt |
| Notes | Complément |

---

## Agents documentés (exemples de rôles)

| ID | Nom agent | Projet / module | Rôle | Statut | Périmètre | Validation humaine requise | Document lié | Notes |
|---|---|---|---|---|---|---|---|---|
| AI-TOS-DOC-001 | Architecte documentaire TOS | TAGORA Operating System | Documentaire | Documenté | Documentation Markdown TOS uniquement | Oui pour commit/push | [TAF](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md), [TEMPLATE_AGENT_IA.md](../99_templates/TEMPLATE_AGENT_IA.md) | Rôle utilisé pour phases documentaires |
| AI-TOS-GIT-001 | Agent Git de sauvegarde | TAGORA Operating System | Vérification / Git | Documenté | Commit/push documentaire sur dépôt TOS si mission explicite | Oui — commit et push autorisés uniquement par mission | [AI_REPORTING_STANDARD.md](AI_REPORTING_STANDARD.md) | Ne pas push sans autorisation |
| AI-TOS-QA-001 | Agent QA documentaire | TAGORA Operating System | QA documentaire | Documenté | Standards TQF, scénarios documentaires, checklists | Oui pour toute automatisation réelle | [AI_AGENT_STANDARD.md](AI_AGENT_STANDARD.md), `docs/06_qa/` | Pas de tests Playwright réels dans TOS |

---

## Règles

1. Inscrire un agent **avant** de l'utiliser de façon récurrente.
2. Statut **Documenté** ≠ agent logiciel déployé.
3. Mettre à jour le registre si le périmètre change.
4. Aucun secret dans ce registre.

## Statut

**Brouillon initial — Phase 3E**
