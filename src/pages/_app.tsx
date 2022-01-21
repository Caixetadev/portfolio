import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </>
  );
}

export default MyApp;
