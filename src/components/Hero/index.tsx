import { Container } from "../../styles/global";

import * as S from "./style";
import { icons } from "./icons";
import { Button } from "../Button";
import { useTranslation } from "next-i18next";

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
            {icons.map(({ image, alt }) => (
              <S.Icon key={image} src={image} alt={alt} />
            ))}
          </S.Icons>
          <Button>{t("hero.chat")}</Button>
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
