/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable unused-imports/no-unused-vars */
import { getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { FinanceTypes } from "@/interfaces/Finance";
import { dbInstanceFinances } from "@/services/firebase";
import { getUserCookie } from "@/utils/Cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const {
      query: { type },
    } = req;

    if (!Object.values(FinanceTypes).find((t) => t === type)) {
      return res.status(400).end("Type not allowed");
    }

    const { id } = getUserCookie(req);

    if (!id) {
      return res.status(403);
    }

    const q = query(
      dbInstanceFinances,
      where("userId", "==", id),
      where("type", "==", type)
    );
    const queryResult = await getDocs(q);

    const doc = queryResult.docs;
    const data = doc.map((d) => {
      return {
        type: d.data().type,
        amount: d.data().amount,
        name: d.data().name,
      };
    });

    return res.json({ success: true, data });
  }
  res.setHeader("Allow", "GET");
  res.status(405).end("Method not allowed");
};
