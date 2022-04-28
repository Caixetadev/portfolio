import { Container } from "./style";
import { ISectionTitleProps } from "../../types";

export function SectionTitle({ title }: ISectionTitleProps) {
  return (
    <Container>
      <h2 data-aos="fade-right">{title}</h2>
    </Container>
  );
}
