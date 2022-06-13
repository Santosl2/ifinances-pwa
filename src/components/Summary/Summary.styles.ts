import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: -9rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;

  div:last-child {
    background-color: var(--green);
    color: var(--shape);
  }
`;
