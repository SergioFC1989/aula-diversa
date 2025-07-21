"use server";

import { NextApiRequest, NextApiResponse } from "next";

import { apiGenerateContentText } from "@/services/api";

const generateContentText = async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt } = req.body;

  try {
    const result = await apiGenerateContentText(prompt);
    return res.json(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default generateContentText;
