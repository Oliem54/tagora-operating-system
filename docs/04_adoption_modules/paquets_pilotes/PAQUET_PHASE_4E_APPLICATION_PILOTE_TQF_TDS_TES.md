# Paquet documentaire d'application pilote — Phase 4E-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Module pilote** | **TAGORA Time** — référence uniquement, **non modifié** dans cette phase |
| **Phase 4A** | Audit initial — [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](../audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) |
| **Phase 4B** | Plan d'action — [TIME_PLAN_PHASE_4B_TQF_TDS_TES.md](../plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md) |
| **Phase 4C-TOS** | Cadre validation — [TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md](../validations_time/TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md) |
| **Phase 4D-TOS / 4D.1** | Arbitrage acté — [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](../validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) |
| **Validations approuvées** | VALD-029 à VALD-033 — Martin ST-Gelais — Direction — 2026-07-05 |
| **Phase 4E-TOS** | **Présent paquet** — cadre documentaire uniquement |

**Règle fondamentale :** Aucune modification du module pilote n'est faite dans cette phase. Phase 4E prépare seulement le cadre documentaire d'une future application.

---

## 2. Objectif du paquet

- Transformer les **validations approuvées** (VALD-029 à VALD-033) en **paquet de préparation** réutilisable.
- Définir **ce qui devra être créé plus tard** dans le module pilote — sans le créer maintenant.
- Encadrer les **premiers lots TQF, TDS et TES** par petites étapes documentées.
- **Éviter tout code non validé** et toute refonte massive.
- Servir de **référence unique** avant toute Phase d'application réelle (documentation dans Time ou code ultérieur).

---

## 3. Portée autorisée

Ce paquet autorise **uniquement** la préparation documentaire des éléments suivants (à créer **plus tard**, dans le module pilote ou en validation TOS) :

| Domaine | Éléments |
|---|---|
| **TQF — QA minimale** | Scénarios QA prioritaires, matrice comptes QA, matrice données QA, checklist smoke test |
| **TDS — Revue UX/UI** | Checklist revue écrans prioritaires (punch, horodateur, dashboard employé) |
| **TES — Validation avant code** | Fiche validation avant code pour changements critiques |
| **Suivi documentaire** | Décisions, écarts, validations humaines, traçabilité TKS |

---

## 4. Hors portée

Les éléments suivants restent **interdits** dans Phase 4E et tant que le paquet n'est pas validé humainement :

| Interdit | Raison |
|---|---|
| **Code fonctionnel** | Aucune application réelle sans validation du paquet |
| **Migration** | Schéma et données hors périmètre documentaire |
| **Supabase** | Infrastructure non cadrée dans ce paquet |
| **Refonte UI** | TDS = revue et checklist, pas refonte |
| **CRUD** | Logique métier dans le module pilote |
| **Workflow réel** | TOF documenté, pas implémenté |
| **Agent IA réel** | TAF documenté, pas déployé |
| **Monitoring réel** | TMF documenté, pas activé |
| **Modification d'un autre dépôt** | TOS documente ; Time/Nexus restent séparés |
| **Déploiement** | TRF s'applique après validation et QA |

---

## 5. Lot TQF — QA minimale

### Documents à créer plus tard (module pilote ou validation TOS)

| Document | Description | Référence TOS |
|---|---|---|
| Scénario punch in/out | Parcours employé — pointage entrée/sortie | [QA-TIME-001](../../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md) |
| Scénario punch avec GPS | Employé terrain — géolocalisation active | Plan 4B — QA-TIME-002 |
| Scénario GPS refusé ou absent | Permission refusée ou indisponible | Plan 4B — QA-TIME-003 |
| Scénario feuille de temps soumise | Soumission employé | Plan 4B — QA-TIME-004 |
| Scénario approbation superviseur/direction | Validation hiérarchique | Plan 4B — QA-TIME-005 |
| Matrice comptes QA | Rôles logiques sans secrets | [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md) |
| Matrice données QA | Jeu minimal resettable | [DONNEES_QA_STANDARD.md](../../06_qa/DONNEES_QA_STANDARD.md) |
| Checklist smoke test | Gate release minimale | [SMOKE_TEST_STANDARD.md](../../06_qa/SMOKE_TEST_STANDARD.md) |

### Précisions obligatoires

- **Pas de test automatisé créé maintenant** — Phase 4E reste documentaire.
- **Pas de Playwright maintenant** — automatisation après scénarios validés humainement.
- **Pas de modification du module pilote maintenant** — les fichiers ci-dessus seront créés dans une phase ultérieure, après validation du paquet 4E.

---

## 6. Lot TDS — Revue UX/UI minimale

### Écrans prioritaires validés (VALD-031)

| Priorité | Écran | Objectif de revue |
|:---:|---|---|
| 1 | **Punch employé** | Action principale visible, feedback statut punch, erreurs compréhensibles |
| 2 | **Horodateur** | Lisibilité temps, cohérence navigation, accessibilité |
| 3 | **Dashboard employé** | Hiérarchie information, statuts visuels, responsive |

### Critères de revue (checklist TDS)

