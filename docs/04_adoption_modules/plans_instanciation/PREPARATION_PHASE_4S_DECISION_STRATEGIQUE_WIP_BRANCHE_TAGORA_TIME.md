# Préparation Phase 4S — Décision stratégique WIP et branche cible TAGORA Time

## Statut du document

```text
STATUS=PREPARED_FOR_MARTIN_DECISION
PHASE_4S_DECISION=OPEN
TAGORA_TIME_ACCESSED=NO
TAGORA_TIME_MODIFIED=NO
```

| Champ | Valeur |
|---|---|
| **Projet actif** | TAGORA Operating System (TOS) uniquement |
| **Phase** | Phase 4S-TOS — préparation documentaire |
| **Décideur attendu** | Martin ST-Gelais — Direction |
| **Date de préparation** | 2026-08-10 |
| **Nature** | Préparation d'une décision humaine — **pas** la décision finale |

---

## A. Contexte

| Élément | État officiel TOS |
|---|---|
| Phase 4R-TOS | **COMPLETE** — VALD-069 à 074 **Validé** (Martin ST-Gelais — Direction, 2026-07-05) |
| Protocole Phase 4Q-TOS | **VALIDATED** via Phase 4R |
| Phase 4S-TOS | Préparation d'une **décision stratégique** WIP commissions + branche cible |
| Accès TAGORA Time en Phase 4S | **Aucun** — documentaire TOS seulement |
| Source de l'état Time | Uniquement les documents TOS déjà existants (dernière lecture Git contrôlée = Phase 4O) |

Phase 4S **ne tranche pas** encore le sort du WIP ni la branche cible.
Elle prépare les options, les conditions et la matrice de décision pour Martin.

Références :

- [ROADMAP_DOCUMENTAIRE.md](../../../ROADMAP_DOCUMENTAIRE.md)
- [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md)
- [POINT_REPRISE_BUREAU_PHASE_4R_VERS_4S.md](POINT_REPRISE_BUREAU_PHASE_4R_VERS_4S.md)
- [PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md](PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md)
- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

---

## B. État connu du WIP (sources TOS uniquement)

### Nature du WIP

WIP **commissions** TAGORA Time — travail applicatif en cours observé lors de la lecture Git contrôlée Phase 4O, documenté ensuite dans 4P / 4Q / 4R / point de reprise.

### État connu lors de la dernière inspection autorisée (Phase 4O)

Source : rapport Phase 4O, repris dans le protocole 4Q et le point de reprise 4R→4S.

| Champ | Valeur documentée |
|---|---|
| **Dépôt** | `C:\dev\tagora-time` |
| **Branche observée** | `feature/admin-commissions-premium-header-kpi` |
| **HEAD observé** | `5d4e39780690c2a93c4bb04b8f7242a686cb8c48` |
| **Working tree propre** | **Non** |
| **Fichiers modifiés** | **Oui** (5) |
| **Fichiers non suivis** | **Non** |
| **Fichier sensible détecté** | **Non** |

### Fichiers / zone concernés (observés via `git status` Phase 4O — contenu non ouvert)

| Fichier |
|---|
| `src/app/admin/commissions/AdminCommissionsPageClient.tsx` |
| `src/app/admin/commissions/acces-direction/AdminCommissionBookAccessClient.tsx` |
| `src/app/components/admin/AdminCommissionsMetricCard.tsx` |
| `src/app/components/ui/PageHeader.tsx` |
| `src/app/globals.css` |

### Risques connus (documentés 4P / 4Q / 4R)

- Branche active **différente de `main`**
- Working tree **non propre**
- Risque d'**écraser ou mélanger** un travail en cours
- Risque de créer des documents TOS dans un dépôt **non stabilisé**
- Baseline documentaire cible **non prête**
- Instanciation documentaire **bloquée**

### Éléments encore inconnus (non inventés)

- État Git Time **actuel** (post–Phase 4O) — non relu dans ce bloc
- Contenu exact des 5 fichiers WIP — jamais ouvert selon TOS
- Ahead / behind vs `origin` au moment présent
- Présence éventuelle de nouveaux fichiers ou commits depuis Phase 4O
- Confirmation que `feature/admin-commissions-premium-header-kpi` est toujours la branche active
- Confirmation que `main` est ou n'est pas une baseline utilisable aujourd'hui

