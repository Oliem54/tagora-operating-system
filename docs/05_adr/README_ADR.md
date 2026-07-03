# README — Architecture Decision Records (ADR)

## Objectif

Expliquer le rôle, l'usage et la gouvernance des ADR dans le TAGORA Knowledge System (TKS).

## Portée

Décisions architecturales et méthodologiques significatives de l'écosystème TAGORA.

---

## Rôle des ADR dans TOS

Les ADR sont le **format officiel** pour enregistrer une décision structurante :

- Nature de TOS, méthode de développement, architecture, sécurité, compatibilité inter-modules.
- Décisions qui doivent rester compréhensibles **dans plusieurs années**.
- Décisions qui impactent **plusieurs modules** ou le cadre TOS lui-même.

Le registre central est [ADR_REGISTRE.md](ADR_REGISTRE.md).

---

## Définition simple d'une ADR

Une **ADR** (Architecture Decision Record) est un document court qui répond à :

1. **Contexte** — Pourquoi fallait-il décider ?
2. **Décision** — Qu'a-t-on choisi ?
3. **Raisons** — Pourquoi ce choix ?
4. **Conséquences** — Gains, risques, garde-fous.
5. **Impact** — Modules et piliers concernés, notamment **TAGORA Time** si pertinent.

Template : [ADR_TEMPLATE.md](ADR_TEMPLATE.md).

---

## Quand créer une ADR

Créer une ADR si :

- La décision est **architecturale** ou **méthodologique structurante**.
- Elle impacte **plusieurs modules** ou l'écosystème.
- Elle est **coûteuse à inverser**.
- Elle pose un **précédent** pour les futurs projets.
- Elle concerne la **sécurité**, l'**auth**, les **API communes** ou la **nature de TOS**.

Exemples existants : ADR-0001 (nature de TOS), ADR-0002 (documentation avant code).

---

## Quand ne pas créer une ADR

Ne pas créer une ADR pour :

- Un correctif mineur ou une typo.
- Une préférence locale sans impact écosystème.
- Une note de validation avant code d'une feature isolée (utiliser la fiche VAL-*).
- Un détail d'implémentation non validé.
- Une hypothèse encore en discussion.

---

## Différence entre ADR, note de validation, standard et procédure

| Type | Rôle | Exemple |
|---|---|---|
| **ADR** | Décision structurante durable | TOS n'est pas une application |
| **Note / fiche de validation** | Autorisation légère avant un développement important | VAL-TIME-001 |
| **Standard** | Règle de travail récurrente | STANDARD_QA, STANDARD_SECURITE |
| **Procédure** | Étapes opérationnelles répétables | Smoke tests avant release |

Une ADR **fixe un choix**. Un standard **décrit comment travailler**. Une fiche de validation **autorise un lot de travail**. Une procédure **décrit comment exécuter**.

---

## Statuts ADR recommandés

| Statut | Signification |
|---|---|
| **Proposé** | Rédigé, pas encore retenu |
| **Accepté initialement** | Acté pour avancer ; validation humaine formelle encore attendue |
| **Validé** | Confirmé humainement comme officiel |
| **Remplacé** | Supersédé par un autre ADR (indiquer lequel) |
| **Refusé** | Explicitement non retenu |
| **Archivé** | Conservé pour l'historique, plus actif |

Règle : ne pas présenter un statut **Proposé** ou **Accepté initialement** comme **Validé**.

---

## Règles

1. Une ADR doit être **courte, claire, durable**.
2. Une ADR ne doit **pas cacher un débat non tranché** — options et risques restent visibles.
3. Une ADR doit indiquer son **impact sur TAGORA Time** si pertinent.
4. Numérotation séquentielle : `ADR-XXXX-titre.md`.
5. Stocker dans `docs/05_adr/` et mettre à jour [ADR_REGISTRE.md](ADR_REGISTRE.md).
6. Une fois acceptée, ne pas réécrire l'histoire : créer un nouvel ADR ou marquer Remplacé.

---

## Éléments à documenter plus tard

- Rôles auteur / relecteur / approbateur
- Délai de validation humaine
- Liaison automatique registres ↔ ADR

## Statut

**Enrichi — Phase 3D**
