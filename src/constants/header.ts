export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  links: NavLink[];
};

export const solutionsNav: NavGroup[] = [
  {
    label: "Business Analytics",
    href: "/business-analytics",
    links: [
      {
        label: "Business Analytics",
        href: "/business-analytics",
        description: "Track, analyze, and grow with real-time insights",
      },
      {
        label: "Practice IQ",
        href: "/business-analytics/practice-iq",
        description: "Optimize your dental practice with data-driven insights",
      },
      {
        label: "Revenue IQ",
        href: "/business-analytics/revenue-iq",
        description: "Spot the revenue gaps and reach more patients",
      },
      {
        label: "Enterprise Dashboard",
        href: "/business-analytics/enterprise-dashboard",
        description: "Multi-location management made simple",
      },
      { label: "ROI Calculator", href: "/roi-calculator/business-analytics" },
    ],
  },
  {
    label: "Patient Relationship Management",
    href: "/prm",
    links: [
      {
        label: "Patient Relationship Management",
        href: "/prm",
        description: "Everything your practice needs to stay patient-first",
      },
      {
        label: "Patient Reminders",
        href: "/prm/patient-reminders",
        description: "Seamless reminders that sync with your PMS",
      },
      {
        label: "Essential Campaigns",
        href: "/prm/essential-campaigns",
        description: "Build a practice where patients actually show up",
      },
      {
        label: "Patient Follow Up Campaigns",
        href: "/prm/patient-follow-up-campaigns",
        description: "Never lose track of patients again",
      },
      {
        label: "Two Way Patient Texting",
        href: "/prm/two-way-patient-texting",
        description: "Messaging that works both ways",
      },
      {
        label: "Online Appointment Booking",
        href: "/prm/online-appointment-booking",
        description: "Syncs with your PMS to read and write appointments",
      },
      {
        label: "Review Management",
        href: "/prm/patient-reviews",
        description: "Boost your practice with positive reviews",
      },
      {
        label: "PbN Voice",
        href: "/prm/pbn-voice",
        description: "The smarter phone system for dental practices",
      },
      {
        label: "Patient Portal",
        href: "/prm/patient-portal",
        description: "Give patients complete control over their care",
      },
      {
        label: "ROI Calculator",
        href: "/roi-calculator/patient-relationship-management",
      },
    ],
  },
  {
    label: "Operational Efficiency",
    href: "/operational-efficiency",
    links: [
      {
        label: "Operational Efficiency",
        href: "/operational-efficiency",
        description: "Save hours daily with connected workflows",
      },
      {
        label: "PbN Payments Suite",
        href: "/pbn-payments-suite",
        description: "Simplify dental payments with one smart platform",
      },
      {
        label: "Patient Flow",
        href: "/pbn-payments-suite/patient-flow",
        description: "Manage every step of the patient journey",
      },
      {
        label: "Forms and Kiosk",
        href: "/operational-efficiency/forms-and-kiosk",
        description: "A friction-free check-in experience",
      },
      {
        label: "Insurance Verification",
        href: "/pbn-payments-suite/insurance-verification",
        description: "Verify patients in advance, reduce denials",
      },
      {
        label: "Online Appointment Booking",
        href: "/operational-efficiency/online-appointment-booking",
      },
      {
        label: "Advanced Task Management",
        href: "/operational-efficiency/advanced-task-management",
      },
      {
        label: "Grow App",
        href: "/grow-app",
        description: "Manage your practice, anytime, anywhere",
      },
      {
        label: "Daily Huddle",
        href: "/operational-efficiency/daily-huddle",
        description: "Daily huddles that drive results",
      },
      {
        label: "ROI Calculator",
        href: "/roi-calculator/operational-efficiency",
      },
    ],
  },
  {
    label: "Smart Forms",
    href: "/smart-form",
    links: [
      {
        label: "Smart Forms",
        href: "/smart-form",
        description: "Streamline patient check-in from start to finish",
      },
      {
        label: "Digital Forms",
        href: "/smart-form/digital-forms",
        description: "Streamline your workflow with digital patient forms",
      },
      {
        label: "Kiosk Check In",
        href: "/smart-form/kiosk-check-in",
        description: "Power up your front office with smart kiosk check-in",
      },
      { label: "ROI Calculator", href: "/roi-calculator/smart-forms" },
    ],
  },
  {
    label: "PbN AI",
    href: "/pbn-ai",
    links: [
      {
        label: "PbN AI",
        href: "/pbn-ai",
        description: "Most advanced AI assistant for dental practices",
      },
      {
        label: "Call AI",
        href: "/pbn-ai/call-ai",
        description: "AI insights that transform every patient call",
      },
      {
        label: "Ops AI",
        href: "/pbn-ai/ops-ai",
        description: "Automate admin work instantly with AI",
      },
      {
        label: "IntelliSuite",
        href: "/pbn-ai/intellisuite",
        description: "All-in-one AI engine for dental operations",
      },
      { label: "ROI Calculator", href: "/roi-calculator/pbn-ai" },
    ],
  },
  {
    label: "Dental Marketing",
    href: "/dental-marketing-suite",
    links: [
      {
        label: "Dental Marketing Suite",
        href: "/dental-marketing-suite",
        description: "Every marketing tool your practice needs",
      },
      {
        label: "Marketing IQ",
        href: "/dental-marketing-suite/marketing-iq",
        description: "Turn your marketing data into measurable growth",
      },
      {
        label: "Call Tracking",
        href: "/dental-marketing-suite/call-tracking",
        description: "Turn every phone call into a better experience",
      },
      {
        label: "Marketing ROI",
        href: "/dental-marketing-suite/marketing-roi",
        description: "Dental marketing performance dashboard",
      },
      {
        label: "Webchat",
        href: "/dental-marketing-suite/webchat",
        description: "Connect with patients on your website",
      },
      {
        label: "Custom Campaigns",
        href: "/dental-marketing-suite/custom-campaigns",
      },
      {
        label: "Review Management",
        href: "/dental-marketing-suite/review-management",
      },
      {
        label: "Online Appointment Booking",
        href: "/dental-marketing-suite/online-appointment-booking",
      },
      {
        label: "ROI Calculator",
        href: "/roi-calculator/dental-marketing-suite",
      },
    ],
  },
  {
    label: "PbN Payments",
    href: "/pbn-payments-suite",
    links: [
      {
        label: "PbN Payments",
        href: "/pbn-payments-suite",
        description: "Simplify how you collect and manage payments",
      },
      {
        label: "Anywhere Payments",
        href: "/pbn-payments-suite/anywhere-payments",
        description: "Make it easy for patients to pay",
      },
      {
        label: "Transparent Pricing",
        href: "/pbn-payments-suite/transparent-pricing",
        description: "Full visibility into every transaction and fee",
      },
      {
        label: "Payment Plans",
        href: "/pbn-payments-suite/payment-plans",
        description: "Customizable plans without compromising cash flow",
      },
      {
        label: "PbN ZeroPay",
        href: "/pbn-payments-suite/pbn-zeropay",
        description: "Eliminate credit card processing fees",
      },
      { label: "ROI Calculator", href: "/roi-calculator/pbn-payments-suite" },
    ],
  },
  {
    label: "PbN Voice",
    href: "/pbn-voice",
    links: [
      {
        label: "PbN Voice",
        href: "/pbn-voice",
        description: "A better call experience for you and your patients",
      },
      { label: "ROI Calculator", href: "/roi-calculator/pbn-voice" },
    ],
  },
];

