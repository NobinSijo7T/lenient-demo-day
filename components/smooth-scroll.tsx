"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.85,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.75,
      touchMultiplier: 0.9,
      smoothWheel: true,
      syncTouch: false,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return children;
}
