# Audit READ-ONLY — Entrée publique actuellement hébergée dans TAGORA Time

**Date d'enregistrement TOS :** 2026-08-13
**Décideur :** Martin ST-Gelais — Direction
**Validation :** VALD-095
**Source :** AGENT TAGORA TIME — CURSOR (audit READ-ONLY)
**Verdict source :** `PASS_TAGORA_TIME_CURRENT_PUBLIC_ENTRY_READONLY_AUDIT_COMPLETE`

```text
TRACK=TRACK_B_TIME_PUBLIC_ENTRY_TO_WEBSITE
AUDIT_TYPE=READ_ONLY
TIME_WRITE_PERFORMED=NO
TOS_DID_NOT_OPEN_TIME=YES
PHASE_4D_QA_TRACK_UNCHANGED=YES
```

Cet enregistrement **ne relance pas** l'audit, **n'ouvre pas** Time, et **ne modifie pas** VALD-094 / Phase 4D QA.

## 1. Preuve Git rapportée (Time — non rejouée ici)

| Champ | Valeur rapportée |
|---|---|
| Dépôt | `C:\Dev\TAGORA\tagora-time` |
| Branche | `main` |
| HEAD | `68561a3a0d36e45ad4b6cb24fe92b841423ed522` |
| `origin/main` | `68561a3a0d36e45ad4b6cb24fe92b841423ed522` |
| Divergence | `0 0` |
| Working tree | CLEAN |
| Écriture Time | Aucune |

```text
TRACK_A_DOCS_BRANCH_LAST_KNOWN=docs/tos-phase-4d-time @ 754baaf23f27a3629eb1e1f36567fd3b032cd6cd
TRACK_B_AUDIT_HEAD=main @ 68561a3a0d36e45ad4b6cb24fe92b841423ed522
DO_NOT_CONFLATE_TRACK_A_AND_TRACK_B_SHA=YES
```

Le SHA Track B (`main`) n'est **pas** le tip documentaire Lot 2 Track A. Les deux pistes restent distinctes.

## 2. Frontières déjà approuvées (inchangées)

| Domaine | Propriétaire canonique | Source |
|---|---|---|
| `tagora.ca` | TAGORA Website | VALD-093 / ADR-0004 / DEC-015 |
| `app.tagora.ca` | TAGORA Nexus | VALD-093 / ADR-0004 / DEC-015 |
| `time.tagora.ca` | TAGORA Time | VALD-093 / ADR-0004 / DEC-015 |

```text
REPOSITORY_MERGE=PROHIBITED
```

Website ne doit recevoir : DB Time, secret Time, session Time, cookie Auth Time, permission Time, logique métier Time, API métier Time, autorité Auth Time.

## 3. Entrée publique actuellement observée dans Time

Routes rapportées :

- `/`
- `/logiciel`
- `/etiquettes`
- `/contact`
- `/mentions-legales`
- `/confidentialite`
- `/connexion`
- `/login`

## 4. Classification source — reconstructible dans Website

`PUBLIC_PRESENTATION_REBUILDABLE_IN_WEBSITE` (preuve d'audit, **pas** une autorisation de copie) :

- home marketing `/`
- `/logiciel`
- `/etiquettes`
- `/contact`
- MarketingShell
- header / footer marketing
- navigation marketing
- Hero, CTA, cartes / sections commerciales
- contenu TAGORA global
- metadata SEO TAGORA globales

```text
REBUILD_NOT_COPY=YES
CODE_COPY_FROM_TIME=NO_BY_DEFAULT
```

## 5. Classification source — doit rester dans Time

`MUST_REMAIN_IN_TIME` :

- `/login`, `/connexion`, `/employe/login`, `/direction/login`
- récupération de mot de passe, MFA
- sessions, cookies Auth, AuthGate
- portails employé / direction, admin, horodateur
- APIs métier
- `/demande-compte`, `/action/[token]`, `/suivi/[token]`
- `/ameliorations`
- navigation applicative authentifiée
- logique métier Time, DB Time, permissions Time

Les jetons d'URL ci-dessus sont des **motifs de route**, pas des secrets.

## 6. Autres constats rapportés

- `/etiquettes` n'est pas du métier Time.
- SEO actuel décrit TAGORA globalement.
- Aucun canonical complet.
- Pas de robots / sitemap / OG complet.
- `AuthenticatedImprovementsFab` sonde la session sur les pages marketing.
- Doublon potentiel de route `/`.
- `navigation.nexus` est définie dans Time mais non rendue.
- `contact@tagora.ca` est utilisé comme contact général.
- Pages légales mélangent contenu général et contenu spécifique Time.

Aucun de ces constats n'est transformé ici en vérité produit au-delà du rapport d'audit.

## 7. Hors portée de cet enregistrement

- Ouverture Time / Website / Nexus
- Copie de code
- Redirection, DNS, staging, production
- Cleanup Time
- Exécution QA Phase 4D
- Lot 3

## 8. Suite documentaire

Plan Track B : [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md)

Track A (inchangée) : [PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md](../plans_instanciation/PREPARATION_PHASE_4D_LOT2_QA_EXECUTION_GATE_TIME.md)
