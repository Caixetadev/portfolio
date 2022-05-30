import styled from "styled-components";

export const Button = styled.a`
  width: 18rem;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 9.9rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
