/* eslint-disable react/no-unescaped-entities */
import { Container } from "../../styles/global";
import { Title } from "..";

import * as S from "./style";

export function About() {
  return (
    <S.SectionAbout id="about">
      <Container>
        <div>
          <Title>About</Title>
          <S.Paragraph data-aos="fade-up">
            Hi, my name is Rafael Caixeta, I'm a self-taught and freelance web
            developer, I'm currently delving into Frontend development, focusing
            on building responsive interfaces, writing clean and efficient code.
            Passionate about technology, books, games and music. My favorite
            techs are: <span>React</span>, <span>Typescript</span> and{" "}
            <span>Nextjs</span>. You can contact me through
            {"  "}
            <S.Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/caixetadev/"
            >
              LinkedIn
            </S.Link>
            , see what I'm developing on{" "}
            <S.Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Caixetadev"
            >
              GitHub
            </S.Link>{" "}
            and say hi on Discord (caixeta#7777).
          </S.Paragraph>
        </div>
      </Container>
    </S.SectionAbout>
  );
}
