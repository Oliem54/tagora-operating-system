# Paquet de transfert — Contrat de surfaces : TAGORA Time

```text
TOS_SCOPE_ONLY=YES
PRODUCT_APPLICATION_BY_TOS=NO
MARTIN_TRANSFER_REQUIRED=YES
SOURCE_ADR=ADR-0007
SOURCE_DECISION=DEC-019
SOURCE_VALIDATION=VALD-098
PHASE4D_LOT2_UNCHANGED=YES
TIME_WRITE_AUTHORIZED=NO
DNS_AUTHORIZED=NO
REDIRECT_AUTHORIZED=NO
IMPLEMENTATION_AUTHORIZED=NO
```

Martin transfère ce paquet à l'agent TAGORA Time. TOS n'implémente rien. Time n'est pas ouvert ici.

---

```text
PROJECT_TARGET: TAGORA Time
DECISION_TOS: time.tagora.ca est exclusivement la surface applicative TAGORA Time.
TAGORA Time n'est plus l'entrée publique centrale TAGORA.
TIME = TIME APPLICATION
LEGACY_TIME_ENTRY_STATUS=TO_BE_DECOMMISSIONED_OR_REDIRECTED_BY_SEPARATE_TRANSITION

REQUIRED_CHANGE:
READ-ONLY INVENTORY FIRST.

Identifier :
- routes publiques héritées;
- marketing hérité;
- démo;
- racine;
- login;
- routes applicatives.

Produire mapping :
KEEP_IN_TIME
MOVE_TO_WEBSITE
MOVE_TO_NEXUS
DEPRECATE
REDIRECT_LATER

MAPPING_DOCUMENTAIRE_TOS_INITIAL:
voir PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md
(audit VALD-095 ; Time doit le confirmer en READ-ONLY, sans écriture).

IMPORTANT:
ne pas mélanger ce travail avec Phase 4D Lot 2 actuellement active.
PHASE4D_LOT2_UNCHANGED=YES
Aucune modification Time dans ce paquet.

MARTIN_TRANSFER_REQUIRED=YES
AUCUNE IMPLÉMENTATION AUTOMATIQUE.
```

## Interdictions

Aucune écriture Time. Aucun DNS, redirect, deploy, Production, cleanup public. Aucun mélange avec VALD-094 / Lot 2 QA.

## Références

- [CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md](../../02_standards/CONTRAT_EMPLACEMENT_SURFACES_TAGORA.md)
- [ADR-0007](../../05_adr/ADR-0007-CONTRAT-EMPLACEMENT-SURFACES-TAGORA.md)
- [PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md](../plans_instanciation/PLAN_TRANSITION_TIME_LEGACY_ENTREE_PUBLIQUE.md)
- [TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md](../audits_time/TIME_AUDIT_READONLY_ENTREE_PUBLIQUE.md)
- [PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md](../plans_instanciation/PLAN_TRACK_B_ENTREE_PUBLIQUE_TIME_VERS_WEBSITE.md)
