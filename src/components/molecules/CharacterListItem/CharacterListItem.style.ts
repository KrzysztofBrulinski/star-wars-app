import { StyledHeartButton } from "src/components/atoms/HeartButton.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${StyledHeartButton} {
    position: absolute;
    transform: scale(0.38);
    bottom: -20px;
  }
`;

export const CharacterTile = styled.button`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.standardTransition};
  border: none;
  max-width: 400px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
