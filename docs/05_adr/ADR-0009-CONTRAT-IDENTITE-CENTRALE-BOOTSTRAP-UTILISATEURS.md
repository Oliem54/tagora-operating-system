# ADR-0009 — Identité centrale TAGORA et bootstrap des utilisateurs Time

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-16**

Validation : **VALD-100**  
Décision : **DEC-021**

Cette ADR fige le bootstrap et le rattachement des utilisateurs Time vers l'identité TAGORA centrale.

Elle **complète** ADR-0008 / DEC-020. Elle **ne les remplace pas**.

Elle **n'autorise aucune** DB, migration, Entra, OAuth, SSO, secret, utilisateur réel ou écriture hors TOS.

---

## Contexte

ADR-0008 a figé le mapping d'accès, le login central Nexus et les cibles Entra / TAGORA_HANDOFF_V1.

TAGORA Time a produit un rapport READ-ONLY de compatibilité identité. Martin a déjà décidé :

```text
TIME_EXISTING_USERS=MIGRATION_BOOTSTRAP_SOURCE
TIME_CENTRAL_IDENTITY_AUTHORITY=NO
NEXUS_ENTRA=FUTURE_CENTRAL_IDENTITY_AUTHORITY
```

Time utilise aujourd'hui Supabase Auth local (mot de passe). Les IDs `auth.users.id`, `chauffeurs.id`, `organizations.id` et `organization_companies.id` sont distincts. L'email n'est pas une identité canonique. Un JOIN email naïf créerait des collisions et des rattachements faux.

---

## Décision

```text
IDENTITY_BOOTSTRAP_CONTRACT_STATUS=OFFICIAL
TAGORA_USER_ID=IDENTIFIANT CENTRAL STABLE
ENTRA_IDENTITY_KEY=issuer + subject
EMAIL_IS_CANONICAL_IDENTITY=NO
PASSWORD_COPY_FROM_TIME=NO
PASSWORD_HASH_MIGRATION=NO
TIME_ROLE_PROPAGATION=NO
IDENTITY_LINK_MODEL=TAGORA_IDENTITY_LINK (conceptuel)
DUPLICATE_CLASSIFICATION=MATCHED / UNMATCHED / DUPLICATE / CONFLICT / ORPHAN / INACTIVE
TENANT_COMPANY_SEPARATION=YES
MULTI_ORG_USER_TARGET=SUPPORTED_FUTURE
FAIL_CLOSED_IF_AMBIGUOUS=YES
TAGORA_HANDOFF_V1=TARGET_STANDARD_ONLY
```

Time reste source de bootstrap. Nexus + Entra External ID seront l'autorité d'identité future. Les rôles Time restent namespacés `time:*` et ne deviennent jamais des rôles universels.

Le compte central n'ouvre aucun module sans `MODULE_SUBSCRIPTION` + `USER_MODULE_ACCESS`.

---

## Options considérées

1. **Recréer manuellement tous les employés dans Entra** — perte opérationnelle, erreurs, pas de corrélation.
2. **Migrer mots de passe / hashes Time** — interdit (sécurité, Entra cible, pas de base partagée).
3. **JOIN email unique comme identité** — collision et multi-tenant élevés.
4. **Identifiant central + registre de liens conceptuel, email = corrélation seulement** — retenu.

---

## Conséquences

### Positives

- Les employés Time peuvent être rattachés sans recréation manuelle de masse.
- Les IDs locaux Time restent historiques.
- Les rôles restent confinés au module.

### Négatives / contraintes

- Dedup et conflits à traiter dans IDENTITY-I5, pas ici.
- Compatibilité Mail / Stock / Pulse encore à inventorier (I1–I3).
- Handoff technique non spécifié.

### Boundary

```text
DB_AUTHORIZED=NO
ENTRA_AUTHORIZED=NO
SSO_AUTHORIZED=NO
PHASE4D_LOT2_UNCHANGED=YES
MARTIN_TRANSFER_REQUIRED=YES
```

---

## Modules impactés

TOS (doc only) ; Nexus ; Time ; Mail IA ; Stock Premium ; Pulse AI.  
Website : login central seulement, hors détail de bootstrap.

---

## Références

- [CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md](../02_standards/CONTRAT_IDENTITE_CENTRALE_BOOTSTRAP_UTILISATEURS_TAGORA.md)
- [VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md](../10_knowledge/VALIDATION_VALD_100_IDENTITE_CENTRALE_BOOTSTRAP.md)
- [ADR-0008](ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md)
- Complément handoff : [ADR-0010](ADR-0010-CONTRAT-TECHNIQUE-TAGORA-HANDOFF-V1.md)

---

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-100 | Identité centrale et bootstrap utilisateurs Time | **Validé** | Martin ST-Gelais — Direction | 2026-08-16 |
