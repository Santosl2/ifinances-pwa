import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: -9rem;

  div:last-child {
    background-color: var(--green);
    color: var(--shape);
  }
`;
