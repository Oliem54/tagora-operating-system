# Template — README application pilote

## Objectif

Modèle de fiche d'identité pour une **application progressive TOS** sur un module pilote — sans modifier le module dans TOS.

## Portée

Premier usage prévu : **TAGORA Time**. Réutilisable pour Stock Premium, Voice, Mail IA, Pulse, Platform.

---

## Modèle à compléter

| Champ | Valeur |
|---|---|
| **Nom du module pilote** | *Ex. TAGORA Time* |
| **Objectif de l'application TOS** | *Ex. Appliquer TQF, TDS, TES par petits lots documentés* |
| **Périmètre autorisé** | Documentation QA, checklist TDS, fiches validation TES, matrices comptes/données QA (sans secrets) |
| **Hors portée** | Code, migration, refonte UI, CRUD, Supabase, déploiement, outil réel |
| **Piliers appliqués** | *Ex. TQF → TDS → TES (ordre Phase 4E)* |
| **Ordre d'application** | 1. Baseline Git · 2. QA doc · 3. Comptes/données QA · 4. TDS · 5. TES · 6. Revue humaine |
| **Responsable** | *Rôle ou personne — sans secret* |
| **Date** | *AAAA-MM-JJ* |
| **Statut** | *Brouillon / En cours / Validé / Reporté* |

### Documents liés

| Document | Lien |
|---|---|
| Paquet Phase 4E | [PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md](../paquets_pilotes/PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md) |
| Validation Phase 4F | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](../paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) |
| Application progressive | [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md) |
| Plan d'action module | *Lien vers plan module si existant* |

### Rappel

> **Documentation avant code** — [ADR-0002](../../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md). Aucun fichier créé dans le module pilote sans validation humaine et respect du paquet 4E/4F.

---

## Statut

**Template — Phase 4G-TOS** — À valider (VALD-039).
