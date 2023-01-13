import { Button } from "components";

import * as S from "./styles";

export function Page404() {
  return (
    <S.Main>
      <S.Title>404</S.Title>
      <S.Paragraph>
        The page you were looking for was cither removed or doesnt exist.
      </S.Paragraph>
      <Button link="/">Return Home</Button>
    </S.Main>
  );
}
