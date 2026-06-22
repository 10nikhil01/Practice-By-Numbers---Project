import { homeFaqSchema } from "@/lib/Schema";
import {
  FirstCTA,
  HeroSection,
  HomeFaq,
  LatestInnovations,
  SecondCTA,
  ThirdCTA,
  TrendingInsights,
} from "@/sections/home";

export default function HomePage() {
  return (
    <>
      <main className="flex max-w-300 min-h-screen flex-col items-center align-middle justify-center">
        <HeroSection />
        <TrendingInsights />
        <FirstCTA />
        <LatestInnovations />
        <SecondCTA />
        <HomeFaq />
        <ThirdCTA />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
    </>
  );
}
