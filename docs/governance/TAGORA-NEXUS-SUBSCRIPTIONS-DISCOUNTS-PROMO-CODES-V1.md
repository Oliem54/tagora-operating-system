# TAGORA Nexus — abonnements, escomptes et codes promotionnels V1

Décision de gouvernance distincte. Elle ne réécrit pas ADR-0003, ADR-0008, ADR-0009, ADR-0010, DEC-020, DEC-021, DEC-022, le registre des modules V1, ni `docs/governance/TAGORA-NEXUS-IDP-PROVIDER-V1.md`. Elle ne change pas le fournisseur d'identité humaine Nexus.

Ce document n'implémente rien. Il ne crée aucun compte Stripe, Product, Price, abonnement, coupon, code promotionnel, paiement, secret, table, webhook, DNS ou runtime.

```text
DECISION_ID=TAGORA-NEXUS-SUBSCRIPTIONS-DISCOUNTS-PROMO-CODES-V1
DECISION_VERSION=1.0.0
DECISION_DATE=2026-08-22
DECISION_AUTHORITY=MARTIN_AND_TOS
DECISION_STATUS=APPROVED_WITH_ACCOUNTANT_AND_LEGAL_HOLDS
DOCUMENTATION_ONLY=yes
RUNTIME_CHANGE=no
HISTORICAL_ADR_REWRITE=no
HISTORICAL_DEC_REWRITE=no
IDP_DOCUMENT_UNCHANGED=yes
MODULE_REGISTRY_V1_UNCHANGED=yes
IMPLEMENTATION_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
EMPLOYEE_BILLING_ROLES_AND_CAPS=DEFERRED_NOT_APPROVED
```

---

## 1. Objet et limites

Figer, pour TAGORA Nexus V1 :

- Stripe Billing comme ledger financier ;
- les frontières d'autorité Stripe / Nexus / TCP / IdP ;
- les 20 décisions commerciales et d'accès approuvées par Martin le 2026-08-22 ;
- les capacités futures de Martin (`billing_owner`, AAL2) ;
- la politique des codes amis et des campagnes publiques ;
- la matrice paiement vers `module_entitlements` ;
- les holds comptables, légaux et d'implémentation.

Les montants des forfaits, la raison sociale exacte, l'activation Stripe Tax et la durée légale finale d'audit restent des holds.

---

## 2. Décision liante

Martin gérera, après un gate d'implémentation séparé, les abonnements TAGORA depuis Nexus : forfaits, prix versionnés, escomptes 0-100 %, codes amis restreints, campagnes publiques contrôlées, annulation en fin de période, remboursements manuels, audit.

```text
BILLING_PROVIDER_V1=STRIPE_BILLING
LEGAL_SELLER=TAGORA_CANADA_LEGAL_ENTITY_TO_CONFIRM
INITIAL_CURRENCY=CAD
IMPLEMENTATION_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
```

Un paiement, un code ou un statut navigateur n'accorde jamais un accès. Un discount n'est jamais un entitlement. `explicit deny` TOS/TCP est toujours prioritaire.

---

## 3. Définitions et frontières d'autorité

| Terme | Définition V1 |
|---|---|
| Coupon | Objet Stripe de logique d'escompte, appliqué côté serveur. |
| Promotion code | Code visible saisi par le client, rattaché à un coupon. |
| Discount | Application réelle d'un coupon ou d'un code à un client, un abonnement ou une facture. |
| Friend code | Classification commerciale Nexus d'un promotion code, restreint par défaut. |
| Entitlement | Droit technique d'accéder à un module, conservé par TCP. |
| Explicit deny | Interdiction TOS/TCP qui l'emporte sur tout statut de paiement. |
| dual confirmation | Confirmation renforcée en deux étapes, effectuée par Martin seul, avec AAL2, aperçu d'impact, justification et audit append-only. Elle ne crée ni second approbateur ni rôle employé. |

