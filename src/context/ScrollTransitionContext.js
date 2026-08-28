import React, { createContext, useContext, useRef } from "react";
import { useScroll } from "framer-motion";

const ScrollTransitionContext = createContext(null);

/**
 * Tracks scroll progress across the Hero -> About handoff, keyed off the
 * About section's own position in the viewport. Because the hero is always
 * exactly one viewport tall (100dvh), "start end" (About's top hitting the
 * viewport's bottom edge) lines up with scrollY 0, and "end end" (About's
 * bottom hitting the viewport's bottom edge) lines up with scrollY equal to
 * About's own height - so progress 0 -> 1 always spans exactly the scroll
 * distance during which About scrolls from first peeking in to fully
 * filling the screen, regardless of viewport size. Hero and About both read
 * the same `scrollYProgress` motion value so the hero exit and the about
 * entrance stay in sync and reverse together when the user scrolls back up.
 */
export function ScrollTransitionProvider({ children }) {
  const boundaryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: boundaryRef,
    offset: ["start end", "end end"],
  });

  return (
    <ScrollTransitionContext.Provider value={{ boundaryRef, scrollYProgress }}>
      {children}
    </ScrollTransitionContext.Provider>
  );
}

export function useScrollTransition() {
  const ctx = useContext(ScrollTransitionContext);
  if (!ctx) {
    throw new Error(
      "useScrollTransition must be used within a ScrollTransitionProvider"
    );
  }
  return ctx;
}
