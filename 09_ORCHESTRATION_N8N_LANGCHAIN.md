# 09 — Orchestration n8n / LangChain

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Principe

n8n et LangChain ne doivent pas etre melanges directement dans les modules metier.

Ils doivent agir comme couche d'orchestration separee.

## Role de n8n / LangChain

- orchestrer les automatisations ;
- connecter les modules ;
- gerer les webhooks ;
- coordonner les notifications ;
- router les evenements ;
- synchroniser certaines donnees ;
- declencher des actions entre systemes ;
- supporter des agents IA ou workflows avances.

## Ce que n8n ne doit pas faire

- devenir le coeur de TAGORA Time ;
- devenir le coeur de Stock Premium ;
- remplacer Odoo ;
- melanger les responsabilites des modules ;
- contenir des secrets sans gouvernance ;
- contourner les environnements QA ;
- modifier production sans controle.

## Emplacement recommande

A valider, mais la recommandation actuelle est :

- ne pas mettre dans TAGORA Time ;
- creer un dossier ou depot independant ;
- possiblement sous `TAGORA Central` ou `TAGORA Architecture IA` ;
- garder un lien de documentation dans `tagora-operating-system`.

## Question ouverte

Decider si `TAGORA Central` devient :

1. un depot Cursor independant ;
2. une section dans TAGORA Architecture IA ;
3. une couche technique avec n8n/LangChain seulement ;
4. un futur cockpit d'orchestration.

