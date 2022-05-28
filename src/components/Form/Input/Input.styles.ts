import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    cursor: pointer;
    font-family: "Roboto", sans-serif;
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
    border-bottom-color: var(--purple);
  }
`;
