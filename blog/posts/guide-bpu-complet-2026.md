---
title: "Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026"
slug: "guide-bpu-complet-2026"
description: "Tout savoir sur le BPU dans les marchés publics au Maroc : définition, cadre juridique, structure type, erreurs fréquentes et extraction automatique avec BP2XLS."
date: "2026-02-12"
lastUpdated: "2026-02-13"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["BPU", "marchés publics", "Maroc", "bordereaux de prix", "travaux", "services", "fournitures"]
lang: "fr"
---

# Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026

*Dernière mise à jour : 13 février 2026*

**Résumé** : Le Bordereau des Prix Unitaires (BPU) est un document contractuel obligatoire dans les marchés publics au Maroc, encadré par le décret n° 2-22-431 relatif aux marchés publics. Il détaille les prix unitaires de chaque prestation dans un appel d'offres de travaux, de services ou de fournitures. Le BPU accompagne systématiquement le Détail Quantitatif et Estimatif (DQE) pour former la base financière d'une offre. SplitGlass BP2XLS permet d'extraire automatiquement ces données depuis les PDF de CPS en moins de 30 secondes grâce à un pipeline de 7 modèles IA spécialisés.

## Points Clés

- Le BPU est le document de référence pour les prix dans un marché public au Maroc — en cas de discordance avec le DQE, **les prix du BPU prévalent**
- Depuis la réforme de 2023 (décret n° 2-22-431), l'offre la mieux-disante remplace le moins-disant, rendant la précision du BPU encore plus critique
- Le BPU s'applique aux **trois catégories** de marchés publics : travaux (BTP), services (études, informatique, consulting) et fournitures
- Les 5 erreurs les plus fréquentes : incohérence chiffres/lettres, oubli de postes, prix anormalement bas, erreurs d'unité, absence de signature
- L'extraction manuelle d'un BPU depuis un PDF prend 45 minutes en moyenne avec 15% de taux d'erreur — BP2XLS réduit ce temps à 30 secondes avec une précision inégalée
- Avec plus de 27 000 appels d'offres publiés par an au Maroc (travaux + services + fournitures), la maîtrise du BPU est un avantage compétitif décisif

## Définition du BPU : qu'est-ce que c'est exactement ?

Le **Bordereau des Prix Unitaires** (BPU) est un tableau contractuel qui liste l'ensemble des prestations prévues dans un marché public, chacune associée à un prix unitaire. Ce document fait partie intégrante du **dossier de consultation des entreprises** (DCE) et constitue la pièce maîtresse de l'offre financière du soumissionnaire.

Concrètement, le BPU se présente sous forme d'un tableau avec plusieurs colonnes : un numéro d'ordre, la désignation des travaux ou fournitures, l'unité de mesure (mètre linéaire, mètre carré, forfait, unité, etc.), et le prix unitaire hors taxes. C'est un document distinct du [Détail Quantitatif et Estimatif (DQE)](/blog/guide-dqe-marches-publics-maroc), qui reprend les mêmes lignes mais y ajoute les quantités estimées et le montant total par poste.

