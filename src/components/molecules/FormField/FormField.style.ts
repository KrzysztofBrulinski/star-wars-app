import { Input } from "src/components/atoms/Input/Input";
import { Label } from "src/components/atoms/Label/Label.style";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
  readonly isError?: boolean;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-of-type {
    margin-bottom: 15px;
  }

  ${Label} {
    margin: 10px 0;
  }

  ${Input} {
    margin-bottom: ${({ isError }) => (!isError ? "27px" : null)};
    border-width: 2px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Error = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkRed};
  padding: 5px;
`;
