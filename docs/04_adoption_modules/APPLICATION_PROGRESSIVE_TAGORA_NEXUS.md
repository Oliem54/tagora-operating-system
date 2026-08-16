# Application progressive — TAGORA Nexus

## Objectif

Définir le **squelette de gouvernance** pour l'adoption progressive des standards TOS sur **TAGORA Nexus** — portail et control plane utilisateur (« Mon espace TAGORA ») — **sans plan de code** et **sans création de repository**.

## Statut

**Positionnement validé — Baseline documentaire autorisée — Repository HOLD**

Fondé sur [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md) — **Validé** (Martin ST-Gelais — Direction, 2026-08-10), Option A renforcée.

**Complément surfaces 2026-08-16 :** `app.tagora.ca` = portail client authentifié central (DEC-019 / ADR-0007 / VALD-098).  
**Complément mapping 2026-08-16 :** login central `https://app.tagora.ca/login` ; catalogue `/modules` ; access broker (DEC-020 / ADR-0008 / VALD-099).  
**Complément identité 2026-08-16 :** Time = source bootstrap, pas autorité ; TAGORA_USER_ID central (DEC-021 / ADR-0009 / VALD-100). Aucun Entra réel. Paquet : [PAQUET_TRANSFERT_IDENTITE_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_IDENTITE_NEXUS.md).  
**Complément handoff 2026-08-16 :** contrat technique TAGORA_HANDOFF_V1 (DEC-022 / ADR-0010 / VALD-101). Access broker conceptuel seulement. Aucun endpoint runtime. Paquet : [PAQUET_TRANSFERT_HANDOFF_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_HANDOFF_NEXUS.md).  
**Complément pilote identité 2026-08-16 :** Stock Premium **sélectionné** (DEC-023 / ADR-0011 / VALD-102). Implémentation non autorisée. I5/I6/I7 non commencés.

**Complément catalogue Sourcing AI 2026-08-16 :** DEC-024 / ADR-0012 / VALD-103. `NEXUS_MODULE_KEY=sourcing` candidat. Route candidate `https://app.tagora.ca/modules/sourcing`. Paquet préparé, non exécuté : [PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md](paquets_transfert/PAQUET_TRANSFERT_SOURCING_AI_NEXUS.md). `NEXUS_IMPLEMENTATION_AUTHORIZED=NO`. Aucun handoff réel.

**Autorisé maintenant :** `TAGORA-NEXUS-TOS-ADOPTION-BASELINE` — documentation et architecture seulement.

**Toujours interdit :**

- création de `tagora-cloud-portal` ;
- `git init` / code / DB / migration ;
- fournisseur de paiement ;
- n8n / LangChain réels ;
- staging / production ;
- action sur l'ancien `tagora-platform`.

La Phase **4S-TOS** (WIP TAGORA Time) reste **inchangée** et **en attente** sur son track propre.

---

## Mission de Nexus (actée — Option A renforcée)

TAGORA Nexus est le **portail et control plane utilisateur** de l'offre TAGORA Cloud — **Mon espace TAGORA** :

- connexion ;
- organisation ;
- membres ;
- catalogue modules ;
- droits visibles ;
- accès modules ;
- gestion abonnement ;
- administration commune autorisée ;

**sans** posséder les données métier de tous les modules, ni absorber leurs règles ou cycles de vie.

---

## État confirmé

| Élément | État |
|---|---|
| Positionnement constitutionnel | **Validé** — ADR-0003 Option A renforcée |
| VALD-075 à VALD-080 | **Validé** |
| Repository Nexus / `tagora-cloud-portal` | **Non créé** — toujours interdit |
| Code applicatif Nexus | **Non commencé** |
| Baseline documentaire Nexus | **Autorisée** (documentation / architecture seulement) |
| Intégration modules réelles | **Non commencée** |
| Phase 4S Time | **Inchangée** — track séparé |

---

## Éléments non commencés

- Baseline documentaire Nexus (`TAGORA-NEXUS-TOS-ADOPTION-BASELINE`)
- Décision repos distincts vs monorepo modulaire (ouverte)
- Authentification / MFA / sessions (cible TCP)
- Modèle org / tenant / membership implémenté
- Entitlements runtime et parcours abonnement
- Fournisseur de paiement / ledger (décision ouverte)
- Catalogue modules runtime
- Contrats API Nexus ↔ modules
- QA Playwright Nexus
- Release / monitoring Nexus dédiés
- Intégration Flow / n8n / agents réels

