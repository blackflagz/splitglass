
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.about": "About",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.waitlist": "Join Waitlist",

    // Hero
    "hero.launching": "Private Beta",
    "hero.morocco": "Morocco's Tender",
    "hero.autonomous": "Preflight",
    "hero.engine": "Copilot.",
    "hero.desc": "From CPS/BPU/DQE chaos to bid-ready intelligence: qualification checks, compliance checklist, risk flags, and clean Excel outputs.",
    "hero.bullet1": "Built for Moroccan tender formats (PDF, DOCX, ZIP, scans)",
    "hero.bullet2": "Audit trail and arithmetic checks",
    "hero.bullet3": "Designed for SMEs bidding 4–15 tenders/month",
    "hero.cta": "Request Pilot",
    "hero.cta2": "Get Early Access",
    "hero.social": "Join 50+ procurement professionals waiting for launch",
    "hero.success": "You're on the list!",
    "hero.success_desc": "Thanks for joining. We'll notify you as soon as early access opens.",

    // UseCases
    "prob.tag": "The Problem",
    "prob.title": "System Bottlenecks Detected",
    "prob.subtitle": "Manual processing is the critical failure point in modern tender workflows.",
    "prob.time": "TIME_LOSS",
    "prob.time_sub": "8-15 Hours/Tender",
    "prob.time_desc": "Manual extraction blocks strategic analysis. Human bandwidth wasted on data entry.",
    "prob.friction": "DATA_FRICTION",
    "prob.friction_sub": "Copy-Paste Hell",
    "prob.friction_desc": "Locked PDFs require manual transposition. High risk of formatting decay and mental fatigue.",
    "prob.system": "SYSTEM_FAIL",
    "prob.system_sub": "Missed Deadlines",
    "prob.system_desc": "Lack of centralized tracking leads to critical submission dates slipping through the cracks.",
    "prob.risk": "CRITICAL_RISK",
    "prob.risk_sub": "Costly Errors",
    "prob.risk_desc": "Single digit unit price variance destroys project margins. Manual verification is unreliable.",

    // Features
    "feat.tag": "The Solution",
    "feat.title": "SPLITGLASS makes tender processing effortless",
    "feat.subtitle": "Automate the busywork so you can focus on winning the bid.",
    "feat.core": "Extraction Layer",
    "feat.engine": "BP2XLS Engine",
    "feat.engine_sub": "(Extraction Layer)",
    "feat.engine_desc": "Our extraction engine identifies, extracts, and validates pricing tables from PDF to Excel. It is one component of a larger Tender Intelligence workflow that includes qualification, compliance, and audit.",
    "feat.context": "Contextual Parsing",
    "feat.native": "Native Excel Output",
    "feat.discovery": "Tender Discovery",
    "feat.discovery_desc": "All Moroccan tenders in one feed — PMMP, MTPNET, and regional portals aggregated for you.",
    "feat.alerts": "Smart Alerts",
    "feat.alerts_desc": "Never miss a deadline. Get automated notifications for submission dates and clarifications.",
    "feat.tracking": "Bid Tracking",
    "feat.tracking_desc": "Track all your submissions in one centralized dashboard. Know exactly where you stand.",
    "feat.explore": "Explore Feature",

    // How It Works
    "work.tag": "The Workflow",
    "work.title": "From PDF to Excel in seconds",
    "work.subtitle": "Complex pricing tables extracted with 100% column fidelity.",
    "work.step1": "Upload PDF",
    "work.step1_desc": "Drag & drop your tender document. Our targeting system locks onto the file structure instantly.",
    "work.step2": "AI Extraction",
    "work.step2_desc": "The neural engine identifies pricing tables, separating headers from data and ignoring noise.",
    "work.step3": "Download XLS",
    "work.step3_desc": "Receive a perfectly formatted Excel file, compiled and ready for analysis.",

    // Stats
    "stats.analyzed": "Tender documents analyzed",
    "stats.time": "Average extraction time",
    "stats.accuracy": "Accuracy on complex tables",

    // Pricing
    "price.tag": "Pricing",
    "price.title": "Simple, outcome-based pricing",
    "price.starter": "Starter",
    "price.starter_desc": "Pay per tender. Ideal for occasional bidders.",
    "price.starter_price": "From 500 MAD",
    "price.starter_period": "/tender",
    "price.pro": "Pro",
    "price.pro_desc": "Monthly plan for teams bidding regularly.",
    "price.pro_price": "1,000 – 5,000 MAD",
    "price.pro_period": "/month",
    "price.ent": "Enterprise",
    "price.ent_desc": "Custom volume pricing for large firms.",
    "price.contact": "Contact us",
    "price.cta_start": "Request Pilot",
    "price.cta_join": "Get Early Access",
    "price.cta_contact": "Contact Sales",

    // Contact
    "contact.tag": "Get in Touch",
    "contact.title": "Ready to optimize your workflow?",
    "contact.subtitle": "Send us a message and we'll get back to you within 24 hours.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message Sent",
    "contact.success_desc": "We have received your message and will contact you shortly.",

    // FAQ
    "faq.tag": "FAQ",
    "faq.title": "Common Questions",
    "faq.q1": "Does it work with all BPU formats?",
    "faq.a1": "Yes, our AI handles various BPU/DQE formats used in Moroccan public tenders including BPDE, Bordereau de Prix, and DQE tables.",
    "faq.q2": "Are my documents secure?",
    "faq.a2": "Yes, all uploads are encrypted and processed securely. We don't store your documents after extraction unless you choose to save them in your dashboard.",
    "faq.q3": "Which portals do you support?",
    "faq.a3": "We aggregate tenders from PMMP, MTPNET, and major regional procurement portals across Morocco.",
    "faq.q4": "Can I integrate SPLITGLASS with my ERP?",
    "faq.a4": "Enterprise plans include API access for custom integrations with your existing systems like Sage, Odoo, or proprietary ERPs.",
    "faq.q5": "What languages are supported?",
    "faq.a5": "French and Arabic documents are fully supported.",

    // Footer
    "foot.desc": "Tender intelligence for Moroccan public procurement. Qualification, compliance, extraction, and audit — in one workflow.",
    "foot.prod": "Product",
    "foot.comp": "Company",
    "foot.legal": "Legal",
    "foot.how": "How it works",
    "foot.blog": "Blog",
    "foot.terms": "Terms of Service",
    "foot.privacy": "Privacy Policy",
    "foot.startup": "Program Verification",
    "foot.about": "SplitGlass is a Morocco-based startup building the N°1 tender intelligence platform for public procurement — covering construction, services, and supplies.",

    // What You Get
    "wyg.tag": "What You Get",
    "wyg.title": "End-to-end tender preparation",
    "wyg.subtitle": "Four capabilities that turn raw tender documents into bid-ready intelligence.",
    "wyg.card1_title": "Go/No-Go Fit Score",
    "wyg.card1_desc": "Instant qualification analysis to help you decide whether a tender is worth pursuing before investing hours.",
    "wyg.card2_title": "Compliance Checklist",
    "wyg.card2_desc": "Automatically extract required documents, guarantees, and deadlines so nothing slips through the cracks.",
    "wyg.card3_title": "BPU/DQE Extraction",
    "wyg.card3_desc": "Pricing tables extracted to bid-ready Excel with column fidelity, ready for your estimating team.",
    "wyg.card4_title": "Audit & Risk Flags",
    "wyg.card4_desc": "Totals mismatch detection, missing line alerts, and noisy row filtering to de-risk your submission.",

    // Who It's For
    "wif.tag": "Who It's For",
    "wif.title": "Built for Moroccan tender teams",
    "wif.subtitle": "Whether you bid on 4 or 15 tenders a month, SplitGlass saves you hours per submission.",
    "wif.item1": "Construction & engineering firms",
    "wif.item2": "Bureaux d'études",
    "wif.item3": "Tender consultants",
    "wif.item4": "Morocco-first, French/Arabic workflows",

    // Trust / Security
    "trust.tag": "Security",
    "trust.title": "Security & data handling",
    "trust.subtitle": "Your tender documents contain sensitive pricing data. We treat them accordingly.",
    "trust.item1": "Isolated sandbox processing",
    "trust.item1_desc": "Each document is processed in an ephemeral, isolated environment that is destroyed after use.",
    "trust.item2": "Auto-deletion policy",
    "trust.item2_desc": "Uploaded files are automatically purged after processing. Nothing lingers on our servers.",
    "trust.item3": "No training on client files",
    "trust.item3_desc": "Your proprietary pricing data is never used to train or improve any models.",
    "trust.item4": "Audit-ready output",
    "trust.item4_desc": "Every extraction includes a full audit trail so you can verify results with confidence.",

    // Waitlist CTA
    "cta.tag": "Join the waitlist",
    "cta.title": "Be the first to know",
    "cta.title_sub": "when we launch.",
    "cta.desc": "Join the waitlist and get exclusive early access. We respect your privacy. No spam, just launch updates.",
    "cta.comp_ph": "Company Name (Optional)",
    "cta.email_ph": "engineer@firm.com",
    "cta.btn": "Join",
    "cta.another": "Register another email"
  },
  fr: {
    "nav.about": "À propos",
    "nav.pricing": "Tarifs",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.waitlist": "Rejoindre la liste",

    "hero.launching": "Bêta Privée",
    "hero.morocco": "Copilote Marocain",
    "hero.autonomous": "de Préparation",
    "hero.engine": "d'Appels d'Offres.",
    "hero.desc": "Du chaos CPS/BPU/DQE à l'intelligence de soumission : vérifications de qualification, checklist de conformité, alertes de risques et sorties Excel propres.",
    "hero.bullet1": "Conçu pour les formats d'appels d'offres marocains (PDF, DOCX, ZIP, scans)",
    "hero.bullet2": "Piste d'audit et vérifications arithmétiques",
    "hero.bullet3": "Pensé pour les PME soumissionnant 4 à 15 appels/mois",
    "hero.cta": "Demander un Pilote",
    "hero.cta2": "Accès Anticipé",
    "hero.social": "Rejoignez +50 professionnels en attente du lancement",
    "hero.success": "Vous êtes sur la liste !",
    "hero.success_desc": "Merci. Nous vous informerons dès l'ouverture de l'accès anticipé.",

    "prob.tag": "Le Problème",
    "prob.title": "Goulets d'Étranglement Détectés",
    "prob.subtitle": "Le traitement manuel est le point de défaillance critique des flux de travail modernes.",
    "prob.time": "PERTE_TEMPS",
    "prob.time_sub": "8-15 Heures/Appel",
    "prob.time_desc": "L'extraction manuelle bloque l'analyse stratégique. Gaspillage de ressources sur la saisie de données.",
    "prob.friction": "FRICTION_DONNÉES",
    "prob.friction_sub": "Enfer du Copier-Coller",
    "prob.friction_desc": "Les PDF nécessitent une transposition manuelle. Haut risque de perte de formatage et fatigue mentale.",
    "prob.system": "ÉCHEC_SYSTÈME",
    "prob.system_sub": "Délais Manqués",
    "prob.system_desc": "Le manque de suivi centralisé conduit à manquer des dates de soumission critiques.",
    "prob.risk": "RISQUE_CRITIQUE",
    "prob.risk_sub": "Erreurs Coûteuses",
    "prob.risk_desc": "Une erreur sur un prix unitaire détruit les marges. La vérification manuelle n'est pas fiable.",

    "feat.tag": "La Solution",
    "feat.title": "SPLITGLASS rend le traitement sans effort",
    "feat.subtitle": "Automatisez les tâches répétitives pour vous concentrer sur l'offre.",
    "feat.core": "Couche d'Extraction",
    "feat.engine": "Moteur BP2XLS",
    "feat.engine_sub": "(Couche d'Extraction)",
    "feat.engine_desc": "Notre moteur d'extraction identifie, extrait et valide les tableaux de prix de PDF vers Excel. C'est un composant d'un flux d'Intelligence Appels d'Offres plus large incluant qualification, conformité et audit.",
    "feat.context": "Analyse Contextuelle",
    "feat.native": "Format Excel Natif",
    "feat.discovery": "Découverte",
    "feat.discovery_desc": "Tous les appels d'offres marocains dans un seul flux — PMMP, MTPNET et portails régionaux agrégés pour vous.",
    "feat.alerts": "Alertes Intelligentes",
    "feat.alerts_desc": "Ne manquez jamais une échéance. Notifications automatisées pour les dates de soumission.",
    "feat.tracking": "Suivi des Offres",
    "feat.tracking_desc": "Suivez toutes vos soumissions dans un tableau de bord centralisé. Sachez exactement où vous en êtes.",
    "feat.explore": "Explorer",

    "work.tag": "Le Flux",
    "work.title": "De PDF à Excel en secondes",
    "work.subtitle": "Tableaux de prix complexes extraits avec 100% de fidélité.",
    "work.step1": "Télécharger PDF",
    "work.step1_desc": "Glissez-déposez votre document. Notre système cible instantanément la structure du fichier.",
    "work.step2": "Extraction IA",
    "work.step2_desc": "Le moteur neuronal identifie les tableaux, séparant les en-têtes des données et ignorant le bruit.",
    "work.step3": "Télécharger XLS",
    "work.step3_desc": "Recevez un fichier Excel parfaitement formaté, compilé et prêt pour l'analyse.",

    "stats.analyzed": "Documents analysés",
    "stats.time": "Temps d'extraction moyen",
    "stats.accuracy": "Précision sur tableaux complexes",

    "price.tag": "Tarification",
    "price.title": "Tarification simple, basée sur les résultats",
    "price.starter": "Starter",
    "price.starter_desc": "Paiement par appel d'offre. Idéal pour les soumissions occasionnelles.",
    "price.starter_price": "À partir de 500 MAD",
    "price.starter_period": "/appel d'offre",
    "price.pro": "Pro",
    "price.pro_desc": "Forfait mensuel pour les équipes régulières.",
    "price.pro_price": "1 000 – 5 000 MAD",
    "price.pro_period": "/mois",
    "price.ent": "Entreprise",
    "price.ent_desc": "Tarification volume sur mesure.",
    "price.contact": "Contactez-nous",
    "price.cta_start": "Demander un Pilote",
    "price.cta_join": "Accès Anticipé",
    "price.cta_contact": "Contacter Ventes",

    "contact.tag": "Contact",
    "contact.title": "Prêt à optimiser votre flux ?",
    "contact.subtitle": "Envoyez-nous un message, nous vous répondrons sous 24h.",
    "contact.name": "Nom complet",
    "contact.email": "Adresse Email",
    "contact.message": "Message",
    "contact.submit": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Message Envoyé",
    "contact.success_desc": "Nous avons bien reçu votre message et vous contacterons rapidement.",

    "faq.tag": "FAQ",
    "faq.title": "Questions Fréquentes",
    "faq.q1": "Compatible avec tous les formats BPU ?",
    "faq.a1": "Oui, notre IA gère divers formats BPU/DQE utilisés dans les marchés publics marocains.",
    "faq.q2": "Mes documents sont-ils sécurisés ?",
    "faq.a2": "Oui, tous les téléchargements sont cryptés. Nous ne stockons pas vos documents après extraction sauf demande.",
    "faq.q3": "Quels portails supportez-vous ?",
    "faq.a3": "Nous agrégeons les offres de PMMP, MTPNET et des principaux portails régionaux.",
    "faq.q4": "Puis-je intégrer SPLITGLASS avec mon ERP ?",
    "faq.a4": "Les plans Entreprise incluent un accès API pour des intégrations personnalisées (Sage, Odoo, etc.).",
    "faq.q5": "Quelles langues sont supportées ?",
    "faq.a5": "Les documents en français et en arabe sont entièrement pris en charge.",

    "foot.desc": "Intelligence des appels d'offres pour les marchés publics marocains. Qualification, conformité, extraction et audit — travaux, services et fournitures.",
    "foot.prod": "Produit",
    "foot.comp": "Entreprise",
    "foot.legal": "Légal",
    "foot.how": "Comment ça marche",
    "foot.blog": "Blog",
    "foot.terms": "Conditions",
    "foot.privacy": "Confidentialité",
    "foot.startup": "Vérification Programme",
    "foot.about": "SplitGlass est une startup marocaine développant la plateforme N°1 d'intelligence des appels d'offres — travaux, services et fournitures.",

    // What You Get
    "wyg.tag": "Ce Que Vous Obtenez",
    "wyg.title": "Préparation complète des appels d'offres",
    "wyg.subtitle": "Quatre capacités qui transforment les documents bruts en intelligence de soumission.",
    "wyg.card1_title": "Score Go/No-Go",
    "wyg.card1_desc": "Analyse de qualification instantanée pour décider si un appel d'offre vaut l'investissement.",
    "wyg.card2_title": "Checklist de Conformité",
    "wyg.card2_desc": "Extraction automatique des documents requis, garanties et échéances.",
    "wyg.card3_title": "Extraction BPU/DQE",
    "wyg.card3_desc": "Tableaux de prix extraits vers Excel avec fidélité des colonnes, prêts pour votre équipe.",
    "wyg.card4_title": "Audit & Alertes de Risques",
    "wyg.card4_desc": "Détection des écarts de totaux, lignes manquantes et filtrage du bruit pour sécuriser votre soumission.",

    // Who It's For
    "wif.tag": "Pour Qui",
    "wif.title": "Conçu pour les équipes d'appels d'offres marocaines",
    "wif.subtitle": "Que vous soumissionniez 4 ou 15 appels par mois, SplitGlass vous fait gagner des heures.",
    "wif.item1": "Entreprises BTP & ingénierie",
    "wif.item2": "Bureaux d'études",
    "wif.item3": "Consultants en appels d'offres",
    "wif.item4": "Priorité Maroc, flux français/arabe",

    // Trust / Security
    "trust.tag": "Sécurité",
    "trust.title": "Sécurité & traitement des données",
    "trust.subtitle": "Vos documents contiennent des données de prix sensibles. Nous les traitons en conséquence.",
    "trust.item1": "Traitement en sandbox isolé",
    "trust.item1_desc": "Chaque document est traité dans un environnement éphémère et isolé, détruit après usage.",
    "trust.item2": "Politique de suppression automatique",
    "trust.item2_desc": "Les fichiers sont automatiquement purgés après traitement.",
    "trust.item3": "Aucun entraînement sur vos fichiers",
    "trust.item3_desc": "Vos données de prix ne sont jamais utilisées pour entraîner des modèles.",
    "trust.item4": "Sortie prête pour l'audit",
    "trust.item4_desc": "Chaque extraction inclut une piste d'audit complète.",

    "cta.tag": "Rejoindre la liste",
    "cta.title": "Soyez le premier informé",
    "cta.title_sub": "lors du lancement.",
    "cta.desc": "Rejoignez la liste d'attente pour un accès anticipé exclusif. Pas de spam.",
    "cta.comp_ph": "Nom de l'entreprise (Optionnel)",
    "cta.email_ph": "ingenieur@entreprise.com",
    "cta.btn": "Rejoindre",
    "cta.another": "Inscrire un autre email"
  },
  ar: {
    // Navigation (شريط التنقل)
    "nav.about": "عن المنصة",
    "nav.pricing": "الباقات",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "تواصل معنا",
    "nav.waitlist": "انضم لقائمة الانتظار",

    // Hero Section
    "hero.launching": "نسخة تجريبية خاصة",
    "hero.morocco": "مساعد مغربي",
    "hero.autonomous": "لتحضير",
    "hero.engine": "الصفقات العمومية",
    "hero.desc": "من فوضى CPS/BPU/DQE إلى ذكاء العروض: فحوصات التأهل، قائمة الامتثال، إشارات المخاطر، ومخرجات Excel جاهزة.",
    "hero.bullet1": "مصمم لتنسيقات الصفقات المغربية (PDF، DOCX، ZIP، المسح الضوئي)",
    "hero.bullet2": "سجل تدقيق وفحوصات حسابية",
    "hero.bullet3": "مصمم للمقاولات التي تقدم 4 إلى 15 عرض/شهر",
    "hero.cta": "طلب نسخة تجريبية",
    "hero.cta2": "الحصول على وصول مبكر",
    "hero.social": "انضم لأكثر من 50 محترفاً في الصفقات العمومية يترقبون الإطلاق",
    "hero.success": "شكراً لكم!",
    "hero.success_desc": "سوف نقوم بالتواصل معكم بالتحديثات القادمة.",

    // The Problem (تشخيص التحديات)
    "prob.tag": "المشكلة",
    "prob.title": "رصدنا اختناقات تشغيلية",
    "prob.subtitle": "المعالجة اليدوية هي نقطة الضعف الحرجة في سير عمل الصفقات الحديثة.",
    "prob.time": "استنزاف الوقت",
    "prob.time_sub": "8-15 ساعة / صفقة",
    "prob.time_desc": "الاستخراج اليدوي يعيق التحليل الاستراتيجي. طاقة بشرية مهدورة في إدخال البيانات.",
    "prob.friction": "تعقيدات البيانات",
    "prob.friction_sub": "جحيم النسخ واللصق",
    "prob.friction_desc": "ملفات PDF المغلقة تتطلب نقلاً يدوياً، مما يرفع مخاطر تشوه التنسيق والإرهاق الذهني.",
    "prob.system": "فشل منظومي",
    "prob.system_sub": "مواعيد ضائعة",
    "prob.system_desc": "غياب التتبع المركزي يؤدي إلى انزلاق تواريخ التقديم الحرجة وسقوطها سهواً.",
    "prob.risk": "مخاطر حرجة",
    "prob.risk_sub": "أخطاء مكلفة",
    "prob.risk_desc": "تفاوت بسيط في سعر الوحدة قد يدمر هوامش ربح المشروع. التحقق اليدوي غير موثوق.",

    // The Solution (الحل والمميزات)
    "feat.tag": "الحل التقني",
    "feat.title": "SPLITGLASS تجعل معالجة الصفقات انسيابية",
    "feat.subtitle": "أتمتة المهام الروتينية لتتفرغ للتركيز على الفوز بالصفقة.",
    "feat.core": "طبقة الاستخراج",
    "feat.engine": "محرك BP2XLS",
    "feat.engine_sub": "(طبقة الاستخراج)",
    "feat.engine_desc": "يقوم محرك الاستخراج بتحديد واستخراج والتحقق من جداول الأسعار من PDF إلى Excel. هو جزء من منظومة ذكاء صفقات أشمل تتضمن التأهل والامتثال والتدقيق.",
    "feat.context": "تحليل سياقي",
    "feat.native": "مخرجات Excel أصلية",
    "feat.discovery": "استكشاف الصفقات",
    "feat.discovery_desc": "جميع الصفقات المغربية في واجهة واحدة — تجميع تلقائي من PMMP، MTPNET، والبوابات الجهوية.",
    "feat.alerts": "تنبيهات ذكية",
    "feat.alerts_desc": "لا تفوت موعداً نهائياً. احصل على إشعارات آلية لتواريخ التقديم والتوضيحات.",
    "feat.tracking": "تتبع المشاركات",
    "feat.tracking_desc": "تابع جميع مشاركاتك في لوحة تحكم مركزية. اعرف موقفك بدقة في كل مرحلة.",
    "feat.explore": "استكشف الميزة",

    // How It Works (سير العمل)
    "work.tag": "آلية العمل",
    "work.title": "من PDF إلى Excel في ثوانٍ",
    "work.subtitle": "استخراج جداول الأسعار المعقدة بدقة تطابق 100% للأعمدة.",
    "work.step1": "رفع ملف PDF",
    "work.step1_desc": "اسحب وأفلت وثيقة الصفقة. نظام الاستهداف لدينا يرصد هيكلية الملف فوراً.",
    "work.step2": "استخراج بالذكاء الاصطناعي",
    "work.step2_desc": "يحدد المحرك العصبي جداول الأسعار، ويفصل العناوين عن البيانات مع تجاهل \"الضجيج\" النصي.",
    "work.step3": "تحميل ملف XLS",
    "work.step3_desc": "استلم ملف Excel منسقاً باحترافية، مجمعاً وجاهزاً للتحليل والتسعير.",

    // Stats Bar (شريط الإحصائيات)
    "stats.analyzed": "وثيقة صفقة تم تحليلها",
    "stats.time": "متوسط وقت الاستخراج",
    "stats.accuracy": "الدقة في الجداول المعقدة",

    // Pricing (خطط الاشتراك)
    "price.tag": "الأسعار",
    "price.title": "تسعير بسيط ومرتبط بالنتائج",
    "price.starter": "أساسي",
    "price.starter_desc": "الدفع لكل صفقة. مثالي للمشاركات العرضية.",
    "price.starter_price": "ابتداءً من 500 درهم",
    "price.starter_period": "/صفقة",
    "price.pro": "احترافية",
    "price.pro_desc": "اشتراك شهري للفرق النشطة.",
    "price.pro_price": "1,000 – 5,000 درهم",
    "price.pro_period": "/شهر",
    "price.ent": "مؤسسات",
    "price.ent_desc": "تسعير حجمي مخصص للشركات الكبرى.",
    "price.contact": "تواصل معنا",
    "price.cta_start": "طلب نسخة تجريبية",
    "price.cta_join": "الحصول على وصول مبكر",
    "price.cta_contact": "تواصل مع المبيعات",

    // Contact
    "contact.tag": "تواصل معنا",
    "contact.title": "جاهز لتحسين سير عملك؟",
    "contact.subtitle": "راسلنا وسنقوم بالرد عليك خلال 24 ساعة.",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال الرسالة",
    "contact.sending": "جاري الإرسال...",
    "contact.success": "تم الإرسال",
    "contact.success_desc": "لقد استلمنا رسالتك وسنقوم بالتواصل معك قريباً.",

    // FAQ (الأسئلة الشائعة)
    "faq.tag": "أسئلة متكررة",
    "faq.title": "استفسارات شائعة",
    "faq.q1": "هل يدعم النظام جميع تنسيقات BPU؟",
    "faq.a1": "نعم، يتعامل ذكاؤنا الاصطناعي مع مختلف تنسيقات BPU/DQE المستخدمة في الصفقات العمومية المغربية، بما في ذلك جداول BPDE، وجداول الأسعار (Bordereau de Prix)، وملفات DQE.",
    "faq.q2": "هل وثائقي آمنة؟",
    "faq.a2": "نعم، جميع الملفات المرفوعة مشفرة وتتم معالجتها بأمان. لا نقوم بتخزين وثائقك بعد الاستخراج إلا إذا اخترت حفظها في لوحة التحكم الخاصة بك.",
    "faq.q3": "ما هي البوابات التي تدعمونها؟",
    "faq.a3": "نقوم بتجميع الصفقات من بوابة الصفقات العمومية (PMMP)، MTPNET، والبوابات الجهوية الرئيسية في جميع أنحاء المغرب.",
    "faq.q4": "هل يمكنني ربط SPLITGLASS مع نظام ERP الخاص بي؟",
    "faq.a4": "خطط المؤسسات (Enterprise) تتضمن صلاحيات API للربط المخصص مع أنظمتك الحالية مثل Sage، Odoo، أو أنظمة ERP الخاصة.",
    "faq.q5": "ما هي اللغات المدعومة؟",
    "faq.a5": "الوثائق باللغتين الفرنسية والعربية مدعومة بالكامل.",

    // Waitlist CTA (خاتمة الصفحة)
    "cta.tag": "انضم لقائمة الانتظار",
    "cta.title": "كن أول من يعلم",
    "cta.title_sub": "لحظة الإطلاق.",
    "cta.desc": "انضم للقائمة واحصل على دخول مبكر حصري. نحن نحترم خصوصيتك؛ لا رسائل مزعجة، فقط تحديثات الإطلاق.",
    "cta.comp_ph": "اسم الشركة (اختياري)",
    "cta.email_ph": "engineer@firm.com",
    "cta.btn": "انضم الآن",
    "cta.another": "تسجيل بريد إلكتروني آخر",

    // Footer (تذييل الصفحة)
    "foot.desc": "ذكاء الصفقات العمومية المغربية. التأهل والامتثال والاستخراج والتدقيق — أشغال، خدمات وتوريدات.",
    "foot.prod": "المنتج",
    "foot.comp": "الشركة",
    "foot.legal": "قانوني",
    "foot.how": "كيف يعمل النظام",
    "foot.blog": "المدونة",
    "foot.terms": "شروط الخدمة",
    "foot.privacy": "سياسة الخصوصية",
    "foot.startup": "التحقق من البرنامج",
    "foot.about": "سبليت جلاس هي شركة ناشئة مغربية تطور منصة ذكاء الصفقات رقم 1 — أشغال، خدمات وتوريدات.",

    // What You Get
    "wyg.tag": "ما ستحصل عليه",
    "wyg.title": "تحضير شامل للصفقات",
    "wyg.subtitle": "أربع قدرات تحول الوثائق الخام إلى ذكاء عروض جاهز.",
    "wyg.card1_title": "تقييم المشاركة/عدم المشاركة",
    "wyg.card1_desc": "تحليل تأهل فوري لتقرر إن كانت الصفقة تستحق الاستثمار قبل إهدار ساعات.",
    "wyg.card2_title": "قائمة الامتثال",
    "wyg.card2_desc": "استخراج تلقائي للوثائق المطلوبة والضمانات والمواعيد النهائية.",
    "wyg.card3_title": "استخراج BPU/DQE",
    "wyg.card3_desc": "جداول الأسعار مستخرجة إلى Excel بدقة الأعمدة، جاهزة لفريق التقدير.",
    "wyg.card4_title": "التدقيق وإشارات المخاطر",
    "wyg.card4_desc": "كشف تفاوتات المجاميع، تنبيهات الأسطر المفقودة، وتصفية الضوضاء لتأمين عرضك.",

    // Who It's For
    "wif.tag": "لمن هذا المنتج",
    "wif.title": "مصمم لفرق الصفقات المغربية",
    "wif.subtitle": "سواء تقدمت لـ 4 أو 15 صفقة شهرياً، سبليت جلاس توفر لك ساعات لكل عرض.",
    "wif.item1": "المقاولات الصغيرة والمتوسطة",
    "wif.item2": "مكاتب الدراسات",
    "wif.item3": "مستشارو الصفقات",
    "wif.item4": "أولوية مغربية، سير عمل بالفرنسية والعربية",

    // Trust / Security
    "trust.tag": "الأمان",
    "trust.title": "الأمان ومعالجة البيانات",
    "trust.subtitle": "وثائق صفقاتك تحتوي على بيانات تسعير حساسة. نعاملها بمسؤولية.",
    "trust.item1": "معالجة في بيئة معزولة",
    "trust.item1_desc": "كل وثيقة تُعالج في بيئة مؤقتة ومعزولة تُدمر بعد الاستخدام.",
    "trust.item2": "سياسة الحذف التلقائي",
    "trust.item2_desc": "الملفات المرفوعة تُحذف تلقائياً بعد المعالجة. لا شيء يبقى على خوادمنا.",
    "trust.item3": "لا تدريب على ملفات العملاء",
    "trust.item3_desc": "بيانات التسعير الخاصة بك لا تُستخدم أبداً لتدريب أو تحسين أي نماذج.",
    "trust.item4": "مخرجات جاهزة للتدقيق",
    "trust.item4_desc": "كل استخراج يتضمن سجل تدقيق كامل للتحقق بثقة."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children?: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    // Update direction based on language
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Toggle font class for Arabic
    if (language === 'ar') {
      document.body.classList.add('lang-ar');
    } else {
      document.body.classList.remove('lang-ar');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
