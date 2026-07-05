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

### Phase 3F — Standards TOF / orchestration ✅ Complétée

**Objectif :** Cadre documentaire d'orchestration — workflows, event bus conceptuel, registre, rapports — sans workflow réel ni logique métier dans TOF.

**Livrables réalisés :**

- [x] TOF pilier enrichi
- [x] N8N_STANDARD — rôle futur, types workflows, sécurité, retry
- [x] LANGCHAIN_STANDARD — chaînes IA, distinction agent/orchestration
- [x] WORKFLOW_ENGINE_STANDARD — cycle de vie, règles propriétaire
- [x] EVENT_BUS_STANDARD — contrats événements, exemples documentaires
- [x] ORCHESTRATION_REGISTRE — ORCH-TIME-001, ORCH-TIME-002, ORCH-TOS-001 (brouillon)
- [x] ORCHESTRATION_REPORTING_STANDARD — format rapport
- [x] TEMPLATE_WORKFLOW_ORCHESTRATION
- [x] DEC-010 + VALD-010 à VALD-013
- [x] Section « Phase pilote TOF » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine TOF (VALD-010 à VALD-013)

---

### Phase 3G — Standards TRF / release et déploiement ✅ Complétée

**Objectif :** Enrichir le cadre release, déploiement, rollback, hotfix et gates production — aligné TES, TQF et TOF.

**Livrables réalisés :**

- [x] TRF pilier enrichi
- [x] Dossier `docs/11_release/` — README, checklist, changelog, versioning, rollback, hotfix, release notes
- [x] STANDARD_DEVOPS — environnements local/dev/staging/production
- [x] STANDARD_DEVELOPPEMENT — branches, commits, règles merge
- [x] REGLES_DE_VALIDATION_AVANT_CODE — section validation avant release
- [x] TEMPLATE_RELEASE_CHECKLIST + TEMPLATE_RELEASE_NOTES
- [x] DEC-011 + VALD-014 à VALD-018
- [x] Section « Phase pilote TRF » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine TRF (VALD-014 à VALD-018)

---

### Phase 3H — Standards TMF / monitoring et observabilité ⏳ Prochaine étape

**Objectif :** Définir le cadre documentaire de monitoring, logs, alertes et observabilité — sans outil imposé.

**Livrables prévus :**

- Enrichissement pilier TMF
- Standards logs, alertes, métriques
- Lien TMF ↔ TRF (post-release) et TMF ↔ TOF (workflows)

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
Phase 3F  Standards TOF / orchestration    ✅ Complétée
Phase 3G  Standards TRF / release          ✅ Complétée
Phase 3H  Standards TMF / monitoring       ⏳ Prochaine étape
Phase 4   Application sur TAGORA Time    ⏳ À venir
Phase 5   Généralisation écosystème        ⏳ À venir
```

---

## Statut

**Enrichi — Phase 3G** — Cadre release TRF documenté. Phase 3H TMF à démarrer.

## Références

- [TRF](docs/01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)
- [README Release Framework](docs/11_release/README_RELEASE_FRAMEWORK.md)
- [RELEASE_CHECKLIST_STANDARD](docs/11_release/RELEASE_CHECKLIST_STANDARD.md)
- [TOF](docs/01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md)
- [ORCHESTRATION_REGISTRE](docs/08_orchestration/ORCHESTRATION_REGISTRE.md)
- [EVENT_BUS_STANDARD](docs/08_orchestration/EVENT_BUS_STANDARD.md)
- [TAF](docs/01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- [AGENTS_IA_REGISTRE](docs/07_ai/AGENTS_IA_REGISTRE.md)
- [LIMITES_INTERVENTION_IA](docs/07_ai/LIMITES_INTERVENTION_IA.md)
- [HUMAN_IN_THE_LOOP_STANDARD](docs/07_ai/HUMAN_IN_THE_LOOP_STANDARD.md)
- [Application progressive TAGORA Time](docs/04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
