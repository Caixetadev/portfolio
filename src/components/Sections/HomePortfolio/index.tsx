import Image from "next/image";
import { useRef, useEffect } from "react";
import { Container } from "../../../styles/global";
import { Content, SectionHome } from "./style";
import HomeImage from "../../../../public/assets/Coding-bro.svg";

export default function Home(): JSX.Element {
  const h2El = useRef(null);

  useEffect(() => {
    function writeText(text: HTMLElement) {
      const arrText = text.innerHTML.split("");
      text.innerHTML = "";

      arrText.forEach((letter: string, index: number) => {
        setTimeout(() => {
          text.innerHTML += letter;
        }, 100 * index);
      });
    }
    writeText(h2El.current!);
  }, []);

  return (
    <SectionHome data-aos="fade-right">
      <Container>
        <Content>
          <span>Hi, my name is</span>
          <h1>Caixeta</h1>
          <h2 ref={h2El}>Front end developer</h2>
          <a
            href="https://drive.google.com/file/d/1SKbnP4td4K8-gG5JwVjGl6hBn493l4is/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Curriculum
          </a>
        </Content>
        <Image
          src={HomeImage}
          alt="Ilustração de um programador"
          width="400"
          height="500"
        />
      </Container>
    </SectionHome>
  );
}
