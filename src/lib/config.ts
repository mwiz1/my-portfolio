// ✏️ كل معلوماتك هنا. عدّل هذا الملف فقط وكل صفحات الموقع تتحدث تلقائياً.

export const PROFILE = {
  name: "عبد الملك الغامدي",
  fullName: "عبد الملك علي الغامدي",
  nameEn: "Abdulmalik Ali Al-Ghamdi",
  role: "مطوّر أنظمة ومحلل بيانات",
  roleEn: "Software Systems & IT Specialist",
  intro:
    "خريج تقنية معلومات من جامعة الباحة. أبني أنظمة ويب متكاملة بـ Node.js، وأصمم قواعد البيانات، وأحلل البيانات لأحوّلها إلى قرارات واضحة.",
  location: "الرياض، المملكة العربية السعودية",
  phone: "+966 50 051 2410",
  email: "itbdamlk@gmail.com",
  github: "", // ضع رابط حسابك في GitHub هنا ليظهر في الموقع
  linkedin: "", // ضع رابط حسابك في LinkedIn هنا ليظهر في الموقع
  cv: "/cv.pdf",
  cvFileName: "Abdulmalik_Alghamdi_CV.pdf",
  available: true, // true = تظهر علامة "متاح للعمل"
};

export const SUMMARY =
  "خريج تقنية معلومات يستهدف أدوار تطوير الأنظمة البرمجية وعمليات تقنية المعلومات، بخبرة عملية في تطوير الأنظمة الخلفية باستخدام Node.js وJavaScript. أتقن تصميم قواعد البيانات العلائقية وتكامل الأنظمة ونمذجة البيانات، ولدي معرفة عملية ببروتوكولات الشبكات والأنظمة الافتراضية ومبادئ أمن المعلومات. أعمل بمنهجية Agile، وأحلل مسارات العمل التشغيلية لأقدم حلولاً رقمية موثوقة.";

// مجالات العمل التي تظهر في الصفحة الرئيسية
export const DOMAINS = [
  {
    id: "dev",
    title: "تطوير الأنظمة والتطبيقات",
    text: "تطبيقات ويب متكاملة من الواجهة إلى الخادم، وربطها بالواجهات البرمجية مع معالجة الأخطاء وتتبع السجلات.",
    skills: ["JavaScript", "Node.js", "RESTful APIs", "System Architecture", "Systems Integration", "SDLC"],
  },
  {
    id: "data",
    title: "قواعد البيانات وتحليلها",
    text: "تصميم مخططات العلاقات وتطبيعها، واستعلامات SQL، وتحويل البيانات التشغيلية إلى تقارير ولوحات متابعة.",
    skills: ["SQL", "Database Design", "Data Modeling (ERD)", "Excel Analytics", "Reporting Dashboards"],
  },
  {
    id: "infra",
    title: "البنية التحتية وأمن المعلومات",
    text: "تجهيز بيئات افتراضية لاختبار الأنظمة والشبكات، وتحليل سجلات الأحداث، وتطبيق مبادئ أمن المعلومات.",
    skills: ["TCP/IP Networking", "Virtual Machines", "Information Security", "Log Analysis", "AWS Fundamentals"],
  },
];

export const SKILL_GROUPS = [
  { title: "البرمجة والتطوير", items: ["JavaScript", "Node.js", "RESTful APIs", "System Architecture", "Systems Integration", "VS Code"] },
  { title: "البيانات", items: ["SQL & Relational Databases", "Database Management", "Data Modeling (ERD)", "MS Excel (Analytics)"] },
  { title: "البنية التحتية والأمن", items: ["IT Infrastructure", "TCP/IP Networking", "Virtual Machines", "Information Security", "Cloud Fundamentals (AWS)", "Log Analysis"] },
  { title: "إدارة المشاريع", items: ["Agile & Scrum", "Project Planning (WBS)", "SDLC", "Technical Documentation"] },
];

export type ProjectCategory = "web" | "data";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  points: string[];
  tags: string[];
  live?: string; // اتركه فارغاً إذا لا يوجد رابط
  github?: string;
  featured?: boolean;
}

// ➕ أضف مشروعاً جديداً = أضف عنصراً هنا. web يظهر في "المشاريع"، و data يظهر في "البيانات".
export const PROJECTS: Project[] = [
  {
    id: "tarbi",
    title: "منصة تربي",
    subtitle: "Tarbi Integrated Digital System",
    category: "web",
    featured: true,
    description: "نظام رقمي متكامل لتخطيط الرحلات والحجوزات، يؤتمت مسارات عمل المستخدمين من البداية إلى النهاية.",
    points: [
      "بناء النظام كاملاً بـ Node.js وJavaScript لتبسيط مسارات المستخدم وأتمتة العمليات.",
      "تصميم مخططات قاعدة بيانات علائقية تضمن سلامة البيانات وسرعة الاستعلامات.",
      "تحليل الأنظمة وتحويل المتطلبات الوظيفية إلى مكونات برمجية فعالة.",
      "معالجة الأخطاء وربط الواجهات البرمجية وتتبع السجلات لرفع موثوقية الخادم.",
      "إدارة مراحل التسليم بمنهجية Agile وهيكل تجزئة العمل (WBS).",
    ],
    tags: ["Node.js", "JavaScript", "SQL", "REST APIs", "Systems Analysis", "Agile"],
    live: "",
    github: "",
  },
  {
    id: "db-lab",
    title: "مختبر قواعد البيانات وعمليات تقنية المعلومات",
    subtitle: "Database Systems & IT Operations Lab",
    category: "data",
    description: "نمذجة بيانات مؤسسية، وبيئات افتراضية لاختبار الأنظمة، وتحليل سجلات تشغيلية إلى تقارير.",
    points: [
      "نمذجة مخططات علاقات (ERD) معقدة وكتابة استعلامات SQL لإدارة بيانات المؤسسات.",
      "إعداد أجهزة افتراضية لاختبار نشر الأنظمة وإعدادات الشبكة في بيئات معزولة.",
      "تحليل سجلات أحداث الأنظمة ومعالجة البيانات التشغيلية بـ Excel لإنتاج ملخصات ولوحات تقارير.",
    ],
    tags: ["SQL", "ERD", "Virtual Machines", "Log Analysis", "Excel"],
  },
  {
    id: "bi",
    title: "لوحة مؤشرات الأداء والعمليات",
    subtitle: "KPI & Operations Dashboard",
    category: "data",
    description: "تحليل مجموعات بيانات، ونمذجة العلاقات، ولوحة تفاعلية تبرز المقارنات والاتجاهات.",
    points: [],
    tags: ["Power BI", "SQL", "Excel Data Modeling"],
  },
];

// السيرة: الأحداث بالترتيب من الأحدث للأقدم
export const EDUCATION = [
  { year: "2026", title: "بكالوريوس تقنية المعلومات", place: "جامعة الباحة، كلية علوم الحاسب وتقنية المعلومات", note: "المعدل 3.17 من 4.00" },
];

export const CERTIFICATIONS = [
  { title: "Technical Project Management & Agile Methodologies", issuer: "IBM" },
  { title: "Data Analysis & Information Processing Fundamentals", issuer: "IBM" },
];

export const LANGUAGES = [
  { name: "العربية", level: "اللغة الأم" },
  { name: "English", level: "إجادة مهنية" },
];
