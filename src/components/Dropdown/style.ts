import styled, { css } from "styled-components";

type WrapperProps = {
  isOpen: boolean;
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content}, ${Overlay} {
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    cursor: initial;
  `}
`;

export const Content = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  margin-top: 2rem;
  right: -60px;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    border-right: 1.2rem solid transparent;
    border-left: 1.2rem solid transparent;
    border-bottom: 1.2rem solid #111;
    top: -1.2rem;
    right: 58px;
  }
`;

export const Title = styled.div`
  z-index: 50;
  position: relative;
`;
