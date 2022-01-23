import Form from "../../Form";
import SectionTitle from "../../SectionTitle";
import { Content, Infos, SectionContact, Container } from "./style";

export default function Contact() {
  return (
    <SectionContact id="contact">
      <Container className="container">
        <SectionTitle title="Contact" />
        <Content>
          <Infos></Infos>
          <Form />
        </Content>
      </Container>
    </SectionContact>
  );
}
