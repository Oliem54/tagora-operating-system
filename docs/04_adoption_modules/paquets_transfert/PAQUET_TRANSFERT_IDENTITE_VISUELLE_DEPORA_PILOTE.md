# Paquet de transfert — Pilote d'identité visuelle TAGORA DEPORA

```text
PROJECT_TARGET=TAGORA DEPORA
TECHNICAL_REPOSITORY=C:\Dev\TAGORA\tagora-stock-premium
PILOT_SURFACE=/admin/stock/comptes
SOURCE_DECISION=DEC-029
SOURCE_ADR=ADR-0017
SOURCE_VALIDATION=VALD-108
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
```

## Identité

Nom canonique : `TAGORA DEPORA`

Signature graphique secondaire : `DEPORA par TAGORA`

| Élément | Valeur |
|---|---|
| Logo sombre | `3-Modules/depora.png` |
| Logo clair | `3-Modules/depora light.png` |
| Accent | `#00C1D5` |
| Accent secondaire | `#4DBED2` |
| Action | fond `#00C1D5`, contenu `#081029` |
| Focus sur clair | `#047188` |

Le logo historique `public/brand/stock-premium/tagora-stock-premium-logo.png` est legacy et ne constitue pas l'identité finale. Ne pas le supprimer sans gate.

## Phase autorisable en premier

Mapping READ ONLY uniquement :

1. confirmer dossier, branche, HEAD et état Git ;
2. préserver le commit local `380e872` et ne pas le pousser ;
3. inventorier la page `/admin/stock/comptes` et ses composants partagés ;
4. comparer structure, logo, navigation, cartes, boutons, formulaires, tableaux, états et responsive au standard ;
5. identifier les fichiers qui changeraient ;
6. proposer un diff borné, sans l'appliquer ;
7. rapporter les risques de propagation aux autres pages.

## Futur pilote local — nouveau GO requis

- appliquer les tokens DEPORA sur la page pilote seulement ;
- conserver les couleurs sémantiques globales ;
- utiliser la variante logo appropriée sans crop ;
- conserver temporairement Outfit/Syne ;
- ne modifier aucun métier, route, API, DB ou permission ;
- tests ciblés, suite habituelle, build et captures desktop/mobile ;
- aucun commit, amend, push ou déploiement.

## Acceptation future

- nom accessible `TAGORA DEPORA` ;
- structure commune TAGORA reconnaissable ;
- accent DEPORA minoritaire et cohérent ;
- bouton principal conforme ;
- focus, états, vide, chargement et erreur vérifiés ;
- aucun `PREMIUM STOCK` présenté comme nom actuel ;
- aucun identifiant technique renommé.

## Interdictions

```text
CURRENT_GATE_EXECUTION=NO
COMMIT_380E872_PROMOTION=HOLD
TYPOGRAPHY_CHANGE_AUTHORIZED=NO
TECHNICAL_RENAME_AUTHORIZED=NO
DB_AUTHORIZED=NO
COMMIT_AUTHORIZED=NO
PUSH_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Références

- [Standard visuel](../../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [Thème DEPORA](../../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [Plan de migration](../PLAN_MIGRATION_IDENTITE_VISUELLE_MODULES_TAGORA.md)

STOP.
