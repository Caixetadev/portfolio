import Image from "next/image";
import HomeImage from "../../../../public/assets/home.jpg";

import { IProjects } from "../../../types";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Container } from "../../../styles/global";
import { SectionTitle } from "../../SectionTitle";

import { techs } from "./techs";

import * as S from "./style";

export function Projects({ projects }: { projects: IProjects[] }) {
  return (
    <Container>
      <S.SectionProjects id="projects">
        <SectionTitle title="Projects" />
        <S.Content>
          {projects?.map((project, index) => (
            <S.Card data-aos="fade-up" key={index}>
              <Image
                src={project.image ? project.image : HomeImage}
                alt="Imagem do projeto exemplo"
                width="500"
                height="244"
              />
              <S.Header>
                <S.Title>{project.name}</S.Title>
                <S.List>
                  <S.Item>
                    <S.Link
                      href={project.linkRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </S.Link>
                  </S.Item>
                  <S.Item>
                    <S.Link
                      href={project.linkPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </S.Link>
                  </S.Item>
                </S.List>
              </S.Header>
              <S.Infos>
                <S.List>
                  <S.Lang color={techs[project.language].color}>
                    {techs[project.language].icon}
                    <S.Name>{project.language}</S.Name>
                  </S.Lang>
                  <S.Lang color={techs[project.language2].color}>
                    {techs[project.language2].icon}
                    <S.Name>{project.language2}</S.Name>
                  </S.Lang>
                </S.List>
                <S.Line />
              </S.Infos>
              <S.Description>
                <p>{project.description}</p>
              </S.Description>
            </S.Card>
          ))}
        </S.Content>
      </S.SectionProjects>
    </Container>
  );
}
