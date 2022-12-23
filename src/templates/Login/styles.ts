import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43rem;
    height: 54.8rem;
    border-radius: 0.8rem;
    background-color: ${theme.colors.background_secondary};

    @media (max-width: 56rem) {
      width: 90%;
      margin: 0 auto;
    }
  `}
`;

export const ButtonBack = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 35.8rem;
    height: 5rem;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    padding-left: 2rem;
    color: #fff;
    font-size: 1.4rem;
    background-color: ${theme.colors.background_terceary};

    @media (max-width: 56rem) {
      width: 30rem;
    }
  `}
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForgotPassword = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;
    font-weight: 500;
    background: none;
    color: ${theme.colors.text_gray};
    border: none;
    outline: none;
    margin-top: 1.5rem;
  `}
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;
