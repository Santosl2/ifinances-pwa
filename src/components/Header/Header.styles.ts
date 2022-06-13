import { transparentize } from "polished";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: linear-gradient(180deg, #363f5f 0%, #202538 100%);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 220px;
  }

  button {
    padding: 0 1.7rem;
    height: 2.5rem;
    background: var(--blue-600);

    &:hover {
      background: ${transparentize(0.3, "#22293f")};
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 170px;
    }
  }
`;
