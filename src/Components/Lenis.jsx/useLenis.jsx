import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust smoothness (0.1 = very smooth, 1 = default)
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      direction: "vertical", // "horizontal" for horizontal scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
