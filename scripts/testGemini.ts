// testGemini.ts
import { generateSummaryUsingGemini } from "../lib/geminiai";

async function test() {
  try {
    const result = await generateSummaryUsingGemini("This is a test document.");
    console.log("Result:", result, typeof result);
  } catch (error) {
    console.error("Error:", error);
  }
}

test();
