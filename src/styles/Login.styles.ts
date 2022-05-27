import styled from "styled-components";

export const LoginWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.form`
  width: 100%;
  max-width: 390px;
  background-color: var(--gray-800);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 1.7rem;
  border-radius: 0.5rem;
  min-height: 300px;
  color: white;
`;
