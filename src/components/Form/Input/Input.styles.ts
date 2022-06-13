import styled from "styled-components";

import { InputProps } from "./Input.types";

export const InputWrapper = styled.div<Pick<InputProps, "error">>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 0.8rem;
    color: var(--red-200);
  }

  ${(props) =>
    !!props.error &&
    `
    label {
       color:  var(--red-200);
    }
  input {
    border-bottom-color: var(--red-200);
    &:focus {
    border-bottom-color: var(--red-200);

    }
  }
  `}

  label {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;
export const InputStyled = styled.input`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--text-body);
  transition: border 0.2s;
  color: white;

  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: var(--shape);
  }
`;
