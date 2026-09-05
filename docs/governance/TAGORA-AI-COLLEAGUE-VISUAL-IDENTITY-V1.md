# Identité visuelle commune de la collègue IA TAGORA — V1

Contrat de gouvernance distinct. Il **ne réécrit pas** ADR-0017, DEC-029, le registre des modules V1, le fournisseur d'identité humaine Nexus, ni la politique d'abonnements Nexus.

Il n'implémente aucun runtime. Il ne modifie aucun dépôt PULS, Nexus, Website ou module. Il ne déploie rien.

La machine-readable source de ce contrat, utilisée par les validations automatisées, est le fichier jumeau [TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json](TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json). Ce n'est **pas** un second registre : c'est la même décision, dans le mécanisme canonique `docs/governance/`.

```text
CONTRACT_ID=TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1
IDENTITY_ID=TAGORA_AI_COLLEAGUE_V1
CONTRACT_VERSION=1.0.0
CONTRACT_STATUS=ACTIVE_APPROVED
DISPLAY_CONCEPT_FR=Collègue IA TAGORA
DISPLAY_CONCEPT_EN=TAGORA AI Colleague
APPROVED_BY=MARTIN
APPROVAL_DATE=2026-09-05
APPROVAL_TIME_MONTREAL=2026-09-05 16:12 -04:00
APPROVAL_ENVIRONMENT=PULS_STAGING
SOURCE_GATE=TOS-TAGORA-UNIFIED-AI-COLLEAGUE-VISUAL-IDENTITY-V1-GOVERNANCE-AND-CANONICAL-RECORD-GO
DECISION_AUTHORITY=MARTIN_AND_TOS
IDENTITY_SCOPE=COMMON_VISUAL_IDENTITY_ONLY
HUMAN_REAPPROVAL_REQUIRED=YES
MASTER_ASSET_SHA256=12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27
MASTER_ASSET_DIMENSIONS=1122x1402
MASTER_ASSET_FORMAT=PNG
MASTER_ASSET_ALPHA=YES
MASTER_ASSET_CENTRAL_STORAGE=DEFERRED_TO_NEXUS
SOURCE_MODULE=PULS
SOURCE_REPOSITORY=Oliem54/xplod-ai-agent
SOURCE_BRANCH=fix/puls-xplod-premium-portrait-integration-v2
SOURCE_COMMIT=b7f821ed81e61d85c1ad93689ba05927463152d5
SOURCE_ASSET_PATH=apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png
SOURCE_ASSET_URL=https://pulse-staging.tagora.ca/brand/assistants/tagora-ai-xplod-redhead-v1.png
SOURCE_ASSET_URL_ROLE=SOURCE_EVIDENCE_ONLY_NOT_CANONICAL_RUNTIME
CANONICAL_ASSET_REFERENCE=sha256:12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27
CANONICAL_RUNTIME_ASSET_URL=
CANONICAL_RUNTIME_ASSET_URL_STATUS=NOT_PUBLISHED_AWAITING_NEXUS_REGISTRY
SAME_WOMAN_REQUIRED=YES
IDENTITY_REGENERATION_ALLOWED=NO
FACE_MODIFICATION_ALLOWED=NO
DERIVATIVES_POLICY_RECORDED=YES
FORBIDDEN_TRANSFORMATIONS_RECORDED=YES
MODULE_ACCENT_POLICY_RECORDED=YES
TOS_AUTHORITY_RECORDED=YES
NEXUS_AUTHORITY_RECORDED=YES
MODULE_AUTHORITY_RECORDED=YES
HUMAN_APPROVAL_RECORDED=YES
APPLICABLE_MODULES=NEXUS,PULS,HORORA,DEPORA,MESSOR,YORVA,ETIOQ,TAGORA_WEBSITE
DOCUMENTATION_ONLY=yes
RUNTIME_CHANGE=no
MODULE_REGISTRY_V1_UNCHANGED=yes
HISTORICAL_ADR_REWRITE=no
HISTORICAL_DEC_REWRITE=no
```

---

## 1. Objet et limites

### Objet

