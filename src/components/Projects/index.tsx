import { useTranslation } from "next-i18next";

import { Container } from "styles/global";
import { Card } from "../Card";
import { Title } from "../Title";

import * as S from "./style";

export function Projects() {
  const { t } = useTranslation("common");

  return (
    <S.SectionProjects id="projects">
      <Container>
        <Title>{t("projects.title")}</Title>
        <Card />
      </Container>
    </S.SectionProjects>
  );
}
