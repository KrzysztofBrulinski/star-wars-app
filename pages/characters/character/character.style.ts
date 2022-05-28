import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import { StyledHeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${CharacterWrapper} {
    height: auto;
    max-width: 500px;
    position: relative;
    padding: 40px 10px;

    ${StyledHeartButton} {
      position: absolute;
      right: -30px;
      top: -20px;
    }
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.l};

  li {
    display: block;
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }
`;
