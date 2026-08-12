# VALD-093 — Convention des domaines canoniques TAGORA

**Date :** 2026-08-12  
**Décideur :** Martin ST-Gelais — Direction  
**Statut :** Validé  
**Type :** Humaine / Gouvernance

## Décision validée

```text
PUBLIC_TAGORA_SITE=https://tagora.ca
TAGORA_NEXUS_PORTAL=https://app.tagora.ca
TAGORA_TIME_APP=https://time.tagora.ca
TAGORA_MAIL_IA_APP=https://mail.tagora.ca
TAGORA_STOCK_PREMIUM_APP=https://stock.tagora.ca
TAGORA_PULSE_AI_APP=https://pulse.tagora.ca
TAGORA_ADMIN_APP=https://admin.tagora.ca
TAGORA_ADMIN_STATUS=RESERVED_FUTURE
STAGING_DOMAIN_PATTERN=https://{service}.staging.tagora.ca
LOGIN_STANDARD=/login
APP_TAGORA_CA_RESERVED_FOR_NEXUS=YES
```

## Autorisations

Cette validation autorise uniquement l'enregistrement normatif dans TAGORA Operating System.

```text
DNS_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
CODE_CHANGE_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
```

Toute implémentation concrète doit être transférée par Martin à l'agent propriétaire du projet concerné et suivre ses propres gates.

## Référence

- [ADR-0004 — Convention des domaines canoniques TAGORA](../05_adr/ADR-0004-CONVENTION-DOMAINES-CANONIQUES-TAGORA.md)
- [REGISTRE_DECISIONS.md](REGISTRE_DECISIONS.md) — DEC-015
