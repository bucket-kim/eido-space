import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMathces] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMathces(media.matches);
    }
    const listener = () => {
      setMathces(media.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addEventListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeEventListener(listener);
      }
    };
  }, [matches, query]);
  return matches;
};

export default useMediaQuery;

export const useIsSmall = () => useMediaQuery("(max-width: 390px)");
