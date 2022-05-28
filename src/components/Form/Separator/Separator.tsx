import { SeparatorWrapper } from "./Separator.styles";

export function Separator({ children }: { children: React.ReactChild }) {
  return (
    <SeparatorWrapper>
      <hr />
      {children}
      <hr />
    </SeparatorWrapper>
  );
}
