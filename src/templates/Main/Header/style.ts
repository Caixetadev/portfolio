import styled, { css } from "styled-components";

type PropsHeader = {
  isScrolled: boolean;
};

export const Header = styled.header<PropsHeader>`
  ${({ theme, isScrolled }) => css`
    display: flex;
    align-items: center;
    background-color: ${isScrolled
      ? theme.colors.background_transparent
      : theme.colors.background};
    width: 100%;
    height: ${isScrolled ? "7rem" : "8rem"};
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: all 0.3s ease;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuHamburger = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  color: #fff;
  gap: 0.5rem;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  border-top: 2px solid #fff;
  width: 20px;

  ${MenuHamburger}.active &::before {
    transform: rotate(135deg);
  }

  ${MenuHamburger}.active &::after {
    transform: rotate(-135deg);
    top: -7px;
  }

  ${MenuHamburger}.active & {
    border-top-color: transparent;
  }

  &::after,
  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
`;

export const MobileWrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    z-index: -1;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translate3d(0px, -600px, 0px);
    transition: all 0.3s linear;
    background-color: ${theme.colors.background};

    &.active {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }

    @media (max-width: 1000px) {
      display: flex;
    }
  `}
`;

export const NavItemsMobile = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ItemsMobile = styled.li`
  text-transform: uppercase;
  font-weight: 500;
  margin: 3rem 0; ;
`;

export const NavItems = styled.ul`
  display: flex;
`;

export const Items = styled.li`
  & + li {
    margin-left: 5rem;
  }

  ${({ theme }) => css`
    a,
    img {
      transition: all 0.3s ease;
    }
    a:hover,
    img:hover {
      color: ${theme.colors.text_blue};
      cursor: pointer;
    }
  `}
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Link = styled.a``;

export const Icon = styled.img`
  width: 1.9rem;
  height: 1.9rem;
  margin-top: 0.3rem;
`;
