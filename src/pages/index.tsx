import type { GetStaticProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ProjectsProvider } from "hooks/useProjectsContext";

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
  if (!locale) return { props: { projects: [] } };

  const format = locale.replace("-", "_");

  const { data } = await ProjectsService.getProjects(
    locale === "pt-BR" ? "en_US" : format
  );

  const mock = [
    {
      __typename: "Project",
      link: "https://trampodecasa.com.br/",
      image:
        "https://cdn.discordapp.com/attachments/963219945204887642/991730441595924510/unknown.png",
      title: "Trampo de Casa",
      description:
        "Trabalho freelance feito com o Next Js, onde você pode se candidatar a vagas remotas",
      createdAt: "2022-12-15T21:22:14.395647+00:00",
    },
    {
      __typename: "Project",
      link: "https://caixetadev.github.io/itachi/",
      image:
        "https://camo.githubusercontent.com/73a022e7efa4a33825349d6e8a5ea2bc4cfc3442ef4c69d55656ccb9136d4295/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3837313134313233343236343134353933322f3931303031313633363630343130303630382f756e6b6e6f776e2e706e673f77696474683d383834266865696768743d343133",
      title: "Itachi Uchiha",
      description:
        "Este projeto eu fiz quando estava começando a aprender SASS, projeto baseado em um design de drible",
      createdAt: "2022-06-27T19:18:47.359937+00:00",
    },
  ];

  return {
    props: {
      projects: locale === "pt-BR" ? mock : data.projects,
      ...(await serverSideTranslations(locale as any, ["common"], null, [
        "en",
        "es",
        "pt",
      ])),
    },
    revalidate: 60 * 60 * 8,
  };
};

export default HomePage;
