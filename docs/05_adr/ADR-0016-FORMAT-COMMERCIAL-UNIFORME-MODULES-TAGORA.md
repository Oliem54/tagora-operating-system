# ADR-0016 — Format commercial uniforme des modules TAGORA

## Statut

**Validé — Martin ST-Gelais — Direction — 2026-08-17**

Validation : **VALD-107**

Décision : **DEC-028**

Cette ADR complète DEC-019, DEC-025, DEC-026 et DEC-027. Elle fixe la structure du message commercial sans autoriser une réécriture du Website.

## Contexte

Le Website utilise trop de mots pour expliquer les modules et ne montre pas assez rapidement leur efficacité pour l'entrepreneur. Les surfaces principales doivent mener avec le problème, l'action et le résultat, puis présenter le statut réel et un CTA simple.

Le raccourcissement ne doit pas transformer une capacité future ou pilote en promesse actuelle.

## Décision

```text
COMMERCIAL_CARD_FORMAT=PROBLEM + ACTION + RESULT + RISK_REDUCTION + STATUS + CTA
PRIMARY_LANGUAGE=DIRECT + ENTREPRENEURIAL + CONCRETE + RESULT_ORIENTED
TECHNICAL_JARGON_ON_PRIMARY_SURFACE=NO
GOVERNANCE_EXPLANATION_ON_PRIMARY_SURFACE=NO
UNMEASURED_PROMISES=NO
ONE_PRIMARY_CTA_PER_CARD=YES
```

Les six modules utilisent la même structure de carte. Les détails techniques et les explications secondaires sont déplacés vers les sections détaillées.

### Distinction obligatoire

```text
CURRENT_BENEFIT=EVIDENCE_REQUIRED + PRESENT_TENSE_ALLOWED
CONFIRMED_CAPABILITY=TESTED_SCOPE_ONLY + PRESENT_TENSE_ALLOWED
PILOT_CAPABILITY=ACCÈS PILOTE + EXPLICIT_LIMITS + PILOT_GATE_REQUIRED
FUTURE_CAPABILITY=PLANNED_FUTURE + FUTURE_TENSE_REQUIRED
COMING_SOON_FR_LABEL=BIENTÔT
COMING_SOON_EN_LABEL=COMING SOON
```

YORVA et ETIOQ demeurent `COMING_SOON` dans TOS et s'affichent `BIENTÔT` en français. Aucun CTA d'activation, de connexion, d'essai ou de démonstration opérationnelle n'est autorisé pour ces deux modules.

### Disponibilité non déduite

Le fait qu'un module existe dans un repository, fonctionne localement, soit en staging ou possède une page Website ne suffit pas à déclarer un bénéfice actuel ou le statut `DISPONIBLE`. Chaque module doit fournir une preuve de statut commercial et de capacité avant publication.

## Compatibilité

- DEC-019 : Website reste la surface commerciale publique.
- DEC-025 : les restrictions Coming Soon et CTA de YORVA restent applicables.
- DEC-026 : les six noms officiels ne changent pas.
- DEC-027 : la transition de marque demeure progressive et le pilote Website reste non autorisé à la publication.
- Nexus reste hors des six cartes commerciales et conserve son rôle de portail client central.

## Conséquences

### Positives

- compréhension plus rapide pour l'entrepreneur ;
- cartes comparables et plus courtes ;
- statut commercial visible ;
- réduction du jargon et des promesses ambiguës.

### Contraintes

- les équipes doivent prouver les capacités actuelles avant d'employer le présent ;
- les CTA pilotes exigent une procédure réelle ;
- les résultats chiffrés exigent une mesure vérifiable ;
- la réécriture Website nécessite un gate distinct.

## Boundary

```text
TOS_SCOPE_ONLY=YES
WEBSITE_REWRITE_AUTHORIZED=NO
WEBSITE_REPOSITORY_ACCESS_AUTHORIZED=NO
OTHER_REPOSITORY_WRITE_AUTHORIZED=NO
DB_AUTHORIZED=NO
ROUTE_CHANGE_AUTHORIZED=NO
DOMAIN_CHANGE_AUTHORIZED=NO
DEPLOYMENT_AUTHORIZED=NO
PRODUCTION_AUTHORIZED=NO
MARTIN_TRANSFER_REQUIRED=YES
```

## Références

- [STANDARD_FORMAT_COMMERCIAL_MODULES_TAGORA.md](../02_standards/STANDARD_FORMAT_COMMERCIAL_MODULES_TAGORA.md)
- [ADR-0015](ADR-0015-POLITIQUE-TRANSITION-ARCHITECTURE-MARQUE-TAGORA.md)
- [VALIDATION_VALD_107](../10_knowledge/VALIDATION_VALD_107_FORMAT_COMMERCIAL_UNIFORME_MODULES_TAGORA.md)

## Validation humaine

| ID | Point | Statut | Décideur | Date |
|---|---|---|---|---|
| VALD-107 | Format commercial uniforme des six modules TAGORA | **Validé** | Martin ST-Gelais — Direction | 2026-08-17 |
