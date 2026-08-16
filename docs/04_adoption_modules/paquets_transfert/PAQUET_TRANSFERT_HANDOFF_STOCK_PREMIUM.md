# Paquet de transfert — TAGORA_HANDOFF_V1 : TAGORA Stock Premium

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0010
SOURCE_DECISION=DEC-022
SOURCE_VALIDATION=VALD-101
DB_AUTHORIZED=NO
SUPABASE_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
PILOT_APPROVED=NO
```

Martin transfère ce paquet à l'agent TAGORA Stock Premium. TOS n'implémente rien.

Stock est le **module pilote recommandé** par DEC-022. Il n'est **pas** approuvé.

---

```text
PROJECT_TARGET: TAGORA Stock Premium
DECISION_TOS: Stock implémentera STOCK_HANDOFF_ADAPTER. auth user != account != dealer != tenant.
STOCK_HANDOFF_ADAPTER=CONCEPTUAL
MODULE_KEY=stock
STOCK_ROLE_NAMESPACE=stock:*
CANONICAL_TENANT_TARGET_LOCAL=stock_premium_organizations.id UUID
MODULE_LOCAL_USER=auth.users.id
MODULE_LOCAL_ACCOUNT=stock_premium_accounts.id
LOCAL_DEALER=stock_premium_dealer_accounts.id
EMAIL_IS_CANONICAL_IDENTITY=NO
TAGORA_ACCOUNT_AUTO_GRANTS_STOCK=NO
RECOMMENDED_PILOT_MODULE=STOCK_PREMIUM
PILOT_APPROVED=NO
HUMAN_GATE_REQUIRED=YES

REQUIRED_CHANGE (mission future, pas ce gate) :
- reconnaître TAGORA_HANDOFF_V1 ;
- préparer STOCK_HANDOFF_ADAPTER (TAGORA_USER_ID -> auth + account + org UUID + dealer si pertinent) ;
- ne pas traiter organization_id TEXT slug comme TENANT_ID ;
- fail-closed si 0 ou >1 account (AMBIGUOUS_LOCAL_ACCOUNT) ;
- conserver stock:* locaux ; time:admin != stock:admin ;
- RLS reste locale Stock ;
- session locale après handoff ;
- entrée directe stock.tagora.ca sans second mot de passe FINAL ;
- retour Nexus ;
- aucune DB / Supabase write ;
- ne pas exécuter le pilote sans Human Gate.

ACCEPTANCE_CRITERIA:
  STOCK_ADAPTER_ACKNOWLEDGED=YES
  TENANT_UUID_ACKNOWLEDGED=YES
  PILOT_APPROVED=NO
  HANDOFF_REAL=NO
  IMPLEMENTATION_AUTHORIZED=NO

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune DB, aucun Supabase write, aucun Vercel, aucune Production, aucun Entra, aucun SSO, aucun handoff réel. Pilote non autorisé.

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0010](../../05_adr/ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- Synthèse : [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- Paquet identité (DEC-021) : [PAQUET_TRANSFERT_IDENTITE_STOCK_PREMIUM.md](PAQUET_TRANSFERT_IDENTITE_STOCK_PREMIUM.md)
- Paquet mapping (DEC-020) : [PAQUET_TRANSFERT_MAPPING_STOCK_PREMIUM.md](PAQUET_TRANSFERT_MAPPING_STOCK_PREMIUM.md)
