import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  max-width: 100%;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;

export const TableHead = styled.thead`
  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    line-height: 1.5rem;
    text-align: left;
  }
`;

export const TableBody = styled.tbody`
  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;
    &:first-child {
      color: var(--text-title);
    }
    &.deposit {
      color: var(--green);
    }
    &.withdraw {
      color: var(--red);
    }
  }
`;
