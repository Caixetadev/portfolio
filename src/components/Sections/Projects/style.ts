import styled from "styled-components";

const SectionProjects = styled.section`
  background-color: transparent;
  @media (max-width: 560px) {
    margin-top: 10rem;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.bakground_secundary};
  height: 40rem;
  width: 50rem;
  margin-bottom: 5rem;
  border-radius: 1rem;

  & h3 {
    font-size: 2.5rem;
  }

  & ul li span {
    font-weight: bold;
  }

  & ul li svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
  }

  & img {
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
    transition: all 0.2s ease;
  }

  & img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 560px) {
    width: 30rem;
    height: 30rem;
    margin: 0 auto 3rem auto;
  }

  @media (max-width: 300px) {
    width: 20rem;
  }
`;

export const Langs = styled.div`
  & ul li.js {
    background-color: #efd81d;
    color: #303030;
  }

  & ul li.sass {
    background-color: pink;
    color: #303030;
  }

  & ul li.react {
    background-color: #61dafb;
    color: #303030;
  }

  & ul li.node {
    background-color: #62aa53;
    color: #303030;
  }

  & ul li.express {
    background-color: #fff;
    color: #303030;
  }

  & ul li.ts {
    background-color: #48a0ff;
    color: #303030;
  }

  & ul li.styled {
    background-color: #f781a8;
    color: #303030;
  }

  & {
    padding: 0 1rem;
  }

  & hr {
    margin-top: 1rem;
    opacity: 0.2;
  }

  & ul {
    display: flex;
  }

  & ul li + li {
    margin-left: 1rem;
  }

  & ul li {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  ul {
    display: flex;
  }

  ul li svg {
    transition: all 0.2s ease;
  }

  ul li .github svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  ul li:hover svg {
    color: ${(props) => props.theme.colors.background_three};
  }

  ul li .link svg {
    width: 2rem;
    height: 2rem;
  }

  ul li + li {
    margin-left: 2rem;
  }
`;

export const Description = styled.div`
  padding: 1rem;
  font-size: 1.4rem;

  p {
    overflow-wrap: break-word;
  }
`;

export default SectionProjects;
