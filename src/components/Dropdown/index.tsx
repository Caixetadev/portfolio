import { ReactNode } from "react";

import { useToggle } from "hooks/useToggle";

type DropdownProps = {
  children: ReactNode;
  title: any;
};

import * as S from "./style";

export function Dropdown({ title, children }: DropdownProps) {
  const { state, toggle } = useToggle();

  return (
    <S.Wrapper>
      <S.Title onClick={toggle}>{title}</S.Title>
      <S.Content isOpen={state}>{children}</S.Content>
    </S.Wrapper>
  );
}
