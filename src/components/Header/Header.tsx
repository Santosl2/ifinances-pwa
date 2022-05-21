import { HeaderContent, HeaderWrapper } from "./Header.styles";

export function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src="/iFinances.svg" alt="iFinances Logo" />
        <button type="button">Nova transação</button>
      </HeaderContent>
    </HeaderWrapper>
  );
}
