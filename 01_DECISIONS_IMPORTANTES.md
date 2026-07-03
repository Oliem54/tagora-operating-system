# 01 — Decisions importantes

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Decision 1 — Dossier independant

Le projet `tagora-operating-system` doit avoir son propre dossier officiel dans :

`MEMOIRE_CHATGPT_ULTRA_PRIVEE/00_MEMOIRE_OFFICIELLE_PROJETS/tagora-operating-system`

Il ne doit pas etre range dans TAGORA Time, Pulse, Stock, Mail, Voice, Odoo ou n8n.

## Decision 2 — Role de gouvernance, pas module operationnel unique

`tagora-operating-system` sert a cadrer les autres projets. Il ne remplace pas les modules existants et ne doit pas absorber leur logique metier.

## Decision 3 — QA permanent obligatoire

Le probleme identifie n'est pas seulement l'absence d'un compte de test. Le probleme est l'absence d'un environnement QA permanent.

Chaque module TAGORA devra avoir :

- environnement de developpement ;
- environnement QA / staging permanent ;
- donnees de test ;
- comptes de test ;
- scenarios de validation ;
- checklist de non-regression ;
- interdiction de toucher a la production sans validation.

## Decision 4 — Standardisation de l'image de marque

Chaque module devra respecter une image de marque TAGORA unifiee :

- design premium ;
- interface claire ;
- experience moderne 2027 ;
- structure coherente ;
- composants reutilisables ;
- langage visuel commun ;
- ergonomie simple pour utilisateurs non techniques.

## Decision 5 — n8n / LangChain ne doit pas etre melange dans les modules

L'orchestration n8n / LangChain doit rester une couche separee.

Elle peut eventuellement vivre sous :

- TAGORA Central ;
- TAGORA Architecture IA ;
- dossier technique independant d'orchestration.

Elle ne doit pas etre integree directement dans TAGORA Time, Stock Premium, Pulse, Voice ou Mail IA comme si elle faisait partie du coeur metier.

## Decision 6 — Recentrage rapide des autres modules

Les autres modules doivent etre arretes / recadres rapidement avant d'ajouter des nouvelles briques majeures.

Objectif : appliquer le meme cadre QA, design et separation propre partout.

## Decision 7 — Production protegee

Aucune action automatique ne doit etre faite sur :

- production ;
- staging ;
- Supabase ;
- base de donnees ;
- migrations ;
- seeds ;
- restore ;
- db push ;
- commit ;
- push ;
- secrets ;
- fichiers `.env`.

Sauf autorisation explicite, precise et contextualisee.

