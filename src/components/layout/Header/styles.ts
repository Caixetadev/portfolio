import styled from "styled-components";

const Headers = styled.header`
  background-color: #0e141b;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  backdrop-filter: blur(0.5rem);
  top: 0;
  z-index: 2;
  transition: 0.3s;
  &.border {
    box-shadow: rgba(3, 3, 3, 0.2) 0px 10px 10px;
  }
  & h1 a {
    font-size: 2.4rem;
    padding: 1rem;
    cursor: pointer;
  }
  & span {
    color: var(--blue-ocean);
  }
  & nav .iconBar {
    display: none;
  }
  & nav {
    display: flex;
    justify-content: space-between;
    width: 110rem;
    align-items: center;
    margin: 0 auto;
  }
  & nav ul div {
    display: flex;
  }
  & ul li + li {
    margin-left: 1rem;
  }
  & a {
    padding: 1rem;
    border-radius: 0.8rem;
    transition: 0.5s;
    font-size: 1.6rem;
  }
  & a:hover {
    background-color: var(--hover-bg);
  }
  @media (max-width: 800px) {
    & nav ul {
      display: none;
    }
    @keyframes fadeIn {
      from {
        height: 0;
        opacity: 0;
      }
      to {
        height: 100vh;
        opacity: 1;
      }
    }
    & nav ul.menuOpen {
      animation: fadeIn ease 1s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 75px;
      right: 0px;
      background-color: rgba(11, 11, 11, 1);
      z-index: 1;
    }
    & nav ul div {
      display: inline-block;
      margin-bottom: 25rem;
    }
    & nav ul li {
      margin-bottom: 1.6rem;
    }
    & a {
      font-size: 1.8rem;
    }
    & nav .iconBar {
      display: flex;
      font-size: 2rem;
      cursor: pointer;
      padding: 1rem;
    }
  }
  @media (max-width: 1200px) {
    & nav {
      width: 90%;
    }
  }
`;

export default Headers;
