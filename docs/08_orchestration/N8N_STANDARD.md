# Standard — n8n

## Objectif

Définir le standard officiel d'utilisation **future** de n8n pour l'orchestration et l'automatisation dans l'écosystème TAGORA (TOF).

## Portée

Workflows n8n transverses — sous réserve que la logique métier critique reste dans les applications. **Aucun workflow n8n réel n'est créé dans ce dépôt.**

---

## Rôle futur de n8n dans l'écosystème TAGORA

n8n est un **outil possible** d'orchestration visuelle : enchaînement de nœuds, webhooks, planification, notifications. Il peut servir à :

- relayer des événements entre modules ;
- envoyer des notifications ou rappels ;
- préparer des rapports ou synthèses ;
- déclencher des validations humaines (sans les remplacer).

**n8n n'est pas obligatoire** à ce stade. Toute décision d'adoption ou de déploiement fera l'objet d'un ADR et d'une validation humaine.

---

## n8n comme outil possible, non obligatoire

| Statut | Description |
|---|---|
| **Documenté** | Ce standard décrit les règles si n8n est retenu |
| **Non imposé** | Un workflow engine ou une autre solution reste possible |
| **Hors TOS** | Les fichiers JSON n8n et credentials ne vivent pas dans le dépôt TOS |
| **Aligné TOF** | n8n orchestre ; il ne remplace pas la logique métier |

---

## Types de workflows possibles

| Type | Exemple documentaire | Validation humaine |
|---|---|---|
| **Notification** | Rappel oubli punch (ORCH-TIME-001) | Non (informatif) |
| **Résumé** | Synthèse hebdomadaire activité Time | Non |
| **Validation** | Préparer dossier pour approbation feuille de temps | Oui — humain approuve |
| **Synchronisation** | Propager statut documenté entre systèmes | Selon criticité |
| **Rappel** | Relance tâche en attente | Non |
| **Escalade** | Alerter responsable si seuil dépassé | Selon règle métier |
| **Rapport** | Rapport QA documentaire (ORCH-TOS-001) | Non |

Chaque workflow doit être inscrit au [ORCHESTRATION_REGISTRE.md](ORCHESTRATION_REGISTRE.md) avant toute implémentation.

---

## Règles de sécurité

1. **Ne jamais stocker de secrets dans les documents TOS** — pas de tokens, mots de passe, clés API dans ce dépôt.
2. **Ne jamais exposer de credentials** — variables d'environnement et vault hors documentation.
3. **Limiter les permissions** — chaque workflow n8n accède au minimum nécessaire.
4. **Journaliser les actions critiques** — conformément à [ORCHESTRATION_REPORTING_STANDARD.md](ORCHESTRATION_REPORTING_STANDARD.md).
5. **Pas de modification production sans gate** — alignement TRF et TQF.

---

## Règles de validation humaine

- Toute action modifiant des **données critiques** (approbation, paie, suppression, correction temps) exige validation humaine **avant** exécution finale.
- n8n peut **préparer** (assembler contexte, notifier, créer brouillon) — pas **décider** à la place de l'humain.
- Aligner avec [HUMAN_IN_THE_LOOP_STANDARD.md](../07_ai/HUMAN_IN_THE_LOOP_STANDARD.md) et TAF.

---

## Règles de retry et d'erreur

| Règle | Description |
|---|---|
| **Retry limité** | Nombre max de tentatives documenté par workflow |
| **Backoff** | Délai croissant entre tentatives si applicable |
| **Idempotence** | Éviter double exécution sur même événement quand possible |
| **Échec définitif** | Logger, alerter responsable, ne pas boucler indéfiniment |
| **Pas de retry aveugle** | Sur erreur métier (403, validation refusée) → arrêt, pas retry |
| **Rapport d'erreur** | Format [ORCHESTRATION_REPORTING_STANDARD.md](ORCHESTRATION_REPORTING_STANDARD.md) |

---

## Règle production

**Aucun workflow n8n en production sans :**

1. **Documentation** — fiche ou template workflow complété, registre à jour ;
2. **Test** — exécution validée en environnement non production ;
3. **Validation humaine** — approbation du propriétaire workflow et responsable module si critique.

Statuts du cycle de vie : voir [WORKFLOW_ENGINE_STANDARD.md](WORKFLOW_ENGINE_STANDARD.md).

---

## Principes

- **Le TOF orchestre ; il ne remplace jamais la logique métier.**
- Workflows documentés, versionnés et traçables.
- Human in the Loop pour étapes sensibles.
- Reprise et gestion d'erreurs explicites.
- Logs d'exécution conservés (sans secret).

---

## Éléments à documenter plus tard

- Conventions de nommage workflows n8n
- Structure des dossiers / export JSON (hors TOS)
- Environnements n8n (dev, staging, prod)
- Catalogue workflows transverses autorisés
- Intégration credentials (hors TOS)
- Monitoring exécutions n8n (TMF)

## Statut

**Enrichi — Phase 3F**
