import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.section<Props>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: ${({ theme }) => theme.colors.black};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
  }
`;

export const ModalWindow = styled.div<Props>`
  width: 100%;
  max-width: 800px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  z-index: 2;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div<Props>`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-end;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};

  ${Button} {
    position: absolute;
    right: 0%;
    height: 100%;
    border-radius: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: transparent;
    }
  }
`;

export const Content = styled.div<Props>`
  width: 100%;
  // minus header height
  height: calc(100% - 60px);
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.h2<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
