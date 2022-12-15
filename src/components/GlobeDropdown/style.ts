import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.background_secondary};
    width: 13.6rem;
    height: auto;
    padding-bottom: 1rem;
  `}
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 1rem;

  span {
    margin-left: 0.8rem;
  }
`;
