# Standard — Rollback

## Objectif

Définir quand et **comment documenter un rollback** TAGORA — retour arrière sécurisé sans improvisation en production critique.

## Portée

Toutes les releases à risque — modules TAGORA. **Aucun rollback réel n'est exécuté depuis TOS.**

---

## Définition rollback

Un **rollback** est le retour contrôlé à une **version ou un état antérieur connu** (code, configuration, données selon contexte) lorsqu'une release cause régression, incident ou risque inacceptable.

---

## Quand prévoir un rollback

- Release **critique** (permissions, punch, paie, auth, données masse).
- **Migration** schéma ou données.
- Changement **irréversible** sans plan B.
- Déploiement **première fois** sur production d'une feature majeure.
- Release avec **fenêtre utilisateur large** (heures de pointe punch).

---

## Éléments à vérifier avant release

| Domaine | Vérification |
|---|---|
| **Code** | Tag ou commit de version précédente stable identifié |
| **Données** | Sauvegarde ou snapshot si migration |
| **Migrations** | Script down ou procédure inverse documentée |
| **Configuration** | Variables d'environnement versionnées (hors secret dans doc) |
| **Accès** | Qui peut déclencher rollback |
| **Dépendances** | Services externes, APIs — compatibilité version N-1 |

---

## Règles

1. **Aucun rollback improvisé** sur production critique — plan écrit **avant** go.
2. **Rollback documenté** dans checklist release ([RELEASE_CHECKLIST_STANDARD.md](RELEASE_CHECKLIST_STANDARD.md)).
3. **Responsable rollback** désigné avant déploiement.
4. **Post-rollback** — incident documenté (TKS) ; leçon apprise.
5. **Communication** — équipe et support informés.

---

## Liens piliers

| Pilier | Lien |
|---|---|
| **TQF** | Smoke tests détectent régression ; rollback si échec post-prod |
| **TES** | Validation avant code réduit risque ; migrations identifiées |
| **TMF** | Alertes post-release déclenchent décision rollback |

---

## Statut

**Créé — Phase 3G**
