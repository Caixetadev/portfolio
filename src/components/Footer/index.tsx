import { useTranslation } from "next-i18next";
import { Container } from "../../styles/global";

import * as S from "./style";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <S.Footer id="contact">
      <Container>
        <S.Wrapper>
          <S.Work>{t("footer.ready")}</S.Work>
          <S.City>Uberlândia, MG, Brazil</S.City>
          <S.Email href="mailto:caixetadev@gmail.com" target="_blank">
            caixetadev@gmail.com
          </S.Email>
          <S.Phone>(+55) 62 996 870 432</S.Phone>
          <S.SocialLinks>
            <S.Link href="https://github.com/Caixetadev" target="_blank">
              github
            </S.Link>
            <S.Link
              href="https://www.linkedin.com/in/caixetadev/"
              target="_blank"
            >
              linkedin
            </S.Link>
            <S.Link
              href="https://www.instagram.com/caixetadev/"
              target="_blank"
            >
              instagram
            </S.Link>
          </S.SocialLinks>
        </S.Wrapper>
        <S.Copy>
          &copy; {t("footer.right")} <span>Rafael Caixeta</span>
        </S.Copy>
      </Container>
    </S.Footer>
  );
}
