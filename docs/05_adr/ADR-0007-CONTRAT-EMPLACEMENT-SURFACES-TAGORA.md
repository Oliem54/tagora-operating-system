# ADR-0007 — Contrat d'emplacement des surfaces TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-098**  
Décision : **DEC-019**

Cette ADR fige le contrat d'emplacement des surfaces TAGORA.

Elle **n'autorise aucun** DNS, redirect, hébergement, déploiement, SSO, migration de contenu, ni modification d'un autre repository.

Elle **ne remplace pas** ADR-0004. Elle le complète par les rôles de surface, les pages commerciales Website, et la clôture du rôle d'entrée publique de Time.

---

## Contexte

ADR-0004 / DEC-015 ont fixé les domaines canoniques (`tagora.ca`, `app.tagora.ca`, sous-domaines SaaS, `/login`).

DEC-016 / VALD-095 ont préparé Track B : le site public appartient à Website ; Time conserve l'application ; le comportement root `time.tagora.ca/` restait `A_CONFIRMER` ; aucun cleanup Time n'était autorisé.

L'entrée publique marketing est encore **observée** dans TAGORA Time (audit READ-ONLY `68561a3`). Les agents produits ne doivent plus rediscuter l'emplacement cible.

Martin fixe officiellement : Website = discover/explain/sell ; Nexus = portail client authentifié ; chaque SaaS = application autonome sur son sous-domaine ; Time n'est plus l'entrée publique centrale.

---

## Décision

```text
DOMAIN_CONTRACT_STATUS=OFFICIAL
DOMAIN_CONTRACT_DECISION_OWNER=MARTIN
WEBSITE_ENTRY=https://tagora.ca
NEXUS_POSITION=https://app.tagora.ca
TIME_POSITION=https://time.tagora.ca
MAIL_POSITION=https://mail.tagora.ca
STOCK_POSITION=https://stock.tagora.ca
PULSE_POSITION=https://pulse.tagora.ca
FUTURE_ADMIN_POSITION=https://admin.tagora.ca
STANDARD_LOGIN_ROUTE=/login
LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION
PHASE4D_LOT2_UNCHANGED=YES
```

### Rôles

- `tagora.ca` — TAGORA Website : entrée publique centrale, marketing, présentation, acquisition, vente, pages commerciales.
- `app.tagora.ca` — TAGORA Nexus : portail client authentifié central. Peut à terme fournir portail, accès modules, navigation inter-produits, org/tenant, abonnements, liens vers les SaaS. **Pas** de fusion obligatoire des applications.
- `time.tagora.ca` — application SaaS TAGORA Time uniquement.
- `mail.tagora.ca` / `stock.tagora.ca` / `pulse.tagora.ca` — SaaS autonomes.
- `admin.tagora.ca` — administration future, non activée.

### Pages commerciales Website

FR : `/fr/modules`, `/fr/time`, `/fr/mail`, `/fr/stock`, `/fr/pulse`.  
EN : `/en/modules`, `/en/time`, `/en/mail`, `/en/stock`, `/en/pulse`.

### Time

TAGORA Time ne doit plus être considéré comme l'entrée publique centrale TAGORA. L'ancien site / démo porté par Time : `TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION`. Rien n'est supprimé, redirigé, déplacé ou déployé ici.

### Autonomie

Chaque SaaS reste déployable et exploitable de manière autonome.

```text
NEXUS_CAN_CHANGE_DOMAIN_CONTRACT=NO
NEXUS_MAY_REPORT_BLOCKERS=YES
NEXUS_MAY_PROPOSE_IMPLEMENTATION_PLAN=YES
```

---

## Options considérées

1. **Laisser Time comme entrée publique de fait** jusqu'à un rebuild Website — contredit la convention déjà préparée (DEC-016) et maintient une identité publique ambiguë.
2. **Fusionner les applications dans Nexus** — contredit l'autonomie SaaS et ADR-0003.
3. **Figer le contrat de surfaces dans TOS, sans DNS ni implémentation** — retenu.

---

## Conséquences

### Positives

- Une source unique d'emplacement pour tous les agents.
- Time n'est plus l'entrée publique centrale, au niveau du rôle.
- Website / Nexus / SaaS ont des responsabilités distinctes.
- Track B et ADR-0004 restent traçables.

### Négatives / contraintes

- Le contenu public est encore servi par Time jusqu'à une transition ultérieure.
- Redirect, DNS et migration de contenu restent des Human Gates séparés.
- Nexus doit analyser l'impact sans pouvoir changer le contrat.

### Boundary

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
REDIRECT_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Modules impactés

- TOS (documentation seulement)
- TAGORA Website
- TAGORA Nexus
- TAGORA Time
- TAGORA Mail IA
- TAGORA Stock Premium
- TAGORA Pulse AI

Impact inter-projets : **oui**. Écriture hors TOS : **non**. Phase 4D Lot 2 : **inchangée**.

---

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md](../10_knowledge/VALIDATION_VALD_098_CONTRAT_EMPLACEMENT_SURFACES.md)
- [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../04_adoption_modules/plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md)
- [ADR-0004](ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [ADR-0003](ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
- [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../04_adoption_modules/plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-098 | Contrat d'emplacement des surfaces TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
