/* eslint-disable react/jsx-props-no-spreading */
import { LoadingIndicator } from "../LoadingIndicator";
import { ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <ButtonStyled {...rest}>
      {isLoading ? <LoadingIndicator /> : children}
    </ButtonStyled>
  );
}
