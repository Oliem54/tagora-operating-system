# Contrat typographique transversal TAGORA

## Objectif

Matérialiser le statut, la source de preuve et les règles d'application du contrat typographique commun.

## Statut

```text
TYPOGRAPHY_STATUS=APPROVED_FROM_WEBSITE_EVIDENCE
TYPOGRAPHY_SYSTEM=OUTFIT_BODY_PLUS_SYNE_DISPLAY
TYPOGRAPHY_EVIDENCE_COMPLETE=YES
TYPOGRAPHY_SOURCE_PROJECT=TAGORA WEBSITE
TYPOGRAPHY_SOURCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED
COLOR_CONTRACT_SCOPE=NOT_MODIFIED_BY_THIS_DOCUMENT
PRODUCT_APPLICATION_AUTHORIZED=NO
```

Décision Martin : **DEC-017**  
ADR : **ADR-0005**  
Validation : **VALD-096**  
Date : **2026-08-14**

---

## Décision adoptée

| Élément | Valeur |
|---|---|
| Body font | Outfit |
| Display font | Syne |
| Fallback | `"Segoe UI", sans-serif` |
| Poids | 400 / 500 / 600 / 700 |
| Loading | swap |
| Architecture | dual font system |

Outfit assure la lisibilité des interfaces SaaS.  
Syne apporte la signature visuelle aux titres et à la marque TAGORA.

La référence commune **ne doit pas** être réduite à une seule famille.

---

## Preuve Website

```text
REPOSITORY=Oliem54/tagora-website
BRANCH=main
EVIDENCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
INSPECTION_MODE=READ-ONLY
INSPECTION_RESULT=PASS
CHANGES_DURING_INSPECTION=NO
```

Fichiers sources :

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/BrandMark.tsx`
- composants utilisant `.display`

Implémentation observée :

- `next/font/google`
- variables CSS `--font-outfit`, `--font-syne`, `--font-sans`, `--font-display`
- Tailwind v4 `@theme`
- aucun package de police indépendant
- aucun `@font-face` local

---

## Règle d'application

1. TOS documente et ferme le contrat.
2. Martin transfère séparément le paquet à chaque agent de projet.
3. Chaque projet applique localement avec son Human Gate propre.
4. TOS n'applique rien hors de son dépôt.

---

## Hors portée de ce contrat

- palette officielle et tokens couleur ;
- affectations de couleurs par module ;
- logo SVG final ;
- DNS, Production, déploiement ;
- modifications hors TOS.

## Risque séparé — couleurs

Le contrat couleurs TOS (`PALETTE_COULEURS.md`) reste distinct et n'est **pas** modifié ici.

TAGORA Website possède déjà une palette restrictive à 8 couleurs (`PALETTE_STATUS=OFFICIAL_RESTRICTIVE`) et des accents modules.

Toute divergence future entre affectations Website et un contrat couleurs TOS ultérieur devra être arbitrée par Martin **sans** auto-résolution TOS.

---

## Références

- [ADR-0005](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md)
- [TYPOGRAPHIE.md](TYPOGRAPHIE.md)
- [PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md)
