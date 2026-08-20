# TAGORA Module Registry v1

Registre canonique des modules TAGORA destiné à **TAGORA Website** et **TAGORA Nexus**.

Ce document enregistre fidèlement la décision Martin transférée. Il n'implémente aucun registre runtime. Il ne modifie aucun autre repository.

```text
REGISTRY_ID=TAGORA-MODULE-REGISTRY-V1
REGISTRY_VERSION=1.0.0
DECISION_DATE=2026-08-19
DECISION_AUTHORITY=MARTIN_AND_TOS
SOURCE_DECISION=TOS-TAGORA-MODULE-REGISTRY-CANONICAL-NAMES-KEYS-DOMAINS-GO
SOURCE_DECISION_STATUS=APPROVED_WITH_EXPLICIT_ASSET_HOLDS
REGISTRY_STATUS=APPROVED_WITH_EXPLICIT_ASSET_HOLDS
REGISTRY_CONSUMERS=TAGORA_WEBSITE,TAGORA_NEXUS
DOCUMENTATION_ONLY=yes
RUNTIME_REGISTRY=no
MARTIN_TRANSFER_CONFIRMED=yes
```

---

## 1. Objet et limites

### Objet

Figer, pour Website et Nexus :

- les règles transversales d'identité module ;
- la réservation de TAGORA Nexus au portail central ;
- l'interdiction pour TAGORA Boards d'utiliser TAGORA Nexus ;
- les noms commerciaux canoniques ;
- les alias autorisés et interdits ;
- les clés module immuables ;
- les clés legacy et leur statut ;
- les logos officiels ou le statut HOLD ;
- les palettes approuvées ou le statut HOLD ;
- les domaines canoniques et leur statut ;
- le domaine legacy, lorsqu'il est déclaré ;
- la route Home cible `/home` ;
- l'ordre et la catégorie dans Mon espace TAGORA ;
- les décisions critiques ;
- les limites et interdictions d'implémentation.

