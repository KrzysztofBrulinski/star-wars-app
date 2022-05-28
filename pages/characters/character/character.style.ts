import { StyledHeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 340px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 2px solid ${({ theme }) => theme.colors.white};

  ${StyledHeartButton} {
    position: absolute;
    right: -20px;
    top: -20px;
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.l};

  li {
    display: block;
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }
`;
