import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginWrapper = styled(motion.main)`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;

  .title {
    text-align: center;
    color: #363f5f;
    font-family: "Inter", sans-serif;

    span {
      display: block;
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    h4 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const LoginContent = styled.form`
  width: 100%;
  max-width: 390px;
  background-color: var(--blue-600);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  padding: 1.7rem;
  min-height: 370px;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const RightContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LeftContent = styled.div`
  background: url("./indexBg.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
