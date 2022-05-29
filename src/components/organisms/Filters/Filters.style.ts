import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  padding: 30px 20px;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Filter = styled.div<Props>`
  margin-top: 38px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    margin-bottom: 15px;
  }
`;

export const Option = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }

  label {
    width: 100%;
    margin-right: 10px;
    cursor: pointer;
  }

  ${Input} {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
