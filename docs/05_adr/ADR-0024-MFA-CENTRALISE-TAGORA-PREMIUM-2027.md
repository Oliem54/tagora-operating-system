# ADR-0024 — MFA centralisée TAGORA Premium 2027

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-11-21**

Validation : **VALD-114**  
Décision : **DEC-036**  
Gate : **NEXUS_CENTRAL_MFA_ARCHITECTURE_FEASIBILITY_CONSOLIDATION_GO**

Cette ADR enregistre l'architecture cible et la réconciliation documentaire qui l'accompagne. Elle ne remplace pas le texte historique d'ADR-0008, ADR-0009, ADR-0010, ADR-0014 ni de la décision IdP du 2026-08-21. Elle fixe la lecture active.

Elle n'autorise aucune implémentation, aucune politique Entra, aucune modification de NEXUS Production ni de Staging.

Contrat : [TAGORA-NEXUS-CENTRAL-MFA-V1.md](../governance/TAGORA-NEXUS-CENTRAL-MFA-V1.md)  
Paquet NEXUS : [PAQUET_TRANSFERT_MFA_CENTRAL_NEXUS.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_MFA_CENTRAL_NEXUS.md)

---

## Contexte

Le rapport de faisabilité TOS du 2026-11-21 est accepté. Il n'est pas repris ici. Ses conclusions de référence sont `ENTRA_MFA_FEASIBILITY=CONDITIONAL_YES`, `NEXUS_CURRENT_IDENTITY_PROVIDER=ENTRA_EXTERNAL_ID`, `CENTRAL_MFA_PROOF_AVAILABLE=NO`, `HORORA_SUPABASE_AAL2_COMPATIBILITY=NOT_EQUIVALENT` et `OIDC_INTEGRATION_FEASIBILITY=NEXUS_ONLY`.

Le fournisseur humain observé sur les tenants External ID de Production et de Staging contredit, pour la lecture active, la désignation Supabase Auth du 2026-08-21. Le registre commercial du 2026-08-17 nomme ETIOQ comme sixième module. Martin choisit RELORA comme sixième module et demande une réconciliation documentaire, sans nouveau débat et sans renommage technique.

---

## Décision

```text
ARCHITECTURE=ENTRA_EXTERNAL_ID_AT_NEXUS_THEN_ES256_MFA_ASSERTION
NEXUS_IDP=ENTRA_EXTERNAL_ID
CENTRAL_MFA_PROOF_AVAILABLE=NO
HORORA_SUPABASE_AAL2_EQUIVALENCE=FORBIDDEN
MODULE_ENTRA_CLIENT_FOR_MFA=FORBIDDEN
SMS_IN_TARGET_ARCHITECTURE=EXCLUDED
PREFERRED_MFA_METHOD=MICROSOFT_HOSTED_TOTP
PROOF_SCHEMA_FROZEN=NO
SIXTH_MODULE=RELORA
HISTORICAL_SIXTH_NAME=ETIOQ
TECHNICAL_RENAME_AUTHORIZED=NO
RELORA_SECURITY_HOLD=true
RELORA_OPENABLE=false
NEXT_SINGLE_GO=NEXUS_STAGING_ONLY_MFA_CLAIM_CAPTURE_AND_PROOF_SCHEMA
NEXT_SINGLE_GO_AUTHORIZED_NOW=NO
IMPLEMENTATION_AUTHORIZED=NO
NEXUS_V1_PRODUCTION=FROZEN
```

NEXUS vérifie la preuve MFA. NEXUS émet ensuite, module par module, une assertion ES256 d'au plus 120 secondes, à audience unique et à `jti` consommable une fois. Le navigateur ne déclare pas la validité du MFA. L'assertion ne transporte aucune autorité de rôle métier. Le module vérifie son organisation, ses appartenances et ses permissions.

Une assertion NEXUS ne devient pas un AAL2 Supabase HORORA. Les chemins qui exigent AAL2 le conservent. Les lectures direction via `nexus_handoff` attendent un contrôle MFA serveur avant transition.

Le TOTP hébergé est la méthode privilégiée. Sa disponibilité générale, encore en déploiement le 2026-11-21, est revérifiée avant toute activation. Le code courriel et la passkey restent à évaluer. Une capture anticipée par l'une de ces deux méthodes exige une approbation distincte. Le SMS est hors de l'architecture cible.

```text
NEW_MONTHLY_COST_USD=0_REPORTED_CONDITIONAL
EXPECTED_NET_SAVINGS_USD=0_NOW
TARGET_GROSS_SAVINGS_USD=APPROX_75_PER_MONTH
PHONE_ADDON_DISABLE_AUTHORIZED=NO
```

## Conséquences

- Lecture active de l'IdP humain : Entra External ID. Le fichier du 2026-08-21 demeure, avec un bandeau de réconciliation.
- Lecture active du sixième module : RELORA. ETIOQ demeure le nom historique. Aucun dépôt, dossier, domaine ou clé technique n'est renommé. Le hold RELORA reste.
- HORORA : travail MFA local arrêté, PR 71 fermée non mergée, pilote inchangé, six facteurs Phone conservés, add-on actif, 68 tests non relancés.
- Le prochain GO de capture Staging n'est pas autorisé par cette ADR.

## Hors décision

Cette ADR ne fige pas le schéma des claims, n'active aucune politique, ne confirme pas une facture, n'ouvre pas RELORA et ne certifie pas un OIDC Supabase externe.

## Accusé NEXUS

Le 2026-11-21, l'agent NEXUS a accusé réception des références ADR-0024, DEC-036 et VALD-114. L'architecture ES256 est acceptée. Les fichiers sources officiels ne sont pas encore inspectés. Les claims MFA Entra réels ne sont pas capturés. Les passes existants sont conservés. Le GO de capture Staging reste non autorisé.

Le même jour, Martin accepte cet accusé. `NEXUS_TRANSFER_ACK=ACCEPTED`. L'architecture, les passes, l'add-on Phone, le gel de NEXUS Production et le hold RELORA sont maintenus. Le hold contrôlé dure jusqu'à la prochaine autorisation de Martin.

Le 2026-11-22, Martin accepte la référence documentaire HORORA, puis l'annule comme voie cible. Le code TOTP présent ne doit pas être développé. HORORA n'a aucun MFA local dans l'architecture cible. NEXUS est l'autorité unique d'authentification, de SSO et de MFA. Le handoff ES256 déjà prouvé ne porte pas encore de preuve MFA, donc la certification E2E reste en hold. Le MFA Phone reste actif jusqu'à un GO Production distinct. Le prochain GO, non autorisé, est `NEXUS_ENTRA_STAGING_DIRECTORY_READER_MFA_POLICY_READONLY_GO`.
