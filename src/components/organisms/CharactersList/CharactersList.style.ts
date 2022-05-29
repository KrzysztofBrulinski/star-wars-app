import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.section<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.templateColumns};
  gap: ${({ theme }) => theme.grid.gap};
  padding-bottom: 60px;
`;
