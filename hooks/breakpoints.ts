"use client"

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const getMatches = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export function useBreakpoints() {
  return {
    is468px: useMediaQuery("(max-width: 468px)"),
    is768px: useMediaQuery("(max-width: 768px)"),
    is1024px: useMediaQuery("(max-width: 1024px)"),
    is1280px: useMediaQuery("(max-width: 1280px)"),
    is1536px: useMediaQuery("(max-width: 1536px)"),

    isMobile: useMediaQuery("(max-width: 767px)"),
    isTablet: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isDesktop: useMediaQuery("(min-width: 1024px)"),
  };
}