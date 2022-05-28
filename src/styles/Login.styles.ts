import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginWrapper = styled(motion.main)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h4 {
    color: white;
  }
`;

export const LoginContent = styled.form`
  width: 100%;
  max-width: 390px;
  background-color: var(--gray-800);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1.7rem;
  border-radius: 0.1rem;
  min-height: 370px;
  color: white;
`;
