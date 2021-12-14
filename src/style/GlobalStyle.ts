import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --main-bg: #0b0b0b;
    --border-solid: #191919;
    --blue-ocean: #a9d6e5;
    --hover-bg: #161616;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    color: #fff;
    background-color: #0b0b0b;
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
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #161616;
  }
  ::-webkit-scrollbar-thumb {
    background: #a9d6e5;
    border-radius: .8rem;
  }
`;

export const Container = styled.div`
  max-width: 150rem;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
