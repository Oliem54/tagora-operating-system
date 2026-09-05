# Identité visuelle commune de la collègue IA TAGORA — V1

Contrat de gouvernance distinct. Il **ne réécrit pas** ADR-0017, DEC-029, le registre des modules V1, le fournisseur d'identité humaine Nexus, ni la politique d'abonnements Nexus.

Il n'implémente aucun runtime. Il ne modifie aucun dépôt PULS, Nexus, Website ou module. Il ne déploie rien.

La machine-readable source de ce contrat, utilisée par les validations automatisées, est le fichier jumeau [TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json](TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1.json). Ce n'est **pas** un second registre : c'est la même décision, dans le mécanisme canonique `docs/governance/`.

```text
CONTRACT_ID=TAGORA-AI-COLLEAGUE-VISUAL-IDENTITY-V1
IDENTITY_ID=TAGORA_AI_COLLEAGUE_V1
CONTRACT_VERSION=1.0.0
CONTRACT_STATUS=APPROVED_MASTER_VISUAL_IDENTITY
CANONICAL_DISPLAY_CONCEPT=Collègue IA TAGORA
APPROVED_BY=MARTIN
APPROVAL_DATE=2026-09-05
APPROVAL_TIME_MONTREAL=2026-09-05 12:23 -04:00
SOURCE_GATE=TOS-TAGORA-UNIFIED-AI-COLLEAGUE-VISUAL-IDENTITY-V1-GOVERNANCE-GO
DECISION_AUTHORITY=MARTIN_AND_TOS
MASTER_ASSET_SHA256=12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27
MASTER_ASSET_DIMENSIONS=1122x1402
MASTER_ASSET_FORMAT=PNG RGBA
MASTER_ASSET_ALPHA=YES
SOURCE_MODULE=PULS
SOURCE_COMMIT=b7f821ed81e61d85c1ad93689ba05927463152d5
SOURCE_ASSET_PATH=apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png
SOURCE_ASSET_URL=https://pulse-staging.tagora.ca/brand/assistants/tagora-ai-xplod-redhead-v1.png
SOURCE_ASSET_URL_ROLE=SOURCE_EVIDENCE_ONLY_NOT_CANONICAL_RUNTIME
CANONICAL_ASSET_REFERENCE=sha256:12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27
CANONICAL_RUNTIME_ASSET_URL=
CANONICAL_RUNTIME_ASSET_URL_STATUS=NOT_PUBLISHED_AWAITING_NEXUS_REGISTRY
SAME_WOMAN_REQUIRED=YES
IDENTITY_REGENERATION_ALLOWED=NO
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

Cette image devient l'identité visuelle commune et cohérente de la collègue IA dans la série TAGORA. TOS en possède le contrat. Nexus publiera plus tard le registre technique. Les modules consommeront l'identité enregistrée sans créer d'identité concurrente.

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
TOS_CANONICAL_MERGE_AUTHORIZED_BY_THIS_GATE=no
NEXUS_REGISTRY_IMPLEMENTATION_AUTHORIZED=no
MODULE_IMPLEMENTATION_AUTHORIZED=no
PERSONAL_USER_DATA=no
SECRETS=no
TOKENS=no
PRIVATE_URLS=no
ENVIRONMENT_KEYS=no
```

Ce fichier ne transfère aucune permission, aucune donnée, aucun rôle métier et aucune autorité applicative d'un module vers un autre.

---

## 2. Décision liante

La femme rousse adulte du master PULS ci-dessous est la collègue IA officielle de TAGORA.

Tous les modules listés doivent représenter **exactement la même femme**. Une nouvelle génération, un visage de remplacement, une personne ressemblante ou une ancienne agente TAGORA n'est pas cette collègue.

L'identité est **commune visuellement**. Elle n'est pas une identité d'accès, ni un compte, ni un rôle, ni un entitlement.

