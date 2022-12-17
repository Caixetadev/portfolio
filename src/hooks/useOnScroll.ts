import { useEffect, useState } from "react";

export function useOnScroll(height: number = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollIsGreaterThanHeight = () =>
      window.scrollY > height ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener("scroll", scrollIsGreaterThanHeight);

    return () =>
      window.removeEventListener("scroll", scrollIsGreaterThanHeight);
  });

  return { isScrolled };
}