### Limites de ce document

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
```

Aucune valeur absente de la décision transférée n'est inventée. Un logo, une palette ou un domaine non confirmé reste explicitement en HOLD ou RESERVED. Un domaine réservé n'est pas décrit comme actif.

---

## 2. Règles transversales

```text
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
```

1. `TAGORA Nexus` demeure réservé au portail central. Ce n'est pas une tuile module standard de Mon espace TAGORA.
2. `tagora_nexus` ne peut pas être un alias de TAGORA Boards.
3. TAGORA Boards n'utilise pas TAGORA Nexus. Boards est un module distinct.
4. `TAGORA Board` peut uniquement servir d'alias autorisé / legacy de `TAGORA Boards`.
5. `tagora_yorva` est l'unique clé canonique YORVA.
6. `tagora_sourcing_ai` et `sourcing` sont uniquement des alias legacy contrôlés. Ils ne sont pas des clés canoniques.
7. Une clé legacy ne peut étendre aucun accès.
8. Une clé inconnue = DENY.
9. L'accès module par défaut = DENY.
10. L'accès cross-tenant = DENY.
11. Aucun domaine réservé ne doit être décrit comme actif sans preuve.
12. Tout logo ou palette non confirmé reste explicitement `UNCONFIRMED_HOLD`.
13. La route Home cible de chaque module de ce registre est `/home`.

---

## 3. TAGORA Nexus — portail central, hors tuile module

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

TAGORA Nexus n'appartient pas à la liste des huit modules de ce registre. Il n'a pas de position d'affichage module. Il n'est pas un alias de TAGORA Boards. `tagora_nexus` n'est pas une clé module de Boards.

---

## 4. Modules canoniques — vue d'ensemble

Huit modules. Huit clés canoniques. Huit positions d'affichage. Huit catégories. Huit domaines canoniques. Un domaine legacy. Aucune clé ni position n'est partagée.

| Display order | Canonical commercial name | Canonical module key | Category | Canonical domain |
|---|---|---|---|---|
| 1 | MESSOR | `tagora_messor` | Communications et productivité | `messor.tagora.ca` |
| 2 | TAGORA HORORA | `tagora_horora` | Ressources humaines et temps | `horora.tagora.ca` |
| 3 | TAGORA DEPORA | `tagora_depora` | Opérations et inventaire | `depora.tagora.ca` |
| 4 | TAGORA Pulse AI | `tagora_pulse_ai` | Ventes et relation client | `pulse.tagora.ca` |
| 5 | TAGORA YORVA | `tagora_yorva` | Approvisionnement et sourcing | `yorva.tagora.ca` |
| 6 | TAGORA Voice IA | `tagora_voice_ai` | Communications vocales | `voice.tagora.ca` |
| 7 | TAGORA Boards | `tagora_boards` | Pilotage et collaboration | `boards.tagora.ca` |
| 8 | TAGORA ETIOQ | `tagora_etioq` | Gouvernance et conformité | `etioq.tagora.ca` |

```text
MODULE_COUNT=8
CANONICAL_KEY_COUNT=8
DISPLAY_ORDER_COUNT=8
CATEGORY_COUNT=8
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
CANONICAL_MODULE_KEYS=tagora_messor,tagora_horora,tagora_depora,tagora_pulse_ai,tagora_yorva,tagora_voice_ai,tagora_boards,tagora_etioq
CANONICAL_DOMAINS=messor.tagora.ca; horora.tagora.ca; depora.tagora.ca; pulse.tagora.ca; yorva.tagora.ca; voice.tagora.ca; boards.tagora.ca; etioq.tagora.ca
LEGACY_DOMAINS=stock.tagora.ca
CANONICAL_KEY_UNIQUENESS=YES
DISPLAY_ORDER_UNIQUENESS=YES
CATEGORY_UNIQUENESS=YES
NEXUS_PRESENT_AS_STANDARD_MODULE_TILE=NO
```

Les clés canoniques sont immuables. Une clé absente de cette liste est inconnue = DENY. Chaque module est une tuile module standard de Mon espace TAGORA. TAGORA Nexus n'en fait pas partie.

---

## 5. Fiches module

### 5.1 MESSOR

```text
CANONICAL_COMMERCIAL_NAME=MESSOR
CANONICAL_MODULE_KEY=tagora_messor
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Mail IA ; TAGORA Mail AI
LEGACY_KEYS=tagora_mail_ai ; mail_ai
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=messor.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=1
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Communications et productivité
```

### 5.2 TAGORA HORORA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA HORORA
CANONICAL_MODULE_KEY=tagora_horora
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Time
LEGACY_KEYS=tagora_time ; time
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
OFFICIAL_LOGO=horora.png
LOGO_STATUS=APPROVED_FOR_LIGHT_SURFACE_FULL_KIT_PENDING
PALETTE_STATUS=APPROVED_CORE_TOKENS
ACCENT=#1F79E0
ACCESSIBLE_ACTION=#1A64BB
FOCUS=#154A8E
CANONICAL_DOMAIN=horora.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=2
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Ressources humaines et temps
```

### 5.3 TAGORA DEPORA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA DEPORA
CANONICAL_MODULE_KEY=tagora_depora
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=TAGORA Stock Premium ; Stock Premium
LEGACY_KEYS=tagora_stock_premium ; stock_premium
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
LIGHT_LOGO=3-Modules/depora.png
DARK_LOGO=3-Modules/depora light.png
LOGO_STATUS=APPROVED_FROM_DEC-029_ADR-0017_VALD-108
PALETTE_STATUS=APPROVED_PARTIAL
ACCENT=#00C1D5
SECONDARY=#4DBED2
CANONICAL_DOMAIN=depora.tagora.ca
LEGACY_DOMAIN=stock.tagora.ca
CANONICAL_DOMAIN_STATUS=CANONICAL_TARGET_RESERVED_LEGACY_DOMAIN_REMAINS_UNCHANGED
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=3
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Opérations et inventaire
```

`stock.tagora.ca` est le domaine legacy déclaré. Il n'est pas réécrit, ni prouvé actif, ni remappé par ce document. Le domaine canonique cible demeure `depora.tagora.ca`.

### 5.4 TAGORA Pulse AI

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Pulse AI
CANONICAL_MODULE_KEY=tagora_pulse_ai
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=Pulse AI
TECHNICAL_LEGACY_NAME=xplod-ai-agent
TECHNICAL_LEGACY_STATUS=TECHNICAL_ONLY_NOT_COMMERCIAL_ALIAS_NOT_MODULE_KEY
X_PLOD_CANADA=CLIENT_ACCOUNT_NOT_PRODUCT_ALIAS
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=pulse.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_LIVE_STATUS_NOT_DECIDED_BY_THIS_GATE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=4
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Ventes et relation client
```

