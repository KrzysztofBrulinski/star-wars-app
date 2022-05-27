import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled.a`
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
