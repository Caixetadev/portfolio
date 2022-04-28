import { useEffect } from "react";

import type { GetStaticProps, NextPage } from "next";

import { IProjects } from "../types";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Navbar,
  Skills,
  ButtonTop,
  Projects,
  Footer,
  HomePortfolio,
  About,
} from "../components";

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <HomePortfolio />
      <About />
      <Skills />
      <Projects projects={projects} />
      <ButtonTop />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

  const data: IProjects = await url.json();

  return {
    props: { projects: data },
    revalidate: 60 * 60 * 8,
  };
};

export default Home;
