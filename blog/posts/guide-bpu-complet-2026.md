---
title: "Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026"
slug: "guide-bpu-complet-2026"
description: "Tout savoir sur le BPU dans les marchés publics au Maroc : définition, cadre juridique, structure type, erreurs fréquentes et extraction automatique avec BP2XLS."
date: "2026-02-12"
lastUpdated: "2026-02-12"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["BPU", "marchés publics", "Maroc", "bordereaux de prix"]
lang: "fr"
---

# Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026

*Dernière mise à jour : 12 février 2026*

**Résumé** : Le Bordereau des Prix Unitaires (BPU) est un document contractuel obligatoire dans les marchés publics au Maroc, encadré par le décret n° 2-22-431 relatif aux marchés publics. Il détaille les prix unitaires de chaque prestation dans un appel d'offres de travaux ou de fournitures. Le BPU accompagne systématiquement le Détail Quantitatif et Estimatif (DQE) pour former la base financière d'une offre. SplitGlass BP2XLS permet d'extraire automatiquement ces données depuis les PDF de CPS.

## Définition du BPU : qu'est-ce que c'est exactement ?

Le **Bordereau des Prix Unitaires** (BPU) est un tableau contractuel qui liste l'ensemble des prestations prévues dans un marché public, chacune associée à un prix unitaire. Ce document fait partie intégrante du **dossier de consultation des entreprises** (DCE) et constitue la pièce maîtresse de l'offre financière du soumissionnaire.

Concrètement, le BPU se présente sous forme d'un tableau avec plusieurs colonnes : un numéro d'ordre, la désignation des travaux ou fournitures, l'unité de mesure (mètre linéaire, mètre carré, forfait, unité, etc.), et le prix unitaire hors taxes. C'est un document distinct du Détail Quantitatif et Estimatif (DQE), qui reprend les mêmes lignes mais y ajoute les quantités estimées et le montant total par poste.

Au Maroc, le BPU est systématiquement utilisé dans les marchés publics de travaux régis par le **décret n° 2-22-431** du 8 mars 2023. Il est particulièrement important dans les marchés à prix unitaires, où le montant final du marché est calculé en multipliant les quantités réellement exécutées par les prix unitaires fixés dans le BPU.

## Quelle est la différence entre un BPU et un DQE ?

Beaucoup de professionnels confondent le BPU et le DQE, or ces deux documents ont des rôles distincts mais complémentaires dans la réponse à un appel d'offres au Maroc. Le BPU fixe les **prix unitaires** de chaque prestation sans mentionner les quantités. Le DQE, lui, reprend ces mêmes prix et les multiplie par les **quantités estimées** par le maître d'ouvrage pour obtenir un montant estimatif global.

| Document | Contenu | Rôle |
|---|---|---|
| **BPU** | Désignation + unité + prix unitaire HT | Fixer le prix de chaque prestation |
| **DQE** | BPU + quantités + montant total | Chiffrer le coût estimatif du marché |
| **BPDE** | BPU détaillé avec sous-détails de prix | Justifier la composition des prix |

En pratique, le maître d'ouvrage fournit un BPU vierge (ou pré-rempli en désignations) dans le DCE. L'entreprise soumissionnaire doit compléter la colonne des prix unitaires. Le DQE est ensuite calculé automatiquement à partir du BPU et des quantités prédéfinies. Toute erreur dans le BPU se répercute directement sur le DQE et peut entraîner le rejet de l'offre.

## Quel est le cadre juridique du BPU au Maroc ?

Le cadre réglementaire des marchés publics au Maroc a été profondément remanié par le **décret n° 2-22-431 du 8 mars 2023**, qui a remplacé le décret n° 2-12-349 de 2013. Ce texte définit les conditions de préparation, de passation et de gestion des marchés publics pour l'ensemble des organismes publics marocains.

Le BPU s'inscrit dans le cadre de l'**article 4** du décret, qui impose la décomposition du prix global du marché en prix unitaires lorsque la nature des prestations le justifie. Les marchés à prix unitaires sont les plus fréquents dans le BTP au Maroc, car ils permettent d'ajuster le montant final en fonction des quantités réellement exécutées sur le chantier.

Les règles clés à retenir concernant le BPU selon la réglementation marocaine :

