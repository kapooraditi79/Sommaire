"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
  return (
    <div className="space-y-4">
      <form
        onSubmit={onSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <Input
          id="file"
          name="file"
          accept="application/pdf"
          required
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
        />
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-700 to-rose-800 text-white py-2 rounded-lg hover:from-rose-800 hover:to-rose-900 transition-all duration-300"
        >
          Upload Your PDF
        </Button>
      </form>
    </div>
  );
}
