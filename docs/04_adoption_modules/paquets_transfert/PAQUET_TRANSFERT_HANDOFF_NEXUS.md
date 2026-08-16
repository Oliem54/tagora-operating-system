# Paquet de transfert — TAGORA_HANDOFF_V1 : TAGORA Nexus

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0010
SOURCE_DECISION=DEC-022
SOURCE_VALIDATION=VALD-101
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
DB_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Nexus. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Nexus
DECISION_TOS: Nexus est l'ACCESS_BROKER du handoff. Entra est l'IDENTITY_PROVIDER cible. Nexus n'absorbe pas les SaaS.
NEXUS=ACCESS_BROKER
ENTRA=IDENTITY_PROVIDER
CENTRAL_LOGIN=https://app.tagora.ca/login
TAGORA_HANDOFF_V1=OFFICIAL_TECHNICAL_CONTRACT
RECOMMENDED_HANDOFF_PATTERN=C_HYBRID_ONE_TIME_OPAQUE_CODE_PLUS_SERVER_SIDE_SIGNED_ASSERTION
HANDOFF_REAL_AUTHORIZED=NO

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître le contrat TAGORA_HANDOFF_V1 ;
- valider TAGORA_USER_ID + tenant + MODULE_SUBSCRIPTION + USER_MODULE_ACCESS avant émission ;
- émettre un handoff one-time audience-bound (code opaque navigateur) ;
- racheter serveur-à-serveur ; assertion signée hors navigateur ;
- allowlist return_to par module ;
- anti-replay ; fail-closed ; audit Nexus ;
- aucun cookie .tagora.ca partagé ;
- aucun mot de passe / secret / token durable exposé navigateur ;
- aucun rôle métier universel dans le handoff (USER_MODULE_ACCESS=ALLOW seulement) ;
- aucun Entra réel sans Human Gate IDENTITY-I6.

ACCEPTANCE_CRITERIA:
  ACCESS_BROKER_ROLE_ACKNOWLEDGED=YES
  HANDOFF_V1_CONTRACT_ACKNOWLEDGED=YES
  SHARED_COOKIE=NO
  HANDOFF_REAL=NO
  ENTRA_REAL=NO
  IMPLEMENTATION_AUTHORIZED=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucun Entra, app registration, OAuth, secret, token, handoff réel, endpoint runtime, DNS, deploy, fusion d'applications.

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Paquet identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_NEXUS.md](PAQUET_TRANSFERT_IDENTITE_NEXUS.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_NEXUS.md](PAQUET_TRANSFERT_MAPPING_NEXUS.md)
