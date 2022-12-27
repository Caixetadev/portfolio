import { useOnScroll } from "hooks/useOnScroll";
import { useEffect, useRef } from "react";

import { FaAngleUp } from "react-icons/fa";

import BtnTop from "./style";

export function ButtonTop() {
  const { scrollIsGreaterThanHeight } = useOnScroll(200);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
