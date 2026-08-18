# ADR-0014 — Nomenclature commerciale officielle et carte des six modules SaaS

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-17**

Validation : **VALD-105**
Décision : **DEC-026**

Cette ADR officialise les six noms commerciaux et ajoute TAGORA ETIOQ à la carte mensuelle. Elle remplace uniquement les anciens noms commerciaux et le compte de cinq modules fixé par DEC-025 / ADR-0013 / VALD-104. Les métiers, frontières, interdictions et identifiants techniques existants restent inchangés jusqu'à des gates propres aux projets.

Elle n'autorise aucun renommage de repository, package, route, domaine, base de données, secret, infrastructure ou environnement.

---

## Contexte

La carte commerciale précédente utilisait TAGORA Time, TAGORA Stock Premium et TAGORA Sourcing AI, et comptait cinq modules mensuels. Martin a choisi une nomenclature de marque internationale, distincte des identifiants techniques historiques, et a officialisé un sixième module futur consacré aux étiquettes électroniques en commerce.

La décision doit :

- préserver le métier et l'historique de chaque module ;
- distinguer nom commercial et identifiant technique ;
- maintenir YORVA et ETIOQ en `COMING_SOON` ;
- conserver Nexus comme portail central, non comme module commercial ;
- empêcher toute application automatique dans les autres repositories.

---

## Décision

```text
TAGORA_TIME_COMMERCIAL_NAME=TAGORA HORORA
TAGORA_STOCK_PREMIUM_COMMERCIAL_NAME=TAGORA DEPORA
TAGORA_SOURCING_AI_COMMERCIAL_NAME=TAGORA YORVA
TAGORA_TAG_COMMERCIAL_NAME=TAGORA ETIOQ

TAGORA_PULSE_AI_COMMERCIAL_NAME=TAGORA PULS
TAGORA_MAIL_IA_COMMERCIAL_NAME=TAGORA MESSOR

COMMERCIAL_SAAS_MODULE_COUNT=6
MONTHLY_RESALE_MODEL=YES
NEXUS_POSITION=CENTRAL_CLIENT_PORTAL + ACCESS_BROKER
NEXUS_IS_COMMERCIAL_MODULE=NO
NEXUS_IS_SEVENTH_MONTHLY_MODULE=NO
```

### Carte officielle des six modules SaaS mensuels

1. TAGORA HORORA
2. TAGORA PULS
3. TAGORA DEPORA
4. TAGORA MESSOR
5. TAGORA YORVA
6. TAGORA ETIOQ

### Parité typographique obligatoire

Lorsque les six noms sont présentés dans une même carte, liste, navigation, grille, comparaison ou surface commerciale, ils doivent utiliser la même taille de caractère, le même poids, la même hauteur de ligne, le même espacement et la même hiérarchie visuelle. Aucun nom ne doit être agrandi ou réduit selon sa longueur.

Le préfixe `TAGORA` doit recevoir un traitement identique pour les six modules. Cette règle impose la parité entre modules ; elle ne remplace pas la charte de marque centrale ni ses polices officielles.

```text
MODULE_NAME_TYPOGRAPHIC_PARITY_REQUIRED=YES
MODULE_NAME_FONT_SIZE_EQUAL=YES
MODULE_NAME_FONT_WEIGHT_EQUAL=YES
MODULE_NAME_LINE_HEIGHT_EQUAL=YES
MODULE_NAME_VISUAL_HIERARCHY_EQUAL=YES
MODULE_NAME_CASE=UPPERCASE
LENGTH_BASED_SCALING_ALLOWED=NO
```

### Correspondance métier

| Nom officiel | Ancien nom ou nom de travail | Métier conservé | Statut |
|---|---|---|---|
| TAGORA HORORA | TAGORA Time | Temps, présences, horaires et opérations connexes | Module existant ; application du nom non autorisée par ce gate |
| TAGORA PULS | TAGORA Pulse AI | Agents IA et conversations | Module existant ; application du nom non autorisée par ce gate |
| TAGORA DEPORA | TAGORA Stock Premium / Stock Inventaire | Inventaire, disponibilité, suivi et intelligence du stock | Module existant ; application du nom non autorisée par ce gate |
| TAGORA MESSOR | TAGORA Mail IA | Traitement assisté du courrier électronique | Module existant ; application du nom non autorisée par ce gate |
| TAGORA YORVA | TAGORA Sourcing AI | Intelligence documentaire et sourcing fournisseur | `COMING_SOON` |
| TAGORA ETIOQ | TAGORA TAG, nom de travail | Gestion des étiquettes électroniques en commerce | `COMING_SOON` |

### Statuts YORVA et ETIOQ

```text
YORVA_COMMERCIAL_STATUS=COMING_SOON
YORVA_APPLICATION_DOMAIN=TBD
YORVA_PLANNED_CAPABILITIES_ONLY=YES
YORVA_PRODUCT_AVAILABILITY=NOT_AVAILABLE
YORVA_OPERATIONAL_STATUS=NOT_OPERATIONAL

ETIOQ_COMMERCIAL_STATUS=COMING_SOON
ETIOQ_APPLICATION_DOMAIN=TBD
ETIOQ_WEBSITE_ROUTE=TBD
ETIOQ_NEXUS_ROUTE=TBD
ETIOQ_PLANNED_CAPABILITIES_ONLY=YES
ETIOQ_PRODUCT_AVAILABILITY=NOT_AVAILABLE
ETIOQ_OPERATIONAL_STATUS=NOT_OPERATIONAL
```

