# Standard — Event Bus

## Objectif

Définir le standard officiel de l'**event bus conceptuel** pour le découplage et la communication asynchrone entre modules TAGORA (TOF).

## Portée

Événements domaine, intégrations inter-modules et déclenchement de workflows. **Aucun event bus n'est implémenté dans ce dépôt** — seuls les **contrats documentaires** sont définis.

---

## Définition d'un Event Bus conceptuel TAGORA

Un **Event Bus TAGORA** est le mécanisme **futur** par lequel un module **émet** un fait domaine et d'autres modules ou workflows **réagissent** — sans couplage direct dans le code métier.

À ce stade :

- les **événements sont des contrats documentés** ;
- l'**implémentation** (Kafka, webhooks, Supabase realtime, autre) fera l'objet d'un ADR ;
- les **exemples ci-dessous ne sont pas implémentés**.

---

## Événements comme contrats, pas comme implémentation immédiate

| Principe | Description |
|---|---|
| **Contrat d'abord** | Nom, schéma, règles documentés avant code |
| **Versionnement** | Compatibilité inter-modules (TES / gouvernance) |
| **Pas de secret** | Données interdites explicites dans chaque contrat |
| **Consommateur idempotent** | Quand applicable — éviter double traitement |
| **Validation humaine** | Flag explicite si action critique en aval |

---

## Format documentaire d'un événement

Chaque type d'événement documenté doit inclure :

| Champ | Description |
|---|---|
| **Nom** | Identifiant lisible (ex. `Employee Punched In`) |
| **Source** | Module émetteur (ex. TAGORA Time) |
| **Destination possible** | Module(s) ou workflow(s) consommateurs potentiels |
| **Déclencheur** | Action métier qui provoque l'émission |
| **Données minimales** | Champs requis (sans secret) |
| **Données interdites** | Ex. mot de passe, token, salaire brut si non autorisé |
| **Règles de sécurité** | Permissions, chiffrement, rétention |
| **Effets attendus** | Ce qu'un consommateur autorisé peut faire |
| **Erreurs possibles** | Échec émission, consommateur indisponible, validation refusée |
| **Validation requise** | Oui / Non — avant effet critique en aval |

Template détaillé : à créer si catalogue s'enrichit (Phase ultérieure).

---

## Exemples documentaires (non implémentés)

> **Avertissement :** ces exemples servent uniquement à illustrer le format. **Aucun n'est implémenté** dans TOS ni dans un module à ce stade.

### Employee Punched In

| Champ | Valeur |
|---|---|
| Nom | Employee Punched In |
| Source | TAGORA Time |
| Destination possible | Workflows notification, audit log |
| Déclencheur | Employé effectue un punch entrant |
| Données minimales | employee_id, timestamp, type=punch_in, company_id |
| Données interdites | credentials, géolocalisation brute si non autorisée |
| Validation requise | Non |

### Employee Punched Out

| Champ | Valeur |
|---|---|
| Nom | Employee Punched Out |
| Source | TAGORA Time |
| Destination possible | Workflows notification, calcul durée (module Time) |
| Déclencheur | Employé effectue un punch sortant |
| Données minimales | employee_id, timestamp, type=punch_out, company_id |
| Données interdites | secrets, données paie |
| Validation requise | Non |

### Timesheet Submitted

| Champ | Valeur |
|---|---|
| Nom | Timesheet Submitted |
| Source | TAGORA Time |
| Destination possible | Workflow approbation, notification superviseur |
| Déclencheur | Employé soumet feuille de temps |
| Données minimales | timesheet_id, employee_id, period, status=submitted |
| Données interdites | montants paie, tokens |
| Validation requise | Oui — approbation humaine avant traitement paie |

### Timesheet Approved

| Champ | Valeur |
|---|---|
| Nom | Timesheet Approved |
| Source | TAGORA Time (action humaine) |
| Destination possible | Export paie, archivage, notification |
| Déclencheur | Superviseur ou direction approuve feuille |
| Données minimales | timesheet_id, approver_id, approved_at |
| Données interdites | secrets, données bancaires |
| Validation requise | Oui — déjà validé par humain à la source |

### Sales Event Created

| Champ | Valeur |
|---|---|
| Nom | Sales Event Created |
| Source | Module ventes (futur / Stock Premium) |
| Destination possible | CRM, reporting, notification |
| Déclencheur | Création événement vente documenté |
| Données minimales | event_id, type, company_id, created_at |
| Données interdites | PII non nécessaire, secrets |
| Validation requise | Non |

### Invoice Paid

| Champ | Valeur |
|---|---|
| Nom | Invoice Paid |
| Source | Module facturation (futur) |
| Destination possible | Comptabilité, notification, archivage |
| Déclencheur | Paiement facture confirmé |
| Données minimales | invoice_id, paid_at, status=paid |
| Données interdites | numéros carte, tokens paiement |
| Validation requise | Selon règle métier module source |

### Support Ticket Created

| Champ | Valeur |
|---|---|
| Nom | Support Ticket Created |
| Source | Module support (futur) |
| Destination possible | Notification équipe, workflow escalade |
| Déclencheur | Ouverture ticket support |
| Données minimales | ticket_id, priority, category, created_at |
| Données interdites | secrets client, credentials |
| Validation requise | Non |

---

## Principes

- Découplage entre émetteurs et consommateurs.
- Contrats d'événements documentés et versionnés.
- Traçabilité des événements significatifs.
- Idempotence des consommateurs lorsque applicable.
- Pas de logique métier critique cachée uniquement dans le bus.

---

## Règles

- Documenter schéma et sémantique de chaque type d'événement.
- Versionner les contrats d'événements (compatibilité modules).
- Logger émissions et échecs de traitement.
- Aligner avec [REGLES_DE_COMPATIBILITE_MODULES.md](../03_gouvernance/REGLES_DE_COMPATIBILITE_MODULES.md).

---

## Éléments à documenter plus tard

- Catalogue complet des événements transverses
- Convention de nommage (ex. `module.action.v1`)
- Choix technologique event bus (ADR)
- Politique retry et dead letter
- Sécurité et authentification des messages

## Statut

**Enrichi — Phase 3F**
