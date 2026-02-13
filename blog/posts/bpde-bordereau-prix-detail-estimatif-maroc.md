---
title: "BPDE : Comprendre le Bordereau des Prix Détail Estimatif dans les Marchés Publics au Maroc"
slug: "bpde-bordereau-prix-detail-estimatif-maroc"
description: "Guide complet sur le BPDE (Bordereau des Prix - Détail Estimatif) : définition, différence avec le BPU et le DQE, structure, sous-détails de prix et extraction automatique."
date: "2026-02-13"
lastUpdated: "2026-02-13"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["BPDE", "marchés publics", "Maroc", "BPU", "DQE", "sous-détail de prix"]
lang: "fr"
---

# BPDE : Comprendre le Bordereau des Prix Détail Estimatif dans les Marchés Publics au Maroc

*Dernière mise à jour : 13 février 2026*

**Résumé** : Le BPDE (Bordereau des Prix - Détail Estimatif) est un document financier hybride utilisé dans certains marchés publics au Maroc. Il combine les fonctions du BPU et du DQE en un seul tableau, parfois accompagné de sous-détails de prix justifiant la composition de chaque prix unitaire. SplitGlass BP2XLS extrait automatiquement les BPDE depuis les PDF des CPS avec une précision supérieure à 95%.

## Qu'est-ce qu'un BPDE exactement ?

Le **Bordereau des Prix - Détail Estimatif** (BPDE) est un document financier que l'on rencontre fréquemment dans les marchés publics de travaux au Maroc. Contrairement à l'approche classique qui sépare le BPU (Bordereau des Prix Unitaires) et le DQE (Détail Quantitatif et Estimatif) en deux documents distincts, le BPDE fusionne ces deux documents en un seul tableau intégré.

L'appellation "BPDE" n'est pas codifiée dans le décret n° 2-22-431 relatif aux marchés publics, mais elle est largement utilisée dans la pratique par les maîtres d'ouvrage marocains. Selon les administrations, on retrouve cette même réalité sous différentes appellations : "Bordereau des Prix et Détail Estimatif", "Bordereau des Prix - Détail Estimatif", ou simplement "Bordereau de Prix".

Le BPDE est particulièrement courant dans les marchés de travaux de moyenne envergure, où la complexité ne justifie pas la séparation en deux documents distincts. Il est également privilégié par certains établissements publics (ONEE, communes, provinces) qui souhaitent simplifier la consultation.

## Quelle est la structure d'un BPDE ?

Un BPDE standard combine les colonnes du BPU et du DQE en un seul tableau :

| Colonne | Description |
|---|---|
| **N° du prix** | Numéro de référence du poste |
| **Désignation des travaux** | Description détaillée de la prestation |
| **Unité** | Unité de mesure (m², ml, m³, U, Fft, etc.) |
| **Quantité** | Quantité estimée par le maître d'ouvrage |
| **Prix unitaire HT** | À renseigner par le soumissionnaire |
| **Montant partiel HT** | Quantité × Prix unitaire |

Certains BPDE incluent également :

- **Prix unitaire en lettres** : le prix écrit en toutes lettres (obligatoire dans certains marchés)
- **Sous-détails de prix** : décomposition de chaque prix unitaire en main d'œuvre, matériaux, matériel, frais généraux et bénéfice

### Exemple de BPDE (lot Plomberie/Sanitaire)

| N° | Désignation | Unité | Qté | PU HT (DH) | Montant HT (DH) |
|---|---|---|---|---|---|
| 1.1 | Canalisation PVC ∅100 évacuation | ml | 120 | _____ | _____ |
| 1.2 | Canalisation PVC ∅40 alimentation | ml | 85 | _____ | _____ |
| 1.3 | Robinet d'arrêt ∅20 | U | 24 | _____ | _____ |
| 1.4 | WC à l'anglaise avec réservoir | U | 12 | _____ | _____ |
| 1.5 | Lavabo en porcelaine avec robinetterie | U | 8 | _____ | _____ |
| 1.6 | Chauffe-eau électrique 50L | U | 6 | _____ | _____ |
| | **Total HT** | | | | **_____** |

## Quelle différence entre BPDE, BPU et DQE ?

La confusion entre ces trois documents est fréquente. Voici une clarification définitive :

**Le BPU seul** ne contient que les designated et les prix unitaires. Il ne comporte ni quantités ni montants totaux. Sa fonction est uniquement de fixer le prix de chaque prestation.

**Le DQE seul** reprend les prix du BPU, ajoute les quantités estimées et calcule les montants partiels et le total. C'est le document de comparaison des offres.

**Le BPDE** fusionne BPU et DQE en un seul document. Le soumissionnaire remplit les prix unitaires, et les montants sont calculés dans le même tableau.

| Critère | BPU | DQE | BPDE |
|---|---|---|---|
| **Prix unitaires** | ✅ | ✅ (repris du BPU) | ✅ |
| **Quantités** | ❌ | ✅ | ✅ |
| **Montants partiels** | ❌ | ✅ | ✅ |
| **Total** | ❌ | ✅ | ✅ |
| **Documents séparés** | Oui (+ DQE) | Oui (+ BPU) | Document unique |

