# Charte de marque centrale TAGORA

## Objectif

Enregistrer la **charte de marque centrale finale** TAGORA comme source normative unique de l'identité visuelle commune.

## Portée

Identité centrale TAGORA — palette, dégradés, familles typographiques, règles logo et actifs manquants. Tous les modules et points de contact de l'écosystème, **sans application produit dans ce dépôt**.

---

## Statut

```text
BRAND_GUIDE_STATUS=FINAL
SOURCE_DOCUMENT=tagora_central_Guide_de_marque.pdf
SOURCE_DATE=2026-08-14
SOURCE_AUTHORITY=MARTIN_APPROVED_FINAL_BRAND_GUIDE
FINAL_PALETTE_STATUS=OFFICIAL_EXCLUSIVE
FINAL_GRADIENTS_STATUS=OFFICIAL_EXCLUSIVE
TYPOGRAPHY_STATUS=FINAL_FAMILIES_APPROVED
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
OUTFIT_SYNE_STATUS=LEGACY
FONT_FILES_RECEIVED=YES
FONT_LICENSE_VALIDATED=NO
FONT_IMPLEMENTATION_AUTHORIZED=NO
LOGO_SOURCE_ASSETS_RECEIVED=YES
LOGO_SOURCE_ASSETS_RECEIVED_DATE=2026-08-17
PRODUCT_THEME_SYSTEM=VALIDATED_BY_DEC_029
PRODUCT_PNG_OPACITY=OPAQUE
ASSET_RECONSTRUCTION_FROM_PDF=PROHIBITED
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
PREVIOUS_MATRIX_STATUS=OBSOLETE
PREVIOUS_PALETTE_STATUS=OBSOLETE
```

Décision Martin : **DEC-018**  
ADR : **ADR-0006**  
Validation : **VALD-097**  
Date d'enregistrement TOS : **2026-08-15**

Complément identité des modules : **DEC-029 / ADR-0017 / VALD-108 — 2026-08-18**

Cette décision remplace, pour l'**usage actif** :

- la matrice Trello provisoire ;
- la palette provisoire Website ;
- le contrat typographique Outfit + Syne (DEC-017 / ADR-0005 / VALD-096) ;
- toute valeur visuelle centrale contradictoire antérieure.

L'historique TOS n'est **pas** supprimé. Les décisions antérieures restent traçables et sont marquées **SUPERSEDED / REPLACED**.

---

## Source normative

Le document `tagora_central_Guide_de_marque.pdf`, daté du **2026-08-14**, est la source normative finale de l'identité centrale TAGORA.

Le PDF est une **référence documentaire**. Il ne remplace pas les assets sources. TOS n'extrait pas le logo, ne recrée pas le logo, ne convertit pas le PDF en asset, n'extrait pas de polices et n'invente aucune règle absente de la charte.

---

## Palette finale exclusive

```text
FINAL_PALETTE_STATUS=OFFICIAL_EXCLUSIVE
```

| Nom | Hex |
|---|---|
| Indigo spatial | `#1B2641` |
| Vert citron | `#DBDF5B` |
| Bleu de Prusse | `#081029` |
| Ivoire | `#F6F7ED` |
| Citron vert | `#BCC320` |
| Vert mer | `#00804C` |
| Vert mousse | `#74C365` |
| Acier Azure | `#1E488F` |

Aucune autre couleur centrale TAGORA n'est autorisée.

Ce document **n'assigne pas** de rôle sémantique détaillé (primaire, succès, danger, couleur de module) : la charte nomme et fige les huit couleurs, sans mapping sémantique explicite. Toute affectation sémantique future exige une confirmation Martin ou designer distincte.

---

## Dégradés officiels exclusifs

```text
FINAL_GRADIENTS_STATUS=OFFICIAL_EXCLUSIVE
```

| Dégradé |
|---|
| `#F6F7ED` → `#BCC320` |
| `#74C365` → `#BCC320` |
| `#00804C` → `#74C365` |
| `#081029` → `#1E488F` |

Aucun autre dégradé central TAGORA n'est déclaré officiel.

---

## Typographies finales

```text
TYPOGRAPHY_STATUS=FINAL_FAMILIES_APPROVED
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
FONT_FILES_RECEIVED=YES
FONT_LICENSE_VALIDATED=NO
FONT_IMPLEMENTATION_AUTHORIZED=NO
```

### Famille 1 — Avenir Next

Styles / poids déclarés :

- Light
- Regular
- Italic
- Medium
- Bold
- Heavy

### Famille 2 — JHC Notion

Styles déclarés :

- Medium
- Heavy Italic

