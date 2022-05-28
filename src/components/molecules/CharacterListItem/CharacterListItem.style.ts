import { StyledHeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 330px;
  width: 100%;
  margin: 0 auto;

  ${StyledHeartButton} {
    position: absolute;
    top: -20px;
    right: -40px;
  }
`;
