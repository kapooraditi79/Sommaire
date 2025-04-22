import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";

export default function Page() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <UploadHeader />
        <UploadForm />
      </div>
    </section>
  );
}
