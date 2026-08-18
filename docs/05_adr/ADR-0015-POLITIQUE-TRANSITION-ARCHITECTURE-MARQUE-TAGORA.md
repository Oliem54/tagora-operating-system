# ADR-0015 — Politique de transition de l'architecture de marque TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-17**

Validation : **VALD-106**

Décision : **DEC-027**

Cette ADR complète DEC-026 / ADR-0014 / VALD-105. Elle ne remplace ni la nomenclature commerciale officielle, ni la carte des six modules SaaS mensuels.

Elle fixe uniquement la politique de transition des noms, routes, domaines et actifs de marque. Elle n'autorise aucune implémentation Website, Nexus ou produit.

---

## Contexte

DEC-026 officialise les six noms commerciaux suivants :

1. TAGORA HORORA
2. TAGORA PULS
3. TAGORA DEPORA
4. TAGORA MESSOR
5. TAGORA YORVA
6. TAGORA ETIOQ

Martin confirme que la convention canonique demeure `TAGORA + NOM DU MODULE`. Il autorise une signature graphique secondaire `NOM par TAGORA` lorsque le contexte visuel la justifie, sans en faire un nouveau nom officiel.

Des actifs centraux et produits ont été reçus sous forme de PNG, SVG, PSD, PDF, OTF et WOFF2. Avant toute application, leur licence, leur contraste, leur usage clair/sombre et leur adéquation au Web doivent être validés.

---

## Décision

### Convention canonique

```text
CANONICAL_BRAND_CONVENTION=TAGORA + MODULE_NAME
CANONICAL_MODULE_NAMES_CASE=UPPERCASE
SECONDARY_GRAPHIC_SIGNATURE=NOM par TAGORA
SECONDARY_SIGNATURE_IS_CANONICAL_NAME=NO
SECONDARY_SIGNATURE_REPLACES_TEXT_NAME=NO
```

Dans les textes, menus, métadonnées, contrats, documents et attributs d'accessibilité, les noms officiels complets restent `TAGORA HORORA`, `TAGORA PULS`, `TAGORA DEPORA`, `TAGORA MESSOR`, `TAGORA YORVA` et `TAGORA ETIOQ`.

La signature secondaire peut être utilisée dans un verrouillage graphique approuvé. Elle ne doit pas créer six marques autonomes ni masquer durablement la marque mère TAGORA.

### Transition des anciens noms

Une mention de transition est autorisée sur les pages commerciales et documents d'accompagnement :

```text
TAGORA HORORA — anciennement TAGORA Time
```

Le même modèle peut être appliqué à PULS, DEPORA, MESSOR et YORVA lorsque la compréhension du client ou la traçabilité le nécessite.

```text
LEGACY_NAME_TRANSITION_ALLOWED=YES
LEGACY_NAME_TRANSITION_MAX_DURATION=6_MONTHS
TRANSITION_START_DATE_MUST_BE_RECORDED_PER_MODULE=YES
LEGACY_NAME_IN_COMPACT_PRODUCT_UI=DISCOURAGED
HISTORICAL_REFERENCES_PRESERVED=YES
```

La date de départ doit être inscrite dans le gate de première publication du module. La mention doit être retirée au plus tard six mois après cette date. Elle ne doit pas être ajoutée aux identifiants techniques ni aux preuves historiques.

### Routes Website

L'option C est retenue : transition progressive.

```text
WEBSITE_ROUTE_STRATEGY=OPTION_C_PROGRESSIVE_TRANSITION
CURRENT_ROUTES_REMAIN=YES
NEW_BRAND_ROUTES_AUTHORIZED=NO
REDIRECTS_AUTHORIZED=NO
ROUTE_MIGRATION_REQUIRES_SEPARATE_GATE=YES
```

Toute future migration devra inventorier les liens, les langues FR/EN, les balises canoniques, le sitemap, l'analytique et les redirections. Les routes proposées YORVA `/fr/sourcing` et `/en/sourcing` restent non implémentées. La route ETIOQ reste `TBD`.

### Domaines

L'option C est retenue comme stratégie future : transition contrôlée, sans exécution dans cette décision.

```text
DOMAIN_STRATEGY=OPTION_C_CONTROLLED_TRANSITION
CURRENT_CANONICAL_DOMAINS_REMAIN=YES
NEW_MODULE_DOMAINS_AUTHORIZED=NO
DNS_CHANGE_AUTHORIZED=NO
DOMAIN_REDIRECT_AUTHORIZED=NO
DOMAIN_MIGRATION_REQUIRES_SEPARATE_GATE=YES
```

DEC-015 / ADR-0004 demeure la convention canonique active. Avant une future migration, chaque projet devra inventorier les callbacks, cookies, CORS, OAuth, APIs, liens envoyés, signets, intégrations et possibilités de rollback.

### Position de Nexus

```text
NEXUS_POSITION=CENTRAL_CLIENT_PORTAL + ACCESS_BROKER
NEXUS_IS_COMMERCIAL_MODULE=NO
NEXUS_IS_SEVENTH_MODULE=NO
NEXUS_IS_DOCUMENT_SOURCING_MODULE=NO
```

