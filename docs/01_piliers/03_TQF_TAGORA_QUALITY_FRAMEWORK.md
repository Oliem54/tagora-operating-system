# TQF — TAGORA Quality Framework

## Objectif

Définir le framework officiel de qualité de l'écosystème TAGORA : comptes QA, Playwright, scénarios reproductibles, fixtures, smoke tests et validation.

## Portée

Tous les modules TAGORA — tests manuels structurés, automatisés et de non-régression.

## Principes

- **QA avant production** — Aucun déploiement sans validation conforme.
- **Reproductibilité** — Scénarios QA reproductibles par toute l'équipe.
- **Comptes QA dédiés** — Environnements et données QA standardisés.
- **Automatisation progressive** — Playwright comme standard de référence.
- **Qualité mesurable** — Critères de passage explicites.

## Règles

- Maintenir des comptes QA et des données QA conformes aux standards TQF.
- Écrire des scénarios Playwright pour les parcours critiques.
- Exécuter les smoke tests avant toute release.
- Documenter les procédures de reset et fixtures.
- Référencer `docs/06_qa/` pour les standards détaillés.

## Éléments à documenter plus tard

- Structure des comptes QA par rôle
- Jeux de données QA et politique de reset
- Catalogue de scénarios Playwright
- Critères smoke test vs tests complets
- Standards API tests
- Processus de validation pré-production
- Intégration QA dans CI/CD (TRF)

## Statut

**Brouillon initial**
