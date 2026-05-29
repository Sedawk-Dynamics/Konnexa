export const site = {
  brand: "Konnexa Innovations",
  legalName: "Konnexa Innovations Private Limited",
  tagline: "Innovating Your Digital Success",
  description:
    "We deliver end-to-end HR services, full-funnel digital marketing, and industry-ready software training & skill development programs that turn ambition into measurable growth.",
  shortDescription:
    "HR Services · Digital Marketing · Software Training & Skill Development",
  email: "info@konnexainnovations.com",
  phone: "+91 89190 77920",
  phoneRaw: "918919077920",
  whatsapp: "918919077920",
  gst: "36AAMCK7842F1Z7",
  address:
    "H.No. 73179/1, Annapurna Road Part 2, Jagtial, Jagtial District, Telangana – 505327",
  instagram: "https://www.instagram.com/konnexa_innovations",
  workingHours: "Mon – Sat · 9:30 AM – 6:30 PM",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
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
