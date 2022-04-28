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
                <h3>{project.name}</h3>
                <ul>
                  <li>
                    <a
                      href={project.linkRepo}
                      className="github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.linkPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </li>
                </ul>
              </S.Header>
              <S.Langs>
                <ul>
                  <li className={techs[project.language].lang}>
                    {techs[project.language].icon}
                    <span>{project.language}</span>
                  </li>
                  <li className={techs[project.language2].lang}>
                    {techs[project.language2].icon}
                    <span>{project.language2}</span>
                  </li>
                </ul>
                <hr />
              </S.Langs>
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
