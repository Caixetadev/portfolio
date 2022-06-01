import { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import { Container } from "../../styles/global";
import Logo from "/public/assets/logo.svg";

import { Link } from "react-scroll";

import * as S from "./style";
import { GloboDropdown } from "../GloboDropdown";

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
            <S.NavItens>
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
                  Projects
                </Link>
              </S.Items>
              <S.Items>
                <S.Link
                  href="https://linkedin.com/in/caixetadev"
                  target="_blank"
                >
                  Linkedin
                </S.Link>
              </S.Items>
              <S.Items>
                <S.Link>Curriculum</S.Link>
              </S.Items>
              <S.Items>
                <GloboDropdown />
              </S.Items>
              <S.Items>
                <Link
                  to="contact"
                  spy={false}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  Contact
                </Link>
              </S.Items>
            </S.NavItens>
          </S.Nav>
        </S.Wrapper>
      </Container>
    </S.Header>
  );
}
