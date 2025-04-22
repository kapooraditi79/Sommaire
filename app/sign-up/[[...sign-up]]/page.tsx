import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-rose-600 bg-clip-text">
            Sign Up
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account to get started with our AI-powered summarizer
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              card: "bg-white rounded-2xl shadow-md",
              headerTitle: "text-2xl font-bold text-gray-900",
              headerSubtitle: "text-sm text-gray-600",
              socialButtons: "bg-rose-700 hover:bg-rose-900 text-white",
              formButtonPrimary:
                "bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-rose-900 text-white rounded-lg",
              formFieldInput:
                "border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500",
              footerActionLink: "text-rose-600 hover:text-rose-700",
            },
          }}
        />
      </div>
    </div>
  );
}
