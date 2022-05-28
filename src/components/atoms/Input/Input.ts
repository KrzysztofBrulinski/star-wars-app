import styled from "styled-components";

export const Input = styled.input`
  padding: 5px 8px;
  border: 5px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.darkRed : theme.colors.yellow};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
