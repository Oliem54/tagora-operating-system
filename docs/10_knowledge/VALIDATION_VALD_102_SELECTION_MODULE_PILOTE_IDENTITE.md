# VALD-102 — Sélection officielle du module pilote identité : Stock Premium

**Date :** 2026-08-16  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé  
**Type :** Humaine / Gouvernance

## Décision validée

Martin confirme le choix explicite du module pilote identité / handoff, après le contrat TAGORA_HANDOFF_V1 (VALD-101). Cette décision complète DEC-022. Elle ne le remplace pas.

```text
SELECTED_PILOT_MODULE=STOCK_PREMIUM
PILOT_SELECTION_APPROVED=YES
PILOT_IMPLEMENTATION_AUTHORIZED=NO
IDENTITY_I4_CLOSED=YES
TAGORA_HANDOFF_V1=OFFICIAL
IDENTITY_I5_STARTED=NO
IDENTITY_I6_STARTED=NO
IDENTITY_I7_STARTED=NO
STOCK_TOUCHED=NO
PHASE4D_LOT2_UNCHANGED=YES
```

Cette validation autorise **uniquement** la sélection officielle du pilote. Elle n'autorise **pas** l'implémentation. Elle ne commence **pas** I5, I6 ni I7. Elle ne transfère **aucun** gate d'implémentation à Stock.

Séquence inchangée : IDENTITY-I5 (migration / reconciliation Time) → IDENTITY-I6 (Entra External ID STAGING) → IDENTITY-I7 (pilote Stock Premium) → IDENTITY-I8 → IDENTITY-I9.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif TOS.

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
STOCK_REPOSITORY_ACCESS_AUTHORIZED=NO
STOCK_CODE_WRITE_AUTHORIZED=NO
STOCK_DB_WRITE_AUTHORIZED=NO
STOCK_SUPABASE_WRITE_AUTHORIZED=NO
STOCK_AUTH_WRITE_AUTHORIZED=NO
STOCK_RLS_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
SECRET_AUTHORIZED=NO
DNS_AUTHORIZED=NO
STOCK_VERCEL_AUTHORIZED=NO
STOCK_STAGING_DEPLOY_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
IMPLEMENTATION_AUTHORIZED=NO
```

Prochain retour : IDENTITY-I5 — modèle de migration / reconciliation des utilisateurs Time existants. Documentation / design only, sous nouveau Human Gate. I5–I9 non commencés.

## Décisions liées

ADR-0010 / DEC-022 / VALD-101 restent **Validé** (contrat handoff ; recommandation historique).  
ADR-0009 / DEC-021 / VALD-100 restent **Validé**.  
ADR-0008 / DEC-020 / VALD-099 restent **Validé**.  
VALD-094 / Phase 4D Lot 2 restent **inchangés**.

## Référence

- [ADR-0011](../05_adr/ADR-0011-SELECTION-MODULE-PILOTE-IDENTITE-STOCK-PREMIUM.md)
- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../04_adoption_modules/audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-023
