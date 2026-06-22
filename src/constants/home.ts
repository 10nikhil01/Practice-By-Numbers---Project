import type { BlogPost, Innovation } from "@/types/home";

export const trustedCompanies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Spotify",
];

export const features = [
  {
    title: "Patient Communication",
    description: "Automate reminders, follow-ups, and patient engagement.",
  },
  {
    title: "Practice Analytics",
    description: "Track performance with real-time insights and reporting.",
  },
  {
    title: "Online Reputation",
    description: "Generate reviews and improve online visibility.",
  },
  {
    title: "Appointment Automation",
    description: "Reduce no-shows and increase appointment bookings.",
  },
  {
    title: "AI Insights",
    description: "Identify opportunities to grow your practice faster.",
  },
  {
    title: "Smart Campaigns",
    description: "Launch personalized campaigns that convert.",
  },
];

export const benefits = [
  "Increase patient retention",
  "Reduce missed appointments",
  "Improve online reviews",
  "Save staff time",
];

export const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Dental Practice Owner",
    review: "This platform transformed how we communicate with our patients.",
  },
  {
    name: "Dr. Michael Brown",
    role: "Orthodontist",
    review: "We saw a significant increase in appointment bookings.",
  },
];

export const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most practices are up and running within a few days.",
  },
  {
    question: "Do you provide onboarding?",
    answer: "Yes, our team will guide you through setup and training.",
  },
];

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Should Dental Practices Automate or Keep Things Human?",
    excerpt: "The question is popping up...",
    date: "June 10, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/Digital-marketing-tactics-thumbnail-768x466.jpg",
    href: "/blog/automation-vs-human",
  },
  {
    id: "2",
    title: "End-to-End Patient Journey Tracking for Dental Practices",
    excerpt: "Most dental practices track clicks...",
    date: "June 9, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/Call-scoring-playbook-Thumbnail-768x466.jpg",
    href: "/blog/patient-journey-tracking",
  },
  {
    id: "3",
    title: "Best Digital Marketing Tactics for Dentists",
    excerpt: "Your marketing budget is limited...",
    date: "June 12, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/Best-dental-social-media-marketing-practices-Thumbnail-768x466.jpg",
    href: "/blog/digital-marketing",
  },
  {
    id: "4",
    title: "How AI Is Transforming Modern Dental Practices",
    excerpt: "AI is changing patient engagement...",
    date: "June 15, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/PbN_Blog_Open_Dental_Practice_By_Numbers-768x466.jpg",
    href: "/blog/ai-dental",
  },
  {
    id: "5",
    title: "End-to-End Patient Journey Tracking for Dental Practices",
    excerpt: "Most dental practices track clicks...",
    date: "June 9, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/Call-scoring-playbook-Thumbnail-768x466.jpg",
    href: "/blog/patient-journey-tracking",
  },
  {
    id: "6",
    title: "Best Digital Marketing Tactics for Dentists",
    excerpt: "Your marketing budget is limited...",
    date: "June 12, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/Best-dental-social-media-marketing-practices-Thumbnail-768x466.jpg",
    href: "/blog/digital-marketing",
  },
  {
    id: "7",
    title: "How AI Is Transforming Modern Dental Practices",
    excerpt: "AI is changing patient engagement...",
    date: "June 15, 2026",
    image:
      "https://practicenumbers.com/wp-content/uploads/2026/06/PbN_Blog_Open_Dental_Practice_By_Numbers-768x466.jpg",
    href: "/blog/ai-dental",
  },
];

export const innovations: Innovation[] = [
  {
    id: "voice",
    tabLabel: "PbN Voice",

    title: {
      line1: "A",
      highlight: "Smarter Phone System",
      line2: "for Your Dental Practice.",
    },

    description:
      "Make every call count with a cloud-based phone system that shows who's calling, why they're calling, and what to do next, all synced with your PMS.",

    bullets: [
      "See patient info the moment they call, appointments, balances, notes.",
      "Send automatic texts when you miss a call to avoid lost bookings.",
      "Route calls to the right team member, at the right time.",
      "Track call volume, wait times, and missed calls with easy reports.",
      "Link multiple offices to share calls, schedules, and follow-ups.",
    ],

    ctaText: "Upgrade your phone system >",
    ctaHref: "#",

    image:
      "https://practicenumbers.com/wp-content/uploads/2026/04/Group-1686564045-1.png",
  },

  {
    id: "payment",
    tabLabel: "Payment Plans",

    title: {
      line1: "Make Patient Care",
      highlight: "More Affordable",
    },

    description:
      "Give patients an easier way to say yes to treatment. PbN Payment Plans help you boost case acceptance, improve collections, and reduce admin stress. No third-party financing needed.",

    bullets: [
      "Create custom plans for any treatment or past-due balance.",
      "Let patients sign up from anywhere. No forms. No hassle.",
      "Automate payments and reminders with built-in messaging.",
      "Track payment activity and overdue accounts in real time.",
      "Syncs with your PMS, patient portal, and more.",
    ],

    ctaText: "Try Payment Plans Today >",
    ctaHref: "#",

    image:
      "https://practicenumbers.com/wp-content/uploads/2025/11/Group-1686561248-6-768x709.png",
  },

  {
    id: "ai",
    tabLabel: "PbN AI",

    title: {
      line1: "Lighten Your Workload",
      highlight: "With PbN AI",
    },

    description:
      "PbN AI helps your team save time on everyday tasks, like call follow-ups, messages, and paperwork, so you can focus on patients and growth.",

    bullets: [
      "Turn calls into clear summaries with patient insights and follow-up actions.",
      "AI writes your texts, emails, and review replies, no need to start from scratch.",
      "Spot trends and missed revenue opportunities with easy AI reports.",
      "Track which calls lead to bookings or cancellations.",
      "Translate messages and summarize forms in seconds.",
    ],

    ctaText: "Get started >",
    ctaHref: "#",

    image:
      "https://practicenumbers.com/wp-content/uploads/2025/11/Group-1686562262.png",
  },
];

export const heroStats = [
  {
    value: "375+",
    label: "Hours Saved Annually.",
  },
  {
    value: "32%",
    label: "Decrease in Claim Denials.",
  },
  {
    value: "40%",
    label: "More Positive Patient Reviews.",
  },
  {
    value: "48+",
    label: "More Chairs Filled.",
  },
];

export const homeFAQs = [
  {
    question: "What is Practice by Numbers?",
    answer:
      "Practice by Numbers is a dental practice growth platform that helps practices improve analytics, patient communication, marketing performance, scheduling, payments, and operational efficiency from a single platform.",
  },
  {
    question: "How does Practice by Numbers help dental practices?",
    answer:
      "Practice by Numbers helps dental practices increase revenue, improve patient retention, automate workflows, enhance communication, and make data-driven decisions through real-time analytics and reporting.",
  },
  {
    question: "Which PMS systems does Practice by Numbers support?",
    answer:
      "Practice by Numbers integrates with leading dental practice management systems including Dentrix, Dentrix Ascend, Eaglesoft, Open Dental, Practice-Web, and other major PMS providers.",
  },
  {
    question: "Can Practice by Numbers improve patient retention?",
    answer:
      "Yes. Practice by Numbers provides tools for patient communication, recall management, appointment reminders, reputation management, and engagement tracking to help improve patient retention.",
  },
  {
    question: "Does Practice by Numbers integrate with Dentrix?",
    answer:
      "Yes. Practice by Numbers integrates with Dentrix and several other PMS platforms, allowing practices to centralize patient data, reporting, communication, and operational insights.",
  },
];
