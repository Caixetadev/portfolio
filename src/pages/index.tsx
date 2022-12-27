import type { GetStaticProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ProjectsProvider } from "contexts/projectsContext";

import { IProjects } from "types";

import { ProjectsService } from "services/queries/projects";

import { Home } from "templates/Home";

const HomePage: NextPage<{ projects: Array<IProjects> }> = ({ projects }) => {
  return (
    <ProjectsProvider projects={projects}>
      <Home />
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

export default HomePage;
