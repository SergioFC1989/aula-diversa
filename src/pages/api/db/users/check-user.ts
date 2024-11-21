"use server";

import { MongoDbService } from "@/services/mongodb/mongodb-service";
import { NextApiRequest, NextApiResponse } from "next";

const checkUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  try {
    const response = await MongoDbService.getSingleDocument("users", data);
    res.status(200).json({
      message: response ? "User found successfully" : "User not found",
      type: response ? "success" : "warning",
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error find user", type: "error", error });
  }
};

export default checkUser;