Enregistrer l'identité visuelle officielle de la **collègue IA TAGORA** : la même femme rousse adulte, approuvée humainement par Martin dans PULS Staging.

Cette image devient l'identité visuelle commune et cohérente de la collègue IA dans toute la série TAGORA. TOS possède le contrat. Nexus publiera plus tard le registre technique. Chaque module intégrera et validera l'identité séparément sur Staging. Aucun déploiement Production global n'est autorisé automatiquement.

### Six règles lues par tous les modules

1. **La femme est la même dans tous les modules.** Nexus, PULS, HORORA, DEPORA, MESSOR, YORVA, ETIOQ et le site public TAGORA, lorsqu'une collègue IA commune y est représentée, doivent montrer exactement la femme du master certifié.
2. **Les fonctions métier peuvent être différentes.** Chaque module conserve ses noms, rôles, spécialisations, permissions, données, couleurs, responsabilités, garde-fous et autorités applicatives.
3. **L'identité visuelle ne donne aucune permission.** Ce n'est pas une identité d'accès, ni un compte, ni un rôle, ni un entitlement.
4. **Nexus distribuera plus tard les références techniques.** Ce contrat n'autorise pas encore le registre technique Nexus.
5. **Chaque module doit intégrer et valider l'identité séparément sur Staging.** Aucun rollout multimodule n'est déclenché ici.
6. **Aucun déploiement Production global n'est autorisé automatiquement.**

### Limites

```text
TOS_SCOPE_ONLY=YES
CODE_CHANGE_AUTHORIZED=no
NEXUS_CHANGE_AUTHORIZED=no
PULS_CHANGE_AUTHORIZED=no
OTHER_MODULE_CHANGE_AUTHORIZED=no
WEBSITE_CHANGE_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
DATABASE_AUTHORIZED=no
ENV_CHANGE_AUTHORIZED=no
SECRET_CHANGE_AUTHORIZED=no
TOS_CANONICAL_MERGE_AUTHORIZED_BY_THIS_GATE=yes
NEXUS_REGISTRY_IMPLEMENTATION_AUTHORIZED=no
MODULE_IMPLEMENTATION_AUTHORIZED=no
PERSONAL_USER_DATA=no
SECRETS=no
TOKENS=no
PRIVATE_URLS=no
ENVIRONMENT_KEYS=no
```

---

## 2. Décision liante

La femme rousse adulte du master PULS ci-dessous est la collègue IA officielle de TAGORA.

Tous les modules listés doivent représenter **exactement la même femme**. Une nouvelle génération, un visage de remplacement, une personne ressemblante ou une ancienne agente TAGORA n'est pas cette collègue.

L'identité est **commune visuellement**. Elle n'est pas une identité d'accès, ni un compte, ni un rôle, ni un entitlement.

```text
HUMAN_IDENTITY_APPROVAL=PASS
HUMAN_DESKTOP_APPROVAL=PASS
HUMAN_MOBILE_APPROVAL=PASS
HUMAN_SIZE_APPROVAL=PASS
HUMAN_PREMIUM_INTEGRATION_APPROVAL=PASS
HUMAN_MESSAGE_AVATAR_APPROVAL=PASS
HUMAN_VISUAL_E2E=PASS
HUMAN_VISUAL_E2E_PERCENT=100
```

---

## 3. Master approuvé

Le pin d'identité est le SHA-256. L'URL Staging PULS est une **preuve de source**, pas la référence runtime canonique. Un fichier servi au même chemin peut changer ; les octets identifiés par le SHA-256 ne le peuvent pas sans une nouvelle version.

TOS n'a pas de mécanisme officiel de conservation d'assets binaires de référence. Le PNG n'est donc **pas** importé dans ce dépôt. Le SHA-256, les métadonnées et la source PULS certifiée sont enregistrés ici. Le futur gate Nexus créera le registre technique et le stockage central.

