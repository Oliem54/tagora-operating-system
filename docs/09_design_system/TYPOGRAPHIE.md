# Typographie — TDS

## Objectif

Définir le **cadre typographique** TAGORA — lisibilité, hiérarchie et cohérence — sans imposer de police finale à ce stade.

## Portée

Hiérarchie textuelle, tailles, graisses et usage — tous modules TAGORA.

---

## Rôle de la typographie

La typographie TAGORA doit :

- Rendre l'information **lisible rapidement** — surtout les données critiques (statuts, horaires, alertes).
- Créer une **hiérarchie claire** — l'utilisateur sait quoi lire en premier.
- Renforcer l'**identité professionnelle** — moderne, sobre, premium.
- Fonctionner pour un public **20 à 60 ans et plus**.

> **Principe :** Lisibilité avant style. Une police distinctive ne justifie pas une baisse de clarté.

---

## Hiérarchie recommandée

| Niveau | Usage | Priorité visuelle |
|---|---|---|
| **Titre page** | Nom de l'écran, contexte principal | Maximum |
| **Titre section** | Bloc majeur (ex. « Aujourd'hui », « Équipe ») | Élevée |
| **Sous-section** | Groupement secondaire | Moyenne |
| **Texte principal** | Contenu courant, paragraphes | Standard |
| **Texte secondaire** | Aide, métadonnées, timestamps | Atténué |
| **Libellés** | Labels formulaires, colonnes | Clair, compact |
| **Données importantes** | Horaires, statuts punch, totaux | **Renforcé** — souvent plus grand ou plus gras |
| **Alertes** | Erreurs, avertissements | Distinct du corps — couleur + poids |

---

## Règles

1. **Éviter les textes trop petits** — Surtout sur mobile et pour les données métier (horaires, statuts).
2. **Données critiques lisibles rapidement** — Punch actif, heure de fin, alerte retard : visibles sans zoom.
3. **Cohérence entre modules** — Même échelle typographique TAGORA (tokens à définir).
4. **Pas de police finale imposée ici** — Familles, tailles px/rem et line-height seront validées ultérieurement.
5. **Accessibilité** — Tailles et contrastes alignés sur [ACCESSIBILITE.md](ACCESSIBILITE.md).

---

## Application TAGORA Time

Priorités typographiques pour le pilote :

- Statut punch et heure courante → niveau **données importantes**.
- Messages d'erreur punch → niveau **alertes**.
- Rapports direction → titres section clairs ; chiffres agrégés renforcés.
- Libellés filtres → **libellés** — pas confondus avec titres de page.

---

## Éléments à documenter plus tard

- Familles de polices officielles (titres vs corps)
- Échelle typographique (tokens : `text-page-title`, etc.)
- Règles responsive (mobile vs desktop)
- Licences et fallbacks web fonts

## Statut

**Enrichi — Phase 3B** — Hiérarchie définie. Polices et tokens : à valider.
