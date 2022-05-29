import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import { StyledHeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.div<Props>`
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

export const StyledList = styled.ul<Props>`
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
