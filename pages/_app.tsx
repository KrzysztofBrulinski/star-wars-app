import Navigation from "src/components/organisms/Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "src/assets/styles/theme";
import { GlobalStyle } from "src/assets/styles/GlobalStyles";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store, { persistor } from "src/store/index";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "src/apollo/client";
import { RootWrapper } from "src/assets/styles/GlobalStyledComponent/RootWrapper.style";
import Galaxy from "src/components/atoms/Galaxy/Galaxy";
import Alert from "src/components/molecules/Alert/Alert";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
              <Galaxy>
                <Alert />
                <Navigation />
                <RootWrapper>
                  <Component {...pageProps} />
                </RootWrapper>
              </Galaxy>
            </ApolloProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
