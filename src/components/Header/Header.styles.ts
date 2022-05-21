import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: var(--purple);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 120px;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--purple-2);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.2rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
