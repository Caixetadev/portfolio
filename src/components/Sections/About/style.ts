import styled from "styled-components";

export const SectionAbout = styled.section`
  background: ${(props) => props.theme.colors.bakground_secundary};
  height: 40rem;
  padding-top: 11rem;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);

  & .conteudo h2 {
    font-size: 4rem;
    position: relative;
  }

  & .conteudo h2::before {
    content: "";
    height: 1.7rem;
    display: block;
    width: 8rem;
    background-color: #8257e5;
    position: absolute;
    bottom: 2px;
    z-index: -1;
  }

  & .conteudo p {
    line-height: 4rem;
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
