# ADR-0003 — Positionnement TAGORA Nexus, Cloud, Platform, TCP et Flow

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-10**

Option A renforcée actée.
VALD-075 à VALD-080 au statut **Validé**.

Cette ADR **autorise** la prochaine baseline documentaire Nexus
(`TAGORA-NEXUS-TOS-ADOPTION-BASELINE` — documentation et architecture seulement).

Cette ADR **n'autorise pas** :

- la création du repository `tagora-cloud-portal` ;
- `git init` Nexus ;
- code applicatif ;
- DB / migration ;
- fournisseur de paiement ;
- n8n / LangChain réels ;
- staging / production ;
- toute action sur l'ancien repository `tagora-platform`.

## Date

2026-08-10

## Décideur

Martin ST-Gelais — Direction

## Portée

Écosystème TAGORA entier — frontières constitutionnelles entre :

- TAGORA Operating System (TOS) ;
- TAGORA Cloud ;
- TAGORA Nexus ;
- l'ancienne notion TAGORA Platform ;
- TAGORA Core Platform / TCP ;
- TAGORA Flow / TOF ;
- les modules métier TAGORA.

La Phase **4S-TOS** (WIP TAGORA Time) demeure valide, en attente et **inchangée**.
Le track Nexus est **parallèle** ; il ne remplace ni n'annule la Phase 4S.

---

## Contexte

Sans ADR de positionnement, le risque de confusion TOS / Platform / Nexus / TCP / Flow empêchait toute baseline Nexus sûre. Trois options (A, B, C) ont été analysées dans le brouillon préalable. Martin valide l'**Option A renforcée** avec les clarifications ci-dessous.

---

## Décision validée — Option A renforcée

### 1. TAGORA Operating System

TOS est la **Constitution méthodologique officielle**.
TOS définit les standards et la gouvernance.
TOS **n'est pas** une application ni une plateforme d'exécution.

### 2. TAGORA Cloud

TAGORA Cloud est le **nom de la marque et de l'offre SaaS commerciale globale** de l'écosystème TAGORA.

TAGORA Cloud **n'est pas automatiquement** un repository, une application, une DB ou une couche technique.

### 3. TAGORA Nexus

Nexus est le **portail et control plane utilisateur** de TAGORA Cloud.

**Nom utilisateur prévu :** Mon espace TAGORA

Nexus fournit l'expérience commune :

- connexion ;
- organisation ;
- membres ;
- catalogue modules ;
- droits visibles ;
- accès modules ;
- gestion abonnement ;
- administration commune autorisée.

Nexus **ne possède pas** les données métier de tous les modules.

### 4. TAGORA Core Platform / TCP

TCP porte les capacités partagées **faisant autorité** :

- identité ;
- authentification ;
- organisations ;
- memberships ;
- rôles ;
- permissions ;
- entitlements ;
- audit ;
- sessions ;
- services communs.

**Nexus présente et administre l'expérience.**
**TCP applique et conserve les capacités communes.**

La **séparation logique Nexus / TCP est obligatoire**.
La séparation physique en repositories distincts reste une **décision ouverte** à traiter pendant la baseline Nexus.

Une architecture **monorepo modulaire** dans `tagora-cloud-portal` peut être évaluée, mais elle **n'est pas encore validée**.

### 5. TAGORA Flow / TOF

Flow orchestre les workflows, événements, n8n, LangChain et agents.

Flow **ne porte pas seul** :

- les règles métier critiques ;
- les permissions ;
- les entitlements ;
- les données métier faisant autorité.

### 6. Modules TAGORA

Chaque module demeure :

- autonome ;
- propriétaire de son métier ;
- propriétaire de ses données métier ;
- commercialisable mensuellement ;
- intégrable progressivement.

Les forfaits et bundles doivent utiliser des **entitlements**.
Ne pas coder les droits selon des noms commerciaux fixes.

### 7. TAGORA Platform

Le terme **TAGORA Platform est déprécié** pour toute nouvelle architecture ou nouvelle appellation produit.

Cette dépréciation est **uniquement sémantique et architecturale**.

Elle **n'autorise PAS** :

- la suppression ;
- le renommage ;
- la migration ;
- la modification ;
- la réutilisation ;

de l'ancien repository `tagora-platform`.

