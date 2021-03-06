import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
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
    color: var(--text-title);

    .income {
      color: var(--green);
    }
    .outcome {
      color: var(--red-200);
    }
  }
`;
