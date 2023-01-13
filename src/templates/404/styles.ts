import styled from "styled-components";

import Icon404 from "/public/assets/404.svg";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Icon404.src});
  background-position-y: 40%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 12.8rem;
`;

export const Paragraph = styled.p`
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
`;
