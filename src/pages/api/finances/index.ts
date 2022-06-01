/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable unused-imports/no-unused-vars */
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { database } from "@/services/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const dbInstance = collection(database, "users_finances");

    const q = query(
      dbInstance,
      where("userId", "==", "fMnkQDlI7WcrQz6Ho5Hw5Bp9REm1")
    );
    const queryResult = await getDocs(q);

    if (queryResult.size === 0) {
      return res.json({
        success: false,
        message: "Sem registros encontrados.",
      });
    }

    try {
      const doc = queryResult.docs;

      const data = doc.map((item) => {
        return item.data();
      });

      return res.json({ data, success: true });
    } catch (error) {
      return res.json({
        success: false,
        message: "Ocorreu um erro ao cadastrar.",
      });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};