---

## C. Options WIP (extrait exact du protocole Phase 4Q)

Source obligatoire : [PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md](PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md) §5.

| Option | Description (source 4Q) | Avantages (source 4Q) | Risques (source 4Q) | Statut recommandé (source 4Q) |
|---|---|---|---|---|
| **A — Terminer le WIP commissions avant toute suite** | Le travail commissions est finalisé, testé et sauvegardé dans TAGORA Time avant toute instanciation documentaire. | Baseline plus claire. | Dépend d'un travail applicatif non terminé. | **À évaluer** |
| **B — Isoler le WIP dans une branche dédiée** | Le WIP est protégé dans une branche séparée avant de revenir à une baseline propre. | Protège le travail en cours. | Nécessite des actions Git futures dans TAGORA Time. | **À évaluer** |
| **C — Reporter l'instanciation documentaire** | Aucune action dans TAGORA Time tant que le WIP n'est pas stabilisé. | Option la plus sécuritaire. | Retarde l'application documentaire. | **Recommandée par défaut** |
| **D — Créer une future branche documentaire dédiée** | Une branche dédiée serait créée plus tard pour les fichiers documentaires TOS, après clarification du WIP. | Évite de toucher `main` ou le WIP. | Nécessite validation et protocole Git séparé. | **À évaluer** |

### Analyse complémentaire TOS (sans remplacer le texte 4Q)

| Option | Réversibilité | Impact adoption TOS | Impact potentiel Time | Besoin futur accès Time | Besoin futur GO Martin |
|---|---|---|---|---|---|
| **A** | Moyenne — dépend de la qualité du finish applicatif | Accélère ensuite l'instanciation si baseline propre | Écriture / tests / commit possibles dans Time | **Oui** (travail applicatif) | **Oui** (GO Time distinct) |
| **B** | Élevée si isolation Git propre | Permet ensuite une baseline plus stable | Actions Git Time (branche / stash / commit) | **Oui** (Git contrôlé) | **Oui** |
| **C** | Maximale — aucun toucher Time | Retarde l'instanciation documentaire | Aucun immédiat | **Non** tant que report maintenu | **Oui** pour lever le report |
| **D** | Élevée si créée après clarification | Sépare docs TOS du WIP | Création de branche documentaire plus tard | **Oui** (plus tard, encadré) | **Oui** + protocole Git séparé |

Aucune option n'est choisie ici.

---

## D. Position conservatrice actuelle

Formulation officielle (protocole 4Q §6), validée en Phase 4R :

> La position conservatrice recommandée est de **ne pas ouvrir ni modifier TAGORA Time** tant que le WIP commissions n'a pas été clarifié humainement.
>
> L'option **recommandée par défaut** est de **reporter l'instanciation documentaire** et de **préparer une future validation humaine** avant toute nouvelle lecture ou action Git.

VALD-070 (Validé) : reporter toute instanciation documentaire tant que le WIP commissions n'est pas clarifié.

```text
CURRENT_CONSERVATIVE_POSITION=OPTION_C_REPORT
FINAL_STRATEGIC_DECISION=OPEN
```

La position par défaut **n'est pas** une décision Martin finale pour Phase 4S.

---

## E. Branche cible — choix documentés dans TOS

Aucun nom de branche inventé. Choix **explicitement** présents dans la documentation TOS :

| Choix documenté | Où documenté | Nature |
|---|---|---|
| `feature/admin-commissions-premium-header-kpi` | Phase 4O / 4P / 4Q / point de reprise | Branche **observée** (dernière lecture autorisée) |
| `main` | Plan 4K (cible théorique) ; VALD-071 / 4R | Référence théorique — **non confirmée** comme baseline active |
| Future branche documentaire dédiée | Option D du protocole 4Q | Branche **future** — non créée ; nom non fixé dans TOS |

### Comparaison (sur base documentaire uniquement)

