# ADR-0018 — Identité visuelle unifiée de la collègue IA TAGORA V1

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-09-05**

Décision : **DEC-030**

Contrat : **TAGORA_AI_COLLEAGUE_V1 / 1.0.0**

## Contexte

TAGORA dispose désormais d'une identité visuelle humaine approuvée dans PULS Staging : la femme rousse utilisée dans `Oliem54/xplod-ai-agent` au commit `b7f821ed81e61d85c1ad93689ba05927463152d5`.

L'asset source approuvé est `apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png`, PNG RGBA 1122x1402, SHA-256 `12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27`.

La PR source #18 est Draft et ne constitue pas une promotion Production. Elle fournit néanmoins la source certifiée du master visuel et un test de fingerprint sur le commit source.

## Décision

Une seule identité visuelle humaine commune est active pour la collègue IA TAGORA :

```text
IDENTITY_ID=TAGORA_AI_COLLEAGUE_V1
VERSION=1.0.0
STATUS=ACTIVE
SAME_WOMAN_ALL_MODULES=REQUIRED
GENERATIVE_REPLACEMENT=PROHIBITED
SILENT_ASSET_SUBSTITUTION=PROHIBITED
```

Applicable à Nexus, PULS, HORORA, DEPORA, MESSOR, YORVA, ETIOQ et TAGORA Website lorsque la collègue IA commune y est représentée.

L'identité visuelle commune ne transfère aucune permission, aucun rôle, aucune donnée ni aucune autorité métier entre modules.

## Autorités

- **TOS** : contrat, version, fingerprint, invariants, dérivés, remplacement et dépréciation.
- **Nexus** : futur registre technique central et version attendue par module.
- **Modules** : présentation locale, comportement métier, permissions, données et garde-fous ; copie locale vérifiée de l'asset.

Nexus ne devient pas une dépendance runtime obligatoire uniquement pour afficher le portrait.

## Dérivés

Autorisés seulement s'ils préservent l'identité : redimensionnement, recadrage non destructif, optimisation PNG/WebP, variantes responsive, rectangle arrondi, cadre/accent module externe.

Interdits : nouvelle femme, personne ressemblante, face swap, modification du visage, âge, peau, yeux, taches de rousseur, cheveux, expression de référence, déformation, transformation générative identitaire, halo/double anneau circulaire principal.

## Dépréciation

`TAGORA_AI_COLLEAGUE_V1` ne peut jamais être remappé vers une autre femme. Tout remplacement exige une nouvelle version, un nouveau fingerprint et une nouvelle décision TOS explicite.

Les portraits antérieurs ne sont retirés des modules qu'après validation Staging de V1 dans le module concerné.

## Conséquences

### Positives

- reconnaissance immédiate de la collègue IA dans tout l'écosystème ;
- suppression des identités concurrentes ;
- traçabilité par SHA-256 et version ;
- conservation de l'autonomie des modules.

### Contraintes

- chaque module doit prouver la bonne identité en Staging ;
- toute modification visuelle générative de la femme nécessite une nouvelle décision ;
- le rollout reste progressif, sans big-bang.

## Frontière

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

- `docs/governance/TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json` — contrat machine canonique
- `docs/governance/TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.md` — contrat de gouvernance TOS
- `docs/09_design_system/CONTRAT_IDENTITE_VISUELLE_COLLEGUE_IA_TAGORA_V1.md` — lecture design
- ADR-0017 — système d'identité visuelle cohérente des modules TAGORA
- DEC-030 — identité visuelle unifiée de la collègue IA TAGORA V1
