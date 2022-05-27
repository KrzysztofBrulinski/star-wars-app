import { Input } from "src/components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${Input} {
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 20px 10px 40px 10px;
  }
`;
export const Listing = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
  gap: ${({ theme }) => theme.grid.gap};
`;
