import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";

export const StyledH2 = styled.h2`
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ theme }) => theme.grid.templateColumns};
  gap: ${({ theme }) => theme.grid.gap};
`;

export const CharacterCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Button} {
    position: absolute;
    bottom: 20px;
  }
`;
