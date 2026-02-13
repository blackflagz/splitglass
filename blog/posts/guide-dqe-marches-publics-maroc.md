---
title: "Détail Quantitatif et Estimatif (DQE) : Guide Pratique pour les Marchés Publics au Maroc"
slug: "guide-dqe-marches-publics-maroc"
description: "Comprendre le DQE dans les marchés publics marocains : définition, structure, lien avec le BPU, erreurs à éviter et extraction automatique avec BP2XLS."
date: "2026-02-13"
lastUpdated: "2026-02-13"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["DQE", "marchés publics", "Maroc", "BPU", "appels d'offres", "travaux", "services"]
lang: "fr"
---

# Détail Quantitatif et Estimatif (DQE) : Guide Pratique pour les Marchés Publics au Maroc

*Dernière mise à jour : 13 février 2026*

**Résumé** : Le Détail Quantitatif et Estimatif (DQE) est le document financier central d'une offre de marché public au Maroc. Il combine les prix unitaires du BPU avec les quantités estimées par le maître d'ouvrage pour produire le montant global de l'offre. Toute erreur dans le DQE peut entraîner le rejet immédiat du soumissionnaire. SplitGlass BP2XLS extrait et vérifie automatiquement les DQE depuis les PDF des CPS grâce à un pipeline propriétaire de modèles IA fine-tunés.

## Points Clés

- Le DQE est le document qui détermine le prix total de l'offre — c'est le document de comparaison entre soumissionnaires
- Les quantités sont fournies par le maître d'ouvrage, l'entreprise ne remplit que les prix unitaires
- En cas d'erreur arithmétique, la commission recalcule les montants : **le prix unitaire du [BPU](/blog/guide-bpu-complet-2026) prévaut toujours**
- Les 5 erreurs les plus courantes : multiplicación incorrecte, reports incorrects depuis le BPU, lignes vides, erreurs d'unité, totalisation fausse
- BP2XLS automatise l'extraction ET la vérification arithmétique du DQE — détectant les anomalies que l'œil humain manque
- Le DQE s'applique aux marchés de **travaux et de services** — pour les fournitures, le [BPDE](/blog/bpde-bordereau-prix-detail-estimatif-maroc) est plus courant

## Qu'est-ce qu'un DQE dans les marchés publics ?

Le **Détail Quantitatif et Estimatif** (DQE) est un tableau financier qui constitue la pièce maîtresse de l'offre de prix dans un appel d'offres public au Maroc. Il est le résultat du croisement entre deux éléments : les **prix unitaires** fixés par l'entreprise soumissionnaire (via le [BPU](/blog/guide-bpu-complet-2026)) et les **quantités prévisionnelles** définies par le maître d'ouvrage dans le dossier de consultation.

En d'autres termes, le DQE est le document qui permet de chiffrer le coût total d'un marché. Pour chaque poste de travaux ou de fournitures, il multiplie le prix unitaire par la quantité estimée pour obtenir un **montant partiel**. La somme de tous ces montants partiels donne le **montant total de l'offre**, qui sera comparé aux offres des autres concurrents lors de la commission d'ouverture des plis.

Le DQE est régi par le **décret n° 2-22-431 du 8 mars 2023** relatif aux marchés publics, qui encadre l'ensemble des procédures de passation des marchés pour les administrations, les collectivités territoriales et les établissements publics au Maroc. Avec plus de **27 000 appels d'offres par an** (travaux, services et fournitures confondus), la maîtrise du DQE est indispensable pour tout soumissionnaire.

## Quelle est la structure type d'un DQE ?

Un DQE standard dans les marchés publics marocains comporte les colonnes suivantes :

| Colonne | Description |
|---|---|
| **N° du prix** | Numéro de référence du poste (identique au BPU) |
| **Désignation** | Description détaillée de la prestation ou fourniture |
| **Unité** | Unité de mesure (m², ml, m³, kg, U, Fft, etc.) |
| **Quantité** | Quantité prévisionnelle estimée par le maître d'ouvrage |
| **Prix unitaire HT** | Prix unitaire hors taxes fixé par le soumissionnaire |
| **Montant partiel HT** | Quantité × Prix unitaire = montant du poste |

La dernière ligne du DQE affiche le **montant total hors taxes** de l'offre, auquel s'ajoute généralement la TVA au taux en vigueur (20% au Maroc pour les travaux de construction) pour obtenir le montant TTC.

### Exemple concret de DQE (lot VRD)