- Les prix unitaires sont réputés **fermes** sauf clause de révision dans le CPS
- Le BPU doit être signé et cacheté par le soumissionnaire
- En cas de discordance entre le BPU et le DQE, **les prix unitaires du BPU prévalent**
- Le maître d'ouvrage peut demander un **sous-détail de prix** (BPDE) pour vérifier la cohérence
- Les prix doivent inclure toutes les charges (main d'œuvre, matériaux, transport, bénéfice, aléas)

## Comment est structuré un BPU type ?

La structure d'un BPU dans un marché de travaux au Maroc suit un format relativement standardisé, bien que chaque maître d'ouvrage puisse adapter la présentation. Voici la structure type que l'on retrouve dans la majorité des appels d'offres publiés sur le portail des marchés publics (marchespublics.gov.ma).

Un BPU standard comprend les colonnes suivantes :

1. **N° du prix** : identifiant unique de chaque poste (P1, P2, P3... ou 1.1, 1.2, etc.)
2. **Désignation des travaux** : description détaillée de la prestation
3. **Unité** : unité de mesure (ml, m², m³, kg, U, Fft, Ens, etc.)
4. **Prix unitaire HT (en chiffres)** : le prix en dirhams, hors taxes
5. **Prix unitaire HT (en lettres)** : le même prix écrit en toutes lettres

Les BPU plus détaillés (BPDE) incluent également des sous-lignes pour décomposer chaque prix unitaire en ses composantes : coût des matériaux, main d'œuvre, location d'engins, frais généraux et bénéfice.

### Exemple de structure BPU (lot Gros Œuvre)

| N° | Désignation | Unité | Prix unitaire HT |
|---|---|---|---|
| 1.1 | Fouilles en terrain ordinaire | m³ | _______ DH |
| 1.2 | Béton de propreté dosé à 150 kg/m³ | m³ | _______ DH |
| 1.3 | Béton armé pour fondations dosé à 350 kg/m³ | m³ | _______ DH |
| 1.4 | Maçonnerie en agglos creux de 20 cm | m² | _______ DH |
| 1.5 | Enduit au mortier de ciment | m² | _______ DH |

## Quelles sont les erreurs les plus fréquentes dans un BPU ?

L'analyse de centaines de BPU provenant de marchés publics marocains révèle des erreurs récurrentes qui peuvent entraîner le rejet de l'offre ou des pertes financières importantes pendant l'exécution du marché. Voici les cinq erreurs les plus courantes identifiées par notre moteur d'analyse BP2XLS.

**1. Incohérence entre prix unitaire en chiffres et en lettres.** C'est l'erreur la plus fréquente. L'article 40 du décret prévoit que le prix en lettres prévaut en cas de discordance, ce qui peut modifier significativement le montant global de l'offre.

**2. Oubli de postes.** Ne pas renseigner certaines lignes du BPU est considéré comme une offre incomplète et peut entraîner le rejet systématique par la commission d'ouverture des plis.

**3. Prix anormalement bas.** Des prix manifestement sous-évalués déclenchent la procédure de prix anormalement bas prévue par l'article 42, obligeant le soumissionnaire à justifier ses coûts.

**4. Erreurs d'unité.** Confondre m² et ml, ou forfait et unité, fausse l'ensemble du calcul du DQE et crée des litiges pendant l'exécution.

**5. Non-signature du BPU.** Le BPU doit être paraphé sur chaque page et signé sur la dernière. L'absence de signature est un motif d'élimination.

## Comment extraire automatiquement un BPU depuis un PDF ?

L'extraction manuelle d'un BPU depuis un document PDF de CPS (Cahier des Prescriptions Spéciales) est un processus chronophage et source d'erreurs. Les données sont souvent mal formatées, les tableaux s'étendent sur plusieurs pages, et les conversions copier-coller génèrent des décalages de colonnes.

**BP2XLS** de SplitGlass est un moteur d'extraction automatique conçu spécifiquement pour les documents de marchés publics marocains. Il utilise une combinaison de reconnaissance optique de caractères (OCR) et de modèles d'intelligence artificielle pour identifier, extraire et structurer les tableaux de bordereaux de prix depuis les PDF.

Le processus d'extraction avec BP2XLS se déroule en quatre étapes :

1. **Ingestion** : le PDF du CPS (ou du BPDE/DQE) est téléchargé dans le moteur
2. **Détection** : l'IA identifie automatiquement les pages contenant des tableaux de prix
3. **Extraction** : les données sont extraites cellule par cellule avec vérification de cohérence
4. **Export** : un fichier Excel structuré est généré avec les colonnes standardisées

L'avantage principal est la réduction du temps de traitement : un BPU de 50 lignes qui prend 45 minutes à saisir manuellement est extrait en moins de 30 secondes, avec un taux de précision supérieur à 95%.

## Où trouver les BPU des marchés publics au Maroc ?

Les Bordereaux des Prix Unitaires sont accessibles publiquement via le **portail national des marchés publics** : [marchespublics.gov.ma](https://www.marchespublics.gov.ma). Ce portail centralise l'ensemble des avis d'appels d'offres, des consultations, et des résultats d'attribution pour tous les organismes publics marocains.

Pour accéder à un BPU spécifique :

1. Rendez-vous sur marchespublics.gov.ma
2. Recherchez l'appel d'offres par référence, objet, ou acheteur public
3. Téléchargez le **dossier de consultation des entreprises** (DCE)
4. Le BPU se trouve généralement dans les pièces financières du DCE, souvent en annexe du CPS

Les BPU sont le plus souvent fournis au format **PDF** (parfois Word ou Excel), ce qui complique leur exploitation directe. C'est précisément le problème que résout BP2XLS : transformer ces PDF en fichiers Excel exploitables en quelques secondes.

## Questions fréquentes sur le BPU

### Le BPU est-il obligatoire dans tous les marchés publics au Maroc ?

Le BPU est obligatoire dans les **marchés à prix unitaires**, qui représentent la grande majorité des marchés de travaux au Maroc. Pour les marchés à prix global et forfaitaire, un décompte est utilisé à la place, mais le principe de décomposition des prix reste similaire.

### Qui remplit le BPU : le maître d'ouvrage ou l'entreprise ?

Le maître d'ouvrage fournit le BPU avec les désignations et les unités pré-remplies. L'entreprise soumissionnaire complète les colonnes de prix unitaires. Le DQE est ensuite calculé en multipliant ces prix par les quantités estimées.

### Que se passe-t-il en cas d'erreur dans le BPU après attribution ?

Après l'attribution du marché, les prix unitaires du BPU deviennent contractuels. En cas de discordance entre le BPU et le DQE, **ce sont les prix unitaires du BPU qui prévalent** conformément au décret. Toute modification nécessite un avenant au marché.

## À Propos de SplitGlass

**SplitGlass** développe BP2XLS, le premier moteur IA marocain d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics. Fondé en 2025 par Hamza Atabrour, SplitGlass transforme les documents d'appels d'offres en données Excel structurées en quelques secondes. Contact : hamza [at] splitglass.com
