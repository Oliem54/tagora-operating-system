# Application progressive — TAGORA Time

## Objectif

Définir le plan d'adoption progressive des standards TOS sur **TAGORA Time**, premier projet pilote officiel de l'écosystème TAGORA.

## Portée

Module **TAGORA Time** uniquement — application métier horodateur / gestion du temps. TOS et Time restent des entités **séparées**.

---

## Pourquoi TAGORA Time est le projet pilote

TAGORA Time est désigné pilote officiel pour les raisons suivantes :

1. **Maturité relative** — Premier candidat naturel pour valider les standards en conditions réelles.
2. **Périmètre maîtrisable** — Domaine métier défini (horodateur, temps) — permet d'itérer sans complexité excessive.
3. **Impact transversal** — Time touche employés, permissions, multi-compagnies — concepts partagés avec TBF et TCP.
4. **Besoin QA fort** — Application critique pour les utilisateurs ; le TQF y apporte une valeur immédiate.
5. **Retour d'expérience** — Les standards validés sur Time deviennent la référence pour Stock Premium, Voice, Mail IA, Pulse et Platform.

Time n'est pas choisi parce qu'il deviendrait TOS. Il est choisi parce qu'il **teste** TOS.

---

## Règle fondamentale : Time reste une application métier indépendante

- **TAGORA Time** = application métier, dépôt séparé, logique horodateur et règles métier Time.
- **TOS** = Constitution documentaire, dépôt séparé, aucune logique métier Time.
- **Ne pas fusionner** Time avec TOS — ni en code, ni en dépôt, ni en responsabilité produit.
- TOS **guide** Time ; Time **implémente** son métier et **adopte** les standards applicables.

---

## Ordre de priorité des piliers

Les piliers TOS ne seront pas tous appliqués en même temps. Ordre de priorité pour Time :

### Priorité 1 — TQF (TAGORA Quality Framework)

**Pourquoi en premier :** Sans QA reproductible, toute adoption de standards est fragile.

| Élément | Objectif sur Time |
|---|---|
| Comptes QA | Jeu de comptes dédiés par rôle, documentés (sans secrets dans TOS). |
| Scénarios reproductibles | Parcours critiques écrits et exécutables par toute l'équipe. |
| Playwright | Automatisation des smoke tests et parcours UI essentiels. |
| Données QA | Fixtures et procédure de reset documentées. |
| Smoke tests | Gate avant release — non négociable. |

Références : `docs/06_qa/`

---

## Phase pilote TQF — QA initiale

**Statut :** En cours (Phase 3A TOS)

TAGORA Time applique le TQF en premier. Cette phase documente **comment** la QA sera structurée avant toute création de tests réels dans le dépôt Time.

### Principes de la phase pilote QA

| Principe | Description |
|---|---|
| **TQF en premier** | Le pilier qualité précède l'automatisation et la livraison production. |
| **Documentation avant tests** | Les standards QA sont écrits dans TOS avant tout fichier `.spec.ts` dans Time. |
| **Comptes et données avant Playwright** | Comptes QA et jeux de données validés dans l'environnement Time avant automatisation. |
| **Scénarios avant code de test** | Chaque parcours critique est documenté (ex. `QA-TIME-001`) et validé humainement. |
| **Pas d'automatisation sans validation** | Aucun test Playwright sans scénario au statut **Validé**. |

### Livrables Phase 3A (dépôt TOS)

- [x] [QA_FRAMEWORK_OVERVIEW.md](../06_qa/QA_FRAMEWORK_OVERVIEW.md) — cadre TQF
- [x] [PLAYWRIGHT_STANDARD.md](../06_qa/PLAYWRIGHT_STANDARD.md) — conventions futures
- [x] [COMPTES_QA_STANDARD.md](../06_qa/COMPTES_QA_STANDARD.md) — rôles QA Time
- [x] [DONNEES_QA_STANDARD.md](../06_qa/DONNEES_QA_STANDARD.md) — données et reset
- [x] [SMOKE_TEST_STANDARD.md](../06_qa/SMOKE_TEST_STANDARD.md) — gate release
- [x] [QA-TIME-001](../06_qa/scenarios_time/QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md) — premier scénario
- [ ] Validation humaine QA-TIME-001
- [ ] Création comptes QA effectifs (dépôt Time)
- [ ] Fixtures et reset (dépôt Time)
- [ ] Automatisation Playwright (dépôt Time — après validation)

### Prochaines scénarios documentaires suggérés

- QA-TIME-002 — Permissions (employé vs direction)
- QA-TIME-003 — Connexion et dashboard par rôle
- QA-TIME-004 — Géolocalisation ou QR (si applicable — à confirmer)

### Priorité 2 — TDS (TAGORA Design System)

**Pourquoi en second :** La signature visuelle TAGORA doit être visible rapidement sur Time.

| Élément | Objectif sur Time |
|---|---|
| Design premium | Interface épurée, professionnelle, lisible. |
| Navigation | Patterns cohérents avec la vision écosystème. |
| Lisibilité | Informations critiques visibles ; détails en vues secondaires. |
| Cohérence visuelle | Alignement palette, typographie, composants (à définir dans TDS). |

Références : `docs/09_design_system/`

---

## Phase pilote TDS — Design initial

**Statut :** En cours (Phase 3B TOS)

Le TDS est le **deuxième pilier** appliqué à TAGORA Time, après le TQF. Cette phase documente **comment** le design premium TAGORA sera structuré avant toute refonte ou modification UI importante dans le dépôt Time.