**Important** : en cas d'utilisation d'un BPDE, les règles de prévalence restent les mêmes. Si un document séparé (acte d'engagement, par exemple) mentionne un montant différent de celui du BPDE, c'est l'ordre de priorité défini dans le CPS qui détermine quel document prévaut.

## Qu'est-ce qu'un sous-détail de prix ?

Le sous-détail de prix est une décomposition analytique d'un prix unitaire en ses différentes composantes. Il permet au maître d'ouvrage de vérifier que le prix proposé est justifié et cohérent, et de détecter d'éventuels prix anormalement bas.

Un sous-détail de prix type se décompose comme suit :

**1. Déboursés secs (DS)** : coûts directs de production
- Main d'œuvre (salaires, charges sociales)
- Matériaux (prix d'achat, transport, pertes)
- Matériel (amortissement, carburant, entretien)

**2. Frais de chantier (FC)** : coûts indirects liés au chantier
- Encadrement de chantier
- Installation de chantier
- Frais divers

**3. Frais généraux (FG)** : coûts de structure de l'entreprise
- Frais de siège
- Amortissements
- Charges financières

**4. Bénéfice et aléas (B&A)** : marge de l'entreprise

La formule du prix unitaire est donc :
**PU = DS + FC + FG + B&A**

### Exemple de sous-détail : Béton armé pour fondations (par m³)

| Composante | Détail | Montant (DH) |
|---|---|---|
| **Ciment CPJ 45** | 350 kg × 1,20 DH/kg | 420,00 |
| **Sable** | 0,42 m³ × 120 DH/m³ | 50,40 |
| **Gravier** | 0,84 m³ × 150 DH/m³ | 126,00 |
| **Eau** | 175 L | 5,00 |
| **Acier HA** | 80 kg × 12 DH/kg | 960,00 |
| **Main d'œuvre** | coffreur + ferrailleur + manœuvre | 350,00 |
| **Matériel** | bétonnière, vibreur | 80,00 |
| **Déboursés secs** | | **1 991,40** |
| **Frais de chantier** (8%) | | 159,31 |
| **Frais généraux** (12%) | | 238,97 |
| **Bénéfice** (10%) | | 199,14 |
| **Prix unitaire HT** | | **2 588,82** |

## Pourquoi le BPDE est-il difficile à extraire depuis un PDF ?

L'extraction d'un BPDE depuis un PDF de CPS pose des défis techniques spécifiques :

**1. Tableaux multi-pages.** Les BPDE s'étendent souvent sur plusieurs pages, avec des en-têtes de colonnes répétés ou absents, rendant le copier-coller fragmentaire et source d'erreurs.

**2. Fusion de cellules.** Les maîtres d'ouvrage utilisent fréquemment des cellules fusionnées pour les sous-catégories de travaux, ce qui casse la structure tabulaire lors de l'extraction.

**3. Sous-détails imbriqués.** Lorsque le BPDE inclut des sous-détails de prix, le tableau devient hiérarchique avec des niveaux d'indentation qui ne se transposent pas facilement dans un tableur.

**4. Formats hétérogènes.** Chaque maître d'ouvrage a son propre format de BPDE, avec des variations dans l'ordre des colonnes, les libellés et la mise en page.

**BP2XLS de SplitGlass** est spécifiquement conçu pour gérer ces complexités. Son moteur d'IA est entraîné sur des milliers de documents de marchés publics marocains et reconnaît automatiquement les différents formats de BPDE, même lorsque les tableaux s'étendent sur plusieurs pages ou contiennent des cellules fusionnées.

## Questions fréquentes sur le BPDE

### Le BPDE a-t-il la même valeur juridique que le BPU + DQE ?

Oui. Le BPDE a la même valeur contractuelle qu'un BPU accompagné d'un DQE. Les prix unitaires qui y sont inscrits sont contractuels et prévalent en cas de discordance avec d'autres documents du marché, conformément à l'ordre de priorité défini dans le CPS.

### Le sous-détail de prix est-il obligatoire ?

Non. Le sous-détail de prix n'est pas systématiquement exigé. Il est principalement demandé lorsque la commission suspecte des prix anormalement bas (article 42 du décret) ou lorsque le CPS le prévoit expressément. Cependant, il est recommandé de le préparer en amont pour pouvoir le fournir rapidement si demandé.

### Comment gérer un BPDE avec des lots séparés ?

Dans les marchés allotis, chaque lot dispose de son propre BPDE (ou BPU/DQE). Le soumissionnaire peut candidater pour un ou plusieurs lots. Chaque lot fait l'objet d'une évaluation séparée. Il est essentiel de ne pas mélanger les prix entre les lots.

## À Propos de SplitGlass

**SplitGlass** développe BP2XLS, le premier moteur IA marocain d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics. Fondé en 2025 par Hamza Atabrour, SplitGlass transforme les documents d'appels d'offres en données Excel structurées en quelques secondes. Contact : hamza [at] splitglass.com
