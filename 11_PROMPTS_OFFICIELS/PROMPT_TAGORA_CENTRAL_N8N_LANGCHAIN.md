# Prompt officiel — Cadrage TAGORA Central / n8n / LangChain

Copier-coller ce prompt a l'agent responsable de l'orchestration.

---

Agent TAGORA Architecture / Central,

Nouvelle mission de cadrage.

Objectif : definir proprement la couche d'orchestration n8n / LangChain sans la melanger avec les modules metier TAGORA.

## Cadre

n8n / LangChain doivent rester une couche separee.

Ils ne doivent pas etre integres directement dans TAGORA Time, Stock Premium, Pulse AI, Mail IA ou Voice IA comme coeur metier.

## Mission

1. Proposer l'emplacement ideal du dossier ou depot.
2. Definir les responsabilites exactes de TAGORA Central.
3. Definir ce qui reste dans chaque module metier.
4. Definir les flux possibles : webhooks, CRM, emails, leads, appels, inventaire, notifications.
5. Definir une strategie QA pour les workflows n8n.
6. Definir les regles de securite pour les secrets et credentials.
7. Produire un rapport sans modifier production.

## Interdictions

Ne pas toucher production.
Ne pas toucher staging.
Ne pas lire `.env`.
Ne pas lire de secret.
Ne pas lancer de workflow reel.
Ne pas faire de migration.
Ne pas commit.
Ne pas push.

## Livrable attendu

Rapport court en francais :

1. Agent qui repond ;
2. Emplacement recommande ;
3. Responsabilites de TAGORA Central ;
4. Ce qui reste hors TAGORA Central ;
5. Architecture recommandee ;
6. Strategie QA ;
7. Regles secrets/credentials ;
8. Confirmations de securite ;
9. Prochaine etape.

