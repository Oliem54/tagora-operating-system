# TAGORA Nexus — MFA centralisée Premium 2027

Décision de gouvernance. Elle enregistre l'architecture MFA approuvée par Martin le 2026-11-21. Elle ne réécrit pas le corps des ADR, DEC et validations antérieures. Elle les réconcilie pour la lecture active.

Ce document n'implémente rien. Il ne change aucun tenant, secret, facteur, politique, contrat SSO, dépôt ou environnement.

```text
DECISION_ID=TAGORA-NEXUS-CENTRAL-MFA-V1
DECISION_VERSION=1.0.0
DECISION_DATE=2026-11-21
DECISION_AUTHORITY=MARTIN
SOURCE_GATE=NEXUS_CENTRAL_MFA_ARCHITECTURE_FEASIBILITY_CONSOLIDATION_GO
ADR=ADR-0024
DEC=DEC-036
VALIDATION=VALD-114
FEASIBILITY_REPORT_DATE=2026-11-21
FEASIBILITY_REPORT_STATUS=ACCEPTED_NOT_REPEATED
DOCUMENTATION_ONLY=yes
IMPLEMENTATION_AUTHORIZED=NO
RUNTIME_CHANGE=no
NEXUS_V1_PRODUCTION=FROZEN
```

---

## 1. Décision

```text
TOS_MASTER_MFA_DECISION=RECORDED
OBJECTIVE=ONE_CENTRAL_IDENTITY_ONE_MFA_ENROLLMENT_SECURE_ACCESS_TO_SIX_MODULES
NEXUS_IDP=ENTRA_EXTERNAL_ID
ENTRA_MFA_FEASIBILITY=CONDITIONAL_YES
CENTRAL_MFA_PROOF_AVAILABLE=NO
HORORA_SUPABASE_AAL2_COMPATIBILITY=NOT_EQUIVALENT
OIDC_INTEGRATION_FEASIBILITY=NEXUS_ONLY
RECOMMENDED_ARCHITECTURE=ENTRA_EXTERNAL_ID_AT_NEXUS_THEN_ES256_MFA_ASSERTION
PREFERRED_MFA_METHOD=MICROSOFT_HOSTED_TOTP
SMS_IN_TARGET_ARCHITECTURE=EXCLUDED
NEXUS_IS_MODULE_BUSINESS_ADMINISTRATOR=NO
SIXTH_MODULE=RELORA
STAGING_CAPTURE_GATE=NOT_AUTHORIZED
NEXT_SINGLE_GO=NEXUS_STAGING_ONLY_MFA_CLAIM_CAPTURE_AND_PROOF_SCHEMA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
PRODUCTION_CHANGED=NO
```

Une identité centrale. Un seul enrôlement MFA. Un accès sécurisé aux six modules.

Microsoft Entra External ID est le fournisseur MFA privilégié. NEXUS reste l'autorité de l'identité humaine, de l'authentification, de l'assurance MFA, du SSO, du `nuser`, des organisations centrales, des abonnements, des accès généraux et des échanges signés avec les modules.

Chaque module conserve son User Central, ses administrateurs, ses rôles, ses permissions métier et son isolation d'organisation. NEXUS ne devient pas l'administrateur métier des modules.

## 2. Réconciliation du fournisseur d'identité

Le fournisseur d'identité humain de référence est `ENTRA_EXTERNAL_ID`.

La décision du 2026-08-21 dans [TAGORA-NEXUS-IDP-PROVIDER-V1.md](TAGORA-NEXUS-IDP-PROVIDER-V1.md) reste dans le dépôt. Son corps, qui désigne un Supabase Auth dédié, est un enregistrement historique. Il n'est plus la lecture active du fournisseur humain. Aucun runtime n'est modifié pour cette réconciliation.

Tenants déjà utilisés par NEXUS :

```text
PRODUCTION_TENANT_DOMAIN=tagoraidentityproduction.onmicrosoft.com
STAGING_TENANT_DOMAIN=tagoraidentitystaging.onmicrosoft.com
OIDC_AUTHORITY_HOST=ciamlogin.com
```

Faits acceptés du rapport du 2026-11-21, non repris comme une nouvelle étude :

