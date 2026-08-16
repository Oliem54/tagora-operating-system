# Paquet de transfert — Preflight widget Pulse sur site public X-Plod

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_DECISION=DEC-019 + DEC-020
SOURCE_ADR=ADR-0007 + ADR-0008
SOURCE_VALIDATION=VALD-098 + VALD-099
RULE_CHANGE=NO
NEW_DEC_REQUIRED=NO
NEW_ADR_REQUIRED=NO
NEW_VALD_REQUIRED=NO
IMPLEMENTATION_AUTHORIZED=NO
PULSE_WRITE_AUTHORIZED=NO
XPLOD_WEBSITE_WRITE_AUTHORIZED=NO
XPLOD_WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
ALLOWED_DOMAINS_WRITE_AUTHORIZED=NO
CORS_WRITE_AUTHORIZED=NO
RAILWAY_WRITE_AUTHORIZED=NO
VERCEL_WRITE_AUTHORIZED=NO
DB_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOY_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
SECRET_ACCESS_AUTHORIZED=NO
REAL_CONVERSATION_AUTHORIZED=NO
REAL_LEAD_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent **TAGORA Pulse AI**. TOS n'implémente rien. Pulse n'installe rien.

Gouvernance TOS : [GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](../plans_instanciation/GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md)

---

```text
PROJECT_TARGET: TAGORA Pulse AI
REQUEST: PULSE-P2-XPLOD-REAL-WEBSITE-WIDGET-INSTALLATION-PREFLIGHT
DECISION_TOS: READ_ONLY_PREFLIGHT_AUTHORIZED=YES
REQUIRED_CHANGE: aucun changement ; analyse uniquement.
XPLOD_ONLY=YES
STAGING_FIRST=YES
INSTALLATION_SNIPPET_STATUS=PROPOSED_ONLY
TAGORA_HANDOFF_V1=OUT_OF_SCOPE
MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Décision TOS

```text
READ_ONLY_PREFLIGHT_AUTHORIZED=YES
IMPLEMENTATION_AUTHORIZED=NO
PREFLIGHT_READONLY_AUTHORIZABLE=YES
```

Pulse peut **étudier** l'installation future du widget X-Plod. Pulse **ne l'installe pas**.

## Classification des surfaces (DEC-019 / DEC-020)

```text
PULSE_CANONICAL_SAAS_DOMAIN=https://pulse.tagora.ca
PULSE_PORTAL_ROUTE=https://app.tagora.ca/modules/pulse
TAGORA_WEBSITE=https://tagora.ca
XPLOD_PUBLIC_CUSTOMER_SITE=EXTERNAL_CUSTOMER_INTEGRATION_SURFACE
```

```text
XPLOD_CUSTOMER_WEBSITE != TAGORA_WEBSITE
XPLOD_CUSTOMER_WEBSITE != PULSE_SAAS_CANONICAL_DOMAIN
PULSE_WIDGET_XPLOD_INTEGRATION != NEXUS_MODULE_ACCESS_INTEGRATION
```

Ce chantier est **indépendant** de l'intégration Nexus → Pulse SaaS prévue par DEC-020. Il ne change pas :

- le domaine canonique Pulse ;
- le rôle de Nexus ;
- le catalogue Nexus ;
- le login central `https://app.tagora.ca/login` ;
- l'autonomie du SaaS Pulse.

## Identité centrale (DEC-021) — hors sujet

Le widget public X-Plod est un canal visiteur/client.

Il ne doit pas inventer ni contourner :

```text
ONE_TAGORA_ACCOUNT
CENTRAL_LOGIN
ENTRA
TAGORA_HANDOFF_V1
```

```text
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
LOGIN_FEDERATION_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
```

---

## 1. Identité client X-Plod (READ-ONLY)

Confirmer uniquement :

```text
CLIENT=X-Plod Canada
CLIENT_SLUG=xplod-canada
XPLOD_ONLY=YES
```

Ne pas créer ni modifier Titan, Oliem, Emoby, Skyline, ni aucun autre client.

