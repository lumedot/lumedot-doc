"use client";

import { useCallback } from "react";
import Particle from "@/app/components/styles/animations/particle-themed";

export default function Opening() {
  const handleDiscoverClick = useCallback((e) => {
    e.preventDefault();
    const target = document.querySelector("#discover-more");
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <section className="relative isolate flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 text-center">
      <Particle />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:via-white/0 before:to-white/5"
      />

      <a
        href="https://opus.lumedot.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center rounded-full border border-current/50 bg-current/5 px-4 py-2 text-xs font-medium uppercase tracking-wide backdrop-blur-sm shadow-sm transition-all hover:scale-105 hover:bg-fuchsia-600/50"
      >
        Upload your first book on lumedot →
      </a>

      {/* Heading */}
      <h1
        className="relative z-10 mt-6 max-w-4xl
                   text-4xl md:text-6xl font-bold leading-tight
                   text-transparent bg-clip-text bg-gradient-to-r
                   from-black via-gray-800 to-gray-600
                   dark:from-white dark:via-gray-200 dark:to-gray-400
                   drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]
                   dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
        What if the platform worked for you?
      </h1>

      {/* Sub-heading */}
      <p className="relative z-10 mt-4 max-w-xl text-sm text-current/75 md:text-lg">
        For authors who still care about how stories and ideas move.
      </p>

      {/* Primary CTAs */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://lumedot.com/dot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-current/50 bg-current/5 px-8 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:scale-105 hover:bg-fuchsia-600/50"
        >
          Open lumedot →
        </a>

        <a
          href="#discover-more"
          onClick={handleDiscoverClick}
          className="button inline-flex px-8 py-2"
        >
          Discover more
        </a>
      </div>
    </section>
  );
}
