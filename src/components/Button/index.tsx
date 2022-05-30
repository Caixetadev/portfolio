import { ReactNode } from "react";
import * as S from "./style";

export function Button({
  children,
  link,
}: {
  children: ReactNode;
  link?: string;
}) {
  return (
    <S.Button target="_blank" href={link}>
      {children}
    </S.Button>
  );
}
