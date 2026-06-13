'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  /** Delay in ms before the reveal animation starts */
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: ScrollRevealOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    // Set custom delay if provided (for stagger effect)
    if (options?.delay) {
      el.style.transitionDelay = `${options.delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.delay]);

  return ref;
}
