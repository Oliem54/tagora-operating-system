# Stratégie d'adoption progressive — Modules TAGORA

## Objectif

Définir la **stratégie générale d'adoption TOS** pour tous les modules de l'écosystème — au-delà du seul pilote TAGORA Time.

## Portée

Tous les modules TAGORA actuels et futurs. **Aucune implémentation** — cadre méthodologique uniquement.

---

## Principes fondateurs

1. **Adoption progressive** — jamais big-bang ; pilier par pilier, lot par lot.
2. **Documentation first** — audit documentaire avant changement code massif.
3. **Modules indépendants** — chaque module garde dépôt, logique et règles métier.
4. **Prioriser l'actif et le critique** — Time d'abord ; autres modules selon maturité et risque.
5. **Standards au service de l'équipe** — aider, pas bloquer l'entreprise.

---

## Ordre recommandé d'adoption (par module)

| Étape | Action | Pilier(s) concerné(s) |
|---|---|---|
| 1 | **Audit documentaire** | TKS — état des lieux vs TOS |
| 2 | **Cartographie risques** | TES, TQF — périmètre, sécurité, régression |
| 3 | **QA minimale** | TQF — scénarios, smoke tests |
| 4 | **UX/UI review** | TDS — checklist revue si interface |
| 5 | **Validation engineering** | TES — fiche avant code si changement important |
| 6 | **Documentation décisions** | TKS — ADR, registres si impact écosystème |
| 7 | **Release contrôlée** | TRF — checklist, changelog si release significative |
| 8 | **Monitoring minimal** | TMF — logs, post-release si critique |

> **Ne pas appliquer tous les piliers en même temps.** Adapter selon maturité du module.

---

## Modules de l'écosystème

| Module | Rôle | Priorité adoption TOS | Notes |
|---|---|---|---|
| **TAGORA Time** | Horodateur, gestion du temps | **1 — Pilote officiel** | Application progressive documentée |
| **Stock Premium** | Gestion stock premium | 2 — Après retours Time | Réutiliser standards validés Time |
| **TAGORA Voice** | Voix / communication | 3 | Selon maturité produit |
| **TAGORA Mail IA** | Courriel assisté IA | 3 | TAF encadré prioritaire |
| **TAGORA Pulse** | Signaux / activité | 4 | Selon périmètre |
| **TAGORA Platform** | Plateforme transverse | 4 | Lien futur TCP |

Chaque module :
- conserve **son dépôt Git** ;
- conserve **sa logique métier** ;
- adopte TOS **à son rythme** ;
- documente **écarts temporaires** acceptés.

---

## Différenciation par type de changement

| Type | Piliers typiquement touchés |
|---|---|
| Correctif mineur | TES (PR), TQF (smoke si parcours touché) |
| Feature UI | TDS, TQF, TES (validation) |
| Feature métier | TES, TQF, TKS (ADR si écosystème) |
| Release production | TRF, TQF, TMF (post-release) |
| Agent / workflow IA | TAF, TOF, TKS |
| Règle métier transverse | TBF (futur), TKS, module concerné |

---

## Ce que cette stratégie n'impose pas

- Calendrier unique pour tous les modules
- Conformité 100 % avant toute livraison
- Fusion de dépôts ou de code métier
- Outils externes obligatoires (CI/CD, monitoring, etc.)

---

## Références

- [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](APPLICATION_PROGRESSIVE_TAGORA_TIME.md)
- [CARTE_DES_10_PILIERS_TOS.md](../00_constitution/CARTE_DES_10_PILIERS_TOS.md)
- [ETAT_MATURITE_TOS.md](../00_constitution/ETAT_MATURITE_TOS.md)
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)

## Statut

**Créé — Phase 3I**
