/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputStyled, InputWrapper } from "./Input.styles";
import { InputProps } from "./Input.types";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error, ...rest },
  ref
) => {
  return (
    <InputWrapper error={error}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <InputStyled
        name={name}
        id={name}
        placeholder={label}
        ref={ref}
        {...rest}
      />
      {!!error && <span>{error.message}</span>}
    </InputWrapper>
  );
};

export const Input = forwardRef(InputBase);
