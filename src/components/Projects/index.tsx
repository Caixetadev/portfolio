import { Container } from "../../styles/global";
import { IProjects } from "../../types";
import { Card } from "../Card";
import { Title } from "../Title";
import * as S from "./style";

export function Projects({ projects }: { projects: Array<IProjects> }) {
  return (
    <S.SectionProjects id="projects">
      <Container>
        <Title>Projects</Title>
        <Card projects={projects} />
      </Container>
    </S.SectionProjects>
  );
}
