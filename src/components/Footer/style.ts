import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 10rem;
    background-color: ${theme.colors.background_secundary};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10rem;
`;

export const Work = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 2.4rem;
  `}
`;

export const City = styled.p`
  ${({ theme }) => css`
    margin: 3rem 0;
    color: ${theme.colors.text_gray};
  `}
`;

export const Email = styled.h1`
  ${({ theme }) => css`
    font-size: 4.8rem;
    color: ${theme.colors.text_blue};
  `}
`;

export const Phone = styled.h2`
  margin: 3rem 0;
  font-size: 2rem;
  font-weight: 500;
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

    & + a {
      margin-left: 2rem;
    }
  `}
`;

export const Copy = styled.p`
  ${({ theme }) => css`
    padding: 2rem 0;
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${theme.colors.text_gray};

    span {
      margin-left: 0.5rem;
      color: ${theme.colors.text_gray_ligth};
    }
  `}
`;
