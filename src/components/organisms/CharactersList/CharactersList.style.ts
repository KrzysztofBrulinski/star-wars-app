import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.templateColumns};
  gap: ${({ theme }) => theme.grid.gap};
  padding-bottom: 60px;
`;
