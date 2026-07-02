# Standard — Smoke Tests

## Objectif

Définir le standard officiel des **smoke tests** — validation minimale et rapide avant toute livraison ou déploiement significatif.

## Portée

Gate pré-release et validation post-déploiement staging — tous modules TAGORA. **TAGORA Time** en priorité.

---

## Définition

Un **smoke test** est un test **court**, **stable** et **critique** qui répond à une seule question :

> *L'application est-elle utilisable pour son parcours essentiel ?*

Ce n'est pas un test exhaustif. C'est un **signal d'alarme rapide** — si le smoke test échoue, on ne livre pas.

---

## Pourquoi les smoke tests sont obligatoires avant livraison

- **Détecter les régressions majeures** en quelques minutes.
- **Protéger la production** — un login cassé ou un punch impossible bloque tout le module.
- **Gate CI/CD** — intégration TRF lorsque le pipeline Time est prêt.
- **Confiance release** — l'équipe sait que le minimum vital fonctionne.

> **Règle :** Aucune release production TAGORA Time sans smoke tests conformes — manuels au départ, automatisés ensuite.

---

## Règles des smoke tests

| Règle | Description |
|---|---|
| **Court** | Quelques minutes maximum — pas une suite complète. |
| **Stable** | Peu sensible aux changements visuels mineurs ; parcours métier robuste. |
| **Facile à relancer** | Un développeur ou CI peut l'exécuter sans préparation complexe. |
| **Critique** | Couvre le parcours sans lequel l'app est inutilisable. |
| **Ne remplace pas les tests complets** | Smoke = minimum ; scénarios détaillés = catalogue QA complet. |

---

## Smoke tests minimaux recommandés — TAGORA Time

Liste **documentaire** — sans code, à valider sur l'interface réelle de Time :

| # | Smoke test | Résultat attendu |
|---|---|---|
| 1 | **Ouvrir l'application** | L'application charge sans erreur bloquante. |
| 2 | **Se connecter avec un compte QA** | Connexion réussie avec `qa-employe` (ou compte défini). |
| 3 | **Voir le dashboard** | L'écran principal employé s'affiche. |
| 4 | **Faire un punch in** | Le punch d'entrée est enregistré ; statut « actif » ou équivalent visible. |
| 5 | **Faire un punch out** | Le punch de sortie est enregistré ; statut mis à jour. |
| 6 | **Voir le résultat dans un rapport** | Le punch apparaît dans une vue rapport ou validation (rôle adapté si nécessaire). |
| 7 | **Permissions** | Un utilisateur sans permission (ex. `qa-employe`) ne voit pas les sections réservées direction/admin. |

Les libellés exacts d'écran et boutons **ne sont pas fixés ici** — à confirmer dans TAGORA Time lors de l'exécution.

---

## Relation avec les autres types de tests

```
Smoke tests          →  Minimum vital avant release (7 parcours ci-dessus)
Scénarios documentés →  Détail métier (QA-TIME-001, etc.)
Tests Playwright     →  Automatisation des smoke + scénarios validés
Tests API            →  Contrats backend complémentaires
Validation métier    →  Règles horaires, pauses, cas limites
```

---

## Exécution

| Phase | Mode |
|---|---|
| **Maintenant (Phase 3A)** | Checklist manuelle documentée |
| **Après validation scénarios** | Automatisation Playwright dans `tests/e2e/smoke/` (dépôt Time) |
| **CI** | Gate bloquant si smoke échoue (TRF — à configurer sur Time) |

---

## Principes

- Rapides, critiques, reproductibles.
- Obligatoires avant release production.
- Automatisables via Playwright une fois scénarios validés.
- Environnement QA/staging uniquement.

## Règles

- Maintenir la liste smoke tests à jour par module.
- Bloquer release si smoke en échec.
- Ne pas confondre smoke test et couverture complète.

---

## Éléments à documenter plus tard

- Durée maximale d'exécution cible (ex. < 5 min)
- Procédure manuelle de secours si CI indisponible
- Lien specs Playwright ↔ cette liste
- Smoke tests API complémentaires

## Statut

**Enrichi — Phase 3A** — Catalogue smoke Time documenté. Automatisation : après validation humaine.
