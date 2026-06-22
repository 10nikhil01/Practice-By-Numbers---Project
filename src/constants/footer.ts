export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

// "Our Company" block — left-hand group of columns
export const companyColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Our People", href: "/company/meet-us" },
      { label: "Core Values", href: "/company/core-values" },
      { label: "Careers at PbN", href: "/company/careers" },
      { label: "Partner Program", href: "/company/partner" },
      { label: "Pricing", href: "/pricing" },
      { label: "Customers", href: "/company/customer-wall" },
      { label: "PbN Insider", href: "/pbn-insider" },
      {
        label: "Trust",
        href: "https://app.drata.com/trust/5d22d7b9-0e99-468b-8825-b6c4632ba18a",
      },
      {
        label: "Security & Data Protection",
        href: "/company/security-data-protection",
      },
    ],
  },
  {
    title: "Use Case",
    links: [
      { label: "Dentists", href: "/use-cases/dentists" },
      { label: "Office Managers", href: "/use-cases/office-managers" },
      { label: "Single Practices", href: "/use-cases/single-practices" },
      { label: "Multi-Practice", href: "/use-cases/multiple-practices" },
      { label: "Dental Consultants", href: "/use-cases/dental-consultants" },
      { label: "DSOs", href: "/use-cases/dsos" },
      { label: "Marketing Agencies", href: "/use-cases/marketing-agencies" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Weave", href: "/compare/practice-by-numbers-vs-weave" },
      { label: "Nexhealth", href: "/compare/practice-by-numbers-vs-nexhealth" },
      {
        label: "RevenueWell",
        href: "/compare/practice-by-numbers-vs-revenuewell",
      },
      {
        label: "Dental Intel",
        href: "/compare/practice-by-numbers-vs-dental-intel",
      },
      {
        label: "Flex Dental",
        href: "/compare/practice-by-numbers-vs-flex-dental",
      },
      { label: "Adit", href: "/compare/practice-by-numbers-vs-adit" },
      { label: "Yapi", href: "/compare/practice-by-numbers-vs-yapi" },
      {
        label: "Solutionreach",
        href: "/compare/practice-by-numbers-vs-solution-reach",
      },
      {
        label: "LightHouse360",
        href: "/compare/practice-by-numbers-vs-lighthouse360",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "PbN Presents",
        href: "https://pbnpresents.practicenumbers.com/",
      },
      { label: "PbN Blog", href: "/blog" },
      { label: "Podcast", href: "/podcast" },
      { label: "PbN Learn", href: "/pbn-learn" },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Login",
        href: "https://app.practicenumbers.com/accounts/login/",
      },
      { label: "Kiosk", href: "https://app.practicenumbers.com/forms" },
      { label: "Call Us", href: "tel:+18662168416" },
      { label: "Email Us", href: "mailto:support@practicenumbers.com" },
      { label: "Help Centre", href: "https://help.practicenumbers.com/en/" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Integration",
    links: [
      { label: "Dentrix", href: "/integration/dentrix" },
      {
        label: "Dentrix Ascend",
        href: "/integration/dentrix-ascend-integration",
      },
      { label: "Practice Web", href: "/integration/practice-web" },
      { label: "EagleSoft", href: "/integration/eaglesoft" },
      { label: "Open Dental", href: "/integration/open-dental" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
      {
        label: "Payments Terms of Service",
        href: "/pbn-payments-terms-and-conditions",
      },
      { label: "VoIP Service Terms", href: "/voip" },
      { label: "Patient Terms of Service", href: "/patient-terms-of-service" },
    ],
  },
];

// "Our Solutions" block — right-hand group of columns
export const solutionsColumns: FooterColumn[] = [
  {
    title: "Business Analytics",
    links: [
      { label: "Business Analytics", href: "/business-analytics" },
      { label: "Practice IQ", href: "/business-analytics/practice-iq" },
      { label: "Revenue IQ", href: "/business-analytics/revenue-iq" },
      {
        label: "Enterprise Dashboard",
        href: "/business-analytics/enterprise-dashboard",
      },
    ],
  },
  {
    title: "PbN AI",
    links: [
      { label: "PbN AI", href: "/pbn-ai" },
      { label: "Call AI", href: "/pbn-ai/call-ai" },
      { label: "Ops AI", href: "/pbn-ai/ops-ai" },
      { label: "IntelliSuite", href: "/pbn-ai/intellisuite" },
    ],
  },
  {
    title: "PRM",
    links: [
      { label: "PRM", href: "/prm" },
      { label: "Patient Reminders", href: "/prm/patient-reminders" },
      { label: "Essential Campaigns", href: "/prm/essential-campaigns" },
      { label: "Custom Campaigns", href: "/prm/custom-campaigns" },
      {
        label: "Follow-Ups Campaigns",
        href: "/prm/patient-follow-up-campaigns",
      },
      {
        label: "Two-way Patient Texting",
        href: "/prm/two-way-patient-texting",
      },
      {
        label: "Online Appointment Booking",
        href: "/prm/online-appointment-booking",
      },
      { label: "PbN Voice", href: "/prm/pbn-voice" },
      { label: "Review Management", href: "/prm/patient-reviews" },
      { label: "Patient Portal", href: "/prm/patient-portal" },
    ],
  },
  {
    title: "PbN Voice",
    links: [
      { label: "PbN Voice", href: "/pbn-voice" },
      { label: "ROI Calculator", href: "/roi-calculator/pbn-voice" },
    ],
  },
  {
    title: "PbN Payments Suite",
    links: [
      {
        label: "Transparent Pricing",
        href: "/pbn-payments-suite/transparent-pricing",
      },
      {
        label: "Anywhere Payments",
        href: "/pbn-payments-suite/anywhere-payments",
      },
      { label: "Payment Plans", href: "/pbn-payments-suite/payment-plans" },
      { label: "PbN ZeroPay", href: "/pbn-payments-suite/pbn-zeropay" },
    ],
  },
  {
    title: "Smart Forms",
    links: [
      { label: "Smart Forms", href: "/smart-form" },
      { label: "Digital Forms", href: "/smart-form/digital-forms" },
      { label: "Kiosk Check In", href: "/smart-form/kiosk-check-in" },
    ],
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/practicenumbers/",
    iconSrc:
      "https://practicenumbers.com/wp-content/themes/marketing_website/dist/img/facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/practice-by-numbers",
    iconSrc:
      "https://practicenumbers.com/wp-content/themes/marketing_website/dist/img/linkedin.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCHbRmlpsaO3jAlVT1Khh4RA",
    iconSrc:
      "https://practicenumbers.com/wp-content/themes/marketing_website/dist/img/youtube.svg",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/practicenumbers/",
    iconSrc:
      "https://practicenumbers.com/wp-content/uploads/2025/10/icons8-x.svg",
  },
];
