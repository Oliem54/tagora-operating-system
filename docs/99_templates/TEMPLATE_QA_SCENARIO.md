# Template — Scénario QA

## Objectif

Fournir le modèle standard pour documenter un scénario QA reproductible dans l'écosystème TAGORA (TQF).

## Portée

Scénarios manuels et futurs scénarios automatisés (Playwright) — tous modules.

## Principes

- Reproductibilité par toute l'équipe (humains, développeurs, agents IA, gestionnaires).
- Comptes et données QA référencés explicitement — jamais de secrets.
- Validation humaine du scénario **avant** automatisation.
- ID unique et traçable (`QA-{MODULE}-{NNN}`).

---

## Modèle complet

```markdown
# [ID] — [Nom du scénario]

## Métadonnées

| Champ | Valeur |
|---|---|
| **ID** | QA-[MODULE]-[NNN] |
| **Nom** | [Nom court et explicite] |
| **Module** | [TAGORA Time / Stock Premium / ...] |
| **Pilier TOS** | [TQF / TDS / ...] |
| **Priorité** | [Critique / Haute / Normale / Basse] |
| **Type** | [Manuel / Playwright / API / Smoke] |
| **Statut** | [Brouillon / En revue / Validé / Automatisé / Déprécié] |

## Objectif

[Ce que ce scénario valide — une phrase claire.]

## Préconditions

- [Environnement QA disponible]
- [Données QA dans l'état requis]
- [Compte QA créé et fonctionnel]
- [Autre prérequis]

## Compte QA requis

| Identifiant logique | Rôle |
|---|---|
| [qa-employe] | [Employé / Superviseur / ...] |

## Données QA requises

- [Compagnie QA, employé, état punch initial, etc.]
- [Référence fixture ou seed — dépôt module]

## Étapes manuelles

1. [Étape 1 — action utilisateur]
2. [Étape 2]
3. [Étape 3]

## Résultat attendu

[Comportement observable à la fin du scénario.]

## Critères d'acceptation

- [ ] [Critère 1 — vérifiable]
- [ ] [Critère 2]
- [ ] [Critère 3]

## Risques couverts

- [Régression punch / permissions / rapport / ...]

## Notes

- [Points à confirmer dans le module]
- [Lien futur spec Playwright : tests/e2e/...]
- [Dépendances autres scénarios]

## Historique

| Date | Auteur | Changement |
|---|---|---|
| [AAAA-MM-JJ] | [Nom] | Création |
```

---

## Convention ID

Format : **`QA-{MODULE}-{NNN}-{TITRE_COURT}`**

| Partie | Exemple |
|---|---|
| MODULE | `TIME`, `STOCK`, `VOICE` |
| NNN | `001`, `002` — séquentiel par module |
| TITRE | `PUNCH_IN_OUT_EMPLOYE` |

Exemple fichier : `docs/06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md`

---

## Cycle de vie d'un scénario

```
Brouillon → En revue → Validé (humain) → Automatisé (optionnel) → Déprécié
```

**Règle TQF :** Aucun test Playwright sans scénario au statut **Validé**.

---

## Éléments à documenter plus tard

- Registre central de tous les scénarios par module
- Critères de revue et validateurs
- Lien automatique template ↔ specs Playwright

## Statut

**Enrichi — Phase 3A** — Template opérationnel. Voir exemple : [QA-TIME-001](../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md).
