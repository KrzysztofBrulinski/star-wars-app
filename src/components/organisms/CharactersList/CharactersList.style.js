import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CharacterListItem = styled.section`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  margin-top: 20px;
  cursor: pointer;
`;
