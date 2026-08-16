# ADR-0013 — Classification commerciale TAGORA Sourcing AI (Coming Soon) et carte des cinq modules SaaS

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-104**  
Décision : **DEC-025**

Cette ADR enregistre la **classification commerciale** de TAGORA Sourcing AI, sa position Coming Soon, la carte officielle des cinq modules SaaS mensuels, le domaine applicatif TBD, et les frontières Website / Nexus.

Elle **complète** DEC-024 / ADR-0012 / VALD-103. Elle **ne les remplace pas**. Elle **ne réécrit pas** ADR-0012.

Elle **complète** ADR-0004 / ADR-0007 / ADR-0008 / ADR-0009 / ADR-0010 sans les remplacer.

Elle **n'autorise aucune** implémentation produit, aucun code Website, aucun code Nexus, aucun DNS, aucun sous-domaine, aucun abonnement réel.

---

## Contexte

DEC-024 a fondé officiellement TAGORA Sourcing AI (module autonome super-agent, SaaS mensuel revendable, surfaces candidates). Restait ouvert :

- le numéro commercial dans la carte des modules mensuels ;
- le statut public Coming Soon vs disponible ;
- le domaine applicatif (candidat `sourcing.tagora.ca` non adopté) ;
- la route Nexus (candidat `/modules/sourcing` non implémenté) ;
- les règles de communication publique Website.

Martin fige ces points sans recréer la fondation.

---

## Décision

```text
COMMERCIAL_NAME=TAGORA Sourcing AI
COMMERCIAL_MODULE_NUMBER=5
MODULE_CLASSIFICATION=MONTHLY_SAAS_MODULE
COMMERCIAL_STATUS=COMING_SOON
COMMERCIAL_PRESENTATION_AUTHORIZED=YES
PRODUCT_AVAILABILITY=NOT_AVAILABLE
OPERATIONAL_STATUS=NOT_OPERATIONAL
APPLICATION_DOMAIN=TBD
DOMAIN_DECISION_DEFERRED=YES
MONTHLY_RESALE_MODEL=YES
COMMERCIAL_SAAS_MODULE_COUNT=5
PLANNED_CAPABILITIES_ONLY=YES
CURRENT_OPERATIONAL_CAPABILITIES=NONE_CLAIMED
```

### Carte des cinq modules SaaS mensuels

1. TAGORA Time  
2. TAGORA Pulse AI  
3. TAGORA Stock Premium  
4. TAGORA Mail IA  
5. TAGORA Sourcing AI  

```text
NEXUS_POSITION=CENTRAL_CLIENT_PORTAL + ACCESS_BROKER
NEXUS_IS_COMMERCIAL_MODULE=NO
NEXUS_IS_SIXTH_MONTHLY_MODULE=NO
SOURCING_IN_NEXUS_AVAILABLE=NO
SOURCING_HANDOFF_AVAILABLE=NO
SOURCING_PORTAL_ACCESS_AVAILABLE=NO
SOURCING_NEXUS_ROUTE=TBD
```

### Website

```text
WEBSITE_POSITION=PUBLIC_ENTRY + MARKETING + PRODUCT_PRESENTATION + COMMERCIAL_CONVERSION
WEBSITE_FR_ROUTE=https://tagora.ca/fr/sourcing
WEBSITE_EN_ROUTE=https://tagora.ca/en/sourcing
WEBSITE_ROUTES_STATUS=PROPOSED_COMMERCIAL_ROUTES
WEBSITE_ROUTE_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_PAGES_AVAILABLE=NO
```

### Réconciliation des candidats DEC-024

Les valeurs DEC-024 **restent dans l'historique**. Elles ne sont pas adoptées.

```text
PREVIOUS_SAAS_DOMAIN_CANDIDATE=https://sourcing.tagora.ca
PREVIOUS_SAAS_DOMAIN_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_ADOPTED
CURRENT_APPLICATION_DOMAIN=TBD
PREVIOUS_NEXUS_ROUTE_CANDIDATE=https://app.tagora.ca/modules/sourcing
PREVIOUS_NEXUS_ROUTE_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_IMPLEMENTED
CURRENT_NEXUS_MODULE_ROUTE=TBD
DNS_AUTHORIZED=NO
SUBDOMAIN_RESERVATION_AUTHORIZED=NO
```

Ne pas présenter `sourcing.tagora.ca` comme domaine officiel, actif, réservé, configuré, publié ou approuvé.  
Ne pas présenter `/modules/sourcing` comme route disponible.

### Compatibilité

```text
DEC019_COMPATIBLE=YES
DEC020_COMPATIBLE=YES
DEC021_COMPATIBLE=YES
DEC022_COMPATIBLE=YES
DEC024_COMPLETED_NOT_REPLACED=YES
```

---

## Options considérées

1. **Annoncer Sourcing AI comme disponible / Live** — rejeté : aucune capacité opérationnelle ; fondation seulement.  
2. **Adopter maintenant `sourcing.tagora.ca` et `/modules/sourcing`** — rejeté : domaine et route restent TBD ; DNS interdit.  
3. **Compter Nexus comme sixième module mensuel** — rejeté : Nexus = portail / access broker, pas un module commercial.  
4. **Classifier Sourcing AI comme 5e module SaaS mensuel Coming Soon, présentation vision seulement** — retenu.

Non retenu : implémenter des pages Website ; activer un accès Nexus ; réserver un DNS ; réécrire ADR-0012.

---

## Conséquences

### Positives

- Carte commerciale officielle à cinq modules, sans ambiguïté Nexus.  
- Communication publique bornée : Coming Soon, capacités planifiées, CTA autorisés / interdits.  
- Candidats DEC-024 conservés comme historique, non présentés comme adoptés.  
- Website peut préparer une présentation de vision après transfert Martin.

### Négatives / contraintes

- Aucun produit n'est disponible.  
- Le domaine applicatif et la route Nexus restent à décider.  
- Toute implémentation Website / Nexus / DNS exige un Human Gate distinct.

### Boundary

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DOMAIN_PUBLICATION_AUTHORIZED=NO
HANDOFF_IMPLEMENTATION_AUTHORIZED=NO
SSO_IMPLEMENTATION_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Modules impactés

TOS (documentation seulement).  
Website / Nexus : **non touchés** ; paquets mis à jour, non exécutés.  
TAGORA Sourcing AI : **repo non créé**.  
Time, Pulse, Stock Premium, Mail IA : **non touchés** ; carte commerciale seulement.

---

## Références

- [TAGORA_SOURCING_AI_COMMERCIAL_POSITIONING_COMING_SOON.md](../04_adoption_modules/TAGORA_SOURCING_AI_COMMERCIAL_POSITIONING_COMING_SOON.md)
- [VALIDATION_VALD_104_TAGORA_SOURCING_AI_COMMERCIAL_MODULE_MAP_COMING_SOON.md](../10_knowledge/VALIDATION_VALD_104_TAGORA_SOURCING_AI_COMMERCIAL_MODULE_MAP_COMING_SOON.md)
- [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) — DEC-025
- [ADR-0012](ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md) — non remplacé
- [ADR-0007](ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md) — non remplacé
- [ADR-0008](ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md) — non remplacé

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-104 | Classification commerciale Sourcing AI Coming Soon + carte 5 modules | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
