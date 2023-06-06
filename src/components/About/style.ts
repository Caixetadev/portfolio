import styled, { css } from "styled-components";

import About from "/public/assets/about.svg";

export const SectionAbout = styled.section`
  max-width: 120rem;
  margin: 15rem auto 15rem auto;
  background-image: url(${About.src});
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    margin: 0;
    padding: 9rem 0;
    background-size: 380px;
  }
`;

export const Paragraphs = styled.div`
  ${({ theme }) => css`
    line-height: 3.5rem;
    text-align: center;
    font-weight: 300;
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.6rem;

    a {
      color: ${theme.colors.text_blue};
    }

    span {
      text-decoration: underline;
      text-decoration-color: ${theme.colors.text_blue};
    }

    @media (max-width: 600px) {
      p {
        margin-bottom: 2rem;
      }
      max-width: 100%;
      text-align: left;
    }

    @media (min-width: 600px) {
      p {
        display: inline;
        margin: 0;
        padding: 0;
      }
    }
  `}
`;
