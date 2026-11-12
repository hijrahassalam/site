// Single source of truth for profile facts. Keep this in sync with the CV and LinkedIn.

export const site = {
  name: 'Hijrah Assalam',
  legalName: 'Nur Hijrah As Salam Al Ihsan',
  role: 'Applied AI Engineer',
  description:
    'Applied AI Engineer and founder of AsistenDiet and BundaGizi. I build production AI products and the systems behind them, from LLM workflows to the backend that keeps them running.',
  email: 'hijrahassalam@gmail.com',
  location: 'Surakarta, Indonesia',
  timezone: 'GMT+7',
  cv: '/cv/Hijrah_Assalam_CV.pdf',
  // Web3Forms access key for the contact form (public by design; get one free at https://web3forms.com).
  // While this is empty, the contact page shows email links instead of the form.
  web3formsKey: '34c090a6-9741-4139-8604-de1ac6735abe',
  links: {
    github: 'https://github.com/hijrahassalam',
    linkedin: 'https://www.linkedin.com/in/hijrahassalam',
  },
};

export const proof = [
  { value: '15k+', label: 'Assignment letters issued through a university system I architected' },
  { value: '3', label: 'AI products I built and run in production' },
  { value: '36', label: 'Open-source libraries for AI-agent infrastructure' },
  { value: '5+', label: 'Years shipping production software end to end' },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    org: 'Universitas Sebelas Maret',
    period: 'Sep 2025 – Present',
    note: 'Architect institutional systems for assignments, expenses and legal documents: multilevel approvals, RBAC, automated PDFs, geo-verified reporting and payment integrations.',
  },
  {
    role: 'Lead Software Engineer & Solutions Architect',
    org: 'Root Labs Indonesia',
    period: 'Aug 2020 – Sep 2025',
    note: 'Led solution architecture and end-to-end delivery of client systems, balancing delivery pressure against maintainability and production stability.',
  },
  {
    role: 'Software Engineer / Product Manager',
    org: 'Learn Quran',
    period: 'Nov 2022 – Aug 2025',
    note: 'Built production APIs and apps for multi-platform Quran products while owning the roadmap, prioritisation and app-store operations.',
  },
  {
    role: 'Web Developer',
    org: 'Universitas Sebelas Maret',
    period: 'May 2021 – Jun 2024',
    note: 'Faculty-wide Laravel and CodeIgniter applications and REST APIs, built with academic stakeholders.',
  },
];

export const recognition = [
  { title: 'Cum Laude, GPA 3.86', detail: 'B.Ed. Informatics, Universitas Sebelas Maret' },
  { title: 'Invited Speaker', detail: 'Build With AI Solo 2026 · GDG Semarang' },
  { title: 'Bronze Medal', detail: 'Advanced Innovation JAM, Japan · 2019' },
  { title: 'Publication', detail: 'COVID-19 forecasting · Ultimatics · 2020' },
  { title: 'EF SET C1 Advanced', detail: 'English proficiency' },
  { title: 'BNSP Programmer', detail: 'National certification' },
];

export const capabilities = [
  {
    title: 'Applied AI',
    items: ['LLM applications & agents', 'Agentic workflows & RAG', 'Guardrails & evaluation', 'Cost & latency control'],
  },
  {
    title: 'Product engineering',
    items: ['Laravel, Node.js, Vue.js', 'REST APIs & integrations', 'Auth, RBAC & document workflows', 'WhatsApp-first products'],
  },
  {
    title: 'Data & delivery',
    items: ['PostgreSQL, MySQL, Redis', 'Docker & CI/CD', 'Cloud / VPS deployment', 'Production troubleshooting'],
  },
];
