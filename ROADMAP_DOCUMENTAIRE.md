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

**Objectif :** Méthode documentaire légère pour décisions, ADR, problèmes, solutions, leçons et validations.

**Livrables réalisés :**

- [x] TKS pilier enrichi — définition, contenu, interdits, liens piliers
- [x] README_ADR — quand créer / ne pas créer, statuts, différences ADR vs note vs standard
- [x] ADR_REGISTRE — ADR-0001 et ADR-0002 indexées
- [x] Dossier `docs/10_knowledge/` — registres décisions, problèmes, solutions, leçons, validations
- [x] REGLES_DE_DECISION — types de décisions, temporaire vs officiel
- [x] REGLES_DE_PRIORISATION — risque, utile avant parfait, anti-blocage
- [x] Section « Phase pilote TKS » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine ADR-0001 et ADR-0002 (registre validations)
- [ ] Première entrée problème/solution après validation terrain

---

### Phase 3E — Standards TAF / agents IA ⏳ Prochaine étape

**Objectif :** Cadre documentaire pour agents IA, prompts, limites d'intervention et Human in the Loop — sans implémentation.

**Livrables prévus :**

- Enrichissement TAF pilier et standards `docs/07_ai/`
- Lien TAF ↔ TKS (décisions IA traçables)
- Application progressive éventuelle à Mail IA / Time si cas d'usage définis
- Aucun agent réel créé dans TOS

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
Phase 3E  Standards TAF / agents IA        ⏳ Prochaine étape
Phase 4   Application sur TAGORA Time      ⏳ À venir
Phase 5   Généralisation écosystème        ⏳ À venir
```

---

## Statut

**Enrichi — Phase 3D** — Mémoire permanente documentée. Phase 3E TAF à démarrer.

## Références

- [TKS](docs/01_piliers/06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md)
- [ADR_REGISTRE](docs/05_adr/ADR_REGISTRE.md)
- [Knowledge System](docs/10_knowledge/README_KNOWLEDGE_SYSTEM.md)
- [REGISTRE_DECISIONS](docs/10_knowledge/REGISTRE_DECISIONS.md)
- [Application progressive TAGORA Time](docs/04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
