import { Button, Input } from "@/components/Form";
import { LoginContent, LoginWrapper } from "@styles/Login.styles";

export default function Login() {
  return (
    <LoginWrapper>
      <LoginContent>
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Senha" />

        <Button type="submit">Send</Button>
      </LoginContent>
    </LoginWrapper>
  );
}
