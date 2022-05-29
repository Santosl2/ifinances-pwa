import { darken } from "polished";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

export const ButtonStyled = styled.button<Pick<ButtonProps, "bgColor">>`
  cursor: pointer;
  background: ${(props) => (props.bgColor ? props.bgColor : "var(--purple)")};
  color: white;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.bgColor ? darken(0.1, props.bgColor) : "var(--purple-2)"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
