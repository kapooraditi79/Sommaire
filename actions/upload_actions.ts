"use server";
import { fetchAndExtractPdfText } from "@/lib/langchain";
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
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failure",
      data: null,
    };
  }

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
    const pdfText = await fetchAndExtractPdfText(pdfurl);
    let summary;
    try {
      summary = await generateSummaryUsingGemini(pdfText);
    } catch (geminiError) {
      console.error("Error generating summary using Gemini:", geminiError);
      return {
        success: false,
        message: "Error generating summary using Gemini",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error fetching PDF text:", error);
    return {
      success: false,
      message: "Error fetching PDF text",
      data: null,
    };
  }
}
