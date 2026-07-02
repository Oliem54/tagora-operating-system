# Règles de compatibilité modules — Gouvernance TOS

## Objectif

Définir ce que signifie **compatibilité** entre modules TAGORA — sans fusion ni dépendance rigide.

## Portée

Time, Stock Premium, Voice, Mail IA, Pulse, Platform et futurs modules.

---

## Définition

La **compatibilité TAGORA** est la capacité des modules à :

- Partager une **expérience cohérente** (marque, méthode, qualité).
- **Évoluer indépendamment** sans casser les autres inutilement.
- **Converger progressivement** vers TOS sans big bang.

> **Compatibilité ≠ fusion.** Chaque module reste une application autonome.

---

## Dimensions de compatibilité

| Dimension | Description | Pilier |
|---|---|---|
| **Visuelle** | Signature TAGORA, TDS, navigation familière | TDS |
| **QA** | Comptes QA, scénarios, smoke tests comparables | TQF |
| **Documentaire** | Standards TOS, ADR, fiches validation | TES / TKS |
| **IA** | Limites intervention, Human in the Loop | TAF |
| **Technique future** | API, auth, TCP — à décider via ADR | TES / TCP |

---

## Règles

1. **Compatibilité ne veut pas dire fusion** — Time reste Time ; Voice reste Voice.
2. **Chaque module doit pouvoir évoluer** sans briser les autres — contrats versionnés si intégration.
3. **Breaking changes** documentés et communiqués avant impact cross-module.
4. **Standards TOS prioritaires** sur conventions locales non documentées.
5. **Écarts temporaires** listés dans plan d'adoption module (`docs/04_adoption_modules/`).

---

## Convergence progressive

- Module pilote **Time** valide standards → autres modules réutilisent.
- Pas de migration simultanée obligatoire sur tous les piliers.
- Incompatibilité temporaire = plan de résolution daté.

---

## Décisions à valider plus tard

- Matrice dépendances inter-modules.
- Versionnement contrats API / événements.
- Critères compatibilité minimale par release.
- Coordination releases multi-modules (TRF).

---

## Statut

**Enrichi — Phase 3C** — Cadre compatibilité défini. Matrice technique : ultérieur.