| Critère | Référence |
|---|---|
| **Navigation** | [NAVIGATION_STANDARD.md](../../09_design_system/NAVIGATION_STANDARD.md) |
| **Lisibilité** | [TYPOGRAPHIE.md](../../09_design_system/TYPOGRAPHIE.md) |
| **Accessibilité** | [ACCESSIBILITE.md](../../09_design_system/ACCESSIBILITE.md) |
| **Cohérence TDS** | [TDS_CHECKLIST_REVUE_UI.md](../../09_design_system/TDS_CHECKLIST_REVUE_UI.md) |
| **Statuts visuels** | Punch actif, terminé, retard, validation, erreur |

### Exclusions explicites

- **Écrans commissions** — exclus tant que le WIP commissions n'est pas stabilisé, isolé ou reporté (VALD-030).
- **Refonte globale** — revue par écran, pas redesign complet.
- **Valeurs finales palette/typo** — à valider humainement (VALD-004).

---

## 7. Lot TES — Validation avant code

### Règle (VALD-033)

La **fiche validation avant code** est **obligatoire** pour :

- **Tout changement critique** (métier, permissions, sécurité, UX visible).
- Le **prochain changement punch/GPS** — cas prioritaire recommandé.

### Template et références

- [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [REGLES_DE_VALIDATION_AVANT_CODE.md](../../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md)
- [ADR-0002 — Documentation avant code](../../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)

### Éléments à vérifier avant tout changement futur

| # | Élément |
|:---:|---|
| 1 | **Besoin** — problème et valeur métier clarifiés |
| 2 | **Risque** — impact utilisateur, données, régression |
| 3 | **Impact UX** — alignement TDS, accessibilité |
| 4 | **Impact QA** — scénarios concernés, smoke tests |
| 5 | **Impact sécurité** — permissions, secrets, PII |
| 6 | **Rollback** — plan de retour arrière documenté |
| 7 | **Validation humaine** — décideur identifié avant code |

---

## 8. Conditions avant application réelle

Checklist — **toutes les conditions requises** avant toute création de fichiers dans le module pilote ou tout code :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | Dépôt du module pilote **propre** (pas de WIP non clarifié) | ☐ |
| 2 | **Baseline Git** identifiée et documentée | ☐ |
| 3 | Aucun **WIP non clarifié** (commissions ou autre) | ☐ |
| 4 | **Périmètre** validé — TQF, TDS, TES lots approuvés | ☐ |
| 5 | **Documents à créer** listés et priorisés (§5 à §7) | ☐ |
| 6 | **Validation humaine** du paquet Phase 4E obtenue | ☐ |
| 7 | **Interdictions** rappelées et acceptées (§4) | ☐ |
| 8 | **Aucun secret** dans la documentation | ☐ |
| 9 | **Aucun code** sans fiche validation TES si changement critique | ☐ |

---

## 9. Ordre recommandé

Séquence documentaire avant toute application réelle :

| Étape | Action |
|:---:|---|
| 1 | **Confirmer baseline** Git du module pilote (commit, branche, exclusion WIP) |
| 2 | **Créer documentation QA minimale** — scénarios §5 dans le module pilote |
| 3 | **Créer comptes/données QA** — matrices sans secrets |
| 4 | **Créer checklist TDS** — revue écrans punch, horodateur, dashboard employé |
| 5 | **Créer fiche validation TES** — première VAL-TIME sur changement planifié |
| 6 | **Faire revue humaine** — VALD paquet 4E + lots TQF/TDS/TES |
| 7 | **Décider** si une Phase d'application réelle peut démarrer |

---

## 10. Risques

| Risque | Mitigation |
|---|---|
| **Mélanger TOS et module pilote** | TOS documente ; création dans Time seulement après validation |
| **Appliquer trop vite** | Checklist §8 + validation paquet 4E |
| **Documenter trop lourdement** | Petits lots, un pilier à la fois |
| **Toucher au code sans validation** | Fiche TES obligatoire ; interdiction explicite §4 |
| **Oublier les données QA** | Matrices comptes/données avant tests |
| **Ignorer UX/accessibilité** | Checklist TDS sur écrans P1 |
| **Commencer sur un WIP non propre** | VALD-029 et VALD-030 — baseline et WIP clarifiés |

---

## 11. Décision de sortie Phase 4E

| Champ | Valeur |
|---|---|
| **Paquet 4E approuvé par** | *À remplir* |
| **Date** | *À remplir* |
| **Statut** | ☐ À valider · ☐ Validé · ☐ Reporté · ☐ À clarifier |
| **Notes** | *À remplir* |

> La validation humaine de ce paquet (VALD-034) est requise avant toute Phase d'application réelle dans le module pilote.

---

## 12. Conclusion

- **TOS est prêt** à guider une future application progressive TQF → TDS → TES sur le module pilote.
- **Phase 4E reste documentaire** — aucun fichier créé dans TAGORA Time dans cette phase.
- **Aucune application réelle** ne commence encore — code, migrations et refonte restent interdits.
- **La suite** dépend d'une **validation humaine du paquet** (Phase 4F-TOS) et du respect de la checklist §8.

---

## Références

- [Arbitrage Phase 4D.1](../validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [Stratégie adoption modules](../STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Créé — Phase 4E-TOS** — Paquet documentaire. Validation humaine du paquet **À faire** (VALD-034 à VALD-038).
