import styled from "styled-components";

const Wrapper = styled.div`
  img {
    width: 400px;
    height: auto;
    margin-top: 100px;
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
