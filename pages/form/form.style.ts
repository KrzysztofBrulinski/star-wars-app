import styled from "styled-components";
import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import { ThemeTypes } from "src/assets/styles/theme";

type Props = {
  readonly theme: ThemeTypes;
};

export const Wrapper = styled.section<Props>`
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

export const Error = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkRed};
  margin-top: 20px;
`;
