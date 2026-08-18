# Standard — Image de marque

## Objectif

Définir le standard officiel de **l'image de marque logicielle TAGORA** — identité visuelle reconnaissable sur tout l'écosystème.

## Portée

Logo, couleurs, typographie, iconographie, ton visuel — tous points de contact utilisateur et modules.

---

## Image de marque logicielle TAGORA

L'image de marque TAGORA est l'**ensemble des signes visuels** qui permettent de reconnaître instantanément un produit de l'écosystème :

- Qualité perçue **professionnelle, premium, moderne**.
- **Cohérence** entre TAGORA HORORA, TAGORA PULS, TAGORA DEPORA, TAGORA MESSOR, TAGORA YORVA, TAGORA ETIOQ et le portail TAGORA Nexus.
- **Autonomie des modules** — chaque app garde son métier ; la marque unifie l'expérience, pas le contenu fonctionnel.

Inspiration d'**ambition** : suite professionnelle unifiée (cohérence multi-apps) — **sans copier** une marque tierce.

---

## Ton visuel

| Attribut | Description |
|---|---|
| **Professionnel** | Adapté au travail, à la gestion, à la conformité |
| **Premium** | Finition soignée, pas d'aspect amateur ou surchargé |
| **Moderne** | Contemporain, durable — pas de tendance éphémère |
| **Épuré** | Espace, clarté, retenue |
| **Accessible** | Lisible, contrasté, inclusif |

---

## Cohérence visuelle entre modules

- Même **logique** de couleurs sémantiques (succès, erreur, statuts).
- Même **hiérarchie** typographique.
- Même **famille** de patterns navigation et composants (TDS).
- Utilisateur : « Je suis dans l'univers TAGORA » — quel que soit le module ouvert.

---

## Règles générales

| Élément | Règle |
|---|---|
| **Logo** | Symbole géométrique + logotype + signature « Piloter • Innover • Performer » — versions verticale/horizontale ; min. 30 px ; proportions préservées ; assets sources requis ([CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md)) |
| **Couleurs** | Huit couleurs exclusives et quatre dégradés officiels — [PALETTE_COULEURS.md](../09_design_system/PALETTE_COULEURS.md), [CHARTE_MARQUE_CENTRALE_TAGORA.md](../09_design_system/CHARTE_MARQUE_CENTRALE_TAGORA.md) |
| **Thèmes produits** | Accents scellés et tokens dérivés par module — [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md) |
| **Structure UI** | 80 % structure commune / 20 % identité produit — [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md) |
| **Typographie** | Familles finales Avenir Next + JHC Notion — rôles body/display **non confirmés** — [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md), [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md) |
| **Icônes** | Style cohérent — set iconographique commun (à valider) |
| **Statuts** | Couleurs et libellés sémantiques alignés écosystème |
| **Exceptions** | Documentées via gouvernance TOS — temporaires |

---

## Signature commune sans fusion des modules

- **TAGORA HORORA** reste le module du temps et des horaires ; **TAGORA DEPORA** reste le module des stocks et inventaires — etc.
- La marque est la **couche d'expérience** partagée, pas un monolithe produit.
- TOS documente la marque ; les modules **appliquent** progressivement.

---

## Ce qui reste à valider plus tard

- Licence d'incorporation Web Avenir Next et JHC Notion — `FONT_LICENSE_VALIDATED=NO`
- Mapping du symbole central vers favicon et icônes
- Exports SVG officiels des identités produits
- Confirmation du rôle Avenir Next / JHC Notion — `TYPOGRAPHY_ROLE_MAPPING=WAITING_FOR_MARTIN_OR_DESIGNER_CONFIRMATION`
- Bibliothèque icônes
- Guidelines marketing vs produit (si distinct)
- Co-branding partenaires

> **Note 2026-08-17 :** les actifs centraux et les fichiers typographiques ont été reçus (DEC-027 / ADR-0015 / VALD-106). À cette date, les contrastes et le mapping clair/sombre restaient à valider ; DEC-029 les traite pour les identités produits. La licence Web, le favicon et le rôle des polices restent en attente.
>
> **Note 2026-08-18 :** DEC-029 / ADR-0017 / VALD-108 valident la structure 80/20, les thèmes, les tokens, le mapping normal/light, la taille minimale produit et WCAG 2.2 AA. Les PNG produits sont opaques. Aucun produit n'est modifié.
>
> **Note 2026-08-15 :** la charte centrale finale est **validée** (DEC-018 / ADR-0006 / VALD-097). Outfit + Syne sont **LEGACY**.
>
> **Note historique 2026-08-14 :** la typographie commune Outfit + Syne a été validée ce jour-là (DEC-017 / ADR-0005 / VALD-096). Cette validation reste historiquement vraie et `WAITING_FOR_WEBSITE_EVIDENCE` reste CLOSED. Elle est remplacée pour l'usage actif par DEC-018.

---

## Règles

- Ne pas dévier sans validation gouvernance TOS.
- Documenter écarts temporaires par module.
- Aligner toute UI sur TDS avant release.
- Ne pas reconstruire le logo ni les polices depuis le PDF.
- Application produit uniquement après transfert Martin.

## Statut

**Enrichi — système visuel des modules (2026-08-18)** — Identité centrale, structure commune, thèmes produits et accessibilité documentés ; licence Web et mapping typographique en attente. Application produit : non autorisée.
