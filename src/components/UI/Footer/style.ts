import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 10rem;
  background-color: ${(props) => props.theme.colors.bakground_secundary};

  & .icons ul {
    display: flex;
  }

  & .icons ul li a {
    margin-bottom: 4rem;
    border-radius: 0.8rem;
    background-color: #202024;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8257e5;
    transition: all 0.2s ease;
  }

  & .icons ul li + li {
    margin-left: 3rem;
  }

  & .icons svg {
    font-size: 3.3rem;
    cursor: pointer;
  }

  & .icons ul li a:hover {
    background-color: #8257e5;
    color: #fff;
  }

  & p {
    font-size: 1.6rem;
  }
`;

export const Container = styled.div`
  height: 15rem;
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Footer;
