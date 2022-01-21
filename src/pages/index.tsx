import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Aos from "aos";
import "aos/dist/aos.css";

import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

import Navbar from "../components/UI/Navbar";
import HomePortfolio from "../components/Sections/HomePortfolio";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import ButtonTop from "../components/UI/ButtonTop";
import Projects from "../components/Sections/Projects";
import Footer from "../components/UI/Footer";

import { IProjects } from "../types";
import Contact from "../components/Sections/Contact";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

  const data: IProjects = await url.json();

  return {
    props: { projects: data },
  };
};

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rafael Caixeta | Front-end Developer</title>
        <meta name="title" content="Rafael Caixeta | Front-end Developer" />
        <meta name="description" content="Front-end Developer" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rafael Caixeta" />
        <meta
          name="keywords"
          content="rafael caixeta, web designer, caixeta dev, 
          desenvolvedor, programador, front-end, developer, typescript,
          reactjs, nextjs, caixetadev, caixeta portfolio, rafael caixeta portfolio,
          developer front-end, javascript"
        />
        <meta property="og:url" content="https://caixeta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rafael Caixeta | Front-end Developer"
        />
        <meta property="og:description" content="Front-end Developer" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="revisit-after" content="1 day" />
        <meta property="og:image" content="https://i.ibb.co/BGCNXKr/home.png" />
        <meta
          property="og:site_name"
          content="Rafael Caixeta | Front-end Developer"
        />
      </Head>
      <Navbar />
      <HomePortfolio />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <ButtonTop />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
