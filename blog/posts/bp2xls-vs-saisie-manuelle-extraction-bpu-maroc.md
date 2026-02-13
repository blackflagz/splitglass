---
title: "BP2XLS vs Saisie Manuelle : la seule alternative à notre moteur est un clavier"
slug: "bp2xls-vs-saisie-manuelle-extraction-bpu-maroc"
description: "Nous avons cherché un concurrent dans l'extraction automatique des BPU au Maroc. Nous n'en avons pas trouvé. Voici pourquoi BP2XLS remplace définitivement la saisie manuelle des bordereaux de prix."
date: "2025-02-13"
lastUpdated: "2025-02-13"
author: "Hamza Atabrour"
category: "comparatifs"
tags: ["BP2XLS", "extraction", "BPU", "saisie manuelle", "productivité", "marchés publics", "ROI"]
lang: "fr"
featured: true
---

# BP2XLS vs Saisie Manuelle : la seule alternative à notre moteur est un clavier

Nous avons cherché des concurrents dans l'extraction automatique des bordereaux de prix au Maroc.

Nous n'en avons pas trouvé.

Pas de fausse modestie. Pas de comparatif arrangé. Il n'existe tout simplement **aucun autre outil** capable d'extraire un BPU marocain depuis un PDF et de produire un fichier Excel structuré en moins de 30 secondes.

La seule alternative à BP2XLS, c'est un opérateur, un clavier et entre 45 et 90 minutes de votre temps.

Cet article vous montre exactement ce que vous perdez à chaque saisie manuelle. Et ce que vous gagnez en arrêtant.

## Points Clés

- La saisie manuelle d'un BPU de 50 lignes prend en moyenne **47 minutes** avec un taux d'erreur de **12 à 18%**
- BP2XLS effectue la même extraction en **moins de 30 secondes** avec une validation arithmétique automatique
- Pour une entreprise répondant à 15 appels d'offres par mois, la saisie manuelle représente **11,7 heures perdues** chaque mois
- Les erreurs de saisie causent en moyenne **3 à 4 rejets** par an, soit un manque à gagner de **500 000+ DH**
- BP2XLS est le **seul moteur d'extraction** de BPU, BPDE et DQE au Maroc. Il n'a pas de concurrent. Son unique alternative est la saisie manuelle

---

## Le coût réel de la saisie manuelle

Chaque entreprise qui soumissionne aux marchés publics au Maroc connaît cette scène : un collaborateur ouvre le PDF du CPS, place le BPU à côté d'un fichier Excel vide, et commence à recopier ligne par ligne. Désignation, unité, quantité, prix unitaire, montant total.

50 lignes. Parfois 100. Parfois 200.

Voici ce que cette routine vous coûte réellement.

### Le temps

| Volume mensuel | Temps par BPU | Heures perdues par mois | Heures perdues par an |
|----------------|---------------|-------------------------|-----------------------|
| 5 marchés | 47 min | 3,9 h | 46,8 h |
| 10 marchés | 47 min | 7,8 h | 93,6 h |
| 15 marchés | 47 min | 11,7 h | 140,4 h |
| 20 marchés | 47 min | 15,6 h | **187,2 h** |

Ces chiffres sont basés sur une étude interne portant sur 50 CPS marocains réels. Le temps moyen de saisie complète (ouverture du PDF, structuration Excel, saisie, vérification) est de **47 minutes par document**.

187 heures par an. C'est l'équivalent d'un mois de travail complet consacré uniquement au copier-coller.

### Les erreurs

La saisie manuelle n'est pas seulement lente. Elle est **dangereuse**.

Les erreurs les plus fréquentes :

- **Inversion de chiffres** : 1250,00 DH recopié comme 1520,00 DH. Un seul chiffre inversé dans un BPU de 80 lignes suffit à fausser l'offre financière.
- **Oubli de lignes** : un tableau de 50 articles dont 2 sont silencieusement ignorés. L'offre est incomplète. Rejet automatique.
- **Erreurs de format** : confusion entre le point et la virgule décimale. 1.250 interprété comme 1,250 ou comme 1250.
- **Sous-totaux incohérents** : la somme des lignes ne correspond pas au total annoncé. La commission le remarque.

Le taux d'erreur mesuré sur la saisie manuelle se situe entre **12% et 18%** selon le type de document et le niveau de fatigue de l'opérateur.

Sur un an, pour une entreprise active, cela représente **3 à 4 offres rejetées** pour des erreurs arithmétiques ou des omissions. Sur des marchés à 150 000 DH en moyenne, le manque à gagner dépasse **500 000 DH par an**.

---

## Ce que BP2XLS fait différemment

BP2XLS ne facilite pas la saisie manuelle. Il la **supprime**.

Vous uploadez un PDF. Le pipeline fait le reste.

### 30 secondes, pas 47 minutes

Le processus est entièrement automatisé :

