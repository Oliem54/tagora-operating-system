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

### Phase 3H — Standards TMF / monitoring et observabilité ✅ Complétée

**Objectif :** Définir le cadre documentaire de monitoring, logs, alertes, métriques, incidents et suivi post-release — sans outil imposé.

**Livrables réalisés :**

- [x] TMF pilier enrichi
- [x] Dossier `docs/12_monitoring/` — README, logs, erreurs, alertes, métriques, incidents, post-release, dashboards
- [x] STANDARD_DEVOPS — section monitoring et observabilité
- [x] TEMPLATE_INCIDENT_REPORT + TEMPLATE_MONITORING_CHECKLIST
- [x] DEC-012 + VALD-019 à VALD-023
- [x] Section « Phase pilote TMF » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine TMF (VALD-019 à VALD-023)

---

### Phase 3I — Consolidation des 10 piliers TOS ✅ Complétée

**Objectif :** Vue cohérente des dix piliers — carte, matrice, maturité, stratégie adoption — avant application terrain Time.

**Livrables réalisés :**

- [x] CARTE_DES_10_PILIERS_TOS.md
- [x] MATRICE_INTERDEPENDANCE_PILIERS.md
- [x] ETAT_MATURITE_TOS.md
- [x] STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md
- [x] README, Manifeste, Constitution — sections consolidation
- [x] APPLICATION_PROGRESSIVE_TAGORA_TIME — ordre consolidé
- [x] DEC-013 + VALD-024 à VALD-028
- [ ] Validation humaine consolidation (VALD-024 à VALD-028)

---

### Phase 4A — Audit d'application progressive sur TAGORA Time ⏳ Prochaine étape

**Objectif :** État des lieux dépôt Time vs standards TOS ; plan premiers lots ; validations humaines prioritaires.

**Livrables prévus :**

- Audit documentaire Time vs TQF/TDS/TES
- Liste écarts et priorités
- Calendrier indicatif validations VALD en attente

---

### Phase 4A — Audit d'application progressive sur TAGORA Time ✅ Complétée

**Objectif :** Premier audit lecture seule Time vs standards TQF, TDS, TES — sans modifier Time.

**Livrables réalisés :**

- [x] Pré-audit Git TOS + Time
- [x] [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](docs/04_adoption_modules/audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md)
- [x] Section Phase 4A dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine périmètre audit et décisions ouvertes

---

### Phase 4B — Plan d'action TAGORA Time TQF/TDS/TES ✅ Complétée

**Objectif :** Plan documentaire par petits lots — QA minimale, checklist TDS, fiche validation TES.

**Livrables réalisés :**

- [x] [TIME_PLAN_PHASE_4B_TQF_TDS_TES.md](docs/04_adoption_modules/plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md)
- [x] Décisions ouvertes DEC-TIME-4B-001 à 005
- [x] Lots 1 à 6 documentés
- [x] Section Phase 4B dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine décisions DEC-TIME-4B-001 à 005

---

### Phase 4C-TOS — Validation avant application pilote ✅ Complétée

**Objectif :** Cadre TOS pour valider humainement les décisions Phase 4B avant toute toucher Time.

**Livrables réalisés :**

- [x] [TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md](docs/04_adoption_modules/validations_time/TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md)
- [x] Critères de passage Phase 4D
- [x] VALD-029 à VALD-033
- [x] Section Phase 4C-TOS dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine DEC-TIME-4B-001 à 005

---

### Phase 4D-TOS — Arbitrage des validations humaines ✅ Complétée

**Objectif :** Registre TOS pour arbitrer VALD-029 à VALD-033 avant toute application sur le module pilote.

**Livrables réalisés :**

- [x] [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](docs/04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md)
- [x] Statuts d'arbitrage et critères autorisation future
- [x] Section Phase 4D-TOS dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [x] Arbitrage humain VALD-029 à VALD-033 (Phase 4D.1-TOS, 2026-07-05)

---

### Phase 4D.1-TOS — Inscription des validations humaines ✅ Complétée

**Objectif :** Inscrire officiellement les arbitrages humains approuvés pour VALD-029 à VALD-033.

**Livrables réalisés :**

- [x] Décisions actées dans TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md
- [x] REGISTRE_VALIDATIONS — VALD-029 à 033 au statut **Validé**
- [x] Note Phase 4D.1 dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [x] Décideur : Martin ST-Gelais — Direction — Date : 2026-07-05

---

### Phase 4E-TOS — Paquet documentaire d'application pilote ✅ Complétée

**Objectif :** Préparer le paquet documentaire TQF / TDS / TES réutilisable avant toute application réelle.

**Livrables réalisés :**