- signatures RS256 ;
- `sub` pairwise ;
- `auth_time` et `acr` annoncés dans les documents de découverte ;
- `amr` et `acrs` non annoncés dans ces documents ;
- l'absence d'un claim dans le document de découverte ne prouve pas son absence dans tous les jetons ;
- le vérificateur actuel contrôle signature, issuer, audience, tenant, nonce et `sub` opaque ;
- `email_verified` et `phone_number_verified` ne sont pas une preuve MFA ;
- aucune preuve MFA centrale n'est aujourd'hui vérifiée ni transmise aux modules.

Un module métier ne devient pas un client Entra supplémentaire pour obtenir ce MFA. Le `sub` pairwise resterait propre à chaque client.

## 3. Méthode MFA cible

Le parcours OIDC Microsoft déjà utilisé par NEXUS est conservé. La méthode privilégiée est Microsoft Authenticator, ou une application TOTP compatible, sur le parcours hébergé par Microsoft.

```text
TOTP_GA_STATUS_ON_2026-11-21=ROLLOUT_TOWARD_GA_END_NOVEMBER_OR_EARLY_DECEMBER_2026
TOTP_AVAILABILITY_MUST_BE_RECHECKED_BEFORE_ACTIVATION=yes
SMS_EXCLUDED_TO_LIMIT_COST=yes
EMAIL_OTP_AND_PASSKEY=TO_EVALUATE_UNDER_THEIR_REAL_LIMITS
EMAIL_OTP_AS_SECOND_FACTOR=ONLY_IF_FIRST_FACTOR_IS_PASSWORD
EARLY_EMAIL_OTP_OR_PASSKEY_CAPTURE=REQUIRES_DISTINCT_MARTIN_APPROVAL
```

## 4. Contrat cible de preuve

Après l'authentification Microsoft, NEXUS vérifie côté serveur une preuve MFA exploitable. Les claims admissibles restent à confirmer par une capture Staging. Cette capture n'est pas autorisée par la présente décision.

Une fois la preuve vérifiée, NEXUS pourra émettre une assertion ES256 propre au module destinataire :

```text
ASSERTION_ALG=ES256
ASSERTION_SUB=NUSER
ASSERTION_ORGANIZATION_ID=REQUIRED
ASSERTION_AUTH_TIME=REQUIRED
ASSERTION_MFA_METHOD_AND_ASSURANCE=VERIFIED_BY_NEXUS
ASSERTION_ENTRA_CLAIM_PROVENANCE=VERIFIED_TOKEN_ONLY
ASSERTION_AUDIENCE=SINGLE_MODULE
ASSERTION_MAX_TTL_SECONDS=120
ASSERTION_JTI=SINGLE_USE
ASSERTION_REPLAY_PROTECTION=REQUIRED
ASSERTION_SIGNATURE_AND_EXPIRY_CHECKED_BY_MODULE_SERVER=REQUIRED
BROWSER_MFA_DECLARATION=IGNORED
BUSINESS_ROLE_AUTHORITY_IN_ASSERTION=FORBIDDEN
MODULE_CHECKS_ORGANIZATION_MEMBERSHIP_LOCAL_PERMISSIONS_AND_REQUIRED_ASSURANCE=REQUIRED
PROOF_SCHEMA_FROZEN=NO
```

Le schéma définitif reste ouvert jusqu'au GO de capture.

## 5. HORORA

```text
HORORA_LOCAL_MFA_WORK=STOPPED
HORORA_PR_71=CLOSED_NOT_MERGED
HORORA_PRODUCTION_PILOT=DEPLOYED_UNCHANGED
HORORA_PHONE_FACTORS=6_VERIFIED_PRESERVED
HORORA_PHONE_ADDON=ACTIVE
HORORA_MFA_TESTS_LATEST=68_PASS
HORORA_SUPABASE_AAL2_COMPATIBILITY=NOT_EQUIVALENT
```

Le handoff HORORA actuel est un JWT ES256 de 120 secondes. Il porte `sub` = `nuser`, `organization_id`, `jti`, `nonce`, `aud` et `exp`. Il consomme `jti` et `nonce` une fois. Il ne porte pas de preuve MFA.

