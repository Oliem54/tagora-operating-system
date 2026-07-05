# Plan d'instanciation documentaire ciblée — Phase 4K-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Phase 4J-TOS** | Porte de passage validée — [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](../paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) |
| **Phase 4K-TOS** | **Présent document** — plan d'instanciation ciblée |
| **Module pilote** | **TAGORA Time** — référence uniquement, **non modifié** |
| **Règle** | Aucun autre dépôt n'est ouvert ; aucun module pilote n'est modifié |

La Phase 4J a validé la porte de passage vers une future instanciation documentaire. Phase 4K **prépare un plan ciblé** — sans confondre planification TOS et action dans un dépôt module.

**Interdictions absolues de cette phase :** aucun code, migration, refonte ou outil réel.

---

## 2. Cible documentaire future

| Champ | Valeur |
|---|---|
| **Module cible** | TAGORA Time |
| **Dépôt cible référencé** | `C:\dev\tagora-time` |
| **Branche cible prévue** | `main` |
| **Statut du dépôt cible** | À vérifier plus tard, dans une phase séparée |
| **Nature de l'action future** | Instanciation documentaire seulement |
| **Action actuelle** | Documentation TOS uniquement |

> **Précision obligatoire :** le dépôt cible est nommé **à titre de planification seulement**. Il **ne doit pas être ouvert ni modifié** dans la Phase 4K-TOS.

---

## 3. Périmètre documentaire futur autorisé

Seuls les types de documents suivants pourront être instanciés **dans une phase ultérieure validée** :

| Type | Description |
|---|---|
| Documents QA minimaux | Scénarios et matrices de test |
| Scénarios QA prioritaires | Parcours critiques punch, GPS, feuille de temps |
| Matrice comptes QA | Rôles et identifiants logiques (sans secrets) |
| Matrice données QA | Données fictives ou anonymisées |
| Checklist TDS | Revue UX/UI écrans P1 |
| Fiche validation avant code | Garde-fou TES avant changement code |
| README d'application TOS | Fiche d'identité application dans le module |
| Plan documentaire d'application TOS | Lots TQF → TDS → TES |

---

## 4. Hors portée

Les éléments suivants restent **strictement interdits** :

| Interdit | Détail |
|---|---|
| Code fonctionnel | Aucune application, composant ou script métier |
| Migration | Schéma et données non touchés |
| Supabase | Infrastructure non cadrée ici |
| CRUD | Logique métier non modifiée |
| Refonte UI | Templates TDS = revue, pas refonte |
| Changement de workflow | TOF documenté uniquement |
| Automatisation réelle | Pas de Playwright, CI, tests `.spec.ts` |
| Agent IA réel | TAF documenté uniquement |
| Déploiement | TRF s'applique après validations ultérieures |
| Modification de configuration | `.env`, secrets, tokens |
| Lecture ou création de secret | Interdit dans toute phase documentaire |
| Fichier hors périmètre §3 | Tout fichier non listé au §5 |

---

## 5. Fichiers documentaires futurs proposés

> **Ces fichiers sont proposés seulement.** Ils **ne doivent pas être créés** dans la Phase 4K-TOS ni sans validation Phase 4L-TOS.

| Fichier futur proposé | Type | Pilier TOS | Source template TOS | Statut | Notes |
|---|---|---|---|---|---|
| `docs/tos/APPLICATION_TOS_README.md` | README application TOS | TOS global | [TEMPLATE_APPLICATION_PILOTE_README.md](../templates_pilotes/TEMPLATE_APPLICATION_PILOTE_README.md) | Proposé | Fiche d'identité application dans le module |
| `docs/tos/PLAN_APPLICATION_TOS_TIME.md` | Plan application | TOS global | [TEMPLATE_PILOTE_PLAN_APPLICATION.md](../templates_pilotes/TEMPLATE_PILOTE_PLAN_APPLICATION.md) | Proposé | Lots TQF → TDS → TES |
| `docs/qa/SCENARIO_QA_TIME_PUNCH_IN_OUT.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_PUNCH_GPS.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_GPS_REFUSE_ABSENT.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_FEUILLE_TEMPS_SOUMISE.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/SCENARIO_QA_TIME_APPROBATION_DIRECTION.md` | Scénario QA | TQF | [TEMPLATE_PILOTE_SCENARIO_QA.md](../templates_pilotes/TEMPLATE_PILOTE_SCENARIO_QA.md) | Proposé | VALD-032 — scénario obligatoire |
| `docs/qa/MATRICE_COMPTES_QA_TIME.md` | Matrice comptes QA | TQF | [TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_COMPTES_QA.md) | Proposé | Sans secrets ni mots de passe réels |
| `docs/qa/MATRICE_DONNEES_QA_TIME.md` | Matrice données QA | TQF | [TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md](../templates_pilotes/TEMPLATE_PILOTE_MATRICE_DONNEES_QA.md) | Proposé | Données fictives ou anonymisées |
| `docs/tds/CHECKLIST_TDS_TIME_PUNCH_HORODATEUR_DASHBOARD.md` | Checklist TDS | TDS | [TEMPLATE_PILOTE_CHECKLIST_TDS.md](../templates_pilotes/TEMPLATE_PILOTE_CHECKLIST_TDS.md) | Proposé | VALD-031 — écrans P1 punch, horodateur, dashboard |
| `docs/tes/VALIDATION_AVANT_CODE_TIME_PUNCH_GPS.md` | Fiche validation avant code | TES | [TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md](../templates_pilotes/TEMPLATE_PILOTE_VALIDATION_AVANT_CODE.md) | Proposé | VALD-033 — avant changement punch/GPS |

