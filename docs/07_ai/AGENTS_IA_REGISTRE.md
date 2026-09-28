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
| AI-SOURCING-001 | TAGORA Sourcing Agent | TAGORA Sourcing AI | Super-agent visible | Documenté | Chat global et projet ; missions ; recommandations ; brouillons | Oui avant communication externe et tout engagement | [fondation](../04_adoption_modules/TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md) | Seul agent visible ; DEC-024 |
| AI-SOURCING-002 | Product Scout Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Recherche produits / listings / candidats | Orchestré ; pas d'engagement | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-003 | Supplier Analyst Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Analyse fournisseur ; mémoire ; scores | Orchestré ; pas d'engagement | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-004 | Offer Comparator Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Comparaison d'offres et versions | Orchestré | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-005 | Domain Expert Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Critères du domaine de compétence | Orchestré | Idem | Un domaine ≠ critères d'un autre |
| AI-SOURCING-006 | Risk Analyst Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Risques technique / commercial / qualité / livraison | Orchestré | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-007 | Landed Cost Analyst Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Scénarios de coût rendu estimatif | Orchestré ; estimé ≠ confirmé | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-008 | Negotiation Copilot Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Points, stratégie, contre-offre, brouillons | Oui avant envoi externe | Idem | HIDDEN_ORCHESTRATED |
| AI-SOURCING-009 | Document Extraction Agent | TAGORA Sourcing AI | Spécialiste interne | Documenté | Extraction structurée documents / messages | Confiance + vérification humaine des claims critiques | Idem | HIDDEN_ORCHESTRATED |
| AI-EXPANORA-001 | EXPANORA Growth Orchestrator | TAGORA EXPANORA | Agent visible | Documenté | Mission de croissance, synthèse, demandes d'action | Oui avant toute demande d'action ou dépense | [architecture](../04_adoption_modules/EXPANORA_ARCHITECTURE_V1.md) | VALD-110 ; non déployé ; interface principale |
| AI-EXPANORA-002 | Product Knowledge Agent | TAGORA EXPANORA | Spécialiste | Documenté | Connaissance produit et claims autorisés | Orchestré ; pas de claim inventé | Idem | Caché par défaut ; mémoire par marque |
| AI-EXPANORA-003 | Web Search Agent | TAGORA EXPANORA | Spécialiste | Documenté | Recherche Web via Search Adapter | Orchestré ; pas de contournement d'accès | Idem | Caché par défaut |
| AI-EXPANORA-004 | Trend Scout | TAGORA EXPANORA | Spécialiste | Documenté | Tendances | Orchestré | Idem | Caché par défaut |
| AI-EXPANORA-005 | Platform Scout | TAGORA EXPANORA | Spécialiste | Documenté | Benchmark de capacités de plateformes | Orchestré | Idem | Caché par défaut ; aucune dépendance Meta |
| AI-EXPANORA-006 | Creative Scout | TAGORA EXPANORA | Spécialiste | Documenté | Angles créatifs, sans publication | Orchestré | Idem | Caché par défaut |
| AI-EXPANORA-007 | Tech Scout | TAGORA EXPANORA | Spécialiste | Documenté | Formats et techniques nouvelles | Orchestré | Idem | Caché par défaut |
| AI-EXPANORA-008 | Competitive Scout | TAGORA EXPANORA | Spécialiste | Documenté | Présences concurrentes publiques | Orchestré | Idem | Caché par défaut |
| AI-EXPANORA-009 | Commerce Scout | TAGORA EXPANORA | Spécialiste | Documenté | Prix, assortiments, promotions publics | Orchestré | Idem | Caché par défaut |
| AI-EXPANORA-010 | Opportunity Agent | TAGORA EXPANORA | Spécialiste | Documenté | Cartes croisant Web et données internes | Orchestré ; pas d'exécution | Idem | Caché par défaut |
| AI-EXPANORA-011 | Acquisition Agent | TAGORA EXPANORA | Spécialiste | Documenté | Plans dans les capacités déclarées | Oui avant demande d'action | Idem | Caché par défaut ; canaux en lecture seule |
| AI-EXPANORA-012 | WordPress Traffic Analyst | TAGORA EXPANORA | Spécialiste | Documenté | Lecture analytics du site de marque | Orchestré ; écriture WordPress désactivée | Idem | Caché par défaut ; `tagora.ca` exclu |
| AI-EXPANORA-013 | Value & Margin Agent | TAGORA EXPANORA | Spécialiste | Documenté | Vues d'attribution, revenu, marge | Orchestré | Idem | Marge DEPORA non autoritative |
| AI-EXPANORA-014 | Brand Compliance Agent | TAGORA EXPANORA | Spécialiste | Documenté | Pre-flight voix de marque et claims | Peut bloquer une sortie | Idem | Visible dans l'audit |

---

## Règles

1. Inscrire un agent **avant** de l'utiliser de façon récurrente.
2. Statut **Documenté** ≠ agent logiciel déployé.
3. Mettre à jour le registre si le périmètre change.
4. Aucun secret dans ce registre.
5. L'identité visuelle commune de la collègue IA n'est pas ce registre de rôles. Elle est définie par [TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.md](../governance/TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.md).

## Statut

**Enrichi — VALD-110** — rôles documentaires EXPANORA inscrits (AI-EXPANORA-001 à 014). L'orchestrateur est l'agent visible. Les spécialistes sont cachés par défaut. Aucun agent logiciel déployé.
