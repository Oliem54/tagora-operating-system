# 12 — Regles de securite et operations

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Regle de prudence

Par defaut, les agents doivent inspecter, documenter et proposer avant d'executer des actions risquee.

## Interdictions sans autorisation explicite

- toucher production ;
- toucher staging ;
- modifier Supabase ;
- lancer migrations ;
- lancer db:push ;
- importer donnees ;
- restaurer donnees ;
- faire seed ;
- lire `.env` ;
- lire secrets ;
- commit ;
- push ;
- supprimer fichiers ;
- modifier architecture critique.

## Rapport obligatoire apres intervention

Chaque intervention importante doit finir avec :

1. Agent qui repond ;
2. Action realisee ;
3. Fichiers crees/modifies ;
4. Fichiers non touches ;
5. Production touchee ? Oui/Non ;
6. Staging touche ? Oui/Non ;
7. Secrets lus ? Oui/Non ;
8. Git commit/push ? Oui/Non ;
9. Risques restants ;
10. Prochaine etape.

## Langue

Francais prioritaire.
Anglais secondaire si necessaire.

## Style de communication

Direct, clair, operationnel, sans jargon inutile.

