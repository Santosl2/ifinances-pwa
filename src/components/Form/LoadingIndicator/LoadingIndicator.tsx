import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingIndicator = styled.div`
  width: 10px;
  height: 10px;
  background: transparent;
  padding: 5px;
  border: 3px solid var(--loading-color);
  border-right-color: var(--loading-border-color);
  margin: 0 auto;
  border-radius: 1rem;
  animation: ${spinner} 1.5s infinite;
`;
