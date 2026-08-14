# Typographie — TDS

## Objectif

Définir le **contrat typographique officiel** TAGORA — lisibilité, hiérarchie et familles approuvées — pour tous les modules.

## Portée

Hiérarchie textuelle, familles, graisses et usage — tous modules TAGORA.

---

## Statut

```text
TYPOGRAPHY_STATUS=APPROVED_FROM_WEBSITE_EVIDENCE
TYPOGRAPHY_SYSTEM=OUTFIT_BODY_PLUS_SYNE_DISPLAY
TYPOGRAPHY_EVIDENCE_COMPLETE=YES
TYPOGRAPHY_SOURCE_PROJECT=TAGORA WEBSITE
TYPOGRAPHY_SOURCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED
```

Décision : **DEC-017** · ADR : **ADR-0005** · Validation : **VALD-096**

---

## Familles officielles

| Rôle | Famille | Fallback |
|---|---|---|
| Body / interface | **Outfit** | `"Segoe UI", sans-serif` |
| Display / marque | **Syne** | `Outfit, "Segoe UI", sans-serif` |

```text
TAGORA_BODY_FONT=Outfit
TAGORA_DISPLAY_FONT=Syne
TAGORA_SYSTEM_FALLBACK="Segoe UI", sans-serif
TAGORA_ALLOWED_WEIGHTS=400,500,600,700
TAGORA_FONT_LOADING=swap
```

Stacks :

```css
font-family: Outfit, "Segoe UI", sans-serif; /* body / UI */
font-family: Syne, Outfit, "Segoe UI", sans-serif; /* display / marque */
```

---

## Rôle de la typographie

La typographie TAGORA doit :

- Rendre l'information **lisible rapidement** — surtout les données critiques.
- Créer une **hiérarchie claire**.
- Renforcer l'**identité professionnelle** — moderne, sobre, premium.
- Fonctionner pour un public **20 à 60 ans et plus**.

> **Principe :** Lisibilité avant style. Syne signe la marque ; Outfit porte l'interface.

---

## Usages

### Outfit — body et interface

Utiliser pour :

- corps de texte ;
- navigation et menus ;
- boutons et CTA ;
- champs et libellés ;
- tableaux et données ;
- filtres, badges, alertes, modales ;
- interfaces opérationnelles SaaS.

### Syne — display et marque

Utiliser pour :

- BrandMark TAGORA ;
- titres H1 marketing ;
- grands titres de page ;
- titres de sections stratégiques ;
- éléments de marque expressifs.

Ne **pas** utiliser Syne pour :

- longs paragraphes ;
- petits libellés ;
- tableaux de données ;
- champs de formulaire ;
- grandes quantités de texte opérationnel.

---

## Poids autorisés

| Poids | Usage |
|---|---|
| **400** | texte courant |
| **500** | éléments secondaires renforcés |
| **600** | boutons, navigation active, sous-titres |
| **700** | titres importants et BrandMark |

Aucun autre poids n'est requis par le contrat transversal.

---

## Hiérarchie recommandée

| Niveau | Usage | Police | Priorité visuelle |
|---|---|---|---|
| **Titre page** | Nom de l'écran / H1 marketing | Syne | Maximum |
| **Titre section** | Bloc majeur stratégique | Syne ou Outfit 600 selon contexte | Élevée |
| **Sous-section** | Groupement secondaire | Outfit 600 | Moyenne |
| **Texte principal** | Contenu courant | Outfit 400 | Standard |
| **Texte secondaire** | Aide, métadonnées | Outfit 400/500 | Atténué |
| **Libellés** | Formulaires, colonnes | Outfit 400/500 | Clair, compact |
| **Données importantes** | Statuts, totaux | Outfit 600 | Renforcé |
| **Alertes** | Erreurs, avertissements | Outfit 600 | Distinct |
| **BrandMark** | Mot-symbole TAGORA | Syne 700 | Signature |

---

## Chargement

1. Préférer `next/font` si disponible.
2. `display=swap`.
3. Ne pas ajouter de dépendance externe uniquement pour la police.
4. Adapter au framework du projet sans réécrire inutilement le système de chargement.

---

## Règles

1. **Éviter les textes trop petits** — Surtout sur mobile et pour les données métier.
2. **Données critiques lisibles rapidement**.
3. **Cohérence entre modules** — mêmes familles et poids autorisés.
4. **Pas de police hors contrat** sans décision TOS/Martin.
5. **Accessibilité** — Tailles et contrastes alignés sur [ACCESSIBILITE.md](ACCESSIBILITE.md).
6. **Application locale** uniquement après transfert Martin du paquet typographique.

---

## Legacy

| Famille | Statut |
|---|---|
| Fraunces | LEGACY |
| Arial | Hors UI React (SVG seulement côté Website) |
| Segoe UI | Fallback système ACTIVE |

---

## Références

- [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md)
- [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
- [PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md)
- [VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../10_knowledge/VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