`xplod-ai-agent` n'est pas un alias commercial et n'est pas une clé module. `X-Plod Canada` n'est pas un alias produit : c'est un compte client.

### 5.5 TAGORA YORVA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA YORVA
CANONICAL_MODULE_KEY=tagora_yorva
KEY_STATUS=IMMUTABLE_CANONICAL
YORVA_CANONICAL_KEY_UNIQUE=YES
ALLOWED_ALIASES=TAGORA Sourcing AI ; Sourcing AI
TRANSITION_LABEL=TAGORA YORVA — Sourcing AI
CONTROLLED_LEGACY_ALIASES=tagora_sourcing_ai ; sourcing
LEGACY_KEYS=tagora_sourcing_ai ; sourcing
LEGACY_ALIAS_STATUS=CONTROLLED_LEGACY_ALIAS_ONLY
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
FORBIDDEN_ALIASES=ANY_KEY_PRESENTED_AS_SECOND_CANONICAL_YORVA_KEY
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=yorva.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=5
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Approvisionnement et sourcing
```

`tagora_yorva` est l'unique clé canonique. `tagora_sourcing_ai` et `sourcing` ne sont pas des clés canoniques. Ce sont uniquement des alias legacy contrôlés. Ils ne peuvent étendre aucun accès.

### 5.6 TAGORA Voice IA

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Voice IA
CANONICAL_MODULE_KEY=tagora_voice_ai
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=NONE_CONFIRMED
LEGACY_KEYS=NONE_CONFIRMED
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=voice.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=6
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Communications vocales
```

### 5.7 TAGORA Boards

```text
CANONICAL_COMMERCIAL_NAME=TAGORA Boards
CANONICAL_MODULE_KEY=tagora_boards
KEY_STATUS=IMMUTABLE_CANONICAL
AUTHORIZED_ALIAS=TAGORA Board
FORBIDDEN_ALIAS=TAGORA Nexus
LEGACY_KEYS=tagora_board ; board
tagora_nexus_AS_ALIAS_ALLOWED=NO
TAGORA_BOARD_STATUS=AUTHORIZED_ALIAS_OF_TAGORA_BOARDS_ONLY
FORBIDDEN_ALIAS_STATUS=MUST_NOT_BE_BOARDS_ALIAS
MUST_NOT_USE_TAGORA_NEXUS=YES
LEGACY_KEY_MUST_NOT_EXTEND_ACCESS=YES
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=boards.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=7
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Pilotage et collaboration
```

`TAGORA Board` n'est pas un nom canonique. Il peut uniquement servir d'alias autorisé de `TAGORA Boards`. `TAGORA Nexus` et `tagora_nexus` ne sont pas des alias de Boards. Boards n'utilise pas TAGORA Nexus.

### 5.8 TAGORA ETIOQ

```text
CANONICAL_COMMERCIAL_NAME=TAGORA ETIOQ
CANONICAL_MODULE_KEY=tagora_etioq
KEY_STATUS=IMMUTABLE_CANONICAL
ALLOWED_ALIASES=NONE_CONFIRMED
LEGACY_KEYS=NONE_CONFIRMED
OFFICIAL_LOGO=UNCONFIRMED_HOLD
APPROVED_PALETTE=UNCONFIRMED_HOLD
CANONICAL_DOMAIN=etioq.tagora.ca
CANONICAL_DOMAIN_STATUS=RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE
DOMAIN_MUST_NOT_BE_DESCRIBED_AS_ACTIVE=YES
TARGET_HOME_ROUTE=/home
MON_ESPACE_TAGORA_DISPLAY_ORDER=8
MON_ESPACE_TAGORA_TILE_TYPE=STANDARD_MODULE_TILE
MON_ESPACE_TAGORA_CATEGORY=Gouvernance et conformité
```