> Chemins relatifs au **dépôt cible** `C:\dev\tagora-time` — à créer uniquement après validation Phase 4L-TOS.

---

## 6. Conditions avant toute instanciation réelle

Checklist — **toutes les conditions requises** avant toute création de fichier dans le dépôt cible :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | **Validation humaine Phase 4L-TOS** obtenue | ☐ |
| 2 | **Dépôt cible** confirmé (`C:\dev\tagora-time`) | ☐ |
| 3 | **Branche cible** confirmée (`main`) | ☐ |
| 4 | **Baseline Git cible** propre (commit, WIP clarifié) | ☐ |
| 5 | **Aucun WIP non clarifié** | ☐ |
| 6 | **Liste des fichiers autorisés** confirmée (§5) | ☐ |
| 7 | **Aucun secret à lire** — pas de `.env`, credentials, tokens | ☐ |
| 8 | **Aucun code à créer** — documentation Markdown uniquement | ☐ |
| 9 | **Aucune migration** | ☐ |
| 10 | **Rollback documentaire prévu** — procédure de retrait si erreur | ☐ |
| 11 | **Rapport attendu** défini avant toute action | ☐ |

---

## 7. Ordre recommandé pour une future phase

Séquence recommandée **après validation Phase 4L-TOS** :

| # | Étape |
|:---:|---|
| 1 | Valider le plan 4K humainement (Phase 4L-TOS) |
| 2 | Confirmer le dépôt cible et la branche cible |
| 3 | Vérifier **uniquement** l'état Git du dépôt cible (lecture seule) |
| 4 | Créer **uniquement** les dossiers documentaires autorisés |
| 5 | Instancier les templates validés (§5) |
| 6 | Ne créer **aucun code** |
| 7 | Produire un rapport |
| 8 | Arrêter **avant tout commit** dans le dépôt cible |
| 9 | Faire une sauvegarde Git séparée **si autorisée** par validation humaine |

---

## 8. Risques

| Risque | Mitigation |
|---|---|
| Ouvrir le **mauvais dépôt** | Nommer explicitement `C:\dev\tagora-time` ; vérifier chemin avant toute action |
| Confondre **planification TOS** et **action réelle** | Phase 4K = TOS uniquement ; Phase 4L requise avant dépôt cible |
| Créer des **fichiers non autorisés** | Liste §5 exhaustive ; aucun fichier hors liste |
| Créer du **code par erreur** | §4 interdictions ; templates Markdown uniquement |
| Lire un **`.env`** | Interdit ; aucune lecture de secret |
| Modifier **TAGORA Time** sans validation | Phase 4L-TOS obligatoire |
| Mélanger **QA documentaire** et **test automatisé réel** | Scénarios Markdown ≠ fichiers `.spec.ts` |
| Oublier de **vérifier la baseline Git cible** | VALD-029, VALD-030 ; étape 3 de la séquence §7 |

---

## 9. Règle de contrôle Phase 4K

> **La Phase 4K-TOS ne donne aucune permission d'action dans le dépôt cible.**
>
> Elle sert seulement à documenter le plan, les fichiers proposés et les conditions de passage.
>
> Une **Phase 4L-TOS** devra valider humainement ce plan avant toute préparation dans un autre dépôt.

---

## 10. Décision de sortie Phase 4K

| Champ | Valeur |
|---|---|
| **Plan 4K approuvé par** | *À remplir* |
| **Date** | *À remplir* |
| **Statut** | ☐ À valider · ☐ Validé · ☐ Reporté · ☐ À clarifier |
| **Notes** | *À remplir* |

> Validation humaine requise : VALD-050 à VALD-056.

---

## 11. Conclusion

- Le **plan d'instanciation ciblée** est préparé dans TOS.
- **TAGORA Time reste intact** — dépôt non ouvert, non modifié.
- **Nexus reste intact** — hors périmètre.
- La **prochaine étape** est une **validation humaine du plan 4K** (Phase 4L-TOS).
- **Aucune instanciation réelle** ne commence encore.

---

## Références

- [Validation Phase 4J](../paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md)
- [Paquet final Phase 4I](../paquets_pilotes/PAQUET_FINAL_PHASE_4I_TRANSITION_APPLICATION_DOCUMENTAIRE.md)
- [Templates application pilote](../templates_pilotes/README_TEMPLATES_APPLICATION_PILOTE.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Créé — Phase 4K-TOS** — Plan d'instanciation ciblée. Validations VALD-050 à 056 **À faire**.
