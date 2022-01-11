import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: #8257e5;
    border-radius: .3rem;
  }
`;

export const Container = styled.div`
  max-width: 110rem;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
