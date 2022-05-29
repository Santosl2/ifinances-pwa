/* eslint-disable react/jsx-props-no-spreading */
import { LoadingIndicator } from "../LoadingIndicator";
import { ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export function Button({ isLoading, children, bgColor, ...rest }: ButtonProps) {
  return (
    <ButtonStyled bgColor={bgColor} {...rest} disabled={isLoading}>
      {isLoading ? <LoadingIndicator /> : children}
    </ButtonStyled>
  );
}
