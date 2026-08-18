# ADR-0017 — Système d'identité visuelle cohérente des modules TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-18**

Validation : **VALD-108**

Décision : **DEC-029**

Cette ADR complète DEC-018, DEC-023, DEC-026, DEC-027 et DEC-028. Elle ne modifie pas les métiers, les routes, les domaines ni les identifiants techniques.

## Contexte

Les modules doivent être reconnaissables comme produits TAGORA sans devenir des interfaces sans lien entre elles. Les fichiers reçus définissent sept accents — six produits SaaS et Nexus — mais ne définissent pas à eux seuls les composants, les états sémantiques ni les règles d'accessibilité.

L'inspection confirme :

- 14 PNG produits de 1080 × 1080 px ;
- deux variantes opaques par identité ;
- normale sur fond intégré `#182643` ;
- `light` sur fond blanc intégré ;
- aucun SVG produit ;
- deux PSD sources ;
- un PDF de présentation d'une page ;
- archive centrale séparée avec logos TAGORA PNG/SVG.

Le PDF présente Nexus dans la même ligne que les modules et lui attribue un texte métier erroné. Il constitue une planche visuelle, pas une source de vérité commerciale.

## Décision

```text
COMMON_STRUCTURE_SHARE=80_PERCENT_DESIGN_PRINCIPLE
MODULE_IDENTITY_SHARE=20_PERCENT_DESIGN_PRINCIPLE
COMMON_COMPONENT_ANATOMY=REQUIRED
MODULE_BUSINESS_NAVIGATION=ALLOWED
MODULE_ACCENT_THEME=REQUIRED
SEMANTIC_STATUS_COLORS=GLOBAL_NOT_THEMED
DEPORA_VISUAL_PILOT=SELECTED
```

### Couche commune

TOS fixe un gabarit, des composants, une échelle d'espacement, des rayons, des ombres, des comportements responsive et un contrat d'accessibilité communs.

### Couche produit

Chaque produit reçoit un thème par tokens. Le thème porte l'identité, mais ne redéfinit pas succès, avertissement, erreur ou information.

### Palette centrale et accents produits

Les huit couleurs de DEC-018 restent la palette centrale exclusive de TAGORA. Les accents issus des identités produits sont autorisés comme **palette produit scellée et bornée** dans le module correspondant. Ils ne deviennent pas des couleurs centrales interchangeables.

`#182643`, observé comme fond intégré des PNG, ne remplace pas l'Indigo spatial `#1B2641` dans le système commun.

### Tokens

Les tokens obligatoires sont :

```text
module-accent
module-accent-hover
module-accent-soft
module-accent-border
module-on-accent
module-focus-ring
module-chart-primary
module-chart-secondary
module-action-bg
module-action-on
```

Les valeurs officielles sont dans le registre des thèmes. Une application ne doit pas inventer une autre dérivation.

### Logos

```text
PRODUCT_PNG_OPACITY=OPAQUE
NORMAL_VARIANT_BACKGROUND=#182643
LIGHT_VARIANT_BACKGROUND=#FFFFFF
PRODUCT_SVG_AVAILABLE=NO
PRODUCT_LOCKUP_MIN_DISPLAY=120x120px
CROP_OR_SYMBOL_EXTRACTION=PROHIBITED
RECOLOR_OR_REBUILD=PROHIBITED
```

Le canvas complet doit être conservé. Un header compact exige un futur export horizontal ou symbole autonome officiel.

### Accessibilité

```text
ACCESSIBILITY_TARGET=WCAG_2_2_AA
NORMAL_TEXT_CONTRAST=4.5_TO_1
LARGE_TEXT_CONTRAST=3_TO_1
UI_AND_FOCUS_CONTRAST=3_TO_1
TARGET_MINIMUM=44x44px
COLOR_ONLY_MEANING=PROHIBITED
```

### Typographie

La typographie reste un chantier séparé. Avenir Next et JHC Notion ne sont pas installées sans validation de licence Web, mapping des rôles et gate produit. Outfit et Syne peuvent rester temporairement comme fallback legacy.

## Compatibilité

- DEC-018 : la charte centrale reste active ; la palette produit est scellée et bornée.
- DEC-023 : DEPORA demeure le premier pilote identité.
- DEC-026 : les noms officiels ne changent pas.
- DEC-027 : logos et typographie restent séparés ; aucune route ni domaine ne change.
- DEC-028 : le contenu commercial et l'interface applicative restent des couches distinctes mais cohérentes.
- Nexus reste le portail client central et n'est pas un septième module.
- YORVA et ETIOQ restent `COMING_SOON`, sans application active autorisée.

## Conséquences

### Positives

- une famille visuelle cohérente ;
- moins de décisions locales contradictoires ;
- reconnaissance rapide du module ;
- composants et états prévisibles ;
- migration progressive et réversible.

### Contraintes

- les PNG opaques sont des tuiles, pas des wordmarks transparents ;
- les SVG produits et symboles autonomes restent à obtenir ;
- chaque application exige un audit et un gate local ;
- les différences métier doivent être documentées plutôt que masquées.

## Déploiement progressif

1. documentation et paquets TOS ;
2. transfert Martin ;
3. inspection READ ONLY du module ;
4. pilote DEPORA sur `/admin/stock/comptes` ;
5. revue captures desktop/mobile et accessibilité ;
6. décision de commit séparée ;
7. généralisation DEPORA ;
8. déploiement progressif HORORA, PULS, MESSOR, Website et Nexus ;
9. YORVA/ETIOQ limités aux surfaces futures.

## Boundary

```text
TOS_SCOPE_ONLY=YES
OTHER_REPOSITORY_TOUCHED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
FONT_INSTALLATION_AUTHORIZED=NO
COMMIT_OTHER_PROJECT_AUTHORIZED=NO
PUSH_OTHER_PROJECT_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

## Références

- [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [VALD-108](../10_knowledge/VALIDATION_VALD_108_SYSTEME_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [ADR-0015](ADR-0015-POLITIQUE-TRANSITION-ARCHITECTURE-MARQUE-TAGORA.md)

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-108 | Système d'identité visuelle cohérente des modules TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-18 |
