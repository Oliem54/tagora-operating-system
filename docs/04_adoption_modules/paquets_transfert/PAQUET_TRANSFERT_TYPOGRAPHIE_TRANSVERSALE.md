# Paquet de transfert — Typographie transversale TAGORA

## Objectif

Préparer les directives typographiques destinées à chaque projet après fermeture TOS du contrat Outfit + Syne.

## Règle de transfert

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0005
SOURCE_DECISION=DEC-017
SOURCE_VALIDATION=VALD-096
TYPOGRAPHY_SOURCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
```

Martin transfère séparément ce paquet à chaque agent de projet.  
Aucun agent produit ne doit être modifié par TOS.

---

## Valeurs communes à tous les paquets

```text
BODY_FONT=Outfit
DISPLAY_FONT=Syne
FALLBACK="Segoe UI", sans-serif
ALLOWED_WEIGHTS=400 / 500 / 600 / 700
FONT_LOADING=swap
TYPOGRAPHY_SYSTEM=OUTFIT_BODY_PLUS_SYNE_DISPLAY
```

---

## PROJECT_TARGET : TAGORA Website

```text
PROJECT_TARGET: TAGORA Website
DECISION_TOS: Adopter le duo Outfit (body/UI) + Syne (display/marque) comme référence commune déjà prouvée sur Website HEAD 6415cdd
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Confirmer l'alignement documentaire local avec ADR-0005 ; aucune refonte typographique si l'implémentation actuelle (next/font Outfit+Syne, weights 400–700, display swap) reste conforme
ACCEPTANCE_CRITERIA:
  - body/UI = Outfit
  - display/BrandMark = Syne
  - fallbacks conformes
  - poids limités à 400/500/600/700
  - pas d'introduction de Fraunces ou autre famille hors contrat
RISK: Faible — Website est la source de preuve ; risque principal = dérive future hors contrat
MARTIN_TRANSFER_REQUIRED: YES
```

---

## PROJECT_TARGET : TAGORA Nexus

```text
PROJECT_TARGET: TAGORA Nexus
DECISION_TOS: Appliquer Outfit pour l'interface portail et Syne pour BrandMark / titres stratégiques uniquement
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Lors du prochain GO UI Nexus, charger Outfit+Syne via la méthode native du framework (next/font si disponible) et mapper body→Outfit, display→Syne
ACCEPTANCE_CRITERIA:
  - aucune police hors contrat dans l'UI active
  - tableaux/formulaires/navigation en Outfit
  - BrandMark et H1 stratégiques en Syne 700/display
  - display=swap
RISK: Moyen — Nexus peut déjà contenir une typo locale ; application uniquement après Human Gate Nexus
MARTIN_TRANSFER_REQUIRED: YES
```

---

## PROJECT_TARGET : TAGORA Time

```text
PROJECT_TARGET: TAGORA Time
DECISION_TOS: Harmoniser l'UI opérationnelle Time sur Outfit ; réserver Syne aux titres de marque / pages stratégiques, jamais aux données de punch
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Planifier l'adoption typographique dans un lot TDS/Time distinct ; prioriser lisibilité des données (Outfit 400/600) avant tout effet display
ACCEPTANCE_CRITERIA:
  - punch, horaires, tableaux, filtres, formulaires = Outfit
  - Syne absent des vues data-dense
  - BrandMark/header marketing seulement si présent = Syne
RISK: Élevé sur les écrans data-dense si Syne est mal utilisé ; Phase 4D QA Time non autorisée à être mélangée avec ce paquet
MARTIN_TRANSFER_REQUIRED: YES
```

---

## PROJECT_TARGET : TAGORA Mail IA

```text
PROJECT_TARGET: TAGORA Mail IA
DECISION_TOS: Adopter Outfit pour l'interface mail et Syne pour la signature marque / titres stratégiques
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Intégrer le duo lors du prochain chantier UI Mail IA ; ne pas modifier le métier mail dans le même lot
ACCEPTANCE_CRITERIA:
  - listes, lecteurs, composeurs, filtres = Outfit
  - titres marketing / BrandMark = Syne
  - poids autorisés seulement
RISK: Moyen — volume textuel élevé ; Syne interdit sur corps de messages
MARTIN_TRANSFER_REQUIRED: YES
```

---

## PROJECT_TARGET : TAGORA Stock Premium

```text
PROJECT_TARGET: TAGORA Stock Premium
DECISION_TOS: Adopter Outfit pour inventaire/opérationnel et Syne pour display de marque uniquement
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Prévoir lot UI Stock distinct ; tableaux et quantités restent Outfit
ACCEPTANCE_CRITERIA:
  - grilles, stocks, formulaires, badges = Outfit
  - Syne limité au BrandMark / titres stratégiques
RISK: Moyen — confusion lisibilité si Syne apparaît dans les tableaux
MARTIN_TRANSFER_REQUIRED: YES
```

---

## PROJECT_TARGET : TAGORA Pulse AI

```text
PROJECT_TARGET: TAGORA Pulse AI
DECISION_TOS: Adopter Outfit pour dashboards/données et Syne pour titres de marque / landing Pulse
BODY_FONT: Outfit
DISPLAY_FONT: Syne
FALLBACK: "Segoe UI", sans-serif
ALLOWED_WEIGHTS: 400 / 500 / 600 / 700
REQUIRED_CHANGE: Appliquer uniquement après GO UI Pulse ; conserver la densité analytique en Outfit
ACCEPTANCE_CRITERIA:
  - graphiques labels, tables, filtres = Outfit
  - Syne hors zones data-dense
RISK: Moyen — dashboards saturés si display mal placé
MARTIN_TRANSFER_REQUIRED: YES
```

---

## Interdictions communes

- TOS n'applique aucun de ces paquets dans les dépôts produits.
- Aucun DNS, Production, secret, DB ou migration.
- Aucune communication agent à agent.
- Le contrat couleurs n'est pas modifié par ce paquet.

## Références

- [ADR-0005](../../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md)
- [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../../09_design_system/CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
- [TYPOGRAPHIE.md](../../09_design_system/TYPOGRAPHIE.md)
- [VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../../10_knowledge/VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
