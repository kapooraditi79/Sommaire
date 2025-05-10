"use server";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { generateSummaryUsingGemini } from "@/lib/geminiai";

export async function generatePdfSummary(
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) {
  //input validation: Ensures upload succeeded and a valid file URL is available.
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failure",
      data: null,
    };
  }

  //Destructuring the uploaded MetaData
  //extracts:
  // pdfurl: link to the uploaded file (used for fetch)
  // fileName: name of the uploaded PDF
  // userId: used for tracking or storing per-user summaries
  const {
    serverData: {
      userId,
      file: { url: pdfurl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfurl) {
    return {
      success: false,
      message: "File upload failure",
      data: null,
    };
  }
  try {
    {
      /*
      on having our pdfurl
      we call for "fetchAndExtractPdfText"
      using the langchain pdfloader, it extracts the pdf text
      
      */
    }
    const pdfText = await fetchAndExtractPdfText(pdfurl);
    console.log({ pdfText });
    let summary;
    // try {
    //   const summary = await generateSummaryFromOpenAI(pdfText);
    //   console.log({ summary });
    // } catch (error) {
    //   console.error(error);
    //   if (
    //     error instanceof Error &&
    //     error.message === "Rate limit exceeded. Please try again later."
    //   ) {
    try {
      summary = await generateSummaryUsingGemini(pdfText);
      console.log({ summary });
    } catch (error) {
      console.error("Error generating summary using GEMINI:", error);
      return {
        success: false,
        message: "Error generating summary using GEMINI",
        data: null,
      };
    }

    //   }
    // }
    if (!summary) {
      return {
        success: false,
        message: "Error generating summary using OpenAI",
        data: null,
      };
    }

    return {
      success: true,
      message: "summary generated successfully",
      data: summary,
    };
  } catch (error) {
    console.error("Error fetching PDF text:", error);
    return {
      success: false,
      message: "Error fetching PDF text",
      data: null,
    };
  }
}
