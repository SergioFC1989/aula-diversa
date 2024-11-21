import { GoogleGenerativeAI } from "@google/generative-ai";

const OPTIONS_GEN_AI = {
  model: "gemini-1.5-flash",
  systemInstruction:
    "Eres un experto en el ámbito educativo en España, y consideras todas las leyes, órdenes y decretos relevantes.",
};

export const getGenerativeModelAI = () => {
  const apiKey = process.env.API_KEY_GOOGLE;

  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel(OPTIONS_GEN_AI);
  return model;
};
