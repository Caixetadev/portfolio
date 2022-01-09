import styled from "styled-components";

const Section404 = styled.section`
  & h1 {
    font-size: 15rem;
  }
`;

export default function Page404() {
  return (
    <Section404>
      <h1>404</h1>
    </Section404>
  );
}
