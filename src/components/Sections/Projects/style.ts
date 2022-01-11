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
`;

export default SectionProjects;
