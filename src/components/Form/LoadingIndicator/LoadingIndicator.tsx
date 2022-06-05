import styled, { keyframes } from "styled-components";

import { LoadingIndicatorStylesProps } from "./LoadingIndicator.types";

const spinner = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingIndicator = styled.div<LoadingIndicatorStylesProps>`
  width: ${(props) => (props.width ? props.width : "20px")};
  height: ${(props) => (props.height ? props.height : "20px")};
  background: transparent;
  padding: 5px;
  border: 2px solid transparent;
  border-right-color: ${(props) =>
    props.color ? props.color : "var(--loading-border-color)"};
  margin: 0 auto;
  border-radius: 100%;
  animation: ${spinner} 1.5s infinite;
`;
