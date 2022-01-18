import { useEffect, useState } from "react";
import Header, { Content, Logo, MenuIcon } from "./style";
import Link from "next/link";
import { Container } from "../../../styles/global";
import { Nav } from "./style";

export default function Navbar() {
  const [border, setBorder] = useState(false);
  const [nav, setShowNav] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setBorder(true);
      } else {
        setBorder(false);
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
    <Header className={border ? "border" : ""}>
      <Container>
        <Logo>
          <h1>
            <Link href="#">
              <a>Caixetadev</a>
            </Link>
          </h1>
        </Logo>
        <Nav>
          <ul className={nav ? "active" : ""}>
            <Content>
              <li>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="#skill">
                  <a>Skill</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </Content>
          </ul>
        </Nav>
        <MenuIcon onClick={() => setShowNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </Container>
    </Header>
  );
}
