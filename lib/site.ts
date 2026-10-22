export const site = {
  url: "https://konnexainnovations.com",
  brand: "Konnexa Innovations",
  legalName: "Konnexa Innovations Private Limited",
  tagline: "Innovating Your Digital Success",
  description:
    "Konnexa Innovations is a Jagtial & Hyderabad based company offering end-to-end HR services, recruitment, payroll, full-funnel digital marketing, software training and skill development & placement programs that turn ambition into measurable growth.",
  shortDescription:
    "HR Services · Digital Marketing · Software Training & Skill Development",
  metaKeywords: [
    "Konnexa Innovations",
    "HR services in Hyderabad",
    "recruitment agency Hyderabad",
    "staffing services Telangana",
    "payroll management India",
    "digital marketing agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "software training Hyderabad",
    "skill development programs",
    "placement training Hyderabad",
    "training and placements Jagtial",
    "HR consultancy Jagtial",
  ],
  founded: "2024",
  email: "info@konnexainnovations.com",
  phone: "+91 89190 77920",
  phoneRaw: "918919077920",
  gst: "36AAMCK7842F1Z7",
  address:
    "H.No. 73179/1, Annapurna Road Part 2, Jagtial, Jagtial District, Telangana – 505327",
  offices: [
    {
      label: "Registered Office — Jagtial",
      address:
        "H.No. 73179/1, Annapurna Road Part 2, Jagtial, Jagtial District, Telangana – 505327",
      streetAddress: "H.No. 73179/1, Annapurna Road Part 2",
      locality: "Jagtial",
      region: "Telangana",
      postalCode: "505327",
      country: "IN",
    },
    {
      label: "Hyderabad Office",
      address:
        "2nd Floor, Hanuman Residency, 15/21/150/1/B, Balaji Nagar, Hyderabad",
      streetAddress: "2nd Floor, Hanuman Residency, 15/21/150/1/B, Balaji Nagar",
      locality: "Hyderabad",
      region: "Telangana",
      postalCode: "",
      country: "IN",
    },
  ],
  instagram: "https://www.instagram.com/konnexa_innovations",
  twitter: "https://x.com/Konnexa_",
  twitterHandle: "@Konnexa_",
  linkedin: "https://www.linkedin.com/company/konnexa-innovations-pvt-ltd/",
  facebook: "https://www.facebook.com/konnexainnovations/",
  workingHours: "Mon – Sat · 9:30 AM – 6:30 PM",
} as const;

export type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "twitter" | "linkedin" | "facebook";
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: site.instagram, icon: "instagram" },
  { name: "X (Twitter)", href: site.twitter, icon: "twitter" },
  { name: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { name: "Facebook", href: site.facebook, icon: "facebook" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
] as const;

export const legalEffectiveDate = "29 May 2026";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
] as const;

export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    title: "HR Services",
    description:
      "End-to-end human resource solutions that help you build, manage and scale high-performing teams.",
    points: ["Talent acquisition", "HR consulting", "Onboarding & compliance"],
    icon: "users",
  },
  {
    title: "Recruitment & Staffing",
    description:
      "Permanent, contract and bulk hiring backed by a vetted talent network across industries.",
    points: ["Permanent hiring", "Contract staffing", "Bulk recruitment"],
    icon: "search",
  },
  {
    title: "Payroll Management",
    description:
      "Accurate, compliant and on-time payroll processing so you can focus on your core business.",
    points: ["Salary processing", "Statutory compliance", "Payslips & reports"],
    icon: "wallet",
  },
  {
    title: "Digital Marketing",
    description:
      "Full-funnel, end-to-end digital marketing that grows your reach, leads and revenue online.",
    points: ["SEO & content", "Social media & ads", "Branding & design"],
    icon: "megaphone",
  },
  {
    title: "Software Training",
    description:
      "Hands-on software training and programs designed to make learners job-ready from day one.",
    points: ["Live mentor-led batches", "Real-world projects", "Certification"],
    icon: "code",
  },
  {
    title: "Skill Development & Placements",
    description:
      "Skill development programs for students with dedicated training and placement support.",
    points: ["Career skilling", "Mock interviews", "Placement assistance"],
    icon: "rocket",
  },
];

export type SoftwareSolution = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  icon: string;
  tags: string[];
  features: { title: string; description: string }[];
  benefits: string[];
  techStack: string[];
};

