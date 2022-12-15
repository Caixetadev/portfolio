import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 80rem;
    height: 27rem;
    background-color: #111;
    margin-top: 13rem;
    margin-bottom: 3rem;
    border-radius: 2rem;

    &:nth-child(2n + 1) {
      margin-left: 30rem;
    }

    @media (max-width: 1200px) {
      width: 100%;
      margin: 13rem auto;
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }

    @media (max-width: 656px) {
      flex-direction: column-reverse;
      width: 100%;
      margin: 13rem auto;
      height: auto;
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }
  `}
`;

export const Image = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 0 2rem 2rem 0;

  @media (max-width: 656px) {
    width: 100%;
    border-radius: 2rem 2rem 0 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 656px) {
    padding: 2rem;
  }
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
