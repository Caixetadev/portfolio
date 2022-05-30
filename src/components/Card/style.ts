import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 80rem;
    height: 27rem;
    background-color: ${theme.colors.background_secundary};
    margin-top: 13rem;
    margin-bottom: 3rem;
    border-radius: 2rem;

    &:nth-child(2n + 1) {
      margin-left: 30rem;
    }
  `}
`;

export const Image = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 0 2rem 2rem 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 2rem 0;
  font-weight: 300;
  text-align: center;
  max-width: 90%;
`;
