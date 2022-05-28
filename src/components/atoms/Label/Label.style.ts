import styled from "styled-components";

export const Label = styled.label`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
`;