Supabase HORORA n'accorde AAL2 qu'après vérification d'un facteur local Phone ou TOTP. Une assertion MFA NEXUS ne devient pas AAL2. Les politiques RLS lient les données à `auth.uid()` et à l'appartenance d'organisation. Elles ne remplacent pas la vérification MFA. Les opérations qui exigent AAL2 gardent cette protection. Les accès direction qui passent par `nexus_handoff` reçoivent un contrôle MFA serveur avant toute transition. Aucun contournement d'AAL2 n'est autorisé.

L'OIDC externe Supabase reste un sujet à étudier. Il n'est pas une solution certifiée.

Interdictions de cet enregistrement : ne pas rouvrir la PR 71, ne pas relancer les 68 tests, ne pas retirer les facteurs Phone, ne pas exécuter de retour arrière automatique, ne pas engager de nouveau développement MFA local HORORA.

## 6. Six modules

Ordre de transition, après des GO distincts :

1. HORORA
2. DEPORA
3. PULS
4. MESSOR
5. YORVA
6. RELORA

```text
SIXTH_MODULE=RELORA
HISTORICAL_SIXTH_NAME_2026-08-17=ETIOQ
SIXTH_NAME_RECONCILIATION=RECORDED
ETIOQ_METIER_REASSIGNED=NO
TECHNICAL_IDENTIFIER_RENAME_AUTHORIZED=NO
REPOSITORY_RENAME_AUTHORIZED=NO
DIRECTORY_RENAME_AUTHORIZED=NO
DOMAIN_OR_DNS_CHANGE_AUTHORIZED=NO
RELORA_SECURITY_HOLD=true
RELORA_OPENABLE=false
RELORA_HOLD_LIFTED_BY_THIS_DECISION=NO
```

RELORA est le sixième module choisi par Martin. Le nom ETIOQ reste l'enregistrement historique du 2026-08-17. Cette décision ne réattribue pas le métier étiquettes décrit sous ce nom historique, ne renomme aucun dépôt, dossier, clé technique ou domaine, et ne lève pas le hold RELORA.

Chaque module conserve ses authentifications et ses facteurs jusqu'à la validation complète de son propre remplacement.

## 7. Récupération et retour arrière

À prévoir dans un GO ultérieur, avant toute suppression d'un facteur existant :

- comptes d'urgence protégés ;
- perte de téléphone ;
- révocation des sessions Entra ;
- révocation des sessions NEXUS ;
- révocation des sessions locales de chaque module ;
- rejet des assertions réutilisées ;
- maintien des anciens facteurs jusqu'à validation ;
- retour arrière vérifiable par module.

```text
GLOBAL_REVOCATION_AVAILABLE=NO
AUTOMATIC_ROLLBACK_AUTHORIZED=NO
```

## 8. Coût

```text
NEW_MONTHLY_COST_USD=0_REPORTED_CONDITIONAL
EXPECTED_NET_SAVINGS_USD=0_NOW
TARGET_GROSS_SAVINGS_USD=APPROX_75_PER_MONTH
PHONE_ADDON_DISABLE_AUTHORIZED=NO
ENTRA_AND_SUPABASE_INVOICES_CONFIRMED=NO
```

L'économie immédiate est nulle tant que l'add-on Phone HORORA reste actif. Sa suppression future exige une compatibilité de sécurité démontrée, une migration validée et une récupération opérationnelle. Les frais Entra et la facture Supabase réelle sont à confirmer avant un calcul d'économie nette. Le chiffre 75 USD est l'ordre de grandeur publié pour le premier projet Phone d'une organisation Supabase. Il n'est pas une facture lue.

## 9. Blocages encore ouverts

- Preuve MFA Entra non observée et non appliquée par NEXUS.
- TOTP External ID non confirmé généralement disponible à la date du rapport.
- Parcours utilisateur et politique d'accès conditionnel non validés.
- Compatibilité HORORA Supabase AAL2 non démontrée.
- Schéma d'assertion ES256 non figé.
- Essais de sécurité et de récupération non préparés pour exécution.

## 10. Prochain GO

```text
NEXT_SINGLE_GO=NEXUS_STAGING_ONLY_MFA_CLAIM_CAPTURE_AND_PROOF_SCHEMA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
STAGING_ACTIVATION_AUTHORIZED_BY_THIS_DECISION=NO
```

