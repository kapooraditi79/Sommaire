"use client";
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";

{
  /*defining the zod schema for the uploaded files. 
    the files uploaded must follow the below given schema */
}
const schema = z.object({
  file: z
    .instanceof(File, { message: "File is required" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});
export default function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    console.log(file);

    //validating the fields
    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File"
      );
      return;
    }

    //schema validation with zodd
    //upload the file to uploadthing
    //parse the pdf using langchain
    //summarize the pdf using AI
    //save the summary to the database
    //redirect to the [id] summary page
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
