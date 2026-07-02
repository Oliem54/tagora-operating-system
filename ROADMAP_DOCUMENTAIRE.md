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

**Objectif :** Méthode de développement, validation, sécurité, DevOps, release — sans stack ni pipeline final.

**Livrables réalisés :**

- [x] TES pilier — définition, périmètre, liens piliers
- [x] STANDARD_DEVELOPPEMENT — principes, règles générales
- [x] STANDARD_ARCHITECTURE — séparation modules, ADR
- [x] STANDARD_SECURITE — secrets, environnements, QA
- [x] STANDARD_DEVOPS — principes, lien TRF/TMF
- [x] TRF — release, rollback, changelog
- [x] REGLES_DE_VALIDATION_AVANT_CODE — processus, exemples, ADR vs note
- [x] REGLES_DE_SEPARATION_DES_PROJETS — modules indépendants
- [x] REGLES_DE_COMPATIBILITE_MODULES — compatibilité sans fusion
- [x] FICHE_VALIDATION_AVANT_CODE_TEMPLATE
- [x] ADR-0002 — Documentation avant code
- [x] Section « Phase pilote TES » dans APPLICATION_PROGRESSIVE_TAGORA_TIME
- [ ] Validation humaine ADR-0002
- [ ] Première fiche VAL-TIME sur dépôt Time

---

### Phase 3D — Standards TKS / mémoire permanente ⏳ Prochaine étape

**Objectif :** Consolider la mémoire documentaire de l'écosystème.

**Livrables prévus :**

- Enrichissement TKS pilier et README_ADR
- Processus revue / statuts ADR (proposé → accepté → déprécié)
- Registre décisions et problèmes connus
- Critères « Brouillon → Validé » pour tous standards Phase 3
- Index ADR et lien standards ↔ ADR

---

### Phase 4 — Application progressive à TAGORA Time

Comptes QA, fixtures, Playwright, revue UI, fiches validation, retours terrain.

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
Phase 3D  Standards TKS / mémoire          ⏳ Prochaine étape
Phase 4   Application sur TAGORA Time      ⏳ À venir
Phase 5   Généralisation écosystème        ⏳ À venir
```

---

## Statut

**Enrichi — Phase 3C** — Standards TES documentés. Phase 3D TKS à démarrer.

## Références

- [TES](docs/01_piliers/01_TES_TAGORA_ENGINEERING_SYSTEM.md)
- [ADR-0002](docs/05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [Fiche validation avant code](docs/03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [Application progressive TAGORA Time](docs/04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
