# TAGORA Module Registry v1

Registre canonique des modules TAGORA destiné à **TAGORA Website** et **TAGORA Nexus**.

Ce document est une **réconciliation documentaire** écrite sur `main` courant. Il n'implémente aucun registre runtime. Il ne modifie aucun autre repository.

```text
REGISTRY_ID=TAGORA-MODULE-REGISTRY-V1
REGISTRY_VERSION=1.1.0-main-aligned
DECISION_DATE=2026-08-20
DECISION_AUTHORITY=MARTIN_AND_TOS
SOURCE_DECISION=TOS_MODULE_REGISTRY_V1_MAIN_ALIGNED_DOCUMENTARY_RECONCILIATION
MARTIN_DECISION=OPTION_A_RECONCILE_WITH_PUBLISHED_MAIN_FOR_ALL_MODULES
AUTHORITATIVE_MAIN=88c0af3d03531bab50754126964aa051439abea1
AUTHORITATIVE_NOMENCLATURE_COMMIT=30b2c0e92d3113545b52ce06780121f4794a49ad
AUTHORITATIVE_DEC_027_029_COMMIT=88c0af3d03531bab50754126964aa051439abea1
RECOVERY_COMMIT_REFERENCE_ONLY=0afd9c15bb497d59badb6cf2e6ea8402f657b812
RECOVERY_COMMIT_APPLICATION_AUTHORIZED=NO
RECOVERY_COMMIT_AUTHORITATIVE=NO
REGISTRY_STATUS=APPROVED_WITH_EXPLICIT_HOLDS_AND_MAIN_ALIGNMENT
REGISTRY_CONSUMERS=TAGORA_WEBSITE,TAGORA_NEXUS
DOCUMENTATION_ONLY=yes
RUNTIME_REGISTRY=no
```

---

## 1. Pourquoi le commit de récupération n'est pas autoritaire

Le commit `0afd9c15bb497d59badb6cf2e6ea8402f657b812` conserve une première version du registre. Il n'est **pas** appliqué, cherry-pické, mergé ni rebasé.

Il a été rédigé avant les commits déjà publiés sur `main` :

- `30b2c0e` — nomenclature commerciale officielle (DEC-026 / ADR-0014 / VALD-105) ;
- `88c0af3` — DEC-027, DEC-028, DEC-029 (ADR-0015, ADR-0016, ADR-0017).

Cette première version contredisait `main` sur les noms canoniques (`MESSOR` vs `TAGORA MESSOR`, `TAGORA Pulse AI` vs `TAGORA PULS`), la carte (huit tuiles visibles vs six modules SaaS), la catégorie PULS et certains chemins d'actifs.

Les sources contrôlantes de ce fichier sont donc :

