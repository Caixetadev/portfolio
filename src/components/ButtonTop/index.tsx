import { useOnScroll } from "hooks/useOnScroll";

import { FaAngleUp } from "react-icons/fa";

import { scrollTop } from "./functions/scrollTop";

import BtnTop from "./style";

export function ButtonTop() {
  const { scrollIsGreaterThanHeight } = useOnScroll(200);

  return (
    <BtnTop
      aria-label="button top"
      scrollIsGreaterThanHeight={scrollIsGreaterThanHeight}
      onClick={scrollTop}
    >
      <FaAngleUp />
    </BtnTop>
  );
}
