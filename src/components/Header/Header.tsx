import { Button } from "@/components/Form";

import { HeaderContent, HeaderWrapper } from "./Header.styles";

export function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src="/iFinances.svg" alt="iFinances Logo" />
        <Button>Nova transação</Button>
      </HeaderContent>
    </HeaderWrapper>
  );
}
