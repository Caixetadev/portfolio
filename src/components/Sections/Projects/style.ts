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
    background-color: #8257e5;
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

  & .header ul li .github svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  & .header ul li .link svg {
    width: 2rem;
    height: 2rem;
  }

  & .header ul li + li {
    margin-left: 2rem;
  }

  & img {
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
  }
`;

export default SectionProjects;
