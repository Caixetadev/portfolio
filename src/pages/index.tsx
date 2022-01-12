import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";

import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

import Navbar from "../components/UI/Navbar";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import ButtonTop from "../components/UI/ButtonTop";
import Projects from "../components/Sections/Projects";
import Footer from "../components/UI/Footer";
import axios from "axios";

export interface IProjects {
  name: string;
  image: string;
  description: string;
  language: string;
  language2: string;
  language3?: string;
  icons: { icon: string; icon2: string };
}

export const getStaticProps: GetStaticProps = async () => {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

  const data: IProjects = await url.json();

  return {
    props: { projects: data },
  };
};

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Caixeta front end</title>
        <meta name="description" content="Portfolio Caixeta" />
      </Head>
      <Navbar />
      <HomePortfolio />
      <About />
      <Skills />
      <Projects projects={projects} />
      <ButtonTop />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
