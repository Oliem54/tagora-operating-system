# Track B — Entrée publique Time vers TAGORA Website

**Date :** 2026-08-13
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-095
**Décision liée :** DEC-016

> **Note 2026-08-16 (DEC-019 / ADR-0007 / VALD-098) :** le **rôle** d'entrée publique centrale n'appartient plus à Time. `LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION`. Ce document Track B reste la préparation historique du 13 août. Exécution, cleanup, DNS et redirect restent **non autorisés**. Voir [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md) et [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md).
> `PHASE4D_LOT2_UNCHANGED=YES`
**Preuve :** [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md)

```text
TRACK=TRACK_B_TIME_PUBLIC_ENTRY_TO_WEBSITE
STATUS=PREPARATION_COMPLETE_EXECUTION_NOT_AUTHORIZED
PUBLIC_SITE_OWNER=TAGORA_WEBSITE
TIME_APPLICATION_OWNER=TAGORA_TIME
NEXUS_PORTAL_OWNER=TAGORA_NEXUS
REBUILD_NOT_COPY=YES
CODE_COPY_FROM_TIME=NO_BY_DEFAULT
WEBSITE_WRITE_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
TIME_PUBLIC_CLEANUP_AUTHORIZED=NO
DNS_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

Piste **distincte** de Phase 4D QA (Track A / VALD-094). Ne pas fusionner les états.

## 1. Séparation des pistes

| Piste | Objet | État |
|---|---|---|
| **Track A** | Phase 4D QA Lot 2 Time | VALD-094 COMPLETE ; exécution NOT_STARTED |
| **Track B** | Entrée publique Time → Website | VALD-095 préparation COMPLETE ; exécution NOT_AUTHORIZED |

```text
TRACK_A_NEXT_GATE=TOS-PHASE-4D-LOT2-QA-EXECUTION-GO
TRACK_A_HUMAN_GATE=YES
TRACK_B_NEXT_GATE=TOS-WEBSITE-PUBLIC-REBUILD-GO
TRACK_B_HUMAN_GATE=YES
DO_NOT_MERGE_GATES=YES
```

SHA Time **non interchangeables** :

- Track A last-known docs : `docs/tos-phase-4d-time` @ `754baaf23f27a3629eb1e1f36567fd3b032cd6cd`
- Track B audit `main` : `68561a3a0d36e45ad4b6cb24fe92b841423ed522`

## 2. Matrice de responsabilité

Légende : `REBUILD` = reconstruire dans le propriétaire cible, sans copier le code Time. `REMAIN` = rester dans Time. `A_CONFIRMER` = pas de décision finale ici.

| Élément | Actuellement observé dans Time | Cible | Action |
|---|---|---|---|
| `/` marketing | Time | TAGORA Website | REBUILD |
| `/logiciel` | Time | TAGORA Website | REBUILD |
| `/etiquettes` | Time | TAGORA Website | REBUILD |
| `/contact` | Time | TAGORA Website | REBUILD |
| MarketingShell / header / footer / nav marketing | Time | TAGORA Website | REBUILD |
| Hero / CTA / sections commerciales / contenu global | Time | TAGORA Website | REBUILD |
| SEO public TAGORA global | Time | TAGORA Website | REBUILD |
| `/login` `/connexion` `/employe/login` `/direction/login` | Time | TAGORA Time | REMAIN |
| Reset password / MFA / sessions / cookies Auth / AuthGate | Time | TAGORA Time | REMAIN |
| Portails employé / direction / admin / horodateur | Time | TAGORA Time | REMAIN |
| APIs métier / DB / permissions | Time | TAGORA Time | REMAIN |
| `/demande-compte` `/action/*` `/suivi/*` | Time | TAGORA Time | REMAIN |
| `/ameliorations` + nav applicative authentifiée | Time | TAGORA Time | REMAIN |
| `/mentions-legales` (général) | Time (mélangé) | TAGORA Website | REBUILD (page générale distincte) |
| `/mentions-legales` (spécifique Time) | Time | TAGORA Time | REMAIN si contenu applicatif Time |
| `/confidentialite` traitements Time (horaires, GPS, SMS, métier) | Time | TAGORA Time | REMAIN |
| Politique publique générale | Time (mélangé) | TAGORA Website | REBUILD distincte |
| `contact@tagora.ca` contact général | Time | TAGORA Website | REBUILD (ne pas modifier Time maintenant) |
| `AuthenticatedImprovementsFab` | Time (pages marketing) | — | WEBSITE_REBUILD=NO ; sonde session Time INTERDITE sur Website |
| `https://time.tagora.ca/` comportement final | Time | A_CONFIRMER | après alignement Nexus |
| « Se connecter » / « Mon espace TAGORA » / `app.tagora.ca` | — | TAGORA Nexus | A_CONFIRMER (Phase W3) |
| `navigation.nexus` définie non rendue | Time | A_CONFIRMER | Nexus / Time, pas Website Auth |

> **Note 2026-08-16 (DEC-020) :** le **rôle** CTA « Se connecter » / « Mon espace TAGORA » / `app.tagora.ca` est figé — Nexus. **Cibles :** Se connecter → `https://app.tagora.ca/login` ; Mon espace → `https://app.tagora.ca`. Le comportement final de `https://time.tagora.ca/` est `REDIRECT_LATER` (non appliqué). Les lignes `A_CONFIRMER` ci-dessus restent l'état Track B du 13 août.

```text
LEGAL_SPLIT_REQUIRED=YES
NO_AUTOMATIC_TEXT_COPY=YES
TIME_SPECIFIC_PRIVACY_MUST_REMAIN=YES
WEBSITE_GENERAL_PRIVACY_SEPARATE=YES
GENERAL_PUBLIC_CONTACT_OWNER=TAGORA_WEBSITE
GLOBAL_TAGORA_SEO_OWNER=TAGORA_WEBSITE
TIME_PRODUCT_SEO_OWNER=TAGORA_TIME
WEBSITE_AUTH_SESSION_PROBE=PROHIBITED
TIME_ROOT_FINAL_BEHAVIOR=A_CONFIRMER_AFTER_NEXUS_ALIGNMENT
```

## 3. Plan de migration documentaire (non exécuté)

### Phase W1 — Website rebuild

TAGORA Website reconstruit : home, logiciel, étiquettes, contact, header/footer, navigation, SEO public, legal Website, privacy Website générale.

Sans copier : Auth Time, DB, API, session, cookies, business logic, secrets.

```text
PHASE_W1_AUTHORIZED=NO
```

### Phase W2 — Website local QA

Valider : navigation, responsive, SEO, links, no Time Auth/cookie/API/DB, no secret, no cross-repo dependency.

```text
PHASE_W2_AUTHORIZED=NO
```

### Phase W3 — Nexus alignment

Attendre le travail Nexus avant de finaliser : « Se connecter », « Mon espace TAGORA », `app.tagora.ca`, handoff utilisateur, entrée module.

```text
PHASE_W3_AUTHORIZED=NO
```

### Phase W4 — Cross-project staging

HUMAN GATE obligatoire. Aucun staging dans ce bloc.

```text
PHASE_W4_AUTHORIZED=NO
PHASE_W4_HUMAN_GATE=YES
```

### Phase W5 — Time cleanup

Seulement quand Website est prêt. Actions **potentielles** listées en §5. Toutes **NON AUTORISÉES** maintenant.

```text
PHASE_W5_AUTHORIZED=NO
```

### Phase W6 — DNS / production

HUMAN GATE final séparé. ADR-0004 / VALD-093 n'autorisent ni DNS ni déploiement.

```text
PHASE_W6_AUTHORIZED=NO
PHASE_W6_HUMAN_GATE=YES
```

## 4. Futur gate Website (préparé, non exécuté)

```text
GATE_ID=TOS-WEBSITE-PUBLIC-REBUILD-GO
GATE_AUTHORIZED=NO
PROJECT_TARGET=TAGORA_WEBSITE
```

Paquet transférable :

```text
PROJECT_TARGET:
TAGORA Website

DECISION_TOS:
VALD-095 / DEC-016 — l'entrée publique marketing actuellement observée dans Time
doit être reconstruite dans TAGORA Website (REBUILD, pas copie).
Time reste propriétaire de l'application, Auth, DB, APIs et portails.
Nexus reste propriétaire de app.tagora.ca.
Phase 4D QA (VALD-094) n'est pas ce gate.

CURRENT_STATE:
Audit READ-ONLY Time enregistré dans TOS.
Time main last-known audit SHA = 68561a3a0d36e45ad4b6cb24fe92b841423ed522
Aucune écriture Website/Time/Nexus dans VALD-095.
Website rebuild NOT_STARTED.

REQUIRED_CHANGE:
Reconstruire dans TAGORA Website uniquement le périmètre REBUILD ci-dessous.
Aucune copie de code Time par défaut.
Aucun Auth/session/cookie/API/DB Time.

SOURCE_EVIDENCE:
TAGORA Time readonly public-entry audit
TOS: docs/04_adoption_modules/audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md

REBUILD_SCOPE:
- home /
- /logiciel
- /etiquettes
- /contact
- header/footer/navigation marketing
- SEO public global (titles, descriptions, canonical, OG, robots, sitemap, favicon/manifest si approprié)
- page légale publique générale Website
- politique publique générale Website (distincte de Time)

DO_NOT_COPY:
- code Time
- Auth Time / MFA / sessions / cookies
- AuthGate
- DB Time / APIs métier / permissions
- AuthenticatedImprovementsFab / sonde de session
- secrets / .env
- /login /connexion /employe/login /direction/login
- /demande-compte /action/* /suivi/*
- horodateur / portails / admin

AUTH_BOUNDARY:
WEBSITE_AUTH_SESSION_PROBE=PROHIBITED
TIME reste seule autorité Auth Time.
Liens « Se connecter » / « Mon espace TAGORA » = placeholders jusqu'à Phase W3 Nexus.

SEO_REQUIREMENTS:
GLOBAL_TAGORA_SEO_OWNER=TAGORA_WEBSITE
Prévoir titles, descriptions, canonical, Open Graph, robots, sitemap.
TIME_PRODUCT_SEO_OWNER reste TAGORA Time (fiche produit applicative, pas le site public global).

LEGAL_PRIVACY_REQUIREMENTS:
LEGAL_SPLIT_REQUIRED=YES
NO_AUTOMATIC_TEXT_COPY=YES
Website = mentions générales + privacy générale.
Time = mentions/privacy spécifiques application (horaires, GPS, SMS, métier).

NEXUS_LINK_PLACEHOLDERS:
Ne pas figer app.tagora.ca comme handoff utilisateur tant que W3 n'est pas décidé.
Pas de redirection time.tagora.ca/ dans ce gate.

ACCEPTANCE_CRITERIA:
- pages rebuild présentes dans Website seulement
- aucun cookie/session/API/DB Time
- aucun secret
- aucun merge de repositories
- QA locale W2 documentée avant tout staging
- Track A Phase 4D inchangée

STOP_CONDITIONS:
- tentation de copier du code Time
- ouverture/écriture Time ou Nexus dans ce gate
- DNS / production
- décision TIME_ROOT sans alignement Nexus
- mélange avec TOS-PHASE-4D-LOT2-QA-EXECUTION-GO

RISKS:
Contenu légal/privacy mélangé ; SEO Time actuel trop global ; root Time non décidé ;
Nexus handoff encore A_CONFIRMER ; audit SHA Time peut diverger avant exécution.

MARTIN_TRANSFER_REQUIRED=yes
```

## 5. Futures actions Time — NON AUTORISÉES

Liste documentaire seulement. Aucune n'est un GO.

| Action future potentielle | Statut |
|---|---|
| Retrait de l'ancien marketing Time (`/`, `/logiciel`, `/etiquettes`, `/contact` marketing) | NOT_AUTHORIZED |
| Changement du comportement root `https://time.tagora.ca/` | NOT_AUTHORIZED |
| Redirections Time → Website | NOT_AUTHORIZED |
| Retrait du FAB des pages publiques Time | NOT_AUTHORIZED |
| Nettoyage doublon de route `/` | NOT_AUTHORIZED |
| Cleanup `navigation.nexus` non rendue | NOT_AUTHORIZED |
| Split pages légales / privacy Time | NOT_AUTHORIZED jusqu'à GO Time distinct |

```text
TIME_PUBLIC_CLEANUP_AUTHORIZED=NO
TIME_ROOT_REDIRECT_AUTHORIZED=NO
TIME_MARKETING_REMOVAL_AUTHORIZED=NO
TIME_FAB_REMOVAL_AUTHORIZED=NO
TIME_ROUTE_REMOVAL_AUTHORIZED=NO
TIME_WRITE=NO
```

Ces actions attendent Website prêt + Nexus aligné + validation Martin distincte (Phase W5).

## 6. Interdictions de ce document

```text
NO_TIME_OPEN
NO_WEBSITE_OPEN
NO_NEXUS_OPEN
NO_CODE_COPY
NO_DB
NO_SECRET
NO_DNS
NO_STAGING
NO_PRODUCTION
NO_LOT_3
NO_QA_TIME_EXECUTION
```

## 7. Statut

```text
STATUS=PREPARATION_COMPLETE_EXECUTION_NOT_AUTHORIZED
TRACK_A_PHASE_4D=IN_PROGRESS
TRACK_A_QA_EXECUTION=NOT_STARTED
TRACK_B_PREPARATION=COMPLETE
TRACK_B_EXECUTION=NOT_AUTHORIZED
NEXT_GATE=TOS-WEBSITE-PUBLIC-REBUILD-GO
NEXT_GATE_AUTHORIZED=NO
TIME_ROOT_FINAL_BEHAVIOR=A_CONFIRMER_AFTER_NEXUS_ALIGNMENT
```

## Références

- [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md)
- [ADR-0004](../../05_adr/ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
- [PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md](PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md) — Track A, inchangée
