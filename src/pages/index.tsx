import { useEffect } from "react";

import type { GetStaticProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Aos from "aos";

import { ProjectsProvider } from "contexts/projectsContext";

import { IProjects } from "types";

import { Main } from "templates/Main";

import { ButtonTop, About, Hero, Projects } from "components";

import { ProjectsService } from "service/queries/projects";

import "aos/dist/aos.css";

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ProjectsProvider projects={projects}>
      <Main>
        <Hero />
        <About />
        <Projects />
        <ButtonTop />
      </Main>
    </ProjectsProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { data } = await ProjectsService.getProjects();

  return {
    props: {
      projects: data.projects,
      ...(await serverSideTranslations(locale as any, ["common", "header"])),
    },
    revalidate: 60 * 60 * 8,
  };
};

export default Home;
