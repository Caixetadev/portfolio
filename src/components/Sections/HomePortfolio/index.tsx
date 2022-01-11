import Image from "next/image";
import { useRef, useEffect } from "react";
import { Container } from "../../../styles/global";
import { SectionHome } from "./style";
import HomeImage from "../../../../public/assets/home.jpg";

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
    <SectionHome>
      <Container>
        <div className="cont">
          <span>Hi, my name is</span>
          <h1>CAIXETA</h1>
          <h2 ref={h2El}>FRONT END DEVELOPER</h2>
          <a href="#projects">Portfolio</a>
        </div>
        <Image src={HomeImage} alt="oi" width="350" height="450" />
      </Container>
    </SectionHome>
  );
}
