import styled from "styled-components";
import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";

export const Wrapper = styled.section`
  max-width: 600px;
  width: 100%;
  ${CharacterWrapper} {
    height: auto;
    padding: 50px;
    max-width: 600px;

    h2 {
      margin-bottom: 20px;
    }

    input,
    textarea {
      width: 310px;
      resize: vertical;
    }

    textarea {
      height: 150px;
    }
  }
`;

export const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkRed};
  margin-top: 20px;
`;