| Couche | Autorité | Interdit |
|---|---|---|
| Stripe Billing | Ledger : customers, Products, Prices, subscriptions, invoices, taxes, coupons, promotion codes, refunds | IdP, rôles applicatifs, entitlement final, politique commerciale |
| Nexus | Politique, UX Martin, org active, mapping customer vers organisation, catalogue, projection, deny, audit | PAN/CVC, secret `NEXT_PUBLIC_*`, grant navigateur |
| TCP | Source technique finale des `module_entitlements` | Ledger financier |
| IdP | Identité humaine, `nexus_user_id`, MFA, sessions | Paiement, prix, coupons |

Stripe Entitlements, s'il est utilisé un jour, reste un miroir de catalogue, jamais une autorité d'accès.

Customer Portal Stripe = surface de facturation configurée, pas l'autorité de politique. Nexus = politique et administration Martin. Pas d'iframe.

Références internes TOS, cités comme chemins de dépôt uniquement :

- `docs/governance/TAGORA-NEXUS-IDP-PROVIDER-V1.md`
- `docs/governance/TAGORA-MODULE-REGISTRY-V1.md`
- `docs/05_adr/ADR-0008-CONTRAT-MAPPING-INTEGRATION-MODULES-TAGORA.md`
- `docs/10_knowledge/REGISTRE_DECISIONS.md`

---

## 4. Les 20 décisions scellées

| ID | Clé | Valeur scellée | Hold |
|---|---|---|---|
| D1 | Fournisseur | `STRIPE_BILLING` | Compte non créé |
| D2 | Vendeur | `TAGORA_CANADA_LEGAL_ENTITY_TO_CONFIRM` | Comptable et légal ; aucun nom inventé |
| D3 | Devise | `CAD` | Autres devises = décision future |
| D4 | Cycles | Mensuel et annuel | Montants de catalogue différés |
| D5 | Proration | Upgrade / ajout = immédiat proratisé. Downgrade / retrait = fin de période. | — |
| D6 | Essai | Max 14 jours ; moyen de paiement requis ; un essai par organisation | Liste des modules d'essai différée |
| D7 | Grâce | 7 jours en `past_due` | — |
| D8 | Annulation | `cancel_at_period_end` ; immédiat = Martin / cas documenté | — |
| D9 | Remboursements | Manuel, Martin seulement V1, AAL2 | Comptable avant Production |
| D10 | Taxes | Stripe Tax approuvé en principe | Activation hold |
| D11 | Portail | Hybride Stripe + Nexus ; pas d'iframe | Branding différé |
| D12 | Rabais employés | `NO_EMPLOYEE_DISCOUNT_CREATION_IN_V1` | `EMPLOYEE_BILLING_ROLES_AND_CAPS=DEFERRED_NOT_APPROVED` |
| D13 | Autorité Martin | 0 à 100 % (autorité commerciale) | Toute remise auditée |
| D14 | Cumul | Désactivé par défaut | Exception = Martin + AAL2 + dual confirmation |
| D15 | Codes amis | Restreints ; enforcement serveur | Aucun code créé |
| D16 | Codes publics | Contrôlés par campagne | Aucun code créé |
| D17 | Rabais permanent | Martin seulement, AAL2, dual confirmation, audit | — |
| D18 | 100 % | Martin seulement, cycle d'abonnement, AAL2, dual confirmation, audit | Pas d'accès hors cycle |
| D19 | Audit | Cible 7 ans | Validation comptable et légale |
| D20 | Entitlements | Matrice paiement vers entitlements ; explicit deny prioritaire | Webhook différé |

Alternative historique D1 : Paddle (Merchant of Record), non retenue.

---

## 5. Capacités Martin

```text
MARTIN_INITIAL_BILLING_ROLE=billing_owner
MARTIN_AAL_REQUIREMENT=AAL2
ROLE_ASSIGNED_IN_RUNTIME=no
NO_EMPLOYEE_DISCOUNT_CREATION_IN_V1=yes
EMPLOYEE_BILLING_ROLES_AND_CAPS=DEFERRED_NOT_APPROVED
```

