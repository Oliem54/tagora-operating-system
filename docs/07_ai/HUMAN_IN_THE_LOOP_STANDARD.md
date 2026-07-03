# Standard — Human in the Loop

## Objectif

Définir le standard officiel de **validation humaine** dans les workflows IA et d'orchestration TAGORA.

## Portée

TAF, TOF et tout processus où une décision ou action IA nécessite approbation humaine.

---

## Définition — Human in the Loop TAGORA

Le **Human in the Loop (HITL)** est le principe selon lequel un **humain valide explicitement** toute action critique avant qu'elle ne soit exécutée ou considérée comme officielle.

L'IA peut **suggérer**, **préparer**, **documenter**, **vérifier**.  
L'humain **décide** et **autorise** les actions critiques.

---

## Quand une validation humaine est obligatoire

| Action | Validation humaine |
|---|---|
| **Commit** | Oui — sauf si la mission l'autorise explicitement |
| **Push** | Oui — autorisation explicite requise |
| **Suppression** | Oui |
| **Migration** | Oui |
| **Modification production** | Oui |
| **Accès secret** | Oui — et en pratique : interdiction de lire/afficher les secrets |
| **Décision architecture** | Oui (ADR / validation) |
| **Décision métier critique** | Oui |
| **Automatisation avec impact réel** | Oui |

---

## Suggestion IA vs décision humaine

| | Suggestion IA | Décision humaine |
|---|---|---|
| **Nature** | Proposition, analyse, brouillon | Acte engageant |
| **Statut TKS** | Hypothèse / À faire / Proposé | Acté / Validé |
| **Exécution** | Pas d'effet irréversible seul | Autorise l'effet |
| **Responsabilité** | Agent + auteur du prompt | Humain validateur |

**Règle :** une action critique doit être **explicitement autorisée** — pas déduite, pas implicite.

---

## Lien avec TKS et registres de validation

| Registre | Usage HITL |
|---|---|
| [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md) | Suivi des validations humaines à faire / faites |
| [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) | Décisions actées après validation |
| [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md) | Décisions structurantes validées ou acceptées initialement |

Un élément « Accepté initialement » n'est pas « Validé » tant qu'un humain ne l'a pas confirmé dans le registre.

---

## Règles

1. Identifier les points HITL dans chaque mission agent ou workflow.
2. Ne pas exécuter d'action irréversible sans approbation explicite.
3. Tracer qui a approuvé quoi et quand (sans secrets).
4. Pas de contournement silencieux du Human in the Loop.
5. Aligner avec [LIMITES_INTERVENTION_IA.md](LIMITES_INTERVENTION_IA.md).

---

## Éléments à documenter plus tard

- UX d'approbation (TDS)
- SLA et escalade
- Catalogue HITL par module

## Statut

**Enrichi — Phase 3E**
