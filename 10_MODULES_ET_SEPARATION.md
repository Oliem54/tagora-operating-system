# 10 — Modules et separation des responsabilites

Date officielle : 2026-07-02
Projet : tagora-operating-system

## Regle principale

Chaque module garde son autonomie.

Le projet `tagora-operating-system` ne doit pas absorber la logique metier des autres modules.

## Cartographie actuelle

### TAGORA Time

Responsabilite : temps, punch, horaires, feuilles de temps, QR/GPS, rapports RH/operations.

Ne doit pas devenir : couche n8n, cockpit general, CRM ou inventaire.

### TAGORA Stock Premium

Responsabilite : inventaire commercial, unites, numero de stock, NIV, arrivages, reservations, options, disponibilite B2B.

Ne doit pas devenir : Pulse, Time, Odoo ou orchestration centrale.

### TAGORA Pulse AI

Responsabilite : conversations, leads, sales inbox, agents, statuts, escalades humaines.

Ne doit pas devenir : systeme stock, systeme RH ou orchestration globale.

### TAGORA Mail IA

Responsabilite : reception, lecture, classification, resume, priorisation et routage de courriels.

Ne doit pas devenir : CRM officiel ou couche d'orchestration globale.

### TAGORA Voice IA

Responsabilite : appels, qualification, routage, transferts, resume, creation de lead selon les regles.

Ne doit pas devenir : CRM complet ou application RH.

### Odoo

Responsabilite : CRM officiel, ventes, facturation, helpdesk, operations.

Ne doit pas etre remplace par les modules IA.

### n8n / LangChain / TAGORA Central

Responsabilite : automatisations, webhooks, agents, integration, orchestration.

Doit rester separe de la logique metier principale.

