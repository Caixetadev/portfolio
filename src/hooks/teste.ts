import { useCallback, useEffect, useState } from "react";

export function useTeste() {
  const [showHeader, setShowHeader] = useState(false);

  console.log(showHeader);

  const menug = () => {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      let currentScrollpos = window.pageYOffset;

      prevScrollpos > currentScrollpos
        ? setShowHeader(false)
        : setShowHeader(true);

      prevScrollpos = currentScrollpos;
    };
  };

  useEffect(() => {
    menug();
  }, []);

  return { showHeader };
}
