import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
  readonly color?: string;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

export const AlertWrapper = styled.section<Props>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme, color }) =>
      theme.colors?.[color] ? theme.colors[color] : theme.colors.yellow};
    opacity: 0.7;
  }
`;

export const AlertText = styled.section<Props>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
