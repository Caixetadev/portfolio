import { useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import BtnTop from "./style";

export default function ButtonTop() {
  const buttonEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 200) {
        buttonEl.current!.style.display = "flex";
      } else {
        buttonEl.current!.style.display = "none";
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
