import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "../components/UI/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Caixeta front end</title>
      </Head>
      <Navbar />
      <HomePortfolio />
      <About />
    </ThemeProvider>
  );
};

export default Home;
