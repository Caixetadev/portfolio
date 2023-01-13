import { ButtonProps } from "./type";

import * as S from "./style";

export function Button({ children, link }: ButtonProps) {
  return (
    <>
      {link && <S.ButtonLink href={link}>{children}</S.ButtonLink>}
      {!link && <S.Button>{children}</S.Button>}
    </>
  );
}
