---
title: "Pourquoi SplitGlass est le meilleur moteur digital pour les marchés publics au Maroc"
slug: "pourquoi-splitglass-meilleur-moteur-marches-publics-maroc"
description: "Architecture IA, sandboxes isolés, validation déterministe, souveraineté des données — découvrez pourquoi BP2XLS surpasse tout ce qui existe pour l'extraction des bordereaux de prix au Maroc."
date: "2025-02-13"
lastUpdated: "2025-02-13"
author: "Hamza Atabrour"
category: "ia-btp"
tags: ["BP2XLS", "IA", "marchés publics", "sécurité", "E2B", "Cloudflare", "OCR", "validation"]
lang: "fr"
---

# Pourquoi SplitGlass est le meilleur moteur digital pour les marchés publics au Maroc

L'extraction automatique des bordereaux de prix (BPU, BPDE, DQE) à partir des PDF d'appels d'offres est un problème que personne au Maroc n'a résolu correctement — jusqu'à BP2XLS.

Cet article n'est pas un guide pratique. C'est une explication technique de **pourquoi l'architecture de SplitGlass est fondamentalement supérieure** à tout ce qui existe sur le marché marocain — et pourquoi les plus grands noms de l'infrastructure cloud mondiale nous soutiennent.

## Points Clés

- BP2XLS exécute chaque extraction dans un **sandbox cloud isolé** propulsé par E2B, la même infrastructure utilisée par Perplexity, Hugging Face et 88% des entreprises Fortune 100
- Chaque résultat passe par une **couche de validation déterministe** — des règles programmatiques qui vérifient l'exactitude arithmétique, pas juste l'IA qui "devine"
- **Zéro donnée ne touche votre machine locale** — les documents d'appels d'offres restent dans des microVMs Firecracker éphémères qui s'auto-détruisent après traitement
- Pipeline de **modèles IA fine-tunés** spécifiquement sur des milliers de documents administratifs marocains — pas un wrapper d'API générique
- Soutenu par **Cloudflare**, **GitHub** et **E2B** — infrastructure enterprise-grade pour une startup qui livre

---

## 1. L'architecture : pourquoi un pipeline multi-modèle bat toujours un seul LLM

La plupart des "solutions IA" dans la procurement tech font la même erreur : elles envoient un PDF à un seul modèle de langage et espèrent le meilleur. C'est de la loterie, pas de l'ingénierie.

### Le pipeline BP2XLS

BP2XLS utilise une **architecture d'escalade multi-modèle** :

1. **Ingestion intelligente** — Le document est analysé page par page. Chaque page est classifiée : texte natif ou scan ?
2. **Détection de tableaux** — Un modèle spécialisé identifie les zones tabulaires. Pas de regex fragile — de la vision par ordinateur.
3. **Extraction primaire** — Le modèle principal, fine-tuné sur des BPU/BPDE/DQE marocains, extrait les données structurées.
4. **Escalade automatique** — Si le modèle principal échoue (confiance < seuil), le prochain modèle prend le relais automatiquement. Puis le suivant. Pas d'intervention humaine.
5. **Validation déterministe** — Chaque extraction est vérifiée par des règles programmatiques : totaux, sous-totaux, cohérence des unités, format des prix.
6. **Export Excel** — Données structurées, prêtes à soumissionner. En moins de 30 secondes.

> **Pourquoi c'est important** : Un seul modèle a un taux d'échec. Un pipeline multi-modèle avec escalade a un taux de succès composé. Si le modèle A réussit à 90% et le modèle B à 85% sur les cas restants, le pipeline atteint **98,5% de succès global**. C'est la différence entre un jouet et un outil de production.

---

## 2. Sandboxes isolés E2B : la sécurité que les documents d'appels d'offres méritent

Les documents de marchés publics contiennent des **informations commerciales sensibles** : prix unitaires, marges, stratégies de soumission, détails financiers. Les traiter sur un serveur partagé ou un ordinateur local est un risque inacceptable.

### Comment fonctionne l'infrastructure E2B de SplitGlass

