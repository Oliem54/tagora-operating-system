# Typographie — TDS

## Objectif

Définir le **contrat typographique officiel** TAGORA — familles finales approuvées, styles déclarés, et limites d'implémentation — pour tous les modules.

## Portée

Familles, styles déclarés, hiérarchie textuelle et règles d'usage — tous modules TAGORA.

Source canonique : [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md) · **DEC-018** · **ADR-0006** · **VALD-097**

---

## Statut

```text
TYPOGRAPHY_STATUS=FINAL_FAMILIES_APPROVED
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
FONT_FILES_RECEIVED=NO
FONT_IMPLEMENTATION_AUTHORIZED=NO
OUTFIT_SYNE_STATUS=LEGACY
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED
```

Décision active : **DEC-018** · ADR : **ADR-0006** · Validation : **VALD-097**

Le contrat Outfit + Syne (DEC-017 / ADR-0005 / VALD-096) est **LEGACY / SUPERSEDED** pour l'usage actif. `WAITING_FOR_WEBSITE_EVIDENCE` reste historiquement CLOSED.

---

## Familles officielles finales

La charte nomme **Avenir Next** et **JHC Notion**. Elle ne définit **pas** explicitement leur responsabilité respective body / display.

| Famille | Styles / poids déclarés | Rôle |
|---|---|---|
| **Avenir Next** | Light, Regular, Italic, Medium, Bold, Heavy | Non confirmé |
| **JHC Notion** | Medium, Heavy Italic | Non confirmé |

```text
OFFICIAL_FONT_FAMILIES=Avenir Next ; JHC Notion
TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION
```

Ne **pas** inscrire :

- `Avenir Next = body`
- `JHC Notion = display`

comme règle officielle sans confirmation Martin ou designer distincte.

Ne **pas** reproduire automatiquement l'ancien modèle Outfit-body / Syne-display.

---

## Actifs typographiques

```text
FONT_FILES_RECEIVED=NO
FONT_IMPLEMENTATION_AUTHORIZED=NO
```

Exiger avant implémentation exacte :

- fichiers web licenciés Avenir Next ;
- fichiers web licenciés JHC Notion ;
- preuve / licence d'utilisation web appropriée ;
- formats web nécessaires au projet ;
- confirmation du rôle de chaque famille.

Interdit :

- télécharger une police depuis une source non approuvée ;
- partager les fichiers de police ;
- committer une police sans gate produit spécifique ;
- substituer automatiquement une police ressemblante.

---

## Rôle de la typographie

La typographie TAGORA doit :

- Rendre l'information **lisible rapidement** — surtout les données critiques.
- Créer une **hiérarchie claire**.
- Renforcer l'**identité professionnelle** — moderne, sobre, premium.
- Fonctionner pour un public **20 à 60 ans et plus**.

> **Principe :** Lisibilité avant style. L'affectation body / display des familles finales attend confirmation.

---

## Hiérarchie recommandée (structure, sans mapping de famille)

Les niveaux restent valides. L'assignation Avenir Next / JHC Notion à chaque niveau **n'est pas actée**.

| Niveau | Usage | Police | Priorité visuelle |
|---|---|---|---|
| **Titre page** | Nom de l'écran / H1 marketing | En attente de confirmation de rôle | Maximum |
| **Titre section** | Bloc majeur stratégique | En attente de confirmation de rôle | Élevée |
| **Sous-section** | Groupement secondaire | En attente de confirmation de rôle | Moyenne |
| **Texte principal** | Contenu courant | En attente de confirmation de rôle | Standard |
| **Texte secondaire** | Aide, métadonnées | En attente de confirmation de rôle | Atténué |
| **Libellés** | Formulaires, colonnes | En attente de confirmation de rôle | Clair, compact |
| **Données importantes** | Statuts, totaux | En attente de confirmation de rôle | Renforcé |
| **Alertes** | Erreurs, avertissements | En attente de confirmation de rôle | Distinct |
| **BrandMark** | Mot-symbole TAGORA | En attente de confirmation de rôle + assets logo officiels | Signature |

---

## Chargement

1. Aucune installation tant que `FONT_IMPLEMENTATION_AUTHORIZED=NO`.
2. Préférer la méthode native du framework une fois les fichiers licenciés reçus.
3. Ne pas ajouter de dépendance externe non approuvée uniquement pour la police.
4. Adapter au framework du projet sans réécrire inutilement le système de chargement.
5. Application locale uniquement après transfert Martin du paquet de charte.

---

## Règles

1. **Éviter les textes trop petits** — Surtout sur mobile et pour les données métier.
2. **Données critiques lisibles rapidement**.
3. **Cohérence entre modules** — mêmes familles officielles, dès que le mapping et les fichiers sont fournis.
4. **Pas de police hors contrat** sans décision TOS/Martin.
5. **Accessibilité** — Tailles et contrastes alignés sur [ACCESSIBILITE.md](ACCESSIBILITE.md).
6. **Application locale** uniquement après transfert Martin, assets licenciés et confirmation de rôle.

---

## Legacy

| Famille | Statut |
|---|---|
| **Outfit** | **LEGACY** — ancien body/UI (DEC-017 / ADR-0005 / VALD-096) |
| **Syne** | **LEGACY** — ancien display/marque (DEC-017 / ADR-0005 / VALD-096) |
| Fraunces | LEGACY |
| Arial | Hors UI React (SVG seulement côté Website, historique) |
| Segoe UI | Fallback système historique — non reconfirmé pour les familles finales |

L'ancien mapping `TAGORA_BODY_FONT=Outfit` / `TAGORA_DISPLAY_FONT=Syne` n'est **plus** la norme centrale active. Il reste documenté dans [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md) et [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md).

---

## Références

- [CHARTE_MARQUE_CENTRALE_TAGORA.md](CHARTE_MARQUE_CENTRALE_TAGORA.md)
- [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md)
- [PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_CHARTE_MARQUE_CENTRALE.md)
- [VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md](../10_knowledge/VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md)
- Historique : [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md), [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
