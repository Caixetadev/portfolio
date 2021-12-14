import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Headers from "./styles";
import { useState } from "react";

interface Props {
  border: boolean;
}

export default function Navbar(props: Props) {
  const [menuActive, setMenu] = useState(false);
  const { border } = props;

  const menu = () => {
    const ul: HTMLElement | null = document.querySelector("nav ul");
    if (ul != null) {
      ul.classList.toggle("menuOpen");
      setMenu(ul.classList.contains("menuOpen"));
    }
    if (menuActive !== true) {
      document.body.style.cssText = `overflow-y: hidden;`;
    } else {
      document.body.style.cssText = ``;
    }
  };

  return (
    <Headers className={border ? "border" : ""}>
      <nav>
        <div>
          <h1>
            <Link to="/">
              Caixeta<span>dev</span>
            </Link>
          </h1>
        </div>
        <div className="iconBar" onClick={menu}>
          <FaBars />
        </div>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </div>
        </ul>
      </nav>
    </Headers>
  );
}
