# ADR-0002 — Documentation avant code

## Statut

**Accepté initialement — à valider humainement**

## Date

2026-07-02

---

## Contexte

L'écosystème TAGORA comprend plusieurs modules métier développés en parallèle (Time, Stock Premium, Voice, etc.). Sans règle commune, les risques observés sont :

- Code écrit avant compréhension du besoin ou du périmètre.
- Refontes massives non cadrées, mélangeant plusieurs objectifs.
- QA et UX identifiées **après** le développement.
- Décisions perdues — non reproductibles par une autre personne ou un agent IA.
- Dette méthodologique malgré des standards TQF et TDS documentés.

La Phase 3C (TES) formalise une règle déjà énoncée dans la Constitution : **Documentation → Architecture → Code → QA → Production**.

---

## Décision

**Tout développement important dans l'écosystème TAGORA doit être précédé d'une documentation minimale** couvrant :

1. Le **besoin** et le **périmètre** (inclus / exclu).
2. Les **règles métier** concernées (si applicable).
3. L'**impact UX** (si applicable — alignement TDS).
4. L'**impact QA** (scénarios, comptes QA, smoke tests si parcours critique).
5. Les **risques connus** (sécurité, données, régression).
6. Une **décision ou note de validation** (fiche, ticket, ou ADR).

Les correctifs **mineurs** sans impact métier, UX ou sécurité sont exemptés.

Le format minimal est défini dans [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md).

---

## Raisons

1. **Éviter le chaos** — Clarté avant code réduit rework et régressions.
2. **Aligner TQF et TDS** — QA et UX pensées dès le départ, pas en retrofit.
3. **Traçabilité TKS** — Décisions retrouvables ; onboarding facilité.
4. **Processus léger** — Une fiche courte suffit ; pas de bureaucratie lourde.
5. **Cohérence écosystème** — Même discipline sur Time et futurs modules.

---

## Conséquences positives

- Développeurs, agents IA et gestionnaires partagent le même référentiel avant implémentation.
- Scénarios QA (ex. QA-TIME-001) peuvent être prévus **avant** le merge.
- Revues UX (checklist TDS) intégrables au flux.
- ADR produits au bon moment — quand la décision est encore explicite.
- Réduction des « gros PR surprises ».

---

## Risques

| Risque | Atténuation |
|---|---|
| Processus perçu comme lourd | Fiche minimale ; exemption correctifs mineurs |
| Fiches vides ou boilerplate | 7 prérequis concrets ; validation par pair |
| Blocage innovation | « Important » défini ; pas chaque ligne de code |
| Non-application sur Time | Pilote TES — Time en premier |

---

## Garde-fous

1. **Exemption correctifs mineurs** — Pas de fiche pour typo ou fix isolé sans impact.
2. **Format léger** — Ticket enrichi ou fiche VAL-{MODULE}-{NNN} suffisent.
3. **ADR seulement si significatif** — Architecture, sécurité, multi-modules.
4. **Validation au niveau module** — Pas d'approbation centralisée TOS obligatoire.
5. **Documentation dans TOS = règles** — Les fiches vivent dans les dépôts modules ou tickets.

---

## Impact sur TAGORA Time

- Tout développement Time **important** utilise la fiche ou équivalent **avant** code.
- Alignement avec Phase pilote TES dans [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md).
- Décisions Time impactant l'écosystème → ADR dans TKS.
- Time reste dépôt séparé — fiches dans Time ou outil projet Time.

---

## Impact sur les futurs modules

- Stock Premium, Voice, Mail IA, Pulse, Platform adoptent la même règle à convergence TES.
- Standards validés sur Time = référence pour le format de fiche.
- Décisions transverses → ADR écosystème, pas fiche locale seule.

---

## Modules impactés

- **Écosystème TAGORA** — tous modules.
- **TAGORA Time** — pilote immédiat.
- **TOS** — documente la règle ; n'exécute pas de code.

## Références

- [REGLES_DE_VALIDATION_AVANT_CODE.md](../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md)
- [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [TES](../01_piliers/01_TES_TAGORA_ENGINEERING_SYSTEM.md)
- [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
