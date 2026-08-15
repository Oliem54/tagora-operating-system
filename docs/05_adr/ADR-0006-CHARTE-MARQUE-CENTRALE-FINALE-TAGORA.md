# ADR-0006 — Charte de marque centrale finale TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-15**

Validation : **VALD-097**  
Décision : **DEC-018**

Cette ADR enregistre uniquement la **charte de marque centrale finale** TAGORA dans TOS.

Elle **n'autorise aucune application** dans Website, Nexus, Time, Mail IA, Stock Premium ou Pulse AI.  
Elle **n'autorise aucun DNS, déploiement, code produit, installation de police, asset produit ou secret**.  
Elle **n'extrait pas** le logo ni les polices depuis le PDF.

---

## Contexte

L'identité visuelle centrale TAGORA reposait sur des guides provisoires :

- matrice Trello provisoire ;
- palette Website provisoire ;
- contrat typographique transversal Outfit + Syne (DEC-017 / ADR-0005 / VALD-096), clos le 14 août 2026 à partir de la preuve Website `6415cdd` ;
- contrat couleurs TOS incomplet (`PALETTE_COULEURS.md` sans valeurs hex finales).

Martin a approuvé le document `tagora_central_Guide_de_marque.pdf`, daté du **2026-08-14**, comme source normative finale de l'identité centrale TAGORA.

Les décisions du 14 août restent historiquement vraies. Elles ne sont pas réécrites. Elles sont remplacées pour l'**usage actif**.

`WAITING_FOR_WEBSITE_EVIDENCE` reste historiquement **CLOSED**.

---

## Décision

```text
BRAND_GUIDE_STATUS=FINAL
SOURCE_DOCUMENT=tagora_central_Guide_de_marque.pdf
SOURCE_DATE=2026-08-14
SOURCE_AUTHORITY=MARTIN_APPROVED_FINAL_BRAND_GUIDE
```

Le guide PDF du 14 août 2026 devient la source finale de l'identité centrale TAGORA.

### Palette

Huit couleurs exclusives. Aucune autre couleur centrale TAGORA n'est autorisée. Aucune affectation sémantique détaillée n'est inventée ici.

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

```text
FINAL_PALETTE_STATUS=OFFICIAL_EXCLUSIVE
PREVIOUS_MATRIX_STATUS=OBSOLETE
PREVIOUS_PALETTE_STATUS=OBSOLETE
```

### Gradients

Quatre dégradés exclusifs. Aucun autre dégradé central TAGORA n'est déclaré officiel.

| Dégradé |
|---|
| `#F6F7ED` → `#BCC320` |
| `#74C365` → `#BCC320` |
| `#00804C` → `#74C365` |
| `#081029` → `#1E488F` |

```text
FINAL_GRADIENTS_STATUS=OFFICIAL_EXCLUSIVE
```

### Typography

Familles finales approuvées : **Avenir Next** et **JHC Notion**.

Avenir Next — styles déclarés : Light, Regular, Italic, Medium, Bold, Heavy.  
JHC Notion — styles déclarés : Medium, Heavy Italic.

Outfit et Syne : **LEGACY**.

```text
TYPOGRAPHY_STATUS=FINAL_FAMILIES_APPROVED
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
FONT_FILES_RECEIVED=NO
FONT_IMPLEMENTATION_AUTHORIZED=NO
OUTFIT_SYNE_STATUS=LEGACY
```

La charte nomme les deux familles sans définir explicitement body / display. TOS n'assigne pas `Avenir Next = body` ni `JHC Notion = display`. TOS ne reproduit pas l'ancien modèle Outfit-body / Syne-display.

### Logo

La charte adopte le symbole géométrique officiel TAGORA, le logotype TAGORA et la signature **Piloter • Innover • Performer**.

Règles : versions verticale et horizontale ; taille minimale 30 px ; proportions préservées ; aucune déformation, pixellisation, modification, nouvelle couleur, suppression ou addition ; aucune utilisation sur fond chargé ; zone de protection suffisante.

Le PDF est une référence documentaire. Il ne remplace pas les assets sources.

```text
LOGO_SOURCE_ASSETS_RECEIVED=NO
ASSET_RECONSTRUCTION_FROM_PDF=PROHIBITED
```

### Assets

Les assets sources restent requis avant toute implémentation exacte. Voir la liste `MISSING_BRAND_ASSETS` dans [CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md).

### Legacy

```text
DEC-017_STATUS=REPLACED_BY_FINAL_BRAND_GUIDE
ADR-0005_STATUS=SUPERSEDED_BY_ADR_0006
VALD-096_STATUS=HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE
OUTFIT_SYNE_STATUS=LEGACY
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED
```

ADR-0005, DEC-017 et VALD-096 ne sont pas supprimés.

---

## Options considérées

1. **Conserver Outfit + Syne comme identité centrale finale** — cohérent avec VALD-096, mais contredit le guide Martin du 14 août 2026.
2. **Adopter le guide final sans figer les hex / familles tant que les assets manquent** — laisserait l'identité centrale indéfinie malgré une décision Martin explicite.
3. **Adopter le guide comme source finale dans TOS, sans application produit ni reconstruction d'assets** — retenu.

---

## Conséquences

### Positives

- Une source normative unique pour l'identité centrale TAGORA.
- Palette et dégradés exclusifs enregistrés.
- Familles typographiques finales nommées.
- Historique Outfit + Syne conservé et clairement remplacé pour l'usage actif.

### Négatives / contraintes

- Mapping body / display des nouvelles familles non confirmé.
- Fichiers de polices web licenciés non reçus.
- Logo SVG, favicon et variantes officielles non reçus.
- Six projets devront migrer après transfert Martin ; une migration locale avant assets définitifs peut provoquer du drift visuel.

### Boundary

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

Aucune application produit par TOS. Chaque projet applique uniquement après son propre GO Martin.

---

## Modules impactés

- TOS (documentation seulement)
- TAGORA Website
- TAGORA Nexus
- TAGORA Time
- TAGORA Mail IA
- TAGORA Stock Premium
- TAGORA Pulse AI

Impact inter-projets : **oui**. Écriture hors TOS : **non**.

---

## Références

- [CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md)
- [VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md](../10_knowledge/VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md)
- [PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md)
- [ADR-0005](ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md) — historique, supersédé
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-018

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-097 | Adoption de la charte de marque centrale finale TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-15 |
