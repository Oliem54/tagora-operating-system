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
| ADR-0004 | Convention des domaines canoniques TAGORA | **Validé** — Martin ST-Gelais — Direction | 2026-08-12 | Écosystème TAGORA | `tagora.ca` public ; `app.tagora.ca` Nexus ; sous-domaines stables par module ; staging `{service}.staging.tagora.ca` ; login `/login` | Convention normative seulement ; aucun DNS, déploiement ou autre repo autorisé |
| ADR-0005 | Contrat typographique transversal Outfit + Syne | **Validé** — Martin ST-Gelais — Direction | 2026-08-14 | Écosystème TAGORA | Body = Outfit ; Display = Syne ; fallback Segoe UI ; poids 400/500/600/700 ; preuve Website `6415cdd` | Ferme `WAITING_FOR_WEBSITE_EVIDENCE` ; aucun produit modifié par TOS |

### Liens

- [ADR-0001](ADR-0001-TOS_COMME_CONSTITUTION_METHODOLOGIQUE.md)
- [ADR-0002](ADR-0002-DOCUMENTATION_AVANT_CODE.md)
- [ADR-0003](ADR-0003-POSITIONNEMENT-TAGORA-NEXUS-PLATFORM-TCP.md)
- [ADR-0004](ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [ADR-0005](ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md)

---

## Prochaines entrées

Les ADR futures (TCP entitlements, billing, auth commune, contrat couleurs hex, repos Nexus/TCP, etc.) pourront être ajoutées après transfert Martin des paquets concernés.

---

## Statut du registre

**Enrichi — ADR-0005 Validé (contrat typographique Outfit + Syne, 2026-08-14)**
