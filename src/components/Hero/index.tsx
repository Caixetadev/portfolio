import { useTranslation } from "next-i18next";

import { icons } from "./icons";
import { Button } from "../Button";
import { Container } from "styles/global";

import * as S from "./style";
import { Link } from "react-scroll";

export function Hero() {
  const { t } = useTranslation("common");

  return (
    <S.SectionHome id="home">
      <Container>
        <S.Wrapper>
          <S.Name>
            <span>{t("hero.iam")}</span>
            <br />
            Rafael Caixeta
          </S.Name>
          <S.Description>{t("hero.description")}</S.Description>
          <S.Icons>
            {icons.map(({ image, alt, path }) => (
              <S.Link href={path} key={path} target="_blank">
                <S.Icon src={image} alt={alt} />
              </S.Link>
            ))}
          </S.Icons>
          <Link
            to="contact"
            spy={false}
            offset={-250}
            smooth="easeInQuint"
            duration={700}
          >
            <Button>{t("hero.chat")}</Button>
          </Link>
        </S.Wrapper>
        <S.Box>
          <S.Arrow />
          <S.Arrow />
          <S.Arrow />
        </S.Box>
      </Container>
    </S.SectionHome>
  );
}
