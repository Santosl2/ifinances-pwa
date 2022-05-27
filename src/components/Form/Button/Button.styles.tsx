import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  background: var(--purple);
  color: white;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: var(--purple-2);
  }
`;
