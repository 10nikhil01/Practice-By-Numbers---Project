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
      { label: "About Us", href: "/#" },
      { label: "Our People", href: "/#" },
      { label: "Core Values", href: "/#" },
      { label: "Careers at PbN", href: "/#" },
      { label: "Partner Program", href: "/#" },
      { label: "Pricing", href: "/#" },
      { label: "Customers", href: "/#" },
      { label: "PbN Insider", href: "/#" },
      {
        label: "Trust",
        href: "/#",
      },
      {
        label: "Security & Data Protection",
        href: "/#",
      },
    ],
  },
  {
    title: "Use Case",
    links: [
      { label: "Dentists", href: "/#" },
      { label: "Office Managers", href: "/#" },
      { label: "Single Practices", href: "/#" },
      { label: "Multi-Practice", href: "/#" },
      { label: "Dental Consultants", href: "/#" },
      { label: "DSOs", href: "/#" },
      { label: "Marketing Agencies", href: "/#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Weave", href: "/#" },
      { label: "Nexhealth", href: "/#" },
      {
        label: "RevenueWell",
        href: "/#",
      },
      {
        label: "Dental Intel",
        href: "/#",
      },
      {
        label: "Flex Dental",
        href: "/#",
      },
      { label: "Adit", href: "/#" },
      { label: "Yapi", href: "/#" },
      {
        label: "Solutionreach",
        href: "/#",
      },
      {
        label: "LightHouse360",
        href: "/#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "PbN Presents",
        href: "/#",
      },
      { label: "PbN Blog", href: "/blog" },
      { label: "Podcast", href: "/#" },
      { label: "PbN Learn", href: "/#" },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Login",
        href: "/#",
      },
      { label: "Kiosk", href: "/#" },
      { label: "Call Us", href: "/#" },
      { label: "Email Us", href: "/#" },
      { label: "Help Centre", href: "/#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Integration",
    links: [
      { label: "Dentrix", href: "/#" },
      {
        label: "Dentrix Ascend",
        href: "/#",
      },
      { label: "Practice Web", href: "/#" },
      { label: "EagleSoft", href: "/#" },
      { label: "Open Dental", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/#" },
      { label: "Terms of Use", href: "/#" },
      { label: "Cancellation Policy", href: "/#" },
      {
        label: "Payments Terms of Service",
        href: "/#",
      },
      { label: "VoIP Service Terms", href: "/#" },
      { label: "Patient Terms of Service", href: "/#" },
    ],
  },
];

// "Our Solutions" block — right-hand group of columns
export const solutionsColumns: FooterColumn[] = [
  {
    title: "Business Analytics",
    links: [
      { label: "Business Analytics", href: "/#" },
      { label: "Practice IQ", href: "/#" },
      { label: "Revenue IQ", href: "/#" },
      {
        label: "Enterprise Dashboard",
        href: "/#",
      },
    ],
  },
  {
    title: "PbN AI",
    links: [
      { label: "PbN AI", href: "/#" },
      { label: "Call AI", href: "/#" },
      { label: "Ops AI", href: "/#" },
      { label: "IntelliSuite", href: "/#" },
    ],
  },
  {
    title: "PRM",
    links: [
      { label: "PRM", href: "/#" },
      { label: "Patient Reminders", href: "/#" },
      { label: "Essential Campaigns", href: "/#" },
      { label: "Custom Campaigns", href: "/#" },
      {
        label: "Follow-Ups Campaigns",
        href: "/#",
      },
      {
        label: "Two-way Patient Texting",
        href: "/#",
      },
      {
        label: "Online Appointment Booking",
        href: "/#",
      },
      { label: "PbN Voice", href: "/#" },
      { label: "Review Management", href: "/#" },
      { label: "Patient Portal", href: "/#" },
    ],
  },
  {
    title: "PbN Voice",
    links: [
      { label: "PbN Voice", href: "/#" },
      { label: "ROI Calculator", href: "/#" },
    ],
  },
  {
    title: "PbN Payments Suite",
    links: [
      {
        label: "Transparent Pricing",
        href: "/#",
      },
      {
        label: "Anywhere Payments",
        href: "/#",
      },
      { label: "Payment Plans", href: "/#" },
      { label: "PbN ZeroPay", href: "/#" },
    ],
  },
  {
    title: "Smart Forms",
    links: [
      { label: "Smart Forms", href: "/#" },
      { label: "Digital Forms", href: "/#" },
      { label: "Kiosk Check In", href: "/#" },
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
