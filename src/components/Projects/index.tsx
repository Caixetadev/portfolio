import { useTranslation } from "next-i18next";

import { IProjects } from "../../types";

import { Container } from "../../styles/global";
import { Card } from "../Card";
import { Title } from "../Title";

import * as S from "./style";

export function Projects({ projects }: { projects: Array<IProjects> }) {
  const { t } = useTranslation("common");

  return (
    <S.SectionProjects id="projects">
      <Container>
        <Title>{t("projects.title")}</Title>
        <Card projects={projects} />
      </Container>
    </S.SectionProjects>
  );
}
