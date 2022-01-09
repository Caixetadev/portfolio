import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & .cont {
    margin-left: 1rem;
  }

  & .cont h1 {
    font-size: 7rem;
    letter-spacing: 0.6rem;
    margin-top: 1rem;
  }

  & .cont span {
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
  }

  & .cont h2 {
    color: gray;
    font-size: 5rem;
    margin-bottom: 6rem;
  }

  & .cont h2::after {
    content: "|";
    margin-left: 1rem;
    color: #8257e5;
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
    background-color: #8257e5;
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
