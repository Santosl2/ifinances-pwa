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
  width: 20px;
  height: 20px;
  background: transparent;
  padding: 5px;
  border: 2px solid transparent;
  border-right-color: var(--loading-border-color);
  margin: 0 auto;
  border-radius: 1rem;
  animation: ${spinner} 1.5s infinite;
`;