YORVA conserve les routes commerciales Website proposées par DEC-025 : `/fr/sourcing` et `/en/sourcing`. Leur implémentation reste interdite. Le domaine applicatif et la route Nexus de YORVA restent TBD.

### Métier YORVA conservé

YORVA conserve la fondation métier de Sourcing AI. Le module est prévu pour répertorier l'ensemble des documents reçus, les cataloguer proprement, les analyser et soutenir le sourcing : qualification des fournisseurs, comparaison des produits, prix et conditions, préparation des demandes de soumissions et gestion du processus. Ces capacités sont futures uniquement.

### Métier ETIOQ

ETIOQ est prévu pour centraliser, synchroniser et superviser les étiquettes électroniques utilisées dans les commerces, notamment les informations affichées, prix, promotions, associations produit-étiquette et état du parc. Ces capacités sont futures uniquement.

---

## Identifiants techniques et historique

```text
REPOSITORY_RENAME_AUTHORIZED=NO
PACKAGE_RENAME_AUTHORIZED=NO
TECHNICAL_KEY_RENAME_AUTHORIZED=NO
DATABASE_RENAME_AUTHORIZED=NO
ROUTE_RENAME_AUTHORIZED=NO
DOMAIN_RENAME_AUTHORIZED=NO
DNS_AUTHORIZED=NO
```

Les identifiants historiques `time`, `pulse`, `stock`, `mail` et `sourcing`, ainsi que les noms de repositories existants, restent en place tant qu'un projet n'a pas reçu un Human Gate distinct. Les domaines canoniques existants `time.tagora.ca`, `pulse.tagora.ca`, `stock.tagora.ca` et `mail.tagora.ca` ne sont pas modifiés par cette décision.

DEC-024 / ADR-0012 / VALD-103 restent la fondation métier historique de YORVA. DEC-025 / ADR-0013 / VALD-104 restent l'historique de sa classification Coming Soon et de la carte à cinq modules. Leurs noms commerciaux et le compte de modules sont remplacés par la présente décision ; leurs interdictions et frontières restent applicables.

---

## Compatibilité

```text
DEC019_COMPATIBLE=YES
DEC020_COMPATIBLE=YES
DEC021_COMPATIBLE=YES
DEC022_COMPATIBLE=YES
DEC023_COMPATIBLE=YES
DEC024_BUSINESS_FOUNDATION_PRESERVED=YES
DEC025_COMMERCIAL_NAME_AND_COUNT_SUPERSEDED=YES
```

- DEC-019 : Website reste l'entrée publique et commerciale ; les applications demeurent autonomes.
- DEC-020 : les slugs et identifiants techniques existants ne sont pas modifiés.
- DEC-021 : aucune identité, aucun utilisateur et aucun bootstrap ne sont créés.
- DEC-022 : aucun handoff runtime ni adapter n'est ajouté.
- DEC-023 : la sélection historique de Stock Premium comme pilote identité n'est pas changée par son nouveau nom commercial DEPORA.
- DEC-024 : le métier sourcing est conservé sous le nom YORVA.
- DEC-025 : Coming Soon, domaine TBD et règles de communication sont conservés ; la carte passe de cinq à six modules.

---

## Options considérées

1. Conserver tous les anciens noms — rejeté par décision Martin.
2. Renommer immédiatement les éléments techniques — rejeté : risque transversal et absence de gates projets.
3. Officialiser uniquement la nomenclature et préparer des paquets non exécutés — retenu.
4. Présenter YORVA ou ETIOQ comme disponibles — rejeté : produits Coming Soon et capacités planifiées seulement.

---

## Conséquences

### Positives

- Une nomenclature commerciale cohérente et officielle.
- Une carte claire de six abonnements mensuels.
- Une séparation explicite entre marque commerciale et identifiants techniques.
- Les métiers de Time, Stock et Sourcing sont préservés.

### Contraintes

- Chaque projet doit recevoir son paquet par Martin.
- Toute application UI, code, route, domaine ou repository exige un GO distinct.
- Les anciens noms restent nécessaires dans l'historique et pour identifier les composants techniques existants.

---

## Boundary

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
DB_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
PACKETS_EXECUTED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Références

- [NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md](../04_adoption_modules/NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md)
- [CONTRAT_PARITE_TYPOGRAPHIQUE_NOMS_MODULES.md](../09_design_system/CONTRAT_PARITE_TYPOGRAPHIQUE_NOMS_MODULES.md)
- [VALIDATION_VALD_105_NOMENCLATURE_COMMERCIALE_SIX_MODULES_SAAS.md](../10_knowledge/VALIDATION_VALD_105_NOMENCLATURE_COMMERCIALE_SIX_MODULES_SAAS.md)
- [ADR-0013](ADR-0013-TAGORA-SOURCING-AI-COMMERCIAL-MODULE-MAP-COMING-SOON.md) — historique complété
- [ADR-0012](ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md) — fondation métier conservée

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-105 | Nomenclature officielle et carte des six modules SaaS | **Validé** | Martin ST-Gelais — Direction | 2026-08-17 |