- [NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md](../04_adoption_modules/NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md)
- [ADR-0014](../05_adr/ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md)
- [ADR-0015](../05_adr/ADR-0015-POLITIQUE-TRANSITION-ARCHITECTURE-MARQUE-TAGORA.md) — DEC-027
- [ADR-0016](../05_adr/ADR-0016-FORMAT-COMMERCIAL-UNIFORME-MODULES-TAGORA.md) — DEC-028
- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md) — DEC-029
- [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-027 à DEC-029

Le commit de récupération sert uniquement de **référence de structure et de règles transversales** (Nexus, DENY, `/home`, clés techniques).

---

## 2. Objet et limites

### Objet

Figer, pour Website et Nexus :

- la distinction **huit produits enregistrés** / **six tuiles SaaS actuellement visibles** ;
- deux produits futurs réservés, non visibles ;
- TAGORA Nexus comme portail central seulement ;
- les noms commerciaux canoniques **alignés sur `main`** ;
- les alias autorisés et interdits ;
- les clés module techniques (inchangées sauf gate de migration distinct) ;
- les logos et palettes **uniquement s'ils sont déjà vérifiés sur `main`** ;
- les domaines canoniques et le domaine legacy ;
- la route Home cible `/home` ;
- l'ordre d'affichage des tuiles actuellement visibles ;
- les interdictions d'implémentation.

### Limites

```text
CODE_CHANGE_AUTHORIZED=no
TYPE_CHANGE_AUTHORIZED=no
RUNTIME_REGISTRY_AUTHORIZED=no
WEBSITE_CHANGE_AUTHORIZED=no
NEXUS_CHANGE_AUTHORIZED=no
MODULE_REPOSITORY_CHANGE_AUTHORIZED=no
LOGO_ASSET_CHANGE_AUTHORIZED=no
RUNTIME_PALETTE_AUTHORIZED=no
ROUTE_IMPLEMENTATION_AUTHORIZED=no
RUNTIME_KEY_IMPLEMENTATION_AUTHORIZED=no
DNS_AUTHORIZED=no
DB_AUTHORIZED=no
MIGRATION_AUTHORIZED=no
SECRET_AUTHORIZED=no
COMMIT_AUTHORIZED=no
PUSH_AUTHORIZED=no
DEPLOYMENT_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
REGISTRATION_GRANTS_ACCESS=no
REGISTRATION_GRANTS_SUBSCRIPTION=no
REGISTRATION_GRANTS_ENTITLEMENT=no
```

Aucune valeur absente de `main` ou de la décision Martin n'est inventée.

---

## 3. Carte enregistrée vs tuiles visibles

```text
REGISTERED_PRODUCT_COUNT=8
CURRENT_VISIBLE_MODULE_TILE_COUNT=6
FUTURE_RESERVED_MODULE_COUNT=2
```

Les six modules SaaS mensuels de DEC-026 / ADR-0014 sont les **seules tuiles actuellement visibles**. Voice IA et Boards sont enregistrés pour une activation future ; ils ne doivent pas apparaître comme tuiles actives.

L'ordre commercial ADR-0014 (HORORA, PULS, DEPORA, MESSOR, YORVA, ETIOQ) reste la carte commerciale officielle. L'ordre d'affichage « Mon espace TAGORA » ci-dessous est celui fixé par la décision Martin de réconciliation (MESSOR = 1). Les deux ordres ne sont pas fusionnés.

YORVA et ETIOQ restent `COMING_SOON` au sens commercial ADR-0014. `ACTIVE_VISIBLE` signifie seulement : tuile prévue dans les six positions actuelles, pas disponibilité produit.

---

## 4. Règles transversales

```text
CANONICAL_NAMES_FROM_PUBLISHED_MAIN=YES
TECHNICAL_IDENTIFIERS_UNCHANGED_UNLESS_SEPARATE_MIGRATION_GATE=YES
TAGORA_NEXUS_RESERVED_FOR_CENTRAL_PORTAL=YES
TAGORA_NEXUS_IS_STANDARD_MODULE_TILE=NO
TAGORA_BOARDS_MUST_NOT_USE_TAGORA_NEXUS=YES
tagora_nexus_MUST_NOT_BE_BOARDS_ALIAS=YES
TAGORA_BOARD_MAY_ONLY_BE_LEGACY_ALIAS_OF_TAGORA_BOARDS=YES
YORVA_CANONICAL_KEY_UNIQUE=tagora_yorva
tagora_sourcing_ai_STATUS=CONTROLLED_LEGACY_ALIAS_ONLY
sourcing_STATUS=CONTROLLED_LEGACY_ALIAS_ONLY
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
UNKNOWN_KEY=DENY
DEFAULT_MODULE_ACCESS=DENY
CROSS_TENANT_ACCESS=DENY
RESERVED_DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE_WITHOUT_PROOF=YES
UNCONFIRMED_LOGO=HOLD
UNCONFIRMED_PALETTE=HOLD
MISSING_VALUE=MUST_NOT_BE_INVENTED
TARGET_HOME_ROUTE=/home
FUTURE_RESERVED_MUST_NOT_APPEAR_AS_ACTIVE_TILE=YES
```

DEC-027 : convention canonique `TAGORA + NOM DU MODULE`. `NOM par TAGORA` reste une signature graphique secondaire, pas un nom officiel.

---

## 5. TAGORA Nexus — portail central, hors tuile module

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Nexus
PORTAL_ROLE=CENTRAL_PORTAL
STANDARD_MODULE_TILE=NO
MON_ESPACE_TAGORA_DISPLAY_ORDER=NOT_A_MODULE_TILE
CANONICAL_MODULE_KEY=NOT_A_STANDARD_MODULE_KEY
FORBIDDEN_USAGE_AS_BOARDS_ALIAS=YES
BOARDS_MUST_NOT_USE_NEXUS=YES
tagora_nexus_AS_BOARDS_ALIAS_ALLOWED=NO
```

Nexus n'appartient pas aux six tuiles visibles ni aux deux réservations futures. Un thème visuel Nexus existe dans le registre de thèmes DEC-029 ; il n'en fait pas un module commercial.

---

## 6. Vue d'ensemble

| Statut tuile | Display order | Canonical commercial name | Canonical module key | Category | Canonical domain |
|---|---|---|---|---|---|
| ACTIVE_VISIBLE | 1 | TAGORA MESSOR | `tagora_messor` | Communications et productivité | `messor.tagora.ca` |
| ACTIVE_VISIBLE | 2 | TAGORA HORORA | `tagora_horora` | Ressources humaines et temps | `horora.tagora.ca` |
| ACTIVE_VISIBLE | 3 | TAGORA DEPORA | `tagora_depora` | Opérations et inventaire | `depora.tagora.ca` |
| ACTIVE_VISIBLE | 4 | TAGORA PULS | `tagora_pulse_ai` | Agents IA et conversations | `pulse.tagora.ca` |
| ACTIVE_VISIBLE | 5 | TAGORA YORVA | `tagora_yorva` | Approvisionnement et sourcing | `yorva.tagora.ca` |
| ACTIVE_VISIBLE | 6 | TAGORA ETIOQ | `tagora_etioq` | Gouvernance et conformité | `etioq.tagora.ca` |
| FUTURE_RESERVED_NOT_VISIBLE | 7 | TAGORA Voice IA | `tagora_voice_ai` | Communications vocales | `voice.tagora.ca` |
| FUTURE_RESERVED_NOT_VISIBLE | 8 | TAGORA Boards | `tagora_boards` | Pilotage et collaboration | `boards.tagora.ca` |

```text
MODULE_COUNT=8
CANONICAL_KEY_COUNT=8
ACTIVE_DISPLAY_ORDER_COUNT=6
FUTURE_DISPLAY_ORDER_COUNT=2
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
CANONICAL_MODULE_KEYS=tagora_messor,tagora_horora,tagora_depora,tagora_pulse_ai,tagora_yorva,tagora_etioq,tagora_voice_ai,tagora_boards
CANONICAL_DOMAINS=messor.tagora.ca; horora.tagora.ca; depora.tagora.ca; pulse.tagora.ca; yorva.tagora.ca; etioq.tagora.ca; voice.tagora.ca; boards.tagora.ca
LEGACY_DOMAINS=stock.tagora.ca
NEXUS_PRESENT_AS_STANDARD_MODULE_TILE=NO
```

---

## 7. Fiches — tuiles actuellement visibles

Les chemins logo utilisent la convention DEC-029 / registre de thèmes : colonne **fond sombre / tuile sombre**, puis **fond clair / tuile claire**. Les noms de fichiers sont sensibles à la casse.

### 7.1 TAGORA MESSOR

```text
CANONICAL_COMMERCIAL_NAME=TAGORA MESSOR
SHORT_ALIAS=MESSOR
CANONICAL_MODULE_KEY=tagora_messor
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Mail IA ; TAGORA Mail AI
LEGACY_KEYS=tagora_mail_ai ; mail_ai
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/messor.png
LOGO_LIGHT_TILE=3-Modules/messor light.png
LOGO_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
PALETTE_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
ACCENT=#DBDF5C
HOVER=#B1B652
SOFT=#F2F3D7
BORDER=#EAECAC
ON_ACCENT=#081029
FOCUS=#7C8245
CHART_PRIMARY=#DBDF5C
CHART_SECONDARY=#DADF3A
ACTION_BG=#DBDF5C
ACTION_ON=#081029
CANONICAL_DOMAIN=messor.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
EXISTING_UNCHANGED_DOMAIN_ON_MAIN=mail.tagora.ca
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
CURRENT_DISPLAY_ORDER=1
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Communications et productivité
```

`mail.tagora.ca` est le domaine applicatif historique déjà consigné sur `main` (ADR-0004 / ADR-0014). Il n'est pas renommé ici. `messor.tagora.ca` est la cible canonique réservée, non supposée live.

### 7.2 TAGORA HORORA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA HORORA
CANONICAL_MODULE_KEY=tagora_horora
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Time
LEGACY_KEYS=tagora_time ; time
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/horora.png
LOGO_LIGHT_TILE=3-Modules/horora light.png
LOGO_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
PALETTE_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
ACCENT=#1F79E0
HOVER=#1A64BB
SOFT=#D6E4EB
BORDER=#95BEE7
ON_ACCENT=#081029
FOCUS=#154A8E
CHART_PRIMARY=#1F79E0
CHART_SECONDARY=#4174BA
ACTION_BG=#1A64BB
ACTION_ON=#FFFFFF
ACCESSIBLE_ACTION=#1A64BB
CANONICAL_DOMAIN=horora.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
EXISTING_UNCHANGED_DOMAIN_ON_MAIN=time.tagora.ca
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
CURRENT_DISPLAY_ORDER=2
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Ressources humaines et temps
```

### 7.3 TAGORA DEPORA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA DEPORA
CANONICAL_MODULE_KEY=tagora_depora
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Stock Premium ; Stock Premium
LEGACY_KEYS=tagora_stock_premium ; stock_premium
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/depora.png
LOGO_LIGHT_TILE=3-Modules/depora light.png
LOGO_STATUS=APPROVED_FROM_DEC-029_ADR-0017_VALD-108
PALETTE_STATUS=APPROVED_FROM_DEC-029_THEME_REGISTRY
ACCENT=#00C1D5
HOVER=#029EB3
SOFT=#D1EFE9
BORDER=#87DFE2
ON_ACCENT=#081029
FOCUS=#047188
CHART_PRIMARY=#00C1D5
CHART_SECONDARY=#4DBED2
SECONDARY=#4DBED2
ACTION_BG=#00C1D5
ACTION_ON=#081029
CANONICAL_DOMAIN=depora.tagora.ca
LEGACY_DOMAIN=stock.tagora.ca
CANONICAL_DOMAIN_STATUS=CANONICAL_TARGET_RESERVED_LEGACY_DOMAIN_REMAINS_UNCHANGED
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
CURRENT_DISPLAY_ORDER=3
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Opérations et inventaire
```

`stock.tagora.ca` est le domaine legacy / applicatif déjà consigné sur `main`. Il n'est pas réécrit.

### 7.4 TAGORA PULS

```text
CANONICAL_COMMERCIAL_NAME=TAGORA PULS
CANONICAL_MODULE_KEY=tagora_pulse_ai
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Pulse AI ; Pulse AI
TECHNICAL_LEGACY_NAME=xplod-ai-agent
TECHNICAL_LEGACY_STATUS=TECHNICAL_ONLY_NOT_COMMERCIAL_ALIAS_NOT_MODULE_KEY
X_PLOD_CANADA=CLIENT_ACCOUNT_NOT_PRODUCT_ALIAS
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/Puls.png
LOGO_LIGHT_TILE=3-Modules/Puls light.png
LOGO_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
PALETTE_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
ASSET_STATUS=MUST_NOT_BE_UNCONFIRMED_HOLD
ACCENT=#55C558
HOVER=#46A14F
SOFT=#DEF0D7
BORDER=#AEE1AA
ON_ACCENT=#081029
FOCUS=#327443
CHART_PRIMARY=#55C558
CHART_SECONDARY=#3A8648
ACTION_BG=#55C558
ACTION_ON=#081029
CANONICAL_DOMAIN=pulse.tagora.ca
CANONICAL_DOMAIN_STATUS=CANONICAL_APP_DOMAIN_RECORDED_ON_MAIN_LIVE_DNS_NOT_ASSERTED_BY_THIS_REGISTRY
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
CURRENT_DISPLAY_ORDER=4
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Agents IA et conversations
```

La catégorie suit ADR-0014. `pulse.tagora.ca` est le domaine applicatif déjà consigné sur `main` (ADR-0004 / ADR-0014 / DEC-015). Ce registre n'affirme pas un état DNS live.

`xplod-ai-agent` n'est pas un alias commercial. `X-Plod Canada` n'est pas un alias produit.

### 7.5 TAGORA YORVA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA YORVA
CANONICAL_MODULE_KEY=tagora_yorva
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Sourcing AI ; Sourcing AI
LEGACY_KEYS=tagora_sourcing_ai ; sourcing
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/YORVA.png
LOGO_LIGHT_TILE=3-Modules/YORVA light.png
LOGO_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
PALETTE_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
ACCENT=#BAC300
HOVER=#969F08
SOFT=#EDEFC9
BORDER=#DBE082
ON_ACCENT=#081029
FOCUS=#6A7212
CHART_PRIMARY=#BAC300
CHART_SECONDARY=#7C840E
ACTION_BG=#BAC300
ACTION_ON=#081029
CANONICAL_DOMAIN=yorva.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
COMMERCIAL_AVAILABILITY=COMING_SOON
CURRENT_DISPLAY_ORDER=5
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Approvisionnement et sourcing
```

Statut commercial `COMING_SOON` recopié d'ADR-0014. Actifs recopiés du registre de thèmes DEC-029 (usage limité aux surfaces futures autorisées, selon ce registre de thèmes).

### 7.6 TAGORA ETIOQ

```text
CANONICAL_COMMERCIAL_NAME=TAGORA ETIOQ
CANONICAL_MODULE_KEY=tagora_etioq
KEY_STATUS=IMMUTABLE_CANONICAL
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LOGO_DARK_TILE=3-Modules/etioq.png
LOGO_LIGHT_TILE=3-Modules/etioq light.png
LOGO_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
PALETTE_STATUS=RECORDED_FROM_DEC-029_THEME_REGISTRY
ACCENT=#F2F890
HOVER=#C3CA7B
SOFT=#F5F7DF
BORDER=#F4F7C3
ON_ACCENT=#081029
FOCUS=#899062
CHART_PRIMARY=#F2F890
CHART_SECONDARY=#E3E88F
ACTION_BG=#F2F890
ACTION_ON=#081029
CANONICAL_DOMAIN=etioq.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=ACTIVE_VISIBLE
COMMERCIAL_AVAILABILITY=COMING_SOON
CURRENT_DISPLAY_ORDER=6
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Gouvernance et conformité
```

Nom de travail antérieur ADR-0014 : TAGORA TAG. Statut commercial `COMING_SOON` recopié d'ADR-0014.

---

## 8. Fiches — produits futurs réservés, non visibles

Activation : gate TOS et Nexus distincts. Interdit de les afficher comme tuiles actives.

### 8.1 TAGORA Voice IA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Voice IA
CANONICAL_MODULE_KEY=tagora_voice_ai
KEY_STATUS=IMMUTABLE_CANONICAL
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=voice.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=FUTURE_RESERVED_NOT_VISIBLE
FUTURE_DISPLAY_ORDER=7
MON_ESPACE_TAGORA_CATEGORY=Communications vocales
ACTIVATION_REQUIRES_SEPARATE_TOS_AND_NEXUS_GATE=YES
```

### 8.2 TAGORA Boards

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Boards
CANONICAL_MODULE_KEY=tagora_boards
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Board
FORBIDDEN_ALIAS=TAGORA Nexus
LEGACY_KEYS=tagora_board ; board
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=boards.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_NOT_ASSUMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
CURRENT_TILE_STATUS=FUTURE_RESERVED_NOT_VISIBLE
FUTURE_DISPLAY_ORDER=8
MON_ESPACE_TAGORA_CATEGORY=Pilotage et collaboration
ACTIVATION_REQUIRES_SEPARATE_TOS_AND_NEXUS_GATE=YES
```

---

## 9. Alias

### Alias commerciaux autorisés

| Alias | Cible canonique | Statut | Peut étendre un accès |
|---|---|---|---|
| MESSOR | TAGORA MESSOR / `tagora_messor` | SHORT_ALIAS | NO |
| TAGORA Mail IA | TAGORA MESSOR / `tagora_messor` | ALLOWED_ALIAS | NO |
| TAGORA Mail AI | TAGORA MESSOR / `tagora_messor` | ALLOWED_ALIAS | NO |
| TAGORA Time | TAGORA HORORA / `tagora_horora` | ALLOWED_ALIAS | NO |
| TAGORA Stock Premium | TAGORA DEPORA / `tagora_depora` | ALLOWED_ALIAS | NO |
| Stock Premium | TAGORA DEPORA / `tagora_depora` | ALLOWED_ALIAS | NO |
| TAGORA Pulse AI | TAGORA PULS / `tagora_pulse_ai` | LEGACY_ALIAS | NO |
| Pulse AI | TAGORA PULS / `tagora_pulse_ai` | LEGACY_ALIAS | NO |
| TAGORA Sourcing AI | TAGORA YORVA / `tagora_yorva` | ALLOWED_ALIAS | NO |
| Sourcing AI | TAGORA YORVA / `tagora_yorva` | ALLOWED_ALIAS | NO |
| TAGORA Board | TAGORA Boards / `tagora_boards` | AUTHORIZED_ALIAS | NO |

### Clés legacy contrôlées

| Alias / clé | Cible canonique | Statut | Peut étendre un accès |
|---|---|---|---|
| `tagora_mail_ai` | TAGORA MESSOR / `tagora_messor` | CONTROLLED_LEGACY_KEY | NO |
| `mail_ai` | TAGORA MESSOR / `tagora_messor` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_time` | TAGORA HORORA / `tagora_horora` | CONTROLLED_LEGACY_KEY | NO |
| `time` | TAGORA HORORA / `tagora_horora` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_stock_premium` | TAGORA DEPORA / `tagora_depora` | CONTROLLED_LEGACY_KEY | NO |
| `stock_premium` | TAGORA DEPORA / `tagora_depora` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_sourcing_ai` | TAGORA YORVA / `tagora_yorva` | CONTROLLED_LEGACY_ALIAS_ONLY | NO |
| `sourcing` | TAGORA YORVA / `tagora_yorva` | CONTROLLED_LEGACY_ALIAS_ONLY | NO |
| `tagora_board` | TAGORA Boards / `tagora_boards` | CONTROLLED_LEGACY_KEY | NO |
| `board` | TAGORA Boards / `tagora_boards` | CONTROLLED_LEGACY_KEY | NO |

### Non alias

| Nom | Cible | Statut |
|---|---|---|
| `xplod-ai-agent` | TAGORA PULS / `tagora_pulse_ai` | TECHNICAL_ONLY_NOT_COMMERCIAL_ALIAS_NOT_MODULE_KEY |
| X-Plod Canada | hors produit | CLIENT_ACCOUNT_NOT_PRODUCT_ALIAS |

### Alias interdits

| Alias | Interdiction |
|---|---|
| `TAGORA Nexus` comme alias de Boards | INTERDIT |
| `tagora_nexus` comme alias de Boards | INTERDIT |
| `TAGORA Board` comme nom canonique distinct | INTERDIT |
| `tagora_sourcing_ai` comme clé canonique YORVA | INTERDIT |
| `MESSOR` comme nom canonique (le canonique est `TAGORA MESSOR`) | INTERDIT |
| `TAGORA Pulse AI` comme nom canonique (le canonique est `TAGORA PULS`) | INTERDIT |
| Voice IA ou Boards comme tuile `ACTIVE_VISIBLE` | INTERDIT sans gate distinct |
| toute clé absente de ce registre | UNKNOWN_KEY=DENY |

---

## 10. Logos et palettes

Recopiés uniquement depuis [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md) (DEC-029 / ADR-0017 / VALD-108). Aucun transfert d'actif, aucune palette runtime.

| Module | Logo sombre | Logo clair | Accent | Statut |
|---|---|---|---|---|
| TAGORA MESSOR | `3-Modules/messor.png` | `3-Modules/messor light.png` | `#DBDF5C` | recopié de `main` |
| TAGORA HORORA | `3-Modules/horora.png` | `3-Modules/horora light.png` | `#1F79E0` | recopié de `main` |
| TAGORA DEPORA | `3-Modules/depora.png` | `3-Modules/depora light.png` | `#00C1D5` | DEC-029 préservé |
| TAGORA PULS | `3-Modules/Puls.png` | `3-Modules/Puls light.png` | `#55C558` | recopié de `main` ; pas HOLD |
| TAGORA YORVA | `3-Modules/YORVA.png` | `3-Modules/YORVA light.png` | `#BAC300` | recopié de `main` ; usage limité Coming Soon |
| TAGORA ETIOQ | `3-Modules/etioq.png` | `3-Modules/etioq light.png` | `#F2F890` | recopié de `main` ; usage limité Coming Soon |
| TAGORA Voice IA | — | — | — | `UNCONFIRMED_HOLD` |
| TAGORA Boards | — | — | — | `UNCONFIRMED_HOLD` |

HORORA : le bouton accessible utilise `ACTION_BG=#1A64BB` / `ACTION_ON=#FFFFFF`, comme le registre de thèmes.

---

## 11. Domaines

Huit domaines canoniques. Un domaine legacy. Aucun n'est décrit comme live par ce document.

| Domain | Module | Status |
|---|---|---|
| `messor.tagora.ca` | TAGORA MESSOR | `RESERVED_NOT_ASSUMED_LIVE` |
| `horora.tagora.ca` | TAGORA HORORA | `RESERVED_NOT_ASSUMED_LIVE` |
| `depora.tagora.ca` | TAGORA DEPORA | `CANONICAL_TARGET_RESERVED` |
| `pulse.tagora.ca` | TAGORA PULS | `CANONICAL_APP_DOMAIN_RECORDED_ON_MAIN_LIVE_DNS_NOT_ASSERTED_BY_THIS_REGISTRY` |
| `yorva.tagora.ca` | TAGORA YORVA | `RESERVED_NOT_ASSUMED_LIVE` |
| `etioq.tagora.ca` | TAGORA ETIOQ | `RESERVED_NOT_ASSUMED_LIVE` |
| `voice.tagora.ca` | TAGORA Voice IA | `RESERVED_NOT_ASSUMED_LIVE` |
| `boards.tagora.ca` | TAGORA Boards | `RESERVED_NOT_ASSUMED_LIVE` |

| Legacy / historique déjà sur `main` | Module | Status |
|---|---|---|
| `stock.tagora.ca` | TAGORA DEPORA | legacy ; unchanged |
| `mail.tagora.ca` | TAGORA MESSOR | historique ADR-0014 ; unchanged |
| `time.tagora.ca` | TAGORA HORORA | historique ADR-0014 ; unchanged |
| `pulse.tagora.ca` | TAGORA PULS | déjà le domaine applicatif consigné ; unchanged |

```text
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
DNS_AUTHORIZED=no
```

---

## 12. Route Home cible

```text
TARGET_HOME_ROUTE=/home
```

Pour chacun des huit produits enregistrés. Déclaration documentaire seulement.

---

## 13. Décisions critiques

1. Les noms canoniques de `main` prévalent : `TAGORA MESSOR`, `TAGORA HORORA`, `TAGORA DEPORA`, `TAGORA PULS`, `TAGORA YORVA`, `TAGORA ETIOQ`.
2. Huit produits enregistrés. Six tuiles actuellement visibles. Deux réservations futures non visibles.
3. TAGORA Nexus reste le portail central. Pas une tuile module. `tagora_nexus` n'est pas un alias de Boards.
4. `tagora_yorva` est l'unique clé canonique YORVA.
5. Clé inconnue = DENY. Accès module par défaut = DENY. Accès cross-tenant = DENY. Une clé legacy n'étend aucun accès.
6. La catégorie PULS est `Agents IA et conversations` (ADR-0014).
7. Les actifs HORORA, PULS, DEPORA, MESSOR, YORVA et ETIOQ sont recopiés du registre de thèmes DEC-029. Voice IA et Boards restent HOLD.
8. La route Home cible est `/home`. Aucune route n'est implémentée.
9. L'enregistrement n'accorde ni abonnement, ni entitlement, ni accès.
10. Ce document n'autorise aucun code, DNS, DB, secret, commit, push, déploiement ou Production.

---

## 14. Consommateurs

```text
REGISTRY_CONSUMERS=TAGORA_WEBSITE,TAGORA_NEXUS
WEBSITE_IMPLEMENTATION_AUTHORIZED_BY_THIS_DOCUMENT=no
NEXUS_IMPLEMENTATION_AUTHORIZED_BY_THIS_DOCUMENT=no
```

---

## Statut

```text
REGISTRY_STATUS=APPROVED_WITH_EXPLICIT_HOLDS_AND_MAIN_ALIGNMENT
REGISTRY_VERSION=1.1.0-main-aligned
DOCUMENTATION_ONLY=yes
NO_RUNTIME_CHANGE=yes
REGISTERED_PRODUCT_COUNT=8
CURRENT_VISIBLE_MODULE_TILE_COUNT=6
FUTURE_RESERVED_MODULE_COUNT=2
CANONICAL_KEY_COUNT=8
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
RECOVERY_COMMIT_APPLICATION_AUTHORIZED=NO
```