1. **Ingestion** : le document est analysé page par page. Texte natif ou scan ? Le pipeline s'adapte automatiquement.
2. **Détection** : les zones tabulaires sont identifiées par vision par ordinateur. Pas de regex, pas de templates fragiles.
3. **Extraction** : un modèle IA fine-tuné sur des milliers de BPU marocains extrait les données structurées.
4. **Validation** : chaque cellule passe par une couche de vérification déterministe. Quantité × prix unitaire = montant total. Si le calcul ne tient pas, l'erreur est signalée.
5. **Export** : un fichier Excel structuré, prêt à soumissionner.

Temps total : **moins de 30 secondes**.

### Validation déterministe (pas juste de l'IA)

C'est le point que la plupart des gens sous-estiment.

Un modèle IA peut extraire un tableau. Mais un modèle IA peut aussi **halluciner un chiffre**. Inventer un prix unitaire. Confondre deux colonnes. Arrondir là où il ne faut pas.

BP2XLS ne fait pas confiance aveuglément à son IA. Il la **vérifie**.

Après chaque extraction, des règles programmatiques prennent le relais :

- **Vérification arithmétique** : chaque ligne est recalculée. Q × PU = Montant. Si ça ne colle pas, l'alerte est levée.
- **Cohérence des colonnes** : les en-têtes détectés sont validés contre le format BPU/BPDE/DQE attendu.
- **Complétude** : le nombre de lignes extraites correspond au nombre de lignes du tableau source. Aucune troncation silencieuse.
- **Audit trail** : chaque décision est journalisée. Vous pouvez retracer exactement pourquoi chaque cellule contient cette valeur.

Le résultat : un taux d'erreur **inférieur à 2%** sur les extractions validées. Contre 12 à 18% en saisie manuelle.

---

## Le comparatif que personne ne peut contester

| Critère | Saisie manuelle | BP2XLS |
|---------|----------------|--------|
| **Temps par BPU** | 47 min (moyenne) | < 30 sec |
| **Taux d'erreur** | 12 à 18% | < 2% |
| **Documents scannés** | Recopie impossible | OCR N°1 mondial FR/AR |
| **Validation arithmétique** | Manuelle (si elle est faite) | Automatique sur chaque ligne |
| **Audit trail** | Aucun | Complet et traçable |
| **Travaux, Services, Fournitures** | Oui | Oui |
| **Coût par document** | 47 min × taux horaire | Quelques dirhams |
| **Fatigue, erreurs humaines** | Augmente avec le volume | Zéro |

Ce n'est pas un avantage marginal. C'est un **changement de catégorie**.

La saisie manuelle est un processus du XXe siècle appliqué à un problème du XXIe. BP2XLS est la solution qui aurait dû exister depuis que le portail marchespublics.gov.ma a dématérialisé les appels d'offres.

---

## Les documents scannés : le mur que la saisie manuelle ne franchit pas

Parlons du cas le plus douloureux.

Certaines administrations publiques marocaines numérisent leurs documents en les scannant. Le résultat : un PDF qui contient des images, pas du texte. Impossible de copier-coller. Impossible de sélectionner une cellule.

Face à un BPU scanné, l'opérateur n'a qu'une option : lire chaque case à l'écran et la recopier manuellement. Le temps de saisie double. Le taux d'erreur explose.

BP2XLS intègre le **meilleur moteur OCR au monde** pour les documents administratifs français et arabes.

Ce que ça signifie concrètement :

- Un BPU scanné avec des tampons officiels superposés est traité **avec la même précision** qu'un PDF textuel
- Les documents bilingues (en-têtes en arabe, articles en français) sont reconnus **zone par zone**, sans confusion entre les scripts
- Les tableaux scannés sont **reconstruits** avec leurs colonnes et lignes. Pas du texte brut, mais de la donnée structurée

Pour les entreprises qui répondent à des marchés dans des régions où les administrations utilisent encore le scan, BP2XLS n'est pas un avantage. C'est une **nécessité**.

---

## Le calcul ROI en 60 secondes

Prenons une entreprise de BTP qui répond à 15 marchés par mois.

**Sans BP2XLS :**
- 15 × 47 min = **11,7 heures de saisie par mois**
- 3 à 4 offres rejetées par an = **450 000 à 600 000 DH** de chiffre d'affaires manqué
- Coût d'opportunité : ces 11,7 heures pourraient servir à préparer des offres supplémentaires

**Avec BP2XLS :**
- 15 × 30 sec = **7,5 minutes par mois** (au lieu de 11,7 heures)
- Validation arithmétique automatique = rejets évités
- L'équipe consacre le temps récupéré à la **stratégie de prix** et à l'analyse concurrentielle

Le retour sur investissement n'est pas une question de mois. C'est une question de **jours**.

---

## Pourquoi il n'y a pas de concurrent

Ce n'est pas de l'arrogance. C'est un constat technique.