Après un gate d'implémentation séparé, Martin pourra : voir et gérer les abonnements ; créer ou modifier les futurs forfaits et prix (gate catalogue séparé) ; appliquer 0-100 % selon les règles de pourcentage ; choisir `once`, `repeating` ou `forever` ; créer un code ami ; créer un code public de campagne ; fixer expiration et maximums d'usage ; désactiver immédiatement une remise ou un code ; annuler en fin de période ; rembourser manuellement ; consulter factures, événements et audit ; retirer un entitlement pour sécurité.

V1 : Martin est la seule autorité de création et d'approbation des rabais. Aucun employé ne crée de rabais en V1. Aucun rôle ni plafond employé n'est approuvé. Toute délégation future exige une décision séparée.

---

## 6. Restriction customer Stripe et organisation Nexus

Stripe limite un promotion code à un `Customer` ou un `Customer Account`.

Nexus, côté serveur uniquement :

- vérifie l'organisation active, le membership et le mapping customer vers organisation ;
- si un customer représente une organisation, Stripe reçoit la restriction `customer` correspondante ;
- si le mapping est absent, ambigu ou contradictoire : DENY et revue manuelle ;
- aucune validation seulement dans le navigateur.

Une mise à jour de Price et une application de promotion code peuvent réussir ou échouer séparément. Réconciliation serveur obligatoire. Pas d'auto-application client lorsqu'une remise exige Martin.

---

## 7. Utilisations et `max_redemptions`

| Mécanisme | Où | Sens V1 |
|---|---|---|
| `max_redemptions` | Stripe (coupon ou promotion code) | Limite globale d'utilisations. Champ API Stripe : `max_redemptions`. |
| Restriction `customer` | Stripe | Éligibilité : ce customer seulement. |
| Une utilisation par défaut | TOS | Règle commerciale V1 pour codes amis. |
| Une utilisation par organisation ou par membre | Nexus serveur | Enforcement idempotent et audité si Stripe ne l'offre pas nativement. |

Si la règle TOS ne peut pas être prouvée (Stripe + mapping Nexus) : fail closed, pas d'application.

---

## 8. Règle 0 % et 100 %

Autorité commerciale Martin : `0_TO_100_PERCENT`.

- 0 % = aucune remise appliquée ; retrait, désactivation, ou valeur de contrôle Nexus. Ne pas créer un coupon Stripe à 0 %.
- Remise effective Stripe : supérieure à 0 % et inférieure ou égale à 100 %, selon les contraintes API du moment.
- 100 % = Martin only, AAL2, dual confirmation, abonnement existant (même à 0 CAD), impact affiché, audit. Pas d'accès hors cycle d'abonnement.

---

## 9. Products et Prices

Le montant d'un Price déjà utilisé n'est pas modifié.

- Un nouveau montant crée un nouveau Price.
- L'ancien Price devient inactif pour les nouveaux achats.
- Les abonnements existants migrent uniquement par opération explicite et auditée.
- Certains champs (metadata, nickname, `active`) peuvent être modifiés selon Stripe.
- Ne pas affirmer qu'un Product entier est immuable.

Source : https://docs.stripe.com/products-prices/manage-prices

---

## 10. Codes amis

- préfixe recommandé `AMI-` ;
- restriction via la politique customer/organisation ;
- une utilisation par défaut (TOS) et `max_redemptions` Stripe aligné ;
- non cumulable ;
- expiration obligatoire ;
- pourcentage selon la règle 0-100 % ;
- durée du rabais (`once` / `repeating` / `forever`) distincte de la validité du code ;
- note interne sans secret ;
- désactivation immédiate ;
- audit append-only ;
- code complet jamais journalisé en clair.

Aucun code n'est créé par ce document.

---

## 11. Campagnes publiques

- campagne nommée, propriétaire Martin ;
- période de validité explicite ;
- limite globale (`max_redemptions`) et, si applicable, limite par client ou organisation ;
- pourcentage et durée séparés ;
- `first_time_transaction` et minimum d'achat si applicable ;
- non cumulable par défaut ;
- désactivation immédiate ;
- justification et audit ;
- aucun code éternel par défaut.

---

## 12. Durées `once`, `repeating`, `forever`

