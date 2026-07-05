# Standard — Error Reporting

## Objectif

Définir le **reporting d'erreurs** TAGORA — classification, contenu et traçabilité.

## Portée

Tous les modules TAGORA. **Aucun outil de reporting réel n'est créé dans TOS.**

---

## Rôle du reporting d'erreurs

Permettre de **voir, qualifier et traiter** les erreurs avant qu'elles deviennent incidents majeurs. Complète logs (détail) et alertes (seuils).

---

## Classification

| Niveau | Description | Exemple documentaire |
|---|---|---|
| **Mineure** | Impact limité, contournement possible | Typo UI, message peu clair |
| **Moyenne** | Fonction dégradée, utilisateur impacté partiellement | Punch lent occasionnel |
| **Majeure** | Fonction principale indisponible pour un segment | Échec punch répété par site |
| **Critique** | Service ou données en risque | Auth cassée, corruption données |

---

## Éléments à inclure

| Champ | Description |
|---|---|
| **Module** | Dépôt ou service concerné |
| **Contexte** | Environnement, version, étape |
| **Impact** | Utilisateurs, données, métier |
| **Fréquence** | Isolé, intermittent, systématique |
| **Étape touchée** | Parcours, API, workflow |
| **Statut** | Ouvert, en cours, résolu, connu |
| **Propriétaire** | Rôle responsable |
| **Action recommandée** | Investigation, fix, escalade |

---

## Règles

1. **Ne pas cacher les erreurs** — transparence interne ; pas de silence sur échecs répétés.
2. **Distinguer clairement** :
   - **Bug confirmé** — reproduit, cause identifiée ou en cours
   - **Soupçon** — signal faible, à investiguer
   - **Incident** — impact service ou utilisateurs (voir [INCIDENT_RESPONSE_STANDARD.md](INCIDENT_RESPONSE_STANDARD.md))
   - **Limitation connue** — documentée, acceptée temporairement (TKS)

---

## Statut

**Créé — Phase 3H**
