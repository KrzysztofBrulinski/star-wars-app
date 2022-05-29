import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${Button} {
    padding: 0;
    width: 35px;
    height: 35px;
    margin: 0 15px;
  }
`;

export const StyledParagraph = styled.p<Props>`
  cursor: default;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
