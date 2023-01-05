import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 10rem;
    background-color: ${theme.colors.background};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10rem;

  @media (max-width: 650px) {
    padding: 0rem;
  }
`;

export const Work = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 2.4rem;

    @media (max-width: 650px) {
      font-size: 2rem;
    }

    @media (max-width: 400px) {
      font-size: 1.8rem;
    }
  `}
`;

export const City = styled.p`
  ${({ theme }) => css`
    margin: 3rem 0;
    color: ${theme.colors.text_gray};

    @media (max-width: 650px) {
      font-size: 1.5rem;
    }
  `}
`;

export const Email = styled.a`
  ${({ theme }) => css`
    font-size: 4.8rem;
    font-weight: 700;
    color: ${theme.colors.text_blue};

    @media (max-width: 650px) {
      font-size: 3rem;
    }

    @media (max-width: 400px) {
      font-size: 2.6rem;
    }
  `}
`;

export const Phone = styled.h2`
  margin: 3rem 0;
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text_gray};
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 2rem;
    transition: all 0.3s ease;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: ${theme.colors.text_blue};
    }

    @media (max-width: 400px) {
      font-size: 1.4rem;
    }
  `}
`;

export const Copy = styled.p`
  ${({ theme }) => css`
    padding: 2rem 0;
    display: flex;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${theme.colors.text_gray};

    span {
      margin-left: 0.5rem;
      color: ${theme.colors.text_gray_light};
    }

    @media (max-width: 600px) {
      margin-top: 5rem;
    }

    @media (max-width: 400px) {
      margin-top: 2rem;
      font-size: 1rem;
    }
  `}
`;
