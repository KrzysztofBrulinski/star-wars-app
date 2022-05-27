import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 20px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Filter = styled.div`
  margin-top: 38px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  border-radius: 10px;
`;

export const Option = styled.div`
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