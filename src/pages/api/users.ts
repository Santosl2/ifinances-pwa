/* eslint-disable camelcase */
/* eslint-disable unused-imports/no-unused-vars */
import { hash } from "bcryptjs";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { SignUpFormData } from "@/interfaces/Forms";
import { database } from "@/services/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // to do create user
  if (req.method === "POST") {
    const { name, email, password } = req.body?.user as SignUpFormData;

    const auth = getAuth();
    const dbInstance = collection(database, "users");

    const q = query(dbInstance, where("email", "==", email));
    const queryResult = await getDocs(q);

    if (queryResult.size > 0) {
      return res.json({ success: false, message: "E-mail já cadastrado." });
    }

    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const hashedPassword = await hash(password, 8);

      addDoc(dbInstance, {
        id: createUser.user.uid,
        name,
        email,
        password: hashedPassword,
        authProvider: "local",
      });

      return res.json({ success: true });
    } catch (error) {
      return res.json({
        success: false,
        message: "Ocorreu um erro ao cadastrar.",
      });
    }
  }
};
