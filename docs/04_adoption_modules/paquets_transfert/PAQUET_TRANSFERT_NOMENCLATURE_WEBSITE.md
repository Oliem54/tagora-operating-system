# Paquet de transfert — Website × nomenclature officielle TAGORA

> **Complété par DEC-027 / ADR-0015 / VALD-106.** Pour l'audit des nouveaux actifs et le futur pilote local, utiliser [PAQUET_TRANSFERT_PILOTE_WEBSITE_IDENTITE_MODULES.md](PAQUET_TRANSFERT_PILOTE_WEBSITE_IDENTITE_MODULES.md). Aucun des deux paquets n'autorise une implémentation Website.

```text
PROJECT_TARGET=TAGORA Website
SOURCE_DECISION=DEC-026
SOURCE_ADR=ADR-0014
SOURCE_VALIDATION=VALD-105
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
PUBLICATION_AUTHORIZED=NO
TYPOGRAPHIC_PARITY_REQUIRED=YES
```

## Directive

Reconnaître la carte commerciale officielle suivante dans une analyse d'impact seulement : TAGORA HORORA, TAGORA PULS, TAGORA DEPORA, TAGORA MESSOR, TAGORA YORVA et TAGORA ETIOQ.

YORVA et ETIOQ sont `COMING_SOON`. Leurs capacités doivent être formulées au futur. Les routes Website proposées `/fr/sourcing` et `/en/sourcing` restent associées conceptuellement à YORVA, sans publication. Les routes ETIOQ sont TBD.

Lorsque les six noms sont présentés ensemble, utiliser exactement la même taille de caractère, le même poids, la même hauteur de ligne, le même espacement et la même hiérarchie visuelle. Ne jamais redimensionner un nom selon sa longueur.

Ne pas modifier de page, navigation, SEO, traduction, CTA, domaine, DNS ou déploiement. Préparer uniquement l'inventaire d'impact et attendre un GO Martin Website distinct.

## Acceptation attendue

```text
SIX_MODULE_MAP_ACKNOWLEDGED=YES
HORORA_NAME_ACKNOWLEDGED=YES
PULS_NAME_ACKNOWLEDGED=YES
DEPORA_NAME_ACKNOWLEDGED=YES
MESSOR_NAME_ACKNOWLEDGED=YES
YORVA_COMING_SOON_ACKNOWLEDGED=YES
ETIOQ_COMING_SOON_ACKNOWLEDGED=YES
NO_WEBSITE_CHANGE=YES
```

STOP.
