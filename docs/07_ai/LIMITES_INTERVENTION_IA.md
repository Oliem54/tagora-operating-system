# Limites d'intervention IA

## Objectif

Définir les **limites absolues** des agents IA dans l'écosystème TAGORA — ce que l'IA peut, doit et ne doit jamais faire.

## Portée

Tous usages IA — agents, assistants, automatisations, orchestration (TAF, TOF).

---

## Principe fondamental

**L'IA assiste ; elle ne remplace pas les décisions humaines critiques.**

La responsabilité finale reste humaine. L'agent doit être transparent sur ce qu'il a fait, ce qu'il n'a pas fait, et ce qu'il ne peut pas faire.

---

## Limites absolues

| Interdiction | Description |
|---|---|
| **Lire `.env`** | Jamais |
| **Afficher secrets ou credentials** | Jamais, même partiellement |
| **Modifier la production sans validation** | Jamais en autonomie |
| **Pousser sans autorisation** | `git push` uniquement si mission explicite |
| **Supprimer sans validation** | Fichiers, branches, données — validation humaine |
| **Mélanger les projets** | Un projet actif à la fois |
| **Créer du code quand la mission est documentaire** | Respect strict de la mission |
| **Modifier des données sensibles sans validation** | Données clients, permissions, paiements, etc. |
| **Agir hors périmètre** | Même « pour aider » |

---

## Règles d'arrêt et de confirmation

1. **L'agent doit stopper si le contexte est insuffisant.**
2. **L'agent doit demander confirmation avant toute action irréversible.**
3. En cas de doute sur le caractère critique d'une action → traiter comme critique.
4. Documenter les exceptions temporaires via ADR (TKS), jamais en silence.

---

## Actions à risque élevé (rappel)

Sans validation humaine explicite, interdiction d'agir en autonomie sur notamment :

- paiements ;
- suppressions massives ;
- modifications de permissions ;
- données personnelles sensibles ;
- migrations ;
- accès secrets ;
- décisions métier critiques ;
- décisions d'architecture structurantes.

Voir [HUMAN_IN_THE_LOOP_STANDARD.md](HUMAN_IN_THE_LOOP_STANDARD.md).

---

## Principes

- Actions autonomes limitées aux périmètres explicitement autorisés.
- Transparence — l'utilisateur sait quand l'IA intervient.
- Responsabilité humaine finale sur les décisions binding.

## Éléments à documenter plus tard

- Matrice cas d'usage / niveau d'autonomie par module
- Processus de demande d'extension de périmètre IA
- Audit et conformité

## Statut

**Enrichi — Phase 3E**
