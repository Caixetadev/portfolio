import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import * as S from "./style";

export function Footer() {
  return (
    <S.Footer id="contact">
      <S.Container>
        <S.Icons>
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
        </S.Icons>
        <p>&copy; Rafael Caixeta</p>
      </S.Container>
    </S.Footer>
  );
}
