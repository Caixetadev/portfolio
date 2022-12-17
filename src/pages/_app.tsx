import { useEffect } from "react";

import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { hotjar } from "react-hotjar";

import { Header } from "components";

import GlobalStyle from "styles/global";

import theme from "styles/theme";

import { ApolloProvider } from "@apollo/client";
import { client } from "../service/apollo";
import { ProjectsProvider } from "contexts/projectsContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2993174, 6);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <ProjectsProvider>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
        </ProjectsProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
