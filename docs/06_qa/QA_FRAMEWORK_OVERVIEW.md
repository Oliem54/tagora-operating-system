# QA Framework — Vue d'ensemble

## Objectif

Présenter la vue d'ensemble du **TAGORA Quality Framework (TQF)** et son articulation avec les standards QA de l'écosystème TAGORA.

## Portée

Qualité, tests et validation — tous modules TAGORA, en commençant par **TAGORA Time** (pilote).

---

## Rôle du TQF dans TOS

Le TQF est le **pilier qualité** du TAGORA Operating System. Il définit comment les projets TAGORA pensent, organisent, documentent et exécutent leurs tests — avant toute automatisation.

| Fonction | Description |
|---|---|
| **Cadre** | Standards QA communs à l'écosystème (comptes, données, scénarios, smoke tests). |
| **Référence** | Les modules ne inventent pas leur propre méthode QA en silo. |
| **Gate** | Aucune production sans validation QA minimale conforme. |
| **Mémoire** | Scénarios documentés, reproductibles, traçables. |

TQF **documente** dans TOS. Les tests **s'exécutent** dans les dépôts des modules (ex. TAGORA Time).

---

## Pourquoi la QA doit venir avant la production

L'ordre méthodologique officiel TOS est :

```
Documentation → Architecture → Code → QA → Production
```

La QA n'est pas une étape optionnelle en fin de sprint. Elle est un **prérequis de livraison** :

- **Réduire les régressions** — Un parcours critique non testé peut casser en production sans alerte.
- **Garantir la reproductibilité** — Toute l'équipe (humains, agents IA) peut valider le même comportement.
- **Protéger les utilisateurs** — Time touche des données sensibles (temps, présence, rapports) ; la qualité n'est pas négociable.
- **Accélérer à long terme** — Documenter et tester tôt coûte moins cher que corriger en production.

> Aucun module critique ne doit aller en production sans scénario QA minimal documenté et exécutable.

---

## Types de validation QA

| Type | Description | Quand l'utiliser |
|---|---|---|
| **QA manuelle** | Un humain exécute un scénario documenté, étape par étape. | Démarrage, exploration, validation de scénarios avant automatisation. |
| **QA automatisée** | Un outil (ex. Playwright) exécute un scénario de façon reproductible. | Parcours stables, smoke tests, non-régression UI. |
| **Smoke tests** | Sous-ensemble minimal et rapide — l'application est-elle utilisable ? | Avant chaque release, après chaque déploiement staging. |
| **API tests** | Validation des endpoints et contrats sans interface. | Logique métier, permissions, intégrations backend. |
| **Validation métier** | Confirmation que les règles métier (horodateur, pauses, rapports) sont respectées. | Scénarios métier critiques, souvent manuels au départ. |

Ces types se **complètent** — un smoke test ne remplace pas une validation métier complète.

---

## Règles fondamentales TQF

1. **Scénario minimal obligatoire** — Tout module critique doit avoir au moins un scénario QA documenté pour ses parcours essentiels avant production.
2. **Parcours réels, pas seulement le code** — Les tests valident ce que l'utilisateur fait et voit, pas uniquement des fonctions isolées.
3. **Comptes QA dédiés** — Jamais de tests sur comptes production ou employés réels.
4. **Données QA contrôlées** — Fixtures fictives ou anonymisées ; jamais de données sensibles réelles dans TOS.
5. **Documentation avant automatisation** — Scénario validé humainement avant création de tests Playwright.
6. **Smoke tests avant livraison** — Gate non contournable pour les releases production.

---

## Application progressive à TAGORA Time

TAGORA Time est le **premier module** à appliquer le TQF :

| Étape | Action | Statut |
|---|---|---|
| 1 | Standards QA documentés dans `docs/06_qa/` | Phase 3A |
| 2 | Comptes QA et données QA définis (hors secrets) | À faire sur Time |
| 3 | Scénarios critiques documentés (`scenarios_time/`) | En cours |
| 4 | Validation humaine des scénarios | À faire |
| 5 | Automatisation Playwright (dépôt Time) | Après validation scénarios |

TOS ne crée pas les tests. TOS définit **comment** ils doivent être pensés.

---

## Documents du TQF

| Document | Contenu |
|---|---|
| [PLAYWRIGHT_STANDARD.md](PLAYWRIGHT_STANDARD.md) | Standard tests end-to-end UI |
| [COMPTES_QA_STANDARD.md](COMPTES_QA_STANDARD.md) | Comptes QA par rôle |
| [DONNEES_QA_STANDARD.md](DONNEES_QA_STANDARD.md) | Jeux de données et reset |
| [SMOKE_TEST_STANDARD.md](SMOKE_TEST_STANDARD.md) | Tests minimaux pré-release |
| [scenarios_time/](scenarios_time/) | Scénarios documentaires Time |
| [TEMPLATE_QA_SCENARIO.md](../99_templates/TEMPLATE_QA_SCENARIO.md) | Modèle de scénario |

---

## Principes

- QA avant production.
- Scénarios reproductibles par toute l'équipe.
- Comptes et données QA standardisés.
- Playwright comme standard **recommandé** pour automatisation UI.
- Smoke tests obligatoires avant release.

## Règles

- Appliquer les standards détaillés dans `docs/06_qa/`.
- Intégrer QA dans CI/CD (TRF) lorsque le module est prêt.
- Maintenir fixtures et procédures de reset.
- Documenter décisions QA significatives dans TKS si applicable.

---

## Éléments à documenter plus tard

- Organigramme du framework QA
- Rôles QA par module
- Cycle de vie d'un scénario (brouillon → validé → automatisé)
- Métriques et tableaux de bord qualité
- Registre central des scénarios critiques écosystème

## Statut

**Enrichi — Phase 3A** — Cadre QA opérationnel documenté. Exécution sur Time à planifier.
