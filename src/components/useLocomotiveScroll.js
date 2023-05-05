import { useEffect } from "react";

let scroll;
export default function useLocoScroll() {
  useEffect(() => {
    // @ts-ignore
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
        // lerp: 0.12,
      });
    });
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);
}
export { scroll };
