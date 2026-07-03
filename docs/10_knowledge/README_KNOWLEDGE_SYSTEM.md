# Knowledge System — Dossier mémoire permanente

## Objectif du dossier `docs/10_knowledge/`

Centraliser les **registres opérationnels** du TAGORA Knowledge System (TKS) :

- décisions actées
- problèmes connus
- solutions validées
- leçons apprises
- validations en attente ou réalisées

Ce dossier complète les ADR (`docs/05_adr/`) et les standards (`docs/02_standards/`, piliers, gouvernance).

Pilier de référence : [06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md](../01_piliers/06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md).

---

## Différence entre les types d'éléments

| Type | Question à laquelle il répond | Fichier |
|---|---|---|
| **ADR** | Quelle décision structurante avons-nous prise, et pourquoi ? | `docs/05_adr/` |
| **Décision** | Qu'avons-nous acté (y compris hors ADR formelle) ? | [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) |
| **Problème connu** | Qu'est-ce qui pose problème, de façon documentée ? | [REGISTRE_PROBLEMES_CONNUS.md](REGISTRE_PROBLEMES_CONNUS.md) |
| **Solution** | Comment avons-nous résolu un problème validé ? | [REGISTRE_SOLUTIONS.md](REGISTRE_SOLUTIONS.md) |
| **Leçon apprise** | Qu'avons-nous appris pour ne pas recommencer l'erreur ? | [REGISTRE_LECONS_APPRISES.md](REGISTRE_LECONS_APPRISES.md) |
| **Validation** | Qu'est-ce qui a été (ou doit être) confirmé humainement ? | [REGISTRE_VALIDATIONS.md](REGISTRE_VALIDATIONS.md) |

Une décision peut être liée à une ADR. Une solution doit être liée à un problème. Une leçon peut découler d'un problème ou d'une phase documentaire.

---

## Règles

1. **Tout élément doit être daté.**
2. **Tout élément doit avoir un statut** (ex. Acté, Proposé, Ouvert, Validé, À faire).
3. **Ne jamais inscrire de secret ou donnée sensible** (mots de passe, `.env`, données clients).
4. **Ne pas transformer une hypothèse en vérité officielle** — le statut doit être honnête.
5. **Légèreté** — une ligne claire vaut mieux qu'un roman.

---

## Méthode de mise à jour simple

1. Identifier le type d'élément (décision, problème, solution, leçon, validation).
2. Ajouter une ligne dans le registre concerné avec un **ID** séquentiel.
3. Renseigner date, statut, portée, liens.
4. Si décision structurante écosystème → créer aussi une **ADR** et mettre à jour [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md).
5. Ne pas inventer de bug ni de solution technique non validée.

---

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) | Décisions actées |
| [REGISTRE_PROBLEMES_CONNUS.md](REGISTRE_PROBLEMES_CONNUS.md) | Problèmes documentés |
| [REGISTRE_SOLUTIONS.md](REGISTRE_SOLUTIONS.md) | Solutions validées |
| [REGISTRE_LECONS_APPRISES.md](REGISTRE_LECONS_APPRISES.md) | Leçons |
| [REGISTRE_VALIDATIONS.md](REGISTRE_VALIDATIONS.md) | Validations humaines |

## Statut

**Brouillon initial — Phase 3D**
