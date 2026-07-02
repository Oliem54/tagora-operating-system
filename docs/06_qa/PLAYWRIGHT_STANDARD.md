# Standard — Playwright

## Objectif

Définir le standard officiel d'utilisation de **Playwright** pour les futurs tests end-to-end UI dans l'écosystème TAGORA.

## Portée

Tests end-to-end UI — tous modules avec interface web. **TAGORA Time** en priorité.

---

## Statut actuel

**Aucun test Playwright réel n'est créé à cette étape.**

Ce document définit comment les futurs tests **devront** être pensés, nommés, organisés et documentés — dans le dépôt du module concerné (ex. TAGORA Time), pas dans TOS.

---

## Playwright comme standard recommandé

Playwright est le outil **recommandé par le TQF** pour l'automatisation des tests end-to-end UI TAGORA, car il permet :

- Tests multi-navigateurs reproductibles.
- Scénarios lisibles proches du parcours utilisateur.
- Exécution locale et en CI (TRF).
- Stabilité relative sur applications web modernes.

Le choix définitif reste soumis à validation par module — mais Playwright est la **référence TOS** sauf ADR contraire.

---

## Structure documentaire recommandée (futurs dépôts module)

Structure indicative pour le dépôt **TAGORA Time** (à adapter lors de l'implémentation) :

```
tagora-time/                    # dépôt module — pas TOS
├── tests/
│   ├── e2e/                    # specs Playwright
│   │   ├── smoke/              # smoke tests — gate release
│   │   ├── auth/               # connexion, permissions
│   │   ├── punch/              # punch in / punch out
│   │   ├── reports/            # rapports direction
│   │   └── ...
│   ├── fixtures/               # données QA locales
│   └── playwright.config.*     # config — à créer plus tard
└── docs/qa/                    # lien vers scénarios TOS ou copies locales
```

TOS documente la **logique** ; le dépôt Time contiendra les **fichiers exécutables** plus tard.

---

## Conventions de nommage futures

| Élément | Convention | Exemple |
|---|---|---|
| Fichier spec | `{domaine}.{action}.spec.ts` | `punch.in-out.spec.ts` |
| Dossier smoke | `smoke/` | `smoke/critical-path.spec.ts` |
| Scénario documentaire TOS | `QA-{MODULE}-{NNN}-{TITRE}.md` | `QA-TIME-001-PUNCH_IN_OUT_EMPLOYE.md` |
| Lien spec ↔ scénario | Référence ID dans commentaire spec | `// QA-TIME-001` |

Les noms doivent être **explicites** — un développeur ou un agent IA doit comprendre le parcours testé sans ouvrir le fichier.

---

## Principes de scénarios Playwright

1. **Simples** — Un spec = un parcours clair ; éviter les tests monolithiques de 200 lignes.
2. **Lisibles** — Étapes nommées comme l'utilisateur les vit (connexion, punch in, vérification statut).
3. **Reproductibles** — Même compte QA, mêmes données, même environnement à chaque exécution.
4. **Stables** — Préférer sélecteurs robustes (rôles, labels accessibles) — à définir lors de l'implémentation.
5. **Parcours réels** — Tester ce que fait un employé, superviseur ou direction — pas des détails d'implémentation internes.

---

## Catégories de tests recommandées (TAGORA Time)

Exemples de **catégories** à couvrir progressivement — **sans code à ce stade** :

| Catégorie | Ce qu'elle valide |
|---|---|
| **Connexion** | Un compte QA peut accéder à l'application. |
| **Dashboard** | L'écran principal s'affiche avec les informations attendues pour le rôle. |
| **Punch in / punch out** | Un employé enregistre son arrivée et son départ ; le statut change. |
| **Géolocalisation** | Le punch respecte les règles de localisation (si applicable au scénario). |
| **QR code** | Un punch via QR fonctionne pour un employé autorisé (si applicable). |
| **Permissions** | Un utilisateur sans droit ne voit pas les sections interdites. |
| **Rapports direction** | Un compte direction voit les rapports attendus. |
| **Erreurs visibles** | Les erreurs métier ou techniques sont affichées clairement à l'utilisateur. |

Chaque catégorie devient un ou plusieurs **scénarios documentaires** avant d'être automatisée.

---

## Garde-fous

| À faire | À éviter (trop tôt) |
|---|---|
| Tester les parcours métier critiques | Tester des pixels, couleurs ou animations précises |
| Valider permissions et accès par rôle | Dépendre de sélecteurs CSS fragiles non accessibles |
| Smoke tests courts et stables | Automatiser tout avant validation manuelle du scénario |
| Documenter le scénario dans TOS d'abord | Créer des specs sans compte QA ni données QA prêts |
| Référencer l'ID scénario (QA-TIME-XXX) dans le spec | Dupliquer la logique documentaire uniquement dans le code |

> Ne pas tester des détails fragiles ou purement visuels tant que les parcours métier de base ne sont pas stables et documentés.

---

## Principes

- Playwright = outil de référence TQF pour tests UI.
- Scénarios documentés et validés **avant** automatisation.
- Comptes QA dédiés — jamais production.
- Exécution locale et CI lorsque le module est prêt.

## Règles

- Utiliser les comptes QA standard ([COMPTES_QA_STANDARD.md](COMPTES_QA_STANDARD.md)).
- Référencer le scénario documentaire TOS dans chaque spec automatisé.
- Inclure smoke tests Playwright dans le pipeline CI quand implémenté.
- Ne pas créer de tests dans le dépôt TOS.

---

## Éléments à documenter plus tard

- Configuration Playwright (base URL, timeouts, navigateurs)
- Stratégie sélecteurs et accessibilité
- Parallélisation et reporting CI
- Intégration reset données QA avant chaque run
- Seuil de couverture e2e minimal par module

## Statut

**Enrichi — Phase 3A** — Standard documentaire défini. Implémentation Playwright sur Time : après validation scénarios.
