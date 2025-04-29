import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();
{
  /*
    1. this is the utility file that generates React hooks.
       this hook helps to interact with this file ie. uploadthing
       it is taylored such that it meets the requirements of "OurFileRouter" in the 
       api/uploadthing/core.ts file.
    2. This code has direct use in the UploadForm.ts file.
    
    */
}
