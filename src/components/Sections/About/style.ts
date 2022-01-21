import styled from "styled-components";

export const SectionAbout = styled.section`
  background: ${(props) => props.theme.colors.bakground_secundary};
  height: 40rem;
  padding-top: 11rem;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);

  & .conteudo p {
    line-height: 4rem;
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
