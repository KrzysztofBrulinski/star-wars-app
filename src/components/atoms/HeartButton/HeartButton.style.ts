import styled from "styled-components";

export const StyledHeartButton = styled.button`
  position: relative;
  width: 160px;
  height: 130px;
  background-color: transparent;
  border: none;
  transform: ${({ isSmall }) => (isSmall ? " scale(0.2)" : "")};
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 80px;
    height: 125px;
    border-radius: 40px 40px 0 0;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.red : theme.colors.white};
    transition: ${({ theme }) => theme.standardTransition};
    cursor: pointer;
  }

  &:before {
    left: 80px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  &:hover {
    ::after,
    ::before {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;
