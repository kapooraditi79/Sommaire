{
  /* this is the diectory where all our apis serve*/
}
{
  /*THE API folder*/
}

import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

{
  /*file router is the blueprint that must be followed 
    you can make image file routes
                 pdf upload file rotes
                 viddeo file routes
                 etc etc file rotes */
}
export const ourFileRouter = {
  pdfUploader: f({
    pdf: {
      maxFileSize: "32MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      //Middleware to check if the user is authenticated
      const user = await currentUser();
      if (!user) {
        throw new UploadThingError("Unauthorized");
      }
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // Called when the upload is complete
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.ufsUrl);
      return { userId: metadata.userId, file };
      {
        /*Returning an object for potential further processing */
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
