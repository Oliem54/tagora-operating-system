# Standard — Checklist release

## Objectif

Fournir une **checklist standard** avant toute release importante TAGORA — complétable par module (ex. TAGORA Time).

## Portée

Releases standard, critiques et hotfix (sections adaptées). **Aucune release réelle n'est exécutée depuis TOS.**

Template détaillé : [TEMPLATE_RELEASE_CHECKLIST.md](../99_templates/TEMPLATE_RELEASE_CHECKLIST.md)

---

## Checklist release TAGORA

### Contexte de release

- [ ] Nom et version de release identifiés
- [ ] Module concerné confirmé (un seul dépôt / contexte)
- [ ] Type de release : standard / critique / hotfix
- [ ] Responsable release désigné
- [ ] Date ou fenêtre de release planifiée

### Branche / commit

- [ ] Branche source identifiée (`main`, `release/*`, `hotfix/*`)
- [ ] Commit ou tag de release identifié
- [ ] Historique Git propre (pas de fichiers sensibles)
- [ ] PR revue si changements significatifs

### Documentation

- [ ] Documentation utilisateur ou technique mise à jour si pertinent
- [ ] ADR créé ou mis à jour si impact écosystème
- [ ] Changelog préparé ([CHANGELOG_STANDARD.md](CHANGELOG_STANDARD.md))
- [ ] Release notes rédigées si impact visible ([RELEASE_NOTES_STANDARD.md](RELEASE_NOTES_STANDARD.md))

### QA

- [ ] Scénarios QA impactés identifiés (TQF)
- [ ] Smoke tests exécutés sur staging (ou équivalent)
- [ ] Régressions connues vérifiées
- [ ] Comptes QA utilisés — pas de données production réelles dans les tests documentés

### Sécurité

- [ ] Aucun secret dans le dépôt ou la documentation
- [ ] Permissions et rôles revus si changement auth / accès
- [ ] Données sensibles non exposées dans changelog ou release notes

### Migrations

- [ ] Migrations identifiées : oui / non
- [ ] Si oui : ordre d'exécution documenté
- [ ] Si oui : rollback migration envisagé
- [ ] Si non : case cochée explicitement

### Données

- [ ] Impact données utilisateur identifié
- [ ] Sauvegarde ou snapshot prévu si release critique
- [ ] Pas de donnée sensible réelle dans documents TOS

### Permissions

- [ ] Changements permissions / rôles listés
- [ ] Validation métier si impact employés / direction

### UX/UI

- [ ] Changements visibles identifiés
- [ ] Checklist TDS si écrans modifiés ([TDS_CHECKLIST_REVUE_UI.md](../09_design_system/TDS_CHECKLIST_REVUE_UI.md))
- [ ] Messages d'erreur compréhensibles

### Performance

- [ ] Impact performance identifié : oui / non / N/A
- [ ] Si oui : critère d'acceptation défini

### Rollback

- [ ] Plan de rollback documenté si release critique
- [ ] Version de retour identifiée
- [ ] Responsable rollback désigné
- [ ] Voir [ROLLBACK_STANDARD.md](ROLLBACK_STANDARD.md)

### Approbation

- [ ] Validation humaine obtenue si release critique
- [ ] Approbateur identifié (rôle, pas secret)
- [ ] Checklist complète avant go production

### Communication

- [ ] Équipe interne informée
- [ ] Support informé si impact utilisateur
- [ ] Direction informée si release majeure

### Post-release

- [ ] Vérification smoke post-déploiement planifiée
- [ ] Monitoring (TMF) — quand disponible
- [ ] Retour d'expérience ou leçon apprise si écart (TKS)

---

## Règles

- Release **critique** : toutes les sections obligatoires.
- Release **standard** : sections minimales Contexte, Branche, QA, Documentation, Approbation.
- **Hotfix** : voir [HOTFIX_STANDARD.md](HOTFIX_STANDARD.md) — checklist allégée mais traçabilité obligatoire.

## Statut

**Créé — Phase 3G**
