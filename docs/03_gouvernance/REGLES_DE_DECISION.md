# Règles de décision — Gouvernance TOS

## Objectif

Définir comment les décisions méthodologiques, architecturales et standards sont prises, validées et enregistrées dans l'écosystème TAGORA.

## Portée

Toutes les décisions impactant un ou plusieurs modules TAGORA ou les standards TOS.

---

## Types de décisions

| Type | Exemple | Trace typique |
|---|---|---|
| **Décision projet** | Nature de TOS, roadmap documentaire | ADR + REGISTRE_DECISIONS |
| **Décision module** | Priorité d'adoption sur Time | REGISTRE_DECISIONS ou doc module |
| **Décision architecture** | Séparation modules, pas de monolithe | ADR |
| **Décision QA** | Smoke tests obligatoires avant release | Standard TQF + registre si besoin |
| **Décision UX/UI** | Design premium, navigation par rôle | Standard TDS + registre si besoin |
| **Décision sécurité** | Interdiction des secrets dans TOS | Standard sécurité + ADR si structurant |
| **Décision IA** | Limites d'intervention agents | TAF (quand activé) + ADR si structurant |
| **Décision orchestration** | TOF n'embarque pas la logique métier | TOF + ADR si structurant |

---

## Décision temporaire vs décision officielle

| | Temporaire | Officielle |
|---|---|---|
| **Usage** | Avancer sans bloquer | Référence durable |
| **Statut** | Proposé, Accepté initialement, À confirmer | Validé, Acté |
| **Risque** | Peut évoluer | Doit être stable |
| **Présentation** | Ne pas la présenter comme définitive | Peut être citée comme règle |

Une décision **temporaire** permet de progresser. Une décision **officielle** engage l'écosystème.

---

## Règles

1. **Une décision officielle doit avoir une trace** — registre, ADR, ou document standard daté.
2. **Une décision impactant plusieurs modules doit être liée à TOS** — ADR et/ou REGISTRE_DECISIONS.
3. **Une décision propre à Time doit rester dans le contexte Time** — sauf si généralisable à l'écosystème.
4. Toute décision architecturale significative produit un ADR.
5. Les décisions TOS ne doivent pas imposer de technologie non validée.
6. Documenter le contexte, les options et la justification quand la décision est structurante.
7. Archiver dans TKS — mémoire permanente officielle.

---

## Liens TKS

| Registre | Usage |
|---|---|
| [ADR_REGISTRE.md](../05_adr/ADR_REGISTRE.md) | Index des ADR |
| [REGISTRE_DECISIONS.md](../10_knowledge/REGISTRE_DECISIONS.md) | Décisions actées (avec ou sans ADR) |
| [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md) | Passage temporaire → officiel |

---

## Principes

- Transparence et traçabilité.
- Généricité et durabilité (horizon pluriannuel).
- Consultation des parties prenantes concernées.
- Légèreté — pas de comité pour chaque ligne de code.

## Éléments à documenter plus tard

- Rôles et responsabilités décisionnaires
- Mécanisme d'escalade et d'arbitrage
- Critères formels d'une « décision significative »

## Statut

**Enrichi — Phase 3D**
