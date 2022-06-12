import { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import { Container } from "../../styles/global";
import Logo from "/public/assets/logo.svg";

import { Link } from "react-scroll";

import * as S from "./style";
import { GlobeDropdown as GlobeDropdown } from "../GlobeDropdown";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setShowNav] = useState(false);

  const { t } = useTranslation("common");

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [nav]);

  return (
    <S.Header isScrolled={isScrolled}>
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
            onClick={() => setShowNav((prev) => !prev)}
            className={nav ? "active" : ""}
          >
            <S.Bar />
          </S.MenuHamburger>
        </S.Wrapper>
        <S.MobileWrapper className={nav ? "active" : ""}>
          <S.NavItemsMobile>
            <S.ItemsMobile>
              <Link
                to="about"
                spy={false}
                offset={-250}
                smooth="easeInQuint"
                duration={700}
                onClick={() => setShowNav((prev) => !prev)}
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
                onClick={() => setShowNav((prev) => !prev)}
              >
                {t("header.projects")}
              </Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <S.Link
                href="https://linkedin.com/in/caixetadev"
                target="_blank"
                onClick={() => setShowNav((prev) => !prev)}
              >
                {t("header.linkedin")}
              </S.Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <S.Link onClick={() => setShowNav((prev) => !prev)}>
                {t("header.curriculum")}
              </S.Link>
            </S.ItemsMobile>
            <S.ItemsMobile>
              <Link
                to="contact"
                spy={false}
                smooth="easeInOutQuart"
                duration={1000}
                onClick={() => setShowNav((prev) => !prev)}
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
