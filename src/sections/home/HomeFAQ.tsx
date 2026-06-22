import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFAQs } from "@/constants";
export const HomeFaq = () => {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-300 px-4">
        <div className="text-center">
          <h2 className="text-[42px] md:text-[64px] font-light text-[#1E2254]">
            Frequently Asked
          </h2>

          <h3 className="mt-2 text-[42px] md:text-[64px] font-bold text-[#5A54F9]">
            Questions
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about Practice by Numbers and how it
            helps dental practices grow.
          </p>
        </div>

        <div className="mx-auto mt-16">
          <Accordion type="single" collapsible className="space-y-4 text-white">
            {homeFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" rounded-2xl md:max-w-3xl border border-border bg-accordion text-white px-6 shadow-sm "
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline text-accent-foreground">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-base leading-7 text-accent-foreground/75">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
