# Protocole de clarification du WIP TAGORA Time — Phase 4Q-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Phase 4P-TOS** | Arbitrage baseline et WIP — [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md) |
| **Phase 4Q-TOS** | **Présent document** — protocole de clarification du WIP |
| **Dépôt cible** | `C:\dev\tagora-time` (TAGORA Time) — **non ouvert, non modifié** |
| **Règle** | Préparer la clarification du WIP sans action dans TAGORA Time |

- TOS est le projet actif.
- Phase 4P a **bloqué l'instanciation documentaire** dans TAGORA Time.
- **TAGORA Time n'est pas ouvert** dans cette phase.
- **Aucun fichier TAGORA Time** n'est lu, ouvert, modifié ou créé.
- L'objectif est de **préparer un protocole de clarification du WIP** avant toute action future.
- Le protocole **ne règle pas le WIP maintenant**.
- Le protocole **ne permet pas encore** de modifier TAGORA Time.

---

## 2. Rappel du WIP observé en Phase 4O

Source : [RAPPORT_PHASE_4O_OUVERTURE_CONTROLEE_TAGORA_TIME.md](RAPPORT_PHASE_4O_OUVERTURE_CONTROLEE_TAGORA_TIME.md) — lecture Git contrôlée Phase 4O uniquement.

| Champ | Valeur |
|---|---|
| **Branche observée** | `feature/admin-commissions-premium-header-kpi` |
| **HEAD observé** | `5d4e39780690c2a93c4bb04b8f7242a686cb8c48` |
| **Working tree propre** | **Non** |
| **Fichiers modifiés** | **Oui** (5 fichiers) |
| **Fichiers non suivis** | **Non** |
| **Fichier sensible détecté** | **Non** |

### Fichiers modifiés observés

| Fichier |
|---|
| `src/app/admin/commissions/AdminCommissionsPageClient.tsx` |
| `src/app/admin/commissions/acces-direction/AdminCommissionBookAccessClient.tsx` |
| `src/app/components/admin/AdminCommissionsMetricCard.tsx` |
| `src/app/components/ui/PageHeader.tsx` |
| `src/app/globals.css` |

> **Ces fichiers ont été observés uniquement via `git status` en Phase 4O. Leur contenu n'a pas été ouvert.**

---

## 3. Objectif du protocole

| # | Objectif |
|:---:|---|
| 1 | Clarifier si le WIP commissions doit être **sauvegardé, terminé, isolé, reporté ou abandonné** |
| 2 | Confirmer la **branche cible réelle** à utiliser plus tard |
| 3 | Empêcher toute **instanciation documentaire** dans un dépôt non stabilisé |
| 4 | Éviter de **mélanger documentation TOS et WIP applicatif** |
| 5 | **Protéger les fichiers en cours** |
| 6 | **Préserver la traçabilité Git** |

---

## 4. Questions d'arbitrage à préparer

Les questions suivantes doivent être tranchées humainement **avant toute action future dans TAGORA Time** :

1. Le WIP commissions est-il encore voulu ?
2. Le WIP doit-il être terminé avant toute documentation TOS ?
3. Le WIP doit-il être commit/push dans TAGORA Time avant la suite ?
4. Le WIP doit-il être isolé dans une branche dédiée ?
5. La branche `feature/admin-commissions-premium-header-kpi` est-elle la bonne branche de travail ?
6. La branche `main` doit-elle rester la baseline cible future ?
7. La future documentation TOS doit-elle viser `main`, une branche propre ou une nouvelle branche dédiée ?
8. Une nouvelle lecture Git contrôlée sera-t-elle nécessaire ?
9. Qui doit valider l'état final avant toute instanciation documentaire ?

---

## 5. Options possibles

| Option | Description | Avantages | Risques | Statut recommandé |
|---|---|---|---|---|
| **A — Terminer le WIP commissions avant toute suite** | Le travail commissions est finalisé, testé et sauvegardé dans TAGORA Time avant toute instanciation documentaire. | Baseline plus claire. | Dépend d'un travail applicatif non terminé. | **À évaluer** |
| **B — Isoler le WIP dans une branche dédiée** | Le WIP est protégé dans une branche séparée avant de revenir à une baseline propre. | Protège le travail en cours. | Nécessite des actions Git futures dans TAGORA Time. | **À évaluer** |
| **C — Reporter l'instanciation documentaire** | Aucune action dans TAGORA Time tant que le WIP n'est pas stabilisé. | Option la plus sécuritaire. | Retarde l'application documentaire. | **Recommandée par défaut** |
| **D — Créer une future branche documentaire dédiée** | Une branche dédiée serait créée plus tard pour les fichiers documentaires TOS, après clarification du WIP. | Évite de toucher `main` ou le WIP. | Nécessite validation et protocole Git séparé. | **À évaluer** |

