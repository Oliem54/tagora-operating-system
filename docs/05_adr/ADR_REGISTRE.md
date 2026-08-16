# Registre officiel des ADR — TAGORA Operating System

## Objectif

Indexer toutes les Architecture Decision Records du dépôt TOS pour une consultation rapide et une traçabilité durable.

## Portée

ADR stockées dans `docs/05_adr/`. Complète le [README_ADR.md](README_ADR.md) et le [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md).

---

## Règles de mise à jour

1. Toute nouvelle ADR est ajoutée à ce registre **le jour de sa création**.
2. Tout changement de **statut** est répercuté ici.
3. Ne pas supprimer une ligne : marquer **Remplacé**, **Refusé** ou **Archivé**.
4. Le résumé reste court — le détail est dans le fichier ADR.
5. Aucun secret, mot de passe ou donnée sensible dans ce registre.

---

## Tableau des ADR

| ID | Titre | Statut | Date | Portée | Résumé de décision | Impact principal |
|---|---|---|---|---|---|---|
| ADR-0001 | TOS comme Constitution méthodologique, pas comme application | Accepté initialement — à valider humainement | 2026-07-02 | Écosystème TAGORA | TOS n'est pas une application métier ; c'est la référence méthodologique, documentaire, architecturale, QA, design, IA, orchestration et gouvernance | Tous modules ; Time = pilote |
| ADR-0002 | Documentation avant code | Accepté initialement — à valider humainement | 2026-07-02 | Écosystème TAGORA | Tout développement important est précédé d'une documentation minimale (besoin, périmètre, métier, UX, QA, risques, validation) | Time en premier ; tous modules ensuite |
| ADR-0003 | Positionnement TAGORA Nexus, Cloud, Platform, TCP et Flow | **Validé** — Martin ST-Gelais — Direction | 2026-08-10 | Écosystème TAGORA | Option A renforcée : TOS = constitution ; Cloud = marque/offre SaaS ; Nexus = portail « Mon espace TAGORA » ; TCP = capacités faisant autorité ; Flow = orchestration ; Platform = terme déprécié (ancien repo intact) | Baseline documentaire Nexus autorisée ; `tagora-cloud-portal` toujours interdit |
| ADR-0004 | Convention des domaines canoniques TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-12 | Écosystème TAGORA | `tagora.ca` public ; `app.tagora.ca` Nexus ; sous-domaines stables par module ; staging `{service}.staging.tagora.ca` ; login `/login` | Convention URL ; complétée par ADR-0007 (rôles de surface) ; aucun DNS |
| ADR-0005 | Contrat typographique transversal Outfit + Syne | **Remplacé par ADR-0006** — historique Validé 2026-08-14 | 2026-08-14 | Écosystème TAGORA | Body = Outfit ; Display = Syne ; preuve Website `6415cdd` — **LEGACY** pour usage actif | `WAITING_FOR_WEBSITE_EVIDENCE` reste CLOSED ; supersédé par ADR-0006 |
| ADR-0006 | Charte de marque centrale finale TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-15 | Écosystème TAGORA | Guide PDF 2026-08-14 = source finale ; 8 couleurs exclusives ; 4 gradients ; Avenir Next + JHC Notion ; mapping rôles en attente | Aucun produit modifié ; assets sources et fonts non reçus ; transfert Martin requis |
| ADR-0007 | Contrat d'emplacement des surfaces TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Website=`tagora.ca` discover/sell ; Nexus=`app.tagora.ca` portail ; SaaS autonomes ; Time n'est plus l'entrée publique centrale | Doc + paquets seulement ; aucun DNS/redirect/deploy |
| ADR-0008 | Contrat de mapping et d'intégration des modules TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Login central `app.tagora.ca/login` ; `/modules/{slug}` ; Nexus access broker ; Entra External ID cible ; HANDOFF_V1 cible | Complète ADR-0007 ; aucun SSO/Entra/OAuth réel |
| ADR-0009 | Identité centrale TAGORA et bootstrap utilisateurs Time | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Time = source bootstrap ; TAGORA_USER_ID ; Entra issuer+subject ; email ≠ identité ; pas de copie mot de passe ; rôles namespacés | Complète ADR-0008 ; aucune DB/Entra/SSO |
| ADR-0010 | Contrat technique TAGORA_HANDOFF_V1 | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Handoff hybride code opaque + assertion serveur-à-serveur ; sessions locales ; adapters Time/Mail/Stock/Pulse ; pilote Stock recommandé non approuvé | Complète ADR-0008 et ADR-0009 ; aucun endpoint/Entra/OAuth réel ; sélection pilote = ADR-0011 |
| ADR-0011 | Sélection officielle du module pilote identité : Stock Premium | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | `SELECTED_PILOT_MODULE=STOCK_PREMIUM` ; sélection approuvée ; implémentation non autorisée ; I5/I6/I7 non commencés | Complète ADR-0010 ; n'autorise pas I7 ; Stock non touché |
| ADR-0012 | Fondation officielle du module TAGORA Sourcing AI (super-agent) | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Module autonome SaaS agentique ; un agent visible ; Alibaba prioritaire sans connecteur ; aucune autorité d'achat ; surfaces candidates | Complète ADR-0004/0007/0008 sans les remplacer ; repo non créé ; DNS non adopté |

### Liens

- [ADR-0001](ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
- [ADR-0002](ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [ADR-0003](ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
- [ADR-0004](ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [ADR-0005](ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md) — remplacé par ADR-0006
- [ADR-0006](ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md)
- [ADR-0007](ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [ADR-0008](ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- [ADR-0009](ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- [ADR-0010](ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- [ADR-0011](ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md)
- [ADR-0012](ADR-0012-TAGORA-SOURCING-AI-SUPER-AGENT-MODULE-FOUNDATION.md)

---

## Prochaines entrées

Les ADR futures (mapping sémantique des couleurs, rôle Avenir Next / JHC Notion, repos Nexus/TCP, logout global, modèle I5, adoption DNS de `sourcing.tagora.ca`, etc.) pourront être ajoutées après transfert Martin des paquets concernés. TAGORA_HANDOFF_V1 est figé conceptuellement par ADR-0010. Le pilote identité est sélectionné par ADR-0011 (Stock Premium) ; l'implémentation du pilote et I5–I9 restent interdits. TAGORA Sourcing AI est fondé par ADR-0012 ; repo, DNS et connecteurs restent interdits.

---

## Statut du registre

**Enrichi — ADR-0012 Validé (fondation TAGORA Sourcing AI super-agent, 2026-08-16)** — ADR-0011 reste Validé (pilote identité Stock). ADR-0010 reste Validé (HANDOFF_V1). ADR-0009 reste Validé (bootstrap identité). ADR-0008 reste Validé (mapping). ADR-0007 reste Validé (surfaces). ADR-0004 reste Validé (domaines). ADR-0006 Validé (charte). ADR-0005 Remplacé.
