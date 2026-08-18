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
| DEC-016 | 2026-08-13 | Propriété entrée publique vs application Time | Site public = TAGORA Website (REBUILD, pas copie) ; application / Auth / DB / APIs = TAGORA Time (REMAIN) ; Nexus = `app.tagora.ca` ; legal/privacy à scinder ; root Time A_CONFIRMER après Nexus ; cleanup Time non autorisé maintenant | **Validé** | Website + Time + Nexus | Prépare gate Website distinct du gate QA Phase 4D | [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../04_adoption_modules/plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md), [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../04_adoption_modules/audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md) | VALD-095 ; rôle Time public clos par DEC-019 ; redirect/cleanup toujours interdits |
| DEC-017 | 2026-08-14 | Typographie commune TAGORA | Duo Outfit (body/UI) + Syne (display/marque) ; preuve Website `6415cdd` ; `WAITING_FOR_WEBSITE_EVIDENCE` fermé | **Remplacé** | Écosystème | Historique 2026-08-14 ; non actif | [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md), [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../09_design_system/CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md) | `REPLACED_BY_FINAL_BRAND_GUIDE` ; VALD-096 historique ; `WAITING_FOR_WEBSITE_EVIDENCE` reste CLOSED |
| DEC-018 | 2026-08-15 | Charte de marque centrale finale TAGORA | Guide `tagora_central_Guide_de_marque.pdf` (2026-08-14) = source finale ; 8 couleurs exclusives ; 4 gradients exclusifs ; Avenir Next + JHC Notion ; Outfit/Syne LEGACY ; mapping rôles en attente ; assets sources non reçus | **Validé** | Écosystème | Remplace matrice/palette provisoires et contrat Outfit+Syne pour l'usage actif ; aucun produit modifié | [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md), [CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md) | VALD-097 ; `PRODUCT_APPLICATION_AUTHORIZED=NO` ; `MARTIN_TRANSFER_REQUIRED=YES` |
| DEC-019 | 2026-08-16 | Contrat d'emplacement des surfaces TAGORA | `tagora.ca`=Website discover/sell ; `app.tagora.ca`=Nexus portail ; Time/Mail/Stock/Pulse=SaaS autonomes ; Time n'est plus l'entrée publique centrale ; `/login` standard ; pages commerciales FR/EN ; legacy Time `TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION` | **Validé** | Écosystème | Complète ADR-0004 ; clôt le rôle public Time ; aucun DNS/redirect/deploy | [ADR-0007](../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md), [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md) | VALD-098 ; Phase 4D Lot 2 inchangée ; `MARTIN_TRANSFER_REQUIRED=YES` |
| DEC-020 | 2026-08-16 | Mapping adresses / accès / identité cible TAGORA | Login central `app.tagora.ca/login` ; catalogue `/modules` ; slugs time/mail/stock/pulse ; CTA Website figés ; Nexus access broker ; Entra External ID cible ; TAGORA_HANDOFF_V1 cible ; SaaS autonomes ; pas de DB mots de passe partagée ; pas de cookie `.tagora.ca` partagé | **Validé** | Écosystème | Complète DEC-019 ; aucun SSO/Entra/OAuth/handoff réel | [ADR-0008](../05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md), [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md) | VALD-099 ; Phase 4D Lot 2 inchangée |
| DEC-021 | 2026-08-16 | Identité centrale et bootstrap utilisateurs Time | Time = source bootstrap, pas autorité ; TAGORA_USER_ID central ; Entra issuer+subject ; email ≠ identité canonique ; pas de copie mot de passe/hash ; rôles namespacés ; TAGORA_IDENTITY_LINK conceptuel | **Validé** | Écosystème | Complète DEC-020 ; aucune DB/Entra/SSO | [ADR-0009](../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md), [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md) | VALD-100 ; Phase 4D Lot 2 inchangée |
| DEC-022 | 2026-08-16 | Contrat technique TAGORA_HANDOFF_V1 | Handoff conceptuel Nexus → modules : code opaque one-time + assertion serveur-à-serveur ; sessions locales ; pas de cookie partagé ; pas de rôle métier universel ; adapters Time/Mail/Stock/Pulse ; pilote Stock recommandé non approuvé | **Validé** | Écosystème | Complète DEC-020 et DEC-021 ; aucun endpoint/Entra/OAuth réel | [ADR-0010](../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md), [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md) | VALD-101 ; I1–I3 PASS ; Phase 4D Lot 2 inchangée ; sélection pilote = DEC-023 |
| DEC-023 | 2026-08-16 | Sélection officielle du module pilote identité | Stock Premium = `SELECTED_PILOT_MODULE` ; `PILOT_SELECTION_APPROVED=YES` ; `PILOT_IMPLEMENTATION_AUTHORIZED=NO` ; I5/I6/I7 non commencés ; aucun transfert d'implémentation Stock | **Validé** | Écosystème | Complète DEC-022 ; n'autorise pas I7 | [ADR-0011](../05_adr/ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md) | VALD-102 ; I4 CLOSED ; Phase 4D Lot 2 inchangée |
| DEC-024 | 2026-08-16 | Fondation officielle TAGORA Sourcing AI | Module autonome super-agent défini : commercial `TAGORA Sourcing AI` ; moteur `Supplier Intelligence` ; agent visible `TAGORA Sourcing Agent` ; SaaS mensuel revendable ; Alibaba canal prioritaire sans connecteur ; Mail IA = canal email ; aucune autorité d'achat/commande/paiement ; surfaces candidates | **Validé** | Écosystème | Nouveau module TOS documenté ; repo non créé ; DNS non adopté | [ADR-0012](../05_adr/ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md), [fondation](../04_adoption_modules/TAGORA_SOURCING_AI_SUPER_AGENT_MODULE_FOUNDATION.md) | VALD-103 ; ancien gate fondation non enrichi non exécuté ; `MARTIN_TRANSFER_REQUIRED=YES` ; complété (non remplacé) par DEC-025 |
| DEC-025 | 2026-08-16 | Classification commerciale Sourcing AI Coming Soon + carte 5 modules | 5e module SaaS mensuel ; `COMMERCIAL_STATUS=COMING_SOON` ; domaine applicatif TBD ; route Nexus TBD ; Nexus n'est pas un module commercial ; présentation Website vision seulement ; candidats DEC-024 conservés comme historique non adopté / non implémenté | **Validé** | Écosystème | Complète DEC-024 sans la remplacer ; aucune implémentation Website/Nexus/DNS | [ADR-0013](../05_adr/ADR-0013-TAGORA-SOURCING-AI-COMMERCIAL-MODULE-MAP-COMING-SOON.md), [positionnement](../04_adoption_modules/TAGORA_SOURCING_AI_COMMERCIAL_POSITIONING_COMING_SOON.md) | VALD-104 ; `MARTIN_TRANSFER_REQUIRED=YES` |
| DEC-026 | 2026-08-17 | Nomenclature commerciale officielle + carte 6 modules | Time → `TAGORA HORORA` ; Pulse AI → `TAGORA PULS` ; Stock Premium / Stock Inventaire → `TAGORA DEPORA` ; Mail IA → `TAGORA MESSOR` ; Sourcing AI → `TAGORA YORVA` ; TAGORA TAG → `TAGORA ETIOQ` ; YORVA et ETIOQ Coming Soon / domaine TBD ; Nexus n'est pas un 7e module | **Validé** | Écosystème | Six noms commerciaux officiels en majuscules dans TOS ; six abonnements mensuels ; aucune application produit automatique | [ADR-0014](../05_adr/ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md), [nomenclature](../04_adoption_modules/NOMENCLATURE_COMMERCIALE_OFFICIELLE_TAGORA.md) | VALD-105 ; remplace les noms commerciaux et le compte de DEC-025 ; métiers et identifiants techniques conservés ; `MARTIN_TRANSFER_REQUIRED=YES` |

---

## Règles

- Ajouter une ligne pour chaque décision actée significative.
- Si décision structurante → ADR + mise à jour [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md).
- Ne pas inventer de décision non actée.
- Aucun secret dans ce registre.
- Les entrées **Brouillon — À VALIDER** ne sont pas des décisions officielles tant que non passées à **Validé** / **Acté**.

## Statut

**Enrichi — nomenclature commerciale officielle et carte des six modules** — DEC-026 **Validé** (VALD-105 / ADR-0014, 2026-08-17). HORORA, PULS, DEPORA, MESSOR, YORVA et ETIOQ ; casse majuscule uniforme ; YORVA / ETIOQ Coming Soon ; domaines applicatifs TBD ; Nexus non commercial. DEC-025 et DEC-024 restent historiques et valides dans leurs frontières, avec noms commerciaux et compte remplacés par DEC-026. DEC-023 à DEC-014 restent inchangées.
