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
          <S.Paragraph data-aos="fade-up">
            {t("about.description")}{" "}
            <Trans>
              <S.Link
                href="https://discordapp.com/users/437264698786971660"
                target="_blank"
              >
                {t("about.link")}
              </S.Link>
            </Trans>
            {"."}
          </S.Paragraph>
        </div>
      </Container>
    </S.SectionAbout>
  );
}
