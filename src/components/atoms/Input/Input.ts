import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
  readonly isError?: boolean;
};

export const Input = styled.input<Props>`
  padding: 5px 8px;
  border: 5px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.darkRed : theme.colors.yellow};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
