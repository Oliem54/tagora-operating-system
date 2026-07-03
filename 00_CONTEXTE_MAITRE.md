# 00 — Contexte maitre du projet tagora-operating-system

Date officielle : 2026-07-02
Proprietaire projet : Martin ST-Gelais
Projet : tagora-operating-system
Dossier memoire : `MEMOIRE_CHATGPT_ULTRA_PRIVEE/00_MEMOIRE_OFFICIELLE_PROJETS/tagora-operating-system`

## Mission du projet

Le projet `tagora-operating-system` sert de cadre central pour organiser, proteger, standardiser et faire evoluer les projets TAGORA sans melanger les responsabilites des modules existants.

Il doit permettre de :

- conserver une memoire officielle claire du projet ;
- cadrer les decisions importantes ;
- eviter les fusions accidentelles entre modules ;
- imposer une strategie QA permanente dans chaque application ;
- standardiser l'image de marque, le design et l'experience utilisateur ;
- definir ou placer l'orchestration n8n / LangChain ;
- servir de systeme de gouvernance pour les autres modules TAGORA.

## Cadre strict

Ce dossier concerne uniquement `tagora-operating-system`.

Il ne doit pas devenir :

- le dossier de developpement de TAGORA Time ;
- le dossier de TAGORA Pulse AI ;
- le dossier de TAGORA Stock Premium ;
- le dossier de TAGORA Mail IA ;
- le dossier de TAGORA Voice IA ;
- le dossier Odoo ;
- le dossier n8n ;
- un depot fourre-tout.

## Role exact

`tagora-operating-system` agit comme une couche de direction, de normes, de memoire officielle et de gouvernance.

Les modules gardent leur autonomie :

- TAGORA Time = temps, punch, horaires, feuilles de temps, QA Time ;
- TAGORA Stock Premium = inventaire commercial, unites, statuts, reservations, arrivages ;
- TAGORA Pulse AI = conversations, leads, webchat, agents, escalades humaines ;
- TAGORA Mail IA = courriels, classification, priorisation, routage ;
- TAGORA Voice IA = appels, routage, qualification, transferts ;
- Odoo = CRM officiel, ventes, facturation, helpdesk et operations ;
- n8n / LangChain = couche d'orchestration separee, potentiellement sous TAGORA Central / Architecture IA.

## Priorite actuelle

La priorite n'est pas d'ajouter des fonctions majeures sans cadre.

La priorite est de creer un environnement permanent de qualite et de controle :

1. memoire officielle ;
2. separation propre des modules ;
3. strategie QA permanente ;
4. standard de marque et design unifie ;
5. gouvernance de l'orchestration ;
6. prompts de recadrage pour chaque module ;
7. deploiement progressif sans toucher a la production sans autorisation.

