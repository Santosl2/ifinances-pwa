import { darken, transparentize } from "polished";
import styled from "styled-components";

import { RadioBoxProps } from "./CreateTransaction.types";

export const ModalWrapper = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ModalForm = styled.form`
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    width: 100%;
    height: 3rem;
  }
`;

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  img {
    width: 20px;
    height: 20px;
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
