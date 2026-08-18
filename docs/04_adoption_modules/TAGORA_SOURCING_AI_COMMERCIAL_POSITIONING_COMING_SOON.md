# TAGORA Sourcing AI — Positionnement commercial Coming Soon

> **Document historique DEC-025.** Depuis DEC-026 / ADR-0014 / VALD-105 (2026-08-17), le nom commercial courant est **TAGORA YORVA** et la carte officielle compte six modules. Le statut `COMING_SOON`, le domaine applicatif `TBD`, les routes Website proposées et toutes les interdictions ci-dessous restent applicables.

```text
GATE=TOS_TAGORA_SOURCING_AI_COMMERCIAL_MODULE_MAP_COMING_SOON_GO
MODE=DOCUMENTATION_ONLY
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
TOS_SCOPE_ONLY=YES
DATE=2026-08-16
DECIDEUR=Martin ST-Gelais — Direction
DECISION=DEC-025
ADR=ADR-0013
VALIDATION=VALD-104
COMPLETES=DEC-024 / ADR-0012 / VALD-103
REPLACES_DEC_024=NO
REWRITES_ADR_0012=NO
```

Ce document fige le **positionnement commercial** de TAGORA Sourcing AI.  
Il **complète** la fondation DEC-024. Il **ne la remplace pas**. Il **ne recrée pas** le module. Il **ne réécrit pas** ADR-0012.

Aucune implémentation produit. Aucun code Website. Aucun code Nexus. Aucun DNS.

---

## 1. Identité commerciale

```text
MODULE_NAME=TAGORA Sourcing AI
INTERNAL_ENGINE=Supplier Intelligence
VISIBLE_AGENT=TAGORA Sourcing Agent
MODULE_TYPE=AUTONOMOUS_TAGORA_SAAS_AGENTIC_MODULE
COMMERCIAL_MODULE_NUMBER=5
MODULE_CLASSIFICATION=MONTHLY_SAAS_MODULE
MONTHLY_SAAS_RESELLABLE=YES
MONTHLY_RESALE_MODEL=YES
```

---

## 2. Statut commercial

```text
COMMERCIAL_STATUS=COMING_SOON
COMMERCIAL_PRESENTATION_AUTHORIZED=YES
PRODUCT_AVAILABILITY=NOT_AVAILABLE
OPERATIONAL_STATUS=NOT_OPERATIONAL
APPLICATION_DOMAIN=TBD
DOMAIN_DECISION_DEFERRED=YES
```

`COMING_SOON` signifie : concept produit officiel et fondation TOS approuvée, mais produit **non disponible** et capacités **non opérationnelles**.

Ne pas utiliser : `AVAILABLE` · `LIVE` · `PRODUCTION_READY` · `OPERATIONAL` · `READY_TO_USE` · `AUTOMATED_NOW`.

---

## 3. Carte commerciale officielle — cinq modules SaaS

Les cinq modules SaaS commercialisés séparément par abonnement mensuel sont :

| N° | Module |
|---|---|
| 1 | TAGORA Time |
| 2 | TAGORA Pulse AI |
| 3 | TAGORA Stock Premium |
| 4 | TAGORA Mail IA |
| 5 | TAGORA Sourcing AI |

```text
COMMERCIAL_SAAS_MODULE_COUNT=5
NEXUS_IS_COMMERCIAL_MODULE=NO
NEXUS_IS_SIXTH_MONTHLY_MODULE=NO
```

TAGORA Nexus demeure séparé : portail client central et access broker. Nexus n'est **pas** un module commercial mensuel.

---

## 4. Position de Nexus

```text
NEXUS_POSITION=CENTRAL_CLIENT_PORTAL + ACCESS_BROKER
NEXUS_IS_COMMERCIAL_MODULE=NO
SOURCING_IN_NEXUS_AVAILABLE=NO
SOURCING_HANDOFF_AVAILABLE=NO
SOURCING_PORTAL_ACCESS_AVAILABLE=NO
SOURCING_NEXUS_ROUTE=TBD
SOURCING_SUBSCRIPTION_AVAILABLE=NO
SOURCING_USER_ACCESS_AVAILABLE=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
```

Nexus permettra à terme l'accès aux modules souscrits, le contexte client / organisation, la navigation inter-modules et le lancement des modules autorisés. **Aucun** de ces accès n'est disponible pour Sourcing AI maintenant.

Réconciliation DEC-024 :

```text
PREVIOUS_NEXUS_ROUTE_CANDIDATE=https://app.tagora.ca/modules/sourcing
PREVIOUS_NEXUS_ROUTE_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_IMPLEMENTED
CURRENT_NEXUS_MODULE_ROUTE=TBD
```

Ne pas présenter `/modules/sourcing` comme route disponible.

---

## 5. Position de Website

```text
WEBSITE_POSITION=PUBLIC_ENTRY + MARKETING + PRODUCT_PRESENTATION + COMMERCIAL_CONVERSION
COMMERCIAL_PRESENTATION_AUTHORIZED=YES
WEBSITE_FR_ROUTE=https://tagora.ca/fr/sourcing
WEBSITE_EN_ROUTE=https://tagora.ca/en/sourcing
WEBSITE_ROUTES_STATUS=PROPOSED_COMMERCIAL_ROUTES
WEBSITE_ROUTE_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_PAGES_AVAILABLE=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
```

Website peut présenter la **vision** de TAGORA Sourcing AI comme produit Coming Soon.  
Website **ne doit pas** annoncer que le produit est actuellement disponible.

