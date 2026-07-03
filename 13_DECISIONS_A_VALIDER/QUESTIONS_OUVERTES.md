# Questions ouvertes a valider

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Question 1 — TAGORA Central

Faut-il creer `TAGORA Central` comme depot Cursor independant ou le placer sous TAGORA Architecture IA ?

Recommandation actuelle : depot/dossier independant si le projet devient une vraie couche operationnelle d'orchestration.

## Question 2 — Design system

Faut-il creer un package UI partage pour tous les modules TAGORA ?

Recommandation actuelle : oui, mais seulement apres avoir stabilise les modules et leur QA.

## Question 3 — QA transversal

Faut-il creer un modele QA unique applicable partout ?

Recommandation actuelle : oui. Chaque module garde son QA local, mais le standard vient de `tagora-operating-system`.

## Question 4 — Ordre de recadrage

Quel module doit etre recadre en premier apres TAGORA Time ?

Recommandation actuelle : TAGORA Mail IA, puis Pulse AI, Stock Premium, Voice IA.

