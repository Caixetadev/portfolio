import { Container } from "../../../styles/global";
import swal from "sweetalert";
import SectionProjects from "./style";
import Image from "next/image";
import HomeImage from "../../../../public/assets/home.jpg";
import { Card } from "./style";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJs,
  FaSass,
  FaNode,
  FaReact,
} from "react-icons/fa";

import { Langs } from "./style";

import { SiTypescript, SiStyledcomponents, SiExpress } from "react-icons/si";

export default function Projects({ projects }) {
  function onPick() {
    swal("Thanks for your rating!", `You rated us $/3`, "success");
  }

  const techs = {
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
        <h2>Projects</h2>
        <div className="cont">
          {projects.map((project, index) => (
            <Card key={index}>
              <Image src={HomeImage} alt="oi" width="500" height="244" />
              <div className="header">
                <h3>{project.name}</h3>
                <ul>
                  <li>
                    <a href="https://github.com/caixetadev" className="github">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/caixetadev" className="link">
                      <FaExternalLinkAlt />
                    </a>
                  </li>
                </ul>
              </div>
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
              <div className="desc">
                <p>
                  {project.description} Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Excepturi, eum.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </SectionProjects>
    </Container>
  );
}