```text
HUMAN_IDENTITY_APPROVAL=PASS
HUMAN_DESKTOP_APPROVAL=PASS
HUMAN_MOBILE_APPROVAL=PASS
HUMAN_MESSAGE_AVATAR_APPROVAL=PASS
HUMAN_VISUAL_E2E=PASS
```

---

## 3. Master approuvé

Le pin d'identité est le SHA-256. L'URL Staging PULS est une **preuve de source**, pas la référence runtime canonique. Un fichier servi au même chemin peut changer ; les octets identifiés par le SHA-256 ne le peuvent pas sans une nouvelle version.

| Champ | Valeur |
|---|---|
| Fichier | `tagora-ai-xplod-redhead-v1.png` |
| SHA-256 | `12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27` |
| Dimensions | 1122 × 1402 |
| Format | PNG RGBA |
| Alpha | oui |
| Module source | PULS |
| Dépôt source | `Oliem54/xplod-ai-agent` |
| Branche source | `fix/puls-xplod-premium-portrait-integration-v2` |
| Commit source | `b7f821ed81e61d85c1ad93689ba05927463152d5` |
| PR source | https://github.com/Oliem54/xplod-ai-agent/pull/18 (DRAFT) |
| Déploiement Staging | `37c37307-378c-475e-b958-928a84bcf3bd` |
| URL Staging (preuve seulement) | https://pulse-staging.tagora.ca/brand/assistants/tagora-ai-xplod-redhead-v1.png |
| Chemin source | `apps/web/public/brand/assistants/tagora-ai-xplod-redhead-v1.png` |
| Référence canonique | `sha256:12ed4b7c31e872e3e32cba59852d30b2fe4b919613feb759535e3e6803773c27` |

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

```text
APPLICABLE_MODULES=NEXUS,PULS,HORORA,DEPORA,MESSOR,YORVA,ETIOQ,TAGORA_WEBSITE
```

Voice IA et Boards ne sont pas dans cette V1.

Nexus reste le portail central. Ce contrat ne le transforme pas en module SaaS.

---

## 5. Commun visuellement, séparé métier

Chaque module conserve :

- son nom fonctionnel ;
- son rôle ;
- sa spécialisation ;
- ses permissions ;
- ses données ;
- sa couleur d'accent ;
- ses textes métier ;
- ses garde-fous ;
- son autorité applicative.

Représenter la même femme **n'accorde aucun accès**, n'ouvre aucune donnée et n'unifie aucun rôle. PULS ne gouverne pas HORORA parce qu'ils partagent le portrait. Nexus ne reçoit aucune permission module par ce contrat.

ADR-0017 (80 % structure commune / 20 % identité produit) reste la règle des **interfaces modules**. Ce contrat couvre seulement le **visage de la collègue IA**, pas les logos produits, pas les palettes, pas les tuiles.

---

## 6. Invariants d'identité

Tous les modules doivent représenter exactement la même femme.

Interdictions :

- générer une nouvelle femme ;
- remplacer son visage ;
- modifier ses traits ;
- changer son âge apparent ;
- changer sa couleur de peau ;
- changer sa couleur ou sa texture de cheveux ;
- changer son expression de référence ;
- effectuer un face swap ;
- utiliser une personne ressemblante ;
- utiliser une ancienne agente TAGORA ;
- utiliser `tagora-ai.png` comme identité de remplacement ;
- appliquer une transformation générative qui modifie son identité ;
- déformer le portrait ;
- ajouter un fond bleu saturé ;
- utiliser un double anneau ou un halo circulaire comme présentation principale.

```text
IDENTITY_REGENERATION_ALLOWED=NO
FACE_SWAP_ALLOWED=NO
LOOKALIKE_ALLOWED=NO
FORMER_AGENT_ALLOWED=NO
TAGORA_AI_PNG_REPLACEMENT_ALLOWED=NO
SILENT_SUBSTITUTION_FORBIDDEN=YES
```

---

## 7. Dérivés autorisés

Chaque dérivé doit rester relié au master approuvé et **ne doit pas modifier le visage**.

