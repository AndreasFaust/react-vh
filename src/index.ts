import React from "react";
import isMobile from "./isMobile";
import debounce from "./debounce";

interface Props {
  maxWidth?: number;
}

export function useVH({ maxWidth }: Props) {
  React.useEffect(() => {
    function setVH() {
      const { innerWidth, innerHeight, outerHeight } = window;

      document.documentElement.style.setProperty(
        "--vh",
        innerHeight * 0.01 + "px"
      );

      document.documentElement.style.setProperty(
        "--vh-total",
        outerHeight * 0.01 + "px"
      );

      const width = innerWidth > maxWidth ? maxWidth : innerWidth;
      document.documentElement.style.setProperty("--vw", width * 0.01 + "px");
    }

    const deviceIsMobile = isMobile();
    const dSetVH = debounce(setVH, 150);
    setVH();

    if (deviceIsMobile) {
      window.addEventListener("orientationchange", dSetVH);
    } else {
      window.addEventListener("resize", dSetVH);
    }
    return () => {
      if (deviceIsMobile) {
        window.removeEventListener("orientationchange", dSetVH);
      } else {
        window.removeEventListener("resize", dSetVH);
      }
    };
  }, [maxWidth]);
}

export default useVH;
