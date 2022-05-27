/* eslint-disable react/jsx-props-no-spreading */
import { InputStyled, InputWrapper } from "./Input.styles";
import { InputProps } from "./Input.types";

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <InputWrapper>
      {!!label && <label htmlFor={name}>{label}</label>}
      <InputStyled name={name} id={name} placeholder={label} {...rest} />
    </InputWrapper>
  );
}
