# Autorisation d'ouverture contrôlée du dépôt cible — Phase 4M-TOS

## 1. Contexte

| Élément | Description |
|---|---|
| **Projet actif** | **TAGORA Operating System (TOS)** |
| **Phase 4L-TOS** | Plan d'instanciation validé — [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) |
| **Phase 4M-TOS** | **Présent document** — cadre d'autorisation d'ouverture contrôlée |
| **Module pilote** | **TAGORA Time** — dépôt cible futur nommé, **non ouvert, non modifié** |
| **Règle** | Aucun dépôt cible n'est ouvert dans cette phase |

La Phase 4L a validé le plan d'instanciation documentaire ciblée. Phase 4M **prépare le cadre d'autorisation** pour une future ouverture contrôlée — limitée à une vérification Git de surface.

**Interdictions absolues de cette phase :** aucun code, migration, refonte ou outil réel ; aucune ouverture du dépôt cible.

---

## 2. Objectif de l'autorisation

- Définir les **conditions** pour une future ouverture contrôlée du dépôt cible.
- Limiter cette ouverture à une **vérification Git de surface** (lecture seule).
- **Empêcher** toute modification involontaire.
- **Protéger** les secrets et fichiers sensibles.
- Préparer une **validation humaine** (Phase 4N-TOS) avant toute ouverture réelle.

---

## 3. Dépôt cible prévu

| Champ | Valeur |
|---|---|
| **Module cible** | TAGORA Time |
| **Dépôt cible prévu** | `C:\dev\tagora-time` |
| **Branche cible prévue** | `main` |
| **Action future potentielle** | Vérification Git limitée |
| **Action actuelle** | Documentation TOS uniquement |

> **Précision obligatoire :** le dépôt cible est **seulement nommé**. Il **ne doit pas être ouvert** dans la Phase 4M-TOS.

---

## 4. Vérifications futures autorisées seulement après validation

> **Ces commandes ne sont pas exécutées dans la Phase 4M-TOS.**  
> Elles sont proposées **uniquement** pour une future phase validée (Phase 4N-TOS et au-delà).

| # | Commande future autorisée | Usage |
|:---:|---|---|
| 1 | `cd C:\dev\tagora-time` | Se placer dans le dépôt cible |
| 2 | `git status -sb` | État synthétique de la branche |
| 3 | `git status --short -uall` | Fichiers modifiés et non suivis |
| 4 | `git rev-parse HEAD` | SHA du commit courant |
| 5 | `git log --oneline -5` | Historique récent |
| 6 | `git branch --show-current` | Branche active |

---

## 5. Interdictions absolues

| Interdit | Détail |
|---|---|
| Lire **`.env`** | Aucun fichier d'environnement |
| Afficher un **secret** | Mots de passe, tokens, clés |
| **`git add`** | Aucun staging |
| **`git commit`** | Aucun commit |
| **`git push`** | Aucun push |
| **`git reset`** | Aucun reset |
| **`git clean`** | Aucun clean |
| **Modifier un fichier** | Lecture seule |
| **Créer un fichier** | Aucune création |
| **Installer un package** | npm, pip, etc. |
| **Lancer un serveur** | dev, prod, local |
| **Exécuter un test** | unitaire, e2e, smoke |
| **Lancer une migration** | Schéma, données |
| **Ouvrir Nexus** | Hors périmètre |
| **Toucher à Supabase** | Infrastructure non cadrée |

---

## 6. Conditions avant ouverture réelle du dépôt cible

Checklist — **toutes les conditions requises** avant toute ouverture du dépôt cible :

| # | Condition | ☐ |
|:---:|---|:---:|
| 1 | **Validation humaine Phase 4N-TOS** obtenue | ☐ |
| 2 | **Dépôt cible** confirmé (`C:\dev\tagora-time`) | ☐ |
| 3 | **Branche cible prévue** confirmée (`main`) | ☐ |
| 4 | **Commandes autorisées** confirmées (§4) | ☐ |
| 5 | **Interdictions** confirmées (§5) | ☐ |
| 6 | **Aucun secret à lire** | ☐ |
| 7 | **Aucun fichier à modifier** | ☐ |
| 8 | **Aucun code à créer** | ☐ |
| 9 | **Rapport attendu** défini (§7) | ☐ |
| 10 | **STOP obligatoire** après rapport | ☐ |

---

## 7. Rapport attendu pour une future ouverture contrôlée

Rapport minimal **obligatoire** après toute future vérification Git dans le dépôt cible :

| # | Élément du rapport |
|:---:|---|
| 1 | Agent qui répond |
| 2 | Dépôt cible ouvert oui/non |
| 3 | Branche actuelle |
| 4 | HEAD actuel |
| 5 | Working tree propre oui/non |
| 6 | Fichiers modifiés ou non suivis oui/non |
| 7 | Fichier sensible détecté oui/non |
| 8 | Confirmation qu'aucun fichier n'a été modifié |
| 9 | Confirmation qu'aucun code n'a été créé |
| 10 | Confirmation qu'aucun commit ni push n'a été fait |
| 11 | Recommandation suivante dans TOS seulement |

> **STOP** immédiatement après ce rapport — aucune action supplémentaire.

---

## 8. Risques

| Risque | Mitigation |
|---|---|
| Ouvrir le **mauvais dépôt** | Confirmer `C:\dev\tagora-time` avant `cd` |
| **Dépasser** la vérification Git | Liste §4 exhaustive ; interdictions §5 |
| Lire un **secret** par erreur | Interdiction `.env` ; filtre fichiers sensibles |
| **Modifier** un fichier par erreur | Lecture seule ; aucun `git add` |
| Confondre **ouverture contrôlée** et **instanciation documentaire** | Phase 4N = vérification ; instanciation = phase ultérieure |
| Créer les **fichiers proposés** trop tôt | Plan 4K §5 — création reportée |
| Oublier le **STOP** après rapport | §7 point 11 ; règle obligatoire |

---

## 9. Règle de contrôle Phase 4M

> **La Phase 4M-TOS ne donne aucune permission d'ouvrir TAGORA Time.**
>
> Elle prépare seulement le **cadre d'autorisation**.
>
> Une **Phase 4N-TOS** devra valider humainement l'ouverture contrôlée avant toute vérification dans le dépôt cible.

---

## 10. Décision de sortie Phase 4M

| Champ | Valeur |
|---|---|
| **Autorisation 4M approuvée par** | *À remplir* |
| **Date** | *À remplir* |
| **Statut** | ☐ À valider · ☐ Validé · ☐ Reporté · ☐ À clarifier |
| **Notes** | *À remplir* |

> Validation humaine requise : VALD-057 à VALD-062.

---

## 11. Conclusion

- Le **cadre d'autorisation** est préparé dans TOS.
- **TAGORA Time reste non ouvert** et **non modifié**.
- **Nexus reste intact** — hors périmètre.
- La **prochaine étape** est la **validation humaine de l'autorisation 4M** (Phase 4N-TOS).

---

## Références

- [Plan Phase 4K](PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md)
- [Validation Phase 4L](VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md)
- [Validation Phase 4J](../paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md)
- [Application progressive TAGORA Time](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [REGISTRE_VALIDATIONS.md](../../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Créé — Phase 4M-TOS** — Cadre d'autorisation d'ouverture contrôlée. Validations VALD-057 à 062 **À faire**.
