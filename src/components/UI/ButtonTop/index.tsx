import { useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import BtnTop from "./style";

export default function ButtonTop() {
  const buttonEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        buttonEl.current!.style.cssText = "opacity: 1";
      } else {
        buttonEl.current!.style.cssText = "opacity: 0";
      }
    };
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <BtnTop ref={buttonEl} onClick={scrollTop}>
      <FaAngleUp />
    </BtnTop>
  );
}
