# Prompt officiel — Recadrage modules TAGORA : QA permanent + design unifie

Copier-coller ce prompt dans chaque module a recadrer.

---

Agent du module actif,

Nouvelle mission de recadrage.

Objectif : appliquer le cadre `tagora-operating-system` a ce module sans melanger les responsabilites avec les autres modules.

Tu dois agir uniquement dans le cadre de ce module.

## Mission

1. Inspecter la structure actuelle du module.
2. Identifier s'il existe un environnement QA/staging permanent.
3. Identifier s'il existe des comptes de test et donnees de test.
4. Identifier les risques de toucher a la production.
5. Proposer la structure QA permanente a ajouter.
6. Proposer les fichiers de documentation a creer.
7. Integrer le principe de design premium TAGORA 2027 dans les futures interfaces.
8. Ne pas ajouter de nouvelle brique fonctionnelle majeure tant que QA et cadre ne sont pas stabilises.

## Interdictions

Ne pas toucher production.
Ne pas toucher staging.
Ne pas lire `.env`.
Ne pas lire de secret.
Ne pas lancer migration.
Ne pas lancer db:push.
Ne pas seed.
Ne pas restore.
Ne pas importer.
Ne pas commit.
Ne pas push.
Ne pas supprimer de fichier.
Ne pas fusionner ce module avec Time, Pulse, Stock, Mail, Voice, Odoo, n8n ou TAGORA Central.

## Livrable attendu

Rapport court en francais :

1. Agent qui repond ;
2. Module inspecte ;
3. Etat actuel QA ;
4. Ce qui manque ;
5. Structure QA permanente recommandee ;
6. Fichiers a creer ;
7. Ajustements design / image de marque a prevoir ;
8. Confirmation que production n'a pas ete touchee ;
9. Confirmation que staging n'a pas ete touche ;
10. Confirmation qu'aucun secret n'a ete lu ;
11. Confirmation qu'aucun commit/push n'a ete fait ;
12. Prochaine action recommandee.

