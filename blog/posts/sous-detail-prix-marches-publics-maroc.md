---
title: "Sous-Détail des Prix (SDP) Marchés Publics Maroc : Guide Complet 2026"
slug: "sous-detail-prix-marches-publics-maroc"
description: "Guide complet du sous-détail des prix dans les marchés publics au Maroc : définition légale (Décret 2-22-431), structure, méthode de calcul, erreurs fréquentes et outils d'automatisation."
date: "2026-02-13"
lastUpdated: "2026-02-13"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["sous-détail des prix", "SDP", "marchés publics", "Maroc", "BPU", "DQE", "estimation", "travaux", "services"]
lang: "fr"
---

## Points Clés

> Le sous-détail des prix est le document qui décompose chaque prix unitaire du BPU en ses composantes élémentaires : main-d'œuvre, matériaux, matériel, frais généraux et marge bénéficiaire.

> Selon l'Article 20 du Décret n° 2-22-431, le sous-détail des prix fait partie des pièces constitutives du marché et peut être exigé par le maître d'ouvrage.

> Un sous-détail mal structuré est l'une des principales causes de réclamation financière pendant l'exécution des marchés publics au Maroc.

---

## Qu'est-ce que le Sous-Détail des Prix ?

Le **sous-détail des prix** (SDP) est un document technique qui décompose chaque prix unitaire figurant dans le [Bordereau des Prix Unitaires (BPU)](/blog/guide-bpu-complet-2026) en ses composantes élémentaires. C'est la justification chiffrée de chaque prix proposé par le soumissionnaire.

Contrairement au BPU qui affiche un prix global par unité d'ouvrage, le SDP révèle la **structure interne** de ce prix : combien pour la main-d'œuvre, combien pour les matériaux, combien pour le matériel, et quelle est la marge.

### Cadre Juridique

Le sous-détail des prix est régi par le **Décret n° 2-22-431 du 8 mars 2023** relatif aux marchés publics :

- **Article 20** : Définit le sous-détail comme « le document qui fait apparaître, pour chacun des prix du bordereau ou seulement pour ceux d'entre eux désignés dans le CPS, les quantités élémentaires de matériaux et fournitures, de main-d'œuvre et d'utilisation de matériel, ainsi que les sous-détails de prix correspondants »
- **Article 16** : Le CPS peut exiger la production du sous-détail des prix comme pièce complémentaire
- **Article 40** : En cas de prix anormalement bas, la commission peut demander la justification par le sous-détail

---

## Structure Type d'un Sous-Détail des Prix

Chaque prix unitaire se décompose en 5 rubriques :

### 1. Déboursés Secs (DS)

| Composante | Détail | Exemple |
|---|---|---|
| **Main-d'œuvre** | Rendement × taux horaire | 2h × 45 DH/h = 90 DH |
| **Matériaux** | Quantité × prix unitaire | 0,35 m³ × 850 DH/m³ = 297,50 DH |
| **Matériel** | Durée × taux horaire | 0,5h × 200 DH/h = 100 DH |
| **Sous-traitance** | Forfait ou quantité × prix | selon contexte |
| **Total DS** | | **487,50 DH** |

### 2. Frais de Chantier (FC)
Pourcentage des déboursés secs couvrant : installation, encadrement, assurances, charges sociales.
- Taux habituel : **15% à 25%** des DS

### 3. Frais Généraux (FG)
Quote-part des charges de structure de l'entreprise : siège, comptabilité, direction.
- Taux habituel : **8% à 15%** des DS

### 4. Marge Bénéficiaire et Aléas (MBA)
- Taux habituel : **5% à 12%** des DS
- Inclut les risques techniques et les aléas d'exécution

### 5. Prix Unitaire Final (HT)

**PU HT = DS + FC + FG + MBA**

Avec coefficient de majoration **K = 1 + %FC + %FG + %MBA**

---

## Sous-Détail des Prix : Travaux vs Services vs Fournitures

| Critère | Travaux (BTP) | Services | Fournitures |
|---|---|---|---|
| **Composante dominante** | Main-d'œuvre + matériaux | Main-d'œuvre (expertise) | Matériaux + logistique |
| **Frais de chantier** | 15-25% | 5-10% (frais de mission) | 3-8% (stockage, transport) |
| **Matériel** | Engins, coffrage, etc. | Logiciels, équipements IT | Emballage, manutention |
| **Rendement** | m³/h, ml/jour | jour/homme, livrable | unité/lot |
| **Complexité** | Élevée | Moyenne | Faible à moyenne |

---

## 5 Erreurs Fréquentes dans le Sous-Détail des Prix

