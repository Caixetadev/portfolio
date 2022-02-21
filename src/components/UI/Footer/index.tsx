import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Container, Icons } from "./style";

import Footer from "./style";

export default function FooterComponent() {
  return (
    <Footer id="contact">
      <Container>
        <Icons>
          <ul>
            <li>
              <a
                href="https://github.com/caixetadev"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/caixetadev/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/caixetadev/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Icons>
        <p>&copy; Rafael Caixeta</p>
      </Container>
    </Footer>
  );
}
