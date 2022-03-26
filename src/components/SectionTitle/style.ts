import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 4rem;
    position: relative;
  }

  h2::before {
    content: "";
    height: 1.7rem;
    display: block;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.background_three};
    position: absolute;
    bottom: 2px;
    z-index: -1;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 3rem;
    }
  }
`;