### Principes de la phase pilote design

| Principe | Description |
|---|---|
| **TDS après TQF** | Qualité testable d'abord ; design aligné ensuite — les deux se renforcent. |
| **Documentation avant refonte UI** | Standards TDS écrits dans TOS avant changements visuels majeurs sur Time. |
| **Pas de modification Time immédiate** | TOS guide ; le dépôt Time applique quand prêt. |
| **Time reste indépendant** | Application métier séparée ; TDS = cadre, pas code dans TOS. |
| **Pas de valeurs finales imposées** | Palette hex et polices validées ultérieurement. |

### Priorité initiale design Time

| Priorité | Domaine |
|---|---|
| 1 | **Navigation** — claire par rôle (employé, superviseur, direction, admin) |
| 2 | **Lisibilité** — hiérarchie typographique, données critiques visibles |
| 3 | **Statuts visuels** — punch actif, terminé, retard, validation, erreur |
| 4 | **Dashboard employé** — action principale (pointage) évidente |
| 5 | **Dashboard direction** — synthèse puis détails |
| 6 | **Erreurs compréhensibles** — messages explicites, visibles |
| 7 | **Cohérence desktop / mobile** — mêmes principes, adaptation responsive |

### Livrables Phase 3B (dépôt TOS)

- [x] [DESIGN_PREMIUM_2027.md](../09_design_system/DESIGN_PREMIUM_2027.md)
- [x] [NAVIGATION_STANDARD.md](../09_design_system/NAVIGATION_STANDARD.md)
- [x] [PALETTE_COULEURS.md](../09_design_system/PALETTE_COULEURS.md) — catégories, sémantique Time
- [x] [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md)
- [x] [COMPOSANTS_UI_STANDARD.md](../09_design_system/COMPOSANTS_UI_STANDARD.md)
- [x] [ACCESSIBILITE.md](../09_design_system/ACCESSIBILITE.md)
- [x] [TDS_CHECKLIST_REVUE_UI.md](../09_design_system/TDS_CHECKLIST_REVUE_UI.md)
- [x] [STANDARD_UX_UI.md](../02_standards/STANDARD_UX_UI.md) — philosophie et liens TDS/TQF
- [x] [STANDARD_IMAGE_DE_MARQUE.md](../02_standards/STANDARD_IMAGE_DE_MARQUE.md)
- [ ] Validation humaine palette et typographie (valeurs finales)
- [ ] Revue UI écrans Time existants avec checklist TDS
- [ ] ADR design si décision impactant l'écosystème

### Priorité 3 — TES (TAGORA Engineering System)

**Pourquoi en troisième :** Une fois QA et design cadrés, la méthode de développement structure le reste.

| Élément | Objectif sur Time |
|---|---|
| Validation avant code | Checklist légère avant tout développement important. |
| Documentation préalable | Besoin, périmètre, critères d'acceptation écrits. |
| ADR | Décisions architecturales Time impactant l'écosystème → TKS. |
| Alignement TRF | Workflow Git/PR/CI quand applicable au dépôt Time. |

Références : `docs/03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md`

---

## Phase pilote TES — Méthode de développement

**Statut :** En cours (Phase 3C TOS)

Le TES est le **troisième pilier** appliqué à TAGORA Time, après TQF et TDS. Cette phase documente **comment** la méthode de développement, validation, sécurité et livraison structurent le travail **avant** modification du dépôt Time.

### Principes de la phase pilote TES

| Principe | Description |
|---|---|
| **TES après TQF et TDS** | Qualité et design cadrés ; méthode d'ingénierie ensuite |
| **Validation avant code** | Aucun développement Time important sans fiche ou note ([ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)) |
| **Time reste indépendant** | Application métier séparée ; TOS documente, ne modifie pas Time |
| **Décisions dans leur contexte** | Fiches/ADR dans Time ou TKS selon périmètre |
| **Pas de stack imposée** | Principes TES sans technologie finale |

### Priorités initiales TES sur Time

| Priorité | Domaine |
|---|---|
| 1 | **Validation avant code** — fiche VAL-TIME-XXX pour changements importants |
| 2 | **Séparation des projets** — Time ≠ TOS ≠ autres modules |
| 3 | **Sécurité des secrets** — jamais dans TOS ; environnements séparés |
| 4 | **Préparation QA avant production** — smoke tests gate release |
| 5 | **Traçabilité des décisions** — ADR si impact écosystème |

### Livrables Phase 3C (dépôt TOS)

