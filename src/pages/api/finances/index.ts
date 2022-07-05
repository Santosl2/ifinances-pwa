/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable unused-imports/no-unused-vars */
import {
  addDoc,
  deleteDoc,
  doc as delDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

import { FinanceTypes } from "@/interfaces/Finance";
import { CreateTransactionModalFormData } from "@/interfaces/Forms";
import { database, dbInstanceFinances } from "@/services/firebase";
import { getUserCookie } from "@/utils/Cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = getUserCookie(req);
  if (!id) {
    return res.status(403);
  }

  if (req.method === "DELETE") {
    const regId = req.body.id;

    const q = query(
      dbInstanceFinances,
      where("userId", "==", id),
      where("id", "==", regId)
    );

    const queryResult = await getDocs(q);

    if (queryResult.size === 0) {
      return res.json({
        success: false,
        message: "Sem registros encontrados.",
      });
    }

    try {
      await deleteDoc(
        delDoc(database, "users_finances", queryResult.docs[0].id)
      );
      return res.json({
        success: true,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Ocorreu um erro ao cadastrar transação.",
      });
    }
  }

  if (req.method === "POST") {
    const { transactionName, price, category, type } = req.body
      ?.data as CreateTransactionModalFormData;

    try {
      const data = await addDoc(dbInstanceFinances, {
        id: uuid(),
        title: transactionName,
        userId: id,
        type,
        amount: price,
        category,
        createdAt: new Date().getTime(),
      });

      return res.json({
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Ocorreu um erro ao cadastrar transação.",
      });
    }
  }

  if (req.method === "GET") {
    const {
      query: { type },
    } = req;

    if (
      type !== undefined &&
      !Object.values(FinanceTypes).find((t) => t === type)
    ) {
      return res.status(500).end("Type not allowed");
    }

    const actualDate = new Date();
    const initalDayOfMonth =
      actualDate.getTime() - (actualDate.getDate() - 1) * (86400 * 1000);

    const q = query(
      dbInstanceFinances,
      where("userId", "==", id),
      orderBy("createdAt", "desc")
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

        if (itemData.createdAt >= initalDayOfMonth) {
          if (itemData.type === "income") {
            totalIncome += itemData.amount;
          }

          if (itemData.type === "outcome") {
            totalOutcome += itemData.amount;
          }
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
      return res.status(500).json({
        success: false,
        message: "Ocorreu um erro ao cadastrar transação.",
      });
    }
  }

  // res.setHeader("Allow", "GET");
  res.status(405).end("Method not allowed");
};
