# Standard — Rapport d'orchestration

## Objectif

Définir le **format standard** des rapports d'exécution d'orchestration TAGORA — factuels, vérifiables, sans secret.

## Portée

Tout workflow, tâche planifiée ou chaîne d'orchestration (n8n, workflow engine, pipeline documenté) — présent et futur.

---

## Règle fondamentale

**Rapport factuel, vérifiable, sans secret.**

- Décrire ce qui s'est passé — pas interpréter le métier.
- Ne jamais inclure credentials, tokens, `.env`, mots de passe, clés API.
- Permettre audit et reprise par un humain ou un agent TAF autorisé.

Alignement : [AI_REPORTING_STANDARD.md](../07_ai/AI_REPORTING_STANDARD.md) pour rapports agents IA.

---

## Éléments obligatoires

Chaque rapport d'orchestration doit contenir :

| Élément | Description |
|---|---|
| **Workflow** | ID et nom (ex. ORCH-TIME-001) |
| **Module source** | Module à l'origine du déclenchement |
| **Module destination** | Module ou système cible de l'action |
| **Événement déclencheur** | Nom du fait domaine ou cron (si applicable) |
| **Action tentée** | Description courte de l'étape exécutée |
| **Résultat** | Succès / Échec / Partiel / En attente validation |
| **Erreur si applicable** | Message technique sans secret ; code si pertinent |
| **Retry si applicable** | Numéro tentative, prochaine tentative prévue |
| **Validation humaine si applicable** | Requise / Obtenue / Refusée / En attente |
| **Horodatage** | Début et fin (UTC ou timezone documentée) |
| **Prochaine action** | Étape suivante, responsable, ou arrêt |

---

## Format suggéré (markdown)

```markdown
# Rapport d'orchestration — [ID workflow]

| Champ | Valeur |
|---|---|
| Workflow | ORCH-XXX-NNN — [Nom] |
| Module source | [Module] |
| Module destination | [Module] |
| Événement déclencheur | [Nom ou N/A] |
| Action tentée | [Description] |
| Résultat | Succès / Échec / Partiel / En attente |
| Erreur | [Message sans secret ou N/A] |
| Retry | [Tentative N/M ou N/A] |
| Validation humaine | [Statut ou N/A] |
| Début | [ISO 8601] |
| Fin | [ISO 8601] |
| Prochaine action | [Description] |

## Détail (optionnel)

[Facts only — pas de secret]
```

---

## Règles

1. Un rapport par exécution significative ou par batch documenté.
2. Conserver les rapports selon politique rétention module (hors TOS).
3. En cas d'échec critique → escalade documentée dans le registre problèmes si récurrent (TKS).
4. Les rapports alimentent TMF (monitoring) quand observabilité en place.

---

## Éléments à documenter plus tard

- Format JSON machine-readable pour intégration logs
- Rétention et archivage
- Corrélation ID entre événements et workflows
- Dashboard TMF

## Statut

**Créé — Phase 3F**
