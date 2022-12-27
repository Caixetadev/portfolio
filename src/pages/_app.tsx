import { useEffect } from "react";

import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { hotjar } from "react-hotjar";

import { Header } from "components";

import GlobalStyle from "styles/global";

import theme from "styles/theme";

import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2993174, 6);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