| Champ | Valeur |
|---|---|
| Fichier | `tagora-ai-xplod-redhead-v1.png` |
| SHA-256 | `12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27` |
| Dimensions | 1122 × 1402 |
| Format | PNG |
| Color type | RGBA |
| Alpha | oui |
| Ratio | approximativement 4:5 |
| Module source | PULS |
| Dépôt source | `Oliem54/xplod-ai-agent` |
| Branche source | `fix/puls-xplod-premium-portrait-integration-v2` |
| Commit source | `b7f821ed81e61d85c1ad93689ba05927463152d5` |
| PR source | https://github.com/Oliem54/xplod-ai-agent/pull/18 (DRAFT, non fusionnée) |
| Déploiement Staging | `37c37307-378c-475e-b958-928a84bcf3bd` |
| URL Staging (preuve seulement) | https://pulse-staging.tagora.ca/brand/assistants/tagora-ai-xplod-redhead-v1.png |
| Chemin source | `apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png` |
| Référence canonique | `sha256:12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27` |
| Stockage binaire TOS | `DEFERRED_TO_NEXUS` |

`tagora-ai.png` n'est **pas** cette identité et ne peut pas la remplacer.

---

## 4. Surfaces applicables

La même collègue IA doit être utilisée lorsque ces surfaces la représentent :

| Surface | Nom commercial | Clé | Classification |
|---|---|---|---|
| NEXUS | TAGORA Nexus | `tagora_nexus` | Portail central, pas un module SaaS |
| PULS | TAGORA PULS | `tagora_pulse_ai` | Module SaaS |
| HORORA | TAGORA HORORA | `tagora_horora` | Module SaaS |
| DEPORA | TAGORA DEPORA | `tagora_depora` | Module SaaS |
| MESSOR | TAGORA MESSOR | `tagora_messor` | Module SaaS |
| YORVA | TAGORA YORVA | `tagora_yorva` | Module SaaS |
| ETIOQ | TAGORA ETIOQ | `tagora_etioq` | Module SaaS |
| TAGORA_WEBSITE | TAGORA Website | `tagora_website` | Site public, seulement si la collègue commune y est représentée |

Voice IA et Boards ne sont pas dans cette V1.

Nexus reste le portail central. Ce contrat ne le transforme pas en module SaaS.

---

## 5. Commun visuellement, séparé métier

Chaque module conserve :

- son nom ;
- son rôle ;
- sa spécialisation ;
- ses permissions ;
- ses données ;
- ses couleurs ;
- ses responsabilités métier ;
- ses garde-fous ;
- son autorité applicative.

Représenter la même femme **n'accorde aucun accès**, n'ouvre aucune donnée et n'unifie aucun rôle. PULS ne gouverne pas HORORA parce qu'ils partagent le portrait. Nexus ne reçoit aucune permission module par ce contrat.

ADR-0017 (80 % structure commune / 20 % identité produit) reste la règle des **interfaces modules**. Ce contrat couvre seulement le **visage de la collègue IA**, pas les logos produits, pas les palettes, pas les tuiles.

---

## 6. Invariants d'identité

Tous les modules doivent représenter exactement la même femme que le fichier master certifié.

Le SHA-256 du master est **immuable** pour la version 1.0.0.

Interdictions absolues :

- générer une nouvelle femme ;
- utiliser une femme ressemblante ;
- effectuer un face swap ;
- modifier son visage ;
- modifier ses traits ;
- modifier sa couleur de peau ;
- modifier ses cheveux ;
- changer l'identité apparente ;
- changer l'âge apparent ;
- modifier l'expression de référence ;
- déformer le corps ou le visage ;
- remplacer l'image par `tagora-ai.png` ;
- utiliser une ancienne agente comme identité active ;
- utiliser une transformation générative ;
- remplacer silencieusement le master ;
- publier un asset sans version ;
- publier un dérivé impossible à rattacher au master approuvé.

```text
IDENTITY_REGENERATION_ALLOWED=NO
FACE_MODIFICATION_ALLOWED=NO
FACE_SWAP_ALLOWED=NO
LOOKALIKE_ALLOWED=NO
FORMER_AGENT_ALLOWED=NO
TAGORA_AI_PNG_REPLACEMENT_ALLOWED=NO
SILENT_SUBSTITUTION_FORBIDDEN=YES
```

