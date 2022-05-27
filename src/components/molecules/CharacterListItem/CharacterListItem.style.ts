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
    top: -20px;
    right: -40px;
  }
`;
