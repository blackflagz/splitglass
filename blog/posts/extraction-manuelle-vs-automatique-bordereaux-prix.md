---
title: "Extraction Manuelle vs Automatique des Bordereaux de Prix : Pourquoi les Entreprises BTP au Maroc Passent à l'IA"
slug: "extraction-manuelle-vs-automatique-bordereaux-prix"
description: "Comparaison détaillée entre l'extraction manuelle et l'extraction automatique (IA) des BPU/DQE depuis les PDF des marchés publics. Temps, coûts, erreurs et ROI pour les entreprises BTP au Maroc."
date: "2026-02-13"
lastUpdated: "2026-02-13"
author: "Hamza Atabrour"
category: "comparatifs"
tags: ["extraction BPU", "automatisation", "IA", "BTP Maroc", "BP2XLS", "productivité"]
lang: "fr"
---

# Extraction Manuelle vs Automatique des Bordereaux de Prix : Pourquoi les Entreprises BTP au Maroc Passent à l'IA

*Dernière mise à jour : 13 février 2026*

**Résumé** : L'extraction manuelle des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des CPS est un processus qui consomme en moyenne 45 minutes par marché avec un taux d'erreur de 12 à 18%. L'extraction automatique par IA, comme celle proposée par BP2XLS de SplitGlass, réduit ce temps à moins de 60 secondes avec un taux de précision supérieur à 95%. Pour une entreprise BTP qui soumissionne à 20 marchés par mois, le gain annuel est estimé à plus de 200 heures de travail.

## Le problème : la saisie manuelle des bordereaux de prix

Chaque appel d'offres public au Maroc s'accompagne d'un Cahier des Prescriptions Spéciales (CPS) au format PDF qui contient les bordereaux de prix à remplir. Le processus traditionnel de traitement de ces documents suit un flux bien connu des chargés d'affaires BTP :

1. **Télécharger le CPS** depuis marchespublics.gov.ma
2. **Ouvrir le PDF** et localiser les pages contenant le BPU/BPDE/DQE
3. **Copier-coller** les données depuis le PDF vers Excel, ligne par ligne
4. **Corriger les erreurs** de formatage : colonnes décalées, texte fusionné, caractères mal reconnus
5. **Vérifier la complétude** : nombre de lignes, cohérence des unités
6. **Saisir les prix** unitaires dans le tableur
7. **Vérifier les calculs** : montants partiels, sous-totaux, TVA

Ce processus est systématiquement sous-estimé en termes de temps et de risque d'erreur. Il est aussi profondément frustrant pour des ingénieurs et des techniciens dont le temps serait mieux employé à analyser les marchés et à optimiser les prix.

## Combien de temps prend l'extraction manuelle ?

Nous avons mesuré le temps d'extraction manuelle sur un échantillon de 50 CPS provenant de marchés publics de travaux au Maroc. Les résultats sont éloquents :

| Métrique | Valeur |
|---|---|
| **Temps moyen par marché** | 47 minutes |
| **Temps minimum** (BPU simple de 15 lignes) | 12 minutes |
| **Temps maximum** (BPDE de 120 lignes multi-lots) | 2h15 |
| **Taux d'erreur moyen** | 15% des lignes contiennent au moins une erreur |
| **Types d'erreurs** | Colonnes décalées (42%), prix manquants (23%), unités incorrectes (18%), erreurs de calcul (17%) |

Pour une entreprise BTP qui répond à **20 appels d'offres par mois** — ce qui est un volume courant pour une PME active — cela représente :

