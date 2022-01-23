/* eslint-disable react/no-unescaped-entities */
import { Container } from "../../../styles/global";
import SectionTitle from "../../SectionTitle";
import { Content, SectionAbout } from "./style";

export default function About() {
  return (
    <SectionAbout id="about">
      <Container>
        <Content>
          <SectionTitle title="About" />
          <p data-aos="fade-up">
            Hi, I'm Rafael Caixeta, I live in Brazil and I'm 18 years old. I
            found out that I am passionate about web development on the 24th of
            July 2021. I'm at the very beginning of a journey, I'm currently
            studying JavaScript, Cascading Style Sheets and HyperText Markup
            Language. At the moment I'm just studying but soon I intend to start
            working in the Front End area.
          </p>
        </Content>
      </Container>
    </SectionAbout>
  );
}
