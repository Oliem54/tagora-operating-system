# Fiche — Validation avant code

## Objectif

Template minimal pour documenter la validation avant un développement important dans un module TAGORA.

## Portée

Tout module — pilote : **TAGORA Time**. Complète [REGLES_DE_VALIDATION_AVANT_CODE.md](REGLES_DE_VALIDATION_AVANT_CODE.md).

---

## Modèle

```markdown
# [ID] — Validation avant code

## Identification

| Champ | Valeur |
|---|---|
| **ID** | VAL-[MODULE]-[NNN] |
| **Date** | AAAA-MM-JJ |
| **Module concerné** | [TAGORA Time / ...] |
| **Statut** | [Brouillon / Validé / Refusé / Annulé] |
| **Validé par** | [Nom ou rôle — à compléter] |

## Demande

### Besoin ou demande

[Quoi et pourquoi — problème utilisateur ou technique.]

### Problème à résoudre

[Description courte du problème actuel.]

## Analyse

### Règle métier concernée

[Règles applicables, cas limites, ou « N/A — correctif technique ».]

### Impact UX

[Ce que l'utilisateur voit change. Lien TDS si UI. Ou « Aucun ».]

### Impact QA

[Scénarios, comptes QA, smoke tests. Ou « Tests unitaires suffisants ».]

### Impact sécurité

[Permissions, données, secrets. Ou « Aucun identifié ».]

### Risques connus

- [Risque 1]
- [Risque 2]

## Périmètre

### Inclus

- [Élément 1]
- [Élément 2]

### Exclu

- [Hors scope explicite]

## Décision

[Go / No-go / Go avec conditions.]

**ADR requis :** [Oui — ADR-XXXX / Non]

## Notes

[Liens ticket, PR, scénario QA-TIME-XXX, etc.]
```

---

## Convention ID

Format : **`VAL-{MODULE}-{NNN}`**

Exemple : `VAL-TIME-001`

---

## Quand utiliser cette fiche

| Situation | Fiche requise ? |
|---|---|
| Feature, changement métier, UI significatif | **Oui** |
| Changement sécurité ou architecture | **Oui** + ADR |
| Typo, fix sans impact métier | **Non** |

---

## Statut

**Brouillon initial** — Template opérationnel Phase 3C.

## Références

- [REGLES_DE_VALIDATION_AVANT_CODE.md](REGLES_DE_VALIDATION_AVANT_CODE.md)
- [ADR-0002](../05_adr/ADR-0002-DOCUMENTATION_AVANT_CODE.md)
