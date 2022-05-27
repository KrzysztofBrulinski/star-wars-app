import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  width: 35px;
  height: 35px;
  transition: ${({ theme }) => theme.standardTransition};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 50px;
  margin: 0 15px;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ disabled }) => (disabled ? "0.5" : 1)};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StyledParagraph = styled.p`
  cursor: default;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
