import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Container } from "../../styles/global";

import * as S from "./style";

export function Footer() {
  return (
    <S.Footer id="contact">
      <Container>
        <S.Wrapper>
          <S.Work>ready to work with me?</S.Work>
          <S.City>Uberlândia, MG, Brazil</S.City>
          <S.Email>caixetadev@gmail.com</S.Email>
          <S.Phone>(+55) 62 996 870 432</S.Phone>
          <S.SocialLinks>
            <S.Link href="https://github.com/Caixetadev" target="_blank">
              github
            </S.Link>
            <S.Link
              href="https://www.linkedin.com/in/caixetadev/"
              target="_blank"
            >
              linkedin
            </S.Link>
            <S.Link
              href="https://www.instagram.com/caixetadev/"
              target="_blank"
            >
              instagram
            </S.Link>
          </S.SocialLinks>
        </S.Wrapper>
        <S.Copy>
          &copy; 2022 All Right Reserved by <span>Rafael Caixeta</span>
        </S.Copy>
      </Container>
    </S.Footer>
  );
}
