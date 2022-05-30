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
      <Projects projects={[]} />
      <ButtonTop />
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const url = await fetch("https://apiportfoliocaixeta.herokuapp.com/");

//   const data: IProjects = await url.json();

//   return {
//     props: { projects: data },
//     revalidate: 60 * 60 * 8,
//   };
// };

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