---

## 2. Inventaire du widget Pulse (READ-ONLY)

Identifier, sans secret :

```text
WIDGET_SOURCE=
PUBLIC_WIDGET_JS=
PUBLIC_WIDGET_JS_URL=
PUBLIC_CONFIG_ENDPOINT=
PUBLIC_CONFIG_URL=
CONVERSATION_ENDPOINT=
SESSION_OR_VISITOR_MECHANISM=
CLIENT_SLUG_CONFIGURATION=
AGENT_SLUG_CONFIGURATION=
WIDGET_ENABLED_STATE=
CURRENT_ENVIRONMENT=
STAGING_BACKEND=
PRODUCTION_BACKEND=
SECRET_REQUIRED=
SECRET_LOCATION_TYPE=
SECRET_EXPOSED_TO_BROWSER=
```

Exiger :

```text
SECRET_EXPOSED_TO_BROWSER=NO
```

Aucun secret affiché. Aucun token. Aucune service role key. Aucun `.env`.

---

## 3. Domaine du vrai site X-Plod

Identifier **avec preuve** le vrai site public X-Plod. **Ne pas deviner.**

Produire :

```text
XPLOD_REAL_WEBSITE_URL=
XPLOD_WEBSITE_DOMAIN=
XPLOD_WEBSITE_PLATFORM=
XPLOD_WEBSITE_HOSTING=
XPLOD_WEBSITE_REPOSITORY=
XPLOD_WEBSITE_CMS=
XPLOD_WEBSITE_STAGING_AVAILABLE=
```

`XPLOD_WEBSITE_REPOSITORY` uniquement si connu **sans** ouvrir un repo interdit.

Si le vrai site ne peut pas être identifié avec certitude :

```text
STATUS=HOLD
```

Demander à Martin uniquement l'information manquante. Ne pas inventer le domaine.

---

## 4. Frontière repository Website X-Plod

Ne pas ouvrir ni modifier automatiquement un autre repository.

Si le vrai site X-Plod possède un repository distinct :

```text
OTHER_REPOSITORY_REQUIRED=YES
HOLD_FOR_SEPARATE_READONLY_AUTHORIZATION=YES
```

sauf si un Human Gate Martin **séparé** autorise explicitement une consultation read-only.

```text
XPLOD_WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
CROSS_PROJECT_WRITE=NO
```

---

## 5. Point futur d'installation (sans modifier)

Déterminer, sans injecter :

```text
RECOMMENDED_WIDGET_INSTALLATION_POINT=
RECOMMENDED_FILE_OR_CMS_LOCATION=
GLOBAL_OR_PAGE_SPECIFIC=
```

Possibilités à analyser si prouvées : root layout ; layout global ; footer global ; template global ; CMS custom code ; Tag Manager ; plugin ; script manager ; autre mécanisme **prouvé**.

Ne rien injecter.

---

## 6. Snippet d'installation (proposé seulement)

Produire le snippet **exact** proposé pour X-Plod **uniquement après** identification du widget réel actuel.

```text
INSTALLATION_SNIPPET_STATUS=PROPOSED_ONLY
INSTALLATION_SNIPPET_READY=YES / NO
```

Le snippet ne doit contenir aucun secret, token privé, clé backend, credential, ni service role key.

Le snippet **ne doit pas** être installé dans ce gate.

---

## 7. allowedDomains / CORS (inspection seule)

Inspecter sans écrire :

- `allowedDomains`
- `allowedOrigins`
- CORS
- Origin validation
- Referer validation
- anti-abuse
- `DEFAULT_WIDGET_CLIENT_SLUG`
- configuration par client

Produire :

```text
CURRENT_ALLOWED_DOMAIN_STATUS=
CURRENT_ALLOWED_ORIGIN_STATUS=
CORS_STATUS=
DEFAULT_WIDGET_CLIENT_SLUG_STATUS=
XPLOD_DOMAIN_ALREADY_ALLOWED=YES / NO
CHANGE_REQUIRED=YES / NO
```

