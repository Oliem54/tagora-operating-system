# Standard — Versioning

## Objectif

Définir une **politique simple de versioning** TAGORA — adaptable par module, cohérente à l'échelle de l'écosystème.

## Portée

Modules applicatifs, releases documentaires TOS, hotfix. **Approche recommandée** — évolutive par ADR si besoin.

---

## Types de version

| Type | Exemple | Usage |
|---|---|---|
| **Version documentaire** | TOS Phase 3G | Jalons documentation TOS (roadmap) |
| **Version module** | TAGORA Time v2.4.1 | Application métier livrée |
| **Version release** | Tag Git `v2.4.1` | Point de livraison identifié |
| **Version hotfix** | v2.4.2 | Correctif urgent sur ligne stable |

---

## Approche recommandée : vMAJOR.MINOR.PATCH

Format : **`vMAJOR.MINOR.PATCH`** (aligné semver simplifié)

| Composant | Quand incrémenter |
|---|---|
| **MAJOR** | Changement incompatible, refonte majeure, rupture API ou comportement métier significatif |
| **MINOR** | Nouvelle fonctionnalité rétrocompatible, amélioration notable |
| **PATCH** | Correctif bug, ajustement mineur, hotfix sans nouvelle feature |

---

## Exemples indicatifs

| Changement | Incrément |
|---|---|
| Refonte permissions Time | MAJOR |
| Nouveau dashboard employé | MINOR |
| Fix affichage date punch | PATCH |
| Hotfix sécurité urgent | PATCH (ou MINOR si impact visible) |

---

## Règles

1. **Tag Git** aligné sur version release quand module utilise tags.
2. **Changelog** mis à jour à chaque incrément release.
3. **Documentation TOS** — phases roadmap (3A, 3G) ≠ version semver module.
4. **Évolution future** — politique finale par module via ADR si divergence nécessaire.

---

## Statut

**Créé — Phase 3G**