Toute action sur cet ancien repository exigera un **audit et un GO séparés**.

---

## Abonnements et facturation

| Couche | Responsabilité |
|---|---|
| **Nexus** | Expérience commerciale et administrative : catalogue, affichage des abonnements, changements autorisés, états et parcours utilisateur |
| **TCP** | Source technique des entitlements et droits d'accès communs (applique / conserve) |
| **Paiement / ledger** | Fournisseur de paiement, facturation, ledger financier et emplacement technique = **décisions ouvertes** |

Règles actées :

- chaque module demeure **vendable mensuellement seul** ;
- les bundles multi-modules sont une **composition d'entitlements** ;
- la manière de facturer Nexus lui-même (inclus avec tout abonnement, forfait central, ou autre) = **décision commerciale future** ;
- **aucun fournisseur de paiement n'est choisi** dans cette ADR.

---

## Options considérées (historique)

| Option | Résumé | Décision |
|---|---|---|
| **A renforcée** | Cloud = offre ; Nexus = portail ; TCP = capacités ; Flow = orchestration ; Platform = terme déprécié (repo intact) | **Validée** |
| **B** | Platform reste le nom technique ; Nexus = portail seul | Non retenue |
| **C** | Nexus remplace complètement le terme Platform | Non retenue |

---

## Réponses actées aux questions structurantes

### 1. Qu'est-ce que TAGORA Nexus ?

Le portail et control plane utilisateur de TAGORA Cloud — « Mon espace TAGORA » — pour connexion, organisation, membres, catalogue, droits visibles, accès modules, gestion abonnement et administration commune autorisée.

### 2. Qu'est-ce que Nexus n'est pas ?

Pas TOS ; pas TCP seul ; pas Flow ; pas un module métier ; pas propriétaire des données métier de tous les modules ; pas autorisé à accéder arbitrairement aux DB des modules.

### 3. Nexus remplace-t-il TAGORA Platform ?

Le **terme** Platform est **déprécié** pour le futur. Le produit portail s'appelle **Nexus**. L'ancien repository `tagora-platform` reste **intact** jusqu'à audit + GO séparés.

### 4. Quel est le rôle commercial de TAGORA Cloud ?

Marque et offre SaaS commerciale globale — pas automatiquement un repository ni une couche technique.

### 5. Quel est le rôle technique du TCP ?

Capacités partagées faisant autorité : identité, authentification, organisations, memberships, rôles, permissions, entitlements, audit, sessions, services communs.

### 6. Quel est le rôle de TAGORA Flow ?

Orchestration (workflows, événements, n8n, LangChain, agents) sans porter seul métier critique, permissions, entitlements ou données métier faisant autorité.

### 7. Où vivent les règles métier ?

Dans les **modules métier** (définitions transverses documentées via TBF côté TOS). Pas uniquement dans n8n ni dans Nexus comme source de vérité métier.

### 8. Où vivent les données métier ?

Dans les **modules propriétaires**. Aucun accès inter-tenant implicite. Aucun accès DB direct arbitraire.

### 9. Où vivent l'identité et l'authentification communes ?

Dans **TCP**. Nexus présente l'expérience de connexion / session.

### 10. Où vivent les organisations et membres ?

Dans **TCP**. Nexus administre l'expérience selon permissions.

### 11. Où vivent les rôles et permissions communs ?

Dans **TCP**. Permissions métier spécifiques dans le module concerné.

### 12. Où vivent les entitlements et droits d'accès aux modules ?

Dans **TCP** (entitlement-first). Nexus affiche et administre selon ces entitlements.

### 13. Où vivent les abonnements et la facturation ?

- Expérience / parcours : **Nexus**
- Entitlements / droits : **TCP**
- Paiement / ledger / fournisseur : **décision ouverte** (ADR futurs)

### 14. Où vivent les workflows n8n et LangChain ?

Sous gouvernance **TOF / TAGORA Flow**, hors logique métier critique exclusive.

### 15. Quel repository doit recevoir Nexus ?

Cible documentaire : **`tagora-cloud-portal`**.
**Création toujours interdite** jusqu'à GO séparé après baseline documentaire.

Séparation physique Nexus/TCP (repos distincts vs monorepo modulaire) = **ouverte** pour la baseline.

### 16. Quels repositories ne doivent jamais être recyclés automatiquement ?