export const useCasesNav: NavLink[] = [
  {
    label: "Office Managers",
    href: "/use-cases/office-managers",
    description: "Streamline daily tasks and automate workflows",
  },
  {
    label: "Dentists",
    href: "/use-cases/dentists",
    description: "Make confident, data-driven decisions",
  },
  {
    label: "DSOs",
    href: "/use-cases/dsos",
    description: "Standardize systems across all locations",
  },
  {
    label: "Marketing Agencies",
    href: "/use-cases/marketing-agencies",
    description: "Deliver accurate, reliable results to clients",
  },
  {
    label: "Single Practice",
    href: "/use-cases/single-practices",
    description: "One source for marketing, analytics, payments",
  },
  {
    label: "Multi Practice",
    href: "/use-cases/multiple-practices",
    description: "Whether you have 3 offices or 300",
  },
  {
    label: "Dental Consultants",
    href: "/use-cases/dental-consultants",
    description: "A one-stop, all-encompassing solution",
  },
];

export const companyNav: NavLink[] = [
  {
    label: "About Us",
    href: "/company/about-us",
    description: "Crafting user-friendly software solutions",
  },
  {
    label: "Core Values",
    href: "/company/core-values",
    description: "Empowering dental professionals to transform",
  },
  {
    label: "Our People",
    href: "/company/meet-us",
    description: "Meet our remote team across the globe",
  },
  {
    label: "Security & Data Protection",
    href: "/company/security-data-protection",
    description: "Your privacy and security, our priority",
  },
  {
    label: "Careers at PbN",
    href: "/company/careers",
    description: "Join our team",
  },
  {
    label: "Partner",
    href: "/company/partner",
    description: "Earn revenue share on resulting sales",
  },
  {
    label: "Customers",
    href: "/company/customer-wall",
    description: "See how practices fall in love with PbN",
  },
];

export const compareNav: NavLink[] = [
  { label: "Weave", href: "/compare/practice-by-numbers-vs-weave" },
  {
    label: "Dental Intel",
    href: "/compare/practice-by-numbers-vs-dental-intel",
  },
  { label: "Yapi", href: "/compare/practice-by-numbers-vs-yapi" },
  { label: "Nexhealth", href: "/compare/practice-by-numbers-vs-nexhealth" },
  { label: "Flex Dental", href: "/compare/practice-by-numbers-vs-flex-dental" },
  {
    label: "Solutionreach",
    href: "/compare/practice-by-numbers-vs-solution-reach",
  },
  { label: "RevenueWell", href: "/compare/practice-by-numbers-vs-revenuewell" },
  { label: "Adit", href: "/compare/practice-by-numbers-vs-adit" },
  {
    label: "LightHouse360",
    href: "/compare/practice-by-numbers-vs-lighthouse360",
  },
];

export const resourcesNav: NavLink[] = [
  {
    label: "Podcast",
    href: "https://pbnpresents.practicenumbers.com/",
    description: "Dentistry professionals share engaging content",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Insights to help you build your practice",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Learn how PbN has helped practices grow",
  },
  {
    label: "PbN Learn",
    href: "/pbn-learn",
    description: "Structured training to simplify your learning",
  },
];
