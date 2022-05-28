import styled from "styled-components";

export const SeparatorWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text-body);
  font-size: 0.875rem; // 14px
  opacity: 0.5;

  hr {
    width: 100%;
    border-color: var(--text-body) !important;
  }
`;
