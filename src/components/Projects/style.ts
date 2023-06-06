import styled from "styled-components";

import Project from "/public/assets/projects.svg";

export const SectionProjects = styled.section`
  background-image: url(${Project.src});
  background-repeat: no-repeat;
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  height: auto;

  @media (max-width: 600px) {
    padding: 9rem 0;
    background-size: 380px;
  }
`;
