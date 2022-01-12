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

  & .logo h1 a {
    font-size: 2.4rem;
    padding: 1rem;
    cursor: pointer;
  }

  & ul li + li {
    margin-left: 1rem;
  }

  & a {
    padding: 1rem;
    font-size: 1.6rem;
    transition: all 0.2s ease;
  }

  & nav a:hover {
    color: ${(props) => props.theme.colors.background_three};
  }

  @media (max-width: 560px) {
    .menuButton {
      display: flex;
    }

    nav ul {
    }

    nav ul {
      visibility: hidden;
      position: absolute;
      top: 70px;
      right: 0;
      background: ${(props) => props.theme.colors.background};
      transform: translateY(100%);
      transition: transform 400ms;
    }

    .cont {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 15rem;
    }

    nav ul.active {
      visibility: initial;
      transform: translateY(0);
    }
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
`;

export default Header;
