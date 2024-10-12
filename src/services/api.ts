import { getGenerativeModelAI } from "./ia.client";

export const apiRequest = (
  url: string,
  method: "GET" | "POST" = "GET",
  body?: Record<string, unknown>,
  signal?: AbortSignal
) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
    signal,
  }).then((res) => res.json());

export const generateAIResponse = async (prompt: string) => {
  try {
    const result = await getGenerativeModelAI().generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
