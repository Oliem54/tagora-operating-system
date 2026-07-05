# Template — Workflow d'orchestration

## Objectif

Fournir le modèle standard pour documenter un **workflow d'orchestration** dans l'écosystème TAGORA (TOF).

## Portée

Toute création ou modification d'un workflow documenté — tous modules. **Ce template ne crée pas de workflow réel.**

---

## Modèle complet

Copier et remplir :

```markdown
# Workflow d'orchestration — [Nom]

## Identification

| Champ | Valeur |
|---|---|
| **Nom du workflow** | [Intitulé lisible] |
| **ID** | ORCH-[MODULE]-XXX |
| **Module source** | [TAGORA Time / TOS / ...] |
| **Module destination** | [Module ou système cible] |
| **Statut** | draft / documented / tested / approved / active / paused / retired |

## Objectif

[Une phrase claire : pourquoi ce workflow existe.]

## Déclencheur

- Type : [événement / cron / manuel / webhook]
- Détail : [ex. Employee Punched In, cron 08:00 lun-ven]

## Entrées

| Donnée | Obligatoire | Source | Notes |
|---|---|---|---|
| [champ] | Oui/Non | [module/API] | [sans secret] |

## Sorties

| Effet | Description |
|---|---|
| [effet] | [Ce qui est produit — notification, brouillon, log] |

## Données interdites

- [Ex. credentials, tokens, mots de passe, salaire si non autorisé]
- Ne jamais documenter de secret dans TOS

## Validation humaine requise

| Point | Requis | Responsable |
|---|---|---|
| [Avant action X] | Oui/Non | [Rôle] |

## Conditions d'arrêt

- Succès : [critère]
- Échec : [critère]
- Timeout : [durée max]
- Annulation : [qui peut annuler]

## Gestion des erreurs

| Erreur | Action |
|---|---|
| [type] | [retry / escalade / arrêt / log] |

## Retry

| Paramètre | Valeur |
|---|---|
| Max tentatives | [N] |
| Backoff | [ex. exponentiel 1m, 5m, 15m] |
| Idempotence | Oui/Non — [comment] |

## Logs attendus

- Début / fin exécution
- Résultat par étape
- Erreurs sans secret
- Format : [ORCHESTRATION_REPORTING_STANDARD.md](../08_orchestration/ORCHESTRATION_REPORTING_STANDARD.md)

## Risques

| Risque | Mitigation |
|---|---|
| [ex. double notification] | [idempotence, dedup] |
| [ex. action sans approbation] | [HITL obligatoire] |

## Notes

[Compléments, liens ADR, dépendances]

## Registre

- Inscrire dans [ORCHESTRATION_REGISTRE.md](../08_orchestration/ORCHESTRATION_REGISTRE.md)
- Propriétaire workflow : [rôle ou personne]
```

---

## Règles

- Compléter avant passage au statut `documented`.
- Aucun workflow `active` sans test et approbation.
- Le workflow **ne remplace pas** la logique métier du module source.
- Aligner avec [WORKFLOW_ENGINE_STANDARD.md](../08_orchestration/WORKFLOW_ENGINE_STANDARD.md).

## Statut

**Créé — Phase 3F**
