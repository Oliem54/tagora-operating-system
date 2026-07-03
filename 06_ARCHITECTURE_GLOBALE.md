# 06 — Architecture globale TAGORA Operating System

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Vision

TAGORA Operating System est le cadre qui organise l'ecosysteme TAGORA.

Il doit definir :

- qui fait quoi ;
- quel module est maitre de quelle donnee ;
- quelles integrations sont permises ;
- comment tester ;
- comment deployer ;
- comment proteger la production ;
- comment standardiser l'experience utilisateur.

## Separation des couches

### 1. Couche modules metier

- TAGORA Time : temps, punch, horaires, feuilles de temps.
- TAGORA Stock Premium : inventaire commercial, unites, statuts, reservations, arrivages.
- TAGORA Pulse AI : conversations, leads, webchat, agents, escalades.
- TAGORA Mail IA : courriels, priorisation, routage.
- TAGORA Voice IA : appels, qualification, routage, transferts.

### 2. Couche systemes officiels

- Odoo : CRM, ventes, facturation, helpdesk, operations.
- Supabase ou bases applicatives : donnees propres a chaque module selon le cas.

### 3. Couche orchestration

- n8n ;
- LangChain ;
- webhooks ;
- connecteurs ;
- automatisations ;
- alertes ;
- synchronisations.

Cette couche doit rester separee et ne pas etre melangee au coeur des modules.

### 4. Couche gouvernance

- memoire officielle ;
- decisions ;
- standards QA ;
- standards UI ;
- securite ;
- procedures ;
- prompts officiels.

C'est le role principal de `tagora-operating-system`.

