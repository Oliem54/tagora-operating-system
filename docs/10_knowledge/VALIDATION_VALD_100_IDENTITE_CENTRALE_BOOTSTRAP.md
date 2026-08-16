# VALD-100 — Identité centrale et bootstrap des utilisateurs Time

**Date :** 2026-08-16  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé  
**Type :** Humaine / Gouvernance

## Décision validée

Martin formalise le contrat de bootstrap et de rattachement des utilisateurs Time vers l'identité TAGORA centrale. Cette décision complète DEC-020.

```text
IDENTITY_BOOTSTRAP_CONTRACT_STATUS=OFFICIAL
TIME_EXISTING_USERS=MIGRATION_BOOTSTRAP_SOURCE
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
NEXUS_ENTRA=FUTURE_CENTRAL_IDENTITY_AUTHORITY
TAGORA_USER_ID=IDENTIFIANT CENTRAL STABLE
ENTRA_IDENTITY_KEY=issuer + subject
EMAIL_IS_CANONICAL_IDENTITY=NO
PASSWORD_COPY_FROM_TIME=NO
PASSWORD_HASH_MIGRATION=NO
TIME_ROLE_PROPAGATION=NO
IDENTITY_LINK_MODEL=TAGORA_IDENTITY_LINK (conceptuel)
TAGORA_HANDOFF_V1=TARGET_STANDARD_ONLY
PHASE4D_LOT2_UNCHANGED=YES
```

Aucun JOIN email naïf. Aucune copie de mot de passe, hash ou secret MFA. Aucune universalisation des rôles Time.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif TOS et la préparation des paquets de transfert.

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
SECRET_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

Prochain transfert recommandé : TAGORA Mail IA — analyse READ-ONLY.

## Décisions liées

ADR-0008 / DEC-020 / VALD-099 restent **Validé**.  
VALD-094 / Phase 4D Lot 2 restent **inchangés**.

## Référence

- [ADR-0009](../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-021
