# Standard — Sécurité

## Objectif

Définir la **sécurité comme standard transversal** obligatoire pour tous les projets TAGORA.

## Portée

Secrets, accès, données, environnements, audit — tous modules. Applicable à **TOS**, **TAGORA Time** et l'ensemble de l'écosystème.

---

## Principes

- **Sécurité by design** — intégrée dès la conception, pas en audit tardif.
- **Moindre privilège** — accès limités au rôle et au besoin.
- **Séparation des environnements** — production ≠ staging ≠ QA ≠ développement.
- **Aucun secret dans TOS** — jamais.

---

## Règles absolues (TOS et écosystème)

| # | Règle |
|---|---|
| 1 | **Ne jamais lire, exposer ou documenter de secrets** dans TOS |
| 2 | **Ne jamais inclure de vrais mots de passe** dans la documentation |
| 3 | **Ne jamais copier le contenu d'un `.env`** dans un document |
| 4 | **Limiter les accès selon les rôles** — permissions explicites |
| 5 | **Journaliser les actions sensibles** dans les applications métier (audit) |

Ces règles s'appliquent aux humains, agents IA et pipelines automatisés travaillant sur TAGORA.

---

## Sécurité des comptes QA

- Comptes QA **distincts** de la production ([COMPTES_QA_STANDARD.md](../06_qa/COMPTES_QA_STANDARD.md)).
- Credentials QA stockés **hors TOS** (vault, gestionnaire secrets module).
- Identifiants logiques documentés (`qa-employe`) — pas les mots de passe.
- Rotation et reset documentés dans le dépôt module.

---

## Sécurité des données QA

- Données **fictives** par défaut ([DONNEES_QA_STANDARD.md](../06_qa/DONNEES_QA_STANDARD.md)).
- Jamais de données personnelles réelles dans fixtures ou docs TOS.
- Reset QA pour éviter accumulation de données sensibles de test.

---

## Séparation des environnements

| Environnement | Usage | Règle |
|---|---|---|
| **Production** | Utilisateurs réels | Données réelles ; accès restreint |
| **Staging** | Pré-production, démos | Pas de données prod non anonymisées sans gouvernance |
| **QA** | Tests reproductibles | Comptes et données QA uniquement |
| **Développement** | Travail local | Secrets locaux hors dépôt ; `.env` jamais commité |

---

## Lien TES / validation avant code

Tout changement **sécurité** (permissions, auth, exposition données) = développement **significatif** :

- 7 prérequis validation avant code.
- **ADR** si impact multi-modules ou architecture auth.

---

## Points à valider plus tard

- Modèle de menaces (threat model) par module critique.
- Politique authentification et sessions communes.
- Matrice permissions (TBF / TCP).
- Chiffrement, transport (HTTPS, etc.).
- Processus gestion vulnérabilités.
- Conformité réglementaire applicable.

---

## Statut

**Enrichi — Phase 3C** — Règles transversales définies. Politiques détaillées : ultérieur.
