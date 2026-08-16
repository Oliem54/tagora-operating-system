# ADR-0011 — Sélection officielle du module pilote identité : Stock Premium

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-102**  
Décision : **DEC-023**

Cette ADR enregistre le **choix explicite** du module pilote identité / handoff.

Elle **complète** ADR-0010 / DEC-022 / VALD-101. Elle **ne les remplace pas**.  
ADR-0008 / DEC-020 et ADR-0009 / DEC-021 restent **Validé**.

Elle **n'autorise aucune** implémentation du pilote, aucun accès au dépôt Stock, aucune DB, aucun Entra, aucun OAuth, aucun SSO, aucun endpoint handoff réel, aucun token, aucun utilisateur, aucun mot de passe, aucun DNS, aucun Vercel, aucun Railway, aucun deploy, aucune Production.

Elle **ne commence pas** IDENTITY-I5, IDENTITY-I6 ni IDENTITY-I7.

---

## Contexte

ADR-0010 a figé le contrat technique conceptuel TAGORA_HANDOFF_V1 et a **recommandé** Stock Premium sans l'approuver :

```text
RECOMMENDED_PILOT_MODULE=STOCK_PREMIUM
PILOT_APPROVED=NO
HANDOFF_V1_CONTRACT_STATUS=OFFICIAL
IDENTITY_I4_CLOSED=YES
```

VALD-101 a renvoyé le **choix explicite** du module pilote à un Human Gate Martin.

Les audits READ-ONLY restent **PASS** (I1 Mail, I2 Stock, I3 Pulse). Time reste la source bootstrap (DEC-021), distincte du pilote d'application TOS (DEC-003).

Cette ADR **ne change pas** l'ordre officiel I5 → I6 → I7 → I8 → I9.

---

## Décision

Martin confirme :

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
```

Stock Premium est le module pilote **sélectionné** pour tester le modèle Nexus → handoff → session locale, **uniquement après** IDENTITY-I5 et IDENTITY-I6, et **uniquement** sous un nouveau Human Gate Martin avant IDENTITY-I7.

Cette décision autorise **uniquement** la sélection officielle. Elle n'autorise **pas** l'implémentation du pilote. Elle ne transfère **aucun** gate d'implémentation à Stock.

### Justification

- rôles déjà namespacés `stock:*` ;
- tenant local UUID clairement identifié ;
- modèle auth user / account / dealer / tenant déjà distingué ;
- résolution account fail-closed ;
- session locale autonome ;
- autorisations métier locales préservables ;
- pas de dépendance Microsoft Graph ;
- pas de dual AppUser/User comme Pulse ;
- ne bloque pas Phase 4D Lot 2 Time ;
- bon candidat pour tester le modèle Nexus → handoff → session locale.

### Séquence identité inchangée

```text
IDENTITY-I5 = modèle migration / reconciliation des utilisateurs Time existants
IDENTITY-I6 = Microsoft Entra External ID STAGING
IDENTITY-I7 = module pilote Stock Premium
IDENTITY-I8 = QA identité / tenant / entitlement / handoff
IDENTITY-I9 = modules suivants un par un
```

### Limites pilote Stock

```text
PILOT_MODULE=STOCK_PREMIUM
PILOT_IMPLEMENTATION_AUTHORIZED=NO
STOCK_REPOSITORY_ACCESS_AUTHORIZED=NO
STOCK_CODE_WRITE_AUTHORIZED=NO
STOCK_DB_WRITE_AUTHORIZED=NO
STOCK_SUPABASE_WRITE_AUTHORIZED=NO
STOCK_AUTH_WRITE_AUTHORIZED=NO
STOCK_RLS_WRITE_AUTHORIZED=NO
STOCK_VERCEL_AUTHORIZED=NO
STOCK_STAGING_DEPLOY_AUTHORIZED=NO
STOCK_PRODUCTION_AUTHORIZED=NO
```

### Règles préservées

```text
TAGORA_ACCOUNT_AUTO_GRANTS_STOCK=NO
STOCK_ROLE_NAMESPACE=stock:*
STOCK_LOCAL_ROLES_PRESERVED=YES
STOCK_LOCAL_PERMISSIONS_PRESERVED=YES
STOCK_LOCAL_SESSION_PRESERVED=YES
STOCK_RLS_REMAINS_MODULE_LOCAL=YES
EMAIL_IS_CANONICAL_IDENTITY=NO
SHARED_PASSWORD_DATABASE=NO
GLOBAL_SHARED_COOKIE=NO
PASSWORD_COPY=NO
PASSWORD_HASH_MIGRATION=NO
PHASE4D_LOT2_UNCHANGED=YES
```

---

## Options considérées

1. **TIME** — source bootstrap I5 et chantier Phase 4D Lot 2 distincts ; collision de séquence ; non retenu comme pilote handoff.
2. **MAIL_IA** — `APP_AUTH != GRAPH_AUTH` ; dépendance Microsoft Graph ; non retenu.
3. **STOCK_PREMIUM** — retenu : rôles `stock:*`, tenant UUID, isolation auth/account/dealer/tenant, fail-closed, session locale, pas de Graph, pas de dual AppUser/User.
4. **PULSE_AI** — dual AppUser/User ; tenant TAGORA absent (Project surchargé) ; non retenu.

Non retenu : commencer I7 maintenant ; transférer un gate d'implémentation à Stock ; fusionner la sélection du pilote avec I5 ou I6.

---

## Conséquences

### Positives

- Le module pilote identité est **officiel** et traçable.
- I7 a une cible unique (Stock) sans démarrer I7.
- Time reste libre pour I5 et Phase 4D Lot 2.
- Mail et Pulse restent hors pilote.

### Négatives / contraintes

- Aucune implémentation n'est autorisée par cette sélection.
- I5 et I6 restent bloquants avant I7.
- Un nouveau Human Gate Martin est obligatoire avant IDENTITY-I7.
- Le paquet Stock reste en attente ; aucun transfert d'implémentation maintenant.

### Boundary

```text
PILOT_IMPLEMENTATION_AUTHORIZED=NO
HANDOFF_REAL_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
OAUTH_AUTHORIZED=NO
STOCK_REPOSITORY_ACCESS_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
IDENTITY_I5_STARTED=NO
IDENTITY_I6_STARTED=NO
IDENTITY_I7_STARTED=NO
```

---

## Modules impactés

TOS (documentation seulement).  
Cible future du pilote : Stock Premium — **non touché**.  
Nexus, Time, Mail IA, Pulse AI : **non touchés**.  
Website : hors pilote identité.

---

## Références

- [ADR-0010](ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)
- [CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md](../02_standards/CONTRAT_TECHNIQUE_TAGORA_HANDOFF_V1.md)
- [VALIDATION_VALD_102_SELECTION_MODULE_PILOTE_IDENTITE.md](../10_knowledge/VALIDATION_VALD_102_SELECTION_MODULE_PILOTE_IDENTITE.md)
- [SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md](../04_adoption_modules/audits_identite/SYNTHESE_COMPARATIVE_IDENTITE_AUTH_QUATRE_MODULES.md)
- [PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md](../04_adoption_modules/paquets_transfert/PAQUET_TRANSFERT_HANDOFF_STOCK_PREMIUM.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-102 | Sélection officielle du module pilote identité Stock Premium | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
