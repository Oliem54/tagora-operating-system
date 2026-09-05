# Contrat d'identité visuelle — Collègue IA TAGORA V1

```text
STATUS=VALIDATED
DATE=2026-09-05
DECISION=DEC-030
ADR=ADR-0018
IDENTITY_ID=TAGORA_AI_COLLEAGUE_V1
IDENTITY_VERSION=1.0.0
TOS_SCOPE_ONLY=YES
PRODUCT_IMPLEMENTATION_AUTHORIZED=NO
```

## Objet

Ce contrat fixe l'identité visuelle humaine commune de la collègue IA TAGORA pour l'écosystème TAGORA. Il complète le système d'identité visuelle des modules défini par DEC-029 / ADR-0017 sans transférer aucune permission, donnée, responsabilité ou autorité métier entre les modules.

La même femme rousse adulte, approuvée humainement par Martin dans PULS Staging, est l'unique identité visuelle active de la collègue IA commune.

## Source certifiée

| Champ | Valeur |
|---|---|
| Module source | PULS |
| Repository source | `Oliem54/xplod-ai-agent` |
| Branche source | `fix/puls-xplod-premium-portrait-integration-v2` |
| Commit source | `b7f821ed81e61d85c1ad93689ba05927463152d5` |
| Asset source | `apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png` |
| URL publique source | `https://pulse-staging.tagora.ca/brand/assistants/tagora-ai-xplod-redhead-v1.png` |
| SHA-256 maître | `12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27` |
| Dimensions | `1122x1402` |
| Format | PNG RGBA |
| Alpha | Oui |
| Approbation humaine | PASS — Martin — desktop, mobile, avatar message et E2E visuel |

Le commit source contient un contrôle automatisé qui exige exactement ce SHA-256, ces dimensions et un PNG RGBA (`colorType=6`).

## Portée

L'identité s'applique lorsque la collègue IA commune est représentée dans :

1. Nexus
2. PULS
3. HORORA
4. DEPORA
5. MESSOR
6. YORVA
7. ETIOQ
8. TAGORA Website

L'identité visuelle commune ne remplace jamais :

- les photos d'employés ;
- les photos de clients ou revendeurs ;
- les avatars de comptes ;
- les identités Microsoft / Entra ;
- les logos d'organisation ;
- les logos des modules ;
- les représentants humains.

## Invariants immuables V1

Tous les modules doivent représenter exactement la même femme. Sans nouvelle décision versionnée de Martin, il est interdit de :

- générer une nouvelle femme ou une personne ressemblante ;
- remplacer ou modifier son visage ;
- modifier ses traits, son âge apparent, sa peau, ses yeux, ses taches de rousseur, sa coiffure, sa couleur ou texture de cheveux ;
- changer l'expression de référence ou effectuer un face swap ;
- utiliser une ancienne agente TAGORA comme remplacement ;
- utiliser `tagora-ai.png` comme identité de remplacement de V1 ;
- appliquer une transformation générative qui modifie l'identité ;
- déformer le portrait ;
- ajouter un fond bleu saturé ;
- utiliser un double anneau ou halo circulaire comme présentation principale.

## Dérivés autorisés

Un dérivé doit rester visuellement traçable vers le master approuvé et ne jamais modifier le visage.

Autorisé :

- redimensionnement déterministe ;
- recadrage non destructif conservant le visage et l'identité ;
- optimisation PNG ou WebP visuellement sans perte ;
- conservation / exploitation du fond transparent ;
- variantes responsive ;
- portrait vertical proche de 4:5 ;
- petit avatar rectangulaire aux coins arrondis ;
- cadre ou accent externe utilisant la couleur du module.

Tout dérivé doit documenter son parent, sa méthode et son usage. Un dérivé ne devient jamais un nouveau master sans décision TOS versionnée.

## Séparation identité / autorité

La collègue IA TAGORA est une identité visuelle et conversationnelle. Elle n'est pas :

- une identité utilisateur ;
- un principal de sécurité ;
- un rôle ;
- une permission ;
- une organisation ;
- une autorité d'approbation.

Chaque module conserve son nom fonctionnel, son rôle, sa spécialisation, ses permissions, ses données, sa couleur d'accent, ses textes métier, ses garde-fous et son autorité applicative.

## Gouvernance

### TOS

TOS fait autorité sur :

- l'identité officielle ;
- le contrat et sa version ;
- le fingerprint maître ;
- les invariants ;
- les dérivés autorisés ;
- la dépréciation et le remplacement.

### Nexus

Nexus publiera le registre technique central correspondant à ce contrat :

- version canonique ;
- SHA-256 ;
- références d'assets ;
- variantes disponibles ;
- version attendue par module.

Le registre Nexus est une référence de conformité. Les modules ne doivent pas dépendre de Nexus au runtime uniquement pour afficher l'image.

### Modules

Chaque module :

- embarque une copie locale vérifiée de l'asset ou d'un dérivé approuvé ;
- conserve son comportement métier et ses permissions ;
- ne crée aucune identité concurrente ;
- prouve en Staging la bonne identité avant promotion canonique / Production.

## Dépréciation et remplacement

- `TAGORA_AI_COLLEAGUE_V1` ne peut jamais désigner une autre femme.
- Toute nouvelle femme exige une nouvelle version d'identité, un nouveau fingerprint et une nouvelle décision TOS explicite.
- Une substitution silencieuse de l'image est interdite.
- Les anciens portraits sont dépréciés module par module uniquement après validation Staging du remplacement V1.
- Le rollback utilise la dernière identité TOS approuvée ; il ne fabrique pas de variante ad hoc.

## Validation automatisée TOS

Le manifeste machine lisible est `docs/07_ai/identity/TAGORA_AI_COLLEAGUE_V1.json`.

Le validateur `scripts/validate-tagora-ai-colleague-identity.mjs` refuse :

- un SHA absent ou mal formé ;
- une version absente ou invalide ;
- une liste de modules vide ;
- deux identités actives concurrentes ;
- un changement silencieux du SHA de V1 ;
- une référence d'asset non versionnée ;
- des clés de secret, mot de passe ou jeton dans le manifeste.

## Frontière d'implémentation

```text
TOS_SCOPE_ONLY=YES
PULS_CHANGED=NO
NEXUS_CHANGED=NO
OTHER_MODULES_CHANGED=NO
DATABASE_CHANGED=NO
ENV_CHANGED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
```

## Références

- [ADR-0018](../05_adr/ADR-0018-IDENTITE-VISUELLE-COLLEGUE-IA-TAGORA-V1.md)
- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md)
- [Standard identité visuelle modules](STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [Registre agents IA](../07_ai/AGENTS_IA_REGISTRE.md)