---

## Relation avec TOS

| TOS | Nexus |
|---|---|
| Constitution et standards | Produit qui **adopte** les standards |
| Documente les frontières | Respecte les frontières |
| Ne développe pas Nexus | Ne redéfinit pas la Constitution |

**Règle :** TOS gouverne ; Nexus implémente ailleurs, après les gates documentaires.

---

## Relation avec TCP

| TCP | Nexus |
|---|---|
| Identité, auth, org, memberships, rôles, permissions, entitlements, audit, sessions | Présente et administre l'expérience |
| Capacités communes **faisant autorité** | Ne remplace pas TCP |
| Source technique des droits d'accès | Affiche droits / catalogue selon entitlements |

**Séparation logique Nexus / TCP obligatoire.**
Séparation physique (repos distincts vs monorepo modulaire dans `tagora-cloud-portal`) = **ouverte** pour la baseline.

---

## Relation avec Flow / TOF

| Flow / TOF | Nexus |
|---|---|
| Orchestration, events, n8n, LangChain, agents | Peut exposer des parcours orchestrés |
| Ne porte pas seul métier critique, permissions, entitlements, données métier | Ne place pas l'autorité métier dans n8n |
| HITL pour actions critiques | Respecte TAF / HITL |

---

## Relation avec les modules métier

| Modules | Nexus |
|---|---|
| Données et règles métier propriétaires | Catalogue + accès entitlement-based |
| Vendables individuellement (SaaS mensuel) | Bundles = composition d'entitlements |
| Dépôts et releases autonomes | Intégration progressive, sans monolithe |
| Frontière tenant / organisation | Aucun accès inter-tenant implicite |
| DB module | Aucun accès direct arbitraire depuis Nexus |

Ne pas coder les droits selon des noms commerciaux fixes.

---

## Abonnements et facturation (gouvernance)

| Couche | Rôle |
|---|---|
| Nexus | Expérience commerciale / admin : catalogue, affichage abonnements, changements autorisés, parcours |
| TCP | Entitlements et droits d'accès communs |
| Paiement / ledger | **Décision ouverte** — non choisie ici |

Facturation de Nexus lui-même (inclus, forfait central, autre) = **décision commerciale future**.

---

## Les dix piliers applicables

| Pilier | Applicabilité initiale Nexus |
|---|---|
| **TES** | Obligatoire — validation avant code, architecture, sécurité |
| **TDS** | Obligatoire — signature « Mon espace TAGORA » |
| **TQF** | Obligatoire — scénarios QA avant automatisation |
| **TAF** | Dès qu'un agent / IA touche le portail |
| **TOF** | Dès qu'une orchestration traverse Nexus |
| **TKS** | Obligatoire — ADR, décisions, mémoire |
| **TCP** | Dépendance structurante — capacités faisant autorité |
| **TBF** | Concepts org / permissions transverses documentés |
| **TRF** | Avant toute release significative |
| **TMF** | Avant staging / production |

---

## Matrice d'adoption initiale (gouvernance)

| Étape | Action | Condition | État |
|---|---|---|---|
| 0 | Valider ADR-0003 | Martin — Direction | **Fait** |
| 1 | Aligner le présent plan d'adoption | Après ADR-0003 | **Fait** |
| 2 | Produire baseline documentaire Nexus | `TAGORA-NEXUS-TOS-ADOPTION-BASELINE` | **Autorisée — prochaine** |
| 3 | Autoriser création `tagora-cloud-portal` | Après baseline + checklist repo + GO | **HOLD** |
| 4 | Premier commit documentaire dans le dépôt Nexus | Après étape 3 | **HOLD** |
| 5 | Architecture détaillée (TCP contracts, entitlements) | ADR Nexus dédiés | **HOLD** |
| 6 | Code minimal / QA | Après validation avant code | **HOLD** |
| 7 | Staging puis production | TRF + TMF | **HOLD** |

---

## Décisions bloquantes restantes

1. Séparation physique Nexus / TCP (repos distincts vs monorepo modulaire).
2. Nom définitif et GO création du repository (`tagora-cloud-portal`).
3. Fournisseur de paiement / ledger / emplacement technique.
4. Modèle de facturation de Nexus lui-même.
5. ADR techniques entitlements / auth / API (après baseline).

Décisions **déjà tranchées** : Option A renforcée, rôles Cloud/Nexus/TCP/Flow/modules, dépréciation sémantique Platform, baseline documentaire autorisée.

