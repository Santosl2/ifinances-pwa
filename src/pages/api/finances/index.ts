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

    if (
      type !== undefined &&
      !Object.values(FinanceTypes).find((t) => t === type)
    ) {
      return res.status(400).end("Type not allowed");
    }

    const { id } = getUserCookie(req);
    if (!id) {
      return res.status(403);
    }

    const q = query(
      dbInstanceFinances,
      where("userId", "==", id)
      // ,where("type", "==", type)
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
      let totalIncome = 0;
      let totalOutcome = 0;

      const data = doc.map((item) => {
        const itemData = item.data();

        if (itemData.type === "income") {
          totalIncome += itemData.amount;
        }

        if (itemData.type === "outcome") {
          totalOutcome += itemData.amount;
        }

        return itemData;
      });

      const total = {
        income: totalIncome,
        outcome: totalOutcome,
        final: totalIncome - totalOutcome,
      };

      return res.json({
        total,
        data,
        success: true,
      });
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
