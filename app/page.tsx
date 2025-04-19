import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

//import BgGradient from "@/components/common/bg-gradient";
export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
