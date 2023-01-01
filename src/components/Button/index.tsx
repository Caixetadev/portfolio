import { ButtonProps } from "./type";

import * as S from "./style";

export function Button({ children, link }: ButtonProps) {
  return (
    <S.Button target="_blank" href={link}>
      {children}
    </S.Button>
  );
}
