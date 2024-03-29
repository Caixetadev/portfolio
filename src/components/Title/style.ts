import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 4.8rem;
    position: relative;

    &::before {
      content: "";
      height: 2rem;
      display: block;
      width: 10rem;
      background: ${theme.colors.text_blue_light};
      position: absolute;
      bottom: 1.5rem;
      z-index: -1;
    }

    @media (max-width: 600px) {
      &:before {
        height: 10px;
        width: 6rem;
        bottom: 8px;
      }

      font-size: 3rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
