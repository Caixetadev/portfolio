import { ReactNode } from "react";
import { Container } from "../../styles/global";

import * as S from "./style";

export function Title({ children }: { children: ReactNode }) {
  return (
    <Container>
      <S.Wrapper>
        <S.Title data-aos="fade-right">{children}</S.Title>
      </S.Wrapper>
    </Container>
  );
}
