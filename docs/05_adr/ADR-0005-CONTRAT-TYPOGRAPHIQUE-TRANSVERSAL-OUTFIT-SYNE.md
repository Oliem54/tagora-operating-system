# ADR-0005 — Contrat typographique transversal TAGORA (Outfit + Syne)

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-14**

Validation : **VALD-096**  
Décision : **DEC-017**

Cette ADR ferme uniquement le **contrat typographique** transversal TAGORA.

Elle **n'autorise aucune application** dans Website, Nexus, Time, Mail IA, Stock Premium ou Pulse AI.  
Elle **ne modifie pas** le contrat de couleurs.  
Elle **n'autorise aucun DNS, déploiement, code produit, installation ou secret**.

---

## Contexte

Le système visuel transversal TAGORA attendait une preuve typographique issue du projet réellement approuvé pour l'identité publique :

```text
TYPOGRAPHY_STATUS=WAITING_FOR_WEBSITE_EVIDENCE
```

L'agent TAGORA Website a produit une inspection READ-ONLY PASS.

Preuve GitHub :

```text
REPOSITORY=Oliem54/tagora-website
BRANCH=main
EVIDENCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
```

Sources Website :

- `src/app/layout.tsx` — `next/font/google` Outfit + Syne
- `src/app/globals.css` — `--font-sans` / `--font-display`
- `src/components/BrandMark.tsx` — display weight 700
- composants utilisant la classe `.display`

Martin a décidé que la référence commune doit être le **duo réellement utilisé**, sans réduction artificielle à une seule famille.

---

## Décision normative

```text
TYPOGRAPHY_STATUS=APPROVED_FROM_WEBSITE_EVIDENCE
TYPOGRAPHY_SYSTEM=OUTFIT_BODY_PLUS_SYNE_DISPLAY
TYPOGRAPHY_EVIDENCE_COMPLETE=YES
TYPOGRAPHY_SOURCE_PROJECT=TAGORA WEBSITE
TYPOGRAPHY_SOURCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce

TAGORA_BODY_FONT=Outfit
TAGORA_DISPLAY_FONT=Syne
TAGORA_SYSTEM_FALLBACK="Segoe UI", sans-serif
TAGORA_ALLOWED_WEIGHTS=400,500,600,700
TAGORA_FONT_LOADING=swap
```

### Responsabilités

| Famille | Rôle | Usages autorisés | Usages interdits |
|---|---|---|---|
| **Outfit** | Body / interface | corps, navigation, menus, boutons, champs, libellés, tableaux, données, filtres, badges, alertes, modales, UI opérationnelle | signature marque exclusive |
| **Syne** | Display / marque | BrandMark TAGORA, H1 marketing, grands titres de page, titres de sections stratégiques, éléments de marque expressifs | longs paragraphes, petits libellés, tableaux, champs, gros volumes de texte opérationnel |

### Stacks CSS de référence

```text
BODY_STACK=Outfit, "Segoe UI", sans-serif
DISPLAY_STACK=Syne, Outfit, "Segoe UI", sans-serif
```

### Poids

| Poids | Usage |
|---|---|
| 400 | texte courant |
| 500 | éléments secondaires renforcés |
| 600 | boutons, navigation active, sous-titres |
| 700 | titres importants et BrandMark |

### Chargement

- Méthode préférée : `next/font` lorsque le framework le fournit.
- `display=swap`.
- Ne pas introduire une dépendance externe uniquement pour harmoniser la police si le framework offre déjà une méthode officielle.
- Aucune police locale obligatoire dans ce contrat.
- Aucun `@font-face` local imposé.

### Legacy

| Famille | Statut |
|---|---|
| Fraunces | LEGACY — absente du code Website actif |
| Arial | Hors interface React (SVG icon seulement) |
| Segoe UI | ACTIVE uniquement comme fallback système |

---

## Portée et non-décisions

Cette ADR **ne décide pas** :

- palette hex officielle (contrat couleurs distinct) ;
- affectations de couleurs par module ;
- application UI dans un produit ;
- remplacement des systèmes de chargement existants hors nécessité ;
- logo SVG final.

---

## Conséquences

1. `WAITING_FOR_WEBSITE_EVIDENCE` est **fermé**.
2. Les projets reçoivent un paquet de transfert Martin avant toute application locale.
3. Outfit + Syne deviennent la référence commune TAGORA.
4. Toute exception typographique future nécessite une décision TOS/Martin distincte.

---

## Preuves

Inspection Website READ-ONLY PASS — HEAD `6415cdd0eea9e416d0ec8f4b47ca56d41865adce`.

Voir aussi :

- [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md)
- [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../09_design_system/CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
- [PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md)
- [VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../10_knowledge/VALIDATION_VALD_096_CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
