/* eslint-disable react/no-unescaped-entities */
import { Container } from "../../../styles/global";
import { SectionTitle } from "../../../components";
import { Content, SectionAbout } from "./style";

export function About() {
  return (
    <SectionAbout id="about">
      <Container>
        <Content>
          <SectionTitle title="About" />
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tenetur ipsam, enim perspiciatis repellendus nemo? Inventore unde
            adipisci alias itaque dolores harum. Iusto eaque esse recusandae
            excepturi nulla nobis dolores provident laborum obcaecati, explicabo
            accusantium exercitationem nihil, quasi, earum perferendis ab.
            Provident consectetur praesentium accusamus natus corporis, labore
            doloremque sed.
          </p>
        </Content>
      </Container>
    </SectionAbout>
  );
}
