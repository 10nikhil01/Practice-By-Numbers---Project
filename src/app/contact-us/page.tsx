import {
  contactFaqSchema,
  contactOrganizationSchema,
  contactPageSchema,
} from "@/schema/contactPage";
import { GetConnect } from "@/sections/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Get in touch with Practice by Numbers. Speak with our team, request a demo, or learn how our platform can help your dental practice grow.",

  alternates: {
    canonical: "https://practice-by-numbers.vercel.app/contact-us",
  },
};
export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactOrganizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactFaqSchema),
        }}
      />
      <main className="flex my-12 max-w-300 w-full flex-col items-center align-middle justify-center">
        <GetConnect />
      </main>
      <section className="sr-only">
        <h2>Contact Practice by Numbers</h2>

        <p>
          Practice by Numbers helps dental practices improve patient engagement,
          analytics, reporting, communication, and growth. Contact our team to
          learn how our platform can support your practice.
        </p>
      </section>
    </>
  );
}
