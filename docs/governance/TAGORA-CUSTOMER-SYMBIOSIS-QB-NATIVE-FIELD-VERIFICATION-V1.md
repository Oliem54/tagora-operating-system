# Vérification QuickBooks — champs natifs et realms

Ce relevé n'est pas un contrat. Il ne remplace pas le contrat 1.3.0 ni l'annexe de gel logique V1. Il n'autorise aucune écriture, aucune connexion et aucun gel technique complet.

```text
GATE=TOS_CUSTOMER_SYMBIOSIS_QUICKBOOKS_NATIVE_FIELD_AND_REALM_VERIFICATION
DATE_HEURE_MONTREAL=2026-11-21 16:38 America/Montreal
CONTRACT_VERSION=1.3.0
EVENT_CATALOG=43_EVENTS_PRESERVED
LOGICAL_FREEZE_V1=PRESERVED
ADR_0025=PRESERVED
DEC_037=PRESERVED
VALD_115=PRESERVED
QUICKBOOKS_AUTOMATIC_WRITEBACK=FORBIDDEN
QUICKBOOKS_HUMAN_APPROVAL=MANDATORY
DIRECT_PULS_QUICKBOOKS=NO
QUICKBOOKS_CONNECTED=NO
OAUTH_PERFORMED=NO
COMPANY_QUERY_PERFORMED=NO
NEW_SECRET=NO
IMPLEMENTATION_AUTHORIZED=NO
PRODUCTION_CHANGED=NO
RELORA_SECURITY_HOLD=PRESERVED
TECHNICAL_FREEZE=PARTIAL
```

## Source consultée

Schéma public Intuit `IPPCustomer`, espace `http://schema.intuit.com/finance/v3`, page statique du SDK V3 consultée en lecture seule le 2026-11-21 :

`https://static.developer.intuit.com/sdkdocs/qbv3doc/ippphpdevkitv3/entities/files/IPPCustomer.html`

La page courante `developer.intuit.com` du Customer QuickBooks Online n'a pas rendu de schéma. Elle n'est pas utilisée comme preuve.

Aucun dépôt TAGORA consulté (TOS, NEXUS, MESSOR, PULS) ne contient un realm, un identifiant de société QuickBooks, ni un échantillon de client réel. Les compagnies Oliem et Titan du README NEXUS sont des données fictives de démonstration. Elles ne sont pas une correspondance.

ADR-0012 décrit Titan comme une division d'Oliem Solutions, avec X-Plod, Skyline Kuzin et Emoby. Ce texte ne prouve pas une seconde société QuickBooks.

```text
QB_NATIVE_FIELDS=HOLD
QB_CUSTOMER_ID_FORMAT=HOLD
OLIEM_REALM=HOLD
TITAN_REALM=HOLD
NEXUS_ORGANIZATION_MAPPING=HOLD
PRODUCT_EDITION=UNVERIFIED
CONFIDENCE=PUBLIC_SCHEMA_ONLY
COMPANY_INSTANCE=NOT_OBSERVED
```

## Champs publiés, non liés à une société

Ces noms existent dans le schéma public. Ils ne sont pas confirmés sur une société Oliem ou Titan. L'édition QuickBooks Online ou Desktop n'est pas connue. `ContactName` et `AltContactName` sont documentés pour QuickBooks Desktop seulement. Ils ne sont pas adoptés.

| Catégorie logique | Candidat publié | Confiance | Décision |
|---|---|---|---|
| `CONTACT_PHONE` | `PrimaryPhone`, `Mobile`, `AlternatePhone`, valeur `FreeFormNumber`. `Fax` existe aussi | Schéma public. Le champ de contact réel de la société n'est pas connu | Liste positive conservée. Correspondance native en HOLD |
| `CONTACT_EMAIL_IF_NO_INVOICE_OR_SENSITIVE_REDIRECT` | `PrimaryEmailAddr.Address` | Schéma public. Ce courriel primaire peut être celui des factures | Pas de correspondance adoptée. Le risque de redirection le maintient hors écriture tant que l'usage société n'est pas lu |
| `ASSOCIATED_CONTACT_PERSON` | `GivenName`, `FamilyName`, `CompanyName`, `DisplayName`. `ContactName` est Desktop seulement | Aucun champ QBO unique de personne-contact associée n'est établi | Liste positive conservée. Correspondance native en HOLD |
| `VERIFIED_COMMERCIAL_COORDINATES` | `ShipAddr` est l'adresse d'expédition par défaut. Aucun champ publié ne porte ce nom logique | Non établi | Liste positive conservée. Correspondance native en HOLD |
| Identité lisible | `Id`, `DisplayName`, `CompanyName`, `GivenName`, `FamilyName` | Schéma public | Lecture candidate seulement |
| Contrôle de concurrence | `SyncToken` | Schéma public. Requis pour une mise à jour. Une ancienne valeur fait échouer l'écriture | Mécanisme préparé. Exécution non autorisée |

## Lecture candidate pour RELORA

RELORA pourrait, plus tard et seulement en lecture, recevoir le minimum suivant depuis QuickBooks : `Id`, `SyncToken`, `DisplayName`, `CompanyName`, `GivenName`, `FamilyName`, `PrimaryPhone`, `Mobile`, `AlternatePhone`, `PrimaryEmailAddr`, `ShipAddr`, `WebAddr`.