La charte nomme **Avenir Next** et **JHC Notion**. Le texte fourni **ne définit pas** explicitement leur responsabilité respective body / display.

```text
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
```

Ne pas inscrire `Avenir Next = body` ni `JHC Notion = display` comme règle officielle sans confirmation distincte.  
Ne pas reproduire automatiquement l'ancien modèle Outfit-body / Syne-display.

### Legacy

| Famille | Statut |
|---|---|
| Outfit | **LEGACY** |
| Syne | **LEGACY** |

`WAITING_FOR_WEBSITE_EVIDENCE` reste historiquement **CLOSED** (VALD-096, 2026-08-14). Cette fermeture n'est pas réécrite. La décision ultérieure du guide final la remplace pour l'usage actif.

### Validations typographiques requises avant implémentation

- confirmation que la licence fournie autorise l'incorporation Web ;
- confirmation des restrictions de redistribution et de dépôt Git ;
- sélection des fichiers WOFF2 nécessaires au projet ;
- confirmation du rôle de chaque famille.

Interdit : télécharger une police depuis une source non approuvée ; partager les fichiers de police ; committer une police sans gate produit spécifique ; substituer automatiquement une police ressemblante.

---

## Logo final

La charte adopte :

- le symbole géométrique officiel TAGORA ;
- le logotype TAGORA ;
- la signature : **Piloter • Innover • Performer**.

Règles :

- versions verticale et horizontale ;
- taille minimale **30 px** ;
- proportions préservées ;
- aucune déformation ;
- aucune pixellisation ;
- aucune modification ;
- aucune nouvelle couleur ;
- aucune suppression ;
- aucune addition ;
- aucune utilisation sur fond chargé ;
- zone de protection suffisante.

```text
LOGO_SOURCE_ASSETS_RECEIVED=YES
LOGO_SOURCE_ASSETS_RECEIVED_DATE=2026-08-17
ASSET_RECONSTRUCTION_FROM_PDF=PROHIBITED
```

---

## Identités visuelles des modules

DEC-029 ajoute une couche produit à la charte centrale sans remplacer ses huit couleurs de marque.

- 14 PNG produits de 1080 × 1080 px ;
- variantes normales sur fond intégré `#182643` ;
- variantes `light` sur fond blanc intégré ;
- fichiers opaques, non transparents ;
- accents scellés par produit ;
- aucun SVG produit livré ;
- usage, taille minimale et tokens dans le standard visuel des modules.

La couleur `#182643` reste un fond incorporé aux assets. Elle ne remplace pas l'Indigo spatial `#1B2641` comme couleur centrale.

Références : [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md), [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md).

---

## Réception des actifs et validations encore requises

Les logos centraux PNG/SVG, les variantes horizontales/verticales, les icônes, les fichiers typographiques OTF/WOFF2 et le document de licence ont été reçus le 2026-08-17. Les identités produits ont été reçues en PNG normal/clair et en sources PSD.

```text
PENDING_BRAND_ASSET_VALIDATIONS=
1. validation licence Web Avenir Next et JHC Notion
2. confirmation rôle Avenir Next / JHC Notion
3. mapping du symbole autonome vers favicon et icônes
4. exports horizontaux ou symboles autonomes officiels des identités produits
5. exports SVG officiels des identités produits
```

---

## Frontière d'application

TOS documente seulement. Aucune application produit n'est autorisée par cette charte.

Interdit : Website, Nexus, Time, Mail IA, Stock Premium, Pulse AI, tout autre repository ; code produit ; CSS produit ; favicon produit ; asset produit ; installation de police ; DNS ; Vercel ; Railway ; Supabase ; DB ; migration ; Production ; secret.

Les six projets devront migrer **après transfert Martin** et **GO propre** de chaque projet, une fois les assets requis et le mapping typographique fournis.

---

## Décisions remplacées pour l'usage actif

| Identifiant | Statut actif |
|---|---|
| DEC-017 | `REPLACED_BY_FINAL_BRAND_GUIDE` |
| ADR-0005 | `SUPERSEDED_BY_ADR_0006` |
| VALD-096 | `HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE` |
| Outfit + Syne | `LEGACY` |
| Matrice Trello provisoire | `OBSOLETE` |
| Palette Website provisoire | `OBSOLETE` |

---

## Références

- [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md)
- [VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md](../10_knowledge/VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md)
- [PALETTE_COULEURS.md](PALETTE_COULEURS.md)
- [TYPOGRAPHIE.md](TYPOGRAPHIE.md)
- [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [REGISTRE_THEMES_MODULES_TAGORA.md](REGISTRE_THEMES_MODULES_TAGORA.md)
- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md)
- [PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md)
- Historique : [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md), [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