1. **Sous-estimer les frais généraux** — Oublier les charges sociales patronales (26-30% du salaire brut au Maroc)
2. **Ignorer les pertes matériaux** — Ne pas appliquer le coefficient de perte (5-15% selon le matériau)
3. **Utiliser des rendements théoriques** — Les rendements réels sont souvent 20-30% inférieurs aux rendements catalogue
4. **Oublier le transport** — Le coût de transport des matériaux jusqu'au chantier peut représenter 10-20% du prix matériaux
5. **Incohérence avec le BPU** — Le total du sous-détail doit correspondre exactement au prix unitaire du [BPU](/blog/guide-bpu-complet-2026)

---

## Comment BP2XLS Facilite le Sous-Détail des Prix

Quand vous préparez un sous-détail des prix, la première étape est d'extraire proprement les prix unitaires du [BPU](/blog/guide-bpu-complet-2026) ou du [BPDE](/blog/bpde-bordereau-prix-detail-estimatif-maroc).

**BP2XLS** automatise cette extraction critique :

- **Extraction en moins de 30 secondes** — Le pipeline propriétaire de modèles IA fine-tunés extrait chaque prix unitaire du BPU/BPDE depuis le PDF du [CPS](/blog/cps-cahier-prescriptions-speciales-maroc)
- **Vérification arithmétique automatique** — Détecte les incohérences entre sous-totaux et totaux
- **OCR N°1 mondial intégré** — Même les documents scannés sont extraits avec précision
- **Export Excel structuré** — Colonnes prêtes pour y ajouter votre sous-détail

> SplitGlass est soutenu par les programmes **Cloudflare Startup Program**, **GitHub Startup Pilot**, et **E2B** — une infrastructure cloud de niveau entreprise au service des PME marocaines.

---

## FAQ

### Le sous-détail des prix est-il obligatoire dans tous les marchés publics ?
Non, le sous-détail n'est obligatoire que lorsque le [CPS (Cahier des Prescriptions Spéciales)](/blog/cps-cahier-prescriptions-speciales-maroc) l'exige explicitement. Cependant, la commission d'appel d'offres peut le demander en cas de prix anormalement bas (Article 40 du Décret 2-22-431).

### Comment calculer le coefficient de majoration K ?
Le coefficient K s'obtient en additionnant les pourcentages de frais de chantier, frais généraux et marge bénéficiaire : K = 1 + %FC + %FG + %MBA. Par exemple, avec 20% de FC, 10% de FG et 8% de MBA : K = 1,38. Le prix unitaire = Déboursé Sec × 1,38.

### Quelle est la différence entre le sous-détail des prix et le détail estimatif ?
Le sous-détail des prix décompose chaque prix unitaire en ses composantes (main-d'œuvre, matériaux, matériel). Le [détail estimatif (DQE)](/blog/guide-dqe-marches-publics-maroc) multiplie ces prix unitaires par les quantités pour obtenir le montant total de l'offre. Ce sont deux niveaux différents d'analyse.

### Le sous-détail des prix s'applique-t-il aux marchés de services ?
Oui, mais la structure est adaptée. Pour les marchés de services, le sous-détail porte principalement sur les taux journaliers des experts, les frais de mission, les coûts logiciels et les frais de structure. Les composantes « matériaux » et « matériel lourd » sont généralement absentes.

### Comment gérer la révision des prix par rapport au sous-détail ?
Le sous-détail sert de base pour la [révision des prix](/blog/revision-prix-marches-publics-maroc). Les indices de révision s'appliquent aux composantes identifiées dans le sous-détail : indice salaires pour la main-d'œuvre, indices matériaux pour les fournitures, etc.

---

## Articles Connexes

- [Guide Complet du BPU 2026](/blog/guide-bpu-complet-2026) — Structure et erreurs fréquentes du Bordereau des Prix Unitaires
- [Guide du DQE](/blog/guide-dqe-marches-publics-maroc) — Comprendre le Détail Quantitatif et Estimatif
- [CPS : Cahier des Prescriptions Spéciales](/blog/cps-cahier-prescriptions-speciales-maroc) — Clauses techniques et administratives
- [BPDE : Bordereau des Prix Détail Estimatif](/blog/bpde-bordereau-prix-detail-estimatif-maroc) — Guide complet du BPDE
- [Révision des Prix](/blog/revision-prix-marches-publics-maroc) — Formules et application pratique
- [Répondre à un Appel d'Offres](/blog/repondre-appel-offres-maroc-2026) — Les 7 étapes clés

---

*À propos de SplitGlass — SplitGlass développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics au Maroc. Propulsé par un pipeline propriétaire de modèles IA fine-tunés, BP2XLS transforme les documents d'appels d'offres en données Excel structurées en moins de 30 secondes — travaux, services et fournitures. Fondé en 2025 par Hamza Atabrour. Contact : hamza [at] splitglass.com*