Sans GO séparé : TOS, modules métier, `tagora-platform` / `tagora-central`, dossiers vides ou non Git, et tout autre projet existant.

### 17. Comment les modules convergent-ils vers Nexus et TOS sans fusion ?

Adoption progressive TOS + intégration Nexus via catalogue, entitlements et contrats API — sans fusion de dépôts ni de DB. SaaS mensuel unitaire conservé ; bundles = composition d'entitlements.

### 18. Quel niveau de conformité TOS avant le premier commit Nexus ?

1. ADR-0003 validé (**fait**).
2. Plan d'adoption Nexus aligné (**fait** côté TOS).
3. Baseline documentaire Nexus (`TAGORA-NEXUS-TOS-ADOPTION-BASELINE`) — **prochaine action autorisée**.
4. Puis seulement : GO création repository + premier commit documentaire.
5. Ordre : **Documentation → Architecture → Code → QA → Production**.

---

## Principes obligatoires

1. TOS gouverne les standards ; TOS n'est pas une application.
2. Nexus est un produit distinct.
3. TCP fournit les capacités communes faisant autorité.
4. Séparation logique Nexus / TCP obligatoire.
5. Flow orchestre ; ne remplace pas le métier.
6. Modules : métier, données, SaaS mensuel unitaire.
7. Architecture **entitlement-first** ; pas de droits codés sur noms commerciaux fixes.
8. Organisation / tenant = frontière de sécurité.
9. Aucun accès inter-tenant implicite.
10. Aucun accès DB module arbitraire.
11. Aucune logique métier critique uniquement dans n8n.
12. Aucune IA omnipotente (TAF + HITL).
13. Documentation → Architecture → Code → QA → Production.
14. Pas de création de `tagora-cloud-portal` dans ce bloc ; baseline documentaire seulement.
15. Ancien `tagora-platform` intact jusqu'à audit + GO séparés.

---

## Conséquences

### Positives

- Positionnement constitutionnel officiellement acté.
- Baseline documentaire Nexus autorisée.
- Vocabulaire Cloud / Nexus / TCP / Flow / modules clarifié.
- Platform déprécié sans toucher l'ancien repo.

### Limites / ouvertures

- Séparation physique des repos Nexus/TCP non tranchée.
- Fournisseur de paiement / ledger non choisis.
- Modèle de facturation de Nexus lui-même non choisi.
- Création `tagora-cloud-portal` toujours **HOLD**.

### Ce que cette ADR n'autorise toujours pas

- Créer le repository Nexus / `tagora-cloud-portal`.
- Modifier TAGORA Time, Mail IA, Stock, Pulse, Central, Flow, `tagora-platform`, etc.
- Code, DB, migrations, staging, production.
- Choisir un fournisseur de paiement.
- Modifier ou annuler la Phase 4S-TOS.

---

## Documents liés

- [APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md)
- [APPLICATION_PROGRESSIVE_TAGORA_PLATFORM.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_PLATFORM.md) — terme Platform déprécié ; document historique à ne pas traiter comme architecture future
- [07_TCP_TAGORA_CORE_PLATFORM.md](../01_piliers/07_TCP_TAGORA_CORE_PLATFORM.md)
- [05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md)
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
- [ADR-0001](ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
- [ADR-0002](ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [ADR_REGISTRE.md](ADR_REGISTRE.md)
- [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md) — VALD-075 à 080

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-075 | Option A renforcée | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |
| VALD-076 | Nexus = portail / control plane « Mon espace TAGORA » | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |
| VALD-077 | TAGORA Cloud = marque / offre SaaS globale | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |
| VALD-078 | Platform = terme déprécié ; ancien repo intact | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |
| VALD-079 | Frontière TOS / Nexus / TCP / Flow / modules | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |
| VALD-080 | Baseline documentaire Nexus autorisée (doc only) | **Validé** | Martin ST-Gelais — Direction | 2026-08-10 |

---

## Statut

**ADR-0003 Validé — Option A renforcée.**
Prochaine action autorisée : **TAGORA-NEXUS-TOS-ADOPTION-BASELINE** (documentation et architecture seulement).
Repository `tagora-cloud-portal` : **toujours interdit** jusqu'à GO séparé.
Phase 4S-TOS : **inchangée**.
