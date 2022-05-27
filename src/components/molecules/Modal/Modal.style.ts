import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
  }
`;

export const ModalWindow = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  z-index: 2;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkRed};
  display: flex;
  justify-content: flex-end;
  position: relative;

  ${Button} {
    position: absolute;
    right: 0%;
    height: 100%;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  // minus header height
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;