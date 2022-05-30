import { Container } from "../../styles/global";

import * as S from "./style";
import { icons } from "./icons";
import { Button } from "../Button";

export function Hero() {
  return (
    <S.SectionHome id="home">
      <Container>
        <S.Wrapper>
          <S.Name>
            <span>{"I' am,"}</span>
            <br />
            Rafael Caixeta
          </S.Name>
          <S.Description>
            Front-end developer, specialized in creating modern websites and
            creative solutions for the internet.
          </S.Description>
          <S.Icons>
            {icons.map(({ image }) => (
              <S.Icon key={image} src={image} />
            ))}
          </S.Icons>
          <Button>talk me!</Button>
        </S.Wrapper>
        <S.Box>
          <S.Arrow />
          <S.Arrow />
          <S.Arrow />
        </S.Box>
      </Container>
    </S.SectionHome>
  );
}
