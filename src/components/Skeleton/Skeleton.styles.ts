import styled, { keyframes } from "styled-components";

const skeletonAnim = keyframes`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  
}
`;
export const SkeletonWrapper = styled.div`
  background: linear-gradient(0.25turn, transparent, #ccc, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
  width: 150px;
  height: 20px;
  border-radius: 2px;
  animation: ${skeletonAnim} 1.5s infinite;
`;
