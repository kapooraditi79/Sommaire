import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function UploadHeader() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 transition-all duration-300 animate-pulse-once">
            <Sparkles className="h-4 w-4 mr-2 text-rose-600 animate-pulse" />
            <span className="text-sm font-medium">
              AI-Powered Content Creation
            </span>
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-rose-600 bg-clip-text">
          Start Uploading Your PDFs
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Upload your PDF and let our AI do the job
        </p>
      </div>
    </section>
  );
}
