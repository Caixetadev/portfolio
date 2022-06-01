import { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import { Container } from "../../styles/global";
import Globo from "/public/assets/globo.svg";
import Logo from "/public/assets/logo.svg";

import { Link } from "react-scroll";

import * as S from "./style";
import { useRouter } from "next/router";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setShowNav] = useState(false);

  const { t } = useTranslation("common");

  const router = useRouter();

  const onChangeLanguage = (lang: string) => () => {
    router.push(router.asPath, undefined, { locale: lang });
  };

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
                  About
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
                <S.Link onClick={onChangeLanguage("pt-BR")}>
                  <S.Icon src={Globo.src} alt="Globo" />
                </S.Link>
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