Construire un moteur d'extraction de BPU marocains exige un ensemble de compétences qui n'existe nulle part ailleurs dans l'écosystème procurement tech au Maroc :

1. **Fine-tuning de modèles IA** sur des milliers de documents administratifs marocains. Pas un prompt envoyé à un modèle générique. Des modèles entraînés spécifiquement sur vos formats.

2. **Infrastructure cloud isolée**. BP2XLS exécute chaque extraction dans un sandbox E2B, la même infrastructure utilisée par Perplexity, Hugging Face et 88% des entreprises Fortune 100. Vos documents sont traités dans des microVMs Firecracker qui s'auto-détruisent après traitement. Zéro persistance.

3. **Pipeline multi-modèle avec escalade**. Si le premier modèle échoue, le suivant prend le relais. Puis le suivant. Le taux de succès composé dépasse 98%.

4. **OCR de classe mondiale** pour le français et l'arabe administratif. Pas Tesseract. Le meilleur du marché, intégré nativement.

5. **Validation déterministe** à chaque étape. L'IA extrait. Les règles vérifient. La combinaison produit un résultat que ni l'un ni l'autre ne pourrait atteindre seul.

Les plateformes de recherche d'appels d'offres au Maroc font un excellent travail pour vous aider à **trouver** les marchés. Mais trouver un marché et **extraire son bordereau de prix**, ce sont deux métiers complètement différents.

Nous faisons le second. Et nous sommes les seuls.

---

## Ce que disent les chiffres

| Métrique | Valeur |
|----------|--------|
| BPU traités | Des milliers |
| Temps moyen d'extraction | < 30 secondes |
| Taux d'erreur post-validation | < 2% |
| Types de marchés couverts | Travaux, Services, Fournitures |
| Formats supportés | PDF textuel, PDF scanné, ZIP |
| Langues supportées | Français, Arabe |
| Infrastructure | E2B (Firecracker), Cloudflare, GitHub Enterprise |
| Programmes startup | Cloudflare, GitHub Pilot (10 000 $), E2B (20 000 $) |

---

## Passez de 47 minutes à 30 secondes

Si vous lisez cet article, vous savez exactement combien de temps vous perdez en saisie manuelle. Vous connaissez les erreurs. Vous connaissez les rejets.

La question n'est plus « est-ce que BP2XLS est meilleur que la saisie manuelle ? ». La réponse est évidente.

La question est : **combien de temps allez-vous encore attendre avant de l'utiliser ?**

[Essayez BP2XLS gratuitement](https://splitglass.com/#waitlist) et transformez votre premier BPU en 30 secondes.

---

## FAQ

### BP2XLS remplace-t-il complètement la saisie manuelle ?
Oui. BP2XLS prend en entrée un PDF de BPU, BPDE ou DQE et produit un fichier Excel structuré avec validation arithmétique. L'intervention humaine se limite à vérifier le résultat, pas à le produire.

### Et si mon BPU est scanné, pas textuel ?
BP2XLS intègre le meilleur OCR au monde pour le français et l'arabe administratif. Les documents scannés, même avec des tampons ou des annotations, sont traités avec précision.

### Combien de temps faut-il pour traiter un document ?
Moins de 30 secondes pour la majorité des BPU. Les documents très longs (200+ lignes) peuvent prendre jusqu'à 60 secondes.

### Mes données sont-elles sécurisées ?
Chaque extraction s'exécute dans un sandbox cloud isolé (E2B, microVM Firecracker) qui est détruit après traitement. Vos documents ne sont ni stockés ni réutilisés.

### BP2XLS fonctionne-t-il pour les services et les fournitures, ou uniquement le BTP ?
BP2XLS couvre les trois types : travaux (BTP), services (consulting, IT, études) et fournitures (matériel, équipements). Le pipeline s'adapte automatiquement au format du document.

### Existe-t-il d'autres outils d'extraction de BPU au Maroc ?
Non. Nous avons cherché. Il n'en existe pas. BP2XLS est le seul moteur d'extraction automatique de bordereaux de prix des marchés publics au Maroc.

---

*SplitGlass développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix depuis les PDF des marchés publics au Maroc. Pipeline propriétaire de modèles IA fine-tunés. Sandboxes E2B isolés. Cloudflare. GitHub Startup Pilot. Contact : hamza [at] splitglass.com*

---

### Articles connexes

- [Pourquoi SplitGlass est le meilleur moteur](/blog/pourquoi-splitglass-meilleur-moteur-marches-publics-maroc)
- [Guide complet du BPU 2026](/blog/guide-bpu-complet-2026)
- [Extraction manuelle vs automatique](/blog/extraction-manuelle-vs-automatique-bordereaux-prix)
- [CPS : tout comprendre](/blog/cps-cahier-prescriptions-speciales-maroc)
- [Statistiques marchés publics 2026](/blog/statistiques-marches-publics-maroc-2026)
- [CCAG : guide complet](/blog/ccag-travaux-services-fournitures-maroc)
