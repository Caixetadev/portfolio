import { Container } from "styles/global";

import { Title } from "..";

import * as S from "./style";
import { useTranslation } from "next-i18next";

export function About() {
  const { t } = useTranslation("common");

  return (
    <S.SectionAbout id="about">
      <Container>
        <div>
          <Title>{t("about.title")}</Title>
          <S.Paragraph data-aos="fade-up">{t("about.description")}</S.Paragraph>
        </div>
      </Container>
    </S.SectionAbout>
  );
}
