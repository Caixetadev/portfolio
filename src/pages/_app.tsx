import type { AppProps } from "next/app";
import Header from "../components/Head";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </>
  );
}

export default MyApp;