Ne pas modifier `allowedDomains`, `allowedOrigins`, CORS, ni `DEFAULT_WIDGET_CLIENT_SLUG`.

---

## 8. CSP / sécurité navigateur

Analyser : `script-src` ; `connect-src` ; `frame-src` si pertinent ; `img-src` ; `style-src` ; `font-src` si pertinent ; CORS ; Origin ; Referer Policy ; Mixed Content ; HTTPS ; SameSite ; cookies ; localStorage ; sessionStorage.

Produire :

```text
CSP_COMPATIBILITY=
CORS_COMPATIBILITY=
HTTPS_COMPATIBILITY=
COOKIE_COMPATIBILITY=
BROWSER_SECURITY_BLOCKERS=
```

Aucune modification.

---

## 9. Confidentialité / tracking

Déterminer si le widget crée **avant interaction** : cookie ; localStorage ; sessionStorage ; `visitor_id` ; `tracking_id` ; `analytics_event` ; lead ; conversation.

Produire :

```text
PRE_INTERACTION_STORAGE=
VISITOR_TRACKING=
ANALYTICS_BEFORE_INTERACTION=
LEAD_CREATED_BEFORE_INTERACTION=
CONVERSATION_CREATED_BEFORE_INTERACTION=
CONSENT_IMPACT=
PRIVACY_IMPACT=
```

Ne changer aucun comportement.

---

## 10. Widgets existants sur le site public X-Plod

Vérifier, sans désinstaller : Tidio ; Intercom ; HubSpot Chat ; Messenger Chat ; ancien widget X-Plod ; ancien widget Pulse ; autre chat/widget.

Produire :

```text
EXISTING_CHAT_WIDGET_FOUND=
EXISTING_CHAT_WIDGET_TYPE=
DUPLICATE_WIDGET_RISK=
CONFLICTING_SCRIPT=
```

---

## 11. UX (analyse seule)

Analyser : desktop ; mobile ; tablet ; placement bottom-right ; z-index ; chevauchement footer ; chevauchement bannière cookies ; chevauchement bouton sticky ; responsive ; accessibilité ; performance ; lazy loading.

Produire :

```text
DESKTOP_COMPATIBILITY=
MOBILE_COMPATIBILITY=
TABLET_COMPATIBILITY=
ACCESSIBILITY_RISK=
PERFORMANCE_RISK=
UX_BLOCKERS=
```

Aucune modification UI.

---

## 12. Backend Pulse (dépendances widget uniquement)

Préférer : public health ; public widget JS ; public config X-Plod. **Ne pas** déclencher de vraie conversation.

Produire :

```text
BACKEND_HEALTH=
PUBLIC_WIDGET_HEALTH=
PUBLIC_CONFIG_HEALTH=
XPLOD_WIDGET_ENABLED=
WIDGET_BACKEND_URL=
```

Si une inspection Railway, DB, secret ou infrastructure distante dépasse les droits read-only **déjà** autorisés dans Pulse :

```text
STATUS=HOLD
```

Retour Martin / TOS. Ne pas élargir silencieusement le gate.

---

## 13. Aucune intégration métier

Ne déclencher aucun : lead réel ; conversation réelle ; courriel ; SMS ; Facebook ; Odoo ; OpenAI réel ; TAGORA Voice ; provider réel.

Aucune DB write.

---

## 14. Plan futur d'installation (gates séparés)

Retourner un plan futur **séparé**. Aucun de ces gates n'est autorisé maintenant.

| Gate futur | Objet | Autorisé maintenant |
|---|---|---|
| **A** | Config widget Pulse / allowed domain write, **uniquement si nécessaire** | **NO** |
| **B** | Installation Website X-Plod STAGING / PREVIEW, si staging disponible | **NO** |
| **C** | QA conversation / lead contrôlée | **NO** |
| **D** | Installation Website X-Plod Production | **NO** |
| **E** | Production smoke | **NO** |

---

