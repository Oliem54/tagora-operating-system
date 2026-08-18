# Paquet de transfert — Identité visuelle TAGORA Nexus

```text
PROJECT_TARGET=TAGORA Nexus
TECHNICAL_REPOSITORY=C:\Dev\TAGORA\tagora-nexus
POSITION=CENTRAL_CLIENT_PORTAL
IS_COMMERCIAL_MODULE=NO
SOURCE_DECISION=DEC-029
SOURCE_ADR=ADR-0017
SOURCE_VALIDATION=VALD-108
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
```

## Identité

| Élément | Valeur |
|---|---|
| Nom | `TAGORA Nexus` |
| Logo sombre | `3-Modules/Nexus.png` |
| Logo clair | `3-Modules/Nexus light.png` |
| Accent | `#008247` |
| Action | fond `#008247`, contenu `#FFFFFF` |
| Focus sur clair | `#044F3A` |

## Positionnement obligatoire

Nexus est le portail client central et le point d'accès aux modules souscrits. Il n'est pas :

- un septième module commercial ;
- un module de sourcing ;
- un gestionnaire documentaire YORVA ;
- un système de stock DEPORA ;
- une application d'étiquettes ETIOQ.

Le texte métier Nexus du PDF fourni est rejeté. Seuls le symbole, le lockup et les couleurs peuvent alimenter son thème.

## Future séquence

1. audit READ ONLY de l'app shell, du catalogue d'accès et des parcours client ;
2. mapping vers la structure commune ;
3. séparation nette entre navigation Nexus et destinations des modules ;
4. choix d'une surface pilote sous nouveau GO ;
5. tests, build, accessibilité et captures ;
6. validation Martin avant commit.

```text
MODULE_CATALOG_ROLE_CHANGE_AUTHORIZED=NO
SSO_OR_HANDOFF_CHANGE_AUTHORIZED=NO
DB_AUTHORIZED=NO
FONT_INSTALLATION_AUTHORIZED=NO
COMMIT_AUTHORIZED=NO
PUSH_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Références

- [Standard visuel](../../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [Thème Nexus](../../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)

STOP.
