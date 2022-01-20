import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  margin-left: 1rem;

  & img {
    border-radius: 1rem;
  }

  h1 {
    font-size: 6rem;
    letter-spacing: 0.6rem;
    margin-top: 1rem;
  }

  span {
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
  }

  h2 {
    color: gray;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  h2::after {
    content: "|";
    margin-left: 0.5rem;
    color: ${(props) => props.theme.colors.background_three};
    opacity: 1;
    animation: blink 1s infinite;
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

  a {
    background-color: ${(props) => props.theme.colors.background_three};
    padding: 1.2rem 4rem;
    color: #fff;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    max-width: 5rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(1.2);
  }
`;