---

## 6. Domaine applicatif

```text
APPLICATION_DOMAIN=TBD
DOMAIN_DECISION_DEFERRED=YES
DNS_AUTHORIZED=NO
SUBDOMAIN_RESERVATION_AUTHORIZED=NO
SUBDOMAIN_CONFIGURATION_AUTHORIZED=NO
DOMAIN_PUBLICATION_AUTHORIZED=NO
APPLICATION_URL_PUBLICATION_AUTHORIZED=NO
```

Réconciliation DEC-024 :

```text
PREVIOUS_SAAS_DOMAIN_CANDIDATE=https://sourcing.tagora.ca
PREVIOUS_SAAS_DOMAIN_CANDIDATE_STATUS=HISTORICAL_CANDIDATE_NOT_ADOPTED
CURRENT_APPLICATION_DOMAIN=TBD
```

Ne pas présenter `sourcing.tagora.ca` comme domaine officiel, actif, réservé, configuré, publié ou approuvé.

---

## 7. Capacités planifiées seulement

```text
PLANNED_CAPABILITIES_ONLY=YES
CURRENT_OPERATIONAL_CAPABILITIES=NONE_CLAIMED
```

Capacités commerciales **proposées** (vision prévue, au futur) :

- trouver et qualifier des fournisseurs ;
- comparer les produits, les prix et les conditions commerciales ;
- préparer et automatiser à terme les demandes de soumissions ;
- gérer le processus de sourcing ;
- analyser les offres ;
- créer des comparatifs ;
- préparer des recommandations ;
- assister les négociations ;
- conserver une mémoire fournisseur ;
- discuter avec un agent IA spécialisé.

Formulations autorisées (exemples) :

- « Conçu pour aider à trouver et qualifier des fournisseurs. »
- « Prévu pour comparer les produits, prix et conditions. »
- « TAGORA Sourcing AI vise à centraliser le processus de sourcing. »
- « Le futur agent aidera à analyser et comparer les offres. »

---

## 8. CTA Website

### Autorisés

```text
CTA_ALLOWED=
Découvrir la vision
Être informé du lancement
Parler à notre équipe
Discover the vision
Get launch updates
Talk to our team
```

### Interdits

```text
CTA_FORBIDDEN=
Commencer maintenant
Créer mon compte
Se connecter
Essayer gratuitement
Demander une démonstration opérationnelle
Automatiser mes achats maintenant
Start now
Create my account
Sign in
Try for free
Book a live product demo
Automate my purchasing now
```

---

## 9. Affirmations interdites

Ne pas annoncer :

- produit fonctionnel ;
- produit disponible ;
- IA déjà opérationnelle ;
- fournisseurs déjà connectés ;
- Alibaba déjà connecté ;
- autres plateformes déjà connectées ;
- demandes de soumissions réellement envoyées ;
- comparaison de prix en temps réel ;
- sourcing entièrement automatisé ;
- négociations automatisées ;
- intégrations actives ;
- Mail IA connecté ;
- Nexus connecté ;
- domaine applicatif actif ;
- portail client disponible ;
- compte utilisateur disponible ;
- essai gratuit ;
- abonnement activable ;
- résultats mesurés ;
- économies garanties ;
- gains garantis ;
- meilleur prix garanti ;
- meilleur fournisseur garanti.

```text
PROHIBITED_CLAIMS_RECORDED=YES
CTA_POLICY_RECORDED=YES
```

---

## 10. Compatibilité

```text
DEC019_COMPATIBLE=YES
DEC020_COMPATIBLE=YES
DEC021_COMPATIBLE=YES
DEC022_COMPATIBLE=YES
DEC024_COMPLETED_NOT_REPLACED=YES
```

DEC-019 : Website reste discover/sell ; les quatre SaaS canoniques restent autonomes ; Sourcing s'ajoute comme cinquième module mensuel Coming Soon, sans DNS.  
DEC-020 : slugs canoniques time/mail/stock/pulse inchangés ; route Nexus Sourcing = TBD, non disponible.  
DEC-021 : aucun utilisateur Sourcing ; aucun bootstrap identité Sourcing.  
DEC-022 : aucun handoff Sourcing ; l'adapter candidat DEC-024 n'est pas activé.  
DEC-024 : fondation, nom commercial, moteur, agent visible et modèle SaaS mensuel **conservés**.

---

## 11. Interdictions de ce gate

Aucun code produit. Aucun repository Website / Nexus / Sourcing AI. Aucune DB. Aucun DNS. Aucun sous-domaine. Aucun déploiement. Aucune Production. Aucun abonnement réel. Aucun utilisateur réel. Aucun SSO. Aucun handoff. Aucun connecteur.

```text
IMPLEMENTATION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
HUMAN_GATE=YES
```

---

## Références

- Fondation : [TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md](TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md)
- [ADR-0013](../05_adr/ADR-0013-TAGORA-SOURCING-AI-COMMERCIAL-MODULE-MAP-COMING-SOON.md)
- [VALD-104](../10_knowledge/VALIDATION_VALD_104_TAGORA_SOURCING_AI_COMMERCIAL_MODULE_MAP_COMING_SOON.md)
- [ADR-0012](../05_adr/ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md) — non réécrit
- Paquet Website : [paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_WEBSITE.md)
- Note Nexus : [paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md)

## Statut

**Validé — positionnement commercial Coming Soon — 2026-08-16** — Martin ST-Gelais — Direction. Aucune implémentation produit.
