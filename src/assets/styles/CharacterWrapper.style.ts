import styled from "styled-components";

export const CharacterWrapper = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ as }) => (as === "button" ? "pointer" : "default")};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.standardTransition};
  border: none;
  max-width: 400px;

  &:hover {
    background-color: ${({ theme, as }) =>
      as === "button" ? theme.colors.lightPurple : theme.colors.darkPurple};
  }
`;
