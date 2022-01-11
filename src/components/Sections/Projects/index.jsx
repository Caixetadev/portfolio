import { Container } from "../../../styles/global";
import swal from "sweetalert";
import SectionProjects from "./style";
import Image from "next/image";
import { IProjects } from "../../../pages";
import HomeImage from "../../../../public/assets/home.jpg";
import { Card } from "./style";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects }) {
  function onPick() {
    swal("Thanks for your rating!", `You rated us $/3`, "success");
  }

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
              <ul>
                {project.language.map((item, index) => (
                  <li key={index}>
                    {item.name}{" "}
                    <Image src={item.image} width="30" height="30" alt="oi" />
                  </li>
                ))}
              </ul>
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </SectionProjects>
    </Container>
  );
}
