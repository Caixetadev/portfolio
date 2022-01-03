import { useEffect, useState } from "react";
import Header from "./style";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { Container } from "../../../styles/global";
import { ItemsWrapper } from "./style";

export default function Navbar() {
  const [border, setBorder] = useState(false);

  const [open, setOpen] = useState(false);
  const [classActive, setClassActive] = useState(``);

  const toggleNav = () => {
    if (open === false) {
      setClassActive(`${styles.active}`), setOpen(true), console.log(open);
    }

    if (open === true) {
      setClassActive(``), setOpen(false), console.log(open);
    }
  };

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

  console.log(border);

  const menu = () => {};

  return (
    <Header className={border ? "border" : ""}>
      <button
        onClick={toggleNav}
        className={`${styles.hamburguer} ${classActive}`}
      />
      <div className={`${styles.links} ${classActive}`}></div>
      <Container>
        <div className="logo">
          <h1>
            <Link href="/">
              <a>
                Caixeta<span>dev</span>
              </a>
            </Link>
          </h1>
        </div>
        {/* <div className="iconBar" onClick={menu}>
          <FaBars />
        </div> */}
        <nav>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </ul>
        </nav>
      </Container>
    </Header>
  );
}
