import Navigation from "src/components/organisms/Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "src/assets/styles/theme";
import { GlobalStyle } from "src/assets/styles/GlobalStyles";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "src/store/index";
import { client } from "apollo/client";
import { RootWrapper } from "src/assets/styles/GlobalStyledComponent/RootWrapper.style";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Navigation />
          <RootWrapper>
            <Component {...pageProps} />
          </RootWrapper>
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  );
}
