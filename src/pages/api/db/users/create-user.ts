"use server";

import { MongoDbService } from "@/services/mongodb/mongodb-service";
import { NextApiRequest, NextApiResponse } from "next";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;

  try {
    await MongoDbService.insertSingleDocument("users", data);
    res
      .status(200)
      .json({ message: "User added successfully", type: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding user", type: "error", error });
  }
};

export default createUser;
