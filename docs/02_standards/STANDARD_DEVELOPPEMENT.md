# Standard — Développement

## Objectif

Définir les **principes de développement** applicables à tous les projets TAGORA — sans imposer de stack finale.

## Portée

Pratiques de codage, structure, conventions et discipline — tous modules. Pilote : **TAGORA Time**.

---

## Principes de développement TAGORA

| Ordre | Principe |
|---|---|
| 1 | **Documentation avant code** — Besoin, périmètre, risques écrits avant implémentation importante |
| 2 | **Architecture avant implémentation** — Structure et boundaries pour changements majeurs |
| 3 | **QA avant production** — Scénarios et smoke tests conformes TQF |
| 4 | **Sécurité dès le début** — Secrets, rôles, environnements — pas en retrofit |
| 5 | **Lisibilité du code** — Objectif futur : code compréhensible par l'équipe et les revues |
| 6 | **Simplicité avant suringénierie** — Solution minimale correcte ; pas d'abstraction prématurée |

---

## Règles générales

| Règle | Description |
|---|---|
| **Un changement = un objectif clair** | Une PR ou un lot de travail répond à un besoin identifié |
| **Pas de modifications massives non cadrées** | Refontes larges = validation + périmètre documenté |
| **Ne pas mélanger plusieurs modules** | Un dépôt, un contexte métier par changement |
| **Ne pas coder sans validation du besoin** | [REGLES_DE_VALIDATION_AVANT_CODE.md](../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md) |
| **Éviter les dépendances inutiles** | Chaque dépendance justifiée ; pas de lib « au cas où » |

---

## Ce que ce standard n'impose pas (encore)

- Langage ou framework obligatoire.
- Structure de dossiers détaillée.
- Outils de linting ou formatting spécifiques.
- Patterns architecturaux (microservices, monolithe, etc.).

Ces choix seront documentés via **ADR** lorsque validés par module ou écosystème.

---

## Lien avec les autres standards

- Validation → [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- Architecture → [STANDARD_ARCHITECTURE.md](STANDARD_ARCHITECTURE.md)
- Sécurité → [STANDARD_SECURITE.md](STANDARD_SECURITE.md)
- QA → [QA_FRAMEWORK_OVERVIEW.md](../06_qa/QA_FRAMEWORK_OVERVIEW.md)
- Release → [TRF](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)
- ADR → [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)

---

## Éléments à documenter plus tard

- Conventions de nommage par langage
- Standards revue de code
- Gestion des dépendances et mises à jour
- Stack validée par module

## Statut

**Enrichi — Phase 3C** — Principes définis. Conventions techniques : ultérieur.
