import { Button, Input } from "@/components/Form";
import { LoginContent, LoginWrapper } from "@styles/Login.styles";

export default function Login() {
  return (
    <LoginWrapper>
      <h4>iFinances</h4>
      <LoginContent>
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Senha" />
        <Button type="submit" bgColor="#36314f">
          Entrar
        </Button>

        <Button type="button">Registre-se</Button>
      </LoginContent>
    </LoginWrapper>
  );
}
