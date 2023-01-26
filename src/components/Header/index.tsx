import { useEffect } from "react";

import { Link } from "react-scroll";

import { useTranslation } from "next-i18next";

import GlobeDropdown from "components/GlobeDropdown";

import Logo from "/public/assets/logo.svg";

import { Container } from "styles/global";

import { useOnScroll } from "hooks/useOnScroll";
import { useToggle } from "hooks/useToggle";
import { useShowHeader } from "components/Header/hooks/useShowHeader";

import * as S from "./style";

export function Header() {
  const { scrollIsGreaterThanHeight } = useOnScroll(20);
  const { state, toggle } = useToggle();
  const { showHeader } = useShowHeader();

  const { t } = useTranslation("common");

  useEffect(() => {
    state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [state]);

  return (
    <S.Header showHeader={showHeader} isScrolled={scrollIsGreaterThanHeight}>
      <Container>
        <S.Wrapper>
          <Link to="home" spy={false} smooth="easeInOutQuart" duration={1000}>
            <S.Logo src={Logo.src} alt="Logo Caixeta" />
          </Link>
          <S.Nav>
            <S.NavItems>
              <S.Items>
                <Link
                  to="about"
                  spy={false}
                  offset={-250}
                  smooth="easeInQuint"
                  duration={700}
                >
                  {t("header.about")}
                </Link>
              </S.Items>
              <S.Items>
                <Link
                  to="projects"
                  spy={false}
                  offset={-150}
                  smooth="easeInQuint"
                  duration={700}
                >
                  {t("header.projects")}
                </Link>
              </S.Items>
              <S.Items>
                <S.Link
                  href="https://linkedin.com/in/caixetadev"
                  target="_blank"
                >
                  {t("header.linkedin")}
                </S.Link>
              </S.Items>
              <S.Items>
                <S.Link>{t("header.curriculum")}</S.Link>
              </S.Items>
              <S.Items>
                <GlobeDropdown />
              </S.Items>
              <S.Items>
                <Link
                  to="contact"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  {t("header.contact")}
                </Link>
              </S.Items>
            </S.NavItems>
          </S.Nav>
          <S.MenuHamburger
            aria-label="Menu Hamburger"
            onClick={toggle}
            className={state ? "active" : ""}
          >
            <S.Bar />
          </S.MenuHamburger>
        </S.Wrapper>
        <S.MobileWrapper className={state ? "active" : ""}>
          <S.NavItemsMobile>
            <S.ItemsMobile>
              <Link
                to="about"
                spy={false}
                offset={-250}
                smooth="easeInQuint"
                duration={700}
                onClick={toggle}
              >
                {t("header.about")}
              </Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <Link
                to="projects"
                spy={false}
                offset={-150}
                smooth="easeInQuint"
                duration={700}
                onClick={toggle}
              >
                {t("header.projects")}
              </Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <S.Link
                href="https://linkedin.com/in/caixetadev"
                target="_blank"
                onClick={toggle}
              >
                {t("header.linkedin")}
              </S.Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <S.Link onClick={toggle}>{t("header.curriculum")}</S.Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <Link
                to="contact"
                spy={false}
                smooth="easeInOutQuart"
                duration={1000}
                onClick={toggle}
              >
                {t("header.contact")}
              </Link>
            </S.ItemsMobile>
          </S.NavItemsMobile>
        </S.MobileWrapper>
      </Container>
    </S.Header>
  );
}
