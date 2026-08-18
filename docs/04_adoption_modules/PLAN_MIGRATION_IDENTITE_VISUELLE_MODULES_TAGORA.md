# Plan de migration progressive de l'identité visuelle des modules TAGORA

```text
STATUS=READY_FOR_MARTIN_TRANSFER
DECISION=DEC-029
ADR=ADR-0017
VALIDATION=VALD-108
IMPLEMENTATION_AUTHORIZED=NO
```

## Objectif

Déployer le système visuel sans big bang, sans mélanger marque, fonctionnalité, typographie, route ou infrastructure.

## Séquence

### M0 — TOS

- standard, registre et paquets ;
- contrôle des assets ;
- aucune écriture hors TOS.

### M1 — Mapping READ ONLY DEPORA

- dépôt technique inchangé ;
- état Git et inventaire UI ;
- comparaison du design actuel au standard ;
- aucun fichier modifié.

### M2 — Pilote local DEPORA

- surface unique : `/admin/stock/comptes` ;
- logo DEPORA normal ou light selon fond ;
- tokens DEPORA ;
- structure, composants et accessibilité communs ;
- aucune typographie nouvelle ;
- tests, build et captures ;
- aucun commit, push ou déploiement sans gate propre.

### M3 — Validation humaine DEPORA

- desktop et mobile ;
- contraste ;
- navigation ;
- états vide, chargement et erreur ;
- comparaison avant/après ;
- décision de commit séparée.

### M4 — Généralisation DEPORA

- inventaire des surfaces ;
- lots courts et réversibles ;
- tests de non-régression ;
- déploiement sous gate séparé.

### M5 — Applications existantes

Ordre recommandé : HORORA, PULS, MESSOR. Chaque produit conserve son métier, ses routes, sa DB et son infrastructure.

### M6 — Website et Nexus

- Website : catalogue et pages commerciales cohérentes ;
- Nexus : portail central séparé, avec accès aux modules ;
- aucune confusion avec un septième module.

### M7 — Produits futurs

YORVA et ETIOQ : Website, maquettes et identité future seulement. Aucune application, domaine, DNS ou capacité active.

### M8 — Typographie

Bloc séparé après licence Web et mapping des rôles Avenir Next / JHC Notion.

## Gates requis

| Gate | Portée | Statut |
|---|---|---|
| Mapping DEPORA READ ONLY | Audit local sans modification | À préparer |
| Pilote DEPORA local | Une page, sans commit | À préparer après mapping |
| Commit DEPORA | Commit local borné | Non autorisé |
| Push DEPORA | Publication Git | Non autorisé |
| Déploiement DEPORA | Staging puis Production | Non autorisé |
| Chaque autre module | Même séquence | Non autorisé |
| Typographie | Licence + intégration | Non autorisé |

## Rollback

- préserver les anciens assets pendant le pilote ;
- isoler les changements dans des fichiers et commits dédiés ;
- conserver un avant/après visuel ;
- ne jamais combiner identité, logique métier, DB et infrastructure ;
- revenir au commit précédent si le contraste, la lisibilité ou la navigation régresse.

## Références

- [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [PAQUET_TRANSFERT_IDENTITE_VISUELLE_DEPORA_PILOTE.md](paquets_transfert/PAQUET_TRANSFERT_IDENTITE_VISUELLE_DEPORA_PILOTE.md)
