import { trustedCompanies } from "@/constants/home";

export const TrustedBy = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Trusted by leading organizations
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {trustedCompanies.map((company) => (
            <span
              key={company}
              className="text-lg font-semibold text-muted-foreground"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