---

## 6. Alias — autorisés, interdits, legacy

### Alias commerciaux autorisés

| Alias | Cible canonique | Statut | Peut étendre un accès |
|---|---|---|---|
| TAGORA Mail IA | MESSOR / `tagora_messor` | ALLOWED_ALIAS | NO |
| TAGORA Mail AI | MESSOR / `tagora_messor` | ALLOWED_ALIAS | NO |
| TAGORA Time | TAGORA HORORA / `tagora_horora` | ALLOWED_ALIAS | NO |
| TAGORA Stock Premium | TAGORA DEPORA / `tagora_depora` | ALLOWED_ALIAS | NO |
| Stock Premium | TAGORA DEPORA / `tagora_depora` | ALLOWED_ALIAS | NO |
| Pulse AI | TAGORA Pulse AI / `tagora_pulse_ai` | ALLOWED_ALIAS | NO |
| TAGORA Sourcing AI | TAGORA YORVA / `tagora_yorva` | ALLOWED_ALIAS | NO |
| Sourcing AI | TAGORA YORVA / `tagora_yorva` | ALLOWED_ALIAS | NO |
| TAGORA YORVA — Sourcing AI | TAGORA YORVA / `tagora_yorva` | TRANSITION_LABEL | NO |
| TAGORA Board | TAGORA Boards / `tagora_boards` | AUTHORIZED_ALIAS | NO |

### Alias et clés legacy contrôlés

| Alias / clé | Cible canonique | Statut | Peut étendre un accès |
|---|---|---|---|
| `tagora_mail_ai` | MESSOR / `tagora_messor` | CONTROLLED_LEGACY_KEY | NO |
| `mail_ai` | MESSOR / `tagora_messor` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_time` | TAGORA HORORA / `tagora_horora` | CONTROLLED_LEGACY_KEY | NO |
| `time` | TAGORA HORORA / `tagora_horora` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_stock_premium` | TAGORA DEPORA / `tagora_depora` | CONTROLLED_LEGACY_KEY | NO |
| `stock_premium` | TAGORA DEPORA / `tagora_depora` | CONTROLLED_LEGACY_KEY | NO |
| `tagora_sourcing_ai` | TAGORA YORVA / `tagora_yorva` | CONTROLLED_LEGACY_ALIAS_ONLY | NO |
| `sourcing` | TAGORA YORVA / `tagora_yorva` | CONTROLLED_LEGACY_ALIAS_ONLY | NO |
| `tagora_board` | TAGORA Boards / `tagora_boards` | CONTROLLED_LEGACY_KEY | NO |
| `board` | TAGORA Boards / `tagora_boards` | CONTROLLED_LEGACY_KEY | NO |

### Classifications techniques — non alias

| Nom | Cible | Statut |
|---|---|---|
| `xplod-ai-agent` | TAGORA Pulse AI / `tagora_pulse_ai` | TECHNICAL_ONLY_NOT_COMMERCIAL_ALIAS_NOT_MODULE_KEY |
| X-Plod Canada | hors produit | CLIENT_ACCOUNT_NOT_PRODUCT_ALIAS |

### Alias interdits

| Alias | Interdiction |
|---|---|
| `TAGORA Nexus` comme alias de Boards | INTERDIT |
| `tagora_nexus` comme alias de Boards | INTERDIT |
| `TAGORA Board` comme nom canonique distinct | INTERDIT |
| `TAGORA Board` comme alias d'un autre module que TAGORA Boards | INTERDIT |
| `tagora_sourcing_ai` comme clé canonique YORVA | INTERDIT |
| `sourcing` comme clé canonique YORVA | INTERDIT |
| toute seconde clé canonique YORVA | INTERDIT |
| `xplod-ai-agent` comme alias commercial ou clé module | INTERDIT |
| `X-Plod Canada` comme alias produit | INTERDIT |
| toute clé absente de ce registre | UNKNOWN_KEY=DENY |

