import { useCallback, useEffect, useState } from "react";

export function useOnScroll(height: number) {
  const [scrollIsGreaterThanHeight, setScrollIsGreaterThanHeight] =
    useState(false);

  const handleScroll = useCallback(() => {
    setScrollIsGreaterThanHeight(window.scrollY > height);
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollIsGreaterThanHeight };
}
