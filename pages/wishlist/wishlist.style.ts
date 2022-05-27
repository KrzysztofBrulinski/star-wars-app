import { CharacterTile } from "src/assets/styles/CharacterTail.style";
import { Button } from "src/components/atoms/Button/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ theme }) => theme.grid.templateColumns};
  gap: ${({ theme }) => theme.grid.gap};

  ${CharacterTile} {
    cursor: default;
    ${Button} {
      position: absolute;
      bottom: 20px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;
