import { Container } from "styles/global";

import { Title } from "..";

import { useTranslation, Trans } from "next-i18next";

import * as S from "./style";

export function About() {
  const { t } = useTranslation("common");

  return (
    <S.SectionAbout id="about">
      <Container>
        <div>
          <Title>{t("about.title")}</Title>
          <S.Paragraphs
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("about.description") }}
          />
        </div>
      </Container>
    </S.SectionAbout>
  );
}
