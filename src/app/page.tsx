import {
  FirstCTA,
  HeroSection,
  LatestInnovations,
  SecondCTA,
  ThirdCTA,
  TrendingInsights,
} from "@/sections/home";

export default function HomePage() {
  return (
    <main className="flex max-w-300 min-h-screen flex-col items-center align-middle justify-center">
      <HeroSection />
      <FirstCTA />
      <TrendingInsights />
      <SecondCTA />
      <LatestInnovations />
      <ThirdCTA />
    </main>
  );
}
