import styled, { css } from "styled-components";

import About from "/public/assets/about.svg";

export const SectionAbout = styled.section`
  height: 40rem;
  max-width: 120rem;
  margin: 15rem auto 5rem auto;
  background-image: url(${About.src});
  background-repeat: no-repeat;

  @media (max-width: 560px) {
    height: 65rem;
  }
`;

export const Paragraph = styled.p`
  line-height: 3.5rem;
  text-align: center;
  font-weight: 300;
  margin: 0 auto;
  max-width: 90%;
  font-size: 1.6rem;

  span {
    ${({ theme }) => css`
      text-decoration: underline;
      text-decoration-color: ${theme.colors.text_blue};
    `}
  }
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text_blue};
  `}
`;