| Critère | `feature/admin-commissions-premium-header-kpi` | `main` | Future branche documentaire (Option D) |
|---|---|---|---|
| Objectif | Continuer / protéger le WIP commissions observé | Baseline cible théorique pour instanciation | Isoler docs TOS du WIP applicatif |
| Avantages | Reflète l'état observé 4O ; contient le WIP | Alignée avec plan 4K initial | Évite de toucher `main` ou le WIP |
| Risques | Working tree non propre ; mélange docs/WIP | Non confirmée comme baseline active ; état actuel inconnu | Nécessite protocole Git + validation séparés |
| Isolation du WIP | Faible si on documente dessus | Possible seulement si WIP ailleurs | Forte (si créée après clarification) |
| Traçabilité | HEAD 4O connu | Non relue récemment | À définir plus tard |
| Facilité QA | Inconnue (contenu non ouvert) | Inconnue actuellement | Dépend de la baseline source |
| Rollback | Dépend du WIP non commit documenté | Standard si clean | Standard si branche dédiée |
| Impact sur `main` | Indirect si merge futur | Direct si on y écrit | Minimal si docs hors `main` WIP |
| Besoin nouvelle lecture Git contrôlée | **Oui** pour confirmer état actuel | **Oui** pour confirmer utilisabilité | **Oui** avant création |

```text
BRANCH_DECISION_REQUIRES_CONTROLLED_TIME_READ=YES
```

**Justification :** VALD-071 confirme que `main` n'est pas validée comme baseline active ; la seule observation Git date de Phase 4O ; l'état actuel (branche, HEAD, working tree, ahead/behind) est **inconnu** dans TOS. Choisir définitivement sans relecture contrôlée serait une invention.

---

## F. Nouvelle lecture Git contrôlée de Time

```text
CONTROLLED_TIME_READ_RECOMMENDED=YES
```

**RATIONALE=** La dernière lecture autorisée est Phase 4O. Depuis, aucune inspection Time n'est documentée dans TOS. La décision stratégique finale (WIP + branche) porte sur un dépôt dont l'état peut avoir changé. Une lecture **READ-ONLY** future, sous GO Martin séparé et projet actif Time, réduirait le risque de décider sur des données obsolètes — **sans** modifier Time.

### Périmètre proposé pour une future inspection (non exécutée ici)

Sous GO Martin distinct uniquement :

1. Confirmer chemin local `C:\dev\tagora-time` (ou chemin acté)
2. Branche actuelle
3. `HEAD`
4. `origin` / tracking
5. Ahead / behind
6. Working tree clean / dirty
7. Liste des fichiers WIP (status)
8. Diff **limité** au périmètre commissions déjà documenté (si toujours pertinent)
9. Interdits : `.env`, secrets, DB, migration, tests, build, write, stash destructif, reset

**Cette inspection n'est PAS exécutée dans le présent bloc.**

---

## G. Conditions avant toute future autorisation Time

Checklist obligatoire avant toute future action dans TAGORA Time (complète VALIDATION_4R §7 + protocole 4Q §7) :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | **GO Martin séparé** pour le projet TAGORA Time | ☐ |
| 2 | Projet actif explicitement **TAGORA Time** | ☐ |
| 3 | Chemin local confirmé | ☐ |
| 4 | Branche confirmée | ☐ |
| 5 | Working tree **compris** (pas nécessairement clean) | ☐ |
| 6 | WIP **identifié** | ☐ |
| 7 | Aucun secret lu | ☐ |
| 8 | Aucun `.env` lu | ☐ |
| 9 | Aucune DB | ☐ |
| 10 | Aucune migration | ☐ |
| 11 | Aucune production | ☐ |
| 12 | Scope exact des fichiers autorisés | ☐ |
| 13 | Rollback / sortie définie | ☐ |
| 14 | Rapport final obligatoire | ☐ |
| 15 | STOP obligatoire après rapport | ☐ |
| 16 | Instanciation documentaire toujours **non autorisée** sauf GO distinct ultérieur | ☐ |

---

## H. Matrice de décision Martin

Toutes les décisions restent **OPEN**. Aucune case n'est tranchée par ce document.

### DECISION_1_WIP

Options exactes issues de 4Q :

