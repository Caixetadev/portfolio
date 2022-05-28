import { useEffect } from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { hotjar } from "react-hotjar";

import { Header } from "../components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2993174, 6);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
