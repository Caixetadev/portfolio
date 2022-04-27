import Image from "next/image";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaSass,
  FaNode,
  FaReact,
} from "react-icons/fa";

import { SiTypescript, SiStyledcomponents, SiExpress } from "react-icons/si";

import { Container } from "../../../styles/global";
import SectionProjects, {
  Content,
  Description,
  Header,
  Langs,
  Card,
} from "./style";
import HomeImage from "../../../../public/assets/home.jpg";

import { IProjects, ITechs } from "../../../types";
import SectionTitle from "../../SectionTitle";

export default function Projects({ projects }: { projects: IProjects[] }) {
  const techs: { [techs: string]: ITechs } = {
    Javascript: { lang: "js", icon: <FaJs /> },
    Sass: { lang: "sass", icon: <FaSass /> },
    Node: { lang: "node", icon: <FaNode /> },
    React: { lang: "react", icon: <FaReact /> },
    Express: { lang: "express", icon: <SiExpress /> },
    Typescript: { lang: "ts", icon: <SiTypescript /> },
    Styled_Components: { lang: "styled", icon: <SiStyledcomponents /> },
  };

  return (
    <Container>
      <SectionProjects id="projects">
        <SectionTitle title="Projects" />
        <Content>
          {projects?.map((project, index) => (
            <Card data-aos="fade-up" key={index}>
              <Image
                src={project.image ? project.image : HomeImage}
                alt="Imagem do projeto exemplo"
                width="500"
                height="244"
              />
              <Header>
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
              </Header>
              <Langs>
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
              </Langs>
              <Description>
                <p>{project.description}</p>
              </Description>
            </Card>
          ))}
        </Content>
      </SectionProjects>
    </Container>
  );
}
