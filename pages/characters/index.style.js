import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CharacterCard = styled.section`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  margin-top: 20px;
  cursor: pointer;
`;
