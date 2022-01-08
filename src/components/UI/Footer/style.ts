import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 10rem;
  background-color: ${(props) => props.theme.colors.bakground_secundary};

  & .icons ul {
    display: flex;
  }

  & .icons ul li + li {
    margin-left: 3rem;
  }

  & .icons svg {
    margin-bottom: 4rem;
    font-size: 3.3rem;
    cursor: pointer;
  }

  & .icons svg:hover {
    filter: brightness(0.7);
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
