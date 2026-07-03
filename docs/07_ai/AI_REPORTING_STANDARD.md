# Standard — Rapport d'agent IA

## Objectif

Définir le **format standard de rapport** d'un agent IA TAGORA — factuel, vérifiable, complet.

## Portée

Tous agents IA documentés sous TAF, quel que soit le module.

---

## Éléments obligatoires du rapport

| # | Élément | Description |
|---|---|---|
| 1 | **Agent qui répond** | Nom / ID du rôle |
| 2 | **Projet actif** | Un seul projet |
| 3 | **Mission** | Objectif de la mission |
| 4 | **Actions effectuées** | Ce qui a réellement été fait |
| 5 | **Fichiers modifiés** | Liste ou « aucun » |
| 6 | **Fichiers créés** | Liste ou « aucun » |
| 7 | **Validations** | Ce qui a été validé / reste à valider |
| 8 | **Risques** | Risques identifiés |
| 9 | **Confirmations de sécurité** | Pas de secret lu, pas de .env, etc. |
| 10 | **Prochaine étape** | Recommandation claire |
| 11 | **STOP** | Fin explicite de la mission |

Adapter le niveau de détail à la mission, mais ne pas omettre les éléments de sécurité et de périmètre.

---

## Règles

1. **Un rapport doit être factuel et vérifiable.**
2. **Ne pas cacher les erreurs** — les signaler clairement.
3. Distinguer fait confirmé, hypothèse et action recommandée ([PROMPT_STANDARD.md](PROMPT_STANDARD.md)).
4. Ne pas inventer de fichiers, commits ou résultats.
5. Si rien n'a été modifié : l'écrire explicitement.

---

## Exemple de structure minimale

```markdown
# Rapport — [Mission]

## 1. Agent qui répond
## 2. Projet actif
## 3. Mission
## 4. Actions effectuées
## 5. Fichiers modifiés
## 6. Fichiers créés
## 7. Validations
## 8. Risques
## 9. Confirmations de sécurité
## 10. Prochaine étape

**STOP.**
```

---

## Lien TKS

Les rapports significatifs peuvent alimenter :

- [REGISTRE_LECONS_APPRISES.md](../10_knowledge/REGISTRE_LECONS_APPRISES.md)
- [REGISTRE_PROBLEMES_CONNUS.md](../10_knowledge/REGISTRE_PROBLEMES_CONNUS.md) — si problème validé
- [REGISTRE_VALIDATIONS.md](../10_knowledge/REGISTRE_VALIDATIONS.md)

## Statut

**Brouillon initial — Phase 3E**
