import { useEffect, useState } from "react";
import Header, { MenuIcon } from "./style";
import Link from "next/link";
import { Container } from "../../../styles/global";

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
      <div className="bg">
        <span className="left"></span>
        <span className="rigth"></span>
      </div>
      <Container>
        <div className="logo">
          <h1>
            <Link href="/">
              <a>Caixetadev</a>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className={nav ? "active" : ""}>
            <div className="cont">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </ul>
        </nav>
        <MenuIcon className="menuButton" onClick={() => setShowNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </Container>
    </Header>
  );
}
