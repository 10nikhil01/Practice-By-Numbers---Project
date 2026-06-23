import { CheckCircle2 } from "lucide-react";

const highlights = [
  "A personalized walkthrough of the PbN platform",
  "Real use cases for reducing no-shows, improving case acceptance, and streamlining payments",
  "How PbN fits into your current systems, including PMS integration",
  "Live Q&A with a product expert",
];

export const DemoHero = () => {
  return (
    <section className="w-full px-6 py-2 lg:py-16">
      {/* Left */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          What you&apos;ll see <br />
          in <span className="text-indigo-600">your demo</span>
        </h1>

        <ul className="flex flex-col gap-3 mb-8">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="text-indigo-600 mt-0.5 shrink-0"
                size={20}
              />
              <span className="text-base text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-base text-foreground mb-10">
          See how PbN simplifies practice management, with plans{" "}
          <strong>starting from $249/mo.</strong>
        </p>

        {/* Already a customer */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 mb-2">
            Already using Practice by Numbers?
          </h2>
          <p className="text-lg text-muted-foreground">
            Check the box in the form for a faster, more focused demo,
            we&apos;ll skip the basics and get straight to what matters.
          </p>
        </div>
      </div>
    </section>
  );
};
