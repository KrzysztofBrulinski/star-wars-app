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

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <Galaxy>
              <Navigation />
              <RootWrapper>
                <Component {...pageProps} />
              </RootWrapper>
            </Galaxy>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
