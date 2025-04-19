import { ReactNode } from "react";
import { FileText } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { FileOutput } from "lucide-react";

type Step = {
  icon: ReactNode;
  description: string;
  label: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDFs",
    description: "Simply drag and drop your PDF files into the upload area.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description:
      "Receive a concise summary of your document, ready to read and share.",
  },
];

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-red-500/10 transition-colors group w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-full bg-gray-50 shadow-md group-hover:ring-4 group-hover:ring-red-500 transition-all duration-300">
          <div className="text-red-500">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl text-gray-800">
            {label}
          </h4>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            How it Works
          </h2>
          <h3 className="mt-4 text-xl text-gray-700 font-medium">
            Transform any PDF into an{" "}
            <span className="text-red-500 font-bold">easy-to-digest</span>{" "}
            summary in three simple steps.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <StepItem key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
