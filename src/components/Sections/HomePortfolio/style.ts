import styled from "styled-components";

export const SectionHome = styled.section`
  .bg {
    display: flex;
    justify-content: space-between;
  }

  & .bg .left {
    background-color: #0e141b;
    height: 100vh;
    width: 2vw;
    position: absolute;
    top: 70px;
    right: 0;
  }

  & .bg .rigth {
    background-color: #0e141b;
    height: 100vh;
    width: 23vw;
  }

  & .cont {
    margin: 8rem auto;
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

  & .cont a {
    margin-left: 2rem;
    background-color: #0e141b;
    padding: 2rem 5rem;
    color: #fff;
    font-size: 1.8rem;
    /* border-radius: 0.8rem; */
    cursor: pointer;
    transition: filter 0.2s;
  }

  & .cont a:hover {
    filter: brightness(1.2);
  }
`;
