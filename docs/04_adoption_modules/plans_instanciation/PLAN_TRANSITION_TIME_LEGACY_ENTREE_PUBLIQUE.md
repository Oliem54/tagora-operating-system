# Plan de transition — entrée publique legacy TAGORA Time

## Objectif

Préparer, **documentairement seulement**, la transition de l'ancien site / ancienne démo actuellement portés par TAGORA Time vers les surfaces canoniques.

## Statut

```text
PLAN_TYPE=DOCUMENTARY_ONLY
EXECUTION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
REDIRECT_AUTHORIZED=NO
HOSTING_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
TIME_WRITE_AUTHORIZED=NO
WEBSITE_WRITE_AUTHORIZED=NO
NEXUS_WRITE_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION
SOURCE_DECISION=DEC-019
SOURCE_ADR=ADR-0007
SOURCE_VALIDATION=VALD-098
```

Date : **2026-08-16**  
Décideur : **Martin ST-Gelais — Direction**

Ce plan **ne relance pas** l'audit Time, **n'ouvre pas** Time, et **ne mélange pas** Track A / Phase 4D Lot 2.

Preuve d'inventaire déjà enregistrée : [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md) (VALD-095, HEAD Time `68561a3`).  
Préparation Track B : [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md).

---

## PHASE A — Inventaire READ-ONLY

Identifier ce qui est actuellement servi par TAGORA Time. Classification d'observation (audit 2026-08-13), **sans nouvelle ouverture Time**.

| Catégorie | Surfaces observées dans Time |
|---|---|
| Contenu public / marketing | `/`, `/logiciel`, `/etiquettes`, `/contact`, MarketingShell, header/footer/nav marketing, Hero/CTA/sections commerciales, SEO public global |
| Démo / présentation | pages marketing racine et `/logiciel` |
| Page racine | `/` marketing |
| Login | `/login`, `/connexion`, `/employe/login`, `/direction/login` ; reset password / MFA / sessions / cookies Auth / AuthGate |
| Routes direction | portails direction / admin / horodateur (applicatifs) |
| Routes application | portails employé ; APIs métier / DB / permissions ; `/demande-compte` `/action/*` `/suivi/*` ; `/ameliorations` + nav applicative authentifiée |
| Légal mélangé | `/mentions-legales`, `/confidentialite` |
| Contact général | `contact@tagora.ca` observé dans Time |

```text
INVENTORY_SOURCE=VALD-095_READ_ONLY_AUDIT
NEW_TIME_OPENING=NO
```

---

## PHASE B — Mapping

Classifier chaque surface. Mapping **documentaire** à partir de l'audit et de DEC-019. Pas d'exécution.

| Surface observée | Mapping |
|---|---|
| `/` marketing | `MOVE_TO_WEBSITE` |
| `/logiciel` | `MOVE_TO_WEBSITE` |
| `/etiquettes` | `MOVE_TO_WEBSITE` |
| `/contact` | `MOVE_TO_WEBSITE` |
| MarketingShell / header / footer / nav marketing | `MOVE_TO_WEBSITE` |
| Hero / CTA / sections commerciales / contenu global | `MOVE_TO_WEBSITE` |
| SEO public TAGORA global | `MOVE_TO_WEBSITE` |
| Pages commerciales FR/EN `/fr|en/{modules,time,mail,stock,pulse}` | `MOVE_TO_WEBSITE` (création Website ; absentes de Time comme routes canoniques) |
| `/mentions-legales` général | `MOVE_TO_WEBSITE` |
| `/mentions-legales` spécifique Time | `KEEP_IN_TIME` |
| Politique publique générale | `MOVE_TO_WEBSITE` |
| `/confidentialite` traitements Time | `KEEP_IN_TIME` |
| `contact@tagora.ca` contact général | `MOVE_TO_WEBSITE` |
| `/login` `/connexion` `/employe/login` `/direction/login` applicatifs Time | `KEEP_IN_TIME` |
| Auth / MFA / sessions / cookies / AuthGate Time | `KEEP_IN_TIME` |
| Portails employé / direction / admin / horodateur | `KEEP_IN_TIME` |
| APIs métier / DB / permissions Time | `KEEP_IN_TIME` |
| `/demande-compte` `/action/*` `/suivi/*` | `KEEP_IN_TIME` |
| `/ameliorations` + nav applicative authentifiée | `KEEP_IN_TIME` |
| `AuthenticatedImprovementsFab` sur pages marketing | `DEPRECATE` (sonde session Time interdite sur Website) |
| CTA « Se connecter » / « Mon espace TAGORA » | `MOVE_TO_NEXUS` (cible `app.tagora.ca` ; Website pointe, Nexus porte le portail) |
| Comportement final `https://time.tagora.ca/` | `REDIRECT_LATER` |
| `navigation.nexus` définie non rendue (Time) | `REDIRECT_LATER` (Nexus / Time, pas Website Auth) |

```text
REBUILD_NOT_COPY=YES
CODE_COPY_FROM_TIME=NO_BY_DEFAULT
```

---

## PHASE C — Website readiness

Website doit être prêt **avant** retrait du contenu public Time.

Prérequis documentaires (non exécutés ici) :

- `tagora.ca` reconnu comme entrée publique officielle ;
- pages commerciales FR/EN planifiées ;
- CTA connexion vers `app.tagora.ca` lorsque pertinent ;
- CTA produits vers sous-domaines SaaS lorsque pertinent ;
- aucune application métier hébergée dans Website.

Gate futur : `TOS-WEBSITE-PUBLIC-REBUILD-GO` (Track B) — **non autorisé** ici.

---

## PHASE D — Nexus readiness

Nexus doit être prêt comme portail client central **avant** toute bascule d'entrée authentifiée, si une telle bascule est nécessaire.

Prérequis documentaires (non exécutés ici) :

- `app.tagora.ca` reconnu ;
- rôle portail client analysé ;
- navigation vers modules / tenant context / abonnements analysés ;
- applications autonomes préservées ;
- `/login` évalué localement sans changer le contrat de domaines.

Nexus peut reporter des bloqueurs. Nexus **ne change pas** le contrat.

---

## PHASE E — Redirect plan (préparé seulement)

Aucune redirection n'est appliquée.

Cibles canoniques prévues, **sans exécution** :

| Ancienne URL (observée / legacy) | Nouvelle URL canonique prévue | Statut |
|---|---|---|
| Contenu marketing Time `/`, `/logiciel`, `/etiquettes`, `/contact` | `https://tagora.ca` et pages commerciales FR/EN | `REDIRECT_LATER` |
| Racine `https://time.tagora.ca/` (si encore marketing) | À confirmer sous gate redirect : application Time, pas site public | `REDIRECT_LATER` |
| CTA « Mon espace TAGORA » | `https://app.tagora.ca` | `REDIRECT_LATER` |
| Login applicatif Time | `https://time.tagora.ca/login` (route standard `/login`) | `KEEP_IN_TIME` — pas de redirect hors Time |

```text
REDIRECT_AUTHORIZED=NO
```

---

## PHASE F — DNS / hosting

Human Gate Martin **séparé** obligatoire.

Aucun DNS, mapping Vercel/Railway, changement d'hébergement ou Production dans ce plan.

---

## Interdictions

- Ne pas mélanger avec Phase 4D Lot 2.
- Ne pas ouvrir Time, Website, Nexus, Mail, Stock, Pulse.
- Ne pas supprimer, rediriger, déplacer ou déployer.
- Ne pas copier le code Time vers Website par défaut (`REBUILD_NOT_COPY`).

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md)
- [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md)