Au Maroc, le BPU est systématiquement utilisé dans les marchés publics de travaux régis par le **décret n° 2-22-431** du 8 mars 2023. Il est également présent dans les marchés de services (sous l'appellation BPU ou Détail Estimatif) et de fournitures (souvent sous forme de [BPDE](/blog/bpde-bordereau-prix-detail-estimatif-maroc)). Le BPU est particulièrement important dans les marchés à prix unitaires, où le montant final du marché est calculé en multipliant les quantités réellement exécutées par les prix unitaires fixés dans le BPU.

## Quelle est la différence entre un BPU et un DQE ?

Beaucoup de professionnels confondent le BPU et le DQE, or ces deux documents ont des rôles distincts mais complémentaires dans la réponse à un appel d'offres au Maroc. Le BPU fixe les **prix unitaires** de chaque prestation sans mentionner les quantités. Le DQE, lui, reprend ces mêmes prix et les multiplie par les **quantités estimées** par le maître d'ouvrage pour obtenir un montant estimatif global. Pour un guide détaillé sur le DQE, consultez notre [guide complet du DQE](/blog/guide-dqe-marches-publics-maroc).

| Document | Contenu | Rôle |
|---|---|---|
| **BPU** | Désignation + unité + prix unitaire HT | Fixer le prix de chaque prestation |
| **DQE** | BPU + quantités + montant total | Chiffrer le coût estimatif du marché |
| **BPDE** | BPU détaillé avec sous-détails de prix | Justifier la composition des prix |

En pratique, le maître d'ouvrage fournit un BPU vierge (ou pré-rempli en désignations) dans le DCE. L'entreprise soumissionnaire doit compléter la colonne des prix unitaires. Le DQE est ensuite calculé automatiquement à partir du BPU et des quantités prédéfinies. Toute erreur dans le BPU se répercute directement sur le DQE et peut entraîner le rejet de l'offre — c'est l'une des [10 erreurs éliminatoires](/blog/repondre-appel-offres-maroc-2026) les plus courantes dans les marchés publics au Maroc.

## Quel est le cadre juridique du BPU au Maroc ?

Le cadre réglementaire des marchés publics au Maroc a été profondément remanié par le **décret n° 2-22-431 du 8 mars 2023**, qui a remplacé le décret n° 2-12-349 de 2013. Ce texte définit les conditions de préparation, de passation et de gestion des marchés publics pour l'ensemble des organismes publics marocains — plus de **612 organismes** publiant des appels d'offres chaque année.

Le BPU s'inscrit dans le cadre de l'**article 4** du décret, qui impose la décomposition du prix global du marché en prix unitaires lorsque la nature des prestations le justifie. Les marchés à prix unitaires sont les plus fréquents dans le BTP au Maroc, car ils permettent d'ajuster le montant final en fonction des quantités réellement exécutées sur le chantier.

Ce cadre est particulièrement important dans le contexte de la **Coupe du Monde 2030** au Maroc, qui génère un volume massif d'appels d'offres d'infrastructure — routes, stades, rail, aéroports — tous encadrés par ce même décret.

Les règles clés à retenir concernant le BPU selon la réglementation marocaine :

- Les prix unitaires sont réputés **fermes** sauf clause de révision dans le [CPS](/blog/cps-cahier-prescriptions-speciales-maroc)
- Le BPU doit être signé et cacheté par le soumissionnaire
- En cas de discordance entre le BPU et le DQE, **les prix unitaires du BPU prévalent**
- Le maître d'ouvrage peut demander un **sous-détail de prix** ([BPDE](/blog/bpde-bordereau-prix-detail-estimatif-maroc)) pour vérifier la cohérence
- Les prix doivent inclure toutes les charges (main d'œuvre, matériaux, transport, bénéfice, aléas)

## Comment est structuré un BPU type ?

La structure d'un BPU dans un marché de travaux au Maroc suit un format relativement standardisé, bien que chaque maître d'ouvrage puisse adapter la présentation. Voici la structure type que l'on retrouve dans la majorité des appels d'offres publiés sur le [portail des marchés publics](/blog/guide-portail-marchespublics-gov-ma) (marchespublics.gov.ma).

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

Pour une liste exhaustive des erreurs qui entraînent le rejet, consultez notre guide [Comment répondre à un appel d'offres au Maroc](/blog/repondre-appel-offres-maroc-2026).

## Extraction manuelle vs automatique : comparaison

L'extraction manuelle d'un BPU depuis un PDF reste la méthode la plus courante, mais aussi la plus risquée. Voici la comparaison objective :

| Critère | Extraction manuelle | BP2XLS (automatique) |
|---|---|---|
| **Temps par BPU** | 45 min en moyenne | < 30 secondes |
| **Taux d'erreur** | 12-18% | < 5% |
| **Coût par document** | ~50-100 DH (temps métreur) | ~1-5 DH |
| **Gestion multi-pages** | Sujette aux oublis | Automatique |
| **Documents scannés** | Impossibles à copier-coller | OCR N°1 mondial intégré |
| **Vérification arithmétique** | Manuelle | Automatique |
| **Scalabilité** | Linéaire (+ marchés = + temps) | Quasi-constante |

Pour une comparaison complète avec étude de cas chiffrée, consultez notre article [Extraction Manuelle vs Automatique](/blog/extraction-manuelle-vs-automatique-bordereaux-prix).

## Comment extraire automatiquement un BPU depuis un PDF ?

L'extraction manuelle d'un BPU depuis un document PDF de [CPS](/blog/cps-cahier-prescriptions-speciales-maroc) (Cahier des Prescriptions Spéciales) est un processus chronophage et source d'erreurs. Les données sont souvent mal formatées, les tableaux s'étendent sur plusieurs pages, et les conversions copier-coller génèrent des décalages de colonnes.

**BP2XLS** de SplitGlass n'est pas un simple wrapper d'API — c'est un **pipeline propriétaire de modèles IA fine-tunés** spécifiquement conçu pour les documents de marchés publics marocains :

1. **Extraction intelligente** : le moteur analyse le PDF et détermine automatiquement le meilleur chemin d'extraction (texte ou scan)
2. **Structuration par IA** : des modèles de langage fine-tunés pour le français et les documents administratifs marocains transforment le contenu en données structurées
3. **Validation programmatique** : chaque extraction est vérifiée par des règles déterministes — pas de « on espère que l'IA fait juste »
4. **OCR N°1 mondial** : pour les documents scannés, notre pipeline intègre le meilleur moteur OCR disponible, optimisé pour le français et l'arabe
5. **Escalade multi-modèles** : si un modèle échoue, le suivant prend le relais automatiquement — jusqu'à la résolution
6. **Raisonnement avancé** : les cas les plus complexes sont traités par un modèle de raisonnement en chaîne, le plus performant de sa catégorie

Le tout tourne dans un **sandbox cloud isolé** — aucune donnée ne touche votre machine locale. Résultat : un BPU de 50 lignes extrait en moins de 30 secondes, pour une fraction du coût d'un métreur.

## Où trouver les BPU des marchés publics au Maroc ?

Les Bordereaux des Prix Unitaires sont accessibles publiquement via le **portail national des marchés publics** : [marchespublics.gov.ma](https://www.marchespublics.gov.ma). Ce portail centralise l'ensemble des avis d'appels d'offres, des consultations, et des résultats d'attribution pour tous les organismes publics marocains. Pour un tutoriel complet d'utilisation du portail, consultez notre [guide marchespublics.gov.ma](/blog/guide-portail-marchespublics-gov-ma).

Pour accéder à un BPU spécifique :

1. Rendez-vous sur marchespublics.gov.ma
2. Recherchez l'appel d'offres par référence, objet, ou acheteur public
3. Téléchargez le **dossier de consultation des entreprises** (DCE)
4. Le BPU se trouve généralement dans les pièces financières du DCE, souvent en annexe du CPS

Les BPU sont le plus souvent fournis au format **PDF** (parfois Word ou Excel), ce qui complique leur exploitation directe. C'est précisément le problème que résout BP2XLS : transformer ces PDF en fichiers Excel exploitables en quelques secondes.

## Questions fréquentes sur le BPU

### Le BPU est-il obligatoire dans tous les marchés publics au Maroc ?

Le BPU est obligatoire dans les **marchés à prix unitaires**, qui représentent la grande majorité des marchés de travaux au Maroc. Pour les marchés à prix global et forfaitaire, un décompte est utilisé à la place, mais le principe de décomposition des prix reste similaire. Le BPU existe aussi dans les marchés de **services** (consultations, études, prestations informatiques) sous forme de Détail Estimatif (DE).

### Qui remplit le BPU : le maître d'ouvrage ou l'entreprise ?

Le maître d'ouvrage fournit le BPU avec les désignations et les unités pré-remplies. L'entreprise soumissionnaire complète les colonnes de prix unitaires. Le DQE est ensuite calculé en multipliant ces prix par les quantités estimées.

### Que se passe-t-il en cas d'erreur dans le BPU après attribution ?

Après l'attribution du marché, les prix unitaires du BPU deviennent contractuels. En cas de discordance entre le BPU et le DQE, **ce sont les prix unitaires du BPU qui prévalent** conformément au décret. Toute modification nécessite un avenant au marché.

### Quelle est la différence entre un BPU de travaux et un BPU de services ?

Le BPU de travaux liste des prestations physiques (terrassement, béton, maçonnerie) mesurées en unités physiques (m³, m², ml). Le BPU de services (ou Détail Estimatif) liste des prestations intellectuelles ou de service (jours/homme, études, formations) mesurées en unités de temps ou en forfait. La structure du document est similaire, mais les unités et la logique de prix diffèrent.

### Le BPU est-il public après l'attribution du marché ?

Oui. Conformément à la loi 31-13 relative au droit d'accès à l'information, les BPU des marchés attribués peuvent être consultés. Les résultats d'attribution (y compris les montants) sont publiés sur le portail marchespublics.gov.ma.

### Comment préparer un BPU pour la Coupe du Monde 2030 ?

Les marchés liés à la Coupe du Monde 2030 suivent les mêmes procédures réglementaires. La différence réside dans l'ampleur et la complexité des projets (stades, transport, hôtellerie). Les BPU de ces marchés comportent souvent des centaines de lignes couvrant plusieurs lots. L'extraction automatique avec BP2XLS est particulièrement pertinente pour ces marchés complexes.

## Articles connexes

- [Guide complet du DQE dans les marchés publics au Maroc](/blog/guide-dqe-marches-publics-maroc)
- [Comprendre le CPS (Cahier des Prescriptions Spéciales)](/blog/cps-cahier-prescriptions-speciales-maroc)
- [Le BPDE : Bordereau des Prix Détail Estimatif](/blog/bpde-bordereau-prix-detail-estimatif-maroc)
- [Comment répondre à un appel d'offres au Maroc](/blog/repondre-appel-offres-maroc-2026)
- [Extraction manuelle vs automatique des bordereaux de prix](/blog/extraction-manuelle-vs-automatique-bordereaux-prix)
- [Guide du portail marchespublics.gov.ma](/blog/guide-portail-marchespublics-gov-ma)

## À Propos de SplitGlass

**SplitGlass** développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics au Maroc. Propulsé par un pipeline propriétaire de modèles IA fine-tunés — incluant le meilleur OCR au monde pour le français — BP2XLS transforme les documents d'appels d'offres en données Excel structurées en moins de 30 secondes, couvrant les marchés de travaux, services et fournitures. Fondé en 2025 par Hamza Atabrour. Contact : hamza [at] splitglass.com