| Durée Stripe | Usage TOS V1 |
|---|---|
| `once` | Une facture / premier cycle |
| `repeating` | Nombre de mois défini |
| `forever` | Permanent : Martin only, AAL2, dual confirmation, impact annuel affiché, audit |

Cumul de discounts : interdit par défaut. Exception : Martin + AAL2 + dual confirmation + aperçu du total + audit.

---

## 13. Cycle de vie d'abonnement

- Catalogue TAGORA dans Nexus ; Prices versionnés dans Stripe.
- Mensuel et annuel ; montants différés.
- Essai : max 14 jours, payment method requis, un par organisation, avis avant la fin.
- Proration : upgrade et ajout immédiat ; downgrade et retrait fin de période.
- Grâce `past_due` : 7 jours, puis DENY modules ; UX facturation Nexus peut rester ouverte pour régulariser.
- Annulation : fin de période.
- Remboursement : manuel Martin V1, AAL2, justification, facture, impact entitlement, audit.

---

## 14. Matrice paiement vers entitlements

Autorité d'accès = TCP, après projection Nexus issue d'événements Stripe serveur. Aucun grant depuis une success URL ou le navigateur.

| Statut ou événement | Modules | Interface de facturation Nexus |
|---|---|---|
| `trialing` (essai + mapping valides) | GRANT selon mapping | GRANT |
| `active` + facture payée | GRANT selon mapping | GRANT |
| `past_due` | GRANT limité 7 jours | GRANT |
| `cancel_at_period_end` (période non finie) | GRANT jusqu'à `current_period_end` | GRANT |
| `incomplete`, `incomplete_expired`, `unpaid`, `paused`, `ended` | DENY | GRANT UX paiement |
| Dispute / chargeback | DENY immédiat | GRANT UX |
| Remboursement total de la période | Revue Martin + retrait selon politique | GRANT UX |
| `explicit deny` TOS/TCP | DENY toujours | selon le deny |
| Mapping customer vers organisation absent ou ambigu | DENY | revue manuelle |

---

## 15. Webhooks et fail closed

À l'implémentation (non autorisée ici) :

- vérification de signature Stripe avec le corps brut (`raw body`) ;
- idempotence par event ID ;
- anti-rejeu ;
- événements tardifs et ordre non garantis — traiter par objet et version, pas par ordre d'arrivée seul ;
- réconciliation quotidienne Stripe vers Nexus vers TCP ;
- dead-letter ;
- mapping absent ou ambigu = DENY ;
- aucun grant depuis success URL ou navigateur.

---

## 16. Sécurité et audit

- Test strictement séparé de Live ;
- aucune clé Live en Preview ou staging ;
- aucun secret Stripe dans `NEXT_PUBLIC_*` ;
- aucun PAN ou CVC stocké par TAGORA ;
- aucune permission dans `user_metadata` ;
- AAL2 pour `billing_owner` et opérations sensibles ;
- CSRF sur mutations Nexus ;
- audit append-only ;
- données synthétiques en staging.

Cible de rétention : 7 ans, sous hold comptable et légal (D19).

---

## 17. Taxes et holds comptables / légaux

Stripe Tax est approuvé en principe. Non activé.

Ce document n'est pas un avis fiscal ou juridique.

Holds avant Production :

- raison sociale et adresse exactes ;
- coordonnées bancaires ;
- inscriptions TPS/TVH et TVQ ;
- activation réelle de Stripe Tax ;
- `tax_behavior` et ventes hors Québec / hors Canada ;
- comptabilisation des remboursements et notes de crédit ;
- durée légale finale de conservation ;
- activation Production.

```text
ACCOUNTANT_VALIDATION_REQUIRED=yes
LEGAL_VALIDATION_REQUIRED=yes
TAX_ACTIVATION_AUTHORIZED=no
```

---

## 18. Coûts et séparation d'avec le budget IdP

Estimations d'après pages officielles consultées le 2026-08-22. Ce n'est pas un devis. À revalider avant implémentation.

