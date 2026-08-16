# Règles de séparation des projets — Gouvernance TOS

## Objectif

Définir la **séparation stricte** des projets TAGORA — dépôts, responsabilités et contextes métier.

## Portée

TOS, applications métier, TCP, TOF — tout l'écosystème TAGORA.

---

## Règle fondamentale

**Les standards sont communs. Les contextes métier restent séparés.**

TOS unifie la **méthode** ; chaque module garde son **métier**, son **dépôt** et son **cycle de vie**.

---

## Séparation par entité

| Entité | Mission | Indépendance |
|---|---|---|
| **TOS** | Constitution documentaire | Ne absorbe aucun module métier |
| **TAGORA Time** | Horodateur, gestion du temps | Dépôt et équipe produit propres |
| **Stock Premium** | Inventaire | Idem |
| **Voice** | Voix / temps réel | Idem |
| **Mail IA** | Messagerie IA | Idem |
| **Pulse** | Monitoring / analytics | Idem |
| **TAGORA Sourcing AI** | Sourcing / intelligence fournisseurs (super-agent) | Dépôt futur distinct — **non créé** (DEC-024) |
| **Platform** | Hub plateforme (à préciser) | Idem |
| **TCP** (futur) | Briques communes code | Hors TOS ; pas de métier spécifique module |
| **TOF** (futur) | Orchestration | Pas de logique métier critique seule |

---

## Règles

1. **TOS ne doit pas absorber les modules métier** — pas de code Time dans TOS.
2. **Chaque module reste indépendant** — release, backlog, ADR locaux possibles.
3. **Interdiction de mélanger les décisions** d'un module dans un autre **sans validation** (ADR ou gouvernance si transverse).
4. **Traçabilité des décisions communes** — standards écosystème dans TOS/TKS ; décisions locales dans le dépôt module.
5. **Ne pas dupliquer TCP** dans un module sans ADR.
6. **Ne pas placer logique métier critique** dans TOF ou TOS.

---

## Anti-patterns interdits

- Fusionner Time et TOS en un seul dépôt.
- Implémenter règles horodateur dans TOS ou TOF seul.
- Copier une décision Stock Premium dans Time sans analyse d'impact.
- Créer un « monolithe TAGORA » applicatif sans décision ADR.

---

## Lien TES

Le TES **opérationnalise** cette séparation via validation avant code et architecture documentée.

Voir [STANDARD_ARCHITECTURE.md](../02_standards/STANDARD_ARCHITECTURE.md).

---

## Actions externes bornées gouvernées par TOS

**Règle humaine :** « TOS gouverne ; les modules appliquent. »

Une action autorisée dans un dépôt cible (ex. TAGORA Time, Stock Premium, Mail IA, Pulse AI, Voice, Flow, futurs modules) **ne transforme jamais** ce dépôt en projet gouvernant de la session TOS. Le contexte gouvernant reste TOS.

| Règle | Contenu |
|---|---|
| Contexte gouvernant | TOS reste le projet actif et gouvernant |
| Cible | Chaque module / repository cible reste une entité séparée |
| Changement de projet | Accéder au repository cible **n'est pas** changer de projet gouvernant |
| Écriture cross-repo | Chaque écriture exige un **GO borné** explicite |
| Prérequis Git | Les prérequis Git **non destructifs** peuvent être inclus dans le **même gate parent** s'ils y sont explicitement autorisés |
| Enchaînement | Aucune action implicite ; une action cible ne déclenche pas automatiquement une autre action non autorisée |
| Retour | **STOP** immédiat puis **retour TOS** obligatoire après l'action cible |
| Décisions locales | Restent dans le module |
| Standards / décisions transverses | Restent dans TOS / TKS |

### Séquence standard d'action cible bornée

1. TOS prépare le périmètre.
2. TOS valide le périmètre.
3. Martin donne un GO précis.
4. Le gate accède au dépôt cible uniquement si explicitement autorisé.
5. Les prérequis Git minimaux non destructifs peuvent être exécutés dans ce même gate.
6. L'action autorisée est exécutée.
7. STOP.
8. Rapport factuel retourné au TOS.
9. TOS inspecte / valide.
10. Toute étape suivante hors périmètre exige son propre GO.

### Prérequis Git dans un gate parent

`STANDALONE_BRANCH_SWITCH_GATE_REQUIRED=NO` — un simple `git switch` ne génère normalement ni nouvelle phase, ni nouveau VALD, ni commit TOS séparé, ni gate administratif autonome.

`TARGET_GIT_BRANCH_SWITCH_MAY_BE_INCLUDED_IN_PARENT_GATE=YES` — uniquement si le gate parent vérifie avant le switch : repository attendu ; working tree propre ; branche source acceptable ; branche cible déjà validée ; SHA attendu ; absence de divergence inattendue ; aucune opération destructive.

Si un prérequis échoue : **STOP / HOLD**. Aucune correction automatique.

```text
GOVERNING_CONTEXT=TOS
TARGET_CONTEXT=SEPARATE_MODULE
PROJECT_SWITCH_REQUIRED=NO
ACTION_MODEL=BOUNDED_EXTERNAL_ACTION
RETURN_TO_TOS=MANDATORY
```

---

## Éléments à documenter plus tard

- Cartographie dépôts officielle (URLs, propriétaires)
- Règles contribution cross-repo
- Processus extraction vers TCP

## Statut

**Enrichi — Phase 3C** — Séparation stricte formalisée.
**Enrichi — Phase 4D** — Actions externes bornées gouvernées par TOS (VALD-088).
**Enrichi — DEC-024** — TAGORA Sourcing AI ajouté comme module autonome futur ; repo non créé ; Mail IA n'absorbe pas le métier fournisseurs.
