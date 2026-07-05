# Matrice d'interdépendance des piliers — TAGORA Operating System

## Objectif

Documenter les **liens et dépendances logiques** entre les dix piliers TOS — sans impliquer fusion de modules ni couplage technique obligatoire.

## Portée

Vue transversale écosystème TAGORA. Les dépendances indiquent **enrichissement mutuel documentaire et méthodologique**, pas fusion de dépôts.

---

## Règles de lecture

1. **Dépendance ≠ fusion** — chaque module garde son dépôt et sa logique métier.
2. **TOS coordonne** — il ne remplace pas les applications métier.
3. **TKS est transversal** — il supporte tous les piliers (ADR, décisions, leçons).
4. **TCP et TBF** — dépendances futures ; maturité partielle à ce stade.

---

## Matrice croisée (qui s'appuie sur qui)

| Pilier | S'appuie principalement sur | Contribue à |
|---|---|---|
| **TES** | TKS, TQF, TRF | Tous (méthode engineering) |
| **TDS** | TQF, TKS | Expérience utilisateur cohérente |
| **TQF** | TES, TKS, TRF | Gate qualité avant release |
| **TAF** | TKS, TES, TQF, TOF | Agents encadrés, rapports |
| **TOF** | TAF, TKS, TES, TMF | Workflows, événements |
| **TKS** | — | **Tous les piliers** |
| **TCP** | TES, TBF, TQF, TRF, TMF | Briques communes futures |
| **TBF** | TKS, TES, TQF, TCP | Règles métier transverses |
| **TRF** | TES, TQF, TKS, TMF | Livraison contrôlée |
| **TMF** | TES, TRF, TOF, TKS | Observabilité post-release |

---

## Détail par pilier

### TES — TAGORA Engineering System

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TKS** | ADR, décisions architecture |
| Dépend de | **TQF** | QA intégrée au cycle dev |
| Dépend de | **TRF** | Branches, commits, merge, release |
| Alimente | Tous | Validation avant code, sécurité, DevOps |

### TDS — TAGORA Design System

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TQF** | Revue UI testable |
| Dépend de | **TKS** | Décisions design transverses (ADR) |
| Alimente | Modules | Cohérence visuelle écosystème |

### TQF — TAGORA Quality Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TES** | Discipline dev, environnements QA |
| Dépend de | **TKS** | Scénarios validés, leçons |
| Dépend de | **TRF** | Smoke tests gate release |
| Alimente | Tous | Qualité reproductible |

### TAF — TAGORA AI Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TKS** | Périmètre agents, registre |
| Dépend de | **TES** | Limites techniques, sécurité |
| Dépend de | **TQF** | Agents ne remplacent pas QA |
| Dépend de | **TOF** | Distinction agent vs orchestration |
| Alimente | TOF, modules | Assistance documentée |

### TOF — TAGORA Orchestration Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TAF** | Chaînes IA dans workflows |
| Dépend de | **TKS** | Contrats, registre ORCH-XXX |
| Dépend de | **TES** | Séparation orchestration / métier |
| Dépend de | **TMF** | Monitoring workflows en échec |
| Alimente | Modules | Coordination événements |

### TKS — TAGORA Knowledge System

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | — | Fondation transversale |
| Alimente | **Tous** | ADR, registres, leçons, validations |

### TCP — TAGORA Core Platform

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépendra de | **TES** | Standards implémentation |
| Dépendra de | **TBF** | Règles métier communes |
| Dépendra de | **TQF** | Tests briques communes |
| Dépendra de | **TRF** | Release plateforme |
| Dépendra de | **TMF** | Observabilité core |
| Alimente | Modules | Auth, permissions, audit (futur) |

> **Statut :** à approfondir — pas de blocage pilote Time.

### TBF — TAGORA Business Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépendra de | **TKS** | Décisions métier transverses |
| Dépendra de | **TES** | Documentation règles |
| Dépendra de | **TQF** | Scénarios métier communs |
| Dépendra de | **TCP** | Implémentation règles partagées |
| Alimente | Modules | Cohérence métier écosystème |

> **Statut :** à approfondir — règles restent dans modules.

### TRF — TAGORA Release Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TES** | Branches, PR, validation merge |
| Dépend de | **TQF** | QA gate avant prod |
| Dépend de | **TKS** | Traçabilité releases |
| Dépend de | **TMF** | Suivi post-release |
| Alimente | Modules | Livraison sécurisée |

### TMF — TAGORA Monitoring Framework

| Relation | Pilier | Nature du lien |
|---|---|---|
| Dépend de | **TES** | Logs sans secret, instrumentation |
| Dépend de | **TRF** | Surveillance après release |
| Dépend de | **TOF** | Métriques workflows |
| Dépend de | **TKS** | Incidents, post-mortem |
| Alimente | Modules | Détection régressions |

---

## Schéma simplifié

```
                    TKS (mémoire — transversal)
                         ↑ supporte tous
    TQF ←→ TES ←→ TRF ←→ TMF
     ↕       ↕       ↕
    TDS     TAF → TOF
              ↓
         Modules métier (Time, Stock, Voice…)
              ↓
    TCP + TBF (futur — maturité partielle)
```

---

## Références

- [CARTE_DES_10_PILIERS_TOS.md](CARTE_DES_10_PILIERS_TOS.md)
- [ETAT_MATURITE_TOS.md](ETAT_MATURITE_TOS.md)

## Statut

**Créé — Phase 3I**