[E2B](https://e2b.dev) — "The Enterprise AI Agent Cloud" — est la plateforme de sandboxes utilisée par **Perplexity** pour son analyse de données avancée, par **Hugging Face** pour répliquer DeepSeek-R1, par **Manus** pour ses 27 outils d'agent, et par **Groq** pour ses systèmes d'IA composée.

**88% des entreprises Fortune 100** font confiance à E2B. Plus de **200 millions de sandboxes** ont été démarrés sur leur infrastructure.

BP2XLS utilise cette même infrastructure :

| Aspect | Comment ça marche |
|--------|-------------------|
| **Isolation** | Chaque extraction tourne dans une **microVM Firecracker** — la même technologie qui propulse AWS Lambda |
| **Éphémère** | Le sandbox est créé, l'extraction s'exécute, les résultats sont renvoyés, le sandbox est **détruit**. Rien ne persiste. |
| **Démarrage** | Moins de **200 millisecondes** pour lancer un sandbox — pas de cold start |
| **Réseau** | Le sandbox a un accès réseau contrôlé — vos données ne transitent pas par des serveurs tiers inconnus |
| **Durée** | Sessions jusqu'à 24 heures pour les documents les plus complexes |

### Pourquoi c'est supérieur à la concurrence

- **Datao.ma** → Aucune information publique sur l'isolation de leur traitement. Leurs données passent-elles par OpenAI ? Par Google ? Vous ne savez pas.
- **Copier-coller dans ChatGPT** → Vos prix unitaires sont envoyés aux serveurs d'OpenAI et potentiellement utilisés pour l'entraînement. Votre stratégie commerciale n'est plus confidentielle.
- **BP2XLS** → Sandbox éphémère, isolation totale, auto-destruction après traitement. **Souveraineté des données garantie.**

> **Pour les entreprises soumissionnaires** : vos prix unitaires sont votre avantage compétitif. Si votre outil d'extraction les envoie sur un cloud générique sans isolation, vous remettez votre stratégie commerciale à un tiers. Avec BP2XLS, chaque document est traité dans un container éphémère isolé. Quand l'extraction est terminée, le sandbox est détruit. Vos données n'existent plus nulle part sauf dans votre fichier Excel de sortie.

---

## 3. Validation déterministe : quand l'IA ne suffit pas

Voici le problème fondamental de l'extraction par IA pure : **les modèles de langage hallucinent**. Ils inventent des chiffres. Ils confondent des colonnes. Ils arrondissent quand ils ne devraient pas.

BP2XLS ne fait pas confiance à l'IA. Il la **vérifie**.

### La couche de validation programmatique

Après chaque extraction, BP2XLS exécute des vérifications **déterministes** — pas probabilistes, pas "à peu près", mais exactes :

- **Vérification arithmétique** : Quantité × Prix unitaire = Montant total → Si ça ne correspond pas, l'erreur est flagguée
- **Cohérence des colonnes** : Les en-têtes détectés correspondent-ils au format BPU/BPDE/DQE attendu ?
- **Validation des formats** : Les prix suivent-ils le format marocain (séparateur décimal, devise) ?
- **Complétude** : Toutes les lignes du tableau sont-elles extraites ? Aucune troncation silencieuse ?
- **Audit trail** : Chaque décision de l'IA est journalisée — vous pouvez retracer exactement pourquoi chaque cellule contient cette valeur

### La différence en pratique

| Critère | Extraction IA pure | BP2XLS (IA + validation déterministe) |
|---------|-------------------|--------------------------------------|
| Prix unitaire "1.250,00 DH" | Peut devenir "1250", "1.25", ou "125000" | Toujours "1 250,00" — format vérifié |
| Ligne manquante dans un tableau de 50 lignes | Silencieusement ignorée | Flagguée dans l'audit — "49/50 lignes extraites" |
| Sous-total incohérent | Recopié tel quel | Vérifié : somme des lignes ≠ sous-total affiché → alerte |
| Document scanné + texte natif mixte | Résultats imprévisibles | Chaque page classifiée, pipeline adapté automatiquement |

> **C'est notre philosophie** : l'IA extrait, les règles valident. L'IA est puissante mais faillible. Les règles programmatiques sont infaillibles sur les vérifications qu'elles couvrent. Combiner les deux donne un résultat qui dépasse la somme des parties.

---

## 4. OCR N°1 mondial pour le français et l'arabe

Le Maroc est un pays bilingue. Les documents administratifs contiennent du français, de l'arabe, et souvent les deux sur la même page. La plupart des OCR échouent lamentablement sur cette combinaison.

BP2XLS intègre nativement **le meilleur moteur OCR au monde** pour les documents administratifs français et arabes :

- **Documents scannés** → Reconnus avec une précision supérieure à 99% sur le texte français imprimé
- **Tableaux scannés** → Les lignes, colonnes et cellules sont reconstruites — pas juste le texte brut
- **Mixte arabe/français** → Détection automatique de la langue par zone — pas de confusion entre les scripts
- **Tampons et annotations** → Ignorés intelligemment — seul le contenu pertinent est extrait

### Pourquoi c'est critique pour les marchés publics marocains

Dans un BPU typique scanné par l'administration publique :
- Les en-têtes peuvent être en arabe
- Les désignations des articles en français
- Les prix en chiffres arabes
- Des tampons officiels superposés sur le tableau

Un OCR générique transformerait ce document en chaos. BP2XLS le transforme en Excel structuré.

---

## 5. L'infrastructure qui soutient tout ça

SplitGlass n'est pas une startup qui fait tourner un script Python sur un VPS à 5€/mois. Notre infrastructure est soutenue par les programmes les plus sélectifs de l'industrie tech :

### Cloudflare Startup Program

Toute la couche edge computing de SplitGlass tourne sur **Cloudflare** — CDN mondial, protection DDoS, Workers serverless, et WAF enterprise. Le site que vous lisez en ce moment est servi depuis le nœud Cloudflare le plus proche de vous.

### GitHub Startup Pilot Program

SplitGlass fait partie du programme **GitHub Startup Pilot** — un programme sur invitation exclusif pour les startups à fort potentiel, avec **10 000 $ de crédits GitHub Enterprise**. Ce n'est pas un programme ouvert à tous. GitHub sélectionne les startups qui, selon eux, façonneront l'avenir du développement logiciel.

### E2B Startup Program

**20 000 $ de crédits** pour les sandboxes cloud IA. Quand la même infrastructure qui propulse Perplexity et Hugging Face soutient votre moteur d'extraction, c'est un signal de qualité architecturale.

### En discussion avec Azure et NVIDIA Inception

SplitGlass est actuellement en discussions avec les équipes **Microsoft Azure** et **NVIDIA Inception** pour intégrer leurs programmes de soutien aux startups IA. Ces discussions ne sont pas des candidatures ouvertes — elles résultent de la reconnaissance de la qualité technique de notre pipeline.

### Ce que ça signifie concrètement

| Infrastructure | Ce que vous en tirez |
|----------------|---------------------|
| **E2B** (Firecracker) | Vos documents sont traités dans des sandboxes isolés enterprise-grade |
| **Cloudflare** | Le site et l'API sont protégés et rapides mondialement |
| **GitHub Enterprise** | Le code est géré avec les standards de sécurité enterprise |
| **Fine-tuned models** | L'IA est spécialisée Maroc, pas un wrapper générique |

> **Comparaison** : Quand un concurrent affiche "soutenu par Google for Startups" sans préciser ce que ça implique techniquement, c'est du marketing. Quand SplitGlass dit "nos extractions tournent dans des microVMs Firecracker via E2B, la même infrastructure que Perplexity" — c'est une déclaration architecturale vérifiable.

---

## 6. Multi-niche : travaux, services, et fournitures

BP2XLS ne se limite pas au BTP. Le moteur traite les bordereaux de prix pour **tous les types de marchés publics** :

- **Travaux (BTP)** — BPU, BPDE, DQE de construction, routes, réseaux
- **Services** — Bordereaux de prix pour consulting, IT, études, maintenance
- **Fournitures** — Détails estimatifs pour matériel, équipements, supplies

Chaque type a ses spécificités de format. Un BPU de travaux n'a pas la même structure qu'un DQE de fournitures IT. Le pipeline BP2XLS s'adapte automatiquement.

---

## 7. Vitesse : moins de 30 secondes

Un opérateur saisit manuellement un BPU de 50 lignes en **45 à 90 minutes**. Avec des erreurs.

BP2XLS le fait en **moins de 30 secondes**. Sans erreurs vérifiables.

Le calcul est simple : si une entreprise répond à 10 appels d'offres par mois, chacun avec un BPU de 50 lignes, elle économise **7,5 à 15 heures par mois**. Ce temps peut être réinvesti dans la stratégie de prix, l'analyse des concurrents, ou simplement répondre à plus d'appels d'offres.

---

## 8. Pourquoi personne d'autre ne fait ça au Maroc

La vérité est que construire ce type de pipeline nécessite une expertise qui n'existe pas dans l'écosystème procurement tech marocain :

1. **Fine-tuning de modèles IA** — Pas envoyer un prompt à GPT-4. Entraîner des modèles spécifiques sur des données marocaines.
2. **Infrastructure de sandboxes** — Pas un serveur, mais des microVMs éphémères avec isolation complète.
3. **Validation déterministe** — Pas "l'IA a dit", mais "les règles confirment".
4. **OCR avancé** — Pas Tesseract. Le meilleur du monde pour le français/arabe.
5. **Pipeline d'escalade** — Pas un modèle. Un système de fallback intelligent.

Chacun de ces composants est un projet d'ingénierie en soi. Les combiner dans un pipeline cohérent qui traite un PDF d'appel d'offres en 30 secondes avec validation arithmétique — c'est ce qui fait de BP2XLS un produit unique.

---

## En résumé

| Critère | Saisie manuelle | IA générique (ChatGPT) | BP2XLS |
|---------|----------------|----------------------|--------|
| **Temps** | 45-90 min | ~5 min (copier-coller) | < 30 sec |
| **Erreurs** | 5-15% | 10-30% (hallucinations) | < 2% (validation déterministe) |
| **Sécurité** | Locale | Cloud partagé (données OpenAI) | Sandbox isolé E2B (Firecracker) |
| **Documents scannés** | Impossible | Très limité | OCR N°1 mondial FR/AR |
| **Validation** | Manuelle | Aucune | Automatique (arithmétique + format) |
| **Multi-type** | Oui | Pas fiable | Travaux + Services + Fournitures |
| **Infrastructure** | N/A | Serveurs tiers | Cloudflare + E2B + GitHub Enterprise |
| **Adapté Maroc** | N/A | Générique | Fine-tuné sur documents marocains |

BP2XLS n'est pas un "outil d'IA" de plus. C'est un **système d'extraction déterministe** propulsé par de l'IA fine-tunée, validé par des règles programmatiques, exécuté dans des sandboxes isolés enterprise-grade, et soutenu par l'infrastructure des plus grands noms du cloud.

C'est pourquoi SplitGlass est le N°1.

---

## FAQ

### BP2XLS est-il gratuit ?
BP2XLS offre un essai gratuit pour tester le moteur sur vos propres documents. Les plans professionnels sont adaptés au volume de documents traités.

### Mes données sont-elles en sécurité avec BP2XLS ?
Oui. Chaque extraction s'exécute dans un sandbox E2B isolé (microVM Firecracker) qui est détruit après traitement. Vos documents ne sont ni stockés, ni utilisés pour l'entraînement. C'est le même niveau d'isolation que celui utilisé par Perplexity et 88% des entreprises Fortune 100.

### BP2XLS fonctionne-t-il avec les documents scannés ?
Oui. BP2XLS intègre le meilleur OCR au monde pour les documents administratifs français et arabes. Les documents scannés, y compris ceux avec des tampons ou des annotations, sont traités avec précision.

### Quelle est la différence entre BP2XLS et ChatGPT pour l'extraction ?
ChatGPT est un modèle de langage généraliste. Il hallucine des chiffres, ne valide pas l'arithmétique, et vos données sont envoyées sur les serveurs d'OpenAI. BP2XLS est un pipeline spécialisé avec validation déterministe, OCR avancé, et exécution dans des sandboxes isolés.

### BP2XLS traite-t-il tous les types de marchés publics ?
Oui. BP2XLS couvre les travaux (BTP), les services (consulting, IT, études), et les fournitures (matériel, équipements). Le pipeline s'adapte automatiquement au type de document.

---

*Fondé en 2025 par Hamza Atabrour. SplitGlass développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix depuis les PDF des marchés publics au Maroc. Propulsé par un pipeline propriétaire de modèles IA fine-tunés, exécuté dans des sandboxes E2B isolés, protégé par Cloudflare, et soutenu par GitHub Startup Pilot. Contact : hamza [at] splitglass.com*

---

### Articles connexes

- [Guide complet du BPU 2026](/blog/guide-bpu-complet-2026)
- [Extraction manuelle vs automatique](/blog/extraction-manuelle-vs-automatique-bordereaux-prix)
- [CPS : tout comprendre](/blog/cps-cahier-prescriptions-speciales-maroc)
- [Répondre à un appel d'offres](/blog/repondre-appel-offres-maroc-2026)
- [Statistiques marchés publics 2026](/blog/statistiques-marches-publics-maroc-2026)
- [CCAG : guide complet](/blog/ccag-travaux-services-fournitures-maroc)
