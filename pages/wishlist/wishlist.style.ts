import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const StyledH2 = styled.h2<Props>`
  margin-bottom: 40px;
`;

export const Wrapper = styled.div<Props>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ theme }) => theme.grid.templateColumns};
  gap: ${({ theme }) => theme.grid.gap};
  padding: 0 40px;
`;

export const CharacterCard = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Button} {
    position: absolute;
    bottom: 20px;
  }
`;
