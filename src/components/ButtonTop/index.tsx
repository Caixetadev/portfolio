import { useOnScroll } from "hooks/useOnScroll";

import { FaAngleUp } from "react-icons/fa";

import { scrollTop } from "./functions/scrollTop";

import * as S from "./style";

export function ButtonTop() {
  const { scrollIsGreaterThanHeight } = useOnScroll(200);

  return (
    <S.ButtonTop
      aria-label="button top"
      scrollIsGreaterThanHeight={scrollIsGreaterThanHeight}
      onClick={scrollTop}
    >
      <FaAngleUp />
    </S.ButtonTop>
  );
}
