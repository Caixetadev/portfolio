import { ReactNode, useEffect } from "react";

import { useToggle } from "hooks/useToggle";

type DropdownProps = {
  children: ReactNode;
  title: any;
};

import * as S from "./style";

export function Dropdown({ title, children }: DropdownProps) {
  const { state, toggle } = useToggle();

  useEffect(() => {
    state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [state]);

  return (
    <>
      <S.Wrapper isOpen={state}>
        <S.Title onClick={toggle}>{title}</S.Title>
        <S.Content onClick={toggle}>{children}</S.Content>
        <S.Overlay onClick={toggle} />
      </S.Wrapper>
    </>
  );
}
