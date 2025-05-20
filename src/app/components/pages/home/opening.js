"use client";

import { useCallback } from "react";
import './components/text.css';
import Particle from "@/app/components/styles/animation/particle";

export default function Opening() {
  const handleDiscoverClick = useCallback((e) => {
    e.preventDefault();
    const target = document.querySelector("#discover-more");
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <section className="relative isolate flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 text-center -mt-12 sm:-mt-4">
      <Particle />

      <a
        href="https://opus.lumedot.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center rounded-full 
        border border-current/50 bg-current/5 px-4 py-2 text-xs font-medium 
        uppercase tracking-wide backdrop-blur-sm shadow-sm transition-all 
        hover:scale-105 hover:bg-fuchsia-600/50"
      >
        Upload your first book on lumedot →
      </a>

      {/* Heading */}
      <h1
        className="gradient-heading relative z-10 mt-8 max-w-4xl
                   text-4xl md:text-6xl font-bold leading-tight">
        What if the platform worked for you?
      </h1>

      {/* Sub-heading */}
      <p className="relative z-10 mt-4 max-w-xl text-sm text-current/75 md:text-lg">
        For authors who still care about how stories and ideas move.
      </p>

      {/* Primary CTAs */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://lumedot.com/dot"
          target="_blank"
          rel="noopener noreferrer"
          data-cta="upload"
          className="inline-flex items-center justify-center rounded-full 
          border border-current/50 bg-current/5 px-8 py-2 text-sm font-medium backdrop-blur-sm transition-all
          hover:scale-105 hover:bg-fuchsia-600/50"
        >
          Open lumedot →
        </a>

        <a
          href="#discover-more"
          onClick={handleDiscoverClick}
          className="button inline-flex rounded-full border border-current/50 px-8 py-2"
        >
          Discover more
        </a>
      </div>
    </section>
  );
}