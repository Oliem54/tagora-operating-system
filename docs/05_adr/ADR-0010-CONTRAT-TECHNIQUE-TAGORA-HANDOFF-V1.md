# ADR-0010 — Contrat technique TAGORA_HANDOFF_V1

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-101**  
Décision : **DEC-022**

Cette ADR fige le contrat technique **conceptuel** du handoff d'accès TAGORA (Nexus → modules SaaS).

Elle **complète** ADR-0008 / DEC-020 et ADR-0009 / DEC-021. Elle **ne les remplace pas**.

Elle **n'autorise aucun** endpoint runtime, Entra réel, OAuth, SSO, DB, secret, token, ni écriture hors TOS.

---

## Contexte

ADR-0008 a figé le mapping d'accès et posé `TAGORA_HANDOFF_V1=TARGET_STANDARD` sans protocole.

ADR-0009 a figé `TAGORA_USER_ID`, Entra `issuer`+`subject`, `TAGORA_IDENTITY_LINK` conceptuel, et `EMAIL_IS_CANONICAL_IDENTITY=NO`.

Les audits READ-ONLY sont **PASS** :

- Time (bootstrap source, pas autorité)
- Mail IA (IDENTITY-I1) — `APP_AUTH != GRAPH_AUTH`
- Stock Premium (IDENTITY-I2) — auth ≠ account ≠ dealer ≠ tenant
- Pulse AI (IDENTITY-I3) — AppUser ≠ User ≠ Customer ; Project ≠ tenant TAGORA

Les quatre modules ont une session locale, un login password local, aucun récepteur de handoff, et aucun `TAGORA_USER_ID`. Un contrat unique est nécessaire **avant** I5–I9.

---

## Décision

```text
HANDOFF_V1_CONTRACT_STATUS=OFFICIAL
NEXUS=ACCESS_BROKER
ENTRA=IDENTITY_PROVIDER
MODULE=RELYING_APPLICATION_WITH_LOCAL_SESSION
RECOMMENDED_HANDOFF_PATTERN=C_HYBRID_ONE_TIME_OPAQUE_CODE_PLUS_SERVER_SIDE_SIGNED_ASSERTION
ONE_TIME_USE=YES
SHORT_TTL=YES
AUDIENCE_BOUND=YES
REPLAY_PROTECTION=YES
RETURN_TO_ALLOWLIST=YES
FAIL_CLOSED=YES
SECRETLESS_BROWSER_PAYLOAD_TARGET=YES
GLOBAL_SHARED_COOKIE=NO
NO_PASSWORD_TRANSFER=YES
MODULE_LOCAL_SESSION=YES
MODULE_LOCAL_ROLES=YES
ROLE_PROPAGATION_CROSS_MODULE=NO
EMAIL_IS_CANONICAL_IDENTITY=NO
HANDOFF_EMAIL_JOIN_FORBIDDEN=YES
USER_MODULE_ACCESS_IN_HANDOFF=ALLOW_ONLY
RECOMMENDED_PILOT_MODULE=STOCK_PREMIUM
PILOT_APPROVED=NO
HANDOFF_REAL_AUTHORIZED=NO
```

Adapters conceptuels : `TIME_HANDOFF_ADAPTER` `MAIL_HANDOFF_ADAPTER` `STOCK_HANDOFF_ADAPTER` `PULSE_HANDOFF_ADAPTER`.

Le navigateur ne porte qu'un code opaque one-time. La rédemption est serveur-à-serveur. L'assertion signée, si utilisée, reste hors navigateur. Les rôles métier restent namespacés dans chaque module.

---

## Options considérées

1. **A — assertion signée courte dans le navigateur** — claims exposés ; anti-replay dépendant d'un registre côté module ; moins aligné `SECRETLESS_BROWSER_PAYLOAD_TARGET`.
2. **B — code opaque one-time racheté serveur-à-serveur** — minimal côté navigateur ; anti-replay naturel ; cœur acceptable.
3. **C — hybride code opaque + assertion signée serveur-à-serveur** — retenu : minimise l'exposition navigateur, anti-replay, audience/TTL côté serveur, compatible des quatre backends.

Non retenu : cookie `.tagora.ca` partagé ; base de mots de passe commune ; JOIN email ; propagation de rôles ; OAuth commun inventé entre modules.

---

## Conséquences

### Positives

- Protocole unique pour quatre modèles d'identité incompatibles entre eux.
- Sessions locales préservées.
- Graph mailbox, dealer Stock, Project Pulse et chauffeur Time restent hors identité centrale.

### Négatives / contraintes

- I5 (dedup Time) et I6 (Entra staging) restent bloquants avant tout handoff réel.
- Chaque module doit implémenter **son** adapter ; pas de modèle unique recopié.
- Pilote recommandé (Stock) **non approuvé**.
- Logout global non défini.

### Boundary

```text
HANDOFF_REAL_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
PILOT_APPROVED=NO
```

---

## Modules impactés

TOS (doc only) ; Nexus ; Time ; Mail IA ; Stock Premium ; Pulse AI.  
Website : login central seulement. Widget public Pulse / X-Plod : hors handoff staff.

---

## Références

- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../04_adoption_modules/audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- [VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../10_knowledge/VALIDATION_VALD_101_CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [ADR-0008](ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- [ADR-0009](ADR-0009-CONTRAT-IDENTITE-CENTRALE-BOOTSTRAP-UTILISATEURS.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-101 | Contrat technique TAGORA_HANDOFF_V1 | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