Le GO distinct, lorsqu'il sera donné, vise uniquement le tenant et l'application Entra External ID de Staging : revérifier le TOTP, configurer la méthode et la politique seulement après cette autorisation, authentifier un humain de test autorisé, capturer une version expurgée, observer `amr`, `acr`, `acrs` et les autres preuves présentes, en établir le sens, figer le schéma d'assertion, puis nommer le GO d'implémentation suivant.

Une capture anticipée par code courriel ou passkey exige une approbation explicite distincte.

## 11. Interdictions

```text
CODE_CHANGE_AUTHORIZED=no
COMMIT_AUTHORIZED=no
PUSH_AUTHORIZED=no
DEPLOYMENT_AUTHORIZED=no
MIGRATION_AUTHORIZED=no
PRODUCTION_CHANGE_AUTHORIZED=no
STAGING_CHANGE_AUTHORIZED=no
ENTRA_POLICY_ACTIVATION_AUTHORIZED=no
SECRET_OR_PERMISSION_CHANGE_AUTHORIZED=no
SSO_CONTRACT_CHANGE_AUTHORIZED=no
MFA_FACTOR_CHANGE_AUTHORIZED=no
PHONE_ADDON_DISABLE_AUTHORIZED=no
NEXUS_PRODUCTION_CHANGE_AUTHORIZED=no
NEW_GENERAL_AUDIT_AUTHORIZED=no
ADDITIONAL_SPEND_AUTHORIZED=no
```

## 12. Accusé de réception NEXUS

```text
ACK_GATE=NEXUS_CENTRAL_MFA_TRANSFER_ACKNOWLEDGEMENT_GO
ACK_DATE=2026-11-21
ACK_AUTHORITY=MARTIN
ACK_RESPONDENT=AGENT_NEXUS
NEXUS_TRANSFER_PACKAGE_RECEIVED=REFERENCES_AND_DECISIONS_RECEIVED_FULL_FILES_NOT_YET_VERIFIED
ARCHITECTURE_UNDERSTOOD=YES
EXISTING_PASSES_PRESERVED=YES
GOVERNANCE_REFERENCES=ADR-0024_DEC-036_VALD-114
ENTRA_EXTERNAL_ID=HUMAN_IDENTITY_PROVIDER_PRESERVED
CENTRAL_MFA_ASSERTION=ES256_TARGET_ARCHITECTURE_ACCEPTED
HORORA_SUPABASE_AAL2=MANDATORY_COMPATIBILITY_NOT_YET_CERTIFIED
HORORA_AAL2_EQUIVALENCE=STILL_FORBIDDEN
HORORA_LOCAL_MFA=STOPPED
HORORA_PHONE_ADDON=ACTIVE
RELORA_SECURITY_HOLD=TRUE
RELORA_OPENABLE=FALSE
STAGING_CAPTURE_PREREQUISITES=ENTRA_STAGING_SESSION_AVAILABILITY_AUTHENTICATION_CLAIMS_TRUST_CHAIN_NUSER_ORG_BINDING_PROOF_SCHEMA_AND_SERVER_VALIDATION
EXACT_REMAINING_BLOCKERS=OFFICIAL_SOURCE_FILES_NOT_DIRECTLY_INSPECTED_AND_REAL_ENTRA_MFA_CLAIMS_NOT_CAPTURED
NEXT_SINGLE_GO=NEXUS_STAGING_ONLY_MFA_CLAIM_CAPTURE_AND_PROOF_SCHEMA
NEXT_SINGLE_GO_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
CODE_CHANGED=NO
COMMIT_CREATED=NO
DEPLOYMENT=NO
MIGRATION=NO
ENTRA_POLICY_CHANGED=NO
HUMAN_TOKEN_CAPTURED=NO
PRODUCTION_CHANGED=NO
NEXUS_DECISION=TRANSFER_RECEIVED_PRESERVE_PASSES_WAIT_FOR_NEXT_MARTIN_GO
```

NEXUS a reçu les références ADR-0024, DEC-036 et VALD-114 et a compris l'architecture. L'inspection directe des fichiers sources officiels n'est pas faite. Les passes existants restent conservés. La compatibilité AAL2 HORORA reste obligatoire et non certifiée. Elle ne devient pas une équivalence. La capture Staging reste non autorisée.

## 13. Acceptation finale de l'accusé

