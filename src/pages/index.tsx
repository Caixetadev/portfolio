import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useEffect } from "react";

import type { GetStaticProps, NextPage } from "next";

import { ProjectsProvider } from "contexts/projectsContext";

import { IProjects } from "types";

import Aos from "aos";
import "aos/dist/aos.css";

import { ButtonTop, About, Hero, Projects } from "components";

import { Main } from "templates/Main";
import { client } from "service/apollo";
import { gql } from "@apollo/client";
import { GetProjectsQuery } from "graphql/generated";

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
  const { data } = await client.query<GetProjectsQuery>({
    query: gql`
      query GetProjects {
        projects(orderBy: updatedAt_DESC) {
          link
          image
          title
          description
          createdAt
        }
      }
    `,
  });

  return {
    props: {
      projects: data.projects,
      ...(await serverSideTranslations(locale as any, ["common", "header"])),
    },
    revalidate: 60 * 60 * 8,
  };
};

export default Home;
