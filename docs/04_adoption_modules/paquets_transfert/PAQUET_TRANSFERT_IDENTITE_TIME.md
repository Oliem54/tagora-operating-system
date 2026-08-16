# Paquet de transfert — Identité / bootstrap : TAGORA Time

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0009
SOURCE_DECISION=DEC-021
SOURCE_VALIDATION=VALD-100
PHASE4D_LOT2_UNCHANGED=YES
TIME_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
PASSWORD_COPY_FROM_TIME=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Time. TOS n'ouvre pas Time.

---

```text
PROJECT_TARGET: TAGORA Time
DECISION_TOS: Les utilisateurs Time existants sont une SOURCE de bootstrap, pas l'autorité d'identité centrale.
TIME_EXISTING_USERS=MIGRATION_BOOTSTRAP_SOURCE
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
TIME_LOCAL_AUTH_USER_ID=LEGACY_LOCAL_REFERENCE
TIME_EMPLOYEE_ID=MODULE_LOCAL_EMPLOYEE_REFERENCE
EMAIL_IS_CANONICAL_IDENTITY=NO

REQUIRED_CHANGE (mission future, pas ce gate) :
- confirmer l'état READ-ONLY déjà rapporté (Supabase Auth local);
- ne pas copier mots de passe / hashes / MFA;
- ne pas JOIN email naïf;
- classifier MATCHED / UNMATCHED / DUPLICATE / CONFLICT / ORPHAN / INACTIVE (IDENTITY-I5);
- conserver organizations.id = tenant et organization_companies.id = company;
- namespacer les rôles time:*;
- ne pas mélanger avec Phase 4D Lot 2.

PHASE4D_LOT2_UNCHANGED=YES
Aucune modification Time dans ce paquet.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune écriture Time, DB, hash, mot de passe, invitation, Entra, SSO. Aucun mélange avec VALD-094.

## Références

- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [ADR-0009](../../05_adr/ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_TIME.md](PAQUET_TRANSFERT_MAPPING_TIME.md)
