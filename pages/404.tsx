import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin-top: 150px;

  h1,
  h2 {
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: none;
  }
`;

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Star Wars App</title>
      </Head>
      <Wrapper>
        <h1>You've lost in the galaxy....</h1>
        <h2>This page cannot be found.</h2>
        <p>
          Go back to the
          <Link href="/">
            <a> home page</a>
          </Link>
        </p>
      </Wrapper>
    </>
  );
};

export default NotFound;
