import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { organizationSchema, websiteSchema } from "@/lib/Schema";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://practice-by-numbers.vercel.app"),

  title: {
    default: "Practice by Numbers | Dental Practice Growth Platform",
    template: "%s | Practice by Numbers",
  },

  description:
    "Practice by Numbers helps dental practices improve patient acquisition, retention, scheduling, analytics, communication, payments, and practice growth from one unified platform.",

  keywords: [
    "Dental Analytics",
    "Dental CRM",
    "Dental Practice Management",
    "Dental Marketing",
    "Dental Patient Retention",
    "Dental Reporting",
    "Dental Dashboard",
    "Practice by Numbers",
  ],

  authors: [
    {
      name: "Practice by Numbers",
    },
  ],

  creator: "Nikhil Kumar",
  publisher: "Practice by Numbers",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Practice by Numbers",
    description:
      "One platform for analytics, marketing, patient engagement, and growth.",
    url: "https://practice-by-numbers.vercel.app",
    siteName: "Practice by Numbers",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Practice by Numbers",
    description:
      "One platform for analytics, marketing, patient engagement, and growth.",
  },

  appleWebApp: {
    capable: true,
    title: "Practice by Numbers",
    statusBarStyle: "default",
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "https://practice-by-numbers.vercel.app",
    languages: {
      "x-default": "https://practice-by-numbers.vercel.app",
    },
  },

  bookmarks: ["https://practice-by-numbers.vercel.app"],
  category: "technology",
  classification: "web development",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
      )}
    >
      <body className="min-h-full w-full flex flex-col items-center justify-center align-middle">
        <Analytics debug />
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
