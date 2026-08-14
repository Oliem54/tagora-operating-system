# Registre des décisions — TAGORA Operating System

## Objectif

Tracer les décisions actées de l'écosystème TAGORA, avec ou sans ADR formelle.

## Portée

Décisions méthodologiques et de gouvernance TOS. Les décisions purement internes à un module (ex. détail métier Time) restent dans le contexte du module, sauf si elles impactent l'écosystème.

---

## Colonnes

| Colonne | Description |
|---|---|
| ID | Identifiant séquentiel `DEC-XXX` |
| Date | Date d'acte |
| Sujet | Thème court |
| Décision | Formulation claire |
| Statut | Acté / Accepté initialement / Validé / Remplacé / Archivé |
| Portée | Écosystème, TOS, Time, etc. |
| Impact | Conséquence principale |
| Lien | ADR ou document lié |
| Notes | Complément court |

---

## Décisions actées

| ID | Date | Sujet | Décision | Statut | Portée | Impact | Lien ADR ou document lié | Notes |
|---|---|---|---|---|---|---|---|---|
| DEC-001 | 2026-07-02 | Nature de TOS | TOS n'est pas une application | Accepté initialement | Écosystème | Pas de code métier dans TOS | [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md) | Fondation |
| DEC-002 | 2026-07-02 | Rôle de TOS | TOS est la Constitution méthodologique de l'écosystème TAGORA | Accepté initialement | Écosystème | Référence absolue pour standards et méthodes | [ADR-0001](../05_adr/ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md), Constitution | — |
| DEC-003 | 2026-07-02 | Projet pilote | TAGORA Time est le premier projet pilote d'application progressive de TOS | Acté | Time + écosystème | Time valide les standards avant généralisation | [APPLICATION_PROGRESSIVE_TAGORA_TIME.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_TIME.md) | — |
| DEC-004 | 2026-07-02 | Méthode | Documentation avant code pour tout développement important | Accepté initialement | Écosystème | Fiche de validation avant code | [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md) | — |
| DEC-005 | 2026-07-02 | Priorité piliers Time | TQF est le premier pilier appliqué à Time | Acté | Time | QA avant automatisation et production | Phase 3A, `docs/06_qa/` | — |
| DEC-006 | 2026-07-02 | Priorité piliers Time | TDS est le deuxième pilier appliqué à Time | Acté | Time | Design documenté avant refonte UI majeure | Phase 3B, `docs/09_design_system/` | — |
| DEC-007 | 2026-07-02 | Priorité piliers Time | TES est le troisième pilier appliqué à Time | Acté | Time | Validation avant code, sécurité, séparation projets | Phase 3C | — |
| DEC-008 | 2026-07-02 | Séparation modules | Les modules restent indépendants (Time, Stock Premium, Voice, Mail IA, Pulse, Platform) | Acté | Écosystème | Pas de fusion avec TOS ni entre modules sans décision officielle | [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md) | — |
| DEC-009 | 2026-07-03 | Agents IA | Les agents IA TAGORA doivent respecter un périmètre explicite, des interdictions claires, un rapport vérifiable et une validation humaine pour les actions critiques | Acté | Écosystème | Cadre TAF obligatoire pour tout agent | [TAF](../01_piliers/04_TAF_TAGORA_AI_FRAMEWORK.md), [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md) | Phase 3E |
| DEC-010 | 2026-07-05 | Orchestration | Les orchestrations TAGORA doivent rester séparées de la logique métier des modules et respecter des contrats documentés, une validation humaine pour les actions critiques et des rapports vérifiables | Acté | Écosystème | Cadre TOF obligatoire pour tout workflow ou événement | [TOF](../01_piliers/05_TOF_TAGORA_ORCHESTRATION_FRAMEWORK.md), [ORCHESTRATION_REGISTRE.md](../08_orchestration/ORCHESTRATION_REGISTRE.md) | Phase 3F |
| DEC-011 | 2026-07-05 | Release | Les releases TAGORA doivent être traçables, validées selon leur niveau de risque, documentées, et accompagnées d'un plan de rollback pour les changements critiques | Acté | Écosystème | Cadre TRF obligatoire pour toute livraison significative | [TRF](../01_piliers/09_TRF_TAGORA_RELEASE_FRAMEWORK.md), [README_RELEASE_FRAMEWORK.md](../11_release/README_RELEASE_FRAMEWORK.md) | Phase 3G |
| DEC-012 | 2026-07-05 | Monitoring | Les modules TAGORA critiques doivent prévoir une observabilité minimale, des logs sans secret, un suivi post-release et une traçabilité des incidents | Acté | Écosystème | Cadre TMF obligatoire pour modules critiques | [TMF](../01_piliers/10_TMF_TAGORA_MONITORING_FRAMEWORK.md), [README_MONITORING_FRAMEWORK.md](../12_monitoring/README_MONITORING_FRAMEWORK.md) | Phase 3H |
| DEC-013 | 2026-07-05 | Structure TOS | Les 10 piliers TOS forment la structure officielle de gouvernance méthodologique TAGORA, mais leur adoption doit rester progressive, module par module, sans fusionner les applications métier | Acté | Écosystème | Carte et matrice piliers ; pas de big-bang | [CARTE_DES_10_PILIERS_TOS.md](../00_constitution/CARTE_DES_10_PILIERS_TOS.md), [MATRICE_INTERDEPENDANCE_PILIERS.md](../00_constitution/MATRICE_INTERDEPENDANCE_PILIERS.md) | Phase 3I |
| DEC-014 | 2026-08-10 | Positionnement Nexus / Cloud / Platform / TCP / Flow | Option A renforcée validée : TOS = constitution ; Cloud = marque/offre SaaS ; Nexus = portail « Mon espace TAGORA » ; TCP = capacités faisant autorité ; Flow = orchestration ; Platform = terme déprécié (ancien repo intact) ; baseline documentaire Nexus autorisée ; repository interdit | **Validé** | Écosystème | Baseline doc only ; pas de `tagora-cloud-portal` | [ADR-0003](../05_adr/ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md), [APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md](../04_adoption_modules/APPLICATION_PROGRESSIVE_TAGORA_NEXUS.md) | Track Nexus — n'affecte pas Phase 4S Time ; VALD-075 à 080 |
| DEC-015 | 2026-08-12 | Domaines canoniques TAGORA | `tagora.ca` = site public ; `app.tagora.ca` = Nexus uniquement ; `time.tagora.ca`, `mail.tagora.ca`, `stock.tagora.ca`, `pulse.tagora.ca` = modules ; `admin.tagora.ca` réservé futur ; staging `{service}.staging.tagora.ca` ; login `/login` | **Validé** | Écosystème | Convention URL commune sans DNS ni déploiement | [ADR-0004](../05_adr/ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md) | VALD-093 ; implémentation par chaque projet uniquement après transfert Martin et GO propre |
| DEC-016 | 2026-08-13 | Propriété entrée publique vs application Time | Site public = TAGORA Website (REBUILD, pas copie) ; application / Auth / DB / APIs = TAGORA Time (REMAIN) ; Nexus = `app.tagora.ca` ; legal/privacy à scinder ; root Time A_CONFIRMER après Nexus ; cleanup Time non autorisé maintenant | **Validé** | Website + Time + Nexus | Prépare gate Website distinct du gate QA Phase 4D | [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../04_adoption_modules/plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md), [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../04_adoption_modules/audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md) | VALD-095 ; n'autorise aucune écriture ni DNS |
| DEC-017 | 2026-08-14 | Typographie commune TAGORA | Duo officiel = Outfit (body/UI) + Syne (display/marque) ; fallback `"Segoe UI", sans-serif` ; poids 400/500/600/700 ; loading swap ; preuve Website `6415cdd` ; `WAITING_FOR_WEBSITE_EVIDENCE` fermé | **Validé** | Écosystème | Contrat typographique transversal ; application produit uniquement après transfert Martin | [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md), [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../09_design_system/CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md), [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md) | VALD-096 ; ne modifie pas le contrat couleurs |

---

## Règles

- Ajouter une ligne pour chaque décision actée significative.
- Si décision structurante → ADR + mise à jour [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md).
- Ne pas inventer de décision non actée.
- Aucun secret dans ce registre.
- Les entrées **Brouillon — À VALIDER** ne sont pas des décisions officielles tant que non passées à **Validé** / **Acté**.

## Statut

**Enrichi — Typographie transversale** — DEC-017 **Validé** (VALD-096 / ADR-0005, 2026-08-14). DEC-016 **Validé** (VALD-095, 2026-08-13). DEC-015 **Validé** (ADR-0004, 2026-08-12). DEC-014 reste inchangée.
