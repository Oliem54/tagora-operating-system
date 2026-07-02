# Principes fondamentaux — TAGORA Operating System

## Objectif

Formaliser les principes immuables qui guident toutes les décisions méthodologiques, architecturales et organisationnelles de l'écosystème TAGORA.

## Portée

Applicable à tous les piliers, standards, modules et processus de l'écosystème TAGORA.

## Principes

### Nature de TOS

- TOS est la référence méthodologique, pas un produit livrable aux utilisateurs finaux.
- TOS documente ; les applications implémentent.

### Convergence progressive

- Tous les modules convergent vers TOS à un rythme adapté à leur maturité.
- Aucune rupture brutale imposée sans plan de transition.

### Séparation des responsabilités

- **Applications métier** — Règles métier critiques, logique domaine.
- **TOF** — Orchestration, automatisation, workflows transverses.
- **TCP** — Briques techniques communes (à documenter et valider).
- **TBF** — Règles métier transverses communes (à documenter et valider).

### Ordre méthodologique

**Documentation → Architecture → Code → QA → Production**

### Expérience utilisateur

TAGORA doit toujours être : Premium, Simple, Rapide, Intuitive, Professionnelle, Épurée, Accessible, Lisible, Moderne.

- Informations critiques visibles immédiatement.
- Détails complexes en vues secondaires.
- Compréhensible par un public large (20 à 60 ans).

## Règles

- Ne pas coder sans documentation préalable validée.
- Ne pas déployer en production sans QA conforme au TQF.
- Ne pas prendre de décision architecturale sans ADR (TKS).
- Ne pas dupliquer une brique commune déjà couverte par TCP sans justification documentée.

## Éléments à documenter plus tard

- Hiérarchie de résolution en cas de conflit entre principes
- Principes spécifiques par domaine (sécurité, performance, accessibilité)
- Anti-patterns officiellement interdits
- Guide de traduction des principes en critères de revue

## Statut

**Brouillon initial**
