import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-image: linear-gradient(
    to right top,
    #e7b3b5,
    #d0a394,
    #b3967a,
    #928967,
    #707c5b
  );
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
    padding: 0 2rem;
    height: 2.5rem;
    background: rgba(55, 55, 55, 0.25);

    &:hover {
      background: rgba(55, 55, 55, 0.35);
    }
  }
`;