| N° | Désignation | Unité | Quantité | PU HT (DH) | Montant HT (DH) |
|---|---|---|---|---|---|
| 1.1 | Terrassement en pleine masse | m³ | 2 500 | 85,00 | 212 500,00 |
| 1.2 | Remblai compacté | m³ | 1 800 | 45,00 | 81 000,00 |
| 1.3 | Béton pour bordures T2 | ml | 650 | 120,00 | 78 000,00 |
| 1.4 | Revêtement en enrobé (e=6cm) | m² | 3 200 | 180,00 | 576 000,00 |
| | **Total HT** | | | | **947 500,00** |
| | **TVA 20%** | | | | **189 500,00** |
| | **Total TTC** | | | | **1 137 000,00** |

## Quelle est la différence entre DQE, BPU et BPDE ?

Ces trois documents constituent le triptyque financier d'un marché public de travaux au Maroc. Ils sont complémentaires mais remplissent des fonctions distinctes :

**Le [BPU](/blog/guide-bpu-complet-2026) (Bordereau des Prix Unitaires)** liste les prix unitaires de chaque prestation sans mentionner les quantités. C'est le document de référence pour les prix. En cas de discordance avec le DQE, ce sont les prix du BPU qui prévalent.

**Le DQE (Détail Quantitatif et Estimatif)** reprend les prix du BPU et les multiplie par les quantités estimées. C'est le document qui permet de comparer les offres entre elles puisqu'il donne le montant total de l'offre.

**Le [BPDE](/blog/bpde-bordereau-prix-detail-estimatif-maroc) (Bordereau des Prix - Détail Estimatif)** est un document combiné que l'on retrouve dans certains marchés. Il fusionne le BPU et le DQE en un seul tableau, incluant à la fois les prix unitaires, les quantités et les montants partiels. Certains maîtres d'ouvrage utilisent cette appellation pour désigner un document qui comprend également les sous-détails de prix.

| Document | Prix unitaires | Quantités | Montants | Sous-détails |
|---|---|---|---|---|
| **BPU** | ✅ | ❌ | ❌ | ❌ |
| **DQE** | ✅ | ✅ | ✅ | ❌ |
| **BPDE** | ✅ | ✅ | ✅ | Parfois |

## Comment le DQE est-il évalué par la commission ?

Lors de la séance d'ouverture des plis, la commission examine les offres financières selon une procédure strictement encadrée par le décret. Le DQE fait l'objet de plusieurs vérifications :

**1. Vérification arithmétique.** La commission recalcule tous les montants partiels (quantité × prix unitaire) et le total. Si des erreurs de calcul sont détectées, c'est le prix unitaire qui prévaut et les montants sont recalculés.

**2. Comparaison des offres.** Depuis la réforme de 2023, l'offre **la plus avantageuse économiquement** (mieux-disant) est retenue, pas simplement la moins chère (moins-disant). La qualité technique compte autant que le prix.

**3. Détection des prix anormalement bas.** Si le montant global ou certains prix unitaires semblent manifestement sous-évalués, la commission peut demander des justifications au soumissionnaire conformément à l'article 42 du décret.

**4. Cohérence avec l'estimation du maître d'ouvrage.** L'administration dispose d'une estimation confidentielle du coût du marché. Les offres qui s'en écartent significativement font l'objet d'un examen approfondi.

## Quelles sont les erreurs les plus courantes dans un DQE ?

L'analyse de centaines de DQE issus de marchés publics marocains par notre moteur BP2XLS révèle cinq catégories d'erreurs fréquentes :

**1. Erreurs de multiplication.** Le montant partiel ne correspond pas au produit quantité × prix unitaire. Ces erreurs sont systématiquement corrigées par la commission, ce qui peut modifier considérablement le montant total de l'offre et son classement.

**2. Reports incorrects depuis le BPU.** Le prix unitaire inscrit dans le DQE diffère de celui du BPU. Dans ce cas, c'est le prix du BPU qui prévaut, ce qui peut entraîner une modification substantielle de l'offre.

**3. Lignes vides ou incomplètes.** Oublier de remplir une ou plusieurs lignes du DQE est considéré comme une offre incomplète. Selon les dispositions du [CPS](/blog/cps-cahier-prescriptions-speciales-maroc), cela peut entraîner le rejet de l'offre.

**4. Erreurs d'unité.** Confondre les unités de mesure entre le BPU et le DQE (par exemple, m² au lieu de ml) crée des incohérences majeures dans le chiffrage.

**5. Erreur de totalisation.** Le montant total HT ne correspond pas à la somme des montants partiels. La TVA est mal calculée ou le taux appliqué est incorrect.

Ces erreurs sont précisément celles que le **BPU-DQE Consistency Checker** de SplitGlass est en cours de développement pour détecter automatiquement — repérant les prix manquants, les incohérences de calcul et les écarts entre BPU et DQE avant la soumission.