export const softwareSolutions: SoftwareSolution[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline:
      "Tailor-made software built around your workflows — not the other way around.",
    overview:
      "Off-the-shelf tools rarely fit the way your business actually runs. We design and build custom software that automates your processes, connects your teams and scales with you — from the first prototype to long-term support.",
    icon: "code",
    tags: ["Automation", "Integrations", "Dashboards"],
    features: [
      {
        title: "Business process automation",
        description: "Replace spreadsheets and manual steps with reliable, auditable workflows.",
      },
      {
        title: "Third-party integrations",
        description: "Connect payment gateways, SMS, email, accounting and government APIs.",
      },
      {
        title: "Admin panels & dashboards",
        description: "Real-time reports and role-based access for owners, managers and staff.",
      },
      {
        title: "Legacy modernisation",
        description: "Migrate outdated desktop or Excel-based systems to secure web platforms.",
      },
    ],
    benefits: [
      "Built exactly for your processes",
      "You own the source code",
      "Scales as your team grows",
      "Ongoing maintenance & support",
    ],
    techStack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    slug: "web-development",
    title: "Website & Web App Development",
    tagline:
      "Fast, SEO-ready websites and web applications that turn visitors into customers.",
    overview:
      "Your website is your hardest-working salesperson. We build modern, mobile-first websites and web apps that load fast, rank well on Google and are easy for your team to update — backed by our in-house digital marketing expertise.",
    icon: "globe",
    tags: ["Business sites", "Web apps", "SEO-ready"],
    features: [
      {
        title: "Corporate & business websites",
        description: "Professional, on-brand sites that build trust and generate enquiries.",
      },
      {
        title: "Landing pages that convert",
        description: "Campaign pages designed with your ads and lead funnels in mind.",
      },
      {
        title: "Progressive web apps",
        description: "App-like experiences that work offline and install from the browser.",
      },
      {
        title: "CMS & easy editing",
        description: "Update content, blogs and images yourself without touching code.",
      },
    ],
    benefits: [
      "Mobile-first, responsive design",
      "Technical SEO built in",
      "Lightning-fast page loads",
      "Hosting, SSL & domain setup",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "WordPress", "Vercel", "Netlify"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline:
      "Android and iOS apps your customers will actually enjoy using.",
    overview:
      "Reach your customers where they spend most of their time. We build cross-platform and native mobile apps with clean UI, smooth performance and the backend, notifications and analytics you need to keep users engaged.",
    icon: "smartphone",
    tags: ["Android", "iOS", "Cross-platform"],
    features: [
      {
        title: "Cross-platform apps",
        description: "One codebase for Android and iOS — faster launch, lower cost.",
      },
      {
        title: "UI/UX design",
        description: "Intuitive, on-brand screens designed and prototyped before development.",
      },
      {
        title: "Push notifications & analytics",
        description: "Re-engage users and measure what features they actually use.",
      },
      {
        title: "Store publishing",
        description: "We handle Play Store and App Store submission end-to-end.",
      },
    ],
    benefits: [
      "Single codebase, two platforms",
      "Secure APIs & backend",
      "Offline-ready experiences",
      "Post-launch updates & support",
    ],
    techStack: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase", "Node.js"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    tagline:
      "Online stores with secure payments, inventory and order management built in.",
    overview:
      "Sell online with confidence. From a simple product catalogue to a full multi-vendor marketplace, we build e-commerce platforms with Indian payment gateways, GST-ready invoicing, shipping integrations and marketing tools to drive repeat sales.",
    icon: "cart",
    tags: ["Online stores", "Payments", "Inventory"],
    features: [
      {
        title: "Custom storefronts",
        description: "Fast, beautiful product pages optimised for mobile shoppers.",
      },
      {
        title: "Payment gateway integration",
        description: "UPI, cards, wallets and COD via Razorpay, PhonePe, Stripe and more.",
      },
      {
        title: "Inventory & order management",
        description: "Track stock, orders, returns and shipping from one dashboard.",
      },
      {
        title: "GST invoicing & reports",
        description: "Automatic tax-compliant invoices and sales reports.",
      },
    ],
    benefits: [
      "Secure, PCI-compliant checkout",
      "Shipping partner integrations",
      "Coupons, offers & loyalty",
      "Marketing & SEO ready",
    ],
    techStack: ["Shopify", "WooCommerce", "Next.js", "Razorpay", "Node.js", "PostgreSQL"],
  },
  {
    slug: "hrms-payroll-software",
    title: "HRMS & Payroll Software",
    tagline:
      "Attendance, leave, payroll and compliance — automated in one HR platform.",
    overview:
      "Built on our hands-on experience running HR and payroll for clients, our HRMS solutions automate the entire employee lifecycle — from onboarding and attendance to salary processing, PF/ESI compliance and payslips — so your HR team can focus on people.",
    icon: "users",
    tags: ["Attendance", "Payroll", "Compliance"],
    features: [
      {
        title: "Employee self-service",
        description: "Staff apply for leave, view payslips and update details from their phone.",
      },
      {
        title: "Attendance & shift tracking",
        description: "Biometric, geo-fenced mobile or web check-ins with shift rosters.",
      },
      {
        title: "Automated payroll",
        description: "Salary, deductions, PF, ESI, PT and TDS calculated in a click.",
      },
      {
        title: "Onboarding & documents",
        description: "Digital offer letters, document collection and employee records.",
      },
    ],
    benefits: [
      "Statutory compliance built in",
      "Fewer payroll errors",
      "Mobile app for employees",
      "Backed by our HR experts",
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Flutter", "AWS"],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    tagline:
      "Manage sales, customers, inventory and finance from a single source of truth.",
    overview:
      "Stop juggling disconnected tools. Our ERP and CRM solutions bring your leads, customers, inventory, purchases and accounts together — giving you clear visibility across the business and freeing your team from repetitive data entry.",
    icon: "database",
    tags: ["Sales pipeline", "Inventory", "Reports"],
    features: [
      {
        title: "Lead & sales pipeline",
        description: "Capture leads from your website and ads, and track every deal to close.",
      },
      {
        title: "Inventory & purchase",
        description: "Stock levels, vendors, purchase orders and multi-location warehouses.",
      },
      {
        title: "Billing & accounts",
        description: "Quotations, invoices, payments and Tally/Zoho Books integration.",
      },
      {
        title: "Role-based reports",
        description: "Live dashboards for owners, managers and each department.",
      },
    ],
    benefits: [
      "One platform for every team",
      "Automated follow-ups & reminders",
      "Cloud access from anywhere",
      "Customised to your industry",
    ],
    techStack: ["Next.js", "Node.js", "Python", "PostgreSQL", "Odoo", "AWS"],
  },
];

export const solutionProcess = [
  {
    title: "Discover",
    description: "We understand your goals, users and workflows, and define a clear scope.",
  },
  {
    title: "Design",
    description: "Wireframes and UI designs you can review and approve before we build.",
  },
  {
    title: "Develop",
    description: "Agile sprints with regular demos, so you see progress every week.",
  },
  {
    title: "Launch & Support",
    description: "Testing, deployment, training and ongoing maintenance after go-live.",
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "Core Services" },
  { value: 500, suffix: "+", label: "Learners Trained" },
  { value: 50, suffix: "+", label: "Hiring Partners" },
  { value: 100, suffix: "%", label: "Client Commitment" },
];

export const whyChooseUs = [
  {
    title: "End-to-End Partner",
    description:
      "From hiring and payroll to marketing and skilling — one accountable team for your digital success.",
    icon: "layers",
  },
  {
    title: "Industry Experts",
    description:
      "Practitioners with real field experience deliver every service and training program.",
    icon: "badge",
  },
  {
    title: "Student-First Training",
    description:
      "Practical, project-based programs with mentorship and placement support for real outcomes.",
    icon: "graduation",
  },
  {
    title: "Reliable & Responsive",
    description:
      "Clear communication, on-time delivery and dependable support you can build a business on.",
    icon: "shield",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  initials: string;
};

export const team: TeamMember[] = [
 {
  name: "Srikanth S",
  role: "CEO, Recruitment & Payroll Specialist, Digital Marketing Expert, with experience in training and placing 500+ students in top MNCs.",
  email: "srikanth@konnexainnovations.com",
  phone: "+91 79957 89701",
  initials: "SS",
},
  {
    name: "Venkatesh G",
    role: "Managing Director",
    email: "venkatesh@konnexainnovations.com",
    phone: "+91 79957 89701",
    initials: "VG",
  },
];

// Sample testimonials — replace with real client quotes.
export const testimonials = [
  {
    quote:
      "Konnexa handled our hiring and payroll end-to-end. The process was smooth, compliant and genuinely stress-free for our team.",
    name: "Operations Lead",
    company: "Growing SME",
  },
  {
    quote:
      "Their digital marketing brought us consistent, quality leads. We finally have a partner that understands the full funnel.",
    name: "Founder",
    company: "D2C Startup",
  },
  {
    quote:
      "The software training was hands-on and job-focused. Several of our students were placed soon after completing the program.",
    name: "Training Coordinator",
    company: "Partner College",
  },
];