- [x] [01_TES_TAGORA_ENGINEERING_SYSTEM.md](../01_piliers/01_TES_TAGORA_ENGINEERING_SYSTEM.md)
- [x] [STANDARD_DEVELOPPEMENT.md](../02_standards/STANDARD_DEVELOPPEMENT.md)
- [x] [STANDARD_ARCHITECTURE.md](../02_standards/STANDARD_ARCHITECTURE.md)
- [x] [STANDARD_SECURITE.md](../02_standards/STANDARD_SECURITE.md)
- [x] [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md)
- [x] [09_TRF_TAGORA_RELEASE_FRAMEWORK.md](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)
- [x] [REGLES_DE_VALIDATION_AVANT_CODE.md](../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md) — enrichi
- [x] [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
- [x] [REGLES_DE_COMPATIBILITE_MODULES.md](../03_gouvernance/REGLES_DE_COMPATIBILITE_MODULES.md)
- [x] [FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [x] [ADR-0002 — Documentation avant code](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [ ] Première fiche VAL-TIME-001 sur changement réel (dépôt Time)
- [ ] Validation humaine ADR-0002

### Priorité 4 — TKS (TAGORA Knowledge System)

**Pourquoi en quatrième :** La mémoire documentaire consolide ce qui est appris sur Time.

| Élément | Objectif sur Time |
|---|---|
| ADR | Décisions Time significatives pour l'écosystème. |
| Retours d'expérience | Écarts, ajustements standards, leçons apprises. |
| Problèmes connus | Registre partagé via TKS. |

Références : `docs/05_adr/`, `docs/10_knowledge/`

---

## Phase pilote TKS — Mémoire permanente

**Statut :** En cours (Phase 3D TOS)

Le TKS est le **quatrième pilier** appliqué à TAGORA Time, après TQF, TDS et TES. Cette phase documente **comment** les décisions, problèmes, solutions et leçons restent traçables — sans transformer TOS en application documentaire ni absorber Time.

### Principes de la phase pilote mémoire

| Principe | Description |
|---|---|
| **TKS après TQF, TDS et TES** | Qualité, design et méthode d'abord ; mémoire pour ne pas perdre le fil |
| **Décisions Time traçables** | Les décisions importantes sont datées, statutées et liées (registre ou ADR si écosystème) |
| **Problèmes connus séparés** | Les problèmes Time sont documentés dans leur contexte ; remontée TOS seulement si généralisable |
| **Solutions reliées aux problèmes** | Pas de solution orpheline ; pas de solution inventée |
| **ADR TOS ≠ doc interne Time** | Les ADR écosystème ne remplacent pas la documentation métier Time |
| **Time reste indépendant** | Application métier séparée ; TOS documente la méthode mémoire |

### Priorités initiales TKS sur Time

| Priorité | Domaine |
|---|---|
| 1 | Traçabilité des décisions Time importantes |
| 2 | Problèmes connus Time documentés séparément (après validation) |
| 3 | Solutions validées reliées aux problèmes |
| 4 | Leçons apprises du pilote remontées vers TOS si réutilisables |
| 5 | Validations humaines (ADR, QA-TIME-001, checklist TDS, fiche VAL) |

### Livrables Phase 3D (dépôt TOS)

- [x] [06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md](../01_piliers/06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md)
- [x] [README_ADR.md](../05_adr/README_ADR.md) — enrichi
- [x] [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md)
- [x] [docs/10_knowledge/](../10_knowledge/README_KNOWLEDGE_SYSTEM.md) — registres
- [x] [REGLES_DE_DECISION.md](../03_gouvernance/REGLES_DE_DECISION.md) — enrichi
- [x] [REGLES_DE_PRIORISATION.md](../03_gouvernance/REGLES_DE_PRIORISATION.md) — enrichi
- [ ] Validation humaine ADR-0001 / ADR-0002
- [ ] Première entrée problème/solution Time après constat validé

---

## Phase pilote TAF — Agents IA encadrés

**Statut :** Cadre documenté (Phase 3E TOS) — application dans Time **après** TQF, TDS, TES et TKS

Le TAF définit comment les agents IA pourront aider TAGORA Time **sans** remplacer les décisions métier ni agir hors périmètre.

### Principes

| Principe | Description |
|---|---|
| **Ordre des piliers** | TAF appliqué à Time seulement **après** TQF, TDS, TES et TKS |
| **Périmètre documenté** | Aucun agent IA ne doit agir dans Time sans périmètre documenté (template + registre) |
| **Limites d'intervention** | Respect strict de [LIMITES_INTERVENTION_IA.md](../07_ai/LIMITES_INTERVENTION_IA.md) |
| **Métier humain** | Les décisions métier Time restent humaines |
| **Aide autorisée** | Documenter, vérifier, résumer, préparer des rapports |
| **Interdit sans validation** | Modifier des données critiques, production, secrets, push non autorisé |

### Ce que les agents pourront faire (plus tard, dans le contexte Time)

- Aider à documenter des scénarios QA ou des écarts standards.
- Vérifier la présence de fichiers ou la cohérence documentaire.
- Résumer des décisions ou préparer des rapports.
- Préparer des fiches de validation avant code.

### Ce qu'ils ne doivent pas faire

- Modifier des données critiques Time sans validation humaine.
- Lire ou afficher des secrets.
- Mélanger le dépôt Time et le dépôt TOS dans une même action non cadrée.
- Remplacer une décision métier (punch, permissions, rapports direction).

### Livrables Phase 3E (dépôt TOS)

- [x] [04_TAF_TAGORA_AI_FRAMEWORK.md](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- [x] Standards `docs/07_ai/` enrichis
- [x] [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md)
- [x] [AI_REPORTING_STANDARD.md](../07_ai/AI_REPORTING_STANDARD.md)
- [x] [TEMPLATE_AGENT_IA.md](../99_templates/TEMPLATE_AGENT_IA.md)
- [ ] Validation humaine TAF (VALD-006 à VALD-009)
- [ ] Premier agent Time documenté (hors TOS) quand cas d'usage défini

---

## Phase pilote TOF — Orchestration contrôlée

**Statut :** Cadre documenté (Phase 3F TOS) — application dans Time **après** TQF, TDS, TES, TKS et TAF

Le TOF définit comment les workflows et événements pourront coordonner TAGORA Time **sans** remplacer la logique métier Time ni implémenter n8n / LangChain / event bus dans TOS.

### Principes

| Principe | Description |
|---|---|
| **Ordre des piliers** | TOF appliqué à Time seulement **après** TQF, TDS, TES, TKS et TAF |
| **Séparation orchestration / métier** | Workflows Time (notification, rappel) ≠ règles punch, congés, approbation |
| **Documentation avant implémentation** | ORCH-TIME-XXX documenté et inscrit au registre avant tout outil réel |
| **Événements comme contrats** | `Employee Punched In`, `Timesheet Submitted`, etc. — documentés, non implémentés dans TOS |
| **Validation humaine actions critiques** | Approbation feuille de temps, paie, suppression, modification temps = humain |
| **Time indépendant** | Application métier séparée ; TOF = cadre TOS, pas code Time |

### Ce que l'orchestration pourra faire (plus tard, dans le contexte Time)

- Notifier un oubli de punch (ORCH-TIME-001 — brouillon).
- Préparer le contexte d'une validation de feuille de temps (ORCH-TIME-002 — brouillon).
- Logger des exécutions selon [ORCHESTRATION_REPORTING_STANDARD.md](../08_orchestration/ORCHESTRATION_REPORTING_STANDARD.md).

### Ce qu'elle ne doit pas faire

- Calculer ou modifier des heures travaillées sans validation humaine.
- Approuver une feuille de temps à la place d'un superviseur.
- Contourner les permissions Time.
- Lire ou transporter des secrets.

### Livrables Phase 3F (dépôt TOS)

- [x] [05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md)
- [x] Standards `docs/08_orchestration/` enrichis
- [x] [ORCHESTRATION_REGISTRE.md](../08_orchestration/ORCHESTRATION_REGISTRE.md)
- [x] [ORCHESTRATION_REPORTING_STANDARD.md](../08_orchestration/ORCHESTRATION_REPORTING_STANDARD.md)
- [x] [TEMPLATE_WORKFLOW_ORCHESTRATION.md](../99_templates/TEMPLATE_WORKFLOW_ORCHESTRATION.md)
- [ ] Validation humaine TOF (VALD-010 à VALD-013)
- [ ] Première fiche ORCH-TIME complète sur cas réel (dépôt Time — après validation)

---

## Phase pilote TRF — Release contrôlée

**Statut :** Cadre documenté (Phase 3G TOS) — application dans Time **après** TQF, TDS, TES, TKS, TAF et TOF

Le TRF définit comment TAGORA Time pourra être **livré en production** de façon traçable, validée et réversible — **sans** créer de pipeline CI/CD dans TOS.

### Principes

| Principe | Description |
|---|---|
| **Ordre des piliers** | TRF appliqué à Time seulement **après** TQF, TDS, TES, TKS, TAF et TOF |
| **Release documentée** | Chaque release Time importante = checklist + changelog + notes si impact utilisateur |
| **Changements critiques** | Validation QA (TQF) + validation humaine obligatoires |
| **Migrations identifiées** | Schéma ou données — documentées avant release ; rollback prévu |
| **Hotfix limités** | Périmètre minimal ; traçabilité ; revue post-hotfix |
| **Rollback anticipé** | Plan écrit avant changements critiques (permissions, punch, paie) |
| **Time indépendant** | Application métier séparée ; TRF = cadre TOS, pas déploiement depuis TOS |

### Ce que TRF encadrera (plus tard, dans le contexte Time)

- Branches `feature/*`, `fix/*`, `hotfix/*` alignées sur standards TES.
- Versioning semver par release Time.
- Smoke tests gate avant promotion staging → production.
- Changelog et release notes pour releases visibles.

### Ce que TRF n'autorise pas

- Release parce que « ça marche en local ».
- Déploiement production sans QA minimale.
- Hotfix fourre-tout ou sans traçabilité.
- Rollback improvisé sur production critique.

### Livrables Phase 3G (dépôt TOS)

- [x] [09_TRF_TAGORA_RELEASE_FRAMEWORK.md](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)
- [x] Standards `docs/11_release/` (checklist, changelog, versioning, rollback, hotfix, release notes)
- [x] [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md) — environnements enrichis
- [x] [STANDARD_DEVELOPPEMENT.md](../02_standards/STANDARD_DEVELOPPEMENT.md) — branches et commits
- [x] [REGLES_DE_VALIDATION_AVANT_CODE.md](../03_gouvernance/REGLES_DE_VALIDATION_AVANT_CODE.md) — validation avant release
- [x] [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md)
- [x] [TEMPLATE_RELEASE_NOTES.md](../99_templates/TEMPLATE_RELEASE_NOTES.md)
- [ ] Validation humaine TRF (VALD-014 à VALD-018)
- [ ] Première checklist release remplie sur changement Time réel

---

## Phase pilote TMF — Monitoring et observabilité

**Statut :** Cadre documenté (Phase 3H TOS) — application dans Time **après** TQF, TDS, TES, TKS, TAF, TOF et TRF

Le TMF définit comment TAGORA Time pourra rester **observable en production** — logs, erreurs, alertes, incidents et suivi post-release — **sans** créer d'outil de monitoring dans TOS.

### Principes

| Principe | Description |
|---|---|
| **Ordre des piliers** | TMF appliqué à Time seulement **après** TQF, TDS, TES, TKS, TAF, TOF et TRF |
| **Logs sans secret** | Stratégie logs documentée — punch, auth, permissions |
| **Erreurs critiques détectables** | Punch, GPS, feuilles de temps, permissions |
| **Suivi post-release** | Releases Time importantes surveillées après déploiement |
| **Incidents documentés** | Incidents validés remontés TKS si leçon généralisable |
| **Time indépendant** | Application métier séparée ; TMF = cadre TOS |

### Ce que TMF encadrera (plus tard, dans le contexte Time)

- Logs structurés sans mot de passe ni token.
- Classification erreurs punch / auth / sync.
- Checklist monitoring post-release après déploiement critique.
- Rapport incident si impact utilisateur significatif.

### Ce que TMF n'autorise pas

- Secrets ou PII inutiles dans logs ou alertes.
- Monitoring sans action possible (bruit).
- Remplacement du QA ou des décisions métier humaines.

### Livrables Phase 3H (dépôt TOS)

- [x] [10_TMF_TAGORA_MONITORING_FRAMEWORK.md](../01_piliers/10_TMF_TAGORA_MONITORING_FRAMEWORK.md)
- [x] Standards `docs/12_monitoring/` (logs, erreurs, alertes, métriques, incidents, post-release, dashboards)
- [x] [STANDARD_DEVOPS.md](../02_standards/STANDARD_DEVOPS.md) — section monitoring
- [x] [TEMPLATE_INCIDENT_REPORT.md](../99_templates/TEMPLATE_INCIDENT_REPORT.md)
- [x] [TEMPLATE_MONITORING_CHECKLIST.md](../99_templates/TEMPLATE_MONITORING_CHECKLIST.md)
- [ ] Validation humaine TMF (VALD-019 à VALD-023)
- [ ] Première checklist monitoring remplie après release Time réelle

---

## Phase 4A — Audit initial TQF / TDS / TES

**Statut :** Audit documentaire réalisé (lecture seule Time) — **aucun changement dans Time**

| Élément | Valeur |
|---|---|
| **Time branche auditée** | `feature/admin-commissions-premium-header-kpi` |
| **Time HEAD audité** | `5d4e39780690c2a93c4bb04b8f7242a686cb8c48` |
| **WIP exclu** | 5 fichiers commissions / PageHeader / globals.css |
| **Piliers audités** | TQF, TDS, TES uniquement |
| **Rapport** | [TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md](audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) |

Priorité confirmée : **TQF → TDS → TES** avant TKS, TAF, TOF, TRF, TMF en application terrain.

---

## Phase 4B — Plan d'action TQF / TDS / TES

**Statut :** Plan documentaire réalisé — **aucun changement dans Time**

| Élément | Description |
|---|---|
| **Source** | Transforme l'audit [Phase 4A](audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md) en lots d'action |
| **Plan** | [TIME_PLAN_PHASE_4B_TQF_TDS_TES.md](plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md) |
| **Priorité** | Lot 1 stabilisation Git → QA minimale → TDS écrans P1 → fiche validation TES |
| **Décisions ouvertes** | DEC-TIME-4B-001 à DEC-TIME-4B-005 — validation humaine requise |
| **Phase 4C** | Premiers documents dans Time (après validation) — voir Phase 4D |

---

## Phase 4C-TOS — Validation avant application pilote

**Statut :** Cadre documentaire réalisé — **TOS reste le projet actif ; Time = référence pilote uniquement**

| Élément | Description |
|---|---|
| **Objectif** | Valider humainement DEC-TIME-4B-001 à 005 avant toute modification Time |
| **Document** | [TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md](validations_time/TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md) |
| **Règle** | **Aucune modification Time** tant que validations non actées |
| **Phase 4D** | Documentation minimale dans Time — **uniquement après** validation Phase 4C-TOS |

Validations registre : VALD-029 à VALD-033.

---

## Phase 4D-TOS — Arbitrage des validations humaines

**Statut :** Arbitrage acté — **Phase 4D.1-TOS complétée** (2026-07-05)

| Élément | Description |
|---|---|
| **Objectif** | Documenter les décisions humaines VALD-029 à VALD-033 |
| **Document** | [TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md](validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md) |
| **Décideur** | Martin ST-Gelais — Direction |
| **Résultat** | Autorisé à préparer une application future (documentaire uniquement) |
| **Règle** | TOS documente ; Time reste autonome et non modifié |

### Note Phase 4D.1-TOS (2026-07-05)

- Les validations **VALD-029 à VALD-033** ont été arbitrées humainement le **2026-07-05**.
- Les **recommandations TOS sont validées** par la direction.
- Cette validation **autorise seulement la préparation documentaire** d'une future application.
- Elle **n'autorise pas encore** de code, migration, refonte ou modification réelle du module pilote.

---

## Phase 4E-TOS — Paquet documentaire d'application pilote

**Statut :** Paquet documentaire réalisé — **aucune modification du module pilote**

| Élément | Description |
|---|---|
| **Objectif** | Préparer le cadre réutilisable TQF / TDS / TES avant toute application réelle |
| **Document** | [PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md](paquets_pilotes/PAQUET_PHASE_4E_APPLICATION_PILOTE_TQF_TDS_TES.md) |
| **Lots préparés** | QA minimale, revue UX/UI écrans P1, fiche validation avant code |
| **Règle** | Phase 4E prépare **seulement** le paquet documentaire — aucune modification réelle du module pilote |

### Note Phase 4E-TOS

- Phase 4E **prépare seulement le paquet documentaire** d'une future application.
- **Aucune modification réelle** du module pilote dans cette phase.
- **TQF, TDS et TES** sont les premiers lots préparés (scénarios QA, checklist TDS, fiche TES).
- La **prochaine étape** dépend d'une **validation humaine du paquet 4E** (Phase 4F-TOS).

---

## Phase 4F-TOS — Validation du paquet pilote

**Statut :** Validation humaine actée — **2026-07-05**

| Élément | Description |
|---|---|
| **Objectif** | Valider humainement le paquet Phase 4E et les lots TQF/TDS/TES |
| **Document** | [VALIDATION_PHASE_4F_PAQUET_PILOTE.md](paquets_pilotes/VALIDATION_PHASE_4F_PAQUET_PILOTE.md) |
| **Décideur** | Martin ST-Gelais — Direction |
| **Résultat** | Paquet 4E approuvé comme cadre documentaire préparatoire |

### Note Phase 4F-TOS (2026-07-05)

- **VALD-034 à VALD-038** sont validées.
- Le **paquet 4E** est approuvé comme cadre documentaire.
- Cette validation **n'autorise aucune modification réelle** du module pilote (pas de code, migration, refonte).
- La **prochaine étape reste dans TOS** : préparation des templates d'application pilote (Phase 4G-TOS).

---

## Phase 4G-TOS — Templates d'application pilote

**Statut :** Templates documentaires réalisés — **aucune modification du module pilote**

| Élément | Description |
|---|---|
| **Objectif** | Modèles réutilisables TQF / TDS / TES pour application progressive |
| **Dossier** | [templates_pilotes/](templates_pilotes/README_TEMPLATES_APPLICATION_PILOTE.md) |
| **Couverture** | QA, comptes QA, données QA, checklist TDS, validation avant code, plan application |

### Note Phase 4G-TOS

- Des **templates génériques** ont été préparés dans TOS.
- Ils **ne modifient pas** le module pilote.
- Ils couvrent **QA, données QA, comptes QA, revue TDS et validation avant code**.
- Ils ne serviront **qu'après nouvelle validation humaine** (Phase 4H-TOS — VALD-039 à VALD-045).

---

## Phase 4H-TOS — Validation des templates d'application pilote

**Statut :** Validation humaine actée — **2026-07-05**

| Élément | Description |
|---|---|
| **Objectif** | Valider les templates Phase 4G comme modèles documentaires TOS |
| **Document** | [VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md](templates_pilotes/VALIDATION_PHASE_4H_TEMPLATES_APPLICATION_PILOTE.md) |
| **Décideur** | Martin ST-Gelais — Direction |
| **Résultat** | Kit documentaire réutilisable validé — module pilote intact |

### Note Phase 4H-TOS (2026-07-05)

- **VALD-039 à VALD-045** sont validées.
- Les **templates Phase 4G** sont approuvés comme modèles documentaires TOS.
- Cette validation **n'autorise aucune modification réelle** du module pilote (pas de code, migration, refonte).
- La **prochaine étape reste dans TOS** : Phase 4I-TOS — paquet final de transition.

---

## Phase 4I-TOS — Paquet final de transition

**Statut :** Paquet de transition réalisé — **aucune modification du module pilote**

| Élément | Description |
|---|---|
| **Objectif** | Regrouper les conditions de passage vers une future application documentaire |
| **Document** | [PAQUET_FINAL_PHASE_4I_TRANSITION_APPLICATION_DOCUMENTAIRE.md](paquets_pilotes/PAQUET_FINAL_PHASE_4I_TRANSITION_APPLICATION_DOCUMENTAIRE.md) |
| **Règle** | Toute application future devra être validée séparément (Phase 4J) |

### Note Phase 4I-TOS

- Phase 4I **regroupe les conditions de passage** vers une future application documentaire.
- Elle **ne modifie pas** le module pilote.
- Elle rappelle que **toute application future** devra être validée séparément.
- Le **module pilote reste autonome** — TOS documente, n'implémente pas.

---

## Phase 4J-TOS — Validation du passage vers instanciation documentaire

**Statut :** Validation humaine actée — **2026-07-05**

| Élément | Description |
|---|---|
| **Objectif** | Valider humainement le passage vers une future instanciation documentaire |
| **Document** | [VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md](paquets_pilotes/VALIDATION_PHASE_4J_PASSAGE_INSTANCIATION_DOCUMENTAIRE.md) |
| **Décideur** | Martin ST-Gelais — Direction |
| **Résultat** | Passage vers instanciation documentaire validé comme principe TOS — module pilote intact |

### Note Phase 4J-TOS (2026-07-05)

- **VALD-046 à VALD-049** sont validées.
- Le **paquet final 4I** est approuvé comme cadre de transition.
- Cette validation **n'autorise aucune modification réelle** du module pilote (pas de code, migration, refonte).
- Toute **future instanciation documentaire** devra être validée séparément avec **dépôt, branche, périmètre et fichiers autorisés** explicitement nommés.
- La **prochaine étape reste dans TOS** : Phase 4K-TOS — plan d'instanciation documentaire ciblée.

---

## Phase 4K-TOS — Plan d'instanciation documentaire ciblée

**Statut :** Plan documentaire réalisé — **aucune modification du module pilote**

| Élément | Description |
|---|---|
| **Objectif** | Nommer explicitement module, dépôt, branche, périmètre et fichiers documentaires futurs |
| **Document** | [PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](plans_instanciation/PLAN_PHASE_4K_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) |
| **Module cible** | TAGORA Time (référence uniquement) |
| **Dépôt cible référencé** | `C:\dev\tagora-time` — **non ouvert** |
| **Règle** | Cette phase n'autorise aucune création dans TAGORA Time |

### Note Phase 4K-TOS

- Phase 4K **nomme TAGORA Time** comme module cible futur.
- Le **dépôt cible** est seulement référencé, **pas ouvert**.
- Le plan **liste les fichiers documentaires futurs proposés** (11 fichiers Markdown).
- Cette phase **n'autorise aucune création** dans TAGORA Time.
- La **prochaine étape reste dans TOS** : Phase 4L-TOS — validation humaine du plan 4K (VALD-050 à VALD-056).

---

## Phase 4L-TOS — Validation du plan d'instanciation documentaire ciblée

**Statut :** Validation humaine actée — **2026-07-05**

| Élément | Description |
|---|---|
| **Objectif** | Valider humainement le plan Phase 4K comme cadre documentaire préparatoire |
| **Document** | [VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md](plans_instanciation/VALIDATION_PHASE_4L_PLAN_INSTANCIATION_DOCUMENTAIRE_CIBLEE.md) |
| **Décideur** | Martin ST-Gelais — Direction |
| **Résultat** | Plan 4K validé — TAGORA Time reste cible future, dépôt non ouvert |

### Note Phase 4L-TOS (2026-07-05)

- **VALD-050 à VALD-056** sont validées.
- Le **plan 4K** est approuvé comme cadre documentaire.
- **TAGORA Time reste seulement une cible future** — dépôt non ouvert, non modifié.
- Cette validation **n'autorise pas l'ouverture ni la modification** de TAGORA Time.
- Toute **étape future** devra être validée séparément (Phase 4M-TOS).

---

## Phase 4M-TOS — Autorisation d'ouverture contrôlée du dépôt cible

**Statut :** Cadre d'autorisation documentaire réalisé — **aucune ouverture du dépôt cible**

| Élément | Description |
|---|---|
| **Objectif** | Préparer l'autorisation documentaire d'ouverture contrôlée limitée à une vérification Git de surface |
| **Document** | [AUTORISATION_PHASE_4M_OUVERTURE_CONTROLEE_DEPOT_CIBLE.md](plans_instanciation/AUTORISATION_PHASE_4M_OUVERTURE_CONTROLEE_DEPOT_CIBLE.md) |
| **Dépôt cible prévu** | `C:\dev\tagora-time` — **non ouvert** |
| **Règle** | Cette phase ne donne pas le droit d'ouvrir TAGORA Time |

### Note Phase 4M-TOS

- Phase 4M **prépare l'autorisation documentaire** d'ouverture contrôlée.
- **TAGORA Time reste non ouvert et non modifié**.
- L'ouverture future serait **limitée à une vérification Git de surface** (`status`, `log`, `rev-parse`, `branch`).
- **Aucune instanciation documentaire** ne commence encore.
- La **prochaine étape reste dans TOS** : Phase 4N-TOS — validation humaine de l'autorisation 4M (VALD-057 à VALD-062).

---

## Ordre consolidé d'application des piliers à TAGORA Time

Ordre officiel retenu pour l'**application progressive** sur TAGORA Time — consolidé Phase 3I :

| Priorité | Pilier | Objectif sur Time |
|---|---|---|
| 1 | **TQF** | QA minimale — scénarios, smoke tests, gate release |
| 2 | **TDS** | Cohérence UX/UI — navigation, lisibilité, statuts |
| 3 | **TES** | Validation avant code, sécurité, engineering |
| 4 | **TKS** | Mémoire permanente — ADR, décisions, leçons |
| 5 | **TAF** | Agents IA encadrés — documentation, pas remplacement métier |
| 6 | **TOF** | Orchestration contrôlée — workflows sans logique punch |
| 7 | **TRF** | Release contrôlée — checklist, versioning, rollback |
| 8 | **TMF** | Monitoring et observabilité — logs, post-release |
| 9 | **TBF** | Règles business communes — **plus tard** |
| 10 | **TCP** | Core Platform — **plus tard** |

### Règles d'application

- **Time reste autonome** — dépôt séparé, logique métier Time intacte.
- **Aucune refonte massive** — petits lots, écarts documentés.
- **Application par petits lots** — une feature, un pilier, une validation à la fois.
- **Ordre méthodologique** — toujours : Documentation → Architecture → Code → QA → Production.

Voir aussi [STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md](STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md) et [CARTE_DES_10_PILIERS_TOS.md](../00_constitution/CARTE_DES_10_PILIERS_TOS.md).

---

## Piliers en attente — ne pas modifier tout de suite

Les piliers suivants sont **reconnus** mais **non prioritaires** pour la première vague d'**application terrain** sur Time :

| Pilier | Raison du report |
|---|---|
| **TCP** (Core Platform) | Implémentation hors TOS — adoption quand briques communes validées et disponibles. |
| **TBF** (Business Framework) | Documenter règles transverses au fil de l'eau ; pas de refonte métier Time imposée. |

> **Note :** TOF, TRF et TMF ont un cadre documentaire TOS (Phases 3F, 3G et 3H). L'application terrain dans Time reste progressive, après validations humaines.

> **Règle :** Ne pas bloquer Time en attendant TCP ou une plateforme complète. Adopter ce qui est prêt ; documenter le reste.

---

## Limites explicites

1. **Pas de fusion Time / TOS** — Deux dépôts, deux missions.
2. **Pas de déplacement de logique métier Time vers TOS** — Horodateur, règles congés Time, etc. restent dans Time.
3. **Pas de big bang** — Adoption pilier par pilier, fonctionnalité par fonctionnalité si nécessaire.
4. **Pas de standard non validé imposé** — Écarts documentés jusqu'à convergence.
5. **Pas d'invention d'architecture dans TOS pour Time** — Time produit les ADR ; TOS enregistre les standards généralisables.

---

## Principes d'adoption

- Adoption **progressive**, pas de big bang.
- Retours d'expérience Time **alimentent** TOS et TKS avant généralisation.
- Standards validés sur Time = **référence** pour les autres modules.
- Écarts temporaires **documentés** avec date de résolution cible.

## Règles

- Prioriser TQF → TDS → TES → TKS, puis TAF encadré, puis TOF, TRF et TMF documentés, sur la première phase.
- Documenter écarts et dérogations temporaires.
- Produire un ADR pour toute décision Time impactant l'écosystème.
- Ne pas déployer en production sans smoke tests conformes TQF.

---

## État de convergence (à mettre à jour)

| Pilier | Priorité | Statut | Notes |
|---|---|---|---|
| TQF | 1 | Complété (doc) | Phase 3A — standards QA ; QA-TIME-001 brouillon |
| TDS | 2 | Complété (doc) | Phase 3B — standards design documentés |
| TES | 3 | Complété (doc) | Phase 3C — validation avant code, ADR-0002 |
| TKS | 4 | Complété (doc) | Phase 3D — registres mémoire ; validations humaines à faire |
| TAF | 5 | Cadre doc | Phase 3E — standards agents IA ; pas d'agent réel dans Time |
| TOF | 6 | Complété (doc) | Phase 3F — standards orchestration ; ORCH-TIME brouillon |
| TRF | 7 | Complété (doc) | Phase 3G — standards release ; validations VALD-014 à VALD-018 à faire |
| TMF | 8 | Complété (doc) | Phase 3H — monitoring ; validations VALD-019 à VALD-023 à faire |
| TCP | — | Reporté | — |
| TBF | — | Reporté | — |

---

## Éléments à documenter plus tard

- Calendrier indicatif par priorité
- Critères de succès par pilier sur Time
- Liste des écarts acceptés temporairement
- Retours d'expérience et ajustements standards post-pilote

## Statut

**Enrichi — Phase 4M-TOS** — Cadre autorisation ouverture contrôlée préparé. Phase 4N-TOS — validation humaine autorisation 4M.

## Références

- [Arbitrage Phase 4D-TOS](validations_time/TIME_ARBITRAGE_PHASE_4D_DECISIONS_HUMAINES.md)
- [Validation Phase 4C-TOS](validations_time/TIME_VALIDATION_PHASE_4C_AVANT_APPLICATION.md)
- [Plan Phase 4B TQF/TDS/TES](plans_time/TIME_PLAN_PHASE_4B_TQF_TDS_TES.md)
- [Audit Phase 4A TQF/TDS/TES](audits_time/TIME_AUDIT_PHASE_4A_INITIAL_TQF_TDS_TES.md)
- [Carte des 10 piliers](../00_constitution/CARTE_DES_10_PILIERS_TOS.md)
- [Stratégie adoption modules](STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md)
- [État maturité TOS](../00_constitution/ETAT_MATURITE_TOS.md)
- [TMF](../01_piliers/10_TMF_TAGORA_MONITORING_FRAMEWORK.md)
- [README Monitoring Framework](../12_monitoring/README_MONITORING_FRAMEWORK.md)
- [POST_RELEASE_MONITORING_STANDARD](../12_monitoring/POST_RELEASE_MONITORING_STANDARD.md)
- [TRF](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md)
- [README Release Framework](../11_release/README_RELEASE_FRAMEWORK.md)
- [RELEASE_CHECKLIST_STANDARD](../11_release/RELEASE_CHECKLIST_STANDARD.md)
- [TOF](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md)
- [ORCHESTRATION_REGISTRE](../08_orchestration/ORCHESTRATION_REGISTRE.md)
- [EVENT_BUS_STANDARD](../08_orchestration/EVENT_BUS_STANDARD.md)
- [TAF](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md)
- [AGENTS_IA_REGISTRE](../07_ai/AGENTS_IA_REGISTRE.md)
- [LIMITES_INTERVENTION_IA](../07_ai/LIMITES_INTERVENTION_IA.md)
- [TKS](../01_piliers/06_TKS_TAGORA_KNOWLEDGE_SYSTEM.md)
- [Knowledge System](../10_knowledge/README_KNOWLEDGE_SYSTEM.md)
- [ADR_REGISTRE](../05_adr/ADR_REGISTRE.md)
- [REGISTRE_DECISIONS](../10_knowledge/REGISTRE_DECISIONS.md)
- [ADR-0002 — Documentation avant code](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [Fiche validation avant code](../03_gouvernance/FICHE_VALIDATION_AVANT_CODE_TEMPLATE.md)
- [TES](../01_piliers/01_TES_TAGORA_ENGINEERING_SYSTEM.md)
- [ADR-0001 — TOS comme Constitution méthodologique](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
- [Constitution officielle](../00_constitution/00_CONSTITUTION_OFFICIELLE_TAGORA_OPERATING_SYSTEM.md)