| Code | Libellé | Statut |
|---|---|---|
| A | Terminer le WIP commissions avant toute suite | **OPEN** |
| B | Isoler le WIP dans une branche dédiée | **OPEN** |
| C | Reporter l'instanciation documentaire | **OPEN** |
| D | Créer une future branche documentaire dédiée | **OPEN** |

```text
DECISION_1_WIP=OPEN
```

### DECISION_2_TARGET_BRANCH

Options supportées par la documentation TOS :

| Code | Choix | Statut |
|---|---|---|
| BR-FEATURE | `feature/admin-commissions-premium-header-kpi` (observée 4O) | **OPEN** |
| BR-MAIN | `main` (référence théorique — non confirmée) | **OPEN** |
| BR-DOC-FUTURE | Future branche documentaire dédiée (Option D — nom non fixé) | **OPEN** |

```text
DECISION_2_TARGET_BRANCH=OPEN
```

### DECISION_3_CONTROLLED_TIME_READ

| Choix | Statut |
|---|---|
| YES | **OPEN** |
| NO | **OPEN** |

```text
DECISION_3_CONTROLLED_TIME_READ=OPEN
```

### DECISION_4_FUTURE_TIME_AUTHORIZATION

| Choix | Statut |
|---|---|
| HOLD | **OPEN** |
| POSSIBLE_AFTER_SEPARATE_GO | **OPEN** |

```text
DECISION_4_FUTURE_TIME_AUTHORIZATION=OPEN
```

---

## I. Recommandation TOS

```text
TOS_RECOMMENDATION_ONLY=YES
MARTIN_DECISION_REQUIRED=YES
```

**Recommandation argumentée (non validante) :**

1. **DECISION_1_WIP** — maintenir pour l'instant la ligne **Option C (report)** comme position opérationnelle de sécurité, jusqu'à décision Martin explicite ; évaluer A/B/D seulement après clarté sur l'état réel Time.
2. **DECISION_2_TARGET_BRANCH** — **ne pas** confirmer `main` ni la feature comme baseline active sans relecture ; laisser OPEN.
3. **DECISION_3_CONTROLLED_TIME_READ** — **YES** recommandé avant décision finale, en READ-ONLY, sous GO Martin séparé.
4. **DECISION_4_FUTURE_TIME_AUTHORIZATION** — **HOLD** jusqu'après décisions 1–3 ; puis seulement `POSSIBLE_AFTER_SEPARATE_GO`.

Critères favorisés : sécurité, réversibilité, absence de perte du WIP, séparation WIP / docs TOS, traçabilité Git, adoption progressive, risque minimal pour Time.

> Une recommandation TOS **n'est pas** une validation Martin.

---

## J. STOP Gate

```text
PHASE_4S_PREPARATION=COMPLETE
PHASE_4S_STRATEGIC_DECISION=OPEN

TAGORA_TIME_ACCESS_AUTHORIZED=NO
TAGORA_TIME_WRITE_AUTHORIZED=NO

INSTANCIATION_TIME_AUTHORIZED=NO

NEXT_STEP=MARTIN_STRATEGIC_DECISION
STOP_REQUIRED=YES
```

---

## Références

- [VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md](VALIDATION_PHASE_4R_PROTOCOLE_CLARIFICATION_WIP.md)
- [PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md](PROTOCOLE_PHASE_4Q_CLARIFICATION_WIP_TAGORA_TIME.md)
- [POINT_REPRISE_BUREAU_PHASE_4R_VERS_4S.md](POINT_REPRISE_BUREAU_PHASE_4R_VERS_4S.md)
- [ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md](ARBITRAGE_PHASE_4P_BASELINE_WIP_TAGORA_TIME.md)
- [RAPPORT_PHASE_4O_OUVERTURE_CONTROLEE_TAGORA_TIME.md](RAPPORT_PHASE_4O_OUVERTURE_CONTROLEE_TAGORA_TIME.md)
- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [ROADMAP_DOCUMENTAIRE.md](../../../ROADMAP_DOCUMENTAIRE.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Phase 4S préparation documentaire complète — décision stratégique OPEN — STOP.**