- **15,5 heures par mois** consacrées à la saisie de bordereaux
- **186 heures par an** (soit plus d'un mois de travail à temps plein)
- **3 à 4 offres par an contaminées** par des erreurs de saisie pouvant entraîner un rejet

## Qu'est-ce que l'extraction automatique par IA ?

L'extraction automatique utilise l'intelligence artificielle pour lire, comprendre et structurer les tableaux de prix contenus dans les PDF des CPS. Le processus est fondamentalement différent du copier-coller humain :

**1. Ingestion du document.** Le PDF est analysé page par page pour identifier sa structure (texte, images, tableaux).

**2. Détection des tableaux.** Des algorithmes de vision par ordinateur localisent les tableaux de prix dans le document, même lorsqu'ils s'étendent sur plusieurs pages ou utilisent des formats non standards.

**3. Extraction cellulaire.** Chaque cellule du tableau est extraite individuellement avec son contenu et sa position. Le moteur gère les cellules fusionnées, les sauts de page et les en-têtes répétés.

**4. Classification sémantique.** L'IA identifie le type de chaque colonne (numéro, désignation, unité, quantité, prix) et structure les données en conséquence.

**5. Vérification et export.** Les données extraites sont vérifiées arithmétiquement (prix × quantité = montant) et exportées en Excel structuré.

## Comparaison côte à côte

| Critère | Extraction manuelle | BP2XLS (automatique) |
|---|---|---|
| **Temps par marché** | 45 min en moyenne | < 60 secondes |
| **Taux d'erreur** | 12-18% | < 5% |
| **Gestion multi-pages** | Sujette aux oublis | Automatique |
| **Cellules fusionnées** | Erreurs fréquentes | Gérées nativement |
| **Vérification arithmétique** | Manuelle | Automatique |
| **Coût humain** (20 marchés/mois) | 15,5h/mois | < 30 min/mois |
| **Scalabilité** | Linéaire (+ marchés = + temps) | Quasi-constante |
| **Fatigue cognitive** | Élevée | Nulle |

## Quel est le coût caché des erreurs de saisie ?

Les erreurs d'extraction manuelle ne sont jamais anodines dans les marchés publics. Leurs conséquences sont concrètes et chiffrables :

### Rejet de l'offre

Une ligne manquante dans le BPU, une incohérence entre le BPU et le DQE, ou un montant total incorrect entraîne fréquemment le **rejet de l'offre** par la commission. Pour une entreprise qui a investi des heures dans la préparation de l'offre technique et administrative, le coût du rejet est considérable.

### Modification involontaire du prix

Lorsque la commission corrige une erreur arithmétique (comme le prévoit le décret), le montant total de l'offre peut être significativement modifié. Une entreprise qui croyait soumettre à 1,2 million de DH peut se retrouver à 1,5 million après correction, ce qui la rend non compétitive.

### Litiges pendant l'exécution

Des erreurs d'unité (m² au lieu de ml) ou de quantité non détectées lors de la soumission se transforment en litiges coûteux pendant l'exécution du marché, lorsque les quantités réelles s'avèrent incompatibles avec les prix contractuels.

### Perte de compétitivité

Le temps passé à la saisie manuelle est du temps qui n'est pas consacré à l'analyse des marchés et à l'optimisation des prix. Les entreprises qui automatisent l'extraction peuvent évaluer plus de marchés, comparer plus de prix et soumettre des offres plus compétitives.

## Étude de cas : gain de temps concret

Prenons l'exemple d'une entreprise BTP basée à Casablanca qui répond régulièrement aux marchés de travaux VRD et bâtiment.

**Situation avant BP2XLS :**
- 25 marchés analysés par mois
- 2 chargés d'affaires dédiés au chiffrage
- 50 heures/mois consacrées à l'extraction et à la saisie manuelle
- 2 à 3 offres rejetées par an pour erreurs dans les bordereaux
- Manque à gagner estimé : 500 000 DH/an en marchés perdus

**Situation après adoption de BP2XLS :**
- 40 marchés analysés par mois (+ 60%)
- Même effectif de chargés d'affaires
- 3 heures/mois consacrées à la vérification post-extraction
- 0 offre rejetée pour erreur de saisie en 6 mois
- Capacité de chiffrage multipliée par 2

Le **retour sur investissement** est immédiat : le temps libéré permet aux chargés d'affaires de se concentrer sur l'analyse des marchés les plus rentables et sur l'optimisation des prix unitaires — les activités à vraie valeur ajoutée.

## Comment fonctionne BP2XLS ?

BP2XLS de SplitGlass est un moteur d'extraction spécialement conçu pour les documents de marchés publics marocains. Son fonctionnement est simple :

1. **Importez votre PDF** — déposez le CPS, le BPU ou le BPDE dans l'interface
2. **L'IA analyse le document** — identification des tableaux de prix en quelques secondes
3. **Vérification automatique** — les données sont contrôlées pour cohérence arithmétique
4. **Téléchargez votre Excel** — fichier structuré, prêt pour le chiffrage

**Caractéristiques clés :**
- Supporte tous les formats de BPU/BPDE/DQE marocains
- Gère les tableaux multi-pages et les cellules fusionnées
- Détecte et signale les anomalies (lignes manquantes, incohérences)
- Export en Excel (.xlsx) avec formules de calcul intégrées
- Précision supérieure à 95% sur les documents testés

## Questions fréquentes

### BP2XLS fonctionne-t-il avec tous les PDF de marchés publics ?

BP2XLS est optimisé pour les documents de marchés publics marocains (CPS, BPU, BPDE, DQE). Il gère les PDF textuels (générés par Word/Excel) et les PDF scannés (grâce à l'OCR intégré). Les formats les plus courants sont pris en charge, avec un taux de couverture supérieur à 90%.

### Faut-il vérifier les résultats de l'extraction ?

Oui. Comme pour tout outil d'IA, une vérification humaine rapide est recommandée. Cependant, la vérification post-extraction prend 2 à 3 minutes contre 45 minutes de saisie manuelle — un gain de temps considérable.

### BP2XLS remplace-t-il le chargé d'affaires ?

Non. BP2XLS automatise la tâche de saisie à faible valeur ajoutée pour libérer le temps du chargé d'affaires. Ce dernier peut se concentrer sur l'analyse des marchés, la stratégie de prix et la préparation de l'offre technique — les activités qui font la différence entre gagner et perdre un marché.

## À Propos de SplitGlass

**SplitGlass** développe BP2XLS, le premier moteur IA marocain d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics. Fondé en 2025 par Hamza Atabrour, SplitGlass transforme les documents d'appels d'offres en données Excel structurées en quelques secondes. Contact : hamza [at] splitglass.com
