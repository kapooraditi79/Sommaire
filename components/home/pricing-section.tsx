import Link from "next/link";

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for occasional use",
    price: "$9 usd /month",
    features: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professionals and teams",
    price: "$19 usd /month",
    features: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];

interface PricingCardProps {
  name: string;
  price: string;
  priceId?: string;
  description: string;
  paymentLink: string;
  features: string[];
  isPro?: boolean;
}

const PricingCard = ({
  name,
  price,
  priceId,
  description,
  paymentLink,
  features,
  isPro,
}: PricingCardProps) => {
  return (
    <div
      className={`relative w-full max-w-lg p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
        isPro ? "bg-gradient-to-br from-white/90 to-rose-50" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-4xl font-bold mt-4 text-black">{price}</p>
        <p className="text-gray-500 mb-6">Features:</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm">
              {feature.trim()}
            </li>
          ))}
        </ul>
        <Link
          href={paymentLink || "#"}
          className="inline-block w-full text-center bg-rose-800 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="relative py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            {...plan}
            paymentLink={plan.paymentLink || "#"}
            isPro={plan.id === "pro"}
          />
        ))}
      </div>
    </section>
  );
}
