# Contrat de parité typographique — noms des modules TAGORA

## Statut

**Validé — DEC-026 / ADR-0014 / VALD-105 — 2026-08-17**

## Portée

Ce contrat s'applique lorsque deux modules ou plus sont affichés ensemble dans une carte commerciale, une grille, une navigation, un catalogue Nexus, un comparatif, une présentation ou une autre surface commune.

Modules concernés : TAGORA HORORA, TAGORA PULS, TAGORA DEPORA, TAGORA MESSOR, TAGORA YORVA et TAGORA ETIOQ.

## Règle obligatoire

Tous les noms présents dans une même composante ou famille de composantes doivent partager :

- la même taille de caractère ;
- le même poids ;
- la même hauteur de ligne ;
- le même espacement des lettres ;
- la même casse selon le modèle validé ;
- la même hiérarchie et le même niveau d'emphase ;
- le même traitement du préfixe `TAGORA`.

```text
TYPOGRAPHIC_PARITY_REQUIRED=YES
MODULE_NAME_CASE=UPPERCASE
PER_MODULE_FONT_SCALING_ALLOWED=NO
NAME_LENGTH_BASED_SCALING_ALLOWED=NO
SHARED_RESPONSIVE_SCALE_ALLOWED=YES
WRAPPING_ALLOWED_IF_SHARED_RULES_PRESERVED=YES
```

## Responsive

Si l'espace devient insuffisant, la surface doit :

1. adapter la grille ou la largeur du conteneur ;
2. permettre un retour à la ligne cohérent ; ou
3. réduire la taille de tous les noms ensemble au même breakpoint.

Elle ne doit jamais réduire uniquement DEPORA, MESSOR, HORORA ou un autre nom pour le faire entrer dans son espace.

## Limites

Ce contrat ne choisit pas une nouvelle police et ne remplace pas la charte de marque centrale. Il impose uniquement l'égalité de traitement entre les modules.

Aucune application Website, Nexus ou produit n'est autorisée par ce document. Martin doit transférer le paquet correspondant et donner un GO propre au projet.
