
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
    "hero.launching": "Launching Soon",
    "hero.morocco": "Morocco's First",
    "hero.autonomous": "Autonomous",
    "hero.engine": "Tender Engine.",
    "hero.desc": "SPLITGLASS extracts BPU pricing tables from PDFs to Excel in seconds. Join the waitlist to be first in line when we launch.",
    "hero.placeholder": "Enter your email address",
    "hero.cta": "Get early access",
    "hero.social": "Join 50+ construction professionals waiting for launch",
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
    "feat.core": "Core Technology",
    "feat.engine": "BP2XLS Engine",
    "feat.engine_desc": "Our proprietary AI engine acts as the central processor for your tender documents. It identifies, extracts, and validates pricing tables from PDF to Excel in under 30 seconds.",
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
    "price.title": "Launching soon with simple pricing",
    "price.free": "Free",
    "price.free_desc": "Perfect for testing the waters.",
    "price.pro": "Pro",
    "price.pro_desc": "For professionals who bid regularly.",
    "price.ent": "Enterprise",
    "price.ent_desc": "For large construction firms.",
    "price.period": "/month",
    "price.contact": "Contact us",
    "price.cta_join": "Join Waitlist",
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
    "foot.desc": "Win more tenders, waste less time. Autonomous digitization for the construction industry.",
    "foot.prod": "Product",
    "foot.comp": "Company",
    "foot.legal": "Legal",
    "foot.how": "How it works",
    "foot.blog": "Blog",
    "foot.terms": "Terms of Service",
    "foot.privacy": "Privacy Policy",
    
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

    "hero.launching": "Lancement Bientôt",
    "hero.morocco": "Premier au Maroc",
    "hero.autonomous": "Moteur Autonome",
    "hero.engine": "d'Appels d'Offres.",
    "hero.desc": "SPLITGLASS extrait les tableaux de prix BPU des PDF vers Excel en quelques secondes. Rejoignez la liste d'attente pour être le premier servi.",
    "hero.placeholder": "Votre adresse email",
    "hero.cta": "Accès anticipé",
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
    "feat.core": "Technologie Centrale",
    "feat.engine": "Moteur BP2XLS",
    "feat.engine_desc": "Notre moteur IA agit comme processeur central. Il identifie, extrait et valide les tableaux de prix de PDF vers Excel en moins de 30 secondes.",
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
    "price.title": "Lancement bientôt avec tarifs simples",
    "price.free": "Gratuit",
    "price.free_desc": "Parfait pour tester.",
    "price.pro": "Pro",
    "price.pro_desc": "Pour les professionnels réguliers.",
    "price.ent": "Entreprise",
    "price.ent_desc": "Pour les grandes entreprises.",
    "price.period": "/mois",
    "price.contact": "Contactez-nous",
    "price.cta_join": "Rejoindre la liste",
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

    "foot.desc": "Gagnez plus d'appels d'offres, perdez moins de temps. Digitalisation autonome pour le BTP.",
    "foot.prod": "Produit",
    "foot.comp": "Entreprise",
    "foot.legal": "Légal",
    "foot.how": "Comment ça marche",
    "foot.blog": "Blog",
    "foot.terms": "Conditions",
    "foot.privacy": "Confidentialité",

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

    // Hero Section (الواجهة الرئيسية)
    "hero.launching": "على وشك الإنطلاق",
    "hero.morocco": "أول محرك مغربي",
    "hero.autonomous": "ذكي ومستقل",
    "hero.engine": "لمعالجة الصفقات.",
    "hero.desc": "تقوم تقنية SPLITGLASS باستخراج جداول الأسعار (BPU) من ملفات PDF وتحويلها إلى Excel في ثوانٍ. انضم لقائمة الانتظار لتكون في المقدمة عند الإطلاق.",
    "hero.placeholder": "أدخل بريدك الإلكتروني",
    "hero.cta": "احصل على دخول مبكر",
    "hero.social": "انضم لأكثر من 50 محترفاً في قطاع البناء يترقبون الإطلاق",
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
    "feat.core": "التكنولوجيا الأساسية",
    "feat.engine": "محرك المعالجة BP2XLS",
    "feat.engine_desc": "يعمل محرك الذكاء الاصطناعي الخاص بنا كمعالج مركزي لوثائق الصفقات. يقوم بتحديد، استخراج، والتحقق من جداول الأسعار من PDF إلى Excel في أقل من 30 ثانية.",
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
    "price.title": "انطلاق قريب بأسعار مبسطة",
    "price.free": "مجانية",
    "price.free_desc": "مثالية لاستكشاف المنصة.",
    "price.pro": "احترافية",
    "price.pro_desc": "للمحترفين الذين يشاركون بانتظام.",
    "price.ent": "مؤسسات",
    "price.ent_desc": "لشركات البناء الكبرى.",
    "price.period": "/ شهر",
    "price.contact": "تواصل معنا",
    "price.cta_join": "انضم لقائمة الانتظار",
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
    "foot.desc": "فز بالمزيد من الصفقات، ووفر الوقت. رقمنة ذاتية ذكية لصناعة البناء والأشغال.",
    "foot.prod": "المنتج",
    "foot.comp": "الشركة",
    "foot.legal": "قانوني",
    "foot.how": "كيف يعمل النظام",
    "foot.blog": "المدونة",
    "foot.terms": "شروط الخدمة",
    "foot.privacy": "سياسة الخصوصية"
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
