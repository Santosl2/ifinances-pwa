import styled from "styled-components";

export const OrderWrapper = styled.div`
  padding: 1.2rem 1.5rem;
  border-radius: 0.2rem;
  background: var(--shape);
  color: var(--text-title);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  transition: transform 0.2s;

  cursor: pointer;

  &:hover {
    transform: translateY(-1rem);
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;

export const OrderHeader = styled.header`
  display: flex;

  img {
    margin-left: auto;
  }
`;
