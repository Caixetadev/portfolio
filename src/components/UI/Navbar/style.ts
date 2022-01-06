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
  z-index: 2;
  transition: 0.3s;

  .bg {
    display: flex;
    justify-content: space-between;
    transition: all 0.4s ease;
  }

  .bg.remove {
    opacity: 0;
  }

  & .bg .left {
    background-color: ${(props) => props.theme.colors.bakground_secundary};
    height: 7.5rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 2vw;
  }

  & .bg .rigth {
    background-color: ${(props) => props.theme.colors.bakground_secundary};
    height: 7.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 23vw;
  }

  &.border {
    box-shadow: rgba(3, 3, 3, 0.2) 0px 10px 10px;
  }
  & .logo h1 a {
    font-size: 2.4rem;
    padding: 1rem;
    cursor: pointer;
    position: relative;
  }
  & ul li + li {
    margin-left: 1rem;
  }
  & a {
    padding: 1rem;
    font-size: 1.6rem;
  }
  & nav a:hover {
    color: grey;
  }
  @media (max-width: 560px) {
    .menuButton {
      display: flex;
    }

    nav ul {
    }

    nav ul {
      position: absolute;
      width: 100%;
      height: calc(100vh - 70px);
      top: 70px;
      right: 0;
      background: ${(props) => props.theme.colors.background};
      transform: translateY(100%);
      transition: transform 400ms;
    }

    .cont {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 15rem;
    }

    nav ul.active {
      transform: translateY(0);
      overflow-y: hidden;
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
