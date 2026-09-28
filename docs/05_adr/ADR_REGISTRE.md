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
| ADR-0006 | Charte de marque centrale finale TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-15 | Écosystème TAGORA | Guide PDF 2026-08-14 = source finale ; 8 couleurs exclusives ; 4 gradients ; Avenir Next + JHC Notion ; mapping rôles en attente | Aucun produit modifié ; actifs reçus le 2026-08-17, licences/contrastes à valider ; transfert Martin requis |
| ADR-0007 | Contrat d'emplacement des surfaces TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Website=`tagora.ca` discover/sell ; Nexus=`app.tagora.ca` portail ; SaaS autonomes ; Time n'est plus l'entrée publique centrale | Doc + paquets seulement ; aucun DNS/redirect/deploy |
| ADR-0008 | Contrat de mapping et d'intégration des modules TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Login central `app.tagora.ca/login` ; `/modules/{slug}` ; Nexus access broker ; Entra External ID cible ; HANDOFF_V1 cible | Complète ADR-0007 ; aucun SSO/Entra/OAuth réel |
| ADR-0009 | Identité centrale TAGORA et bootstrap utilisateurs Time | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Time = source bootstrap ; TAGORA_USER_ID ; Entra issuer+subject ; email ≠ identité ; pas de copie mot de passe ; rôles namespacés | Complète ADR-0008 ; aucune DB/Entra/SSO |
| ADR-0010 | Contrat technique TAGORA_HANDOFF_V1 | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Handoff hybride code opaque + assertion serveur-à-serveur ; sessions locales ; adapters Time/Mail/Stock/Pulse ; pilote Stock recommandé non approuvé | Complète ADR-0008 et ADR-0009 ; aucun endpoint/Entra/OAuth réel ; sélection pilote = ADR-0011 |
| ADR-0011 | Sélection officielle du module pilote identité : Stock Premium | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | `SELECTED_PILOT_MODULE=STOCK_PREMIUM` ; sélection approuvée ; implémentation non autorisée ; I5/I6/I7 non commencés | Complète ADR-0010 ; n'autorise pas I7 ; Stock non touché |
| ADR-0012 | Fondation officielle du module TAGORA Sourcing AI (super-agent) | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | Module autonome SaaS agentique ; un agent visible ; Alibaba prioritaire sans connecteur ; aucune autorité d'achat ; surfaces candidates | Complète ADR-0004/0007/0008 sans les remplacer ; repo non créé ; DNS non adopté ; complété (non remplacé) par ADR-0013 |
| ADR-0013 | Classification commerciale TAGORA Sourcing AI (Coming Soon) et carte des cinq modules SaaS | **Validé** — Martin ST-Gelais — Direction | 2026-08-16 | Écosystème TAGORA | 5e module SaaS mensuel Coming Soon ; domaine applicatif TBD ; Nexus n'est pas un module commercial ; routes Website proposées non implémentées | Complète ADR-0012 sans la remplacer ; aucun DNS ; aucune implémentation Website/Nexus |
| ADR-0014 | Nomenclature commerciale officielle et carte des six modules SaaS | **Validé** — Martin ST-Gelais — Direction | 2026-08-17 | Écosystème TAGORA | HORORA, PULS, DEPORA, MESSOR, YORVA et ETIOQ ; casse majuscule uniforme ; YORVA / ETIOQ Coming Soon ; Nexus non commercial | Remplace les noms commerciaux et le compte de cinq modules ; conserve métiers, historique et identifiants techniques ; aucun autre repository touché |
| ADR-0015 | Politique de transition de l'architecture de marque TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-17 | Écosystème TAGORA | `TAGORA + NOM` reste canonique ; `NOM par TAGORA` secondaire ; « anciennement » maximum 6 mois ; routes/domaines option C ; séparation logos/typographie | Complète ADR-0014 ; pilote Website préparé mais non autorisé ; aucun autre repository touché |
| ADR-0016 | Format commercial uniforme des modules TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-17 | Écosystème TAGORA | Problème, action, résultat, risque, statut et CTA ; langage court et entrepreneurial ; statuts actuel/pilote/futur distincts | Complète ADR-0015 ; aucune réécriture Website ni promesse non mesurée autorisée |
| ADR-0017 | Système d'identité visuelle cohérente des modules TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-18 | Écosystème TAGORA | 80 % structure commune / 20 % identité produit ; thèmes par tokens ; états sémantiques globaux ; WCAG 2.2 AA | DEPORA premier pilote ; 8 paquets ; aucune implémentation produit autorisée |
| ADR-0018 | Identité visuelle unifiée de la collègue IA TAGORA V1 | **Validé** — Martin ST-Gelais — Direction | 2026-09-05 | Écosystème TAGORA | Une seule femme rousse adulte (`TAGORA_AI_COLLEAGUE_V1`) pour Nexus, PULS, HORORA, DEPORA, MESSOR, YORVA, ETIOQ et le site TAGORA ; pas de transfert de permissions | Gouvernance TOS seulement ; registre technique Nexus et implémentation modules non autorisés |
| ADR-0019 | Couche de rôles de gouvernance d'organisation Nexus | **Validé** — Martin ST-Gelais — Direction | 2026-09-06 | Nexus + TOS | `organization_owner` / `organization_admin` / `organization_member` distincts des rôles d'entrée, principals admin Nexus et rôles métier ; colonne sur `nexus_memberships` | Contrat TOS ; spec Nexus ; migration non appliquée ; gate d'implémentation distinct |
| ADR-0020 | Architecture V1 d'EXPANORA | **Validé** — Martin ST-Gelais — Direction | 2026-09-22 | TOS ; module futur EXPANORA | Module autonome ; clé `tagora_expanora` ; tuile Nexus réservée non visible ; demandes d'action vers le module propriétaire ; aucun fournisseur IA dans le cœur | VALD-110 ; implémentation non autorisée ; registre des modules non réécrit |
| ADR-0021 | Architecture de déploiement EXPANORA V1 | **Validé — amendé 24/7** — Martin ST-Gelais — Direction | 2026-09-22 | TOS ; déploiement futur EXPANORA | Runtime cloud permanent 24/7 exigé ; fournisseur non verrouillé ; Vercel et Supabase `ca-central-1` inchangés | VALD-111 amendée ; ADR-0020 non rouverte ; aucune infrastructure |
| ADR-0022 | Hébergement du runtime 24/7 EXPANORA | **Validé** — Martin ST-Gelais — Direction | 2026-09-23 | TOS ; runtime EXPANORA | Cloud Run worker pools à Montréal ; au moins une instance par environnement ; coût non figé | VALD-112 ; aucun projet Google ; ADR-0021 non remplacée |
| ADR-0023 | Préparation d'implémentation du runtime 24/7 EXPANORA | **Validé** — Martin ST-Gelais — Direction | 2026-09-23 | TOS ; préparation EXPANORA | Ordre de grandeur 72,60 USD/mois ; deux projets GCP ; file Postgres derrière contrat ; Production sur un GO distinct | VALD-113 ; aucun dépôt ; ADR-0022 non rouverte |

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
- [ADR-0013](ADR-0013-TAGORA-SOURCING-AI-COMMERCIAL-MODULE-MAP-COMING-SOON.md)
- [ADR-0014](ADR-0014-NOMENCLATURE-COMMERCIALE-SIX-MODULES-SAAS.md)
- [ADR-0015](ADR-0015-POLITIQUE-TRANSITION-ARCHITECTURE-MARQUE-TAGORA.md)
- [ADR-0016](ADR-0016-FORMAT-COMMERCIAL-UNIFORME-MODULES-TAGORA.md)
- [ADR-0017](ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md)
- [ADR-0018](ADR-0018-IDENTITE-VISUELLE-COLLEGUE-IA-TAGORA-V1.md)
- [ADR-0019](ADR-0019-COUCHE-ROLES-GOUVERNANCE-ORGANISATION-NEXUS.md)
- [ADR-0020](ADR-0020-ARCHITECTURE-EXPANORA-V1.md)
- [ADR-0021](ADR-0021-ARCHITECTURE-DEPLOIEMENT-EXPANORA-V1.md)
- [ADR-0022](ADR-0022-HEBERGEMENT-RUNTIME-24X7-EXPANORA.md)
- [ADR-0023](ADR-0023-PREPARATION-IMPLEMENTATION-RUNTIME-24X7-EXPANORA.md)

