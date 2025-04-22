"use client";
import UploadFormInput from "@/components/upload/upload-form-input";

export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
