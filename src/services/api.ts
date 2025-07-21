import { GoogleGenerativeAI } from "@google/generative-ai";

const OPTIONS_GEN_AI = {
  model: "gemini-1.5-flash",
  systemInstruction: "Eres un experto en el ámbito educacional en España y tienes en cuenta todas las leyes, ordenes y decretos del mismo",
};

export const getGenerativeModelAI = () => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel(OPTIONS_GEN_AI);
  return model;
};

export const apiRequest = (url: string, method: "GET" | "POST" = "GET", body?: Record<string, unknown>, signal?: AbortSignal) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
    signal,
  }).then((res) => res.json());

export const apiGenerateContentText = async (prompt: string) => {
  try {
    const result = await getGenerativeModelAI().generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
