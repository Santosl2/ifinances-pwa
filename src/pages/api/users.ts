import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { database } from "@/services/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // to do create user
  const dbInstance = collection(database, "users");
  addDoc(dbInstance, {
    title: "opa",
  });
};