```text
ACK_ACCEPTANCE_GATE=NEXUS_CENTRAL_MFA_ACK_FINAL
ACK_ACCEPTANCE_DATE=2026-11-21
ACK_ACCEPTANCE_AUTHORITY=MARTIN
NEXUS_TRANSFER_ACK=ACCEPTED
GOVERNANCE_REFERENCES=ADR-0024_DEC-036_VALD-114
CENTRAL_MFA_ARCHITECTURE=PRESERVED
EXISTING_PASSES=PRESERVED
HORORA_AAL2=NOT_YET_CERTIFIED
HORORA_PHONE_ADDON=ACTIVE
NEXUS_PRODUCTION=FROZEN
RELORA_SECURITY_HOLD=TRUE
IMPLEMENTATION_AUTHORIZED=NO
NEXT_SINGLE_GO=NEXUS_STAGING_ONLY_MFA_CLAIM_CAPTURE_AND_PROOF_SCHEMA
NEXT_SINGLE_GO_AUTHORIZED=NO
CONTROLLED_HOLD=MAINTAINED_UNTIL_NEXT_MARTIN_AUTHORIZATION
NEW_AUDIT_AUTHORIZED=NO
DEVELOPMENT_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
```

Martin accepte l'accusé NEXUS. La gouvernance ADR-0024, DEC-036 et VALD-114 reste la lecture active. Le hold contrôlé demeure jusqu'à la prochaine autorisation de Martin.

## 14. Lecture Staging du 2026-11-22

```text
READ_GATE=NEXUS_ENTRA_STAGING_MFA_POLICY_AND_TEST_IDENTITY_READONLY_UNBLOCK_GO
AADSTS7000215_CAUSE=LOCAL_STAGING_SECRET_IS_REDACTED_PLACEHOLDER
ENTRA_STAGING_ADMIN_READ_ACCESS=HOLD
STAGING_MFA_POLICY=HOLD
TOTP_TENANT_AVAILABILITY=HOLD
ISOLATED_TEST_POLICY_REQUIRED=UNKNOWN
EXISTING_TEST_IDENTITY_CANDIDATE=NOT_AVAILABLE
MFA_TOKEN_CAPTURE=NOT_EXECUTED
ES256_SCHEMA=HOLD
PRODUCTION_CHANGED=NO
AZURE_CLI=ABSENT
GRAPH_POWERSHELL=ABSENT
```

Le fichier local de Staging ne contient pas une valeur de secret client. Le sondage `client_credentials`, jeton ignoré, reçoit `invalid_client` / `AADSTS7000215`. Aucune politique, aucun utilisateur et aucun secret n'ont été modifiés. La politique MFA du tenant reste non lue.

## 15. Référence documentaire HORORA Phone / TOTP

```text
REFERENCE=HORORA_MFA_PHONE_COST_REDUCTION_TOTP_FEASIBILITY_DOCUMENTATION_GO
STATUS=DOCUMENTATION_ACCEPTED
ACCEPTED_DATE=2026-11-22
ACCEPTED_BY=MARTIN
TOTP_EXISTING_CAPABILITY=YES_CODE_PRESENT
TOTP_PRODUCTION_CONFIGURATION=NOT_YET_VERIFIED
HORORA_AAL2_PRESERVED_FEASIBILITY=YES_CONDITIONAL
MFA_PHONE_CURRENT_COST=0.1027_USD_PER_HOUR
MONTHLY_SAVINGS_POTENTIAL=APPROX_75_USD
ANNUAL_SAVINGS_POTENTIAL=APPROX_900_USD
AUTH_ACCOUNT_COUNT=18
PHONE_MFA_VERIFIED_ONLY=6
TOTP_VERIFIED_COUNT=0
PHONE_ROLE_SPLIT=1_ADMIN_4_DIRECTION_1_EMPLOYEE
ADDITIONAL_DIRECTION_WITHOUT_VERIFIED_FACTOR=1
PHONE_MFA_DISABLE=NO
TOTP_ACTIVATION=NO
USER_MIGRATION=NO
NEXUS_CHANGE=NO
PRODUCTION_CHANGED=NO
ADDITIONAL_EXPENSE_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
HORORA_PHONE_ADDON=ACTIVE
FUTURE_GATE=HORORA_MFA_TOTP_STAGING_MIGRATION_DESIGN_AND_RECOVERY_READONLY_GO
FUTURE_GATE_AUTHORIZED=NO
ACTIVE_PRIORITY=NEXUS_HORORA_V1_E2E_CERTIFICATION_REMAINS_ON_HOLD
NEXT_ACTION=TOS_ACKNOWLEDGE_AND_HOLD
```

