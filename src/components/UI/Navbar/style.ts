import styled from "styled-components";

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.5rem);
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
  & span {
    color: ${(props) => props.theme.colors.blue_ocean};
  }
  & nav .iconBar {
    display: none;
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

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

@media screen and (max-width: 768px) {
  .links {
    position: absolute;
    top: -100%;
  }

  .hamburguer {
    position: absolute;
    right: 50px;
    border: none;
    display: block;
    z-index: 999;
    background-color: transparent;
  }

  .hamburguer::after {
    position: absolute;
    content: '';
    height: 5px;
    background-color: #000;
    width: 30px;
    transition: .3s all ease;
  }

  .hamburguer.active::after {
    transform: rotate(45deg);
  }

  .hamburguer.active::before {
    transform: rotate(-45deg);
    margin-top: 0px;
  }

  .hamburguer::before {
    content: '';
    height: 5px;
    background-color: #000;
    position: absolute;
    width: 30px;
    margin-top: -20px;
    transition: .3s all ease;
  }

  .links {
    width: 100%;
    background-color: #c9c9c9;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: .8s all ease;
    top: -100%;
  }

  .links ul {
    flex-direction: column;
  }

  .links.active {
    width: 100%;
    background-color: #c9c9c9;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: .8s all ease;
    top: 20%;
  }

  .links.active ul {
    flex-direction: column;
  }
}

export default Header;