Autorisé :

- redimensionnement ;
- recadrage non destructif ;
- optimisation PNG ou WebP ;
- fond transparent ;
- variantes responsive ;
- portrait vertical 4:5 ;
- petit avatar rectangulaire aux coins arrondis ;
- adaptation du cadre aux couleurs du module.

Un cadre aux couleurs du module n'est pas une nouvelle femme. Un recadrage qui coupe ou déforme le visage n'est pas un dérivé autorisé.

---

## 8. Split de gouvernance

### TOS

- définit l'identité officielle ;
- possède ce contrat ;
- définit les invariants, la version et la liste des surfaces ;
- définit les règles de dérivation, de remplacement et de dépréciation.

### Nexus

- publiera le registre technique central ;
- exposera la version canonique et le SHA-256 ;
- distribuera les références d'assets et les variantes ;
- permettra aux modules de vérifier la version attendue.

Ce contrat **n'autorise pas** Nexus à implémenter ce registre. Un gate Nexus séparé est obligatoire.

### Modules

- consommeront l'identité enregistrée ;
- conserveront leur présentation et leur rôle métier ;
- ne créeront aucune identité concurrente ;
- devront prouver en Staging qu'ils utilisent la bonne femme.

Ce contrat **n'autorise pas** l'implémentation module.

---

## 9. Politique de dépréciation et de remplacement

Remplacer le master exige une **nouvelle version** de ce contrat, une dépréciation explicite de l'ancienne version, et un Human Gate Martin et TOS.

Interdit :

- changer le SHA-256 en conservant `identityId` + `version` ;
- pointer une URL non versionnée comme source de vérité ;
- servir `tagora-ai.png` comme repli ;
- laisser deux identités actives concurrentes ;
- basculer les modules avant publication Nexus de la dépréciation.

```text
NEW_MASTER_REQUIRES_NEW_VERSION=YES
OLD_VERSION_MUST_BE_EXPLICITLY_DEPRECATED=YES
HUMAN_GATE_REQUIRED=MARTIN_AND_TOS
TWO_ACTIVE_IDENTITIES_FORBIDDEN=YES
UNVERSIONED_CANONICAL_ASSET_REFERENCE_FORBIDDEN=YES
```

---

## 10. Validations automatisées

Le script `scripts/validate-ai-colleague-visual-identity.mjs` refuse :

- un SHA-256 absent ou mal formé ;
- une version absente ;
- une liste de modules vide ;
- deux identités actives concurrentes ;
- une substitution silencieuse de l'image (SHA changé sans nouvelle version) ;
- une référence runtime canonique vers un asset non versionné (sans SHA-256).

Le jumeau JSON et ce Markdown doivent rester alignés sur l'identité, la version, le statut, le SHA-256 et les modules.

---

## 11. Sécurité du contrat

Ce contrat ne contient :

- aucune donnée personnelle d'utilisateur ;
- aucun secret ;
- aucun jeton ;
- aucune URL privée ;
- aucune clé d'environnement.

Les URL GitHub et Staging citées sont des preuves publiques de source, pas des credentials.

---

## 12. Interdictions d'exécution

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
TOS_CANONICAL_MERGE_AUTHORIZED_BY_THIS_GATE=no
```

ADR-0017 n'est pas réécrite. La décision correspondante est DEC-030 / ADR-0018. Le registre des modules V1 n'est pas modifié.

---

## 13. Prochaine étape

```text
NEXT_RECOMMENDED_GATE=NEXUS_IDENTITY_REGISTRY_GATE
READY_FOR_NEXUS_IDENTITY_REGISTRY_GATE_UNTIL_CANONICAL_MERGE=NO
STOP_FOR_MARTIN_AND_SEPARATE_NEXUS_IDENTITY_REGISTRY_GATE=YES
```

Après fusion de ce contrat sur la branche canonique TOS, un gate Nexus distinct pourra publier le registre technique.

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
