import Link from "next/link";
import { Button } from "@/components/ui/button";
import PricingSection from "./pricing-section";

export default function CTASection() {
  return (
    <section className="relative py-12 lg:py-24 bg-gray-200 w-full">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Ready to Save Hours of Reading Time?
        </h3>
        <p className="mt-3 text-base text-gray-600">
          Transform lengthy documents into clear, actionable insights with our
          AI-powered summarizer
        </p>
        <Link
          href="/#pricing"
          className="mt-5 inline-block px-6 py-2 bg-gradient-to-r from-rose-800 to-rose-700 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-rose-800 transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
