import styled from "styled-components";

type Props = {
  color: string;
};

export const SectionProjects = styled.section`
  background-color: transparent;
  @media (max-width: 560px) {
    margin-top: 10rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
`;

export const List = styled.ul`
  display: flex;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.bakground_secundary};
  height: 40rem;
  width: 50rem;
  margin-bottom: 5rem;
  border-radius: 1rem;

  img {
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 560px) {
    width: 30rem;
    height: 30rem;
    margin: 0 auto 3rem auto;
  }

  @media (max-width: 300px) {
    width: 20rem;
  }
`;

export const Infos = styled.div`
  padding: 0 1rem;
`;

export const Lang = styled.li<Props>`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 0.3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: #303030;

  & + li {
    margin-left: 1rem;
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Line = styled.hr`
  margin-top: 1rem;
  opacity: 0.2;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  & + li {
    margin-left: 2rem;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.background_three};
  }

  svg {
    width: 2.3rem;
    height: 2.3rem;
    transition: all 0.2s ease;
  }

  &:last-child svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Link = styled.a``;

export const Description = styled.div`
  padding: 1rem;

  p {
    font-size: 1.4rem;
    line-height: 1.5;
    overflow-wrap: break-word;
  }
`;
