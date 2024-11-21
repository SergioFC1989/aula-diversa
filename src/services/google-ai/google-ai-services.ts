import { getGenerativeModelAI } from "./google-ai-client";

export const generateAIResponse = async (prompt: string) => {
  try {
    const result = await getGenerativeModelAI().generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
