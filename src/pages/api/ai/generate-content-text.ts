"use server";

import { NextApiRequest, NextApiResponse } from "next";

import { generateAIResponse } from "@/services/google-ai/google-ai-services";

const fetchAIResponse = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;

  try {
    const result = await generateAIResponse(prompt);
    return res.json(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchAIResponse;
