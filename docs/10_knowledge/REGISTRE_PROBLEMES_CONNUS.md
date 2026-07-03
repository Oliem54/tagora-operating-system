# Registre des problèmes connus — TAGORA Operating System

## Objectif

Documenter les problèmes connus de l'écosystème TAGORA de façon traçable, sans inventer de bugs non validés.

## Portée

Problèmes méthodologiques, documentaires ou opérationnels liés à TOS et, le cas échéant, problèmes généralisables remontés depuis un module (ex. Time). Les bugs purement internes à un module restent d'abord dans le contexte de ce module.

---

## Colonnes

| Colonne | Description |
|---|---|
| ID | Identifiant séquentiel `PROB-XXX` |
| Date | Date d'inscription |
| Module concerné | TOS, Time, Stock Premium, etc. |
| Problème | Description factuelle |
| Gravité | Faible / Moyenne / Haute / Critique |
| Statut | Ouvert / En cours / Résolu / Archivé |
| Impact | Conséquence observée |
| Solution liée | ID `SOL-XXX` si existante |
| Notes | Complément |

---

## Entrées

| ID | Date | Module concerné | Problème | Gravité | Statut | Impact | Solution liée | Notes |
|---|---|---|---|---|---|---|---|---|
| — | — | — | *Aucun problème officiel validé pour l'instant* | — | — | — | — | Les problèmes seront documentés après validation |

---

## Règles

1. **Ne pas inventer de bug réel.**
2. Un problème n'est inscrit qu'après **constat validé** (humain, QA, ou incident documenté).
3. Relier une solution uniquement si elle est validée dans [REGISTRE_SOLUTIONS.md](REGISTRE_SOLUTIONS.md).
4. Aucun secret ni donnée sensible.

## Problèmes à documenter plus tard

Après validation terrain (notamment sur TAGORA Time) :

- Écarts standards vs réalité produit
- Blocages QA ou comptes QA
- Incohérences UX documentées via checklist TDS
- Incidents de processus (validation avant code non respectée, etc.)

## Statut

**Brouillon initial — Phase 3D**
