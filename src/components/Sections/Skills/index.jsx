/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from "../../../styles/global";
import { SectionSkills } from "./style";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const arrSkills = [
  {
    desc: "ReactJS, tenho 1 mês de exp",
    image: <FaReact />,
    color: "#61dafb",
  },
  {
    desc: "JavaScript, tenho 7 meses de exp",
    image: <FaJs />,
    color: "#ffd600",
  },
  {
    desc: "HTML5, tenho 7 meses de exp",
    image: <FaHtml5 />,
    color: "#E65100",
  },
  {
    desc: "CSS3, tenho 7 meses de exp",
    image: <FaCss3Alt />,
    color: "#0277BD",
  },
  {
    desc: "Github, tenho 7 meses de exp",
    image: <FaGithub />,
    color: "#fff",
  },
  {
    desc: "Typescript, tenho 2 meses de exp",
    image: <SiTypescript />,
    color: "#2F74C0",
  },
  {
    desc: "Next, tenho 1 meses de exp",
    image: <SiNextdotjs />,
    color: "#ffffff",
  },
];

export default function Skills() {
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
        info.innerHTML = "Passe o mouse por cima dos icones";
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
            <h2 data-aos="fade-right">Minhas skill</h2>
            <p data-aos="fade-up">Passe o mouse por cima dos icones</p>
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
