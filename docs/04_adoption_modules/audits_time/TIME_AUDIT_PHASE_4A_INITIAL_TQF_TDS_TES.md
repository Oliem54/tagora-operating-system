# Audit initial TAGORA Time — Phase 4A

## 1. Contexte de l'audit

| Élément | Valeur |
|---|---|
| **TOS dépôt** | `C:\dev\tagora-operating-system` |
| **TOS branche** | `main` |
| **TOS HEAD** | `1b5718a7e8d8c7837682e1d1ed855379caec3300` |
| **Time dépôt** | `C:\dev\tagora-time` |
| **Time branche auditée** | `feature/admin-commissions-premium-header-kpi` |
| **Time HEAD audité** | `5d4e39780690c2a93c4bb04b8f7242a686cb8c48` |
| **Time working tree** | **Non propre** — 5 fichiers WIP |
| **Mode** | Lecture seule — **aucun changement dans Time** |

### Fichiers WIP exclus de l'évaluation des écarts TOS

Les fichiers suivants étaient modifiés localement au moment de l'audit et sont **exclus** de l'évaluation des écarts TQF / TDS / TES :

- `src/app/admin/commissions/AdminCommissionsPageClient.tsx`
- `src/app/admin/commissions/acces-direction/AdminCommissionBookAccessClient.tsx`
- `src/app/components/admin/AdminCommissionsMetricCard.tsx`
- `src/app/components/ui/PageHeader.tsx`
- `src/app/globals.css`

> L'audit porte sur l'état **commité** (`5d4e397`) et la structure générale du dépôt, pas sur le polish WIP commissions en cours.

---

## 2. Objectif

- Appliquer **progressivement** TOS à TAGORA Time, premier module pilote.
- Premier audit limité aux piliers **TQF**, **TDS**, **TES**.
- Produire un **plan d'action documentaire** avant toute modification code dans Time.
- **Ne pas corriger** Time dans cette phase.

---

## 3. État documentaire Time

