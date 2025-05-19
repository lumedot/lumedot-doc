"use client";

import React, { useState, useEffect, useRef } from "react";
import LumedotSvg from "@/app/components/styles/svg/lumedot-svg";
import ThemeToggle from "@/app/components/styles/themes/theme-toggle";

export default function HeaderBase() {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const localButtonRef = useRef(null);

  const isVisible = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const allButtons = Array.from(
        document.querySelectorAll('[data-cta="upload"]')
      );

      const visibleOtherButtons = allButtons.filter(
        (btn) => btn !== localButtonRef.current && isVisible(btn)
      );

      setShowButton(visibleOtherButtons.length === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const base = "sticky top-2 mx-4 md:mr-6 z-50 transition-all duration-300";
  const frosted = "bg-white/25 border border-current/25 shadow-sm rounded-2xl";

  return (
    <header className={`${base} ${scrolled ? frosted : "border border-transparent bg-transparent"}`}>
      <div className="py-[10px] md:py-[10px] px-[10px] md:px-[17.5px] flex items-center justify-between backdrop-blur-md rounded-2xl">
        <a href="/" className="flex items-center">
          <LumedotSvg
            variant="icon"
            className="block md:hidden"
            style={{ width: "28px", height: "28px" }}
          />
          <LumedotSvg
            variant="logo"
            className="hidden md:block -mt-[7.5px]"
            style={{ width: "105px", height: "35px" }}
          />
        </a>

        {/* CTA Button */}
        <div className="relative flex flex-col items-center sm:flex-row min-h-[25px]">
          <div
            className={`
              transition-opacity duration-400 ease-in-out
              ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <a
              ref={localButtonRef}
              href="https://opus.lumedot.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="upload"
              className="relative text-center 
              z-10 inline-flex items-center 
              rounded-full border border-current/50 
              bg-current/5 px-4 py-2 text-xs font-medium 
              uppercase tracking-wide backdrop-blur-sm 
              shadow-sm transition-all hover:scale-105 
              hover:bg-fuchsia-600/50"
            >
              Publish your book →
            </a>
          </div>
        </div>


        <div className="flex items-center justify-end">
          <ThemeToggle />
          <a
            href="https://lumedot.com/dot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-teal-400"
          >
            <svg
             className="w-5 h-5 ml-[2.5px]"
             fill="none"
             stroke="currentColor"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
             viewBox="0 0 24 24">
             <path d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
