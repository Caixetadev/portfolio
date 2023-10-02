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
      link: "https://cutez.vercel.app/",
      image:
        "https://cdn.discordapp.com/attachments/643825264513646593/1158505243601031369/870shots_so.png?ex=651c7d96&is=651b2c16&hm=78784b0d455e0ad32a326c5d39db4ed513f3de5b67d52d1e9ffc5ef0b88487d9&",
      title: "Cutez",
      description:
        "Gerar links encurtados facilmente e gerenciá-los de forma eficiente em um painel centralizado único.",
      createdAt: "2023-10-02T20:17:31.357618+00:00",
    },
    {
      link: "https://trampodecasa.com.br/",
      image:
        "https://cdn.discordapp.com/attachments/889302050238775297/1158498981723259020/429shots_so.png?ex=651c77c1&is=651b2641&hm=8cf5a1fe7acb2b9617c35fed39cd89a1153412cede83c4cb9a400057ebfff33a&",
      title: "Trampo de Casa",
      description:
        "Trabalho freelance realizado com Next.js, onde você pode se candidatar a posições de trabalho remoto.",
      createdAt: "2022-12-15T21:22:14.395647+00:00",
    },
    {
      link: "https://caixetadev.github.io/itachi/",
      image:
        "https://cdn.discordapp.com/attachments/889302050238775297/1158500717443690658/65shots_so.png?ex=651c795e&is=651b27de&hm=ae749f07f4a0eb2d2c636db59bae6e7700439504cc58a4779fc72e21796880a4&",
      title: "Itachi Uchiha",
      description:
        "Este projeto eu fiz quando estava começando a aprender SASS, com base em um design do Dribbble.",
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
