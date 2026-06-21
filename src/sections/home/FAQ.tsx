import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/constants/home";

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>

              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