---

## 7. Logos et palettes

Un logo ou une palette non confirmés restent `UNCONFIRMED_HOLD`. Un HOLD n'autorise pas d'actif, d'extraction, de reconstruction ni d'application produit. Les valeurs confirmées ci-dessous sont documentaires. Elles n'autorisent aucun transfert d'actif, aucune palette runtime, ni aucune application Website / Nexus / module.

### 7.1 HOLD — modules sans actif confirmé

| Module | Logo | Palette |
|---|---|---|
| MESSOR | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |
| TAGORA Pulse AI | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |
| TAGORA YORVA | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |
| TAGORA Voice IA | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |
| TAGORA Boards | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |
| TAGORA ETIOQ | `UNCONFIRMED_HOLD` | `UNCONFIRMED_HOLD` |

### 7.2 TAGORA HORORA — actifs et tokens confirmés

```text
OFFICIAL_LOGO=horora.png
LOGO_STATUS=APPROVED_FOR_LIGHT_SURFACE_FULL_KIT_PENDING
PALETTE_STATUS=APPROVED_CORE_TOKENS
ACCENT=#1F79E0
ACCESSIBLE_ACTION=#1A64BB
FOCUS=#154A8E
```

### 7.3 TAGORA DEPORA — actifs et tokens confirmés

```text
LIGHT_LOGO=3-Modules/depora.png
DARK_LOGO=3-Modules/depora light.png
LOGO_STATUS=APPROVED_FROM_DEC-029_ADR-0017_VALD-108
PALETTE_STATUS=APPROVED_PARTIAL
ACCENT=#00C1D5
SECONDARY=#4DBED2
```

```text
ASSET_HOLDS_PRESERVED=YES
UNCONFIRMED_LOGO=HOLD
UNCONFIRMED_PALETTE=HOLD
HORORA_LOGO_AND_CORE_TOKENS_RECORDED=YES
DEPORA_LOGOS_AND_PARTIAL_PALETTE_RECORDED=YES
RUNTIME_PALETTE_AUTHORIZED=no
LOGO_ASSET_CHANGE_AUTHORIZED=no
```

---

## 8. Domaines

Huit domaines canoniques. Un domaine legacy. Aucun n'est décrit comme actif par ce document. Cette décision n'apporte aucune preuve DNS, ni publication, ni activation.

### Huit domaines canoniques

| Domain | Module | Status |
|---|---|---|
| `messor.tagora.ca` | MESSOR / `tagora_messor` | `RESERVED_TARGET_NOT_CONFIRMED_LIVE` |
| `horora.tagora.ca` | TAGORA HORORA / `tagora_horora` | `RESERVED_TARGET_NOT_CONFIRMED_LIVE` |
| `depora.tagora.ca` | TAGORA DEPORA / `tagora_depora` | `CANONICAL_TARGET_RESERVED_LEGACY_DOMAIN_REMAINS_UNCHANGED` |
| `pulse.tagora.ca` | TAGORA Pulse AI / `tagora_pulse_ai` | `RESERVED_TARGET_LIVE_STATUS_NOT_DECIDED_BY_THIS_GATE` |
| `yorva.tagora.ca` | TAGORA YORVA / `tagora_yorva` | `RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE` |
| `voice.tagora.ca` | TAGORA Voice IA / `tagora_voice_ai` | `RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE` |
| `boards.tagora.ca` | TAGORA Boards / `tagora_boards` | `RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE` |
| `etioq.tagora.ca` | TAGORA ETIOQ / `tagora_etioq` | `RESERVED_TARGET_NOT_CREATED_NOT_CONFIRMED_LIVE` |

### Domaine legacy

| Domain | Module | Status |
|---|---|---|
| `stock.tagora.ca` | TAGORA DEPORA / `tagora_depora` | legacy ; remains unchanged ; not rewritten by this document |

```text
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
CANONICAL_DOMAINS=messor.tagora.ca; horora.tagora.ca; depora.tagora.ca; pulse.tagora.ca; yorva.tagora.ca; voice.tagora.ca; boards.tagora.ca; etioq.tagora.ca
LEGACY_DOMAINS=stock.tagora.ca
DOMAIN_STATUSES_PRESERVED=YES
RESERVED_DOMAIN_ACTIVE_CLAIM=NO
DNS_AUTHORIZED=no
```

