import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // to do create user
  if (req.method === "POST") {
    console.log(req);
  }
  // const dbInstance = collection(database, "users");
  // addDoc(dbInstance, {
  //   title: "opa",
  // });
};
