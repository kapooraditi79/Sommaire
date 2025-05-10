import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/utils/prompts";
const client = new OpenAI();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummaryFromOpenAI(pdfText: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content:
            "Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n {pdfText}",
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });
    return completion.choices[0].message.content;
  } catch (error: any) {
    if (error?.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    throw error;
  }
}
