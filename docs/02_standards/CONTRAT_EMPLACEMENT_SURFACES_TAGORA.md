# Contrat d'emplacement des surfaces TAGORA

## Objectif

Figer le **contrat d'emplacement** des surfaces TAGORA : qui porte l'entrée publique, le portail client authentifié, et chaque application SaaS autonome.

## Portée

Écosystème TAGORA. Décision **normative**. Les agents produits ne rediscutent pas ce contrat. Ils peuvent signaler des bloqueurs et proposer un plan d'implémentation.

Emplacement TOS : `docs/02_standards/` (le préfixe `docs/03_` est déjà occupé par `03_gouvernance/` ; aucun dossier `03_architecture/` n'est créé).

---

## Statut

```text
DOMAIN_CONTRACT_STATUS=OFFICIAL
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
HOSTING_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
REDIRECT_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
CROSS_PROJECT_IMPACT=YES
RULE_CHANGE=YES
TOS_SCOPE_ONLY=YES
```

Décision Martin : **DEC-019**  
ADR : **ADR-0007**  
Validation : **VALD-098**  
Date : **2026-08-16**  
Décideur : **Martin ST-Gelais — Direction**

Cette décision **complète** ADR-0004 / DEC-015 (domaines canoniques) et **clôt le rôle** d'entrée publique de Time ouvert par DEC-016 / VALD-095. Elle ne les supprime pas. Elle n'autorise aucun DNS, redirect, hébergement ou déploiement.

---

## Principe architectural

```text
WEBSITE = DISCOVER / EXPLAIN / SELL
NEXUS   = AUTHENTICATED CUSTOMER PORTAL
TIME    = TIME APPLICATION
MAIL    = MAIL AI APPLICATION
STOCK   = STOCK PREMIUM APPLICATION
PULSE   = PULSE AI APPLICATION
ADMIN   = FUTURE CENTRAL ADMINISTRATION
```

Chaque application SaaS reste déployable et exploitable de manière autonome. Nexus est un portail central, **pas** un remplacement technique obligatoire des applications. Aucune fusion d'applications dans Nexus.

---

## Convention officielle des surfaces

| Surface | Domaine | Rôle |
|---|---|---|
| **TAGORA Website** | `tagora.ca` | Entrée publique centrale : marketing, présentation, acquisition, vente, pages commerciales |
| **TAGORA Nexus** | `app.tagora.ca` | Portail client authentifié central |
| **TAGORA Time** | `time.tagora.ca` | Application SaaS TAGORA Time uniquement |
| **TAGORA Mail IA** | `mail.tagora.ca` | Application SaaS autonome TAGORA Mail IA |
| **TAGORA Stock Premium** | `stock.tagora.ca` | Application SaaS autonome TAGORA Stock Premium |
| **TAGORA Pulse AI** | `pulse.tagora.ca` | Application SaaS autonome TAGORA Pulse AI |
| **Administration future** | `admin.tagora.ca` | Administration TAGORA future — réservée, non activée |

```text
WEBSITE_ENTRY=https://tagora.ca
NEXUS_POSITION=https://app.tagora.ca
TIME_POSITION=https://time.tagora.ca
MAIL_POSITION=https://mail.tagora.ca
STOCK_POSITION=https://stock.tagora.ca
PULSE_POSITION=https://pulse.tagora.ca
FUTURE_ADMIN_POSITION=https://admin.tagora.ca
STANDARD_LOGIN_ROUTE=/login
```

Route standard de connexion, lorsque pertinente : **`/login`**.

---

## Frontières de responsabilité

| Surface | Porte | Ne porte pas |
|---|---|---|
| **Website** | Découvrir, expliquer, vendre ; pages commerciales FR/EN ; CTA vers Nexus et sous-domaines SaaS | Application métier des modules ; Auth/DB/API des SaaS |
| **Nexus** | Portail client authentifié ; navigation inter-produits ; contexte org/tenant ; accès abonnements ; liens vers les SaaS | Fusion des applications ; remplacement obligatoire des SaaS |
| **Time** | Application Time (punch, horodateur, portails applicatifs, Auth Time) | Site public central TAGORA ; marketing/vente globaux |
| **Mail IA** | Application Mail IA | Pages commerciales centrales ; portail client global |
| **Stock Premium** | Application Stock Premium | Pages commerciales centrales ; portail client global |
| **Pulse AI** | Application Pulse AI | Pages commerciales centrales ; portail client global |
| **Admin** | Réservé futur | Toute activation par cette décision |

---

## Pages commerciales Website

TAGORA Website porte les pages commerciales publiques suivantes.

FR :

- `https://tagora.ca/fr/modules`
- `https://tagora.ca/fr/time`
- `https://tagora.ca/fr/mail`
- `https://tagora.ca/fr/stock`
- `https://tagora.ca/fr/pulse`

EN :

- `https://tagora.ca/en/modules`
- `https://tagora.ca/en/time`
- `https://tagora.ca/en/mail`
- `https://tagora.ca/en/stock`
- `https://tagora.ca/en/pulse`

Le Website explique, présente et vend les produits. Les sous-domaines applicatifs hébergent les SaaS autonomes.

CTA connexion : **« Se connecter »** → `https://app.tagora.ca/login` ; **« Mon espace TAGORA »** → `https://app.tagora.ca` (DEC-020 / ADR-0008).  
Découvrir un module : page commerciale Website. Le lancement authentifié d'un SaaS est orchestré par Nexus.

---

## Position TAGORA Time

```text
TIME_POSITION=time.tagora.ca = application SaaS TAGORA Time
LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION
PHASE4D_LOT2_UNCHANGED=YES
```

TAGORA Time **ne doit plus** être considéré comme l'entrée publique centrale TAGORA.

Le site public, les pages marketing centrales et les pages commerciales générales appartiennent à TAGORA Website.

Aucune suppression, redirection, déplacement ou déploiement n'est autorisé par cette décision. La transition de l'ancien site / ancienne démo porté par Time est documentée séparément et s'exécute uniquement sous Human Gate Martin distinct.

---

## Position TAGORA Nexus

`app.tagora.ca` = TAGORA Nexus.

Nexus peut à terme fournir : portail client ; accès aux modules ; navigation inter-produits ; organisation / tenant context ; accès aux abonnements ; liens vers Time, Mail IA, Stock Premium, Pulse AI.

Nexus **ne fusionne pas** les applications. Les SaaS restent autonomes sur leurs sous-domaines.

```text
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES
```

---

## Règles de transition

1. Inventaire READ-ONLY d'abord (Time).
2. Mapping : `KEEP_IN_TIME` / `MOVE_TO_WEBSITE` / `MOVE_TO_NEXUS` / `DEPRECATE` / `REDIRECT_LATER`.
3. Website prêt avant retrait du contenu public Time.
4. Nexus prêt comme portail client avant toute bascule d'entrée authentifiée, si une telle bascule est nécessaire.
5. Plan de redirect préparé seulement — non appliqué ici.
6. DNS / hosting : Human Gate Martin séparé.

Voir [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../04_adoption_modules/plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md).

---

## Interdictions

- DNS, sous-domaine, mapping Vercel/Railway.
- Redirect réel, changement d'URL publique, modification de route racine.
- Hébergement, Production, déploiement.
- SSO réel, fédération de login.
- Migration réelle de contenu.
- Fusion de repositories ou d'applications.
- Écriture hors TOS.
- Mélange avec Phase 4D Lot 2 Time.

---

## Human Gates futurs

Un nouveau GO Martin séparé est obligatoire avant :

- DNS ; domaine ; sous-domaine ;
- redirect réel ;
- Vercel domain mapping ; Railway domain mapping ;
- hosting change ; Production ;
- changement d'URL publique ; modification de route racine ;
- implémentation cross-project ;
- SSO réel ; login federation ;
- migration de contenu réelle.

---

## Décisions liées (non supprimées)

| ID | Relation |
|---|---|
| ADR-0003 / DEC-014 | Positionnement Nexus / Cloud / TCP — inchangé |
| ADR-0004 / DEC-015 / VALD-093 | Domaines canoniques — **complétés**, non remplacés |
| DEC-016 / VALD-095 | Track B entrée publique Time → Website — rôle Time public **clos** ici ; exécution / redirect **non autorisés** |
| VALD-094 | Phase 4D Lot 2 — **inchangée** |

---

## Références

- [ADR-0007](../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md](../10_knowledge/VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md)
- Complément mapping : [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../04_adoption_modules/plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md)
- [ADR-0004](../05_adr/ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../04_adoption_modules/plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md)
