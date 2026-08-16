# ADR-0008 — Contrat de mapping et d'intégration des modules TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-099**  
Décision : **DEC-020**

Cette ADR fige le mappage des adresses, le parcours d'accès et les cibles d'identité TAGORA.

Elle **complète** ADR-0007 / DEC-019. Elle **ne les remplace pas**.

Elle **n'autorise aucun** code produit, DNS, Entra, OAuth, SSO réel, handoff réel, DB, secret ou déploiement.

---

## Contexte

ADR-0007 a figé l'emplacement des surfaces (Website / Nexus / SaaS autonomes) et clos le rôle d'entrée publique de Time.

Restait ouvert :

- l'ambiguïté Website « Se connecter » vs « Mon espace TAGORA » ;
- les routes portail `/modules/{slug}` ;
- le parcours authentifié Nexus → SaaS ;
- l'identité unique cible vs mots de passe par module ;
- l'accès direct à un sous-domaine sans second mot de passe TAGORA.

Martin fixe un univers TAGORA unique, un login primaire, un portail client, et des SaaS autonomes.

---

## Décision

```text
MODULE_MAPPING_CONTRACT_STATUS=OFFICIAL
ONE_TAGORA_UNIVERSE=YES
ONE_PRIMARY_LOGIN=YES
ONE_CUSTOMER_PORTAL=YES
AUTONOMOUS_SAAS_MODULES=YES
WEBSITE_AUTHENTICATED_LAUNCH_OWNER=NEXUS
NEXUS_ACCESS_BROKER=YES
TAGORA_HANDOFF_V1=TARGET_STANDARD
IDENTITY_PROVIDER_TARGET=Microsoft Entra External ID
AUTH_PROTOCOL_TARGET=OIDC + PKCE S256
SHARED_PASSWORD_DATABASE_BETWEEN_APPS=NO
GLOBAL_SHARED_COOKIE=NO
```

### Adresses

- Public : `https://tagora.ca`
- Portail : `https://app.tagora.ca`
- Login central : `https://app.tagora.ca/login`
- Catalogue : `https://app.tagora.ca/modules`
- Portail modules : `/modules/time` `/modules/mail` `/modules/stock` `/modules/pulse`
- SaaS : `time.tagora.ca` `mail.tagora.ca` `stock.tagora.ca` `pulse.tagora.ca`

### CTA Website

« Se connecter » → `https://app.tagora.ca/login`  
« Mon espace TAGORA » → `https://app.tagora.ca`  
« Découvrir un module » → page commerciale Website.

### Accès

Nexus décide fail-closed, génère un handoff cible, envoie vers le domaine SaaS. Le SaaS valide, crée sa session métier, conserve ses rôles locaux.

Aucun endpoint OAuth commun n'est inventé ici. TAGORA_HANDOFF_V1 = contrat technique **ultérieur**.

### Identité cible

Un compte TAGORA, un login primaire, un mot de passe, un MFA. Pas de base de mots de passe partagée entre apps. Pas de mots de passe module comme cible finale.

### Logout

`NEXUS_SESSION != MODULE_SESSION`. Cookie partagé `.tagora.ca` : **NO**. Logout global : contrat séparé.

### Séquence

I0 = ce contrat. I1–I9 ultérieurs. I4 Entra staging sous Human Gate. I5 un seul pilote non-production (Stock Premium recommandé à évaluer ; sélection officielle ADR-0011, implémentation non autorisée). I9 DNS/Production en dernier.

---

## Options considérées

1. **Laisser chaque SaaS avec login/mot de passe propre comme cible finale** — contredit ONE_TAGORA_UNIVERSE.
2. **Absorber les SaaS dans Nexus** — contredit AUTONOMOUS_SAAS_MODULES et ADR-0007.
3. **Figer mapping + cibles d'identité dans TOS, sans implémentation** — retenu.

---

## Conséquences

### Positives

- Ambiguïté CTA Website close.
- Parcours discover → launch → runtime explicite.
- Access broker Nexus sans fusion des apps.

### Négatives / contraintes

- Handoff, Entra, callback/state/nonce encore non spécifiés techniquement.
- Auth actuelle des modules à inventorier en READ-ONLY après transfert.
- Logout global non défini.

### Boundary

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
SSO_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
DNS_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
PHASE4D_LOT2_UNCHANGED=YES
```

---

## Modules impactés

TOS (doc only) ; Website ; Nexus ; Time ; Mail IA ; Stock Premium ; Pulse AI.

---

## Références

- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md](../10_knowledge/VALIDATION_VALD_099_MAPPING_INTEGRATION_MODULES.md)
- Complément identité : [ADR-0009](ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- Complément handoff : [ADR-0010](ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Complément sélection pilote : [ADR-0011](ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md)
- [ADR-0007](ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-099 | Mapping adresses / accès / identité cible TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