---

## Documents Nexus requis (baseline — hors création repo applicatif)

Pour `TAGORA-NEXUS-TOS-ADOPTION-BASELINE` (documentation / architecture) :

- mission / non-objectifs Nexus ;
- frontières TOS / Nexus / TCP / Flow / modules ;
- matrice entitlements (doc) ;
- options repos (séparés vs monorepo) **sans choisir encore par défaut si non tranché** ;
- critères avant création repository ;
- registre ADR locaux futurs.

Dans TOS (présent) :

- ADR-0003 **Validé**
- Présent plan d'adoption
- Futurs ADR TCP / entitlements / billing après baseline

---

## ADR Nexus recommandés (futurs)

| Sujet | Moment |
|---|---|
| Repos distincts vs monorepo modulaire | Pendant / après baseline |
| Modèle org / tenant / membership | Avant code |
| Entitlements & SaaS mensuel par module | Avant code entitlements |
| Auth / MFA / sessions | Avant implémentation auth |
| Catalogue modules & intégration progressive | Avant intégration réelle |
| Contrats API Nexus ↔ modules | Avant intégration réelle |
| Billing / abonnements / fournisseur | Avant tout moteur de facturation |
| Observabilité & release portail | Avant staging |

---

## Critères avant création du repository

- [x] ADR-0003 **validé** par Martin
- [x] Option de positionnement actée (A renforcée)
- [x] Devenir de « TAGORA Platform » acté (terme déprécié ; repo intact)
- [x] Présent plan d'adoption aligné
- [ ] Baseline documentaire Nexus complétée et revue
- [ ] Nom du dépôt confirmé + GO Direction création
- [ ] Décision repos distincts vs monorepo documentée (même si reportée explicitement)
- [ ] Interdiction de recycler `tagora-platform` rappelée
- [ ] Aucun secret prévu dans le dépôt initial

## Critères avant code

- [ ] Repository créé légitimement (GO séparé)
- [ ] Baseline documentaire minimale dans le dépôt Nexus
- [ ] Fiche / validation avant code (TES) pour le premier lot
- [ ] Frontières TCP / Flow documentées pour le lot
- [ ] Scénarios QA critiques rédigés (même manuels)

## Critères avant DB

- [ ] Modèle de données portail documenté
- [ ] Frontière tenant explicite
- [ ] Aucune dépendance DB directe vers modules métier
- [ ] Secrets hors dépôt ; environnements séparés

## Critères avant intégration réelle

- [ ] Contrats API documentés
- [ ] Entitlements définis pour le module cible
- [ ] Pas d'accès inter-tenant implicite
- [ ] Impact modules évalué (compatibilité TOS)

## Critères avant staging

- [ ] Checklist TRF
- [ ] Observabilité minimale TMF
- [ ] Comptes QA (pas de secrets dans TOS)
- [ ] Rollback documenté

## Critères avant production

- [ ] Gates TRF production
- [ ] Monitoring / alerting post-release
- [ ] Validation humaine Direction selon risque
- [ ] Aucun GO implicite depuis TOS seul

---

## État opérationnel actuel

| Capacité | État |
|---|---|
| Positionnement TOS ADR-0003 | **Validé** |
| Baseline documentaire Nexus | **Autorisée** — prochaine action |
| Création `tagora-cloud-portal` | **HOLD** |
| Code / DB / déploiement Nexus | **HOLD** |
| Ancien `tagora-platform` | **Intact** — aucun GO |
| Track Phase 4S Time | **Inchangé** |

---

## Références

- [ADR-0003 — Positionnement Nexus / Cloud / Platform / TCP / Flow](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
- [APPLICATION_PROGRESSIVE_TAGORA_PLATFORM.md](APPLICATION_PROGRESSIVE_TAGORA_PLATFORM.md)
- [STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md](STRATEGIE_ADOPTION_PROGRESSIVE_MODULES.md)
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
- [TCP](../01_piliers/07_TCP_TAGORA_CORE_PLATFORM.md)
- [TOF](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md)
- [ROADMAP_DOCUMENTAIRE.md](../../ROADMAP_DOCUMENTAIRE.md)
- [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut documentaire

**Validé (positionnement) — Baseline documentaire autorisée — Repository HOLD**
Prochaine action : **TAGORA-NEXUS-TOS-ADOPTION-BASELINE**
