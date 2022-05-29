import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  text-align: center;

  ${Input} {
    padding: 15px 30px;
    border-radius: 40px;
    width: 100%;
    max-width: 560px;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 20px 10px 40px 10px;
  }
`;
