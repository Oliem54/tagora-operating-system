# ADR-0004 — Convention des domaines canoniques TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-12**

Validation : **VALD-093**  
Décision : **DEC-015**

Cette ADR fixe uniquement la convention normative des domaines canoniques de l'écosystème TAGORA.

Les **rôles de surface**, pages commerciales Website et la clôture du rôle d'entrée publique Time sont complétés par **ADR-0007 / DEC-019 / VALD-098**. ADR-0004 n'est **pas** remplacée. Le tableau des domaines reste valide.

Elle **n'autorise aucun changement DNS, déploiement, code, infrastructure ou modification d'un autre repository**.

---

## Contexte

TAGORA Nexus doit devenir le portail central « Mon espace TAGORA », tandis que les modules SaaS demeurent des applications autonomes. Une convention de domaines stable est nécessaire pour éviter qu'un module, un portail ou une URL technique de déploiement se disputent la même identité commerciale.

Cette décision complète ADR-0003 sans modifier les frontières déjà validées entre TOS, Nexus, TCP, Flow et les modules.

---

## Décision normative

### Production

| Service | Domaine canonique |
|---|---|
| Site public / commercial TAGORA | `https://tagora.ca` |
| TAGORA Nexus / Mon espace TAGORA | `https://app.tagora.ca` |
| TAGORA Time | `https://time.tagora.ca` |
| TAGORA Mail IA | `https://mail.tagora.ca` |
| TAGORA Stock Premium | `https://stock.tagora.ca` |
| TAGORA Pulse AI | `https://pulse.tagora.ca` |
| TAGORA Admin futur | `https://admin.tagora.ca` — **réservé, non activé par cette ADR** |

```text
PUBLIC_TAGORA_SITE=https://tagora.ca
TAGORA_NEXUS_PORTAL=https://app.tagora.ca
TAGORA_TIME_APP=https://time.tagora.ca
TAGORA_MAIL_IA_APP=https://mail.tagora.ca
TAGORA_STOCK_PREMIUM_APP=https://stock.tagora.ca
TAGORA_PULSE_AI_APP=https://pulse.tagora.ca
TAGORA_ADMIN_APP=https://admin.tagora.ca
TAGORA_ADMIN_STATUS=RESERVED_FUTURE
```

### Réservation de `app.tagora.ca`

```text
APP_TAGORA_CA_RESERVED_FOR_NEXUS=YES
```

`app.tagora.ca` appartient exclusivement au portail central TAGORA Nexus / « Mon espace TAGORA » dans la convention canonique.

Aucun module SaaS autonome ne doit revendiquer `app.tagora.ca` comme domaine Production propre.

### Convention staging

La convention officielle est :

```text
STAGING_DOMAIN_PATTERN=https://{service}.staging.tagora.ca
```

Exemples normatifs de dérivation :

- Nexus : `https://app.staging.tagora.ca`
- Time : `https://time.staging.tagora.ca`
- Mail IA : `https://mail.staging.tagora.ca`
- Stock Premium : `https://stock.staging.tagora.ca`
- Pulse AI : `https://pulse.staging.tagora.ca`

Cette convention ne crée aucun domaine et n'autorise aucune opération DNS.

### Convention login

La route d'authentification standard des applications TAGORA est :

```text
LOGIN_STANDARD=/login
```

Ainsi, lorsqu'un module expose une page de connexion locale, la route canonique prévue est `{module-canonical-url}/login`.

Toute exception future à cette convention nécessite une décision TOS/Martin distincte si elle devient une règle transversale.

---

## Principes associés

1. `tagora.ca` est le domaine canonique du site public/commercial central.
2. `app.tagora.ca` est réservé à Nexus.
3. Chaque module SaaS autonome possède son propre sous-domaine canonique stable.
4. Les modules, applications et bases demeurent séparés conformément à ADR-0003 et aux règles de séparation des projets.
5. Production et staging utilisent des espaces de domaines distincts.
6. Une URL technique de fournisseur ou de déploiement ne remplace pas le domaine canonique approuvé.
7. Les liens Nexus vers les modules doivent viser les domaines canoniques approuvés lorsqu'ils seront implémentés.
8. Chaque projet reste responsable de son propre déploiement, de sa validation serveur et de la vérification de ses collisions avant toute action d'infrastructure.

---

## Hors portée explicite

Cette décision n'autorise pas :

- changement DNS ;
- ajout ou retrait de domaine chez un fournisseur ;
- déploiement staging ou production ;
- modification de code ;
- modification de variables d'environnement ;
- modification OAuth / redirect URI ;
- création d'application Admin ;
- modification de TAGORA Nexus, Time, Mail IA, Stock Premium ou Pulse AI ;
- intervention dans un autre repository.

Toute application concrète dans un projet doit être transmise par Martin à l'agent propriétaire du projet et suivre ses propres gates.

---

## Impact inter-projets

La décision est normative pour l'écosystème, mais son implémentation reste décentralisée.

```text
PROJECT_IMPLEMENTATION_REQUIRED_LATER=YES
MARTIN_TRANSFER_REQUIRED=yes
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
```

Les projets concernés devront, lorsqu'ils recevront la décision via Martin, vérifier leur état réel et signaler toute collision avant modification.

---

## Références

- [ADR-0003 — Positionnement TAGORA Nexus, Cloud, Platform, TCP et Flow](ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md)
- [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md)
- Complément rôles de surface : [ADR-0007](ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-093 | Convention des domaines canoniques TAGORA, staging et `/login` | **Validé** | Martin ST-Gelais — Direction | 2026-08-12 |

---

## Statut final

```text
CANONICAL_DOMAIN_STANDARD=VALIDATED
PUBLIC_TAGORA_SITE=https://tagora.ca
TAGORA_NEXUS_PORTAL=https://app.tagora.ca
TAGORA_TIME_APP=https://time.tagora.ca
TAGORA_MAIL_IA_APP=https://mail.tagora.ca
TAGORA_STOCK_PREMIUM_APP=https://stock.tagora.ca
TAGORA_PULSE_AI_APP=https://pulse.tagora.ca
TAGORA_ADMIN_APP=https://admin.tagora.ca
TAGORA_ADMIN_STATUS=RESERVED_FUTURE
STAGING_DOMAIN_PATTERN=https://{service}.staging.tagora.ca
LOGIN_STANDARD=/login
APP_TAGORA_CA_RESERVED_FOR_NEXUS=YES
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
```
