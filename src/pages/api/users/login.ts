/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable unused-imports/no-unused-vars */
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { SignInFormData } from "@/interfaces/Forms";
import { User } from "@/interfaces/User";
import { auth, database } from "@/services/firebase";
import { verifyPassword } from "@/utils/Hash";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body?.user as SignInFormData;

    const dbInstance = collection(database, "users");

    const q = query(dbInstance, where("email", "==", email));
    const queryResult = await getDocs(q);

    if (queryResult.size === 0) {
      return res.json({
        success: false,
        message: "E-mail ou senha inválidos.",
      });
    }

    try {
      const doc = queryResult.docs[0];

      const { password: userPassword, name } = doc.data();
      const verifyUserPassword = await verifyPassword(password, userPassword);

      if (!verifyUserPassword) {
        return res.json({
          success: false,
          message: "E-mail ou senha inválidos.",
        });
      }

      const {
        user: { refreshToken, accessToken },
      } = (await signInWithEmailAndPassword(auth, email, password)) as User;

      return res.json({
        success: true,
        user: {
          name,
          email,
        },
        refreshToken,
        accessToken,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Ocorreu um erro ao cadastrar.",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
