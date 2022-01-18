import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 10rem;
  background-color: ${(props) => props.theme.colors.bakground_secundary};

  & p {
    font-size: 1.6rem;
  }
`;

export const Container = styled.div`
  height: 15rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icons = styled.div`
  ul {
    display: flex;
  }

  ul li a {
    margin-bottom: 4rem;
    border-radius: 0.8rem;
    background-color: #202024;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.background_three};
    transition: all 0.2s ease;
  }

  ul li + li {
    margin-left: 3rem;
  }

  svg {
    font-size: 3.3rem;
    cursor: pointer;
  }

  ul li a:hover {
    background-color: ${(props) => props.theme.colors.background_three};
    color: #fff;
  }
`;

export default Footer;
