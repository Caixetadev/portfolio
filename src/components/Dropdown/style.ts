import styled, { css } from "styled-components";

type ContentProps = {
  isOpen: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export const Content = styled.div<ContentProps>`
  ${({ isOpen }) => css`
    transition: all 0.3s ease;
    display: ${isOpen ? "block" : "none"};
    opacity: ${isOpen ? "1" : "0"};
    position: absolute;
    margin-top: 2rem;
    right: -60px;

    &::before {
      content: "";
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid #111;
      top: -1.2rem;
      right: 58px;
    }
  `}
`;

export const Title = styled.div``;
