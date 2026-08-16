# Gouvernance TOS — Preflight widget Pulse X-Plod (READ-ONLY)

## Objet

Encadrer la demande inter-projet :

```text
PULSE-P2-XPLOD-REAL-WEBSITE-WIDGET-INSTALLATION-PREFLIGHT
```

TOS **n'exécute pas** ce bloc. TOS autorise uniquement un preflight **READ-ONLY** côté TAGORA Pulse AI, via paquet de transfert Martin.

```text
GATE=TOS_PULSE_P2_XPLOD_REAL_WEBSITE_WIDGET_PREFLIGHT_GOVERNANCE_AND_TRANSFER_PACKET_GO
DATE=2026-08-16
ACTIVE_PROJECT=TAGORA_OPERATING_SYSTEM
TOS_GOVERNANCE_ONLY=YES
PULSE_IMPLEMENTATION=NO
XPLOD_WEBSITE_WRITE=NO
```

## Revue TOS

```text
TOS_REVIEW_STATUS=PASS
DEC019_COMPATIBLE=YES
DEC020_COMPATIBLE=YES
DEC021_SEPARATION_PRESERVED=YES
PREFLIGHT_READONLY_AUTHORIZABLE=YES
IMPLEMENTATION_AUTHORIZED=NO
RULE_CHANGE=NO
NEW_DEC_REQUIRED=NO
NEW_ADR_REQUIRED=NO
NEW_VALD_REQUIRED=NO
PHASE4D_LOT2_UNCHANGED=YES
```

Cette mission **applique** DEC-019 / ADR-0007 / VALD-098 et DEC-020 / ADR-0008 / VALD-099. Elle ne les étend pas. Elle ne crée pas de règle transversale nouvelle.

## Classification des surfaces

```text
PULSE_CANONICAL_SAAS_DOMAIN=https://pulse.tagora.ca
PULSE_PORTAL_ROUTE=https://app.tagora.ca/modules/pulse
TAGORA_WEBSITE=https://tagora.ca
XPLOD_CUSTOMER_WEBSITE_CLASSIFICATION=EXTERNAL_CUSTOMER_INTEGRATION_SURFACE
```

```text
XPLOD_CUSTOMER_WEBSITE != TAGORA_WEBSITE
XPLOD_CUSTOMER_WEBSITE != PULSE_SAAS_CANONICAL_DOMAIN
PULSE_WIDGET_XPLOD_INTEGRATION != NEXUS_MODULE_ACCESS_INTEGRATION
```

Le widget public X-Plod **ne change pas** le domaine canonique Pulse, le rôle de Nexus, le catalogue Nexus, le login central, ni l'autonomie du SaaS Pulse.

TOS **ne devine pas** l'URL du vrai site X-Plod. Pulse doit l'identifier avec preuve. Sinon : `STATUS=HOLD` et retour Martin.

## Identité centrale

Le widget public X-Plod est un canal visiteur/client. Il ne sert pas à inventer ni contourner `ONE_TAGORA_ACCOUNT`, le login central, Entra ou `TAGORA_HANDOFF_V1`.

```text
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
LOGIN_FEDERATION_AUTHORIZED=NO
```

## Autorisations

```text
PULSE_WRITE_AUTHORIZED=NO
XPLOD_WEBSITE_WRITE_AUTHORIZED=NO
XPLOD_WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
ALLOWED_DOMAINS_WRITE_AUTHORIZED=NO
CORS_WRITE_AUTHORIZED=NO
RAILWAY_WRITE_AUTHORIZED=NO
VERCEL_WRITE_AUTHORIZED=NO
DB_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
DEPLOY_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
SECRET_ACCESS_AUTHORIZED=NO
REAL_CONVERSATION_AUTHORIZED=NO
REAL_LEAD_AUTHORIZED=NO
```

Si le vrai site X-Plod a un repository distinct : `OTHER_REPOSITORY_REQUIRED=YES` → `HOLD_FOR_SEPARATE_READONLY_AUTHORIZATION`. Aucune écriture cross-project.

## Human Gates futurs (non autorisés maintenant)

| Gate | Objet | Autorisé maintenant |
|---|---|---|
| **A** | Config widget Pulse / allowed domain write, uniquement si nécessaire | **NO** |
| **B** | Installation Website X-Plod STAGING / PREVIEW, si staging disponible | **NO** |
| **C** | QA conversation / lead contrôlée | **NO** |
| **D** | Installation Website X-Plod Production | **NO** |
| **E** | Production smoke | **NO** |

```text
STAGING_FIRST=YES
NO_DIRECT_PRODUCTION_BY_DEFAULT=YES
ROLLBACK_REQUIRED_BEFORE_ANY_INSTALL=YES
HUMAN_GATES_SEPARATED=YES
```

Si aucun staging/preview X-Plod : pas d'écriture Production par défaut ; retour Martin / TOS avec `CANARY_CONTROLLED_PLAN`.

## Paquet à transférer

Martin transfère uniquement :

[PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md](../paquets_transfert/PAQUET_TRANSFERT_PULSE_P2_XPLOD_WIDGET_PREFLIGHT.md)

à l'agent **TAGORA Pulse AI**. Pulse exécute alors uniquement le preflight READ-ONLY. Aucune installation réelle.

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md](../../02_standards/CONTRAT_MAPPING_INTEGRATION_MODULES_TAGORA.md)
- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