Martin accepte cet inventaire comme état de référence historique. La migration Phone vers TOTP est annulée par la section 16. Le MFA Phone reste actif. Aucune activation, désactivation, migration, modification Nexus ou changement Production n'est déclenché.

## 16. Correction — autorité unique NEXUS, aucun MFA local HORORA

```text
GATE=TOS_NEXUS_HORORA_CENTRAL_ONLY_AUTH_AND_PHONE_MFA_DECOMMISSION_READONLY_PLAN_GO
DATE=2026-11-22
AUTHORITY=MARTIN
NEXUS_CENTRAL_AUTHORITY=CONFIRMED
HORORA_LOCAL_MFA_TARGET=NONE
HORORA_TOTP_MIGRATION=CANCELLED
HORORA_MFA_TOTP_STAGING_MIGRATION_DESIGN_AND_RECOVERY_READONLY_GO=CANCELLED_NOT_EXECUTED
NEXUS_HORORA_E2E_STATUS=HOLD_TRANSPORT_PASS_MFA_ASSURANCE_ABSENT
LEGACY_PAGE_LOGIN_PATHS=REDIRECTED_TO_NEXUS
LEGACY_LOCAL_MFA_AND_PASSWORD_CHECK=STILL_PRESENT
ALL_USERS_EXCLUSIVE_NEXUS=NOT_CONFIRMED
EXACT_BLOCKERS=HANDOFF_HAS_NO_VERIFIED_MFA_CLAIM;ENTRA_STAGING_MFA_POLICY_UNREAD;NO_SERVER_VERIFIED_ID_TOKEN;LOCAL_AAL2_STILL_REQUIRED_FOR_ADMIN_AND_DIRECTION;EXCLUSIVE_ACCESS_FOR_ALL_18_ACCOUNTS_NOT_PROVEN
MONTHLY_SAVINGS_TARGET=75_USD
PHONE_MFA_DISABLE=NO
PHONE_ADDON_DISABLE=NO
NEXUS_CHANGE=NO
PRODUCTION_CHANGED=NO
IMPLEMENTATION_AUTHORIZED=NO
NEXT_SINGLE_GO=NEXUS_ENTRA_STAGING_DIRECTORY_READER_MFA_POLICY_READONLY_GO
NEXT_SINGLE_GO_AUTHORIZED=NO
```

NEXUS est l'autorité unique visée pour l'authentification humaine, le SSO, le MFA et l'entrée dans les modules. HORORA conserve ses administrateurs, ses rôles, ses permissions métier et l'isolation par organisation. L'assertion ne porte pas ces permissions : `business_permissions_authority=false` reste en vigueur.

Le transport `TAGORA_HANDOFF_V1` déjà prouvé reste valable : ES256, 120 secondes, `sub` = `nuser`, organisation, `jti` et `nonce` à usage unique. Le lancement Production existant ne signe pas `auth_time`, `acr`, `amr` ni une méthode MFA. Les pages `/login`, `/connexion`, `/employe/login` et `/direction/login` renvoient déjà vers NEXUS en l'absence de session broker. Un cookie JWT Supabase antérieur au 2026-09-08 est refusé. Le MFA local admin et Direction, l'exigence AAL2 du cookie applicatif local et la vérification de mot de passe `signInWithPassword` sont encore présents. Un acteur hors liste nominative n'entre que s'il a exactement un rôle HORORA actif déjà enregistré. Les 18 comptes ne sont donc pas prouvés comme exclusivement accessibles par NEXUS.

Le MFA Phone et l'add-on à 0,1027 USD de l'heure restent actifs. Leur retrait attend, dans l'ordre : une politique MFA Staging lue, une assertion MFA signée et vérifiée sur le handoff existant, une preuve Staging employé, Direction et administrateur sans AAL2 local, la fermeture des voies locales restantes, puis un GO Production distinct de Martin.
