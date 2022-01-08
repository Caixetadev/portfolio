import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Container } from "./style";

import Footer from "./style";

export default function () {
  return (
    <Footer>
      <Container>
        <div className="icons">
          <ul>
            <li>
              <a href="https://github.com/caixetadev" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/caixetadev/" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/caixetadev/" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; Rafael Caixeta</p>
      </Container>
    </Footer>
  );
}
