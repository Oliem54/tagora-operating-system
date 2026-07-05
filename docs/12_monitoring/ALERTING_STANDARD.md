# Standard — Alerting

## Objectif

Définir le **rôle et les règles des alertes** TAGORA — actionnables, sans bruit inutile.

## Portée

Tous les modules TAGORA. **Aucune alerte réelle n'est créée dans TOS.**

---

## Rôle des alertes

Notifier une **condition anormale** nécessitant une **action** — pas un simple log consulté plus tard.

---

## Quand créer une alerte

- Erreur **critique** ou **répétée** au-delà d'un seuil
- Dégradation **performance** significative
- Échec **workflow orchestration** (TOF)
- **Post-release** — pic d'erreurs après déploiement (TRF + TMF)
- Indisponibilité **service** ou dépendance externe

---

## Quand ne pas créer une alerte

- Événement **informationnel** sans action requise → log ou métrique
- Erreur **isolée** sans récurrence
- Condition **déjà couverte** par une alerte existante (éviter doublons)
- Bruit **non actionnable** — alerte fatigue

---

## Niveaux d'alerte

| Niveau | Usage | Escalade |
|---|---|---|
| **Info** | Signal informatif, pas d'urgence | Log / dashboard |
| **Warning** | Anomalie à surveiller | Équipe technique |
| **Urgent** | Impact utilisateur probable | Responsable technique |
| **Critique** | Service ou données en risque | Chemin d'escalade humain immédiat |

---

## Règles

1. **Une alerte doit être actionnable** — destinataire sait quoi faire.
2. **Éviter le bruit inutile** — seuils calibrés ; regroupement si pertinent.
3. **Alerte critique = escalade humaine** — pas d'automatisation seule pour décisions métier.
4. **Aucun secret** dans message d'alerte.

---

## Exemples documentaires (non implémentés)

| Exemple | Niveau | Module |
|---|---|---|
| Échec punch répété (> N en 5 min) | Urgent | TAGORA Time |
| Erreur API critique (5xx massif) | Critique | Tout module |
| Échec workflow orchestration | Warning / Urgent | TOF / module |
| Pic erreurs post-release majeure | Urgent | TRF + TMF |

> Ces exemples illustrent le cadre documentaire. **Aucune alerte n'est branchée dans TOS.**

---

## Statut

**Créé — Phase 3H**