- [x] [PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md](docs/04_adoption_modules/paquets_pilotes/PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md)
- [x] Lots TQF, TDS, TES documentés
- [x] Conditions avant application réelle (checklist)
- [x] Section Phase 4E-TOS dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [x] VALD-034 à VALD-038 inscrites (À faire)
- [x] Validation humaine du paquet 4E (Phase 4F-TOS, 2026-07-05)

---

### Phase 4F-TOS — Validation du paquet pilote ✅ Complétée

**Objectif :** Valider humainement le paquet Phase 4E-TOS et les lots TQF/TDS/TES.

**Livrables réalisés :**

- [x] [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](docs/04_adoption_modules/paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md)
- [x] VALD-034 à VALD-038 au statut **Validé**
- [x] Section Phase 4F-TOS dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [x] Décideur : Martin ST-Gelais — Direction — Date : 2026-07-05

---

### Phase 4G-TOS — Templates d'application pilote ✅ Complétée

**Objectif :** Préparer les templates documentaires réutilisables (QA, TDS, TES) — **sans modifier le module pilote**.

**Livrables réalisés :**

- [x] Dossier [templates_pilotes/](docs/04_adoption_modules/templates_pilotes/README_TEMPLATES_APPLICATION_PILOTE.md)
- [x] 7 templates + README
- [x] Section Phase 4G-TOS dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [x] VALD-039 à VALD-045 inscrites (À faire)
- [ ] Validation humaine templates (Phase 4H-TOS)

---

### Phase 4H-TOS — Validation des templates d'application pilote ⏳ Prochaine étape documentaire

**Objectif :** Valider humainement les templates Phase 4G avant toute instanciation dans un module pilote.

**Condition :** Templates 4G complétés ; VALD-039 à VALD-045 au statut **Validé**.

**Livrables prévus :**

- Décision globale validation templates
- Autorisation ou report de l'instanciation documentaire dans le module pilote

---

### Phase 4D — Documentation minimale dans TAGORA Time ⏳ Conditionnelle (post-arbitrage)

**Objectif :** Créer les premiers documents QA/TDS/TES **dans le dépôt Time** — sans code ni migration.

**Condition :** Arbitrage Phase 4D-TOS + checklist Phase 4C-TOS complète.

**Livrables prévus :**

- `docs/qa/` minimal dans Time
- Matrice comptes / données QA (sans secrets)
- Première checklist TDS écran P1
- Première fiche VAL-TIME si changement planifié

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
Phase 3H  Standards TMF / monitoring     ✅ Complétée
Phase 3I  Consolidation 10 piliers TOS  ✅ Complétée
Phase 4A  Audit application Time       ✅ Complétée
Phase 4B  Plan action Time TQF/TDS/TES ✅ Complétée
Phase 4C-TOS Validation avant application  ✅ Complétée
Phase 4D-TOS Arbitrage validations humaines ✅ Complétée
Phase 4D.1-TOS Inscription validations humaines ✅ Complétée
Phase 4E-TOS Paquet application pilote     ✅ Complétée
Phase 4F-TOS Validation du paquet pilote   ✅ Complétée
Phase 4G-TOS Templates application pilote ✅ Complétée
Phase 4H-TOS Validation templates pilote  ⏳ Prochaine étape documentaire
Phase 4D  Documentation minimale Time       ⏳ Post-validation templates 4H
Phase 4   Application sur TAGORA Time     ⏳ À venir
Phase 5   Généralisation écosystème        ⏳ À venir
```

---

## Statut

**Enrichi — Phase 4G-TOS** — Templates application pilote créés. Phase 4H-TOS — validation templates.

## Références

- [Arbitrage Phase 4D-TOS Time](docs/04_adoption_modules/validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md)
- [Validation Phase 4C-TOS Time](docs/04_adoption_modules/validations_time/TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md)
- [Plan Phase 4B Time](docs/04_adoption_modules/plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md)
- [Audit Phase 4A Time](docs/04_adoption_modules/audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md)
- [Application progressive TAGORA Time](docs/04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [Carte des 10 piliers](docs/00_constitution/CARTE_DES_10_PILIERS_TOS.md)
- [Matrice interdépendance](docs/00_constitution/MATRICE_INTERDEPENDANCE_PILIERS.md)
- [État maturité TOS](docs/00_constitution/ETAT_MATURITE_TOS.md)
- [Stratégie adoption modules](docs/04_adoption_modules/STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md)
- [TMF](docs/01_piliers/10_TMF_TAGORA_MONITORING_FRAMEWORK.md)
- [README Monitoring Framework](docs/12_monitoring/README_MONITORING_FRAMEWORK.md)
- [LOGGING_STANDARD](docs/12_monitoring/LOGGING_STANDARD.md)
- [POST_RELEASE_MONITORING_STANDARD](docs/12_monitoring/POST_RELEASE_MONITORING_STANDARD.md)
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
