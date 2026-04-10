import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import FeaturesGrid from "../components/home/FeaturesGrid";
import HowItWorksSection from "../components/home/HowItWorksSection";
import ComparisonSection from "../components/home/ComparisonSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}