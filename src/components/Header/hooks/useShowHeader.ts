import { useEffect, useState } from "react";

export function useShowHeader() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;

    function handleScroll() {
      let currentScroll = window.scrollY;

      prevScroll > currentScroll ? setShowHeader(false) : setShowHeader(true);

      prevScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { showHeader };
}
