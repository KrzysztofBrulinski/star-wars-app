import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  width: auto;
  border-radius: 50px;
  padding: ${({ isBig }) => (isBig ? "10px 40px" : "5px 20px")};
  font-weight: bold;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.l : theme.fontSize.m};
  cursor: pointer;
  transition: ${({ theme }) => theme.standardTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;