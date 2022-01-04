import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  & .bg .left {
    background-color: ${(props) => props.theme.colors.bakground_secundary};
    height: 100%;
    width: 2vw;
    position: absolute;
    top: 70px;
    right: 0;
  }

  & .bg .rigth {
    background-color: ${(props) => props.theme.colors.bakground_secundary};
    height: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    width: 23vw;
  }

  & .cont {
    margin: 0 auto 15rem auto;
  }

  & .cont h1 {
    font-size: 15rem;
    letter-spacing: 0.6rem;
  }

  & .cont span {
    margin-left: 2rem;
    letter-spacing: 0.2rem;
    font-size: 1.8rem;
  }

  & .cont h2 {
    color: gray;
    margin-left: 2rem;
    font-size: 5rem;
    margin-bottom: 8rem;
  }

  & .cont h2::after {
    content: "|";
    margin-left: 0.5rem;
    opacity: 1;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  & .cont a {
    margin-left: 2rem;
    background-color: ${(props) => props.theme.colors.bakground_secundary};
    padding: 2rem 5rem;
    color: #fff;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    max-width: 5rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  & .cont a:hover {
    filter: brightness(1.2);
  }
`;
