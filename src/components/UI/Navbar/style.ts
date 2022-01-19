import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transition: 0.3s;

  &.border {
    box-shadow: rgba(3, 3, 3, 0.2) 0px 10px 10px;
  }

  & ul li + li {
    margin-left: 1rem;
  }

  & ul li a {
    letter-spacing: 0.1rem;
    font-family: "Poppins", sans-serif;
    padding: 1rem;
    font-size: 1.6rem;
    transition: all 0.2s ease;
    position: relative;
  }

  & ul li a::after {
    content: "";
    height: 1px;
    width: 0;
    left: 0;
    bottom: 1px;
    background-color: ${(props) => props.theme.colors.background_three};
    transition: 0.5s;
    position: absolute;
  }

  & ul li:last-child {
    background-color: ${(props) => props.theme.colors.background_three};
    border-radius: 0.8rem;
  }

  & ul li:last-child a:hover::after,
  ul li:last-child a:hover {
    color: #fff;
    width: 0;
  }
`;

export const MenuIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  & div {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
  }

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  h1 a {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    padding: 1rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;

  @media (max-width: 560px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 15rem;
  }
`;

export const Nav = styled.nav`
  a:hover::after,
  a:hover {
    color: ${(props) => props.theme.colors.background_three};
    width: 100%;
  }

  @media (max-width: 560px) {
    ul {
      visibility: hidden;
      position: absolute;
      top: 70px;
      right: 0;
      background: ${(props) => props.theme.colors.background};
      transform: translateY(100%);
      transition: transform 400ms;
    }

    ul.active {
      visibility: initial;
      transform: translateY(0);
    }
  }
`;

export default Header;
