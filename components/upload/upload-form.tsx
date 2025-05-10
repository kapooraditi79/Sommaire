"use client";
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useUploadThing } from "@/utils/uploadthing";
import { generatePdfSummary } from "@/actions/upload_actions";

{
  /*defining the zod schema for the uploaded files. 
    the files uploaded must follow the below given schema */
}
//validating the file using zod
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
  // Removed useToast as it is not exported by "sonner"
  {
    /*useUploadThing impoted from utility file */
  }
  {
    /*pdfUploader is in the core file, under "OurFileRouter" (from api/uploadthing/core) */
  }
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (error) => {
      console.error("error occurred while uploading", error);
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });
  {
    /*What is the purpose of "useUploadThing" 
    1. initializes the startUpload, routconfig
    2. the "onClientUploadComplete" is a callback that handles
        the onUploadError, and onUploadBegin, which UploadForm uses to log upload status or handle errors.
    */
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const resp = await startUpload([file]);

    if (!resp) return;

    //parse the pdf using langchain
    const result = await generatePdfSummary(resp);
    console.log("summary", result);

    const { data = null, message = null } = result || {};

    if (data) {
      console.log("WE ARE SAVING YOUR SUMMARY TO THE DATABASE. WAIT UP");
      if (data.summary) {
        //save the summary to the database
      }
    }
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
