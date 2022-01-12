import styled from "styled-components";

const SectionProjects = styled.section`
  & h2 {
    font-size: 4rem;
    position: relative;
  }

  & h2::before {
    content: "";
    height: 1.7rem;
    display: block;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.background_three};
    position: absolute;
    bottom: 2px;
    z-index: -1;
  }

  & .cont {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    margin-top: 5rem;
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

  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  & .header ul {
    display: flex;
  }

  & .header ul li svg {
    transition: all 0.2s ease;
  }

  & .header ul li .github svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  & .header ul li:hover svg {
    color: ${(props) => props.theme.colors.background_three};
  }

  & .header ul li .link svg {
    width: 2rem;
    height: 2rem;
  }

  & .header ul li + li {
    margin-left: 2rem;
  }

  & .langs ul li.yellow {
    background-color: #efd81d;
    color: #303030;
  }

  & .langs ul li.pink {
    background-color: pink;
    color: #303030;
  }

  & .langs ul li.blue {
    background-color: #61dafb;
    color: #303030;
  }

  & .langs ul li.green {
    background-color: #649d59;
    color: #303030;
  }

  & .langs ul li.white {
    background-color: #fff;
    color: #303030;
  }

  & .langs ul li.ts {
    background-color: #2f74c0;
    color: #303030;
  }

  & .langs ul li.styled {
    background-color: #db7093;
    color: #303030;
  }

  & .langs {
    padding: 0 1rem;
  }

  & hr {
    margin-top: 1rem;
    opacity: 0.2;
  }

  & .langs ul {
    display: flex;
  }

  & .langs ul li + li {
    margin-left: 1rem;
  }

  & .langs ul li {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  & .desc {
    padding: 1rem;
    font-size: 1.4rem;
  }

  & .desc p {
    overflow-wrap: break-word;
  }

  & .langs ul li span {
    font-weight: bold;
  }

  & .langs ul li svg {
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
`;

export default SectionProjects;
