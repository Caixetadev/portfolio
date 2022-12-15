import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-size: 1.6rem;
      font-family: "Poppins", sans-serif;
      color: ${theme.colors.text};
      background: ${theme.colors.background};
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    html {
      font-size: 62.5%;
    }

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
      background: #3c3c3c;
      border-radius: 1rem;
    }
  `}
`;

export const Container = styled.div`
  max-width: 120rem;
  padding: 0 3rem;
  margin: 0 auto;
  width: 100%;
`;
