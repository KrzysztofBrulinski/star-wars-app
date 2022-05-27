import { StyledHeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${StyledHeartButton} {
    position: absolute;
    transform: scale(0.28);
    bottom: -20px;
  }
`;
