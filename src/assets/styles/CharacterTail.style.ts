import styled from "styled-components";

export const CharacterTile = styled.button`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.standardTransition};
  border: none;
  max-width: 400px;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
