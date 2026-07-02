# Palette de couleurs — TDS

## Objectif

Définir le **cadre** de la palette officielle TAGORA pour une identité visuelle commune — sans imposer de valeurs hex finales à ce stade.

## Portée

Couleurs sémantiques, statuts, rôles et arrière-plans — tous modules TAGORA.

---

## Rôle de la palette TAGORA

La palette n'est pas décorative seule. Elle sert à :

- **Identifier** l'univers TAGORA d'un coup d'œil.
- **Communiquer** des statuts et états métier (succès, alerte, erreur).
- **Guider** l'attention vers l'information critique.
- **Unifier** Time, Stock Premium, Voice, Mail IA, Pulse et Platform.

---

## Importance de l'identité visuelle commune

Sans palette partagée, chaque module « ressemble à un produit différent ». La vision 2030 exige une **signature reconnaissable** — comparable en ambition à une suite professionnelle unifiée, avec l'identité propre TAGORA.

---

## Catégories de couleurs à définir plus tard

| Catégorie | Usage prévu |
|---|---|
| **Primaire** | Actions principales, identité TAGORA |
| **Secondaire** | Actions secondaires, accents |
| **Neutres** | Texte, fonds, séparateurs |
| **Fond** | Arrière-plans page, cartes, panneaux |
| **Texte** | Corps, titres, texte atténué |
| **Bordures** | Contours, dividers |
| **Succès** | Confirmation, état OK |
| **Avertissement** | Attention, action requise bientôt |
| **Danger** | Erreur, suppression, blocage |
| **Information** | Message informatif neutre |
| **Rôles** | Différenciation visuelle rôles (si applicable) |
| **Statuts** | États métier transverses |

> **Règle :** Ne pas définir de **valeurs hex finales** dans ce document. Les tokens seront validés via gouvernance TOS et documentés dans une version ultérieure ou ADR.

---

## Règles

1. **Compréhension avant décoration** — Une couleur doit aider à comprendre un statut ou une priorité.
2. **Cohérence sémantique** — « Succès » signifie la même chose dans Time et Stock Premium.
3. **Accessibilité** — Contrastes suffisants (voir [ACCESSIBILITE.md](ACCESSIBILITE.md)).
4. **Pas de couleurs ad hoc** — Exceptions documentées via gouvernance TOS.
5. **Pas de valeurs finales non validées** — Ce document structure ; il ne fige pas.

---

## Application TAGORA Time — statuts métier à couvrir

Couleurs sémantiques à **définir plus tard** (noms de tokens, pas hex) :

| Statut Time | Objectif visuel |
|---|---|
| **Punch actif** | Employé en service — visible immédiatement |
| **Punch terminé** | Shift clos — état repos / hors service |
| **Retard** | Alerte sans ambiguïté |
| **Absence** | Distinct du retard et du punch normal |
| **Attente de validation** | Superviseur doit agir |
| **Erreur** | Blocage ou échec action |
| **Alerte direction** | Synthèse ou KPI nécessitant attention |

Les libellés exacts et couleurs finales **seront confirmés** avec l'équipe Time et accessibilité.

---

## Éléments à documenter plus tard

- Tokens couleur (nom, hex, usage)
- Mode sombre
- Matrice statut → couleur → contraste WCAG
- Exemples visuels de référence

## Statut

**Enrichi — Phase 3B** — Catégories et sémantique Time définies. Valeurs hex : à valider.
