import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  ${Input} {
    padding: 15px 30px;
    border-radius: 40px;
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 20px 10px 40px 10px;
  }
`;
