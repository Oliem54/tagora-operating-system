# 07 — Environnement QA permanent

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Probleme identifie

Le probleme n'est pas seulement qu'il manque un compte de test.

Le vrai probleme est qu'il manque un environnement QA permanent.

## Objectif

Chaque module TAGORA doit pouvoir etre teste sans toucher a la production.

## Minimum obligatoire par module

Chaque module doit avoir :

1. environnement local/developpement ;
2. environnement QA/staging permanent ;
3. comptes de test ;
4. donnees de test ;
5. scenarios de validation ;
6. checklist de non-regression ;
7. rapport QA avant deploiement ;
8. procedure rollback ;
9. separation claire des variables d'environnement ;
10. interdiction de lire ou exposer les secrets.

## Regles production

Interdictions par defaut :

- ne pas toucher production ;
- ne pas toucher staging sans ordre clair ;
- ne pas executer migration ;
- ne pas faire db:push ;
- ne pas importer ;
- ne pas seed ;
- ne pas restore ;
- ne pas lire `.env` ;
- ne pas lire secret ;
- ne pas commit ;
- ne pas push.

## Rapport QA standard attendu

Chaque agent/module doit repondre avec :

1. Agent qui repond ;
2. Ce qui a ete inspecte ;
3. Ce qui a ete cree ;
4. Ce qui n'a pas ete touche ;
5. Risques identifies ;
6. Prochaines actions recommandees ;
7. Confirmation production/staging/secrets/Git.

