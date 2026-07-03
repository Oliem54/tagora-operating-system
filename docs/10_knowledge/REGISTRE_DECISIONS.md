# Registre des décisions — TAGORA Operating System

## Objectif

Tracer les décisions actées de l'écosystème TAGORA, avec ou sans ADR formelle.

## Portée

Décisions méthodologiques et de gouvernance TOS. Les décisions purement internes à un module (ex. détail métier Time) restent dans le contexte du module, sauf si elles impactent l'écosystème.

---

## Colonnes

| Colonne | Description |
|---|---|
| ID | Identifiant séquentiel `DEC-XXX` |
| Date | Date d'acte |
| Sujet | Thème court |
| Décision | Formulation claire |
| Statut | Acté / Accepté initialement / Validé / Remplacé / Archivé |
| Portée | Écosystème, TOS, Time, etc. |
| Impact | Conséquence principale |
| Lien | ADR ou document lié |
| Notes | Complément court |

---

## Décisions actées

| ID | Date | Sujet | Décision | Statut | Portée | Impact | Lien ADR ou document lié | Notes |
|---|---|---|---|---|---|---|---|---|
| DEC-001 | 2026-07-02 | Nature de TOS | TOS n'est pas une application | Accepté initialement | Écosystème | Pas de code métier dans TOS | [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md) | Fondation |
| DEC-002 | 2026-07-02 | Rôle de TOS | TOS est la Constitution méthodologique de l'écosystème TAGORA | Accepté initialement | Écosystème | Référence absolue pour standards et méthodes | [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md), Constitution | — |
| DEC-003 | 2026-07-02 | Projet pilote | TAGORA Time est le premier projet pilote d'application progressive de TOS | Acté | Time + écosystème | Time valide les standards avant généralisation | [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md) | — |
| DEC-004 | 2026-07-02 | Méthode | Documentation avant code pour tout développement important | Accepté initialement | Écosystème | Fiche de validation avant code | [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md) | — |
| DEC-005 | 2026-07-02 | Priorité piliers Time | TQF est le premier pilier appliqué à Time | Acté | Time | QA avant automatisation et production | Phase 3A, `docs/06_qa/` | — |
| DEC-006 | 2026-07-02 | Priorité piliers Time | TDS est le deuxième pilier appliqué à Time | Acté | Time | Design documenté avant refonte UI majeure | Phase 3B, `docs/09_design_system/` | — |
| DEC-007 | 2026-07-02 | Priorité piliers Time | TES est le troisième pilier appliqué à Time | Acté | Time | Validation avant code, sécurité, séparation projets | Phase 3C | — |
| DEC-008 | 2026-07-02 | Séparation modules | Les modules restent indépendants (Time, Stock Premium, Voice, Mail IA, Pulse, Platform) | Acté | Écosystème | Pas de fusion avec TOS ni entre modules sans décision officielle | [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md) | — |
| DEC-009 | 2026-07-03 | Agents IA | Les agents IA TAGORA doivent respecter un périmètre explicite, des interdictions claires, un rapport vérifiable et une validation humaine pour les actions critiques | Acté | Écosystème | Cadre TAF obligatoire pour tout agent | [TAF](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md), [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md) | Phase 3E |

---

## Règles

- Ajouter une ligne pour chaque décision actée significative.
- Si décision structurante → ADR + mise à jour [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md).
- Ne pas inventer de décision non actée.
- Aucun secret dans ce registre.

## Statut

**Brouillon initial — Phase 3D**
