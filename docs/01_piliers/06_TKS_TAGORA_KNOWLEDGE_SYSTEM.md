# TKS — TAGORA Knowledge System

## Objectif

Établir la **mémoire permanente officielle** de l'écosystème TAGORA : décisions, ADR, standards, problèmes connus, solutions, historique et leçons apprises — traçables, compréhensibles et réutilisables.

## Portée

Toute connaissance structurée de l'écosystème — méthodologique, architecturale, organisationnelle et opérationnelle — documentée dans le dépôt TOS et, le cas échéant, reliée aux modules métier.

---

## Définition du TKS

Le **TAGORA Knowledge System (TKS)** est le pilier TOS qui définit **comment** l'écosystème conserve sa mémoire.

Ce n'est **pas** une base de données. Ce n'est **pas** une application documentaire. C'est une **méthode documentaire légère** : registres Markdown, ADR, liens entre décisions et standards.

---

## Rôle du TKS dans TOS

| Fonction | Description |
|---|---|
| **Mémoire permanente officielle** | Ce qui compte ne reste pas uniquement dans les têtes, chats ou tickets éphémères |
| **Traçabilité** | Qui a décidé quoi, quand, pourquoi, avec quel statut |
| **Réutilisabilité** | Solutions et leçons applicables à Time puis aux autres modules |
| **Gouvernance** | Distinguer officiel, temporaire, proposé et archivé |
| **Continuité** | Un humain, un développeur, un agent IA ou un gestionnaire peut reprendre le fil |

---

## TKS comme mémoire permanente officielle

TOS est la Constitution méthodologique. **TKS en est la mémoire vivante** :

- Les standards disent *comment travailler*.
- Les ADR et registres disent *ce qui a été décidé et appris*.
- L'historique permet de comprendre les pivots sans réinventer le passé.

Rien d'important pour l'écosystème ne doit dépendre d'une seule personne ou d'un seul fil de conversation.

---

## Ce que le TKS doit contenir

| Élément | Emplacement typique |
|---|---|
| **Décisions** | [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) |
| **ADR** | [docs/05_adr/](../05_adr/) + [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md) |
| **Standards** | `docs/02_standards/`, piliers, QA, design, etc. |
| **Règles validées** | Gouvernance `docs/03_gouvernance/` |
| **Problèmes connus** | [REGISTRE_PROBLEMES_CONNUS.md](../10_knowledge/REGISTRE_PROBLEMES_CONNUS.md) |
| **Solutions** | [REGISTRE_SOLUTIONS.md](../10_knowledge/REGISTRE_SOLUTIONS.md) |
| **Historique** | ADR, registres, roadmap, commits documentaires |
| **Notes de validation** | [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md) |
| **Leçons apprises** | [REGISTRE_LECONS_APPRISES.md](../10_knowledge/REGISTRE_LECONS_APPRISES.md) |

---

## Ce que le TKS ne doit pas contenir

| Interdit | Raison |
|---|---|
| **Secrets** | Sécurité — jamais dans TOS |
| **Mots de passe** | Sécurité |
| **Données clients sensibles** | Confidentialité |
| **Contenu `.env`** | Secrets et configuration locale |
| **Décisions non validées présentées comme officielles** | Intégrité de la mémoire |

Une hypothèse reste une hypothèse. Un brouillon reste un brouillon. Le statut doit être explicite.

---

## Liens avec les autres piliers

| Pilier | Lien TKS |
|---|---|
| **TES** | Validation avant code, décisions d'ingénierie, ADR architecture |
| **TQF** | Scénarios QA, problèmes qualité, validations de parcours |
| **TDS** | Décisions design, checklist UI, écarts visuels documentés |
| **TAF** | Limites IA, décisions agents (quand activé) |
| **TOF** | Décisions d'orchestration (quand activé) |
| **TRF** | Releases, changelog, décisions de livraison |
| **TMF** | Incidents et leçons post-mortem (quand activé) |

---

## Application progressive — TAGORA Time

| Priorité TKS Time | Action |
|---|---|
| 1 | Traçabilité des décisions Time importantes (registre ou ADR si écosystème) |
| 2 | Problèmes connus Time documentés **séparément** (contexte Time) |
| 3 | Solutions validées reliées aux problèmes |
| 4 | Leçons apprises du pilote remontées vers TOS quand généralisables |
| 5 | Validations humaines des ADR et scénarios (registre validations) |

**Règle :** Les ADR TOS ne remplacent pas la documentation interne de TAGORA Time. Time reste une application métier indépendante.

---

## Principes

- Mémoire permanente — pas uniquement orale.
- Traçabilité — daté, statuté, lié.
- Accessibilité — trouvable et lisible.
- Légèreté — utile, pas bureaucratique.
- Réutilisabilité entre modules.

## Règles

- Toute décision architecturale significative produit un ADR.
- Documenter problèmes connus et solutions **après validation**.
- Ne pas supprimer sans archivage (statut Archivé / Remplacé).
- Utiliser les templates et registres TKS.

---

## Éléments à documenter plus tard

- Critères formels « Brouillon → Validé » pour chaque type de registre
- Rôles (auteur, relecteur, approbateur)
- Politique d'archivage détaillée
- Index par module et par pilier
- Outil externe éventuel (non imposé pour l'instant)

## Statut

**Enrichi — Phase 3D** — Cadre mémoire permanente opérationnel.