## 15. Staging d'abord

```text
STAGING_FIRST=YES
NO_DIRECT_PRODUCTION_BY_DEFAULT=YES
```

Si le Website X-Plod possède un staging/preview : installer d'abord sur staging dans un Human Gate **séparé**.

Si aucun staging n'existe : pas d'écriture Production par défaut. Retour Martin / TOS avec proposition de `CANARY_CONTROLLED_PLAN` avant toute écriture Production.

---

## 16. Rollback (documenter, ne pas exécuter)

Avant toute **future** installation, produire :

```text
ROLLBACK_METHOD=
ROLLBACK_FILE_OR_SETTING=
ROLLBACK_REQUIRES_DEPLOY=
WIDGET_DISABLE_METHOD=
BACKEND_DISABLE_METHOD=
ROLLBACK_VALIDATION_METHOD=
TIME_TO_ROLLBACK_ESTIMATE=
```

Aucun rollback maintenant.

---

## Critères d'acceptation

```text
ACCEPTANCE_CRITERIA:
  CLIENT_CONFIRMED=xplod-canada
  XPLOD_ONLY=YES
  ALL_PREFLIGHT_FIELDS_COMPLETED=YES
  XPLOD_REAL_WEBSITE_IDENTIFIED_WITH_PROOF=YES
  SECRET_EXPOSED_TO_BROWSER=NO
  INSTALLATION_SNIPPET_STATUS=PROPOSED_ONLY
  NO_WIDGET_INSTALLED=YES
  NO_ALLOWED_DOMAINS_WRITE=YES
  NO_CORS_WRITE=YES
  NO_REAL_CONVERSATION=YES
  NO_REAL_LEAD=YES
  FUTURE_GATES_A_TO_E_DOCUMENTED=YES
  STAGING_FIRST_RECORDED=YES
  ROLLBACK_PLAN_DOCUMENTED=YES
  NEXUS_MAPPING_UNCHANGED=YES
  PULSE_CANONICAL_DOMAIN_UNCHANGED=YES
  IDENTITY_CENTRALE_OUT_OF_SCOPE=YES
```

## Conditions d'arrêt

```text
STOP_CONDITIONS:
  write requis
  secret requis / affiché
  autre repository requis sans Human Gate séparé
  DB write
  DNS
  deploy
  Production
  conversation réelle
  lead réel
  domaine X-Plod non identifiable avec preuve
  inspection Railway/secret au-delà du read-only déjà autorisé
```

Toute condition d'arrêt → `STATUS=HOLD` → retour Martin / TOS.

## Risque

```text
RISK: HIGH si domaine, CORS, CSP, widgets existants ou staging sont ambigus.
CROSS_PROJECT_SCOPE_DEFINED=YES
FAIL_CLOSED_IF_AMBIGUOUS=YES
MARTIN_TRANSFER_REQUIRED=YES
```

## Interdictions

Aucun write Pulse ; aucun write Website X-Plod ; aucun autre repository ; aucun Railway ; aucun Vercel ; aucun allowedDomains ; aucun CORS ; aucune variable ; aucun secret ; aucun `.env` ; aucun DNS ; aucun script injecté ; aucune installation widget ; aucun deploy ; aucun redeploy ; aucune Production ; aucune DB write ; aucun lead ; aucune conversation ; aucun email/SMS ; aucun Odoo ; aucun Facebook ; aucun OpenAI réel ; aucun Entra ; aucun SSO.

## Références

- [GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](../plans_instanciation/GOUVERNANCE_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md)
- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- Paquet surfaces Pulse (DEC-019) : [PAQUET_TRANSFERT_SURFACES_PULSE_AI.md](PAQUET_TRANSFERT_SURFACES_PULSE_AI.md)
- Paquet mapping Pulse (DEC-020) : [PAQUET_TRANSFERT_MAPPING_PULSE_AI.md](PAQUET_TRANSFERT_MAPPING_PULSE_AI.md)
- Paquet identité Pulse (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md](PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md)