---

## 7. Dérivés autorisés

Les dérivés doivent provenir du master approuvé. Un recadrage doit toujours conserver une reconnaissance claire de la même femme.

Autorisé :

- copie exacte ;
- redimensionnement ;
- recadrage non destructif ;
- optimisation sans perte visuelle ;
- conversion WebP ou AVIF ;
- conservation ou utilisation de la transparence ;
- adaptation responsive ;
- portrait vertical approximativement 4:5 ;
- petit avatar rectangulaire ;
- coins légèrement arrondis ;
- adaptation du cadre à la couleur du module.

Interdit :

- régénération IA ;
- retouche du visage ;
- changement de coiffure ;
- changement de vêtements génératif ;
- changement de morphologie ;
- modification de l'expression ;
- changement de personne ;
- changement d'âge ;
- arrière-plan bleu saturé ;
- double anneau ;
- halo circulaire ;
- médaillon circulaire principal ;
- déformation du ratio ;
- agrandissement dégradant fortement le visage.

---

## 8. Couleurs de module

Chaque module peut utiliser sa couleur officielle uniquement dans le cadre, le fond ou l'accent visuel. La couleur du module ne doit pas recolorer la femme, son visage, ses cheveux ou ses vêtements.

| Surface | Accent |
|---|---|
| TAGORA_BASE | `#182643` |
| NEXUS | `#008247` |
| HORORA | `#1F79E0` |
| PULS | `#55C558` |
| DEPORA | `#00C1D5` |
| MESSOR | `#DBDF5C` |
| YORVA | `#BAC300` |
| ETIOQ | `#F2F890` |

Présentation principale recommandée : portrait vertical Premium, ratio approximatif 4:5, coins légèrement arrondis, fond transparent ou harmonisé, aucun cercle principal, aucun double anneau.

Présentation conversationnelle recommandée : petit rectangle vertical ou carré légèrement arrondi, même femme, visage reconnaissable, aucun double cercle.

---

## 9. Split de gouvernance

### TOS

TOS fait autorité sur :

- l'identité visuelle officielle ;
- les règles de gouvernance ;
- l'identité active ;
- la version canonique ;
- les modules applicables ;
- les transformations autorisées ;
- les transformations interdites ;
- la dépréciation ;
- le remplacement futur ;
- la preuve d'approbation humaine.

### Nexus

Nexus fera autorité plus tard sur :

- le registre technique central ;
- la publication des références d'assets ;
- la distribution des variantes approuvées ;
- l'exposition du SHA-256 canonique ;
- les métadonnées de version ;
- le contrôle de compatibilité des modules.

Ce contrat **n'autorise pas** Nexus à implémenter ce registre. Un gate Nexus séparé est obligatoire.

### Modules

Chaque module conserve :

- son rôle métier ;
- sa persona fonctionnelle ;
- ses permissions ;
- ses données ;
- son isolation tenant ;
- ses couleurs ;
- ses textes ;
- ses comportements ;
- son déploiement.

Le contrat visuel commun ne transfère aucune autorité métier vers TOS ou Nexus. Ce contrat **n'autorise pas** l'implémentation module.

---

## 10. Politique de dépréciation et de remplacement

Remplacer le master exige :

- une nouvelle version ;
- une nouvelle preuve ;
- une nouvelle validation humaine Martin ;
- un nouveau gate TOS ;
- un nouveau gate Nexus ;
- une nouvelle validation Staging par module.

Interdit :

- changer le SHA-256 en conservant `identityId` + `version` ;
- pointer une URL non versionnée comme source de vérité ;
- servir `tagora-ai.png` comme repli ;
- laisser deux identités actives concurrentes ;
- basculer les modules avant publication Nexus de la dépréciation ;
- remapper `TAGORA_AI_COLLEAGUE_V1` vers une autre femme.

```text
NEW_MASTER_REQUIRES_NEW_VERSION=YES
OLD_VERSION_MUST_BE_EXPLICITLY_DEPRECATED=YES
HUMAN_GATE_REQUIRED=MARTIN_AND_TOS
TWO_ACTIVE_IDENTITIES_FORBIDDEN=YES
UNVERSIONED_CANONICAL_ASSET_REFERENCE_FORBIDDEN=YES
```

