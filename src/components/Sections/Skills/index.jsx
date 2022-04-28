/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from "../../../styles/global";
import { SectionSkills } from "./style";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { SectionTitle } from "../../SectionTitle";

const arrSkills = [
  {
    desc: "ReactJS",
    image: <FaReact />,
    color: "#61dafb",
  },
  {
    desc: "JavaScript",
    image: <FaJs />,
    color: "#ffd600",
  },
  {
    desc: "HTML5",
    image: <FaHtml5 />,
    color: "#E65100",
  },
  {
    desc: "CSS3",
    image: <FaCss3Alt />,
    color: "#0277BD",
  },
  {
    desc: "Github",
    image: <FaGithub />,
    color: "#fff",
  },
  {
    desc: "Typescript",
    image: <SiTypescript />,
    color: "#2F74C0",
  },
  {
    desc: "Next",
    image: <SiNextdotjs />,
    color: "#ffffff",
  },
];

export function Skills() {
  useEffect(() => {
    const info = document.querySelector(".info p");
    const img = document.querySelectorAll(".tech");

    img.forEach((item) => {
      const index = item.getAttribute("data-id");
      const { desc, color } = arrSkills[index];
      item.addEventListener("mouseover", () => {
        const svg = item.children;

        svg[0].style.fill = color;
        info.innerHTML = desc;
      });
      item.addEventListener("mouseout", () => {
        const svg = item.children;
        svg[0].style.fill = "";
        info.innerHTML = "Hover over the icons";
      });
    });
  });

  function Seila({ desc, image, i }) {
    return (
      <div className="tech" data-aos="fade-up" data-id={i}>
        {image}
      </div>
    );
  }

  return (
    <SectionSkills id="skill">
      <Container>
        <div className="cont">
          <div className="info">
            <SectionTitle title="Skill" />
            <p data-aos="fade-up">Hover over the icons</p>
          </div>
          <div className="techs">
            {arrSkills.map((items, i) => (
              <Seila key={i} i={i} image={items.image} />
            ))}
          </div>
        </div>
      </Container>
    </SectionSkills>
  );
}
