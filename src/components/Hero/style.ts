import styled, { css, keyframes } from "styled-components";

import Text from "/public/assets/text.svg";

export const SectionHome = styled.main`
  height: 100vh;
  max-width: 120rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-image: url(${Text.src});
  background-repeat: no-repeat;
  background-position: right;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  span {
    font-weight: 500;
    font-size: 2.4rem;
  }
  font-weight: 600;
  font-size: 4.8rem;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  max-width: 45%;
  font-weight: 300;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const Icons = styled.div`
  display: flex;
  margin: 3rem 0;
`;

export const Icon = styled.img``;

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background_terceary};
    border-radius: 0.4rem;
    padding: 1rem;

    & + a {
      margin-left: 2.3rem;
    }
  `}
`;

export const Box = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const animateArrow = keyframes`
   0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
`;

export const Arrow = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
  margin: -1rem;
  animation: ${animateArrow} 2s infinite;
  &:nth-child(1) {
    animation-delay: -0.2s;
  }
  &:nth-child(2) {
    animation-delay: -0.4s;
  }
`;