Nexus peut afficher les modules souscrits et leurs destinations. Il ne doit pas être décrit comme un produit de gestion documentaire ou de sourcing. Toute maquette ou tout guide qui lui attribue ce métier doit être corrigé avant utilisation publique.

### Frontière DEPORA / ETIOQ

```text
DEPORA_OWNS=STOCK + INVENTORY + QUANTITIES + AVAILABILITY + ARRIVALS
ETIOQ_OWNS=ELECTRONIC_LABEL_DISPLAY + PRICE_DISPLAY + PROMOTIONS + PRODUCT_LABEL_ASSOCIATION + DEVICE_STATUS
ETIOQ_INVENTORY_SYSTEM_OF_RECORD=NO
ETIOQ_COMMERCIAL_STATUS=COMING_SOON
ETIOQ_PLANNED_CAPABILITIES_ONLY=YES
```

ETIOQ pourra éventuellement consommer des informations provenant de DEPORA, d'un système de caisse ou d'un ERP. Aucun connecteur, flux temps réel ou intégration active n'est déclaré par cette décision.

---

## Politique des actifs

### Ordre obligatoire

1. inventorier les fichiers sources ;
2. valider les droits de licence et d'incorporation Web ;
3. contrôler les versions claire et sombre, le contraste et la transparence ;
4. préférer un SVG officiel pour le Web lorsqu'il existe ;
5. utiliser un PNG transparent comme fallback ou lorsque le SVG n'existe pas ;
6. utiliser un symbole autonome approuvé pour favicon et icône ;
7. réaliser un pilote Website local ;
8. valider humainement le pilote avant toute généralisation.

```text
BRAND_ASSET_AUDIT_REQUIRED=YES
FONT_LICENSE_VALIDATION_REQUIRED=YES
SVG_PREFERRED_FOR_WEB=YES
PNG_FALLBACK_ALLOWED=YES
LIGHT_DARK_MAPPING_VALIDATION_REQUIRED=YES
FAVICON_REQUIRES_APPROVED_STANDALONE_MARK=YES
WEBSITE_PILOT_REQUIRED=YES
```

### Séparation logos / typographie

La migration des logos et la migration typographique doivent être des blocs distincts, testés et réversibles séparément.

```text
LOGO_MIGRATION_AND_TYPOGRAPHY_MIGRATION_SEPARATE=YES
COMBINED_BRAND_BIG_BANG_AUTHORIZED=NO
```

---

## Compatibilité

```text
DEC015_COMPATIBLE=YES
DEC018_COMPATIBLE=YES
DEC019_COMPATIBLE=YES
DEC023_COMPATIBLE=YES
DEC026_COMPATIBLE=YES
ADR0014_REPLACED=NO
VALD105_REPLACED=NO
```

- DEC-015 reste active : aucun domaine ou DNS n'est modifié.
- DEC-018 reste active : la charte finale demeure la source centrale et les licences doivent être contrôlées.
- DEC-019 reste active : Website demeure l'entrée publique et Nexus le portail central.
- DEC-023 reste active : DEPORA, techniquement Stock Premium, demeure le pilote identité sélectionné ; aucune implémentation n'est autorisée ici.
- DEC-026 reste active : les six noms commerciaux et leur casse officielle ne changent pas.

---

## Conséquences

### Positives

- Une transition compréhensible sans rupture brutale.
- Une séparation nette entre nom commercial et identifiant technique.
- Une réduction des risques SEO, DNS, Auth et CORS.
- Un pilote Website réversible avant toute généralisation.

### Contraintes

- Chaque date de première publication doit être enregistrée.
- Chaque projet exige un gate propre avant application.
- Les actifs sans SVG officiel devront rester en PNG ou faire l'objet d'un nouvel export approuvé.
- Les licences typographiques doivent être confirmées avant intégration Web.

---

## Boundary

```text
TOS_SCOPE_ONLY=YES
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
WEBSITE_IMPLEMENTATION_AUTHORIZED=NO
NEXUS_IMPLEMENTATION_AUTHORIZED=NO
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
ROUTE_CHANGE_AUTHORIZED=NO
DOMAIN_CHANGE_AUTHORIZED=NO
DNS_CHANGE_AUTHORIZED=NO
DB_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Références

- [ADR-0014](ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md)
- [VALIDATION_VALD_106](../10_knowledge/VALIDATION_VALD_106_POLITIQUE_TRANSITION_ARCHITECTURE_MARQUE_TAGORA.md)
- [STRATEGIE_TRANSITION_ARCHITECTURE_MARQUE_TAGORA.md](../04_adoption_modules/STRATEGIE_TRANSITION_ARCHITECTURE_MARQUE_TAGORA.md)
- [PAQUET_TRANSFERT_PILOTE_WEBSITE_IDENTITE_MODULES.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_PILOTE_WEBSITE_IDENTITE_MODULES.md)

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-106 | Politique de transition de l'architecture de marque TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-17 |