| Document / type | Présent | Notes |
|---|---|---|
| **README.md** | Oui | Installation, déploiement, runbook, observabilité (Sentry optionnel) |
| **docs/** | Oui (minimal) | 1 fichier : `tagora-mfa-sms-prerequisites.md` |
| **ROADMAP.md** | Non | — |
| **CHANGELOG.md** | Non | — |
| **Documentation QA** | Non | Aucun scénario QA, comptes QA ou smoke tests documentés dans Time |
| **Documentation design** | Non | Aucune checklist TDS ou guide UX dans Time |
| **Documentation validation avant code** | Non | Pas de fiche VAL-TIME-XXX ni processus TES documenté |

Références TOS applicables : [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md), [ETAT_MATURITE_TOS.md](../../00_constitution/ETAT_MATURITE_TOS.md).

---

## 4. Audit TQF — QA minimale

### Standards TOS de référence

- [QA_FRAMEWORK_OVERVIEW.md](../../06_qa/QA_FRAMEWORK_OVERVIEW.md)
- [PLAYWRIGHT_STANDARD.md](../../06_qa/PLAYWRIGHT_STANDARD.md)
- [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md)
- [DONNEES_QA_STANDARD.md](../../06_qa/DONNEES_QA_STANDARD.md)
- [SMOKE_TEST_STANDARD.md](../../06_qa/SMOKE_TEST_STANDARD.md)
- [QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md](../../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md)

### Constat Time (lecture seule)

| Élément | État |
|---|---|
| **Scénarios QA documentés** | Absents dans Time ; QA-TIME-001 existe **uniquement dans TOS** (brouillon, non validé terrain) |
| **Smoke tests** | Non détectés — pas de dossier smoke, pas de script dédié |
| **Tests automatisés** | **Vitest** — 18 fichiers `*.test.ts` (lib métier : horodateur, auth/MFA, commissions, notifications) |
| **Playwright / E2E UI** | Non configuré — pas de `playwright.config.*` ; Playwright absent de `package.json` |
| **CI** | `.github/workflows/ci.yml` — lint + `vitest run` + build (pas de gate smoke UI) |
| **Comptes QA documentés** | Non — référence code `STAGING_QA_SUPABASE_PROJECT_REF` dans `mfa.shared.ts` (bypass MFA staging) sans doc alignée TOS |
| **Données QA documentées** | Non — pas de fixtures documentées, pas de procédure reset |

### Gaps

- Écart majeur entre standards TQF (scénarios reproductibles, smoke tests, Playwright futur) et pratique actuelle (tests unitaires lib uniquement).
- Parcours critique **punch in/out** non couvert par test automatisé ni scénario validé dans Time.
- Pas de gate release conforme [SMOKE_TEST_STANDARD.md](../../06_qa/SMOKE_TEST_STANDARD.md).

### Risques

- Régressions UI / parcours employé non détectées avant production.
- Dépendance aux tests unitaires métier sans validation parcours bout-en-bout.
- QA staging MFA documentée implicitement dans le code, pas dans un registre TOS/Time partagé.

### Actions recommandées (documentaires — Phase 4B)

1. Créer dans Time (après validation) : `docs/qa/` minimal — scénarios, comptes QA (sans secrets), procédure reset.
2. Valider humainement QA-TIME-001 (TOS VALD-003) sur interface réelle.
3. Planifier smoke tests manuels puis automatisation Playwright (TOS Phase 4+).
4. Documenter comptes QA par rôle alignés [COMPTES_QA_STANDARD.md](../../06_qa/COMPTES_QA_STANDARD.md).

---

## 5. Audit TDS — UX/UI

### Standards TOS de référence

- [DESIGN_PREMIUM_2027.md](../../09_design_system/DESIGN_PREMIUM_2027.md)
- [TDS_CHECKLIST_REVUE_UI.md](../../09_design_system/TDS_CHECKLIST_REVUE_UI.md)
- [STANDARD_UX_UI.md](../../02_standards/STANDARD_UX_UI.md)
- [NAVIGATION_STANDARD.md](../../09_design_system/NAVIGATION_STANDARD.md)
- [ACCESSIBILITE.md](../../09_design_system/ACCESSIBILITE.md)

### Constat Time (lecture seule)

| Élément | État |
|---|---|
| **Structure app** | Riche — `admin/`, `direction/`, `employe/`, `horodateur/`, `auth/`, etc. |
| **Composants UI réutilisables** | Présents — `components/ui/` (PageHeader, AppCard, cn, UserIdentityBadge…) ; `components/admin/` (metric cards) |
| **PageHeader / dashboards** | PageHeader avec variante `ui-page-header-premium-2027` ; dashboards admin (commissions, paie, alertes…) |
| **Navigation** | Par rôle (admin, direction, employé) — helpers commissions récents sur branche auditée |
| **Accessibilité** | Non auditée en profondeur — pas de doc a11y Time ; composants sans revue checklist TDS |
| **Documentation design Time** | Absente |

### Gaps

- Aucune revue UI formalisée avec [TDS_CHECKLIST_REVUE_UI.md](../../09_design_system/TDS_CHECKLIST_REVUE_UI.md).
- Cohérence visuelle partielle (premium headers en cours sur commissions — WIP exclu).
- Pas de mapping écrans prioritaires Time ↔ standards TDS.

### Risques

- Divergence visuelle entre modules (commissions vs horodateur vs direction).
- Accessibilité non vérifiée systématiquement.

### Actions recommandées (documentaires — Phase 4B)

1. Lister écrans prioritaires : dashboard employé, punch, direction, admin commissions (hors WIP).
2. Appliquer checklist TDS sur 2–3 écrans pilotes (revue humaine, pas refonte).
3. Documenter écarts TDS acceptés temporairement dans Time ou TKS.

---

## 6. Audit TES — Engineering / validation avant code

### Standards TOS de référence

- [STANDARD_DEVELOPPEMENT.md](../../02_standards/STANDARD_DEVELOPPEMENT.md)
- [STANDARD_ARCHITECTURE.md](../../02_standards/STANDARD_ARCHITECTURE.md)
- [STANDARD_SECURITE.md](../../02_standards/STANDARD_SECURITE.md)
- [REGLES_DE_VALIDATION_AVANT_CODE.md](../../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md)
- [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)

### Constat Time (lecture seule)

| Élément | État |
|---|---|
| **État Git** | Branche feature active ; working tree sale (WIP commissions) |
| **Branches / WIP** | Travail en cours non isolé pour audit stable |
| **Documentation avant code** | Absente — pas de fiche VAL-TIME-XXX |
| **Stack** | Next.js 16, React 19, Supabase, Vitest, ESLint, Sentry optionnel |
| **Sécurité visible** | RLS/migrations versionnées (`supabase/migrations/`) ; README mentionne secrets via `.env.example` (**non lu**) ; Sentry configs présentes |
| **CI** | Build + lint + tests unitaires sur PR vers main |
| **Migrations** | Présentes sous `supabase/migrations/` — non analysées en détail (lecture seule structure) |
| **AGENTS.md / CLAUDE.md** | Minimal — règles Next.js agent uniquement |

### Gaps

- Processus [REGLES_DE_VALIDATION_AVANT_CODE.md](../../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md) non adopté dans Time.
- Point Git instable pour audit reproductible.
- Pas de ADR Time vers TKS pour décisions transverses.

### Risques

- Changements importants (commissions, horodateur) sans fiche validation préalable.
- Audit TOS difficile si baseline Git fluctue.

### Actions recommandées (documentaires — Phase 4B)

1. **Stabiliser Git** — décision : commit/push WIP ou basculer audit sur `main` stable.
2. Première **fiche VAL-TIME-001** sur prochain changement important (template TOS).
3. Documenter convention branches Time alignée TRF/TES (`feature/*`, `fix/*`).

---

## 7. Matrice synthèse

| Pilier | Niveau actuel | Écart principal | Risque | Priorité | Action recommandée | Statut |
|---|---|---|---|---|---|---|
| **TQF** | Insuffisant | Pas de scénarios QA Time, pas de smoke, pas Playwright | Régressions parcours punch | **Haute** | Doc QA minimale + valider QA-TIME-001 | À faire |
| **TDS** | Partiel | Composants UI existants ; pas de revue checklist TDS | Incohérence visuelle | **Moyenne** | Checklist sur écrans prioritaires | À faire |
| **TES** | Partiel | CI unitaire OK ; pas validation avant code | Changements non cadrés | **Haute** | Stabiliser Git + fiche VAL-TIME-001 | À faire |

Niveaux utilisés : Conforme initialement / Partiel / Insuffisant / À vérifier.

---

## 8. Plan recommandé Phase 4A → 4B

| Lot | Action | Pilier |
|---|---|---|
| **Lot 1** | Stabiliser le point Git Time (commit WIP, merge, ou auditer `main` @ commit stable) | TES |
| **Lot 2** | Créer documentation QA Time minimale (`docs/qa/` — scénarios, sans secrets) | TQF |
| **Lot 3** | Matrice comptes/données QA documentaire (alignée TOS, hors dépôt secrets) | TQF |
| **Lot 4** | Appliquer checklist TDS sur écrans prioritaires (employé punch, dashboard direction) | TDS |
| **Lot 5** | Utiliser fiche validation avant code sur prochain changement Time significatif | TES |
| **Lot 6** | Validation humaine périmètre audit + plan Phase 4B (VALD-024 à 028 + audit) | TKS |

---

## 9. Interdictions maintenues

- Aucun code créé ou modifié dans Time lors de cet audit.
- Aucune correction Time.
- Aucune migration exécutée.
- Aucun secret lu (`.env`, `.env.local` non consultés).
- Aucune refonte massive proposée.

---

## 10. Décisions ouvertes

| Question | Options |
|---|---|
| **Auditer depuis `main` stable ou branche feature actuelle ?** | A : `main` pour baseline TOS ; B : feature actuelle en excluant WIP (choix actuel Phase 4A) |
| **WIP commissions — commit, push ou isoler avant Phase 4B ?** | À trancher par responsable Time — recommandation : isoler avant audit TDS détaillé |
| **Écrans Time prioritaires pour TDS ?** | Proposition : (1) punch employé / horodateur, (2) dashboard direction, (3) admin commissions (post-WIP) |
| **Scénarios QA obligatoires ?** | Proposition : QA-TIME-001 (punch), puis QA-TIME-002 (permissions), QA-TIME-003 (connexion par rôle) |

---

## 11. Conclusion

- **TAGORA Time peut devenir le pilote TOS** — application mature, tests unitaires, CI, structure UI riche.
- **Audit initial possible et réalisé** — écarts TQF/TDS/TES identifiés, plan par petits lots proposé.
- **Prochaine étape** : validation humaine du périmètre et création du **plan Phase 4B** dans TOS.
- **Ne pas coder** dans Time avant validation du plan et stabilisation Git.

---

## Références

- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [CARTE_DES_10_PILIERS_TOS.md](../../00_constitution/CARTE_DES_10_PILIERS_TOS.md)
- [ETAT_MATURITE_TOS.md](../../00_constitution/ETAT_MATURITE_TOS.md)

## Statut

**Créé — Phase 4A** — Audit lecture seule TQF / TDS / TES. Aucune modification Time.
