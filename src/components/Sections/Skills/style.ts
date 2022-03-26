import styled from "styled-components";

export const SectionSkills = styled.section`
  margin: 10rem 0;
  height: 40rem;

  & .cont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .cont p {
    font-size: 1.6rem;
    margin-top: 1rem;
    line-height: 4rem;
  }

  & .cont .techs {
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    margin-top: 5rem;
    transform: translateX(-80px);
  }

  & .cont .techs .tech {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 100%;
    background: ${(props) => props.theme.colors.bakground_secundary};
    border-radius: 0.8rem;
  }

  & .cont .techs .tech svg {
    transition: all 0.2s ease;
  }

  & .cont .techs .tech:nth-child(1) {
    transform: translate(-40%, 40%);
  }

  & .cont .techs .tech:nth-child(2) {
    transform: translate(0px, -5rem);
  }

  & .cont .techs .tech:nth-child(3) {
    transform: translate(40%, 40%);
  }

  & .cont .techs .tech:nth-child(4) {
    transform: translate(-40%, 70%);
  }

  & .cont .techs .tech:nth-child(5) {
    transform: translate(0px, 10%);
  }

  & .cont .techs .tech:nth-child(6) {
    transform: translate(40%, 70%);
  }

  & .cont .techs .tech:nth-child(7) {
    transform: translate(100%, 70%);
  }

  & .cont .techs .tech svg {
    color: gray;
    font-size: 4rem;
  }

  @media (max-width: 560px) {
    margin: 0;

    .cont {
      flex-direction: column;
      justify-content: center;
    }

    .info {
      margin: 10rem 0;
    }

    .cont .techs {
      margin: 0 auto;
      transform: translateX(0px);
      grid-template-columns: repeat(3, 5rem);
    }
    
    .cont .techs .tech {
      width: 5rem;
      height: 5rem;
    }

    svg {
      font-size: 2rem !important;
    }
  }
`;
