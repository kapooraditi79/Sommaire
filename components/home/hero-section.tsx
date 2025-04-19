import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-20 sm:py-24 lg:pb-32 transition-all animate-in lg:px-16 max-w-7xl">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Badge className="relative p-0.5 overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200 hover:from-rose-300 hover:to-rose-400 transition-all duration-300">
            <div className="flex items-center bg-white dark:bg-gray-900 rounded-full px-3 py-1">
              <Sparkles className="h-5 w-5 mr-2 text-rose-600 animate-pulse" />
              <p className="text-sm font-medium text-rose-700">Powered by AI</p>
            </div>
          </Badge>
        </div>
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl py-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-rose-600">
          Transform PDFs into{" "}
          <span className="italic font-extrabold">Concise</span> Summaries
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-6 lg:px-0 lg:max-w-3xl text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          Get a stunning summary reel of your document in seconds
        </h2>
        <div className="mt-10">
          <Button
            variant={"link"}
            asChild
            className="text-white text-base lg:text-lg px-8 py-4 bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 rounded-full font-semibold transition-all duration-300 ease-in-out shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-slate-900/50 hover:scale-105"
          >
            <Link href="/#pricing" className="flex gap-2 items-center">
              <span>Try Sommaire</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
