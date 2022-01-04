import styled from "styled-components";

export const SectionSkills = styled.section`
  margin-top: 10rem;
  height: 40rem;

  & .cont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .cont h2 {
    font-size: 5rem;
  }

  & .cont p {
    font-size: 1.6rem;
    margin-top: 1rem;
    line-height: 4rem;
  }

  & .cont .techs {
    display: grid;
    grid-template-columns: repeat(3, 10rem);
    gap: 1rem;
    place-content: center;
    place-items: center;
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
    transform: translate(0px, -5rem) scale(1.2);
  }

  & .cont .techs .tech:nth-child(3) {
    transform: translate(40%, 40%) scale(0.8) translateY(1rem);
  }

  & .cont .techs .tech:nth-child(4) {
    transform: translate(0px, 5rem) translateX(-7rem);
  }

  & .cont .techs .tech:nth-child(5) {
    transform: translate(0px, 40%) scale(0.7) translateY(-5rem);
  }

  & .cont .techs .tech:nth-child(6) {
    transform: translate(20%, 40%) translateY(1rem);
  }

  & .cont .techs .tech:nth-child(7) {
    transform: translate(10%, 40%) scale(0.9) translateY(1rem);
  }

  & .cont .techs .tech:nth-child(8) {
    transform: translate(30%, 20%) scale(0.7) translateY(1rem);
  }

  & .cont .techs .tech:nth-child(9) {
    transform: translate(40%, 40%) scale(0.8) translateY(1rem);
  }

  & .cont .techs .tech svg {
    color: gray;
    font-size: 4rem;
  }
`;
