# Standard — Données QA

## Objectif

Définir le standard officiel des **jeux de données QA**, fixtures et procédures de reset pour l'écosystème TAGORA.

## Portée

Données de test, seeds, fixtures et environnements QA — tous modules. **TAGORA Time** en priorité.

---

## Objectif des données QA

Les données QA permettent d'**exécuter des scénarios reproductibles** sans toucher à la production :

- Même état de départ à chaque test.
- Comportements métier prévisibles (punchs, rapports, permissions).
- Reset possible après une campagne de tests.
- Isolation totale des données employés réels.

---

## Types de données

| Type | Description | Usage TAGORA |
|---|---|---|
| **Données réelles** | Données production ou copie production | **Interdit** pour les tests QA routiniers |
| **Données anonymisées** | Données dérivées de la prod, identifiants masqués | Exceptionnel, avec gouvernance — pas dans TOS |
| **Données fictives** | Jeu créé pour QA (noms, compagnies, punchs inventés) | **Recommandé** — défaut pour Time |

> **Règle :** Ne jamais documenter de données sensibles réelles (noms, NAS, coordonnées, photos réelles) dans TOS.

---

## Données minimales recommandées — TAGORA Time

Jeu minimal à prévoir dans l'environnement QA Time (structure conceptuelle — détails dans le dépôt Time) :

| Domaine | Contenu minimal suggéré |
|---|---|
| **Compagnies** | Au moins 1 compagnie QA dédiée |
| **Employés** | Comptes alignés sur [COMPTES_QA_STANDARD.md](COMPTES_QA_STANDARD.md) |
| **Horaires** | Plages horaires types pour tests punch |
| **Punchs** | Historique contrôlé ou état vide selon scénario |
| **Pauses** | Règles et enregistrements de test si applicable |
| **Dîners / soupers** | Cas métier Time si applicable au module |
| **Lieux de travail** | Sites fixes pour employé bâtisse / QR |
| **Véhicules** | Si punch ou suivi lié aux véhicules |
| **Clients** | Si rapports ou affectations client |
| **Photos / preuves** | Fichiers fictifs — jamais photos réelles |
| **Rapports** | Données suffisantes pour valider vue direction |

L'objectif n'est pas de tout créer d'un coup — mais de **savoir ce qui sera nécessaire** pour les scénarios critiques.

---

## Principe de reset QA

Avant ou après une campagne de tests (manuelle ou automatisée) :

1. **Remettre les données QA dans un état connu** (seed ou script reset).
2. **Documenter la procédure** dans le dépôt Time — pas seulement dans les têtes.
3. **Automatiser le reset** lorsque possible avant les runs Playwright en CI.
4. **Ne pas reset** la production — reset = environnement QA/staging uniquement.

État cible typique pour `QA-TIME-001` : employé QA sans punch actif, ou avec historique documenté explicitement dans le scénario.

---

## Principe de scénarios reproductibles

Chaque scénario QA documentaire précise :

- **Données QA requises** — ce qui doit exister avant le test.
- **État initial** — punch ouvert ou fermé, date, compagnie active.
- **Données créées pendant le test** — et si le reset est nécessaire après.

Sans état initial clair, deux exécutions du même scénario peuvent donner des résultats différents — le scénario est alors inutilisable.

---

## Règles

- Données fictives par défaut ; anonymisées seulement avec gouvernance explicite.
- Versionner seeds/fixtures avec le dépôt module Time.
- Aligner données QA avec comptes QA (`qa-employe`, etc.).
- Documenter la procédure de reset.
- Aucune donnée sensible réelle dans TOS.

---

## Éléments à documenter plus tard

- Scripts seed et reset (dépôt Time)
- Fixtures par scénario (QA-TIME-001, etc.)
- Politique rétention données QA
- Synchronisation multi-environnements (local, staging, CI)

## Statut

**Enrichi — Phase 3A** — Cadre données défini. Implémentation fixtures : sur TAGORA Time.
