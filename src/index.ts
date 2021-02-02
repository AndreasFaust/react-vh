import React from "react";
import isMobile from "./isMobile";
import debounce from "./debounce";

export function useVH() {
  React.useEffect(() => {
    function setVH() {
      const { innerHeight, outerHeight } = window;

      document.documentElement.style.setProperty(
        "--vh",
        innerHeight * 0.01 + "px"
      );

      document.documentElement.style.setProperty(
        "--vh-total",
        outerHeight * 0.01 + "px"
      );
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
  }, []);
}

export default useVH;
