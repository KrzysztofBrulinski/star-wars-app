import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
  readonly as?: string;
};

export const CharacterWrapper = styled.div<Props>`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  cursor: ${({ as }) => (as === "button" ? "pointer" : "default")};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.standardTransition};
  max-width: 400px;
  border: 2px solid ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme, as }) =>
      as === "button" ? theme.colors.lightYellow : theme.colors.yellow};
  }
`;
