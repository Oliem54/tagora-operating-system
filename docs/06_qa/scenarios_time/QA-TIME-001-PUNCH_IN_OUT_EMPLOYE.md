# QA-TIME-001 — Punch in / punch out employé

## Métadonnées

| Champ | Valeur |
|---|---|
| **ID** | QA-TIME-001 |
| **Nom** | Punch in / punch out employé |
| **Module** | TAGORA Time |
| **Pilier TOS** | TQF |
| **Priorité** | Critique |
| **Type** | Manuel (futur : Playwright + Smoke) |
| **Statut** | Brouillon — à valider humainement |

## Objectif

Valider que un employé QA peut se connecter, enregistrer un punch d'entrée (punch in), constater un statut actif ou équivalent, enregistrer un punch de sortie (punch out), et que l'enregistrement est visible dans une vue de validation ou un rapport.

## Préconditions

- Environnement QA ou staging TAGORA Time accessible.
- Compte `qa-employe` créé et fonctionnel dans l'environnement Time.
- Données QA : compagnie QA associée à l'employé.
- **État initial :** employé sans punch ouvert (pas de session active en cours) — ou état documenté explicitement si le scénario part d'un autre cas.
- Procédure de reset QA exécutée si nécessaire (voir [DONNEES_QA_STANDARD.md](../DONNEES_QA_STANDARD.md)).

## Compte QA requis

| Identifiant logique | Rôle |
|---|---|
| `qa-employe` | Employé standard |

Pour la vérification rapport (étape 6), un compte `qa-superviseur` ou `qa-direction` peut être requis — **à confirmer** selon les permissions réelles de Time.

## Données QA requises

- 1 compagnie QA.
- 1 employé lié au compte `qa-employe`.
- Aucun punch ouvert au début du scénario (état « hors service » ou équivalent).
- Horodateur / règles métier actives pour autoriser un punch sur l'environnement QA.

## Étapes manuelles

1. Ouvrir l'application TAGORA Time (URL environnement QA — à confirmer dans le dépôt Time).
2. Se connecter avec le compte QA employé (`qa-employe`).
3. Accéder à l'écran principal ou au module de pointage (dashboard employé — libellé exact **à confirmer**).
4. Effectuer un **punch in** (entrée / début de shift — action utilisateur de pointage).
5. Vérifier qu'un **statut actif** (ou indicateur équivalent : en service, punch ouvert, etc.) est visible pour l'employé.
6. Effectuer un **punch out** (sortie / fin de shift).
7. Vérifier que le statut actif n'est plus affiché (ou que le punch est clos).
8. Accéder à une **vue de validation ou rapport** où les punchs sont listés (écran rapport, historique, validation superviseur — **à confirmer**).
9. Vérifier que le punch in et le punch out de cette session apparaissent avec des horodatages cohérents.

## Résultat attendu

- L'employé QA peut compléter un cycle punch in → actif → punch out sans erreur bloquante.
- Le statut employé reflète correctement l'état pendant et après le punch.
- Les deux événements (entrée et sortie) sont retrouvables dans une vue rapport ou validation.
- Les horaires enregistrés correspondent à la session de test (à la minute près ou selon règles métier Time).

## Critères d'acceptation

- [ ] Connexion `qa-employe` réussie.
- [ ] Punch in enregistré sans erreur.
- [ ] Statut actif (ou équivalent) visible après punch in.
- [ ] Punch out enregistré sans erreur.
- [ ] Statut mis à jour après punch out.
- [ ] Punch visible dans rapport / validation / historique.
- [ ] Aucune donnée d'un employé réel affectée.

## Risques couverts

- Régression du parcours de pointage principal (cœur métier Time).
- Punch enregistré mais non visible en rapport.
- Statut employé incohérent entre punch in et punch out.
- Erreur silencieuse (punch semble réussi mais absent du rapport).

## Priorité

**Critique** — Ce parcours fait partie des smoke tests minimaux ([SMOKE_TEST_STANDARD.md](../SMOKE_TEST_STANDARD.md)).

## Notes

### Points à confirmer dans TAGORA Time

- URL et nom de l'environnement QA.
- Libellés exacts des écrans, boutons et statuts (non inventés dans ce document).
- Écran exact pour punch in / punch out (modal, page dédiée, widget).
- Libellé du statut « actif » dans l'UI réelle.
- Vue exacte pour vérifier le punch (rapport employé, superviseur, direction).
- Rôle minimum pour voir le punch dans le rapport (employé lui-même vs superviseur).
- Règles métier : géolocalisation, QR, pause obligatoire — hors périmètre de ce scénario minimal (scénarios dédiés à créer plus tard).

### Automatisation future

- Après validation humaine de ce scénario → spec Playwright dans le dépôt Time.
- Référence : `// QA-TIME-001` dans le fichier spec.
- Intégration smoke test : parcours 4–7 de [SMOKE_TEST_STANDARD.md](../SMOKE_TEST_STANDARD.md).

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 2026-07-02 | TOS — Phase 3A | Création scénario documentaire initial |