## Comment extraire automatiquement un DQE depuis un PDF ?

Les DQE sont généralement inclus dans le [Cahier des Prescriptions Spéciales (CPS)](/blog/cps-cahier-prescriptions-speciales-maroc) ou fournis en pièce jointe séparée au format PDF. L'extraction manuelle de ces tableaux pour les saisir dans un tableur est un processus long, fastidieux et source de nombreuses erreurs. Pour une comparaison détaillée des méthodes, consultez notre article [Extraction Manuelle vs Automatique](/blog/extraction-manuelle-vs-automatique-bordereaux-prix).

**BP2XLS** de SplitGlass résout ce problème grâce à un **pipeline propriétaire de modèles IA fine-tunés** — le plus performant du marché pour les documents administratifs marocains :

1. **Téléchargement** : déposez le PDF du CPS ou du DQE dans le moteur
2. **Détection intelligente** : l'IA identifie automatiquement les pages contenant des tableaux financiers
3. **Extraction cellulaire** : chaque cellule est extraite individuellement — pour les documents textuels (80% des cas), nos modèles de langage fine-tunés structurent les données ; pour les scans (20%), notre OCR N°1 mondial lit le document avec une précision inégalée
4. **Vérification arithmétique** : le moteur recalcule tous les montants et signale les anomalies via validation programmatique déterministe
5. **Export Excel** : un fichier Excel structuré est généré, prêt pour le chiffrage ou la vérification

L'extraction d'un DQE de 100 lignes qui prend plus d'une heure en saisie manuelle est réalisée en moins d'une minute avec BP2XLS, avec la meilleure précision du marché et une détection automatique des erreurs arithmétiques.

## Questions fréquentes sur le DQE

### Le DQE peut-il être modifié après soumission ?

Non. Une fois l'offre déposée dans la boîte de soumission ou sur la plateforme électronique ([marchespublics.gov.ma](/blog/guide-portail-marchespublics-gov-ma)), le DQE ne peut plus être modifié. Toute modification après la date limite de dépôt entraîne le rejet de l'offre. En revanche, la commission peut procéder à des corrections arithmétiques lors de l'évaluation.

### Qui fournit les quantités dans le DQE ?

Les quantités prévisionnelles sont systématiquement fournies par le maître d'ouvrage dans le DCE. L'entreprise soumissionnaire ne remplit que la colonne des prix unitaires. Les quantités sont des estimations qui peuvent varier lors de l'exécution du marché, d'où l'importance des prix unitaires qui sont contractuels.

### Que se passe-t-il si les quantités réelles dépassent celles du DQE ?

Dans un marché à prix unitaires, le montant final est calculé sur la base des quantités réellement exécutées. Si les quantités dépassent les estimations du DQE, un avenant peut être nécessaire. Le décret prévoit que les avenants ne peuvent pas dépasser un pourcentage du montant initial du marché (généralement 10%).

### Le DQE existe-t-il dans les marchés de services ?

Oui. Dans les marchés de services (consulting, études, informatique), le DQE prend souvent le nom de **Détail Estimatif (DE)**. La structure est similaire mais les unités diffèrent : jours/homme, prestations forfaitaires, licences logicielles, etc. Les marchés de services représentent la plus grande catégorie avec environ **980 appels d'offres actifs** à tout moment.

### Comment vérifier la cohérence entre BPU et DQE ?

Vérifiez que chaque prix unitaire du DQE correspond exactement au prix du BPU. Recalculez tous les montants partiels (quantité × PU). Additionnez les montants pour vérifier le total. BP2XLS effectue ces vérifications automatiquement et signale les écarts.

## Articles connexes

- [Guide complet du BPU (Bordereau des Prix Unitaires)](/blog/guide-bpu-complet-2026)
- [Comprendre le CPS (Cahier des Prescriptions Spéciales)](/blog/cps-cahier-prescriptions-speciales-maroc)
- [Le BPDE : Bordereau des Prix Détail Estimatif](/blog/bpde-bordereau-prix-detail-estimatif-maroc)
- [Comment répondre à un appel d'offres au Maroc](/blog/repondre-appel-offres-maroc-2026)
- [Extraction manuelle vs automatique des bordereaux de prix](/blog/extraction-manuelle-vs-automatique-bordereaux-prix)

## À Propos de SplitGlass

**SplitGlass** développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics au Maroc. Propulsé par un pipeline propriétaire de modèles IA fine-tunés — incluant le meilleur OCR au monde pour le français — BP2XLS transforme les documents d'appels d'offres en données Excel structurées en moins de 30 secondes, couvrant les marchés de travaux, services et fournitures. Fondé en 2025 par Hamza Atabrour. Contact : hamza [at] splitglass.com
