# Paquet de transfert — TAGORA_HANDOFF_V1 : TAGORA Time

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0010
SOURCE_DECISION=DEC-022
SOURCE_VALIDATION=VALD-101
PHASE4D_LOT2_UNCHANGED=YES
TIME_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
PASSWORD_COPY_FROM_TIME=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Time. TOS n'ouvre pas Time.

---

```text
PROJECT_TARGET: TAGORA Time
DECISION_TOS: Time implémentera TIME_HANDOFF_ADAPTER. Time n'est pas l'autorité d'identité. Les utilisateurs existants restent source de bootstrap (I5, pas ici).
TIME_HANDOFF_ADAPTER=CONCEPTUAL
MODULE_KEY=time
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
TIME_ROLE_NAMESPACE=time:*
MODULE_LOCAL_USER=auth.users.id
MODULE_LOCAL_EMPLOYEE=chauffeurs.id
LOCAL_TENANT=organizations.id
LOCAL_COMPANY=organization_companies.id
EMAIL_IS_CANONICAL_IDENTITY=NO
PHASE4D_LOT2_UNCHANGED=YES

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître TAGORA_HANDOFF_V1 ;
- préparer TIME_HANDOFF_ADAPTER (TAGORA_USER_ID -> auth local + chauffeur + org + company) ;
- fail-closed si UNMATCHED / DUPLICATE / CONFLICT / ORPHAN / INACTIVE / AMBIGUOUS_TENANT / AMBIGUOUS_LOCAL_ACCOUNT ;
- aucun JOIN email final ;
- conserver rôles time:* locaux ; ne pas injecter de rôle central ;
- session locale Time après handoff ; cookie host-only ;
- entrée directe time.tagora.ca sans second mot de passe FINAL ;
- retour Nexus possible ;
- ne pas copier password / hash / MFA ;
- ne pas mélanger avec Phase 4D Lot 2 ;
- IDENTITY-I5 (dedup) reste un gate séparé.

ACCEPTANCE_CRITERIA:
  TIME_ADAPTER_ACKNOWLEDGED=YES
  TIME_NOT_IDP=YES
  PHASE4D_LOT2_UNCHANGED=YES
  HANDOFF_REAL=NO
  IMPLEMENTATION_AUTHORIZED=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune écriture Time, DB, hash, mot de passe, invitation, Entra, SSO, handoff réel. Aucun mélange avec VALD-094.

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Synthèse : [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- Paquet identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_TIME.md](PAQUET_TRANSFERT_IDENTITE_TIME.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_TIME.md](PAQUET_TRANSFERT_MAPPING_TIME.md)
