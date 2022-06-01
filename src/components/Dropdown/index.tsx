import Image from "next/image";
import { ReactNode, useState } from "react";

type DropdownProps = {
  children: ReactNode;
  title: any;
};

import * as S from "./style";

export function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <S.Wrapper>
      <S.Title onClick={handleToggle}>{title}</S.Title>
      <S.Content isOpen={isOpen}>{children}</S.Content>
    </S.Wrapper>
  );
}
