import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  img {
    width: 400px;
    height: auto;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <img src="/static/favicon.png" />
    </Wrapper>
  );
};

export default HomePage;
