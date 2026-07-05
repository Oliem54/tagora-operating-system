# Standard — Hotfix

## Objectif

Définir quand et **comment traiter un hotfix** TAGORA — correctif urgent sans contourner traçabilité ni validation minimale.

## Portée

Tous les modules TAGORA. **Aucun hotfix réel n'est créé depuis TOS.**

---

## Définition hotfix

Un **hotfix** est un correctif **urgent** appliqué sur la ligne **stable** (souvent `main` ou branche production) pour résoudre un incident ou bug critique en production — **périmètre minimal**.

---

## Quand utiliser un hotfix

- Bug **critique** en production (sécurité, indisponibilité, corruption données).
- Impact **utilisateur immédiat** (impossible de punch, login cassé).
- Attente d'une release planifiée **inacceptable** pour le risque.

**Ne pas utiliser hotfix pour :** nouvelle feature, refactor confort, dette technique non urgente.

---

## Différence fix normal vs hotfix

| | Fix normal | Hotfix |
|---|---|---|
| Branche | `fix/*` → PR → merge | `hotfix/*` → validation rapide |
| Urgence | Planifié | Immédiat |
| Périmètre | Selon besoin | **Minimal** |
| Documentation | Avant ou avec PR | Après stabilisation si urgence |
| QA | Standard | Rapide mais **réelle** |
| Revue | Standard | Accélérée, pas absente |

---

## Règles

1. **Périmètre minimal** — une cause, un correctif ; pas de scope creep.
2. **Validation rapide mais réelle** — smoke test ciblé minimum.
3. **Documentation après stabilisation** si urgence extrême — changelog + fiche hotfix sous 48h.
4. **Traçabilité obligatoire** — commit, responsable, ticket, date.
5. **Revue post-hotfix** — cause racine, prévention, leçon TKS.

---

## Processus simplifié

1. Confirmer criticité (pas hotfix pour confort).
2. Créer branche `hotfix/*` depuis stable.
3. Corriger minimal + test ciblé.
4. Validation responsable (humain).
5. Merge + tag PATCH ([VERSIONING_STANDARD.md](VERSIONING_STANDARD.md)).
6. Déployer selon procédure module.
7. Changelog + post-mortem si pertinent.

---

## Statut

**Créé — Phase 3G**
