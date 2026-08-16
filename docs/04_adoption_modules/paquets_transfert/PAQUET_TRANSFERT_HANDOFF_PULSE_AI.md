# Paquet de transfert — TAGORA_HANDOFF_V1 : TAGORA Pulse AI

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0010
SOURCE_DECISION=DEC-022
SOURCE_VALIDATION=VALD-101
DB_AUTHORIZED=NO
RAILWAY_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Pulse AI. TOS n'implémente rien.

---

```text
PROJECT_TARGET: TAGORA Pulse AI
DECISION_TOS: Pulse implémentera PULSE_HANDOFF_ADAPTER. AppUser != User != Customer. Project != tenant TAGORA. Human handoff métier != TAGORA_HANDOFF_V1.
PULSE_HANDOFF_ADAPTER=CONCEPTUAL
MODULE_KEY=pulse
PULSE_ROLE_NAMESPACE=pulse:*
MODULE_LOCAL_USER=AppUser.id
LEGACY_OPERATOR_USER=User.id
LOCAL_PROJECT=Project.id
EMAIL_IS_CANONICAL_IDENTITY=NO
TAGORA_ACCOUNT_AUTO_GRANTS_PULSE=NO
WIDGET_PUBLIC_OUT_OF_HANDOFF=YES

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître TAGORA_HANDOFF_V1 ;
- préparer PULSE_HANDOFF_ADAPTER (TAGORA_USER_ID -> AppUser.id) ;
- ne pas coller Project.id comme tenant_id central ;
- ne pas égaler Organization Pulse (oliem-group) à l'org TAGORA par défaut ;
- Agent != Brand ; owner Pulse != owner TAGORA ;
- réconciliation AppUser <-> User locale, jamais par email canonique ;
- fail-closed si AMBIGUOUS_LOCAL_ACCOUNT ;
- rôles pulse:* locaux seulement ;
- widget public X-Plod hors handoff staff ;
- human_handoff conversation reste métier Pulse ;
- entrée directe pulse.tagora.ca sans second mot de passe FINAL ;
- retour Nexus ;
- aucune DB / Railway write.

ACCEPTANCE_CRITERIA:
  PULSE_ADAPTER_ACKNOWLEDGED=YES
  PROJECT_NOT_TAGORA_TENANT=YES
  HUMAN_HANDOFF_NOT_IDENTITY_HANDOFF=YES
  WIDGET_OUT_OF_HANDOFF=YES
  HANDOFF_REAL=NO
  IMPLEMENTATION_AUTHORIZED=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucune migration, aucun Railway, aucune Production, aucun Entra, aucun SSO, aucun handoff réel. Widget X-Plod hors ce paquet identité.

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Synthèse : [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- Paquet identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md](PAQUET_TRANSFERT_IDENTITE_PULSE_AI.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_PULSE_AI.md](PAQUET_TRANSFERT_MAPPING_PULSE_AI.md)
- Widget public X-Plod : [PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md)
