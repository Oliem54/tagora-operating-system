# Paquet de transfert — Identité visuelle TAGORA HORORA

```text
PROJECT_TARGET=TAGORA HORORA
TECHNICAL_REPOSITORY=C:\Dev\TAGORA\tagora-time
FORMER_COMMERCIAL_NAME=TAGORA Time
SOURCE_DECISION=DEC-029
SOURCE_ADR=ADR-0017
SOURCE_VALIDATION=VALD-108
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
```

## Identité

| Élément | Valeur |
|---|---|
| Nom canonique | `TAGORA HORORA` |
| Logo sombre | `3-Modules/horora.png` |
| Logo clair | `3-Modules/horora light.png` |
| Accent | `#1F79E0` |
| Accent secondaire | `#4174BA` |
| Action accessible | fond `#1A64BB`, contenu `#FFFFFF` |
| Focus sur clair | `#154A8E` |

L'accent brut HORORA n'est pas utilisé comme petit texte sur fond blanc ni comme fond de petit bouton avec contenu insuffisamment contrasté.

## Future séquence

1. audit READ ONLY de l'app shell et des surfaces employé, superviseur, direction et admin ;
2. mapping de la navigation existante vers le gabarit commun ;
3. choix d'une surface pilote sous nouveau GO ;
4. application locale logo + thème, sans typographie ;
5. tests métier Time/Horora, build et captures ;
6. validation Martin avant commit.

## Gel technique

Repository `tagora-time`, package, domaines `time.tagora.ca`, routes `/api/timeclock/**` et `/horodateur/**`, DB, Supabase, Vercel et gates `TIME-*` restent inchangés.

```text
COMMERCIAL_VISIBLE_RENAME_SEPARATE=YES
TECHNICAL_RENAME_AUTHORIZED=NO
LOT2_MIGRATION_AUTHORIZED=NO
FONT_INSTALLATION_AUTHORIZED=NO
COMMIT_AUTHORIZED=NO
PUSH_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Références

- [Standard visuel](../../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [Thème HORORA](../../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)

STOP.