---

## 11. Validations automatisées

Le script `scripts/validate-ai-colleague-visual-identity.mjs` refuse :

- un `identityId` absent ;
- une version absente ;
- un SHA-256 absent ou mal formé ;
- une liste de modules vide ;
- deux identités actives concurrentes ;
- une substitution silencieuse de l'image (SHA changé sans nouvelle version) ;
- un dérivé non traçable / une référence runtime canonique non versionnée ;
- une activation sans approbation humaine Martin ;
- une confusion entre identité visuelle et autorité métier.

Le jumeau JSON et ce Markdown doivent rester alignés sur l'identité, la version, le statut, le SHA-256, le périmètre et les modules.

---

## 12. Sécurité du contrat

Ce contrat ne contient :

- aucune donnée personnelle d'utilisateur ;
- aucun secret ;
- aucun mot de passe ;
- aucun jeton ;
- aucune clé privée ;
- aucune URL administrative privée ;
- aucun accès Production.

Les URL GitHub et Staging citées sont des preuves publiques de source, pas des credentials.

---

## 13. Interdictions d'exécution

```text
NEXUS_REPOSITORY_CHANGE_AUTHORIZED=no
PULS_REPOSITORY_CHANGE_AUTHORIZED=no
WEBSITE_REPOSITORY_CHANGE_AUTHORIZED=no
MODULE_REPOSITORY_CHANGE_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
DATABASE_AUTHORIZED=no
ENV_CHANGE_AUTHORIZED=no
SECRET_CHANGE_AUTHORIZED=no
DEPLOYMENT_AUTHORIZED=no
PULS_PR_18_MERGE_AUTHORIZED=no
```

ADR-0017 n'est pas réécrite. La décision correspondante est DEC-030 / ADR-0018. Le registre des modules V1 n'est pas modifié.

---

## 14. Prochaine étape

Après enregistrement de ce contrat sur la branche canonique TOS :

```text
NEXT_RECOMMENDED_GATE=NEXUS_IDENTITY_REGISTRY_GATE
READY_FOR_NEXUS_IDENTITY_REGISTRY_GATE=YES
STOP_FOR_MARTIN_AND_SEPARATE_NEXUS_IDENTITY_REGISTRY_GATE=YES
```

Aucun merge PULS. Aucune Production PULS. Aucun changement Nexus dans ce gate. Aucun déploiement module.

---

## Références internes (non réécrites)

- [TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json](TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json) — contrat machine canonique
- [CONTRAT_IDENTITE_VISUELLE_COLLEGUE_IA_TAGORA_V1.md](../09_design_system/CONTRAT_IDENTITE_VISUELLE_COLLEGUE_IA_TAGORA_V1.md) — lecture design
- [ADR-0018](../05_adr/ADR-0018-IDENTITE-VISUELLE-COLLEGUE-IA-TAGORA-V1.md)
- [DEC-030](../10_knowledge/DEC-030-IDENTITE-VISUELLE-COLLEGUE-IA-TAGORA-V1.md)
- [TAGORA-MODULE-REGISTRY-V1.md](TAGORA-MODULE-REGISTRY-V1.md) — inchangé
- [ADR-0017](../05_adr/ADR-0017-SYSTEME-IDENTITE-VISUELLE-MODULES-TAGORA.md) — identité visuelle des modules, pas le visage de la collègue IA
- [STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md](../09_design_system/STANDARD_IDENTITE_VISUELLE_MODULES_TAGORA.md)
- [REGISTRE_THEMES_MODULES_TAGORA.md](../09_design_system/REGISTRE_THEMES_MODULES_TAGORA.md)
- [AGENTS_IA_REGISTRE.md](../07_ai/AGENTS_IA_REGISTRE.md) — rôles documentaires, pas cette identité visuelle
- [REGLES_DE_SEPARATION_DES_PROJETS.md](../03_gouvernance/REGLES_DE_SEPARATION_DES_PROJETS.md)