Cette liste n'est pas gelée. Elle n'est pas vérifiée sur une société réelle.

```text
RELORA_READ_SCOPE=HOLD
RELORA_READ_CANDIDATE=DOCUMENTED_NOT_FROZEN
```

## Champs protégés, exclus de toute proposition

Même présents sur la fiche client publiée, ces éléments restent hors liste positive. Une approbation humaine ne les rend pas admissibles.

- `BillAddr` : adresse de facturation.
- `Balance`, `BalanceWithJobs`, `OverDueBalance`, `OpenBalanceDate` : soldes.
- `DefaultTaxCodeRef`, `PrimaryTaxIdentifier`, `SecondaryTaxIdentifier`, `ResaleNum`, `SalesTermRef` : taxes et conditions.
- `CCDetail` : information de carte.
- `Notes` : texte libre QuickBooks. Les conversations, consentements et notes commerciales de PULS n'y sont pas copiés.
- Factures, paiements, prix, données bancaires et historique comptable : hors entité de contact, jamais proposés.

## Provenance PULS

| Origine | Niveau jusqu'à validation humaine | Effet sur QuickBooks |
|---|---|---|
| Agent IA PULS | `UNVERIFIED` | Aucune proposition exécutable. Aucune écriture |
| Valeur déjà validée par un humain nommé | Reste une proposition, une modification à la fois | Pas d'écriture automatique. Pas d'approbation globale |
| Fait entré depuis QuickBooks | Autorité comptable de QuickBooks | RELORA le reçoit. PULS n'écrit pas le retour |

PULS n'a aucun accès direct QuickBooks. Un prospect PULS ne crée pas un client comptable.

## Comparaison et approbation, préparées et non exécutées

Lorsqu'un GO distinct autorisera un jour le runtime, une proposition de liste positive devra encore suivre cet ordre. Ce relevé ne l'autorise pas.

1. Identifier le client par `Customer.Id` dans la bonne société. Un nom, un téléphone ou un courriel seuls ne suffisent pas.
2. Lire la valeur actuelle et le `SyncToken`.
3. Noter la provenance et le niveau `UNVERIFIED` ou validé.
4. Comparer l'ancienne et la nouvelle valeur.
5. Écarter doublon, conflit, et mélange Oliem / Titan.
6. Obtenir une approbation humaine explicite de cette modification.
7. Relire le dossier. Si `Id` ou `SyncToken` a changé, refuser et recommencer. Ne pas écrire.
8. Journaliser l'approbateur, les deux valeurs, la provenance, la société et le résultat.
9. Laisser une trace qui permet de corriger.

Aucune approbation globale. Le runtime reste fermé.

## Écarts avant un gel technique

1. Édition QuickBooks non connue : Online ou Desktop.
2. Realm ou identifiant de société Oliem absent.
3. Realm Titan absent. Titan peut être une division dans la même société, selon ADR-0012, ou une société distincte. Les deux lectures restent ouvertes. L'isolation Oliem / Titan reste obligatoire dans les deux cas.
4. Aucune organisation NEXUS réelle n'est reliée à un `ORGANIZATION_ID` commercial ni à un realm. Les identifiants fictifs NEXUS ne doivent pas être copiés.
5. Format lexical exact de `Customer.Id` non publié dans la page consultée. Le nom publié est `Id`, type `IPPid`, obligatoire pour une mise à jour, avec `SyncToken`.
6. Correspondances natives des quatre catégories de la liste positive non adoptées.
7. File, limites chiffrées, seuils de 15 et 60 minutes, fournisseurs et canal d'alerte restent hors de ce relevé.

```text
TECHNICAL_FREEZE_COMPLETE=NO
EXACT_BLOCKER=NO_AUTHORIZED_READONLY_COMPANY_ACCESS
REQUIRED_AUTHORIZATION=RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO
REQUIRED_AUTHORIZATION_ADDRESSEE=GPT_RELORA
REQUIRED_AUTHORIZATION_FUTURE_EXECUTOR=CURSOR_RELORA
REQUIRED_AUTHORIZATION_SCOPE=READ_ONLY_COMPANY_IDENTITY_ONLY
REQUIRED_AUTHORIZATION_EXCLUDES=OAUTH_WRITE, CUSTOMER_EXPORT, TOKEN_IN_TOS, PULS_CONNECTION, CONFIG_CHANGE, PRODUCTION_CHANGE
SEQUENCE_CONSTRAINT=AFTER_NEXUS_V1_FINALIZATION
NEXT_SINGLE_GO=RELORA_QUICKBOOKS_OLIEM_TITAN_READONLY_IDENTITY_AND_REALM_VERIFICATION_GO
NEXT_SINGLE_GO_AUTHORIZED=NO
TOS_RERUNS_THIS_AUDIT=NO
```

Le prochain GO, s'il est donné plus tard, se limite à l'identité des sociétés en lecture seule : édition, nom affiché, et identifiant de société ou realm pour Oliem et pour Titan, sans jeton, sans export de clients, sans écriture. Il n'est pas autorisé maintenant.
