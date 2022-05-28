import { useRouter } from "next/router";

import { Button, Input } from "@/components/Form";
import { SEO } from "@/SEO";
import { LoginContent, LoginWrapper } from "@styles/Login.styles";

const LoginVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: "-50%",
  },
};

export default function Register() {
  const router = useRouter();

  return (
    <>
      <SEO title="Controle suas finanças de maneira fácil" />
      <LoginWrapper
        initial="hidden"
        animate="visible"
        variants={LoginVariants}
        transition={{ duration: 0.7 }}
      >
        <h4>💸 Registro</h4>
        <LoginContent>
          <Input name="name" type="text" label="Nome" required />

          <Input name="email" type="email" label="E-mail" required />

          <Input name="password" type="password" label="Senha" required />

          <Input
            name="repeatPassword"
            type="password"
            label="Repetir senha"
            required
          />

          <Button type="submit" bgColor="#36314f">
            Registrar
          </Button>

          <Button type="button" onClick={() => router.push("/")}>
            Voltar
          </Button>
        </LoginContent>
      </LoginWrapper>
    </>
  );
}