---

## Prochaines entrées

Les ADR futures (validation des licences Web, mapping typographique, repos Nexus/TCP, logout global, modèle I5, domaines applicatifs YORVA / ETIOQ, classement commercial d'EXPANORA, etc.) pourront être ajoutées après transfert Martin des paquets concernés. TAGORA_HANDOFF_V1 est figé conceptuellement par ADR-0010. Le pilote identité reste identifié techniquement comme Stock Premium par ADR-0011 ; l'implémentation du pilote et I5–I9 restent interdits. Le métier Sourcing AI est fondé par ADR-0012, classé Coming Soon par ADR-0013 et renommé commercialement TAGORA YORVA par ADR-0014. TAGORA ETIOQ est ajouté comme sixième module Coming Soon. ADR-0015 fixe la transition progressive, ADR-0016 le format commercial, ADR-0017 le système visuel commun des modules, et ADR-0018 l'identité visuelle de la collègue IA. ADR-0019 fige la couche de gouvernance d'organisation Nexus ; la migration `governance_role` exige un gate d'implémentation distinct. ADR-0020 valide l'architecture V1 d'EXPANORA (VALD-110) : module autonome, clé `tagora_expanora`, tuile réservée non visible, demandes d'action sans écriture directe intermodule. Elle n'amende pas ADR-0014 ni ADR-0018. ADR-0022 valide Cloud Run worker pools à Montréal pour le runtime 24/7. Le coût n'est pas figé. Aucun compte n'est créé. Elle ne remplace pas ADR-0021. ADR-0023 valide la préparation d'implémentation (ordre de grandeur 72,60 USD/mois, deux projets, file Postgres derrière contrat). Le prochain gate `EXPANORA-LOCAL-REPOSITORY-BOOTSTRAP-GO` n'est pas autorisé. Repositories, DNS et connecteurs restent interdits hors gates propres.

---

## Statut du registre

**Enrichi — ADR-0023 Validée (préparation runtime EXPANORA, 2026-09-23)** — VALD-113. Ordre de grandeur 72,60 USD/mois. Deux projets non créés. File derrière contrat. Bootstrap local non autorisé. ADR-0022, ADR-0021 et ADR-0020 ne sont pas rouvertes.