---

## 9. Route Home cible

```text
TARGET_HOME_ROUTE=/home
```

Pour chacun des huit modules de ce registre, la route Home cible est `/home`.

Cette déclaration est documentaire. Elle n'autorise aucune création, modification ou déploiement de route.

---

## 10. Mon espace TAGORA — ordre et catégorie

Les huit modules ci-dessus sont des tuiles module standard. L'ordre d'affichage est 1 à 8, unique, conformément au tableau de la section 4. Les huit catégories commerciales sont distinctes et figées dans les fiches de la section 5.

TAGORA Nexus n'est pas une tuile module standard. Il n'a pas de position dans cet ordre.

---

## 11. Décisions critiques

1. Ce registre est la source documentaire canonique des huit modules pour TAGORA Website et TAGORA Nexus.
2. TAGORA Nexus reste le portail central. Il n'est pas un module commercial de cette liste. Il n'est pas une tuile module standard.
3. TAGORA Boards est un module distinct. Il n'utilise pas TAGORA Nexus. `tagora_nexus` n'est pas un alias de Boards. `TAGORA Nexus` n'est pas un alias de Boards.
4. `tagora_yorva` est l'unique clé canonique YORVA. `tagora_sourcing_ai` et `sourcing` sont uniquement des alias legacy contrôlés.
5. Les clés canoniques sont immuables. Une clé inconnue = DENY. L'accès module par défaut = DENY. L'accès cross-tenant = DENY.
6. Une clé legacy ne peut étendre aucun accès.
7. Les logos et palettes non confirmés restent `UNCONFIRMED_HOLD`. HORORA enregistre `horora.png` et les tokens cœur. DEPORA enregistre les deux fichiers logo et la palette partielle.
8. Les huit domaines canoniques sont réservés selon le statut de chaque fiche. Aucun n'est décrit comme actif. `stock.tagora.ca` est le seul domaine legacy déclaré.
9. La route Home cible est `/home`. Aucune route n'est implémentée par ce document.
10. Ce document n'autorise aucun code, type, registre runtime, DNS, DB, secret, commit, push, déploiement ou Production.

---

## 12. Limites et interdictions d'implémentation

Interdit par ce document :

- second fichier TOS créé ou modifié au titre de ce registre ;
- code, type, registre runtime ;
- modification Website, Nexus, ou d'un repository module ;
- transfert, copie ou reconstruction d'un logo ;
- palette runtime ;
- création ou modification de route ;
- clé runtime ;
- DNS ;
- DB ;
- migration ;
- secret ;
- stage, commit, push ;
- déploiement ;
- Production ;
- reset, clean, stash, merge, rebase.

Website et Nexus peuvent consommer ce document plus tard, uniquement après un GO distinct et un Human Gate propre à leur dépôt.

---

## 13. Relation aux documents TOS antérieurs

Ce registre n'ouvre pas un second registre runtime. Il n'équivaut pas au registre d'orchestration TOS. Il ne remplace pas les ADR de surfaces, de mapping, d'identité ou de fondation Sourcing AI.

Les documents TOS antérieurs conservent leur historique. Ils ne sont pas réécrits par ce fichier. Les noms, clés, catégories et domaines de ce registre prévalent pour les consommateurs déclarés **TAGORA Website** et **TAGORA Nexus** lorsqu'ils appliqueront ce registre, uniquement après GO distinct.

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
REGISTRY_STATUS=APPROVED_WITH_EXPLICIT_ASSET_HOLDS
REGISTRY_VERSION=1.0.0
DOCUMENTATION_ONLY=yes
NO_RUNTIME_CHANGE=yes
MODULE_COUNT=8
CANONICAL_KEY_COUNT=8
DISPLAY_ORDER_COUNT=8
CATEGORY_COUNT=8
CANONICAL_DOMAIN_COUNT=8
LEGACY_DOMAIN_COUNT=1
```
