import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Listing = styled.div<Props>`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
  gap: ${({ theme }) => theme.grid.gap};
`;