| Poste | Lecture officielle (2026-08-22) | Dans le plafond IdP Supabase ? |
|---|---|---|
| Stripe Payments (cartes) | 2,9 % + 0,30 CAD par paiement carte réussi | Non |
| Stripe Billing | Pay-as-you-go 0,7 % du volume Billing ; plans d'abonnement Billing actuellement non disponibles pour les clients situés au Québec | Non |
| Stripe Tax | Add-on ; tarif exact = grille Tax officielle au moment de l'activation | Non |
| Customer Portal | Inclus Billing ; domaine personnalisé 10 USD par mois | Non |
| Supabase Auth / compute | Brouillon IdP distinct | Oui, budget IdP seulement |
| SMTP | Brouillon IdP distinct | Oui, budget IdP seulement |

Ne jamais additionner Billing, Tax ou Payments au plafond IdP sans étiquette séparée.

Sources tarifaires : https://stripe.com/en-ca/billing/pricing et https://stripe.com/en-ca/pricing

---

## 19. Éléments différés

Compte Stripe ; montants des forfaits ; Products/Prices réels ; coupons et codes réels ; rôles employés et plafonds ; ACSS/PAD dans Checkout ; usage réel de Stripe Entitlements ; découpage physique TCP ; clés Test ou Live ; tout paiement ; toute implémentation runtime ; modules d'essai ; branding portal.

---

## 20. Holds d'implémentation

```text
STRIPE_ACCOUNT=not_created
PRODUCT=not_created
PRICE=not_created
SUBSCRIPTION=not_created
COUPON=not_created
PROMOTION_CODE=not_created
PAYMENT=not_processed
REFUND=not_executed
WEBHOOK=not_implemented
SECRET=not_created
DATABASE=unchanged
RUNTIME_ROLE=not_assigned
IDP_AUTH=unchanged
DEPLOYMENT=not_performed
PRODUCTION=not_touched
IMPLEMENTATION_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
```

---

## 21. Reprise du gate IdP

Ce document ne change pas l'IdP, Supabase Auth, ni les règles MFA déjà proposées.

```text
IDP_DOCUMENT_UNCHANGED=yes
IDP_RESUME_CONDITION=BILLING_TO_NEXUS_TCP_ENTITLEMENT_BOUNDARY_SEALED
IDP_RESUME_ELIGIBLE_AFTER_THIS_DECISION=yes
IDP_IMPLEMENTATION_AUTHORIZED_BY_THIS_DOCUMENT=no
```

La frontière D1 + D20 est scellée en politique. Un gate IdP séparé reste obligatoire. Aucun projet Supabase n'est créé ici.

---

## 22. Sources officielles

Consultées le 2026-08-22. Documentation technique n'est pas un avis fiscal.

| Source | URL |
|---|---|
| Coupons | https://docs.stripe.com/billing/subscriptions/coupons |
| API promotion codes | https://docs.stripe.com/api/promotion_codes/create |
| Manage prices | https://docs.stripe.com/products-prices/manage-prices |
| Prorations | https://docs.stripe.com/billing/subscriptions/prorations |
| Customer portal | https://docs.stripe.com/customer-management |
| Webhooks subscriptions | https://docs.stripe.com/billing/subscriptions/webhooks |
| Stripe Tax Canada | https://docs.stripe.com/tax/supported-countries/canada/collect-tax |
| Billing pricing CA | https://stripe.com/en-ca/billing/pricing |
| Stripe pricing CA | https://stripe.com/en-ca/pricing |
| ARC — TPS/TVH | https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises.html |
| Revenu Québec — TVQ | https://www.revenuquebec.ca/fr/entreprises/taxes/tpstvh-et-tvq/ |

---

## 23. Statut d'approbation

Approbation Martin 2026-08-22 : politique V1 approuvée avec holds comptable et légal.

Aucune nouvelle ligne DEC n'est ajoutée au registre par ce document.

```text
DECISION_APPROVED=yes
IMPLEMENTATION_AUTHORIZED=no
PRODUCTION_AUTHORIZED=no
ACCOUNTANT_HOLD=yes
LEGAL_HOLD=yes
```
