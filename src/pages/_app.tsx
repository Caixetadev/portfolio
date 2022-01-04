import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo-config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle theme={theme} />
    </>
  );
}

export default MyApp;
