# Roadmap documentaire — TAGORA Operating System

## Objectif

Plan progressif de construction de la documentation officielle du TOS — durable et réutilisable sur plusieurs années.

## Portée

Dépôt `tagora-operating-system` uniquement — sans implémentation technique.

---

## Phases

### Phase 1 — Fondation documentaire ✅ Complétée

Structure `docs/`, constitution, piliers, standards (squelettes), templates, README, Manifeste.

---

### Phase 2 — Constitution + ADR fondateur + pilote Time ✅ Complétée

Constitution, Vision 2030, ADR-0001, plan pilote Time, validation avant code (initiale).

---

### Phase 3A — Standards QA prioritaires ✅ Complétée

TQF, Playwright (doc), comptes/données QA, smoke tests, QA-TIME-001, phase pilote TQF.

---

### Phase 3B — Standards TDS prioritaires ✅ Complétée

Design premium, navigation, palette, typo, composants, accessibilité, checklist revue UI, image de marque, phase pilote TDS.

---

### Phase 3C — Standards TES prioritaires ✅ Complétée

Méthode de développement, validation avant code, sécurité, DevOps, TRF, séparation projets, ADR-0002, fiche validation.

---

### Phase 3D — Standards TKS / mémoire permanente ✅ Complétée

Méthode documentaire légère : décisions, ADR, problèmes, solutions, leçons, validations.

---

### Phase 3E — Standards TAF / agents IA ✅ Complétée

**Objectif :** Cadre documentaire pour agents IA, prompts, limites, Human in the Loop et rapports — sans agent réel.

**Livrables réalisés :**

- [x] TAF pilier enrichi
- [x] AI_AGENT_STANDARD — types, règles rôle/périmètre/rapport/arrêt
- [x] PROMPT_STANDARD — structure prompt TAGORA
- [x] LIMITES_INTERVENTION_IA — interdictions absolues
- [x] HUMAN_IN_THE_LOOP_STANDARD — validations obligatoires
- [x] TEMPLATE_AGENT_IA — template complet
- [x] AGENTS_IA_REGISTRE — rôles documentaires AI-TOS-DOC/GIT/QA-001
- [x] AI_REPORTING_STANDARD — format de rapport
- [x] DEC-009 + VALD-006 à VALD-009
- [x] Section « Phase pilote TAF » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine TAF (VALD-006 à VALD-009)

---

### Phase 3F — Standards TOF / orchestration n8n + LangChain ⏳ Prochaine étape

**Objectif :** Cadre documentaire d'orchestration — workflows, event bus, Human in the Loop — sans workflow réel ni logique métier dans TOF.

**Livrables prévus :**

- Enrichissement TOF pilier et `docs/08_orchestration/`
- Règle : TOF orchestre, ne remplace pas la logique métier
- Lien TAF ↔ TOF
- Aucun workflow n8n / LangChain réel dans TOS

---

### Phase 4 — Application progressive à TAGORA Time

Comptes QA, fixtures, Playwright, revue UI, fiches validation, retours terrain, validations humaines.

---

### Phase 5 — Généralisation écosystème

Stock Premium, Voice, Mail IA, Pulse, Platform.

---

## Vue synthétique

```
Phase 1   Fondation documentaire           ✅ Complétée
Phase 2   Constitution + ADR + pilote      ✅ Complétée
Phase 3A  Standards QA prioritaires        ✅ Complétée
Phase 3B  Standards TDS prioritaires       ✅ Complétée
Phase 3C  Standards TES prioritaires       ✅ Complétée
Phase 3D  Standards TKS / mémoire          ✅ Complétée
Phase 3E  Standards TAF / agents IA        ✅ Complétée
Phase 3F  Standards TOF / orchestration    ⏳ Prochaine étape
Phase 4   Application sur TAGORA Time      ⏳ À venir
Phase 5   Généralisation écosystème        ⏳ À venir
```

---

## Statut

**Enrichi — Phase 3E** — Cadre agents IA documenté. Phase 3F TOF à démarrer.

## Références

- [TAF](docs/01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- [AGENTS_IA_REGISTRE](docs/07_ai/AGENTS_IA_REGISTRE.md)
- [LIMITES_INTERVENTION_IA](docs/07_ai/LIMITES_INTERVENTION_IA.md)
- [HUMAN_IN_THE_LOOP_STANDARD](docs/07_ai/HUMAN_IN_THE_LOOP_STANDARD.md)
- [Application progressive TAGORA Time](docs/04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
