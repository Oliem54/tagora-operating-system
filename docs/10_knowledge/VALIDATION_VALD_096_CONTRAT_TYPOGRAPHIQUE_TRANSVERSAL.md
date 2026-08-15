# VALD-096 — Contrat typographique transversal TAGORA (Outfit + Syne)

**Date :** 2026-08-14  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé (historique) — `HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE`  
**Type :** Humaine / Gouvernance

```text
VALD-096_STATUS=HISTORICAL_VALIDATION_SUPERSEDED_FOR_ACTIVE_BRAND_USE
DEC-017_STATUS=REPLACED_BY_FINAL_BRAND_GUIDE
ADR-0005_STATUS=SUPERSEDED_BY_ADR_0006
OUTFIT_SYNE_STATUS=LEGACY
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED
```

Cette validation n'est **pas** supprimée. Elle enregistre fidèlement la fermeture du contrat Outfit + Syne le 14 août 2026.  
`WAITING_FOR_WEBSITE_EVIDENCE` reste historiquement **CLOSED**.  
Pour l'**usage actif**, voir VALD-097 / DEC-018 / ADR-0006.

## Décision validée

```text
TYPOGRAPHY_STATUS=APPROVED_FROM_WEBSITE_EVIDENCE
TYPOGRAPHY_SYSTEM=OUTFIT_BODY_PLUS_SYNE_DISPLAY
TYPOGRAPHY_EVIDENCE_COMPLETE=YES
TYPOGRAPHY_SOURCE_PROJECT=TAGORA WEBSITE
TYPOGRAPHY_SOURCE_HEAD=6415cdd0eea9e416d0ec8f4b47ca56d41865adce
WAITING_FOR_WEBSITE_EVIDENCE=CLOSED

TAGORA_BODY_FONT=Outfit
TAGORA_DISPLAY_FONT=Syne
TAGORA_SYSTEM_FALLBACK="Segoe UI", sans-serif
TAGORA_ALLOWED_WEIGHTS=400,500,600,700
TAGORA_FONT_LOADING=swap
```

Outfit assure la lisibilité des interfaces SaaS.  
Syne apporte la signature visuelle aux titres et à la marque TAGORA.  
La référence commune n'est pas réduite à une seule famille.

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif dans TAGORA Operating System.

```text
PRODUCT_APPLICATION_AUTHORIZED=NO
COLOR_CONTRACT_MODIFIED=NO
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
CODE_CHANGE_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

Toute application concrète doit être transférée par Martin à l'agent propriétaire du projet concerné et suivre ses propres Human Gates.

## Référence

- Usage actif : [VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md](VALIDATION_VALD_097_CHARTE_MARQUE_CENTRALE_FINALE.md), [ADR-0006](../05_adr/ADR-0006-CHARTE-MARQUE-CENTRALE-FINALE-TAGORA.md)
- [ADR-0005 — Contrat typographique transversal Outfit + Syne](../05_adr/ADR-0005-CONTRAT-TYPOGRAPHIQUE-TRANSVERSAL-OUTFIT-SYNE.md)
- [CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md](../09_design_system/CONTRAT_TYPOGRAPHIQUE_TRANSVERSAL.md)
- [TYPOGRAPHIE.md](../09_design_system/TYPOGRAPHIE.md)
- [PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_TYPOGRAPHIE_TRANSVERSALE.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-017
