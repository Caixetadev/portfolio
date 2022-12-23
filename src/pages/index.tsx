import { useEffect } from "react";

import type { GetStaticProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Aos from "aos";

import { ProjectsProvider } from "contexts/projectsContext";

import { IProjects } from "types";

import { Layout } from "components/Layout";

import { ButtonTop, About, Hero, Projects } from "components";

import { ProjectsService } from "service/queries/projects";

import "aos/dist/aos.css";

const Home: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ProjectsProvider projects={projects}>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <ButtonTop />
      </Layout>
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
