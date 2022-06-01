import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useEffect } from "react";

import type { GetStaticProps, NextPage } from "next";

import { IProjects } from "../types";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Navbar,
  ButtonTop,
  Footer,
  About,
  Hero,
  Projects,
} from "../components";

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <ButtonTop />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

  const data: IProjects = await url.json();

  return {
    props: {
      projects: data,
      ...(await serverSideTranslations(locale as any, ["common", "header"])),
    },
    revalidate: 60 * 60 * 8,
  };
};

export default Home;
