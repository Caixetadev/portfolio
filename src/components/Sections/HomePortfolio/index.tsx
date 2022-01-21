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
          <h1>CAIXETA</h1>
          <h2 ref={h2El}>FRONT END DEVELOPER</h2>
          <a href="#projects">Portfolio</a>
        </Content>
        <Image src={HomeImage} alt="oi" width="400" height="500" />
      </Container>
    </SectionHome>
  );
}
