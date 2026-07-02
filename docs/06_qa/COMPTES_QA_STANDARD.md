# Standard — Comptes QA

## Objectif

Définir le standard officiel de gestion des **comptes QA** dans l'écosystème TAGORA — identifiants logiques, rôles et règles, sans secrets.

## Portée

Comptes utilisateurs dédiés aux tests — tous modules et environnements **non production**. **TAGORA Time** en priorité.

---

## Définition

Un **compte QA** est un compte utilisateur créé **exclusivement** pour les tests, dans un environnement QA ou staging. Il :

- Représente un **rôle métier** (employé, superviseur, direction, etc.).
- Possède des **permissions connues et documentées**.
- Est **réinitialisable** sans impact sur des employés réels.
- Est **identifiable** par convention de nommage (ex. préfixe `qa-`).

---

## Pourquoi des comptes QA séparés des vrais employés

| Risque sans comptes QA | Bénéfice avec comptes QA |
|---|---|
| Tests sur données réelles → corruption, fuites | Données isolées, reset possible |
| Punch ou modification sur un vrai employé | Aucun impact production |
| Mot de passe partagé d'un utilisateur réel | Credentials QA dédiés, rotation sécurisée |
| Scénarios non reproductibles | Même compte, mêmes droits à chaque test |
| Non-conformité confidentialité | Respect séparation test / production |

> **Règle :** Ne jamais utiliser un compte employé réel pour les tests automatisés ou manuels répétés.

---

## Rôles types à prévoir — TAGORA Time

Comptes QA **logiques** à créer dans l'environnement Time (détails techniques à définir dans le dépôt Time) :

| Identifiant logique | Rôle | Usage QA typique |
|---|---|---|
| `qa-employe` | Employé standard | Punch in/out, dashboard employé, pauses |
| `qa-superviseur` | Superviseur | Validation équipe, vue superviseur |
| `qa-direction` | Direction | Rapports direction, vue agrégée |
| `qa-admin` | Administrateur | Configuration, gestion utilisateurs |
| `qa-employe-terrain` | Employé terrain | Punch avec géolocalisation / mobilité |
| `qa-employe-batisse` | Employé bâtisse | Punch sur site fixe, QR code si applicable |

Ces identifiants sont des **références documentaires**. Les emails, mots de passe et IDs réels sont gérés **hors TOS**.

---

## Règles

1. **Jamais de vrais mots de passe ou secrets dans la documentation TOS** — ni dans ce dépôt, ni dans les scénarios.
2. **Comptes identifiables** — Convention de nommage claire (`qa-{role}`).
3. **Comptes réinitialisables** — Procédure de reset documentée dans le dépôt Time.
4. **Comptes documentés** — Rôle, permissions attendues, scénarios associés.
5. **Alignement permissions** — Cohérent avec la matrice rôles Time (TBF à terme).
6. **Un compte = un rôle principal** — Éviter les comptes « super-utilisateur » sauf `qa-admin` explicite.

---

## Éléments à définir plus tard (dépôt TAGORA Time)

| Élément | Où le définir |
|---|---|
| Emails réels des comptes QA | Dépôt Time / gestionnaire secrets |
| Mots de passe et rotation | Vault ou .env — **jamais TOS** |
| Permissions exactes par compte | Matrice dans dépôt Time |
| Compagnie(s) QA associées | Données QA — voir [DONNEES_QA_STANDARD.md](DONNEES_QA_STANDARD.md) |
| Employés liés aux comptes QA | Fixtures Time |
| Procédure de création initiale | Runbook Time |

---

## Lien avec les scénarios QA

Chaque scénario documentaire (ex. `QA-TIME-001`) indique le **compte QA requis**. L'exécution manuelle ou Playwright utilise ce compte — jamais un compte non documenté.

---

## Principes

- Comptes QA distincts de la production.
- Un jeu de comptes par rôle métier significatif.
- Reproductibilité pour toute l'équipe.
- Secrets gérés hors documentation TOS.

## Statut

**Enrichi — Phase 3A** — Rôles et règles définis. Création effective des comptes : sur TAGORA Time.
