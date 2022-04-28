/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from "../../../styles/global";
import { SectionSkills } from "./style";
import { useEffect } from "react";
import { SectionTitle } from "../../SectionTitle";

import { arrSkills } from "./arraySkills";

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

  function Icons({ image, i }) {
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
            {arrSkills.map(({ image }, i) => (
              <Icons key={i} i={i} image={image} />
            ))}
          </div>
        </div>
      </Container>
    </SectionSkills>
  );
}
