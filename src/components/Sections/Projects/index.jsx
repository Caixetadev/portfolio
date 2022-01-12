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

import { SiTypescript, SiStyledcomponents, SiExpress } from "react-icons/si";

export default function Projects({ projects }) {
  function onPick() {
    swal("Thanks for your rating!", `You rated us $/3`, "success");
  }

  const colors = {
    Javascript: { color: "yellow", icon: <FaJs /> },
    Sass: { color: "pink", icon: <FaSass /> },
    Node: { color: "green", icon: <FaNode /> },
    React: { color: "blue", icon: <FaReact /> },
    Express: { color: "white", icon: <SiExpress /> },
    Typescript: { color: "ts", icon: <SiTypescript /> },
    Styled_Components: { color: "styled", icon: <SiStyledcomponents /> },
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
                    <a href="#" className="github">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="" className="link">
                      <FaExternalLinkAlt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="langs">
                <ul>
                  <li className={colors[project.language]?.color}>
                    {colors[project.language]?.icon}
                    <span>{project.language}</span>
                  </li>
                  <li className={colors[project.language2]?.color}>
                    {colors[project.language2]?.icon}
                    <span>{project.language2}</span>
                  </li>
                </ul>
                <hr />
              </div>
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
