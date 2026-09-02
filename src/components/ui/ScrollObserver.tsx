"use client";
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const selector = ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Remove 'visible' when element leaves viewport so it re-animates every time you scroll down!
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const els = document.querySelectorAll(selector);
      els.forEach((el) => observer.observe(el));
    };

    observeElements();

    const mutationObs = new MutationObserver(() => {
      observeElements();
    });

    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return null;
}