---

## 6. Position conservatrice TOS

La position conservatrice recommandée est de **ne pas ouvrir ni modifier TAGORA Time** tant que le WIP commissions n'a pas été clarifié humainement.

L'option **recommandée par défaut** est de **reporter l'instanciation documentaire** et de **préparer une future validation humaine** avant toute nouvelle lecture ou action Git.

---

## 7. Conditions avant toute future action dans TAGORA Time

Checklist — **toutes les conditions requises** avant toute action future dans le dépôt cible :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | Décision humaine sur le **sort du WIP commissions** | ☐ |
| 2 | **Branche cible confirmée** | ☐ |
| 3 | **Stratégie Git confirmée** | ☐ |
| 4 | **Autorisation explicite** de rouvrir TAGORA Time | ☐ |
| 5 | **Commandes futures autorisées** listées | ☐ |
| 6 | Interdiction de lire les **secrets** confirmée | ☐ |
| 7 | Interdiction de **modifier les fichiers sans validation** confirmée | ☐ |
| 8 | Interdiction de **commit/push sans validation** confirmée | ☐ |
| 9 | **Rapport attendu** défini | ☐ |
| 10 | **STOP obligatoire** après rapport | ☐ |

---

## 8. Interdictions maintenues

| Interdit | Détail |
|---|---|
| Ouvrir **TAGORA Time** dans cette phase | Dépôt non rouvert |
| **Modifier TAGORA Time** | Aucune écriture |
| **Changer de branche** | Non autorisé |
| **Nettoyer le WIP** | Non autorisé |
| **`git add` / stager** | Non autorisé |
| **`git commit`** | Non autorisé |
| **`git push`** | Non autorisé |
| Lire **`.env`** | Interdit |
| Lancer des **tests** | Interdit |
| Lancer des **migrations** | Interdit |
| Créer des **fichiers documentaires dans TAGORA Time** | Interdit |
| Toucher à **Nexus** | Hors périmètre |

---

## 9. Validations futures à préparer

Les validations suivantes doivent rester **À faire** jusqu'à validation humaine explicite (Phase 4R-TOS) :

| ID | Sujet | Statut |
|---|---|---|
| **VALD-069** | Valider le protocole Phase 4Q-TOS | **À faire** |
| **VALD-070** | Valider la stratégie WIP commissions | **À faire** |
| **VALD-071** | Valider la stratégie de branche cible | **À faire** |
| **VALD-072** | Valider le report ou non de l'instanciation documentaire | **À faire** |
| **VALD-073** | Valider les conditions avant nouvelle ouverture contrôlée | **À faire** |
| **VALD-074** | Valider le besoin d'une Phase 4R-TOS | **À faire** |

---

## 10. Décision de sortie Phase 4Q

| Champ | Valeur |
|---|---|
| **Protocole 4Q créé** | **Oui** |
| **WIP clarifié** | **Non** |
| **TAGORA Time prêt** | **Non** |
| **Instanciation documentaire autorisée** | **Non** |
| **Prochaine étape** | **Phase 4R-TOS** — validation humaine du protocole de clarification WIP |

---

## 11. Conclusion

- Le **protocole de clarification** est préparé dans TOS.
- **TAGORA Time reste non ouvert.**
- **TAGORA Time reste non modifié.**
- La **baseline reste non prête.**
- L'**instanciation documentaire reste bloquée.**
- La **prochaine étape** est une **validation humaine du protocole 4Q** (Phase 4R-TOS).

---

## Références

- [Arbitrage Phase 4P](ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md)
- [Rapport Phase 4O](RAPPORT_PHASE_4O_OUVERTURE_CONTROLEE_TAGORA_TIME.md)
- [Validation Phase 4N](VALIDATION_PHASE_4N_AUTORISATION_OUVERTURE_CONTROLEE.md)
- [Plan Phase 4K](PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Complété — Phase 4Q-TOS** — Protocole de clarification WIP préparé. Validations VALD-069 à 074 **À faire**.
