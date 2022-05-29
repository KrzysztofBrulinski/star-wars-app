import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Header = styled.header<Props>`
  display: flex;
  width: 100%;
`;

export const Nav = styled.nav<Props>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
`;

export const StyledLink = styled.a<Props>`
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.standardTransition};
  border: 2px solid ${({ theme }) => theme.colors.white};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
  }
`;
