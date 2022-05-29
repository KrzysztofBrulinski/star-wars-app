import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
  readonly isBig?: boolean;
  readonly disabled?: boolean;
};

export const Button = styled.button<Props>`
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  width: auto;
  border-radius: 50px;
  padding: ${({ isBig }) => (isBig ? "10px 40px" : "5px 20px")};
  font-weight: bold;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.l : theme.fontSize.m};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : 1)};
  transition: ${({ theme }) => theme.standardTransition};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
