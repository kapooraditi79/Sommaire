"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "../utils/prompts";
export const generateSummaryUsingGemini = async (pdfText: string) => {
  // Load environment variables (ensure GEMINI_API_KEY is set)
  const MODEL_NAME = "gemini-1.5-flash"; // Specify the Gemini model to use
  const API_KEY = process.env.GEMINI_API_KEY!;

  // Initialize the Generative AI client with your API key
  const genAI = new GoogleGenerativeAI(API_KEY);

  // Get the generative model
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  try {
    // Construct the prompt, including the system prompt and the PDF text
    const prompt = `$${SYSTEM_PROMPT}\n\n`;

    // Call the generateContent API to get a response
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              text: `You are a helpful AI assistant that summarizes documents.
      Your goal is to create an engaging, easy-to-read summary with
      contextually relevant emojis and proper markdown formatting.
      Transform this document: ${pdfText}`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1500, // Limit the output to 1500 tokens
        temperature: 0.7, // Adjust the temperature for more/less creative responses
      },
    });

    const response = await result.response;
    const text = response.text();
    if (!text) {
      throw new Error("No response text received from Gemini.");
    }

    return text;
  } catch (error: any) {
    console.error("Gemini Error:", error);
  }
};
