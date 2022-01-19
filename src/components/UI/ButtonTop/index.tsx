import { useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import BtnTop from "./style";

export default function ButtonTop() {
  const buttonEl = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener(`scroll`, () => {
      if (window.scrollY < 200) {
        buttonEl.current!.style.opacity = "0";
      } else {
        buttonEl.current!.style.opacity = "1";
      }
    });
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <BtnTop href="#" ref={buttonEl} onClick={scrollTop}>
      <FaAngleUp />
    </BtnTop>
  );
}
