import { useRef, useEffect } from "react";
import { Container } from "../../../styles/global";
import { SectionHome } from "./style";

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
      <div className="bg">
        <div className="rigth"></div>
        <div className="left"></div>
        <Container>
          <div className="cont">
            <span>Hi, my name is</span>
            <h1>CAIXETA</h1>
            <h2 ref={h2El}>FRONT END DEVELOPER</h2>
            <a href="#">Portfolio</a>
          </div>
        </Container>
      </div>
    </SectionHome>
  );
}
